# The image the server runs: nginx serving dist/, which the GitHub workflow
# (.github/workflows/web-image.yml) has already built. Nothing is compiled here.
FROM nginx:stable-alpine
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html
