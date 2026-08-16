# Adorini — marketing website

The public website for Adorini, a women's ethnic wear business based in Kolkata,
West Bengal. It backs Meta Business Verification and Google Play publishing, and
serves as the brand's landing page.

Built with React 18, TypeScript (strict), Vite, Tailwind CSS, shadcn/ui
primitives and react-router-dom.

## Setup

```bash
npm install
npm run dev        # development server
npm run typecheck  # tsc --noEmit
npm run build      # typecheck, then production build to dist/
npm run preview    # serve the production build
```

Node 18 or later.

## Deployment

The build output in `dist/` is a static single-page app. Because routing is
client-side, the host must rewrite unknown paths to `index.html`, otherwise a
direct visit to `/privacy-policy` returns a 404 from the server.

`public/sitemap.xml`, `public/robots.txt` and the canonical URLs in
`src/hooks/useSeo.ts` all point at `https://adorini.shop`.

## Business details

`src/config/business.ts` is the single source of truth for every published
business fact — legal name, address, phone, email, support hours, size ranges,
price band, categories and policy dates. No component hardcodes any of them.

To change a business detail, change it there and it updates across the site,
including the legal pages and the meta descriptions.

## Brand assets

Fonts and logos are copied from the Flutter app in `Adorini_Frontend/` and
self-hosted. Nothing is loaded from a CDN.

- `public/fonts/` — Sentient (headings) and ClashGrotesk (everything else),
  weights 500 and 700 only. `font-synthesis: none` is set globally so the
  browser never fakes a weight that was not shipped.
- `public/logo.svg` — the emblem. It ships without `fill` attributes, so it is
  painted through a CSS mask (`.emblem-ink`) to tint it to `--brand-ink`
  without editing the path data. It is line art and is only rendered at 48px
  and above.
- `public/wordmark.svg` — the script wordmark.
- `public/favicon.svg` — the emblem on a cream plate, generated from
  `logo.svg` with the path data unchanged.

## Theme

Light theme only. There is no dark mode and no toggle. `color-scheme: light` is
set on `:root`, `<meta name="color-scheme" content="light">` is in the document
head, and `darkMode` in `tailwind.config.ts` is pinned to a selector that is
never applied, so a stray `dark:` variant cannot activate.

Glassmorphism is used on exactly three surfaces: the sticky header once scrolled
past 40px, the mobile navigation Sheet, and overlay panels. Body copy, legal
text and form fields always sit on a solid surface. Opaque fallbacks are in
place for browsers without `backdrop-filter` and for
`prefers-reduced-transparency`.

## Responsive behaviour

`src/hooks/useDevice.ts` reads the viewport width synchronously on first render,
so the first paint is already at the right size. Components branch explicitly on
`isMobile` to set font sizes, padding, gaps and layout, rather than relying on
breakpoint classes alone.

Layout changes between mobile and desktop: hamburger Sheet against an inline
menu, a horizontally scrolling category strip against a grid, an accordion
against full text with a sticky table of contents on the legal pages, and a
stacked against a multi-column footer.

## Verification

The production build was served with `vite preview` and driven with Playwright
across nine viewport widths — 320, 360, 390, 414, 768, 1024, 1280, 1440 and
1920px — on all seven routes (`/`, `/about`, `/contact`, `/privacy-policy`,
`/terms`, `/shipping-returns`, and the 404 route), giving 63 page loads.

Every load was checked programmatically and all passed:

- **No horizontal scroll.** `documentElement.scrollWidth` never exceeded
  `clientWidth`, and no element's bounding box extended past either viewport
  edge. The category strip on mobile is the one intentional horizontal
  scroller and is contained within its own region.
- **No overlapping or clipped text.** No element overflowed its viewport, and
  no rendered text fell below 14px at any width. Body copy stays at 16px on
  mobile and 18px on desktop.
- **Every interactive element reachable.** All links and buttons render at
  44px or taller on viewports below 768px. The skip-to-content link is
  keyboard reachable and becomes visible on focus.
- **One `<h1>` per page**, unique title and meta description per route, and a
  canonical URL on `https://adorini.shop`.
- **No console or page errors** on any route at any width.

`npm run build` completes clean — `tsc --noEmit` reports no errors and the Vite
production build succeeds.

Contrast was checked against the brand palette: `--accent` (#A81746) on the
cream surface is 6.8:1, `--on-surface-variant` (#4F453D) is 8.0:1, and the
primary button (#74593F with cream text) is 6.0:1. The scrolled glass header was
checked against its worst case — dark heading text passing beneath it — at
5.0:1. All pass WCAG AA for normal text.

## Content

Every fact on this site comes from the business. Nothing about founders, team
size, customer numbers, delivery timeframes, delivery charges, reviews or
partnerships appears anywhere, because none of it was supplied.

The three legal pages carry a source comment noting that they describe actual
practice but require review by a qualified legal professional before
publication. That comment is in the source only and is not rendered.
