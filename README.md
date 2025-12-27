## YETI Website (Next.js, Static JSON, Self-hosted Node)

Rebuild of `yeti-dresden.org` as a statically generated Next.js app with content in `content/` JSON files. Suitable for Dockerized Node runtimes behind Nginx.

### Tech
- Next.js App Router, React, TypeScript
- Tailwind CSS v4
- Static JSON content in `content/`

### Local Development
```bash
npm ci
npm run dev
# http://localhost:3000
```

### Environment Variables
Create a `.env.local` file for local development:
```bash
# Google Sheets Configuration
# Control flag for Google Sheets structure:
# - "0" or undefined: Use legacy single-file spreadsheet (default)
# - "1": Use new multi-file spreadsheet structure
NEXT_PUBLIC_SHEETS_USE_NEW_STRUCTURE=0
```

**Google Sheets Modes:**
- **Legacy Mode (0)**: Single spreadsheet with multiple tabs
- **New Mode (1)**: Multiple spreadsheets organized by category (Contributors, Content, Projects, Admin, Headquarters)

### Content
- Edit JSON under `content/`:
  - `site.json`, `nav.json`
  - `pages/home.json`, `pages/dresden.json`, `pages/leipzig.json`
  - `apply/dresden.json`, `apply/leipzig.json`
  - `events/index.json`, `events/[slug].json`
  - `projects/index.json`, `contributors/index.json`
  - `legal/impressum.json`, `legal/privacy.json`

### Build
```bash
npm run build
npm start
```

### Docker
```bash
docker build -t yeti-website:latest .
docker run --rm -p 3000:3000 yeti-website:latest
```

### Nginx (example)
See `deploy/nginx.conf` for a reverse proxy with basic security headers and CSP.

### CI
GitHub Actions workflow builds, typechecks, builds Docker, and optionally pushes to a registry when configured via repository variables/secrets.

### Deployment Runbook
- Build and publish Docker image (via CI or locally)
- Deploy with Docker Compose or Kubernetes
- Place Nginx (or similar) in front, enable HTTPS, set CSP and headers
- Rollback: redeploy previous image tag; content is bundled from `content/`
