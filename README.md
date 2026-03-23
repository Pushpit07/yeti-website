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

Almost all website content is managed through **Google Sheets**. The site fetches data from 5 separate spreadsheets, organized by category. To update content, just edit the relevant Google Sheet -- the website picks up changes automatically (cached for 60 seconds on the server, varies by type on the client).

### The 5 Google Sheets

| Sheet | ID | What it contains |
|-------|-----|-----------------|
| **Contributors** | `1aIO1SYEXukAmM4sqwHKuArc2Y6JaGlIt-Ep-ldg43aI` | Ober Yetis, Yeti Board, Partners (sponsors), Mentors, Fireside chat speakers |
| **Content** | `1eJjJxiXwQlawNCueugrR73QnaaRZiIEj-Vl_0xp2kZU` | Blogs, Yeti Media Content, Testimonials, FAQs |
| **Projects** | `1jTl9MdYqhrDMwBRqBA776LfFFMiGohP3u0utjpA7lu4` | All Projects, Made in Yeti (makerspace activity) |
| **Admin** | `1JN35Ql-K4WInjh11Of7Jtgp63MqE-hpZMzRbCSN29aM` | Events, Yeti Location Data, Application settings, Yeti Contacts |
| **Headquarters** | `1K2s1z3jRGoAS6Z2uU4wpRppwH5MOb6ckoqrvsFXYqdw` | Makerspace equipment |

To open any sheet, go to: `https://docs.google.com/spreadsheets/d/{SHEET_ID}`

### How it works under the hood

- The site uses the **Google Visualization API** (`gviz/tq`) to fetch sheet data as JSON -- no API key needed, sheets just need to be publicly readable (or shared with "anyone with the link").
- Data fetching logic lives in `lib/sheets.ts`, with sheet-to-tab mappings in `lib/sheets/new.ts`.
- Images in Google Sheets should be pasted as **Google Drive share links**. The site automatically converts them to thumbnail URLs for display.

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

## Firebase & Waitlist

The site uses **Firebase** for two things:

1. **Firestore** -- stores waitlist/application signups
2. **Analytics** -- client-side tracking (tied to GA4)

**Firebase project:** `yeti-dresden` ([Firebase Console](https://console.firebase.google.com/project/yeti-dresden))

### Waitlist signups
When someone fills out the waitlist form on the application page, their data is saved to Firestore at:
```
waitlist/{city}/generations/{generation}/signups/{autoId}
```

### Admin console
View and export signups at `/adminconsole/signuplist`. This page has basic authentication (credentials are hardcoded in the component at `app/adminconsole/signuplist/page.tsx`). Features:
- Filter by city (Dresden/Leipzig) and generation
- Paginated list view
- Export to Excel

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
