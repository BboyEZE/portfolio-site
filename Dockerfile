# Static portfolio site served by Nginx.
FROM nginx:1.27-alpine

# Replace the default server config with ours.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the static site into the web root.
COPY index.html aboutme.html projects.html contact.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY scripts/ /usr/share/nginx/html/scripts/
COPY img/ /usr/share/nginx/html/img/

EXPOSE 80

# Basic healthcheck so the orchestrator knows the site is up.
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost/ >/dev/null 2>&1 || exit 1
