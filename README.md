# Personal Website

A static, accessible portfolio scaffold built with Next.js App Router, TypeScript, Tailwind CSS, and MDX-ready project content.

## Getting started

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Customize before launch

- Add the final production website URL to `app/sitemap.ts` and `app/robots.ts`. “Consumer software and SaaS” is reflected in the site copy, but this needs to be the public website URL.
- Replace the placeholder `public/resume.pdf` with the actual résumé PDF.
- Add project MDX files under `content/projects`; use the existing example frontmatter as the template.
- Update `lib/projects.ts` while the MDX content loader is being introduced. The included Zod schema is the contract the loader should enforce.
- Set the production URL in `app/sitemap.ts` and `app/robots.ts`.

## Production

`npm run build` writes a static site to `out/`, suitable for Vercel, Netlify, or Cloudflare Pages.
