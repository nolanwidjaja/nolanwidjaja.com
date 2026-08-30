# PRD: nolanwidjaja.com

## Overview

Personal portfolio website for Nolan Widjaja. Built to support Ivy League college applications and serve as an ongoing home for projects and writing. The site must feel immediate, personal, and considered — not templated, not AI-generated, not over-designed.

**Version:** 1.0  
**Status:** Pre-build  
**Repo:** https://github.com/nolanwidjaja/nolanwidjaja.com  
**Domain:** nolanwidjaja.com (to be purchased, pointed to Vercel)

---

## Goals

1. Give admissions readers a clear, authentic picture of who Nolan is and what he has built
2. Load near-instantly for any visitor, including engineers evaluating technical taste
3. Present PreACT Lab as a polished, credible leadership initiative even before its first session runs
4. Establish a blog infrastructure that can grow without a site rebuild

## Non-Goals

- Animations, scroll effects, or visual flourishes
- A comprehensive works/resume listing
- Any CMS or admin interface in v1
- Social media embeds or third-party widgets

---

## Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/preact-lab` | PreACT Lab project page |
| `/blog` | Blog index |
| `/blog/[slug]` | Individual blog post |

---

## Design System

### Color Tokens

| Token | Light Mode | Dark Mode | Usage |
|---|---|---|---|
| `color-bg` | `#F9F7F4` | `#1A1814` | Page background |
| `color-text` | `#1C1917` | `#F5F0EB` | Body copy, headings |
| `color-text-muted` | `#78716C` | `#A8A29E` | Dates, labels, secondary info |
| `color-accent` | `#D97706` | `#D97706` | Links, CTA button, active nav states |
| `color-accent-hover` | `#B45309` | `#F59E0B` | Hover state on accent elements |
| `color-border` | `#E7E4E0` | `#2C2924` | Dividers, subtle containers |
| `color-surface` | `#F0EDE9` | `#221F1B` | Differentiated section backgrounds (PreACT Lab) |

Rules:
- No gradients
- No box shadows heavier than `0 1px 2px rgba(0,0,0,0.06)`
- Accent color appears only on interactive elements and the PreACT Lab CTA

### Typography

| Role | Font | Weight | Size (desktop) | Size (mobile) |
|---|---|---|---|---|
| Display heading (H1) | Fraunces | 700 | 3rem | 2rem |
| Section heading (H2) | Fraunces | 600 | 1.875rem | 1.5rem |
| Subheading (H3) | Fraunces | 500 | 1.25rem | 1.125rem |
| Body | Inter | 400 | 1rem | 1rem |
| Body emphasis | Inter | 500 | 1rem | 1rem |
| Small / label | Inter | 400 | 0.875rem | 0.875rem |
| Monospace | JetBrains Mono | 400 | 0.9rem | 0.85rem |

- Line height: 1.7 for body, 1.2 for headings
- Max line length: 68ch on body text (readability cap)
- Fonts self-hosted via `@font-face` to avoid third-party requests and FOUT

### Spacing Scale

Use a base-4 scale: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128px`. Tailwind's default spacing scale maps to this cleanly.

### Breakpoints

| Name | Min-width | Use |
|---|---|---|
| `sm` | 640px | Mobile adjustments |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop (primary design target) |

### Theme Toggle Behavior

- On first visit: respect `prefers-color-scheme`
- Persisted to `localStorage` on manual toggle
- Toggle transition: 150ms `ease` fade on `background-color` and `color` only
- No flash of wrong theme on load (handled via inline script in `<head>`)

---

## Components

### Header

- Sticky, full-width
- Left: "Nolan Widjaja" as a plain text link to `/`
- Right: nav links — `PreACT Lab`, `Blog`, GitHub icon link
- GitHub icon links to `https://github.com/nolanwidjaja` (opens in new tab)
- Theme toggle button (sun/moon icon, no label)
- On mobile: nav links collapse into a minimal drawer or stack below the name row
- No hamburger icon on desktop
- Border-bottom: `1px solid color-border`
- Background: `color-bg` with slight opacity blur (`backdrop-filter: blur(8px)`) so content scrolls behind it cleanly

### Footer

- Minimal: copyright line left, GitHub link right
- Same border-top as header border-bottom
- No sitemap, no social links beyond GitHub

### Theme Toggle

- Icon-only button (sun in light mode, moon in dark mode)
- `aria-label="Toggle theme"`
- 24x24px hit target minimum
- No animation beyond the global 150ms fade

---

## Pages

### 1. Home (`/`)

**Purpose:** Introduce Nolan honestly and navigate visitors to what they came for.

**Layout:** Single column, centered, max-width 680px, generous vertical padding.

**Sections (top to bottom):**

#### Hero
- Name: `Nolan Widjaja` as H1
- One-line descriptor below (written in Nolan's voice — not a tagline formula)
- Two text links: `GitHub` and `Email` or equivalent
- No hero image, no background, no decorative elements

#### About
- 2-4 short paragraphs written in first person
- Covers: who he is, what he cares about, what he is working on
- Tone check: direct, honest, specific. No filler sentences.

#### Projects
- Heading: `Projects` (H2)
- One entry in v1: PreACT Lab
- Each entry: project name as a link, one sentence description, optional status tag (e.g., "In progress")
- Plain list, no cards, no thumbnails

#### Writing
- Heading: `Writing` (H2)
- Lists recent blog posts: title as link + date
- In v1: one post listed
- "All posts" link to `/blog` at the bottom

#### GitHub
- Short line of text + link to `https://github.com/nolanwidjaja`
- Not a widget, not an embed — just a clean text link

---

### 2. PreACT Lab (`/preact-lab`)

**Purpose:** Tell the full story of PreACT Lab as a case study. Polished and intentional even before the first session runs.

**Layout:** Single column, max-width 680px for narrative sections. Framework steps section uses a slightly tighter grid with `color-surface` background tint to signal a shift in register.

**Sections (top to bottom):**

#### Header
- Title: `PreACT Lab` (H1)
- Tagline below: `Learn it. Share it. Measure the impact.`
- Status badge: `In progress` (small, muted, no color — just a label)

#### The Problem
- Heading: `The Problem` (H2)
- Prose: Many middle-school students begin preparing for the PreACT without knowing which grammar and writing skills they need to strengthen.

#### Origin
- Heading: written in Nolan's voice (e.g., "Why I started this")
- Prose: After preparing for the PreACT myself, I recognized that English questions require students to apply many grammar and writing concepts quickly and accurately. I created PreACT Lab to bring students together in small groups, share what I learned, and help other middle schoolers strengthen those same skills.

#### The Framework
- Background: `color-surface` tint, full-width container, inner content max 680px
- Label above: `The Framework` (H2)
- Four steps displayed as a numbered list in monospace with generous spacing:

```
01  Learn
    Understand the grammar or writing concept.

02  Practice
    Work through PreACT/ACT English questions together.

03  Diagnose
    Identify what went wrong and why.

04  Improve
    Apply what was learned to the next practice set.
```

- Step numbers in accent color (`#D97706`)

#### What Students Practice
- Heading: `What Students Practice` (H2)
- Six topics displayed as a horizontal rule-separated inline list or a clean tag row:
  Grammar & Usage | Punctuation | Sentence Structure | Organization | Rhetorical Skills | Test Strategy
- Plain text, no pill/badge styling

#### The Setup
- Heading: `The Setup` (H2)
- Four facts as a clean definition-style list:
  - Cost: Free
  - Group size: 4-8 students
  - Sessions: Four 1-hour sessions leading up to the PreACT
  - Eligibility: District 30 eighth-grade students

#### CTA
- Button: `Join PreACT Lab`
- Opens `mailto:joinpreactlab@gmail.com`
- Styled with `color-accent` background, white text, no border-radius or very slight (4px)
- Full-width on mobile, auto-width on desktop
- This is the only prominent button on the site

#### Impact (Placeholder)
- Section hidden or omitted in v1 until enrollment and outcome data exists
- Stub in code with a comment for future addition

---

### 3. Blog Index (`/blog`)

**Purpose:** List all posts. Clean, scannable, no friction.

**Layout:** Single column, max-width 680px.

**Content:**
- Heading: `Writing` (H1)
- Posts listed in reverse chronological order
- Each entry: post title as a link, date in muted text below
- No excerpts, no thumbnails, no category tags
- Divider line between entries

**In v1:** One post listed.

---

### 4. Blog Post (`/blog/[slug]`)

**Purpose:** Render a single post. Readable, distraction-free.

**Layout:** Single column, max-width 680px.

**Structure:**
- Post title (H1)
- Date in muted text
- Thin divider
- Post body (MDX-rendered Markdown)
- Back link at bottom: `<- All posts` linking to `/blog`

**Typography in post body:**
- Headings use Fraunces
- Body uses Inter at comfortable line height (1.75)
- Inline code: monospace, subtle background tint
- Code blocks: monospace, `color-surface` background, no syntax highlighting in v1

**First post slug:** `/blog/my-preact-summer`  
**First post title:** My PreACT Summer  
**First post content:** Written by Nolan. Covers what he studied, what he learned, and what led him to start PreACT Lab. Tone matches the rest of the site.

---

## Technical Architecture

### Stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | Astro 4+ | Static-first, ships zero JS by default, fast build times |
| Styling | Tailwind CSS v3 | Utility-first, pairs cleanly with Astro, easy to enforce design tokens |
| Content | MDX | Blog posts as Markdown files with optional component use |
| Language | TypeScript | Type safety for Astro components and frontmatter |
| Hosting | Vercel | Auto-deploy from GitHub, edge CDN, free tier sufficient |
| Domain | nolanwidjaja.com | To be purchased and pointed to Vercel via DNS |

### Project Structure

```
/
├── public/
│   └── fonts/          # Self-hosted font files
├── src/
│   ├── components/     # Header, Footer, ThemeToggle, etc.
│   ├── layouts/
│   │   ├── Base.astro  # HTML shell, theme script, font loading
│   │   ├── Page.astro  # Standard page wrapper
│   │   └── Post.astro  # Blog post wrapper
│   ├── pages/
│   │   ├── index.astro
│   │   ├── preact-lab.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [slug].astro
│   ├── content/
│   │   └── blog/       # MDX post files
│   └── styles/
│       └── global.css  # CSS custom properties for design tokens
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

### Theme Implementation

Inject an inline `<script>` in `<head>` before any CSS loads:

```js
const saved = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
document.documentElement.classList.toggle('dark', saved === 'dark' || (!saved && prefersDark));
```

CSS custom properties defined on `:root` and overridden on `.dark` for all color tokens.

### Performance Requirements

- Lighthouse scores: 95+ on Performance, Accessibility, Best Practices, SEO
- No client-side JS except the theme toggle script
- All fonts self-hosted (no Google Fonts requests)
- No images in v1 (no optimization overhead)
- No third-party scripts, analytics, or embeds in v1
- `<meta>` tags populated per page (title, description, og:title, og:description)

### Deployment

- GitHub repo: `nolanwidjaja/nolanwidjaja.com`
- Vercel project connected to repo
- Auto-deploy on push to `main`
- Preview deployments on pull requests
- Custom domain configured in Vercel dashboard once purchased

---

## Content Checklist (Written by Nolan)

These pieces of content must be written before the site can launch. No AI copy.

- [ ] Hero descriptor (one line, in his voice)
- [ ] About section (2-4 paragraphs)
- [ ] PreACT Lab origin paragraph (can adapt from intent.md)
- [ ] "Why I started this" heading rewritten in his voice
- [ ] First blog post: My PreACT Summer

---

## Acceptance Criteria

### All Pages
- [ ] Renders correctly in light and dark mode
- [ ] No layout breaks at 375px (iPhone SE), 768px (tablet), 1280px (desktop)
- [ ] Theme persists across page navigations and refreshes
- [ ] No flash of wrong theme on load
- [ ] All links work and open correctly (internal vs. new tab for external)
- [ ] Lighthouse score 95+ on all four metrics

### Home
- [ ] Name renders as H1
- [ ] PreACT Lab listed under Projects with link to `/preact-lab`
- [ ] Blog post listed under Writing with link to `/blog/my-preact-summer`
- [ ] GitHub link opens `https://github.com/nolanwidjaja` in new tab

### PreACT Lab
- [ ] Framework steps render in monospace with step numbers in accent color
- [ ] "Join PreACT Lab" button opens mailto correctly
- [ ] `color-surface` background applied to framework section
- [ ] Status badge present and reads "In progress"

### Blog Index
- [ ] One post listed in v1 with correct title and date
- [ ] Post title links to correct slug

### Blog Post
- [ ] Post body renders from MDX source
- [ ] Back link at bottom navigates to `/blog`
- [ ] Typography is readable at all breakpoints

---

## Out of Scope for v1

- Analytics (can add Vercel Analytics later with zero JS overhead)
- Comments or any interactive post features
- Search
- RSS feed (add in v2 once there are enough posts)
- Additional project pages beyond PreACT Lab
- Impact/outcome data section on PreACT Lab (placeholder only)
- OG image generation
