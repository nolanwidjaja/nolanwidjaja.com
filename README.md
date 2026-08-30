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
