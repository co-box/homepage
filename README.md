# CoBox – Homepage

Statische Landingpage für CoBox, gebaut mit [Astro](https://astro.build).
Schriften (Inter, Space Grotesk, JetBrains Mono) sind selbst gehostet über Fontsource – keine Anfragen an Google Fonts.

## Entwickeln

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # statische Ausgabe in dist/
```

## Vor dem Livegang

Platzhalter in `src/site.config.ts` ersetzen: Domain, Kontakt-/Demo-Link, Lizenz, Preise, Doku-Link.
Außerdem `src/pages/impressum.astro` und `src/pages/datenschutz.astro` befüllen.

## Struktur

- `src/pages/index.astro` – Landingpage
- `src/layouts/Base.astro` – Kopf, Navigation, Footer
- `src/components/Logo.astro` – Bildmarke + Wortmarke (`variant="light|dark"`)
- `src/components/Icon.astro` – Modul-Icons
- `src/styles/global.css` – Design-Tokens (Farben, Schriften) und Basis-Styles
