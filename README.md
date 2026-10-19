# Noureddine El Kassi — portfolio

GitHub Pages publishing is configured at **https://elkassi.github.io/Portfolio/** using `.github/workflows/deploy-pages.yml`. See `DEPLOYMENT.md` for the current workflow and retained previous-hosting information. Analytics is awaiting the user's Measurement ID; it is not active yet.

A bilingual React / TypeScript portfolio using Vite and Tailwind CSS. Permanent hosting is configured through Sites; see [DEPLOYMENT.md](DEPLOYMENT.md) for the address and publication workflow.

Source repository: [elkassi/Portfolio](https://github.com/elkassi/Portfolio). The source preserves the existing approved home, project explorer and project-detail revision. The user explicitly requested public hosting on 17 October 2026. Earlier statements about no deployment describe historical revisions.

For continuity, read [PROJECT_HANDOFF.md](PROJECT_HANDOFF.md). For a new Cloud session, follow [CLOUD_SETUP.md](CLOUD_SETUP.md) and paste [CLOUD_CONTINUATION_PROMPT.md](CLOUD_CONTINUATION_PROMPT.md). The raw local conversation backup is private and outside this repository.

## Run

Requires Node.js 20.19+ or 22.12+ and a package manager.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Or use `npm install` followed by `npm run dev`. On this machine the global npm launcher is broken, so the installed project can also run directly:

```sh
node node_modules/vite/bin/vite.js --host 127.0.0.1
```

On Windows, `START-PORTFOLIO.cmd` runs the installed local project. The terminal must stay open while viewing the preview. Vite prints the exact local URL; the default port is 5173.

For a remote/Cloud preview, use `pnpm exec vite --host 0.0.0.0` and the environment's forwarded URL. No environment secrets, backend, external font service or API keys are required. The preserved local build used Node.js 24.15; Node 24 LTS is a suitable setup target. Use pnpm with the supplied lockfile for reproducibility.

## Build

```sh
pnpm check
pnpm build
pnpm preview
```

`dist/` contains the static production build. Serve it over HTTP, rather than opening `dist/index.html` directly. Hash routes make individual projects and filtered collections accessible without server rewrite rules.

## Site structure

- Home: a full-width introduction that transforms into a field-of-work overview as the visitor scrolls. Availability and project / experience actions remain in the opening view.
- Experience and education: a continuous Lear / Renault / EMSI story with a sticky index, active-entry tracking, detailed responsibilities and direct navigation.
- Project index: all documented projects, category navigation, search and individual case studies. Oracle is a certificate, not a project.
- About: three interactive perspectives and a tinted working-language band; English is summarized as CEFR C1.
- Technical toolkit: expandable groups linked to relevant work.
- Certificates and learning: proof links open directly in a new tab when real URLs or files are supplied.
- Contact: a cobalt closing section with white copy and a deeper-blue dark-theme variant, email, copy action and the supplied French CV. The duplicate project gateway has been removed; the opening and header still lead to Project Atlas.
- Equivalent English / French copy, light / dark themes, keyboard navigation and reduced-motion support.
- Approved Editorial header with cobalt lettering on hover/focus, Signature cut home actions, and compact SVG action links. Styles are scoped in `src/navigation.css`; symbols live in `src/components/ActionIcon.tsx`. The mobile menu includes Contact.

## Update content

- `src/content.ts`: profile, project facts/dates, skills, certificates, contact, CV files and missing information.
- `src/experience.ts`: detailed career / education content and About perspectives.
- `src/copy.ts`: interface text in both languages.
- `src/App.tsx`: composition and routes.
- `src/projectIndex.ts`: category membership and localized project-date formatting.
- `src/components/ProjectExplorer.tsx`, `ProjectBlueprint.tsx`, and `src/projects.css`: the visual project directory, concept diagrams and responsive preview behavior.
- `src/components/ProjectDossier.tsx`, `SystemWalkthrough.tsx`, `src/caseEditorial.ts`, and `src/dossier.css`: the detail-page design and interactive workflow presentation. Representative desktop/tablet/mobile checks and scoped fixes are recorded in `VERIFICATION.md`; user approval remains pending.
- `src/styles.css`: the base monochrome visual system and responsive content layouts. `src/contact.css` scopes the inverse contact palette; `src/home-refinements.css` styles the language band and longer home labels.
- `src/motion.ts`: GSAP timelines, ScrollTrigger choreography, Lenis scrolling and page transitions.
- `src/motion.css`: scene compositions, masks, sticky stages and responsive / reduced-motion fallbacks.
- `src/components/ImmersiveHero.tsx`, `MotionChrome.tsx`, `AnimatedDisclosure.tsx`: the opening scene, progress / chapter navigation, and animated skill disclosures.

Project dates use `YYYY-MM`, `YYYY-MM/YYYY-MM`, or a supplied year range. The date formatter localizes month labels. All ten current project entries have dates supplied in the CV or confirmed by the user. Do not invent a date for a new project.

Availability is set only in `profile.availability`: update `start` and the translated duration there. The visible month/year is formatted from the same value throughout the site.

### Certificate proofs

For a Coursera certificate, add its real verification URL to the entry’s `proof` field:

```ts
{ title: 'Exact certificate title', issuer: 'Issuer', kind: { en: 'Certificate', fr: 'Certification' }, proof: 'THE_REAL_VERIFICATION_URL' }
```

For a PDF, put the supplied file in `public/certificates/` and set `proof` to `/certificates/actual-file.pdf`. Certificate details open the original proof in a new tab. An optional `preview: { src, width, height }` uses a real local certificate image; its thumbnail opens an accessible dialog with an original-proof action. Add `proofType: 'coursera' | 'pdf'` and a confirmed ISO `date` for localized labels/dates. Preserve official course titles. No placeholder links or generated certificate images are displayed.

The user supplied ten Coursera proof links and the Wall Street English CEFR C1 PDF on 18 October 2026. All eleven now have previews/proofs. The PDF confirms Level 20 Mastery on 24 April 2026; the prior 2025 certificate date is superseded. Oracle remains without proof until supplied. Its existing entry is retained.

### Real project images

Project previews use original concept diagrams, clearly labeled as such. They are illustrations of documented project scope. To add real screenshots, save them under `public/projects/` and add a project’s `screenshots` entries with `src` and translated `alt` text. Check industrial screenshots for confidential information first.

The supplied CV is in `public/cv/`. Add an approved English file and `profile.cv.en` to display its download automatically. Add actual LinkedIn / GitHub URLs under `profile.social`; absent URLs stay hidden.

## Deployment preparation

Publication requires the user’s explicit request. Before publishing, set the production origin in social metadata, verify proof / social links, and review the factual checklist. All fonts are bundled locally; no analytics, external font requests, paid services or backend are required. Font license notices are in `public/licenses/`.

See `CONTENT-CHECKLIST.md` for factual items still awaiting source material and `VERIFICATION.md` for completed checks.

## Motion revision

GSAP 3.15 and Lenis 1.3 coordinate motion instead of applying isolated entrance effects. On desktop, the opening stays in place briefly while its headline exits through line masks and the discipline overview enters. The project gateway expands through a circular mask; career content follows ordinary document flow with a sticky index; route changes use three timed shutters. Skill groups animate their real height.

Wheel smoothing is enabled for desktop mouse input. Touch scrolling remains native. The pinned compositions are disabled below 900px or on short viewports, and system reduced-motion preferences remove scene holds and transitions. Essential routes, project filters and direct links work without completing a scroll sequence.

## Engineering art direction

The opening uses Barlow Condensed display typography, black text, a cobalt accent, and an original geometric field map drawn in `EngineeringGraphic.tsx`. The map is a conceptual visual of connected disciplines, not a project screenshot or a live system. Its three links open the Industry, AI, and Data collections. The drawing reacts to pointer movement and keyboard focus, can be paused, follows light/dark mode, and renders a static composition for reduced-motion preferences. Animation stops when the graphic is outside the viewport or the document is hidden. `engineering.css` defines the visual system; the existing GSAP/Lenis scroll and page transitions are preserved.

## Visual project explorer

The full collection contains ten projects in five disciplines. On desktop, hovering or focusing a row updates a sticky preview; clicking the row also selects it. Each row's folder symbol and the preview's compact open action lead directly to the case study. On mobile, tapping a row reveals its preview inline and places the heading below the sticky category controls. Search combines with the selected category. Clearing search or changing category selects the first matching project.

Every project has a distinct SVG concept diagram based on supplied project facts. These diagrams are not product screenshots, measured results or live dashboards. Motion includes signal paths, a gentle drawing drift, pointer response and a masked transition between previews. A shared pause control stops the SVG animations; offscreen previews pause, and reduced-motion preferences disable the animations. The front-page composition remains in `ImmersiveHero.tsx` and `EngineeringGraphic.tsx`.

## Project-detail revision

Individual projects now use an editorial opening with a concept diagram, accurate role/date, a sticky chapter bar, distinct problem/outcome sections, and a selectable workflow scene for documented workflows. Industrial contributions reuse the detailed career source. Previous/all/next navigation keeps the collection easy to explore. Projects with limited evidence omit unsupported sections.

Walkthroughs use five concept-diagram families in `WalkthroughDiagram.tsx`: inference, allocation, pipeline, network and inventory. Each is assigned to projects by documented scope. Supporting English/French implementation notes live in `caseEditorial.ts`; do not fill gaps with assumed capabilities.

## Approved local versions

The user approved the current composition on 17 October 2026. Before this project's title/diagram polish, a local checkpoint was saved as commit `ae61f34`, tag `approved-portfolio-2026-10-17`. The user subsequently approved that polish, preserved under local tag `approved-projects-2026-10-17`. Future approved milestones should get a local Git checkpoint before the next requested changes. Saving a version does not authorize pushing or deployment. To inspect an earlier version, prefer a separate checkout/worktree so current uncommitted work remains intact.

The home, explorer, dossier composition and latest title/diagram polish were approved by the user; preserve them. The user also approved the subsequent project-name suggestions, applied in English/French and saved under local tag `approved-project-names-2026-10-17`. Reduced-motion emulation remains outstanding. See `VERIFICATION.md` and the handoff before continuing. Generated build files, dependencies, machine credentials and raw conversation archives are excluded from Git.
