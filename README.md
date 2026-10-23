# Greenwich Cultural Services

**Client landing page (2022 → Next rewrite)** — brand activation through contemporary art, UK client.

[**Live demo**](https://illiagoncharov.github.io/greenwich/) · [Figma concept](https://www.figma.com/file/G3nlVn2lGYeuurKSYEw8Ug/Greenwich?type=design&node-id=65%3A2&mode=design)

Visual 1:1 rewrite of the original static site on a modern stack. Legacy HTML/CSS kept in [`legacy/`](./legacy/) as a parity reference.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · `next/font` (custom WOFF) · static export → GitHub Pages

## Role (original delivery)

- Client communication (English)
- UI concept in Figma
- Implementation (now Next / previously HTML / CSS / JS)
- Animation tuning and page-load polish

## Run locally

```bash
git clone https://github.com/illiaGoncharov/greenwich.git
cd greenwich
npm install
npm run dev
# open http://localhost:3000/  (basePath только в production build для GitHub Pages)
```

`basePath` is `/greenwich` (GitHub Pages project URL).

```bash
npm run build   # writes static site to out/
```

## Deploy

```bash
npm run build
# publish contents of out/ to the gh-pages branch (GitHub Pages → source: gh-pages / root)
```

Site URL: [illiagoncharov.github.io/greenwich](https://illiagoncharov.github.io/greenwich/)

## Author

[Illia Goncharov](https://github.com/illiaGoncharov)
