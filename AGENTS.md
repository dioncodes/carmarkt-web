# AGENTS.md

Repository guidance for coding agents working on this project. Keep this file up to date whenever the project structure, commands, environment variables, deployment assumptions, or major implementation patterns change.

## Project Summary

This is the Nuxt 3 website for CarMarkt, a German automotive workshop in Muelheim an der Ruhr. It is a mostly static marketing and legal site with a contact form backed by a Nitro server endpoint that sends email through Resend.

Primary goals:

- Present CarMarkt services, location, and contact options in German.
- Keep legal pages and business information accurate.
- Preserve SEO metadata, structured data, sitemap, robots, favicon, and Open Graph assets.
- Keep the contact form reliable and privacy-conscious.
- Keep Visitors.now reach measurement aligned with the privacy policy.

## Current Structure

```text
app.vue                    App shell: AppHeader, NuxtPage, SiteFooter, global OG image metadata
assets/
  carmarkt-logo.svg        Logo source asset
  css/main.css             Tailwind layers, CSS variables, reusable classes, animations
components/
  AppButton.vue            Shared button component
  AppHeader.vue            Site header and navigation
  AppLogo.vue              Logo rendering
  ContactSection.vue       Contact options section
  FormField.vue            Shared form field wrapper
  HeroSection.vue          Homepage hero
  LocationMap.vue          Location/map presentation
  LocationSection.vue      Address and map section
  MapLabel.vue             Map label helper component
  RequestFormSection.vue   Client contact form UI and client-side validation
  SectionHeading.vue       Shared section heading component
  ServicesSection.vue      Services presentation
  SiteFooter.vue           Footer and legal links
composables/
  useRevealOnScroll.ts     Client-side reveal-on-scroll behavior
data/
  site.ts                  Canonical business data, nav items, services, contacts, request reasons
pages/
  index.vue                Homepage composition plus JSON-LD structured data
  impressum.vue            German legal notice page
  datenschutz.vue          German privacy policy page
public/
  favicon.svg              Site favicon
  og-image.png             Primary social sharing image
  og-image.svg             Source/vector social image
  robots.txt               Search crawler rules
  sitemap.xml              Static sitemap
server/
  api/contact.post.ts      Nitro POST endpoint for contact form validation and Resend delivery
nuxt.config.ts             Nuxt config, runtime config, global metadata, Tailwind module, CSS entry
tailwind.config.ts         Tailwind content globs, theme colors, fonts, shadows
tsconfig.json              Nuxt-generated TypeScript extension
```

## Commands

- `npm install` installs dependencies.
- `npm run dev` starts the Nuxt dev server.
- `npm run build` builds for production.
- `npm run generate` generates static output.
- `npm run preview` previews a production build.

There are currently no dedicated lint, format, or test scripts in `package.json`. If you add them, update this file and the README.

## Environment

`.env.example` documents the private settings used by the contact API:

```text
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_SENDER_EMAIL=kontakt@example.com
CONTACT_SENDER_NAME=CarMarkt Website
CONTACT_RECIPIENT_EMAIL=info@carmarkt.net
```

`nuxt.config.ts` also exposes `runtimeConfig.public.siteUrl`, sourced from `NUXT_PUBLIC_SITE_URL` with a fallback of `https://carmarkt.net`.

Do not commit real secrets. `.env` and `.env.*` are ignored except `.env.example`.

## Implementation Notes

- Prefer updating `data/site.ts` for business facts, contact details, services, navigation, and request reasons before duplicating values in components.
- Keep visible site copy in German unless there is a specific reason to add another language.
- Use existing Vue single-file component patterns and Nuxt auto-import conventions.
- Preserve TypeScript in `<script setup lang="ts">` where already used.
- Use Tailwind utility classes and the design tokens defined in `assets/css/main.css` and `tailwind.config.ts`.
- Icons come from `lucide-vue-next`; prefer that package when adding new interface icons.
- Contact form validation exists on both the client (`components/RequestFormSection.vue`) and server (`server/api/contact.post.ts`). Keep required-field behavior aligned.
- The contact API escapes HTML before sending email. Preserve that safety behavior when changing email templates.
- Homepage structured data is in `pages/index.vue`; update it when business identity, address, services, or canonical URL behavior changes.
- Global metadata is split between `nuxt.config.ts`, `app.vue`, and route-specific `useHead` calls. Check all relevant locations when changing SEO behavior.
- Visitors.now tracking is injected globally from `nuxt.config.ts` using the public project token. Keep this aligned with `pages/datenschutz.vue`.

## Maintenance Expectations

Update this file whenever:

- Files or directories are added, removed, renamed, or given new responsibility.
- `package.json` scripts change.
- Environment variables or runtime config keys change.
- Contact form behavior, email delivery, or validation rules change.
- Visitors.now tracking behavior, project token, or related privacy wording changes.
- SEO, legal page, sitemap, robots, or deployment assumptions change.
- A new testing, linting, formatting, deployment, or content workflow is introduced.

When making structural changes, update `README.md` and `AGENTS.md` in the same change so humans and agents see the same project map.
