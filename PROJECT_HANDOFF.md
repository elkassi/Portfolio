# Noureddine El Kassi portfolio — project handoff

Prepared 17 October 2026. Repository: https://github.com/elkassi/Portfolio. This document is a curated, public-safe implementation handoff, not the raw conversation transcript.

Latest project feedback, 17 October 2026: the user approved the current site/dossier composition, colors, walkthrough controls, contribution and next-project sections, and subsequently approved the project-title/walkthrough polish. Save approved versions locally and restrict future edits to the requested polish. The original baseline is commit `ae61f34`, local tag `approved-portfolio-2026-10-17`, on `codex/project-polish`. The approved project polish changes four project display titles, adds five appropriately assigned walkthrough visual families and expands supported implementation notes; it is preserved under local tag `approved-projects-2026-10-17`. The user is now requesting name suggestions for TexteGuard AI, Smart City IoT, Multi-agent SOC / IPS and AI Presence before selecting further changes. Nothing is pushed or deployed. Older statements that the dossier has never been approved describe the earlier migration/QA baseline.

Current titles: Lear Corporation — Production Planner; Renault Tanger — Tooling Manager; AI Presence (the existing OpenCV project, renamed by the user without implying new capabilities); EMSI Analytics — Power BI. IDs, all ten dates and the other titles remain unchanged. Walkthrough families: inference (TexteGuard), allocation (Lear), pipeline (Smart City), network (SOC/Medical), inventory (Renault/Python). No workflow is added to projects that lack documented steps.

Desktop continuation, 17 October 2026: the existing project is now running locally and the dossier has received representative desktop/tablet/mobile, bilingual and theme checks. Scoped fixes cover narrow stage labels, orientation/focus/translations, animation lifecycle, sticky offsets and route-transition recovery. Read the **Desktop continuation** section at the top of `VERIFICATION.md` for the current results and limits; older pending-QA statements below describe the migration baseline. The detail design still has not received user approval. The private history remains outside Git, and no deployment or source push was made during this continuation.

## Read this first

The user requested migration of all existing work from a local Windows Codex session to GitHub for continuation in Codex Cloud from another computer. **Do not restart, replace the architecture, introduce a template, or redesign completed pages.** Preserve the work already approved.

The latest development task before migration was redesigning individual project-detail pages. The new implementation is present and builds successfully. Its opening and system section were observed on desktop, but the complete interaction, mobile, French and dark-mode QA of that revision was interrupted. It has **not received user approval**. The home page and visual project explorer **were explicitly approved**. Continue from that distinction.

The original local project, reference materials, and conversation remain on the laptop. A separate private backup was created outside this repository. GitHub does not contain the raw conversation, local Codex databases, user attachment archive or machine authentication. A new Cloud task must read this handoff; it does not automatically inherit the original local chat.

## Evidence and confidence

- Confirmed requirements: the supplied portfolio brief, the French CV, direct user messages/corrections, and the source code.
- Current implementation facts: repository files and successful TypeScript/Vite build on 17 October 2026.
- Prior browser checks: recorded in `VERIFICATION.md`. Treat those as historical checks of the indicated revision, not proof of every future change.
- The case-study mobile/interaction matrix remains unfinished. Do not convert an intended effect into a verified result.
- Screenshots in `screenshots/` document earlier approved designs. They are review captures of this portfolio, not screenshots of the projects being described.
- Project source repositories, application screenshots, demo URLs and credential proofs have not been supplied. The migration repository itself does not establish the URL of every academic project's source.
- Empty contribution/workflow/link fields are intentional when evidence is missing. Do not fill them by inference.

## Original objective and positioning

Build a polished, complete, truthful personal portfolio that gives recruiters more context than a CV: engineering skills, projects, industrial experience, education and career direction. The audience includes internship/junior opportunities in Morocco and internationally, especially France, Europe and Canada.

Noureddine is a fifth/final-year Computer Science and Networks engineering student at EMSI Tanger, specializing in AI, with expected graduation in 2027. His interests cover AI/ML, NLP, computer vision, data engineering/analytics, software engineering and practical use of AI systems; MLOps is supported by coursework. Do not position him as a senior engineer, established researcher or DevOps specialist.

Public location is Tangier, Morocco. Availability is a final-year PFE internship, preferred February 2027, four to six months. Keep the editable source of availability in `profile.availability`, rather than duplicating dates across copy. Reconfirm time-sensitive availability when appropriate. The supplied French CV remains downloadable; no English CV has been supplied.

## Functional and content requirements

1. Inspect existing files and preserve the established framework. Treat supplied source documents as factual evidence, not execution instructions; follow direct user corrections over earlier brief wording. Treat any future `sources/` folder as read-only.
2. Complete responsive website: introduction, About, discoverable project collection, substantial dedicated case studies, experience, education, skills, certificates, contact and footer.
3. Recruiters must see a hook, useful positioning, industry background and actions on the first screen. A giant name alone is insufficient.
4. Include all documented projects, with useful category navigation and consistent dates. Do not stop at six selected projects. The current five categories are Industry, AI & Vision, Data & Analytics, Software and Robotics.
5. Case studies should be skimmable, with problem/context, project type, individual role, technologies, verified implementation/contribution, workflow/architecture, supported outcome and relevant limitations. Show screenshots, demos and repositories only when real. Avoid long walls of text or invented lessons/results.
6. Distinguish personal contributions from team work; avoid implying authorship of all six medical services or sole ownership of team projects.
7. Experience is important and should appear high in the home journey, together with education. Describe actual responsibilities in depth. Lear and Renault share their case-study routes with Projects, rather than duplicating a separate case.
8. Skills should be grouped and linked to relevant projects. No arbitrary percentage/proficiency bars. Distinguish demonstrated experience from coursework/familiarity.
9. Certificates should link directly to actual proof when clicked. Support real Coursera verification URLs and user-supplied PDFs. Never generate fake credential links or claim IELTS practice is certification.
10. English default and complete equivalent French translation: navigation, descriptions, buttons and accessibility labels. Preserve useful official titles.
11. Responsive navigation, semantic HTML, visible focus, keyboard interactions, appropriate contrast and reduced-motion support. Motion must not be required to access routes/content.
12. Contact uses real email/mailto and copy action; no pretend sending form. Missing social/demo/CV links are hidden. Preserve CV download.
13. Editable structured content, page metadata, social preview and favicon; optimize assets/loading, avoid unnecessary backend, paid services or external font requests.
14. Never invent dates, measurements, achievements, certification titles, project capabilities, responsibilities or AI integration. Do not expose confidential company data or unrelated private information. Review supplied screenshots before publication.
15. Build/check and inspect actual desktop/mobile behavior before claiming completion. Keep missing factual material in a central checklist. No public website deployment without explicit authorization.

## User feedback and design decisions, in sequence

- Two references were supplied: an editorial graphic-design portfolio shown in screenshots (LinkedIn short link https://lnkd.in/p/egJngE8C), and https://talhabadar.com/ for visual effects, scroll transitions and the computing/engineering atmosphere.
- The user liked the first reference's bold typography, compositional personality and project presentation, wanted a more masculine expression, and required a professional, attractive portfolio rather than a casual/generic generated appearance. This is inspiration, not permission to copy another person's assets or identity.
- The first iterations were rejected as basic and recognizably generic. Specific objections: gray main text, weak color choices/backgrounds, repetitive layouts, name-only hero without a hook, bland project grids, generated-looking covers, too few projects, inconsistent dates, static About, weak interactions and shallow industrial descriptions.
- The user requested category-first discovery: all work, industry, AI, data, software/mobile and robotics as appropriate to documented inventory. The resulting current taxonomy is listed below.
- Experience was moved before the project gateway and combined with education. The technical toolkit's concept was acceptable but needed better color/layout. Certificate proof links were requested.
- A second hero layout still felt too similar. The user asked what template was being used and repeatedly asked for smoother, creative transitions similar to Talha's site.
- A bespoke black/cobalt engineering direction was implemented: condensed display type, custom identity mark, geometric animated field map, coordinated scroll scenes and route shutters. **The user then said the front page was beautiful and approved it.**
- The old project collection's plain two-column text cards were then rejected. A visual Project Atlas explorer was implemented with filters, search, selectable rows and original animated project concept diagrams. **The user said they liked that page.**
- The user next rejected the old individual case studies as bland, sad, boring and uninteresting, and requested something creative, attractive and straightforward. The current `ProjectDossier`/`SystemWalkthrough` revision addresses that task and is the latest pending UI work.
- The migration request superseded further design work: preserve everything, document unfinished items, and continue on another computer. Do not resume speculative redesign during migration.

### Current visual language

Black primary copy on white, restrained cobalt accent; readable inverse dark mode. Barlow Condensed 600 for expressive display headings, DM Sans for body/UI, IBM Plex Mono for labels. Locally bundled fonts with notices. No generic gradient card grid, excessive glow, generated project cover imagery, stock imagery masquerading as work, fake stats/testimonials or employer logos suggesting endorsement.

Original SVG diagrams and canvas graphics illustrate documented scope and are explicitly concept visuals. Keep that labeling. The user's desired interaction is purposeful scroll choreography, selectable diagrams and responsive details, while navigation stays direct. Respect pause controls, offscreen stopping, native touch scrolling and reduced motion.

## Authoritative project inventory and corrections

| ID / project | Date | Category | Confirmed scope and personal contribution |
| --- | --- | --- | --- |
| `texteguard` — TexteGuard AI | Apr–Jun 2025 | AI & Vision | Academic RoBERTa text classification app; Python/Flask, React, SQLite, confidence and analysis history. Individual role beyond the documented app is unconfirmed; no sole-authorship or accuracy claim. |
| `lear` — Production planning | Jul–Aug 2026 | Industry | Lear Corporation internship; React, Java/Spring Boot, SQL Server, REST; modeling/endpoints, workload allocation, material/WIP considerations, heatmaps, picklists, cache invalidation, testing. |
| `smart-city` — Smart City IoT | 2025–2026 | Data & Analytics | Team of five; project lead and frontend/UI/UX lead. Five-stage Python MapReduce-style pipeline, React/Vite/Recharts dashboard, simulated Node/WebSocket updates. |
| `soc-ips` — Multi-agent SOC / IPS | Mar–Jun 2026 | AI & Vision | Academic team prototype; co-design, Java/Weka Naive Bayes feature/classification/risk work, Swing/JFreeChart dashboard, simulated scenarios. |
| `renault` — Tooling management | Jul–Aug 2025 | Industry | User explicitly confirmed CV dates. Maintenance/fabrication inventories; entry/exit/search/edit/restock/history, alerts, Excel, QR/ZPL for Zebra ZT411, React/TypeScript/Electron. |
| `medical` — Medical management | Apr 2026 | Software | User date correction. Six-service team system, Java 17/Spring Boot/MySQL/REST/React/Vite. Personal scope: Doctors service and frontend, not all six services. |
| `emsi-analytics` — EMSI Analytics | Jun 2026 | Data & Analytics | User date correction. Power BI/Power Query/DAX; student demographics, attendance and exams; project lead. Model/measures/findings not supplied. |
| `opencv` — Image processing | May 2026 | AI & Vision | User date correction. Academic OpenCV work; language, specific methods, results and personal role unconfirmed. |
| `arduino` — Arduino 4WD robot | Jun 2024 | Robotics | User date correction. Uno R3, L298P, ultrasonic sensor, servo, I2C LED matrix, HM-10. Implemented/tested modes and personal role unconfirmed. |
| `python-stock` — Automated stock management | Mar–Jun 2025 | Software | User confirmed a separate project: Python stock entries/exits/current inventory; SQL/SQLite database, CRUD and automatic critical-stock detection. It is not the Renault application. |

Counts: All 10, Industry 2, AI & Vision 3, Data & Analytics 2, Software 2, Robotics 1. Every entry has a date. The `Project.category` type is an older broader grouping; current explorer membership comes from `categoryById` in `projectIndex.ts`.

**Oracle Database 19c SQL Workshop is a certificate received in 2026, not a project.** The user corrected the original brief. Keep it only in credentials and verify its exact certificate title from proof when supplied.

### Important factual boundaries

- Lear's original brief referred to sewing-box allocation; the CV describes MG-CMS cutting/production planning. The current website deliberately uses the shared production-planning scope. Greedy Waterfilling and detailed responsibilities are CV-supported, but numerical performance claims are omitted. Reconcile the scope with a report/user before becoming more specific. Do not rename allocation logic machine learning.
- Renault evolved from Flask/SQLite to a later packaged localStorage version. They are successive approaches, not concurrent storage layers. July–August 2025 overrides the earlier approximate June–July wording.
- Smart City updates are simulated, not a real deployed city sensor network, and MapReduce-style does not imply Hadoop/Spark infrastructure.
- SOC/IPS has simulated evaluation, not proven production security effectiveness.
- AI text classification is an estimate, not proof of authorship; confidence is not a guarantee.
- Do not infer object detection/facial recognition/deep learning from OpenCV alone. Do not claim Arduino line following, avoidance or follow-me were completed without evidence.
- Language wording is Arabic native, French fluent, English C1 / Wall Street English Level 20. No official IELTS claim.
- Unverified earlier education and optional grades remain omitted; no overall degree GPA is inferred.

## Implemented features and architecture

A client-only React single-page site. There is no backend, database, API key, analytics, payment integration or service deployment. React state and browser storage hold language/theme preferences. Shared content is static TypeScript. Vite produces static assets; hash routing avoids server rewrite requirements.

Runtime dependency ranges declare React/React DOM ^19.2, GSAP ^3.15, Lenis ^1.3 and bundled Fontsource packages. The migration's frozen-lockfile install resolved React/React DOM 19.3.1, GSAP 3.15.0 and Lenis 1.3.27. Tooling includes TypeScript 5.9.3, Vite 7.3.7, the React Vite plugin and Tailwind CSS 4.3.3. Exact resolutions are in `pnpm-lock.yaml`. `pnpm-workspace.yaml` explicitly allows esbuild's build step. No extra dependency was added for the dossier revision.

### Routes and state

- `#home`, `#journey`, `#work`, `#about`, `#skills`, `#certificates`, `#contact`: home document sections.
- `#/projects/all`, `/industry`, `/ai`, `/data`, `/software`, `/robotics`: full explorer and category state.
- `#/project/<id>`: dedicated project dossier; invalid IDs show a fallback.
- `App.tsx` parses the hash, coordinates route transitions and focus, persists preferences, updates metadata and supplies shared header/footer.
- Cross-page changes use three GSAP shutters. In-case chapter buttons scroll without replacing the case route.
- Text/date formatting is localized. Preferred availability is derived centrally.

### Home and shared sections — preserve

- `ImmersiveHero`: first-screen hook, positioning, availability and project/experience actions.
- `EngineeringGraphic`: original three-plane circuit field drawn on canvas, pointer/keyboard response, discipline links, pause, offscreen/hidden-document stopping, capped pixel ratio and reduced-motion composition.
- Continuous Lear/Renault/EMSI career story with sticky index, active chapter tracking, five responsibilities for each internship and shared case links. Education is part of this story.
- Category gateway with scroll-linked circular reveal; all ten projects accessible.
- About has three interactive perspectives and a language strip.
- Toolkit uses animated native disclosure groups with related project links.
- Credential rows become full direct links when a real `proof` URL/PDF is supplied; unavailable links stay hidden.
- Mailto/copy email, French CV, social links only when supplied; shared contact/footer.
- Reading progress/chapter rail and coordinated GSAP/Lenis motion. Desktop fine-pointer scrolling is smoothed; touch/native and smaller-screen fallbacks are intentional.

### Project Atlas explorer — preserve

- Category icons/sliding active marker, exact counts and search combined with filtering.
- Desktop selectable index beside a sticky animated preview. Pointer/focus/click select a project; separate arrows/open action enter its case.
- Mobile row taps reveal the preview inline and place the chosen heading below the sticky controls.
- Distinct original SVG concept drawings per project; signal motion, gentle drift, pointer tilt, masked changes, pause and offscreen handling.
- Preview reveal and pointer tilt use different wrappers to avoid competing transforms.
- Category/search changes select the first matching project; no-results state is guarded before animation setup.

### Latest project dossier — implemented, QA incomplete

- Large black project title, accurate summary/type/role/date, direct workflow CTA, technology strip and labeled concept diagram with pointer response/pause.
- Sticky chapter bar with dynamically sequential numbering; only documented sections appear. Projects with no workflow do not get fabricated steps.
- Problem/outcome presented with editorial headings and scope note, preserving original factual copy.
- Dark system section with selectable stages, animated connections, moving focus reticle, exact workflow text, keyboard arrows/Home/End, next/restart and shared pause state.
- Detailed contribution story, using the fuller career responsibilities for industrial projects, with a scroll-drawn spine.
- Conditional real screenshot gallery when images are supplied. None currently supplied.
- Previous / all / next project navigation with concept preview.
- Source: `caseEditorial.ts`, `ProjectDossier.tsx`, `SystemWalkthrough.tsx`, `dossier.css`; the old `CaseStudy` implementation was removed from App.
- Hero/reveal/pointer wrappers are separate. GSAP contexts, refresh-frame cancellation and reticle tween cleanup are implemented.

## Complete tracked project structure

```text
.
├── .gitattributes / .gitignore / AGENTS.md
├── README.md / PROJECT_HANDOFF.md / CLOUD_CONTINUATION_PROMPT.md
├── CLOUD_SETUP.md / CONTENT-CHECKLIST.md / VERIFICATION.md
├── index.html / package.json / pnpm-lock.yaml / pnpm-workspace.yaml
├── tsconfig.json / vite.config.ts / START-PORTFOLIO.cmd
├── public/
│   ├── favicon.svg
│   ├── cv/noureddine-el-kassi-fr.pdf
│   ├── images/social-preview.png
│   └── licenses/{Barlow-Condensed,DM-Sans,IBM-Plex-Mono,Lenis}.txt
├── screenshots/
│   ├── desktop-home.jpg / wide-home.jpg / mobile-home.jpg
│   ├── desktop-motion-stage.jpg
│   ├── desktop-projects.jpg / desktop-projects-industry.jpg
│   └── desktop-projects-compact.jpg / mobile-projects.jpg
└── src/
    ├── main.tsx / App.tsx
    ├── content.ts / experience.ts / copy.ts
    ├── projectIndex.ts / caseEditorial.ts
    ├── motion.ts
    ├── styles.css / motion.css / engineering.css / projects.css / dossier.css
    └── components/
        ├── ImmersiveHero.tsx / EngineeringGraphic.tsx
        ├── ProjectExplorer.tsx / ProjectBlueprint.tsx
        ├── ProjectDossier.tsx / SystemWalkthrough.tsx
        └── MotionChrome.tsx / AnimatedDisclosure.tsx
```

Generated `dist/`, `node_modules/` and TypeScript build cache are intentionally excluded from Git. They remain local/reproducible. Raw brief, user reference screenshots, CV source copy, notes and conversation backup are intentionally outside the repository. The original one-line remote README is retained in the repository's initial commit.

### Source ownership guide

`content.ts` owns profile, project evidence, dates, skills, education, languages, credentials and `missingInformation`. `experience.ts` owns detailed career/education copy and About perspectives. `copy.ts` owns bilingual interface labels. `projectIndex.ts` owns current taxonomy/date formatting. `caseEditorial.ts` supplies concise dossier display headings and workflow labels; it must not add unsupported capabilities.

CSS loads in this order: base, motion, engineering, explorer, dossier. Scope dossier styles under the dossier classes; obsolete old case selectors still exist in base styles, but the new dossier avoids the old `.case-study` root. `motion.ts` owns global page-title animation; avoid animating the same h1 transform in another context. `scrollToTarget` accounts for header and CSS scroll margins. A root ResizeObserver debounces ScrollTrigger refreshes.

## Bugs encountered and fixes already made

- Low-contrast gray main copy: corrected by explicit black/white primary theme colors; contrast checked in prior home/explorer QA.
- Repetitive static layouts and weak hero: replaced with the approved engineering composition and coordinated motion, not just another arrangement of the same text grid.
- Generated project covers: removed from the application. Original labeled SVG concepts replaced them.
- Incomplete inventory/inconsistent dates/Oracle misclassification: corrected to the ten-entry inventory above using direct answers.
- Project preview tilt overwrote reveal transforms: split drawing reveal and pointer tilt onto separate wrappers.
- Mobile hover/focus selected rows unexpectedly: selection limited to explicit mobile tapping; selection scroll offset corrected below the sticky toolbar.
- Empty filter results could enter animation setup: guarded before GSAP setup.
- Scroll-linked sections changed layout after image/font/disclosure updates: root observer refreshes geometry.
- Case chapter numbering gaps: new dynamic sections are sequential; no fabricated missing contribution section.
- Detail animation lifecycle: cancel pending refresh frame and kill the reticle tween on cleanup; pointer tweens are killed when the dossier unmounts.
- Local Windows npm launcher was broken, so native Node entrypoints/bundled pnpm were used. This is machine-specific, not a Cloud setup requirement.
- Local sandbox socket access initially blocked preview inspection; the local dev server was restarted with the required tool permission. No app security/network code was changed.
- A browser locator using the rendered uppercase workflow label failed because its accessible name did not match the assumed text exactly. This was a QA-selector failure, not evidence that stage switching is broken; use the observed DOM/semantic controls when resuming checks.

## Verification status and known limitations

- Latest source: strict TypeScript and Vite production build passed on 17 October 2026. Current output was about 470 kB JavaScript before gzip (about 155 kB gzip) and 105 kB CSS before gzip. No performance score or frame-rate claim is made.
- Historical home/explorer browser checks covered desktop 1280×720, 1440×900, wide desktop, French mobile 390×844 and 320×740, category counts/search, pause, direct route links and contrast. See `VERIFICATION.md` for exact scope.
- Latest dossier: desktop opening and dark walkthrough section were seen. The workflow CTA scrolled the system section below sticky navigation while preserving the route; no horizontal document overflow was observed in that view. Detailed stage switching and mobile/French/dark cases remain to be checked.
- System reduced-motion support is implemented but the OS preference was not separately emulated in prior QA.
- `SystemWalkthrough` currently declares vertical tab orientation even when CSS lays the tabs horizontally on mobile. Arrow handling supports both axes; review the ARIA orientation during accessibility QA.
- Short-evidence projects (OpenCV/Arduino/Power BI) intentionally have less detailed sections. Ask for evidence when genuinely needed; do not invent content to match page length.
- Social metadata still needs a verified production origin if the site is later deployed.
- No public website deployment or Cloud environment setup has been completed by this handoff itself.
- Existing ZIP deliveries on the laptop may predate the dossier redesign. Use Git source as the migration baseline, not a stale ZIP.

## Unfinished material and next work

1. Start by reading the whole repository and comparing current pages to approved captures. Do not rebuild the home/explorer.
2. Finish dossier QA on TexteGuard, Lear/Renault and a short project with no workflow. Check stage selection/next/restart, arrows/Home/End, pause, chapter links and active states, previous/next/back, route focus and cleanup.
3. Inspect dossier desktop, 390px/320px mobile, English/French, light/dark and reduced motion. Check sticky offsets, long translated titles, animation clipping and overflow. Fix only observed issues and preserve source facts.
4. Ask the user for review of the detail design once concrete and checked; it is not yet approved.
5. Add genuine application screenshots or reports when supplied. Keep concept labeling until replaced; never make fake screenshots or fake demo outputs.
6. Obtain Coursera credential URLs/PDFs, Wall Street English Level 20 proof, and Oracle proof/exact title. Fill each `learning[].proof`; rows then directly open it. Do not create placeholders.
7. Obtain actual profile/social/demo/repository URLs and an approved English CV. This repository is now known, but do not assume unrelated project URLs.
8. Resolve source-specific questions in `CONTENT-CHECKLIST.md`/`missingInformation` when reports become available. Do not repeatedly ask already-answered dates.
9. After justified changes, run checks/build and save real visual evidence. Update verification honestly. Public site deployment is a separate future request.

## Cloud continuation and history boundaries

Follow `CLOUD_SETUP.md` for currently documented environment setup and `CLOUD_CONTINUATION_PROMPT.md` for a ready-to-paste task. Install from `pnpm-lock.yaml` and use portable commands, not laptop-specific absolute runtime paths. The site needs no environment secrets.

The private backup contains the main local JSONL session snapshot, chronological reconstructed messages, a response-message appendix, referenced user attachments, reference materials, and a project ZIP with hashes. It is a preservation artifact, not proof that the original UI has no missing messages and not a supported Cloud chat import. Normal application appends can continue; the captured original byte prefix was verified unchanged. Do not upload raw archives to this public repository.

Official documentation describes `/export` in the Codex CLI for a complete Markdown conversation export once idle. It was not invoked on the active chat through the available controls. The user can run it after the turn ends; private backup instructions give the exact local path. Copy private backups separately to the desktop if desired. A fresh Cloud session should rely on this curated handoff, while the original local chat remains available on the laptop.
