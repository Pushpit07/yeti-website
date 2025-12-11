---
description: How to build and deploy the static website to Firebase Hosting
---

# Deploying YETI Website to Firebase Hosting

This workflow guides you through building your static Next.js website and deploying it to Firebase Hosting.

## Prerequisites

1.  **Firebase CLI**: Ensure you have the Firebase CLI installed.
    ```bash
    npm install -g firebase-tools
    ```
2.  **Firebase Login**: Log in to your Google account.
    ```bash
    firebase login
    ```

## Step 1: Initialize Firebase (First Time Only)

If you haven't initialized Firebase in this project yet:

1.  Run the initialization command:
    ```bash
    firebase init hosting
    ```
2.  **Select Project**: Choose "Use an existing project" (if you created one in Firebase Console) or "Create a new project".
3.  **Public Directory**: When asked "What do you want to use as your public directory?", type **`out`**.
    *   *Note: Next.js with `output: 'export'` generates files into the `out` folder.*
4.  **Single Page App**: "Configure as a single-page app (rewrite all urls to /index.html)?" -> **Yes**.
5.  **GitHub Actions**: "Set up automatic builds and deploys with GitHub?" -> **No** (unless you want to set this up now).
6.  **Overwrite**: If asked to overwrite `out/index.html` or `404.html`, select **No**.

## Step 2: Build the Website

Run the build command to generate the static files. This will create/update the `out` directory.

```bash
// turbo
npm run build
```

## Step 3: Deploy to Firebase

Deploy the contents of the `out` directory to Firebase Hosting.

```bash
// turbo
firebase deploy --only hosting
```

## Troubleshooting

-   **"Command not found"**: If `firebase` command works but `npm run build` fails, ensure standard dependencies are installed (`npm install`).
-   **Image Issues**: Since this is a static export, `next/image` is configured with `unoptimized: true` in `next.config.ts`. This is correct for static hosting.
