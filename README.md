# CarMarkt Website

Website for CarMarkt, a free automotive workshop in Muelheim an der Ruhr. The app is built with Nuxt 4, Vue 3, Tailwind CSS, and a small Nitro API endpoint that protects contact requests with Cloudflare Turnstile before sending email through Resend.

## Stack

- Nuxt 4 and Vue 3
- Tailwind CSS via `@nuxtjs/tailwindcss`
- TypeScript
- Resend for contact form email delivery
- Cloudflare Turnstile via `@nuxtjs/turnstile`, plus a honeypot field for contact form spam prevention
- Visitors.now for privacy-friendly reach measurement
- `lucide-vue-next` for icons

## Project Structure

```text
app/
  app.vue                  App shell with header, page outlet, footer, and global OG image metadata
  assets/
    carmarkt-logo.svg      Source logo asset
    css/main.css           Tailwind layers, CSS variables, shared component classes, animations
  components/              Reusable Vue components for layout, sections, contact form, form fields, logo, and map label
  composables/
    useRevealOnScroll.ts   Client-side reveal-on-scroll behavior
  data/
    site.ts                Business details, navigation, services, contact links, request reasons
  pages/
    index.vue              Homepage composition and LocalBusiness/Person JSON-LD
    impressum.vue          German legal notice page
    datenschutz.vue        German privacy policy page
public/                    Static favicon, robots, sitemap, and Open Graph images
server/
  api/contact.post.ts      Contact form validation, bot checks, and Resend email delivery
nuxt.config.ts             Nuxt modules, runtime config, global head metadata, CSS entry
tailwind.config.ts         Tailwind content paths, theme colors, fonts, shadows
```

## Getting Started

Use Node.js `^22.12.0`, `^24.11.0`, or `>=26.0.0`.

Install dependencies:

```bash
npm install
```

Create a local environment file from the example:

```bash
cp .env.example .env
```

Fill in the Resend/contact and Turnstile settings:

```text
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_SENDER_EMAIL=kontakt@example.com
CONTACT_SENDER_NAME=CarMarkt Website
CONTACT_RECIPIENT_EMAIL=info@carmarkt.net
NUXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAA...
NUXT_TURNSTILE_SECRET_KEY=0x4AAAA...
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Generate a static build:

```bash
npm run generate
```

Preview a production build:

```bash
npm run preview
```

## Configuration Notes

- Public site URL is read from `NUXT_PUBLIC_SITE_URL`, falling back to `https://carmarkt.net`.
- Private contact settings are read from Nuxt runtime config or environment variables.
- The contact endpoint requires `RESEND_API_KEY`, `CONTACT_SENDER_EMAIL`, and `CONTACT_RECIPIENT_EMAIL`.
- Turnstile is handled by `@nuxtjs/turnstile` and is enabled when `NUXT_PUBLIC_TURNSTILE_SITE_KEY` and `NUXT_TURNSTILE_SECRET_KEY` are both configured. If only one key is set, the contact endpoint fails closed with a configuration error.
- A hidden honeypot field is always included and silently drops obvious bot submissions before email delivery.
- Visitors.now tracking is loaded globally from `nuxt.config.ts` with the public project token.
- Core business content should be updated in `app/data/site.ts` first so pages and components stay consistent.
- Static SEO files live in `public/robots.txt` and `public/sitemap.xml`; update them when public routes or canonical URLs change.

## Agent Instructions

See `AGENTS.md` for repository-specific maintenance guidance. Keep it current whenever project structure, commands, environment variables, deployment assumptions, or major implementation patterns change.
