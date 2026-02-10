# ai-game

## Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [pnpm](https://pnpm.io/) (`npm install -g pnpm`)
- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) CLI

## Getting started

```sh
git clone https://github.com/aolsenjazz/ai-game.git
cd ai-game
pnpm install
```

`pnpm install` will automatically try to pull secrets from **dotenv-vault** and generate the MCP config (`.mcp.json`). On first run it will fail to pull because you haven't authenticated yet — that's expected. Follow the instructions it prints to finish setup:

```sh
npx dotenv-vault login   # one-time vault auth — ask a teammate for org access
pnpm run pull-env        # pull secrets + regenerate .mcp.json
```

Once that succeeds, restart Claude Code so it picks up the new MCP config.

## Secrets management

Secrets live in `.env` (gitignored) and are synced via [dotenv-vault](https://www.dotenv.org/docs). The encrypted vault file (`.env.vault`) is committed — it's safe to share.

| Command | What it does |
|---|---|
| `npx dotenv-vault login` | Authenticate with the vault (one-time) |
| `pnpm run pull-env` | Pull latest secrets and regenerate `.mcp.json` |
| `npx dotenv-vault push` | Push local `.env` changes to the vault |

See `.env.example` for the required keys and where to create them.

## MCP integrations

The project uses MCP servers for Claude Code tooling. The config is generated from `.mcp.json.template` by substituting `${VAR}` placeholders with values from `.env`.

| Server | Auth |
|---|---|
| Linear | OAuth (configured in Claude Code) |
| Figma | OAuth (configured in Claude Code) |
| GitHub | Personal access token via `GITHUB_PERSONAL_ACCESS_TOKEN` |
