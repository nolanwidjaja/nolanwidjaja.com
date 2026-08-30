# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

Personal portfolio site for Nolan Widjaja (`nolanwidjaja.com`). Built to support college applications (ideally Ivy League) and to house projects and writing. The featured project is PreACT Lab, a small-group PreACT prep program. A blog scaffold exists with the first post.

Design intent and requirements live in `docs/` (`intent.md`, `prd.md`, and per-pass PRDs like `prd-v1-content-update.md`). Read those before making design decisions.

## Stack

- **Astro** (static output, ships zero JS by default)
- **Tailwind CSS** (utility-first, tokens exposed from CSS custom properties)
- **MDX** for blog posts
- **TypeScript** (strict)
- **Vercel** hosting, auto-deploy on push to `main`

## Commands

```bash
npm run dev      # dev server at http://localhost:4321
npm run build    # static build to dist/
npm run preview  # preview the production build
npm test         # Vitest unit tests
```

`npm test` is not required to push — it's a local check. There is no CI gate yet.

## Design system

"Warm minimalism." Avoid pure black/white. Defined as CSS custom properties in `src/styles/global.css` and surfaced to Tailwind in `tailwind.config.mjs` (e.g. `bg-bg`, `text-text`, `text-accent`).

- **Backgrounds:** light `#F9F7F4`, dark `#1A1814`
- **Accent (mode-split):** light = slate blue `#4C6EF5`, dark = amber `#D97706`. Controls links, active nav, the PreACT Lab CTA button, and framework step numbers.
- **Type:** Fraunces (serif) headings, Inter (sans) body, JetBrains Mono for framework steps / code
- **Theme toggle:** respects system preference, persists to `localStorage`, no flash on load (inline script in `src/layouts/Base.astro`). 150ms color fade only — no other animations.

When adding UI, use the CSS tokens so it theme-switches automatically. Don't hardcode hex values in components.

## Voice

Content should sound like Nolan, not like AI or a personal statement. Direct, specific, no filler. Banned words: "showcase," "passionate," "leverage," "testament to," "demonstrate." Placeholder copy is marked with `TODO(nolan)` comments — don't treat it as final, and don't overwrite it with generic prose.

## Key paths

- `src/pages/` — routes: `index.astro` (home), `preact-lab.astro`, `blog/index.astro`, `blog/[...slug].astro`
- `src/layouts/` — `Base` (HTML shell + theme script), `Page`, `Post`
- `src/components/` — `Header`, `Footer`, `ThemeToggle`
- `src/content/blog/` — blog posts (`.mdx`, frontmatter: `title`, `date`, optional `description`)
- `src/lib/posts.ts` — shared date formatting + sorting (the only unit-tested logic)
- `src/styles/global.css` — design tokens and base styles
- `docs/` — intent and PRDs

## Conventions

- External links: `target="_blank"` + `rel="noopener noreferrer"`.
- Blog dates render via `formatDate` and sort via `sortByDateDesc` from `src/lib/posts.ts` — reuse these, don't inline new date logic.
- Add unit tests only when introducing real logic. Static markup and CSS changes don't need tests.
- Commit/push only when Nolan asks.
