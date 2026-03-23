# YETI Website

The official website for **YETI** (Young Entrepreneurs & Team Innovators), an 18-month entrepreneurship program based in Dresden and Leipzig, Germany. The site serves as the public-facing platform for applications, event listings, project showcases, blog posts, and team information.

**Live site:** [yeti-dresden.org](https://yeti-dresden.org)
**Repository:** [github.com/Pushpit07/yeti-website](https://github.com/Pushpit07/yeti-website/tree/Sanchit) -- the **Sanchit** branch is the production branch.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) + React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 + Framer Motion (animations) |
| CMS / Content | Google Sheets (via Google Visualization API) |
| Database | Firebase Firestore (waitlist signups) |
| Analytics | Google Analytics 4 + Google Ads |
| Icons | Lucide React |
| UI Components | shadcn/ui (New York style) |
| PWA | next-pwa + Workbox service worker |
| Hosting | Firebase Hosting (static export) or Docker + Nginx |

---

## Project Structure

```
app/                    # Pages (Next.js App Router)
  page.tsx              # Homepage
  dresden/              # Dresden city page
  leipzig/              # Leipzig city page
  application/          # Application pages (dresden & leipzig)
  projects/             # Projects showcase
  events/               # Events calendar
  blogs/                # Blog listing + [slug] detail pages
  contributors/         # Contributors hub (board, ober-yetis, mentors, sponsors, fireside-chats)
  makerspace/           # Makerspace page
  hq/                   # Headquarters page
  adminconsole/         # Admin panel for viewing waitlist signups
  impressum/            # Legal notice (German)
  datenschutz/          # Privacy policy (German)
  legal-notice/         # Legal notice (English)
  privacy-policy/       # Privacy policy (English)

components/             # Reusable React components (Header, Footer, Hero, etc.)
lib/                    # Core logic
  sheets.ts             # Google Sheets data fetching
  sheets/new.ts         # Sheet IDs & tab mappings (current config)
  sheets/legacy.ts      # Legacy single-sheet config (backup)
  firebase.ts           # Firebase initialization
  analytics.ts          # GA4 event tracking
  constants.ts          # City info, dates, program details
  cache/                # Client-side caching layer (SWR pattern)
  utils.ts              # Helpers (image URL processing, etc.)
hooks/                  # React hooks (useSheetData)
public/                 # Static assets, videos, service worker, manifest
content/                # Fallback JSON content files
deploy/                 # Nginx config for production
```

---

## Getting Started

```bash
# Install dependencies
npm ci

# Start dev server (runs on http://localhost:3000)
npm run dev
```

No `.env` file is required. The Google Sheets configuration and Firebase keys are hardcoded in the source (they are public/read-only credentials).

---

## How Content Works (Google Sheets)

Almost all website content is managed through **Google Sheets** -- no coding required. You edit a spreadsheet, and the website updates itself automatically (usually within 60 seconds).

### Why Google Sheets?

Google Sheets acts as our "CMS" (content management system). Instead of needing a developer to change text, images, or events on the website, anyone on the team can just open a Google Sheet, edit a cell, and the website picks it up. No deploy, no code changes, no waiting.

### The 5 Google Sheets

| Sheet | What it contains | Link |
|-------|-----------------|------|
| **Contributors** | Ober Yetis, Yeti Board, Partners (sponsors), Mentors, Fireside chat speakers | [Open Sheet](https://docs.google.com/spreadsheets/d/1aIO1SYEXukAmM4sqwHKuArc2Y6JaGlIt-Ep-ldg43aI) |
| **Content** | Blogs, Yeti Media Content, Testimonials, FAQs | [Open Sheet](https://docs.google.com/spreadsheets/d/1eJjJxiXwQlawNCueugrR73QnaaRZiIEj-Vl_0xp2kZU) |
| **Projects** | All Projects, Made in Yeti (makerspace activity) | [Open Sheet](https://docs.google.com/spreadsheets/d/1jTl9MdYqhrDMwBRqBA776LfFFMiGohP3u0utjpA7lu4) |
| **Admin** | Events, Yeti Location Data, Application settings, Yeti Contacts | [Open Sheet](https://docs.google.com/spreadsheets/d/1JN35Ql-K4WInjh11Of7Jtgp63MqE-hpZMzRbCSN29aM) |
| **Headquarters** | Makerspace equipment | [Open Sheet](https://docs.google.com/spreadsheets/d/1K2s1z3jRGoAS6Z2uU4wpRppwH5MOb6ckoqrvsFXYqdw) |

### How to edit content (step by step)

1. Open the relevant Google Sheet from the table above
2. Find the correct **tab** at the bottom of the sheet (e.g., "Blogs", "Events", "Ober Yetis")
3. Edit the cells directly -- add a new row for new content, or change existing cells
4. Wait ~60 seconds -- the website fetches fresh data automatically
5. Refresh the website page to see your changes

**Important rules:**
- **Do not rename tabs** or change column headers -- the website code expects specific tab names and column names to stay the same
- **Do not change the sheet sharing settings** -- the sheets must remain accessible via "anyone with the link" for the website to read them
- Each tab maps to a specific part of the website. The mapping is defined in `lib/sheets/new.ts` if you ever need to check which tab feeds which page

### How images work in Sheets

When you need to add an image to a Google Sheet cell:

1. Upload the image to **Google Drive**
2. Right-click the image in Drive and select "Share" > "Copy link"
3. Paste that link into the Google Sheet cell

The website automatically detects Google Drive links and converts them to displayable image URLs. You can also use **ImageKit** URLs (see below) or any direct image URL (e.g., from Unsplash).

### ImageKit -- Why and How

Some images on the site are hosted on [ImageKit](https://imagekit.io) (`ik.imagekit.io`). ImageKit is an image CDN (Content Delivery Network) that:

- **Optimizes images automatically** -- it compresses and resizes images so they load faster on the website
- **Serves images from edge servers** -- users get images from the server closest to them, which speeds up page loads
- **Supports transformations** -- you can resize, crop, or adjust images just by changing the URL

If you have an ImageKit account, you can upload images there and paste the ImageKit URL directly into the Google Sheet. The website will display it as-is. Google Drive links work fine too -- ImageKit is just a faster alternative for frequently-viewed images.

### How it works under the hood

- The site uses the **Google Visualization API** (`gviz/tq`) to fetch sheet data as JSON -- no API key needed, sheets just need to be publicly readable (or shared with "anyone with the link")
- Data fetching logic lives in `lib/sheets.ts`, with sheet-to-tab mappings in `lib/sheets/new.ts`
- Images pasted as Google Drive share links are automatically converted to thumbnail URLs by `lib/utils.ts`

---

## How to Make Common Updates

### Add or edit a blog post
Edit the **Content** sheet, **Blogs** tab. Each row is a blog post. Blog content supports Markdown formatting.

### Update events
Edit the **Admin** sheet, **Events** tab.

### Update team members (Ober Yetis, Board, Mentors, etc.)
Edit the **Contributors** sheet and the relevant tab (Ober Yetis, Yeti Board, Partners, Mentors, or Fireside chat speakers).

### Change the homepage background image/video
Edit the **Admin** sheet, **Yeti Location Data** tab. The background media URL is pulled from there.

### Update application dates, generation numbers, or city info
Edit `lib/constants.ts`. This file contains:
- Current generation number per city (e.g., Dresden Gen 8, Leipzig Gen 3)
- Application opening dates and deadlines
- Contact emails and addresses
- Program details (duration, time commitment, funding amounts)

### Add a new page
1. Create a new folder under `app/` (e.g., `app/new-page/`)
2. Add a `page.tsx` file inside it
3. The page is automatically available at `/new-page`

### Update projects or makerspace content
Edit the **Projects** sheet -- "All Projects" tab for projects, "Made in Yeti" tab for makerspace activity.

### Add images
Upload images to **Google Drive**, get a shareable link, and paste it into the relevant Google Sheet cell. The site converts Drive links to displayable thumbnails automatically. You can also add static images to the `public/` folder and reference them with a `/filename.jpg` path.

---

## Waitlist (Application Page)

The application pages (`/application/dresden` and `/application/leipzig`) include a **waitlist signup form**. This was added by Sanchit so that interested applicants can register their interest even when applications aren't officially open yet.

### What happens when someone signs up

1. A visitor goes to the application page for their city (Dresden or Leipzig)
2. They click a button to join the waitlist, which opens a popup form
3. They fill in their details: name, email, address, field of study, university, whether they've graduated, and either their current semester or profession/company
4. When they submit, the data is saved to **Firebase Firestore** (a cloud database by Google) -- no spreadsheet involved here, it goes straight to a database
5. The website also logs a `waitlist_signup` analytics event so you can track how many people are signing up

### Viewing and exporting signups

There is a built-in **admin panel** at `/adminconsole/signuplist` where you can:
- **Log in** with the credentials hardcoded in `app/adminconsole/signuplist/page.tsx`
- **Filter** signups by city (Dresden or Leipzig) and generation (e.g., "Generation 8")
- **Browse** through all signups in a paginated list
- **Export to Excel** -- download all filtered signups as an `.xlsx` file for further processing

### Firebase

Firebase is the backend service powering the waitlist. It's a Google product, so it's free for our usage level.

- **Firebase project:** `yeti-dresden` ([Firebase Console](https://console.firebase.google.com/project/yeti-dresden))
- **What it stores:** Waitlist signups and login logs
- **Data structure:** `waitlist/{city}/generations/{generation}/signups/{id}`
- The Firebase config (API keys etc.) is in `lib/firebase.ts` -- these keys are public/read-only and safe to have in the code

---

## Deployment

### Build

```bash
npm run build
```

This generates a static export in the `out/` folder. The site is fully static (no server-side rendering at runtime).

> **Note:** The build takes a while. Don't run it after every small change during development -- `npm run dev` with hot reload is sufficient.

### Option 1: Firebase Hosting (current setup)

```bash
# Install Firebase CLI if you don't have it
npm install -g firebase-tools

# Login to Firebase
firebase login

# Deploy
firebase deploy
```

This deploys the `out/` folder to Firebase Hosting. Redirect rules are configured in `firebase.json`.

### Option 2: Docker

```bash
# Build the image
docker build -t yeti-website:latest .

# Run locally
docker run --rm -p 3000:3000 yeti-website:latest

# Or use Docker Compose
docker compose up
```

An Nginx reverse proxy config is available at `deploy/nginx.conf` for production use with HTTPS.

### CI/CD (GitHub Actions)

The pipeline at `.github/workflows/ci.yml` runs on every push to `main` and on PRs:
1. TypeScript typecheck
2. Production build
3. Docker image build
4. (Optional) Push to container registry if secrets are configured

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `lib/sheets.ts` | Main data fetching from Google Sheets |
| `lib/sheets/new.ts` | Google Sheet IDs and tab name mappings |
| `lib/constants.ts` | City info, generation numbers, dates, program details |
| `lib/firebase.ts` | Firebase config and initialization |
| `lib/analytics.ts` | GA4 event tracking helpers |
| `lib/cache/` | Client-side SWR cache with configurable TTLs |
| `lib/utils.ts` | Utility functions (image URL processing, etc.) |
| `hooks/useSheetData.ts` | React hook for fetching sheet data on the client |
| `components/WaitlistModal.tsx` | Waitlist signup form modal |
| `app/adminconsole/signuplist/page.tsx` | Admin panel for viewing signups |
| `next.config.ts` | Next.js + PWA configuration |
| `firebase.json` | Firebase Hosting config + redirects |
| `public/sw.js` | Service worker (auto-generated by next-pwa) |
| `public/manifest.json` | PWA manifest |

---

## Caching

The site has a multi-layer caching strategy:

- **Server-side:** Google Sheets data is revalidated every 60 seconds during builds
- **Client-side:** SWR (stale-while-revalidate) cache with per-data-type TTLs:
  - Events: 30 minutes
  - Application data: 10 minutes
  - Projects, Makerspace, Contributors: 60 minutes
- **Service worker:** Caches Google Drive images (30 days), Unsplash images (30 days)
- **Force refresh:** Append `?nocache=1` to any page URL to bypass the client cache

---

## Analytics

- **Google Analytics 4** (Measurement ID: `G-7ZZ9BJPPXS`)
- **Google Ads** (ID: `AW-17100411946`)
- Only active in production (not in dev mode)
- Custom events tracked: `waitlist_signup`, `generate_lead`, page views

---

## Contact / Website Maintainers

If something breaks or you need help understanding the codebase, reach out to the people who built it:

| Name | Role | Contact |
|------|------|---------|
| **Pushpit** | Original Developer | [GitHub](https://github.com/Pushpit07) | +49 17647661972
| **Sanchit** | Original Developer | [GitHub branch](https://github.com/Sanchitj23) | +49 17655668362