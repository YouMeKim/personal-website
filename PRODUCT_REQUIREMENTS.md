# Product Requirements Document: Personal Portfolio Website

## 1. Overview

### Product name

Personal Website

### Purpose

Build a fast, polished, and accessible personal portfolio website for an NYC-based software engineer with more than ten years of experience. The site will serve as both a digital resume and a curated showcase of personal projects, making it easy for recruiters, hiring managers, collaborators, and peers to understand the engineer's background, capabilities, and current work.

### Product principles

- Establish credibility quickly through clear experience, outcomes, and links.
- Put projects and their engineering decisions at the center of the experience.
- Keep the site simple, static, performant, and easy to maintain.
- Ensure the experience is excellent on mobile as well as desktop.
- Make content easy to update from version-controlled Markdown/MDX files.

## 2. Goals and Success Criteria

### Primary goals

1. Communicate professional identity, seniority, and areas of expertise within the first screen.
2. Provide an online resume with a downloadable PDF version.
3. Showcase selected projects with meaningful context beyond a repository link.
4. Give visitors clear, low-friction ways to contact the site owner or view professional profiles.
5. Provide a strong technical and visual impression without unnecessary complexity.

### Success criteria

- Visitors can reach projects, resume, and contact links from any page.
- A visitor can understand the owner’s experience, focus areas, and location within 30 seconds.
- Every featured project has a description, role, technology list, and relevant links.
- The site is responsive, keyboard navigable, and uses semantic HTML.
- Production pages achieve a target Lighthouse score of 95+ for Performance and Accessibility, and 100 for SEO where feasible.
- Content changes such as adding a project or article do not require a database or CMS.

### Non-goals for the MVP

- User accounts or authentication.
- A custom backend or database.
- Comments, likes, or other social interactions.
- A contact form requiring server-side handling.
- Complex, animation-heavy visual effects.

## 3. Audience

| Audience | Needs |
| --- | --- |
| Recruiters and hiring managers | Quick summary of experience, resume, projects, and contact details. |
| Engineering peers | Technical depth, project decisions, code, and professional links. |
| Potential collaborators | Current interests, selected work, and an easy contact path. |
| Personal network | A clear, shareable home for career updates and projects. |

## 4. User Stories

- As a recruiter, I want to quickly understand the engineer’s experience and specialty so I can decide whether to continue evaluating their profile.
- As a hiring manager, I want to review a readable online resume and download a PDF copy for the hiring process.
- As a technical reviewer, I want to see projects with context, technology choices, and source or live-demo links.
- As a visitor on a phone, I want the site to be easy to read and navigate without zooming or horizontal scrolling.
- As the site owner, I want to add or update projects and posts by editing MDX files in the repository.
- As a visitor using assistive technology, I want logical headings, meaningful labels, sufficient contrast, and full keyboard support.

## 5. Information Architecture

### Required MVP routes

| Route | Purpose |
| --- | --- |
| `/` | Landing page with introduction, highlights, and primary calls to action. |
| `/about` | Career narrative, strengths, technologies, and optional personal interests. |
| `/projects` | Filterable or browsable index of selected projects. |
| `/projects/[slug]` | Detailed project case study generated from MDX content. |
| `/resume` | Online resume with experience, skills, education, and PDF download. |
| `/contact` | Email and professional-profile links. |

### Optional routes

| Route | Purpose |
| --- | --- |
| `/blog` | Index of technical writing and career notes. |
| `/blog/[slug]` | MDX-based individual article. |
| `/now` | A lightweight page describing current work, reading, and learning. |

## 6. Functional Requirements

### 6.1 Global navigation and footer

- Display a consistent navigation bar with links to Home, About, Projects, Resume, and Contact.
- Clearly indicate the active route when practical.
- Include a visible, accessible theme control for light, dark, and system preference.
- Use a responsive mobile navigation pattern that is fully keyboard accessible.
- Include footer links for GitHub, LinkedIn, email, and the resume PDF.

### 6.2 Home page

- Present a concise headline, for example: “NYC-based software engineer building thoughtful, scalable software.”
- State that the owner has 10+ years of software engineering experience.
- Include a short summary of focus areas, such as web applications, distributed systems, developer tools, or other owner-selected specialties.
- Provide prominent calls to action for viewing projects and downloading/viewing the resume.
- Surface a curated set of 2–4 featured projects.
- Display social/contact links and, optionally, a professional photo.

### 6.3 About page

- Provide a concise career narrative that complements rather than duplicates the resume.
- Highlight areas of expertise, industries, and selected technologies.
- Include current professional interests and optional personal interests.
- Use scannable sections and avoid long, unstructured autobiography.

### 6.4 Projects

- Store project content in MDX files with frontmatter.
- Render a project index with title, short description, thumbnail or visual, technology tags, and project category.
- Support category filtering when there are enough projects to benefit from it (e.g., Frontend, Backend, Cloud, AI, Open Source).
- Each project detail page must include:
  - Project overview and problem statement.
  - The owner’s role and contribution.
  - Technologies used.
  - Key engineering challenges and solutions.
  - Outcomes, metrics, or lessons learned when appropriate.
  - Links to a live demo, source repository, and/or relevant write-up when available.
- External links must open safely and communicate that they leave the site.

### 6.5 Resume

- Present experience in reverse chronological order.
- Include role, company, dates, location or remote status, responsibilities, and selected impact statements.
- Include a skills section grouped by meaningful categories.
- Include education, certifications, awards, or open-source contributions when applicable.
- Provide a clear download link to a PDF resume stored in the static public assets.

### 6.6 Contact

- Provide a mailto email link.
- Provide links to LinkedIn and GitHub.
- Optionally add a short availability or collaboration note.
- Do not require a contact form in the MVP.

### 6.7 Blog and Now page (post-MVP)

- Use MDX for posts, with title, date, description, tags, and optional reading time in frontmatter.
- Provide blog index, individual post pages, tag support, RSS, and search as the content library grows.
- The Now page should be easy to update and communicate current work, learning, or interests.

## 7. Content Requirements

### Content management

- All projects and optional blog posts must live in version-controlled MDX files.
- Content should be separated from page components and reusable site configuration.
- Project frontmatter should support the following fields:

```yaml
title: "Project title"
slug: "project-slug"
summary: "One-sentence description"
published: true
featured: false
categories: ["Backend", "Cloud"]
technologies: ["TypeScript", "Next.js", "PostgreSQL"]
image: "/images/projects/project-slug.png"
demoUrl: "https://example.com"
repositoryUrl: "https://github.com/example/project"
```

### Initial content checklist

- Professional name and concise professional headline.
- NYC location and 10+ years of experience statement.
- Email, GitHub, LinkedIn, and resume PDF.
- At least three project entries, prioritizing work that demonstrates range and ownership.
- Experience, skills, and education for the resume page.
- Open Graph image, favicon, and concise site description.

## 8. Design and Experience Requirements

- Use a clean, modern, editorial layout that prioritizes readability and evidence of work.
- Maintain consistent typography, spacing, visual hierarchy, and interaction states.
- Support dark mode, light mode, and system preference, preserving the user’s selection when practical.
- Use subtle transition and hover effects only when they improve feedback or clarity.
- Use optimized, purposeful imagery; do not use decorative assets that significantly affect load time.
- Meet WCAG 2.2 AA expectations where practical, including color contrast, visible focus styles, semantic headings, alt text, and keyboard operation.

## 9. Technical Requirements

### Stack

- **Framework:** Next.js using the App Router.
- **Language:** TypeScript.
- **UI:** React.
- **Styling:** Tailwind CSS.
- **Content:** MDX for projects and optional blog posts.
- **Icons:** Lightweight accessible icon library such as Lucide.
- **Deployment:** Static deployment using Next.js static export where compatible, hosted on Vercel, Netlify, or Cloudflare Pages.

### Architecture

- Prefer static generation for all public content.
- Do not introduce a backend unless a future feature requires one.
- Keep content under a structure such as `content/projects` and `content/blog`.
- Store static images and the resume PDF under `public`.
- Use reusable components for navigation, footer, hero content, project cards, tags, timeline entries, and theme control.
- Validate frontmatter at build time where practical.

### Performance

- Optimize images using Next.js image handling or static, appropriately sized image assets.
- Minimize client-side JavaScript; use server components and static rendering by default.
- Load fonts efficiently and avoid blocking external scripts.
- Keep analytics optional and privacy-conscious (e.g., Plausible or Umami).

### SEO and sharing

- Provide unique page titles, descriptions, canonical URLs, and Open Graph metadata.
- Generate sitemap and robots directives.
- Add JSON-LD structured data for a Person and, where helpful, projects or articles.
- Provide a polished Open Graph image for social sharing.

## 10. Analytics and Privacy

- Analytics are optional for launch.
- If enabled, prefer a privacy-focused provider and collect only information needed to understand aggregate site usage.
- Do not add advertising trackers or sell visitor data.
- Document any analytics tool in a privacy notice if one is published.

## 11. MVP Scope and Prioritization

### MVP (launch requirement)

- Responsive Home, About, Projects, Project Detail, Resume, and Contact pages.
- MDX-driven project content with at least three complete examples.
- Professional profile links and downloadable resume PDF.
- Dark/light/system theme support.
- Responsive navigation, semantic markup, basic accessibility audit, and metadata.
- Static deployment configuration with a custom-domain-ready setup.

### Next release

- Blog index and MDX article pages.
- Project filters and richer project case-study templates.
- Career timeline visualization.
- RSS feed and privacy-friendly analytics.
- Improved social preview imagery and automated “last updated” metadata.

### Future enhancements

- Full-text search for blog and project content.
- Dedicated Now page.
- Architecture diagrams and interactive technical demos.
- Contact form through a managed provider, with spam prevention and privacy disclosure.
- Internationalization only if a real audience need emerges.
- Automated content validation, visual regression checks, and accessibility checks in CI.

## 12. Acceptance Criteria

The MVP is ready to launch when:

- All required routes render correctly on current desktop and mobile browsers.
- Navigation, theme control, and primary calls to action work with keyboard and touch input.
- The resume page is complete and the PDF download succeeds.
- At least three projects display correctly with their required details and valid external links.
- Each page has descriptive metadata and social sharing preview data.
- The site has no critical accessibility issues in an automated audit and has been manually checked for keyboard navigation.
- The site builds successfully and can be deployed as a static site without server-only dependencies.
- No personal contact information is exposed beyond what the owner intentionally publishes.

## 13. Open Decisions

- Final personal brand name, headline, and visual direction.
- Whether to use a professional photo on the landing page.
- Final project selection and which projects can be publicly discussed.
- Hosting provider and custom domain.
- Whether analytics should be enabled at launch.
- Whether the optional blog is part of the initial launch or a follow-up release.
