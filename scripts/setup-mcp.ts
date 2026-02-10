import { execSync } from "child_process";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const envPath = resolve(root, ".env");
const templatePath = resolve(root, ".mcp.json.template");
const outputPath = resolve(root, ".mcp.json");

const BLUE = "\x1b[34m";
const YELLOW = "\x1b[33m";
const GREEN = "\x1b[32m";
const RED = "\x1b[31m";
const DIM = "\x1b[2m";
const BOLD = "\x1b[1m";
const RESET = "\x1b[0m";

function info(msg: string) {
  console.log(`${BLUE}i${RESET} ${msg}`);
}
function success(msg: string) {
  console.log(`${GREEN}✓${RESET} ${msg}`);
}
function warn(msg: string) {
  console.log(`${YELLOW}!${RESET} ${msg}`);
}
function error(msg: string) {
  console.log(`${RED}✗${RESET} ${msg}`);
}

console.log();
info(`${BOLD}Setting up MCP config...${RESET}`);
console.log();

// Step 1: Attempt dotenv-vault pull
let vaultPulled = false;
try {
  execSync("npx dotenv-vault pull", { cwd: root, stdio: "pipe" });
  success("Pulled secrets from dotenv-vault");
  vaultPulled = true;
} catch {
  warn("dotenv-vault pull failed — you may not be logged in yet");
}

// Step 2: Read template
if (!existsSync(templatePath)) {
  error("Missing .mcp.json.template — cannot generate .mcp.json");
  process.exit(1);
}
const template = readFileSync(templatePath, "utf-8");

// Step 3: Parse .env if it exists
const vars: Record<string, string> = {};
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, "utf-8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    let val = trimmed.slice(idx + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    vars[key] = val;
  }
  success(`Loaded ${Object.keys(vars).length} variable(s) from .env`);
} else {
  warn("No .env file found");
}

// Step 4: Substitute ${VAR} patterns
const unresolved: string[] = [];
const result = template.replace(/\$\{(\w+)\}/g, (match, name) => {
  if (name in vars) return vars[name];
  unresolved.push(name);
  return match;
});

// Step 5: Write .mcp.json
writeFileSync(outputPath, result, "utf-8");
success("Generated .mcp.json");

// Step 6: Print actionable next-steps if setup is incomplete
const needsAction = !vaultPulled || !existsSync(envPath) || unresolved.length > 0;

if (needsAction) {
  console.log();
  console.log(`${YELLOW}${BOLD}── Action required ──${RESET}`);
  console.log();

  if (!vaultPulled && !existsSync(envPath)) {
    console.log(`  This project uses ${BOLD}dotenv-vault${RESET} to share secrets.`);
    console.log(`  Run these commands to finish setup:`);
    console.log();
    console.log(`    ${DIM}1.${RESET} npx dotenv-vault login   ${DIM}# authenticate with the vault (one-time)${RESET}`);
    console.log(`    ${DIM}2.${RESET} pnpm run pull-env        ${DIM}# pull secrets and regenerate .mcp.json${RESET}`);
    console.log();
  } else if (!vaultPulled) {
    console.log(`  Vault auth missing. Run to authenticate:`);
    console.log();
    console.log(`    npx dotenv-vault login`);
    console.log();
    console.log(`  Then refresh secrets:`);
    console.log();
    console.log(`    pnpm run pull-env`);
    console.log();
  }

  if (unresolved.length > 0) {
    warn(`Unresolved variables in .mcp.json: ${BOLD}${unresolved.join(", ")}${RESET}`);
    console.log(`  These MCP integrations won't work until the variables are set.`);
    console.log(`  Check ${DIM}.env.example${RESET} for the required keys.`);
    console.log();
  }
} else {
  console.log();
  success(`${BOLD}Setup complete!${RESET} MCP integrations are ready.`);
  console.log(`  Restart Claude Code to pick up the new config.`);
  console.log();
}
