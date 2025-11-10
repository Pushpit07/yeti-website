# Deployment Guide

## Requirements
- Docker / Docker Compose
- Nginx (or another reverse proxy) with TLS
- Node 20+ (only if running without Docker)

## Build and Run (Docker)
```bash
docker build -t yeti-website:latest .
docker run --rm -p 3000:3000 yeti-website:latest
```

## Docker Compose (app only)
```yaml
version: "3.9"
services:
  web:
    build: .
    image: yeti-website:latest
    ports:
      - "3000:3000"
```

## Reverse Proxy (Nginx)
Use `deploy/nginx.conf` as a starting point. Terminate TLS at Nginx and proxy to the app at `http://web:3000`.

## CI/CD
The GitHub Actions workflow builds, typechecks, builds Docker, and can push to a registry if configured:
- `vars.REGISTRY` (e.g. ghcr.io)
- `secrets.REGISTRY_USERNAME`
- `secrets.REGISTRY_PASSWORD`

## Rollback
- Keep previous image tags (e.g. by commit SHA)
- Update Compose/K8s deployment to the last known-good tag


