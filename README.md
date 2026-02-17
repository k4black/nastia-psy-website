# Anastasia Bystrova — Psychologist Website

Personal website for Anastasia Bystrova, a CBT psychologist offering online therapy sessions.

## Tech Stack

- [Astro](https://astro.build/) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first styling
- Markdown content files for easy text editing

## Project Structure

```
├── content/              # Markdown content (edit text here)
│   ├── hero.md
│   ├── about.md
│   ├── services.md
│   └── contact.md
├── src/
│   ├── components/       # Page sections
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Approach.astro
│   │   ├── HowItWorks.astro
│   │   ├── Services.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       └── content.ts
└── public/
```

## Content Editing

Text content is stored in `content/*.md` files with YAML frontmatter. Edit these to update copy without touching components.

Service pricing is configured as parameters in `src/components/Services.astro` (`priceRub`, `priceEur`).

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start dev server at `localhost:4321`          |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview production build locally             |

## Features

- Light/dark mode with system preference detection
- Scroll-triggered reveal animations (IntersectionObserver)
- Responsive design (mobile-first)
- Russian language content
- Telegram (@captain_nastia) and Instagram (@captain_nastia_psy) links
