# Portfolio Website

A modern portfolio website built with Express.js and EJS templating, featuring a dark theme and interactive elements.

## Overview

This repo contains a full-stack portfolio website converted from a static site to use Express.js and EJS templating. It features a responsive design, animated particles, and a contact form.

## Quick Start (Windows PowerShell)

```powershell
# Clone the repository
git clone https://github.com/sandeepky567/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:3000 in your browser.

## Features

- Dark theme with animated particles background
- Responsive design using Tailwind CSS
- Interactive sections for About, Projects, and Contact
- Contact form with client-side validation
- Static asset serving for images and styles

## Technical Notes

- Built with Express.js and EJS templates
- Static assets served from `/assets` (images) and `/styles.css` (public folder)
- Contact form posts to `/contact` endpoint (currently simulated)
