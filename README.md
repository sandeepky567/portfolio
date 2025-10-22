# Portfolio Website (Express + EJS)

This repo is a conversion of a static portfolio site into an Express + EJS project.

Quick start (Windows PowerShell):

```powershell
cd "d:\web\portfolio website extra"
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

Notes:
- Static assets are served from `/assets` (original images) and `/styles.css` is served from the `public/` folder.
- The contact form posts to `/contact` and currently only logs to the server and redirects back with a simulated success.
