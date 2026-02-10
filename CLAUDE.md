# CLAUDE.md

Project context for Claude Code. This file is loaded automatically.

## Project Overview

Social/texting game app — Reddit-meets-texting format where users share conversation screenshots and others react/comment. Features feed, post detail with threaded replies, voting, subreddit-like communities.

## Tech Stack

- **Package manager:** pnpm
- **Language:** TypeScript
- **Runtime:** Node.js v18+
- **Secrets:** dotenv-vault (see README.md for setup)

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

### Design Tokens

Managed via **Tokens Studio** plugin, synced to a Git repo.

- Color naming: `ref/color/{palette}/{scale}` (e.g. `ref/color/sangria/500` = `#ff3232`)
- Spacing naming: `sem/space/container/inside/{size}` (e.g. `md` = `16`)
- Typography: Inter font family, weights 400/475
- Shadows: Multi-layer drop shadows (e.g. `Shadow Hard/Extra Small`)
