# React + Vite

## Sitemap

`npm run build` generates `dist/sitemap.xml` and `dist/robots.txt` for
`https://www.josephmoran.org`. Submit `https://www.josephmoran.org/sitemap.xml`
in Google Search Console after deploying.

The generator reads the existing notes, work, and misc lists, so new list entries
are included automatically. Notes use their named URLs; numeric aliases and
`/notes/latest` are omitted. Empty misc routes and the misc placeholder are omitted.
Update the fixed page paths in `scripts/sitemap.mjs` when adding top-level pages.

Notes published in the last two days receive Google News publication, language,
date, and title metadata. Older notes remain as ordinary sitemap entries, as
required by Google's news sitemap rules. Display dates are interpreted as UTC
calendar dates because the lists do not record publication times. The deployment
workflow rebuilds hourly to expire news metadata (subject to GitHub scheduling
delays); it must remain enabled on the default branch. News metadata helps
discovery but does not guarantee Google News inclusion.

Run `node --test scripts/sitemap.test.mjs` to check generation and news expiry.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
