# CoBox – Homepage

Statische Landingpage für CoBox (Zielgruppe: KMU, Vereine und NGOs), gebaut mit [Astro](https://astro.build).
Schriften (Inter, Space Grotesk, JetBrains Mono) sind selbst gehostet über Fontsource – keine Anfragen an Google Fonts.

## Entwickeln

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # statische Ausgabe in dist/
```

## Vor dem Livegang

Platzhalter in `src/site.config.ts` ersetzen: Domain, Kontakt-/Demo-Link, Doku-Link. Preise eintragen, sobald sie feststehen (bis dahin zeigt die Seite „Preis folgt“).
Außerdem `src/pages/impressum.astro` und `src/pages/datenschutz.astro` befüllen.

## Struktur

- `src/pages/index.astro` – Landingpage
- `src/layouts/Base.astro` – Kopf, Navigation, Footer
- `src/components/Logo.astro` – Bildmarke + Wortmarke (`variant="light|dark"`)
- `src/components/Icon.astro` – Modul-Icons
- `src/styles/global.css` – Design-Tokens (Farben, Schriften) und Basis-Styles

## Docker

```sh
docker compose up --build                    # statische Seite via Caddy auf http://localhost:8080
docker compose --profile dev up dev          # Astro-Dev-Server mit Hot Reload auf http://localhost:4321
```

Der `dev`-Service baut das Image bei jedem `up` neu (`pull_policy: build`), damit
`node_modules` immer zu `package.json` passt. Es wird nur `src/`, `public/` sowie
`astro.config.mjs` und `tsconfig.json` eingebunden – Änderungen an diesen Dateien
werden sofort neu geladen, neue Abhängigkeiten landen über den Rebuild im Container.

Das Prod-Image (`target: runtime`) enthält den fertigen Build in `/srv` und wird von
[Caddy](https://caddyserver.com) auf Port 80 ausgeliefert (`docker/Caddyfile`):
`/_astro/*` wird ein Jahr immutable gecacht, HTML nie, Health-Check unter `/healthz`.
TLS macht ein vorgelagerter Reverse Proxy.

### Automatischer Build

`.github/workflows/docker-publish.yml` baut bei jedem Push auf `main`, bei Tags `v*`
und auf Pull Requests das Prod-Image (Multi-Arch: amd64 + arm64) und pusht es nach
GitHub Container Registry:

```sh
docker pull ghcr.io/co-box/homepage:latest
docker run -d --name homepage -p 80:80 --restart unless-stopped ghcr.io/co-box/homepage:latest
```

Tags: `latest` (main), Branch-Name, Commit-SHA sowie `1.2.3` / `1.2` bei `v*`-Tags.
Pull Requests werden nur gebaut, nicht gepusht.
