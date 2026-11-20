# Hosting: teamnmakeovers.com

(www.teamnmakeovers.com redirects here.)

The website runs on the Hostinger VPS (187.127.179.74), which it shares with
TeamN Chat (production), Weddesy and the Nizan CRM. Nothing is built on that
server.

```
merge to main ─▶ GitHub Actions builds the site ─▶ image ghcr.io/nizanit/teamnwebiste-web:latest
                      (Actions tab, ~1–2 min)                          │
the server checks every 2 minutes ─▶ downloads it, swaps it in, checks it serves, rolls back if not
```

## Deploying

Merge to `main`. That is all: a few minutes later it is live. Test in a
private window or after Ctrl/Cmd+Shift+R.

Everything on `main` goes live, so keep unfinished work on branches. The repo
is public: never commit passwords, keys or private documents.

If a release breaks the site, the server owner runs `site-deploy rollback`
(back to the build before; automatic deploys then skip that build until the
next merge), or revert the change on GitHub and merge.

## Files

| File | Where it is used |
|---|---|
| `.github/workflows/web-image.yml` | GitHub: builds and publishes the image (Node 22, `npm run build`) |
| `deploy/web.Dockerfile`, `deploy/nginx.conf` | Inside the image |
| `deploy/server/docker-compose.yml` | Server: `/root/teamnmakeovers/docker-compose.yml` |
| `deploy/server/site-deploy.sh` | Server: `/usr/local/bin/site-deploy`, installed by root |
| `deploy/server/site-deploy.cron` | Server: `/etc/cron.d/site-deploy` (the automatic deploys) |
| `deploy/server/Caddyfile.snippet` | TeamN's Caddyfile |

Changes under `deploy/server/` take effect only when the server owner reviews
them and copies them to the server by hand. That is deliberate: those files
decide what runs as root on a shared server.

Rules of the shared server: no published ports, no container named `app`,
`caddy` or `web`, memory and CPU limits on everything, no `docker ... prune`.
