# Content Management Guide

All text content for the website is stored in markdown files in the `content/` directory. This allows easy editing without touching code.

## Content Files

### `content/site.md`
Global site metadata and branding:
- `siteTitle` — Browser tab title
- `siteDescription` — SEO meta description
- `brandName` — Header brand name
- `footerTagline` — Footer tagline text
- `footerName` — Footer copyright name

### `content/hero.md`
Hero section (landing):
- `title` — Small caps subtitle (e.g., "Психолог, КПТ-терапевт")
- `name` — Large heading (name)
- `tagline` — Descriptive text below name
- `image` — Path to hero photo (relative to `public/`, e.g., `portrait-1.jpg`)

### `content/about.md`
About section:
- `title` — Section heading (e.g., "Обо мне")
- `image` — Path to about photo
- `imageAlt` — Alt text for photo
- `experience` — Badge text (e.g., "10+ лет опыта")
- `clients` — Badge text (e.g., "500+ клиентов")
- `method` — Badge text (e.g., "КПТ подход")
- Markdown body — Bio text with education section

### `content/approach.md`
Approach section (How I work):
- `title` — Section heading (e.g., "Как я работаю")
- `intro` — Introduction paragraph
- `cards` — Array of 4 cards:
  - `title` — Card heading
  - `description` — Card description
- `reasonsTitle` — Sub-section heading (e.g., "С чем я работаю")
- `reasons` — Array of issues/topics (list items)

### `content/how-it-works.md`
How it works section (3 steps):
- `title` — Section heading (e.g., "Три шага к терапии")
- `steps` — Array of 3 steps:
  - `number` — Step number (e.g., "01")
  - `title` — Step title
  - `description` — Step description

### `content/services.md`
Services section:
- `title` — Section heading (not currently displayed)
- `subtitle` — Card title (e.g., "Индивидуальная онлайн-терапия")
- `summary` — Card description
- `format` — Format badge (e.g., "Zoom / Meet")
- `duration` — Duration badge (e.g., "50 минут")
- `price` — Price badge (e.g., "от 3 500 ₽ / 30 €")
- `featuresTitle` — Features section heading
- `features` — Array of feature items
- `ctaNote` — Free consultation note
- `ctaLabel` — CTA button text (e.g., "Записаться")

### `content/contact.md`
Contact section:
- `title` — Section heading (e.g., "Свяжитесь со мной")
- `scheduleUrl` — Google Calendar booking URL
- `bookingTitle` — Booking card heading
- `bookingText` — Booking card description
- `bookingCtaLabel` — Booking button text
- `messageTitle` — Messenger card heading
- `messageText` — Messenger card description
- `telegramUrl` — Telegram link URL
- `telegramLabel` — Telegram button text
- `instagramUrl` — Instagram link URL
- `instagramLabel` — Instagram button text
- Markdown body — Additional contact info

## Navigation Links

Navigation links are hardcoded in `src/components/Header.astro` and point to section IDs:
- `#about` → About section
- `#approach` → Approach section
- `#services` → Services section
- `#booking` → Contact section

## Images

Place images in the `public/` directory:
- `public/portrait-1.jpg` — Current hero photo
- `public/portrait-2.png` — Available alternative
- `public/portrait-3.png` — Available alternative

Reference images in markdown frontmatter as: `image: "portrait-1.jpg"` (no leading slash).

## Styling

Visual styling (colors, fonts, spacing) is controlled in:
- `src/styles/global.css` — CSS variables and animations
- Individual component files — Tailwind classes

## Google Calendar Integration

Set `scheduleUrl` in `content/contact.md` to enable the booking button. The URL should be your Google Calendar Appointments scheduling URL.
