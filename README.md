# nolanwidjaja.com

Personal portfolio site for Nolan Widjaja. Built for speed, readability, and a quiet, considered feel — an academic journal run by one person with taste.

Live at [nolanwidjaja.com](https://nolanwidjaja.com).

## Stack

- **[Astro](https://astro.build)** — static-first, ships zero JavaScript by default
- **[Tailwind CSS](https://tailwindcss.com)** — utility-first styling with design tokens
- **[MDX](https://mdxjs.com)** — blog posts as Markdown files
- **TypeScript** — type-safe components and content frontmatter
- **[Vercel](https://vercel.com)** — hosting with auto-deploy from GitHub

Fonts (Fraunces, Inter, JetBrains Mono) are self-hosted via Fontsource — no third-party font requests. The only client-side JavaScript is a small inline script for the light/dark theme toggle.

## Getting started

```bash
npm install       # install dependencies
npm run dev       # start dev server at http://localhost:4321
npm run build     # build static site to dist/
npm run preview   # preview the production build locally
npm test          # run unit tests (Vitest)
```

Requires Node 18+ (developed on Node 22).

## Project structure

```
src/
├── components/       # Header, Footer, ThemeToggle
├── layouts/
│   ├── Base.astro    # HTML shell, meta tags, fonts, no-flash theme script
│   ├── Page.astro    # Standard page (Header + content + Footer)
│   └── Post.astro    # Blog post wrapper
├── pages/
│   ├── index.astro          # Home
│   ├── preact-lab.astro     # PreACT Lab project page
│   └── blog/
│       ├── index.astro      # Blog index
│       └── [...slug].astro  # Individual post route
├── content/
│   └── blog/         # Blog posts (.mdx)
├── content.config.ts # Blog collection schema
└── styles/
    └── global.css    # Design tokens + base styles

public/
└── favicon.svg
```

## Design system

Colors are defined as CSS custom properties in `src/styles/global.css` and exposed to Tailwind in `tailwind.config.mjs`. Both light and dark themes share one amber accent (`#D97706`).

| Token | Light | Dark |
| --- | --- | --- |
| `bg` | `#F9F7F4` | `#1A1814` |
| `text` | `#1C1917` | `#F5F0EB` |
| `text-muted` | `#78716C` | `#A8A29E` |
| `accent` | `#D97706` | `#D97706` |
| `surface` | `#F0EDE9` | `#221F1B` |

Type: Fraunces (serif) for headings, Inter (sans) for body, JetBrains Mono for the PreACT Lab framework steps.

## Writing a blog post

Add a `.mdx` file to `src/content/blog/`. The filename becomes the URL slug. Frontmatter:

```mdx
---
title: My Post Title
date: 2026-08-15
description: One-line summary for SEO and previews.
---

Your post content here.
```

The post appears automatically on `/blog` and (if recent) on the home page.

## Deployment

Connected to Vercel with auto-deploy on push to `main`. Pull requests get preview deployments. Astro's Vercel adapter is not required for static output — Vercel detects the Astro build and serves `dist/` directly.

## Content still to write

A few pieces are placeholder drafts marked with `TODO(nolan)` comments in the source. Replace these with your own words before sharing the site widely:

- Home hero descriptor and About section (`src/pages/index.astro`)
- PreACT Lab "Why I started this" section (`src/pages/preact-lab.astro`)
- First blog post (`src/content/blog/my-preact-summer.mdx`)
