import { execSync } from "child_process";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const envPath = resolve(root, ".env");
const templatePath = resolve(root, ".mcp.json.template");
const outputPath = resolve(root, ".mcp.json");

// Step 1: Attempt dotenv-vault pull (non-fatal if not authed)
try {
  execSync("npx dotenv-vault pull", { cwd: root, stdio: "pipe" });
  console.log("dotenv-vault pull succeeded");
} catch {
  console.warn(
    "dotenv-vault pull failed (not logged in?). Continuing with existing .env if present."
  );
}

// Step 2: Read template
if (!existsSync(templatePath)) {
  console.error("Missing .mcp.json.template — cannot generate .mcp.json");
  process.exit(1);
}
let template = readFileSync(templatePath, "utf-8");

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
    // Strip surrounding quotes
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    vars[key] = val;
  }
  console.log(`Loaded ${Object.keys(vars).length} var(s) from .env`);
} else {
  console.warn("No .env file found — placeholders will remain unresolved");
}

// Step 4: Substitute ${VAR} patterns
const unresolved: string[] = [];
const result = template.replace(/\$\{(\w+)\}/g, (match, name) => {
  if (name in vars) return vars[name];
  unresolved.push(name);
  return match;
});

if (unresolved.length > 0) {
  console.warn(`Unresolved variables: ${unresolved.join(", ")}`);
}

// Step 5: Write .mcp.json
writeFileSync(outputPath, result, "utf-8");
console.log("Generated .mcp.json");
