# 🌐 Ian Andler Pascual, Portfolio Website

A personal portfolio to showcase my background, projects, and contact information.
Built with plain HTML, CSS, and JavaScript (no build step), with a refined dark theme,
tasteful motion, and a responsive layout.

## 🚀 Features

- **Bilingual (EN / 日本語)**: a header toggle swaps the whole site between English and
  Japanese in place (no reload), remembers your choice, and updates the typewriter words.
  All Japanese lives in `scripts/i18n.js`, so copy is easy to edit in one place.
- **Landing page**: animated typewriter intro and quick links.
- **Projects page**: a tabbed swap between **Professional** and **Personal** work (no page reload).
- **About page**: quick facts and hobbies.
- **Contact page**: direct ways to reach me.
- **Tasteful motion**: scroll-reveal animations, smooth hovers, animated nav underline
  (respects `prefers-reduced-motion`).
- **Collapsible details**: "Read more" toggles per project.

## 🛠️ Running locally

It's a static site, so any static server works. For example:

```bash
# Python
python -m http.server 8000
# then open http://localhost:8000
```

## 🐳 Self-hosting with Docker

The site ships as a small Nginx container so you can host it on your own server
instead of GitHub Pages.

### With Docker Compose (recommended)

```bash
docker compose up -d --build
# Site is now at http://<your-server>:8080
```

Change the published port by editing the `ports` line in `docker-compose.yml`
(e.g. `"80:80"` to serve on the standard HTTP port).

### With plain Docker

```bash
docker build -t portfolio-site .
docker run -d --restart unless-stopped -p 8080:80 --name portfolio-site portfolio-site
```

### Updating after changes

```bash
docker compose up -d --build   # rebuild and restart
```

> **Note:** Put this behind a reverse proxy (Caddy, Nginx Proxy Manager, Traefik)
> for HTTPS / a custom domain. The container only serves plain HTTP on port 80 internally.

## 📁 Structure

```
index.html        Landing
aboutme.html      About
projects.html     Professional + Personal tabs
contact.html      Contact
styles.css        Theme + layout + animations
scripts/
  i18n.js         EN/JA translations + language toggle
  site.js         Tabs, read-more, scroll reveal
  typewriter.js   Hero typewriter (words per language)
img/              Images
Dockerfile        Nginx static image
nginx.conf        Server config (caching, gzip, security headers)
docker-compose.yml
```
