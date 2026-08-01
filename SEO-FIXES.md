# SEO & Technical Fixes — tulas.edu.in

Response to the SEO brief. Codebase: Next.js 14 App Router.

---

## 1. Server-side crawl errors — root cause found and fixed

The brief said "all pages are getting server-side crawl errors across all SEO tools".
There were three separate causes.

### 1a. Every page rendered a nested `<head>` and `<body>` inside the document body

**107 of 193 page components** wrapped their JSX like this:

```jsx
return (
  <>
    <head>
      <title>...</title>
      <meta name="description" content="..." />
    </head>
    <body>
      ...actual page...
    </body>
  </>
);
```

The real `<html>`, `<head>` and `<body>` already come from `app/layout.js`. This produced a
second `<head>` and `<body>` *inside* the first `<body>` on nearly every URL. That is invalid
HTML, and it is what crawlers (Screaming Frog, Semrush, Ahrefs, Sitebulb) report as a parse /
server-side rendering error. It also meant the titles and descriptions were sitting in the page
body rather than the document head, where Google does not reliably read them.

**Fixed:** the nested `<head>`/`<body>` was removed from all 108 affected files and every title
and description was migrated into proper Next.js `metadata` exports.

### 1b. Any unknown URL returned HTTP 500 instead of 404

`app/[slug]/page.js` is a root-level dynamic route, so it catches *every* single-segment URL on
the domain. It called the blog API and did this:

```js
if (!res.ok) {
  throw new Error(`Failed to fetch data for slug: ${slug}`);
}
```

An uncaught throw in a server component makes Next.js return **HTTP 500**. So every crawl of a
stale, mistyped, or old WordPress URL returned a server error rather than a clean 404 — which is
exactly the "server-side crawl errors" signature in the SEO tools.

`generateStaticParams()` had the same problem: an unhandled `fetch` there fails the entire
production build if the blog API is briefly unreachable.

**Fixed:**

- `fetchBlogData` now returns `null` on a failed response and on network errors, which routes to
  `notFound()` → a correct **404**.
- `generateStaticParams` is wrapped in `try/catch` and returns `[]` on failure, so the blog API
  can never break the build.
- Added `app/not-found.js` — a real branded 404 page with navigation and `noindex, follow`.

### 1c. `middleware.js` was in the wrong directory and never ran

The file was at `app/middleware.js`. Next.js only loads middleware from the **project root** (or
`src/`), so it had no effect at all.

**Fixed:** moved to `/middleware.js` and expanded — see section 5.

---

## 2. Canonical tags

**Every indexable page now has a self-referencing canonical.**

Because 108 pages were marked `"use client"`, they could not export `metadata` at all — that is a
hard Next.js constraint and the underlying reason no canonicals existed. Rather than refactor
every interactive page (high regression risk on forms, sliders and popups), each route now has a
small server-side `layout.js` alongside it holding the metadata. No component logic was touched.

- 213 `layout.js` files created
- 143 indexable pages: unique title + description + `alternates.canonical`
- Canonicals include the trailing slash to match `trailingSlash: true` in `next.config.mjs`

**Broken canonicals that already existed and were corrected:**

| Page | Old canonical | Problem |
|---|---|---|
| `/campus-life/alumni-meet/` | `/alumni-meet` | Pointed at a URL that does not exist |
| `/campus-life/student-clubs/` | `/campus-life/students-clubs` | Typo → 404 |
| `/about/` | `/about` | Missing trailing slash → redirect |
| `/admission-procedure/` | `/admission-procedure` | Missing trailing slash → redirect |
| + 5 more campus-life / course pages | missing trailing slash | redirect |

---

## 3. Dynamic meta tags — all pages

**Result: 143 indexable pages, 0 duplicate titles, 0 duplicate descriptions.**

Before this work:

- 9 pages (`/about/`, `/admission-procedure/`, all six `/campus-life/*`, `/courses/ba-llb/`)
  had the **homepage's title and description copied onto them verbatim**
- 14 pages shared the title *"Tula's Institute is best to pursue a career in MBA"* — including
  the MCA, B.Tech, BJMC, B.Pharm and LLB pages
- 19 pages shared one MBA description
- 40 titles were over 75 characters, 55 descriptions over 165 — both truncated in search results

Every one of those was rewritten. All titles are now ≤ 72 characters and all descriptions
130–165 characters.

A full inventory of every URL with its final title, description and canonical is in
`tulas-meta-inventory.csv`.

**Blog pages were excluded from this**, as requested — `app/[slug]/page.js` keeps its own
`generateMetadata()` pulling from the blog API. Two bugs were fixed there:

- `robots: blog.tags` was emitting the post's *tags* into the robots meta tag, e.g.
  `<meta name="robots" content="engineering,college">`. Removed.
- Blog posts now get a canonical, which they did not have.

---

## 4. Homepage meta

| | Before | After |
|---|---|---|
| Title | `Tulas University in Dehradun, Uttarakhand \| Admission Open 2026 \| Tulas University` (88 chars, brand repeated twice) | `Tulas University, Dehradun, Uttarakhand \| Admissions Open 2026` (62 chars) |
| Description | 186 chars, truncated in SERPs | 156 chars |

### Root layout also had three site-wide problems

1. **`<meta name="robots" content="INDEX, FOLLOW...">` was hardcoded in `app/layout.js`**, so it
   was emitted on *every* URL. Any future `noindex` would have fought against it. Moved into the
   `metadata` export where Next.js merges it correctly per page.
2. **`og:title` and `og:description` were hardcoded in the layout head**, meaning every page on
   the site shared the homepage's Open Graph card. Now defaults only; pages override them.
3. **A `BlogPosting` schema was hardcoded on every page** — it declared the homepage, every course
   page and every policy page to be a single blog article published 2023-11-15 pointing at
   `/blog/`. Invalid structured data that conflicts with the `CollegeOrUniversity` entity.
   Removed. The `WebSite` `SearchAction` also had a malformed target
   (`.../{search_term_string}https://tulas.edu.in/apply-now/`) and was removed.

---

## 5. Duplicate-slash URLs (`/grievance//`, `/naac//`, `/blog//` …)

The footer and navigation built links as `` `${link.linkTo}/${utmParams}` `` while `linkTo`
already ended in `/`. With `trailingSlash: true` this produced URLs like
`https://tulas.edu.in/grievance//` — separate, non-canonical URLs that crawlers follow and report.
This was live in the footer of every page.

**Fixed in two layers:**

- A shared `buildHref()` helper in `component/utmParams.js` now normalises internal links to
  exactly one trailing slash and appends UTM parameters correctly. Applied at all 27 call sites
  across the footer, mega menu, desktop nav, mobile nav, quick links and course cards. External,
  `mailto:`, `tel:` and file links are passed through untouched. Unit tested against 13 cases.
- `middleware.js` 308-redirects any remaining duplicate-slash URL to its clean form, which also
  cleans up anything already indexed.

---

## 6. Backup pages

Per your note, the `*-backup`, `backup-*`, `/2025-*`, `/dump` and `/newhome` routes were left
alone — no metadata was added to them. Until they are deleted they are reachable and
indexable, so `middleware.js` now sends them `X-Robots-Tag: noindex, follow` to stop them
competing with the live pages.

---

## Decisions worth confirming

These were judgement calls. Each is a one-line revert.

1. **36 paid-ad landing pages** (`/department-of-engineering/btech/lp1/` … `lp32/`, `bca/lp1-4/`)
   and **51 thank-you pages** were set to `noindex, follow`. They are near-duplicates of the main
   course pages and are not in the sitemap. If any of them are meant to rank organically, say so
   and I will switch them to indexable with unique meta.
2. **Brand normalisation.** Titles and descriptions saying *"Tula's Institute"* were changed to
   *"Tulas University"*, matching the rest of the site (footer, schema, homepage copy). If the SEO
   team wants to keep the legacy brand string in titles for ranking continuity, this is reversible.
3. **Two duplicate page pairs** serve near-identical content on two URLs each. They now have
   distinct meta, but they are genuine duplicate content and one of each pair should probably
   canonicalise to the other or be redirected:
   - `/courses/bpharma/` and `/institute-of-pharmacy/bpharma/`
   - `/courses/diploma-in-civil-engineering/` and `/diploma-in-civil-engineering/`

---

## Not changed — needs your input

**`.htaccess` in the project root.** It is a leftover WordPress / WP-Rocket file containing:

```apache
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
```

If the site is served behind Apache, that rule routes every non-file request to `/index.php`,
which does not exist in a Next.js app — and that alone would produce site-wide server errors. On
Vercel or a plain Node host the file is ignored and harmless. I did not touch it because it
depends on your hosting setup. **Please confirm where the site is deployed.** If it is not
Apache-fronted, the file should be deleted.

**H1 tags (item 3 of the brief).** Deferred at your request. For reference: there are only 19
`<h1>` tags across 276 page files. Most pages have none and start their heading hierarchy at
`<h3>` or `<h5>`. This is worth doing — say the word and I will draft an H1 per page for review.

---

## Before deploying

The production build could not be run in this environment (`node_modules` contains macOS-native
binaries and there is no npm registry access here). Everything was verified statically instead:

- All 2,865 JS/JSX files parse cleanly — 0 syntax errors
- 143/143 indexable pages resolve to a unique title, description and correct self-canonical
- `buildHref()` and the middleware matcher both unit tested — all cases pass

Please run `npm run build` locally before deploying, and after deploying re-crawl the site and
resubmit `sitemap.xml` in Google Search Console.
