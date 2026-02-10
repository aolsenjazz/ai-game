# CLAUDE.md

Project context for Claude Code. This file is loaded automatically.

## Project Overview

Social/texting game app — Reddit-meets-texting format where users share conversation screenshots and others react/comment. Features feed, post detail with threaded replies, voting, subreddit-like communities.

## Tech Stack

- **Package manager:** pnpm (monorepo with pnpm workspaces)
- **Language:** TypeScript (strict mode)
- **Frontend:** React 18 + Redux Toolkit + TanStack Router + Tailwind CSS
- **Build:** Vite
- **Native:** Capacitor (iOS + Android)
- **Testing:** Jest + ts-jest
- **Linting:** ESLint + Prettier (auto-sorted imports)
- **Git hooks:** Husky pre-push runs lint, tsc, test
- **Secrets:** dotenv-vault (see README.md for setup)

## Monorepo Structure

- `app/` — React frontend (Vite + Capacitor)
- `core/` — Shared types and utilities
- `design-tokens/` — Tokens Studio → Style Dictionary → CSS variables
- `services/*` — Backend services (placeholder)

## Design Tokens Pipeline

Tokens Studio (Figma plugin) → `design-tokens/tokens/*.json` → Style Dictionary → `design-tokens/dist/css/*.css` → Tailwind CSS variables

Build tokens: `pnpm --filter @game/design-tokens build`
Watch tokens: `pnpm --filter @game/design-tokens start`

Color palettes: sangria, gold-drop, golden-fizz, chathams-blue, lima, tapa, jumbo, pale-sky
Themes: light + dark (via CSS class `.light` / `.dark`)

## Figma Design System

**File key:** `iphKT2yNh7JpeeBJ4a5jMm`

| Page | Node ID | Use `get_screenshot` / `get_metadata` / `get_design_context` with these |
|------|---------|-------------------------------------------------------------------------|
| Brand | `0:1` | Speech bubble logo — retro/neon orange/yellow/red, light + dark variants |
| Primitives | `73:619` | Color palettes (Sangria, Teal, Green, Yellow, Orange, Red, Magenta, Purple, Blue, Warm Gray, Gray, Cold Gray) — based on Carbon Color System |
| Icons | `95:22` | Large icon library, outline and filled variants |
| Screens | `100:148` | App screen designs — feed, post detail, chat/conversation, nav, light/dark |
| Components | `92:488` | Assembled mobile components — feed cards, comment threads, bottom nav |
| Tokens/Reference | `101:447` | Full color grid, user flows/wireframes, example content |

To use Figma tools, pass `fileKey: "iphKT2yNh7JpeeBJ4a5jMm"` and the node ID from the table above.

## Common Commands

```sh
pnpm start          # Start all packages (dev mode)
pnpm test           # Run all tests
pnpm tsc            # Type-check all packages
pnpm lint           # Lint all packages
pnpm lint:fix       # Auto-fix lint issues
pnpm pull-env       # Pull secrets + regenerate .mcp.json
```
