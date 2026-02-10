import { execSync } from "child_process";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const envPath = resolve(root, ".env");
const templatePath = resolve(root, ".mcp.json.template");
const outputPath = resolve(root, ".mcp.json");

const YELLOW = "\x1b[33m";
const GREEN = "\x1b[32m";
const RED = "\x1b[31m";
const DIM = "\x1b[2m";
const BOLD = "\x1b[1m";
const RESET = "\x1b[0m";

function success(msg: string) {
  console.log(`${GREEN}✓${RESET} ${msg}`);
}
function warn(msg: string) {
  console.log(`${YELLOW}!${RESET} ${msg}`);
}

console.log();

// Step 1: Attempt dotenv-vault pull
const hadEnvBefore = existsSync(envPath);
try {
  execSync("npx dotenv-vault pull", { cwd: root, stdio: "pipe" });
} catch {
  // silently continue — we check for .env below
}

// Step 2: Read template
if (!existsSync(templatePath)) {
  console.log(`${RED}✗${RESET} Missing .mcp.json.template — cannot generate .mcp.json`);
  process.exit(1);
}
const template = readFileSync(templatePath, "utf-8");

// Step 3: Parse .env if it exists
const vars: Record<string, string> = {};
const hasEnv = existsSync(envPath);
if (hasEnv) {
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
    if (val) vars[key] = val;
  }
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

// Step 6: Report results
if (unresolved.length === 0) {
  success(`${BOLD}MCP config ready.${RESET} Restart Claude Code to connect.`);
  console.log();
} else {
  warn(`${BOLD}MCP config generated, but ${unresolved.length} secret(s) are missing.${RESET}`);
  console.log();
  console.log(`  The following variables need values: ${BOLD}${unresolved.join(", ")}${RESET}`);
  console.log();
  console.log(`  To fix this, run:`);
  console.log();
  console.log(`    ${BOLD}npx dotenv-vault login${RESET}   ${DIM}# one-time — ask a teammate for vault access${RESET}`);
  console.log(`    ${BOLD}pnpm run pull-env${RESET}        ${DIM}# pulls secrets and regenerates .mcp.json${RESET}`);
  console.log();
  console.log(`  Then restart Claude Code to connect the MCP integrations.`);
  console.log();
}
