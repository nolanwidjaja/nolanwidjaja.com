# Intent: nolanwidjaja.com

## Purpose

A personal portfolio website for Nolan Widjaja, built to support college applications (ideally Ivy League) and to serve as an ongoing home for projects and writing that reflect who I am and what I care about.

The site should give admissions readers a real picture of me: what I've built, why I built it, and how I think. It needs to sound like I wrote it, not like a personal statement template or an AI.

## Who I Am

A middle schooler navigating academic challenges, building things I care about, and figuring it out along the way.

## Target Audience

- **Primary:** College admissions readers at Ivy League and top-tier universities
- **Secondary:** Peers, collaborators, anyone curious about my work

## Voice & Tone

This site should sound like me: direct, honest, specific. Rules:
- No filler. If a sentence doesn't add something, cut it.
- Concrete over vague. "4-8 students, 4 sessions, 1 hour each" beats "impactful learning experiences."
- Thoughtful but not stiff. Depth doesn't require formality.
- No AI-speak: ban "showcase," "passionate," "leverage," "testament to," "demonstrate."
- If a sentence could appear on anyone else's portfolio unchanged, rewrite it.

## UI / UX Direction

Reference: https://blog.gregbrockman.com/ (minimalism and restraint, not the aesthetic directly)

The overall feel: a well-designed academic journal run by one person who actually has taste. Not a startup, not a Squarespace template, not a developer portfolio. Something considered and unhurried.

**Layout:**
- Single-column, centered content with generous whitespace on both sides
- No sidebars, no banners, no promotional elements
- Content hierarchy established through spacing and type size, not color or decoration

**Color: Warm Minimalism**

Avoid pure black and white. The site should feel human, not clinical.

- Light mode background: warm off-white (`#F9F7F4`)
- Dark mode background: deep warm charcoal (`#1A1814`)
- Text: high-contrast but warm, not pure black/white
- Accent color: amber/ochre (`#D97706`), used only for links, the CTA button, and active states
- No greens, no reds, nothing that resembles a startup brand palette
- No gradients, no heavy shadows

**Typography:**

Type does the work. The contrast between serif headings and sans-serif body communicates "I read and I write."

- Headings: Fraunces or Playfair Display (expressive, not stiff)
- Body: Inter or Plus Jakarta Sans (clean, legible)
- Framework steps and technical content: monospace

**PreACT Lab Section:**

Give it a slightly differentiated visual treatment from the rest of the site. A subtle background tint, tighter grid, framework steps in monospace. It should signal a shift in register: personal voice on the main page, systematic thinking inside the project.

**Interaction:**
- No scroll animations. They slow the site down psychologically even when they don't technically.
- One exception: a 150ms fade transition on light/dark mode toggle (background and text color only)
- Hover states subtle, not flashy

**Navigation:**
- Minimal header: name on the left, a few links on the right
- No hamburger menus on desktop
- Mobile nav collapses cleanly

**Performance:**
- Pixel-perfect at all breakpoints: desktop, tablet, and mobile phone
- Near-instant load times are a feature, not a goal. Pages should feel immediate.

## Site Structure

### 1. Main Page (Home)

Introduces who I am, not a resume dump. Immediate, honest, navigable.

Content:
- Short intro in my voice (not a tagline)
- What I'm working on / what I care about
- Links to GitHub and key profiles
- Navigation to project sections and blog

### 2. PreACT Lab

My first featured leadership project. A section of the portfolio that tells the full story: why I started it, how it works, and what came of it.

**What it is:**
After preparing for the PreACT myself, I recognized that English questions require students to apply many grammar and writing concepts quickly and accurately. I created PreACT Lab to bring students together in small groups, share what I learned, and help other middle schoolers strengthen those same skills.

**The problem it solves:**
Many middle-school students begin preparing for the PreACT without knowing which grammar and writing skills they need to strengthen.

**The framework:**
```
Learn -> Practice -> Diagnose -> Improve
```
01. **Learn:** Understand the grammar or writing concept
02. **Practice:** Work through PreACT/ACT English questions together
03. **Diagnose:** Identify what went wrong and why
04. **Improve:** Apply what was learned to the next practice set

**What students practice:**
Grammar & Usage | Punctuation | Sentence Structure | Organization | Rhetorical Skills | Test Strategy

**The setup:**
- Free
- Small groups of 4-8 students
- Four 1-hour sessions leading up to the PreACT
- Open to District 30 eighth-grade students only
- Join via email: joinpreactlab@gmail.com

**Tagline:** Learn it. Share it. Measure the impact.

**Status:** In progress. PreACT Lab is currently being built out. No enrollment or outcome data yet; the section should reflect the vision and design of the program as it stands, with room to add impact numbers later.

**Section goals:**
- Tell the story of why I started it, not just what it is
- Make the framework and structure feel polished and intentional even before the first session runs
- Feel like a case study, not a resume bullet
- Include a clear CTA: "Join PreACT Lab" button that opens a mailto link

### 3. Blog

A space for writing: reflections, project updates, things I'm thinking about. Scaffold is included in v1 with one published post. More posts added over time.

**First post:** My summer PreACT journey: what I studied, what I learned, and what led me to start PreACT Lab.

**Structure:**
- `/blog` - index listing all posts
- `/blog/[slug]` - individual post page
- Posts written in Markdown (or MDX for richer formatting)

## GitHub Integration

Link prominently to my GitHub profile from the main page. Surface pinned or relevant repos.

**Profile:** https://github.com/nolanwidjaja

## What This Site Is Not

- A generic template portfolio
- A list of clubs and honors with no context
- Something that sounds written to impress rather than to communicate

## Technical Requirements

- **Framework:** Astro (or equivalent lean, static-first stack), optimized for fast initial load and minimal JS overhead. Future visitors from top engineering companies should see near-instant page loads.
- **Styling:** Tailwind CSS or equivalent utility-first approach
- **Theming:** Light/dark mode support, respects system preference and allows manual toggle
- **Responsive:** Fully readable and navigable on mobile phones
- **Performance targets:** High Lighthouse scores across performance, accessibility, and best practices
- **Hosting:** Vercel, auto-deployment triggered on push to `main` branch via GitHub integration
- **Domain:** nolanwidjaja.com (to be purchased and pointed to Vercel)

## Open Questions

None. Intent is complete.
