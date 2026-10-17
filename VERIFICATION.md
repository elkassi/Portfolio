# Verification — 17 October 2026

## Approved project names

- Applied the user-approved names in English/French: Smart City IoT — Urban Analytics, Multi-Agent AI — SOC / IPS and AI Presence — Computer Vision. TexteGuard AI retains its name and now uses the RoBERTa subtitle. SOC and OpenCV subtitles also match the approved suggestions.
- The only application source changes are six localized title/subtitle fields in `src/content.ts`. Project IDs, dates, descriptions, contributions, routes, diagrams, layout and styles are unchanged from checkpoint `f95438c`. The approved naming revision is preserved under local tag `approved-project-names-2026-10-17`.
- `pnpm check` and `pnpm build` passed. Output: 487.35 kB JS (160.34 kB gzip), 108.22 kB CSS (21.02 kB gzip). Reused the running preview on port 5173; no dependency or lockfile changes.
- English explorer at 1280 × 720: selected the four affected projects and read the updated preview names/subtitles; measured zero document/title horizontal overflow. Opened their dossiers and observed the updated headings. French SOC dossier at 320 × 740 was visually reviewed and measured zero document/title overflow.
- French explorer at 390 × 844: all ten list titles measured zero horizontal overflow; SOC and OpenCV preview copy was reviewed. Searching "Vision par ordinateur" returned the single renamed OpenCV project. The collection still contains ten projects with the same dates. Screenshots: `names-mobile-fr.jpg` and `names-approved.jpg`.
- At 320 × 740 the explorer retained a 15px document overflow from the existing global 320px body minimum and Windows scrollbar; individual measured titles/subtitles did not overflow. This content-only change leaves those existing styles intact. No new claim is made about motion, dark mode, screen readers or physical devices.
- Browser warning/error log was empty. `git diff --check` passed. No push or public deployment.

## Project polish — current local revision

The user approved the existing composition, colors and dossier interactions before this batch. That version is preserved locally as commit `ae61f34`, tag `approved-portfolio-2026-10-17`, on `codex/project-polish`. The user subsequently approved the new polish, preserved under local tag `approved-projects-2026-10-17`. Nothing was pushed or deployed.

- Changed only the requested display names: Lear Corporation — Production Planner; Renault Tanger — Tooling Manager; AI Presence; EMSI Analytics — Power BI. Equivalent French titles are present. Project IDs, all ten dates and the remaining titles are unchanged. AI Presence is a rename of the existing OpenCV entry, with no new capability claim.
- Added five original SVG walkthrough families: NLP inference, workload allocation, isometric pipeline, service network and inventory flow. Medical/SOC and Renault/Python share families with project-specific internals. Graphics remain labeled concepts. Projects without documented workflows still omit the section.
- Added bilingual implementation notes derived from the existing confirmed content and career responsibilities, particularly Lear's allocation method/constraints and Renault's tooling, stock and printing work. No measurements, screenshots, source links or unsupported implementation detail were added.
- `pnpm check` and `pnpm build` passed. Production output: 487.14 kB JS (160.29 kB gzip), 108.22 kB CSS (21.02 kB gzip). No dependency or lockfile change was needed.
- Visually reviewed the five styles in desktop scenes at 1440 × 900 / 1280 × 720, including stage highlights and added notes. Reviewed the network scene at 390 × 844 in French dark mode. Review captures in `screenshots/polish-*.jpg` are viewport captures and may show a scrolled portion of the scene.
- At French dark 320 × 740, directly loaded all ten dossiers. Rendered dates and diagram assignments matched the inventory; each document and title reported zero horizontal overflow. New company titles fit without cutting words. This is geometry/route coverage for all ten, not a claim of every project in every theme/viewport combination.
- At English light 1280 × 720, exercised End and Restart for all seven documented workflows. Each selected the last stage, kept focus on the selected tab, highlighted exactly one diagram stage, positioned the paused reticle correctly, and restarted at stage one. Rechecked all four arrow keys plus Home/End in Smart City; focus followed selection.
- Verified shared pause in Lear: new LED animation and both signal paths computed as paused. New animation selectors inherit offscreen/hidden-document pause and reduced-motion CSS; these lifecycle paths were also source-reviewed. OS reduced-motion emulation and screen-reader speech were not tested.
- Explorer search: AI Presence returned one project; Power BI returned EMSI Analytics — Power BI; clearing search restored ten. Industry retained exactly the Lear and Renault projects with company names visible. The explorer/home layout components and their CSS were unchanged.
- Browser warning/error log was empty at the end of the interaction checks. `git diff --check` passed. Compared with the checkpoint, App, motion routing, ProjectDossier, the home/explorer implementations, credentials, dates and contribution sources were not edited in this batch.

The current polish has the user's approval. `AGENTS.md` and `README.md` record the requested workflow: save approved milestones locally before the next scoped edit, preserve unrelated work, and never treat saving as permission to push or deploy. This approval/checkpoint update changes documentation only; it does not claim additional visual or runtime checks.

## Desktop continuation — pre-polish baseline

This section supersedes the unfinished dossier QA status recorded below. The older sections remain historical evidence. The detail design still awaits the user's visual approval.

- Cloned `main` at `99f01dc` into `Portfolio` on the desktop; the initial checkout was clean. Read the entire supplied private history outside the repository and the repository continuity documents before editing.
- `pnpm install --frozen-lockfile` succeeded without changing the lockfile. Used the installed Node 24.19 runtime for the preview and production build; the system Node 22.11 is below Vite's supported minimum.
- `pnpm check` and `pnpm build` passed after the fixes. Production output: 471.73 kB JS (155.26 kB gzip), 105.60 kB CSS (20.62 kB gzip).
- Browser QA used the local Vite server in the in-app Chromium browser. Desktop review: 1440 × 900 and 1280 × 720; tablet: 768 × 1024; mobile: 390 × 844 and 320 × 740. English/French and light/dark were exercised, with detailed interaction checks concentrated on TexteGuard, Lear, Renault and the Python stock project. This is a representative matrix, not every project in every combination.
- All ten project routes were loaded directly/reloaded at 1280 × 720. Rendered titles and all confirmed dates matched the inventory; document scroll/client widths matched. French direct-load checks also covered the ten projects at 320px during the review. OpenCV and Arduino omitted undocumented workflow/contribution sections; EMSI Analytics had sequential story/contribution chapters.
- TexteGuard: selected stages by pointer and keyboard; verified ArrowDown/Up/Right/Left, Home/End, focus following selection, Next → Next → Restart, description text and active module/reticle changes. Repeated keyboard and Next/Restart checks after the fixes. French mobile End/Restart and Tab access to the description worked, with a computed visible 2px focus outline.
- Lear: French desktop/tablet/mobile presentation and stage selection; shared pause controls both reported pressed and the flow signal computed as paused. The selected mobile stage scrolled fully into view. Renault's stage selection, Next/Restart and contribution chapter were verified with keyboard activation.
- Chapter actions preserved the project hash. Renault's contribution settled at about 177px below the bar ending at about 154px on desktop. The tablet review exposed a 10px header/bar overlap; measured header/chapter heights now determine sticky positions and scroll offsets.
- Previous navigation (Lear → TexteGuard), next navigation (Renault → Medical) and return-to-category navigation were exercised. The destination heading received focus. A transition was observed remaining covered; a cancellable timer fallback now commits the route and clears shutters if animation callbacks stall. The same shutters/normal choreography are retained.
- Narrow French stage titles originally overlapped adjacent stages. The 160px horizontally scrolling mobile stage strip, bounded label width and automatic selected-stage positioning fixed this. Correct ARIA orientation follows the 899px breakpoint. Nontechnical walkthrough labels now have equivalent French translations.
- A 320px Windows viewport with a 15px scrollbar originally overflowed because of the body's 320px minimum. A dossier-only override removes that minimum; dossier clipping also contains decorative entrance motion. Settled 320px Python/SOC views had equal client/scroll widths (305px). The home/explorer styles were not rewritten.
- Main dossier copy computed as `rgb(8, 8, 8)` in light mode; walkthrough body copy computed as `rgb(255, 255, 255)` on its dark surface. Light/dark switching was visually reviewed.
- Confirmed the offscreen workflow signal computes as paused. Explicit pause stops continuous diagram loops and makes reticle changes immediate. Hidden-document stopping and dynamic reduced-motion handling were reviewed in source.
- Final French 320px direct-load geometry checks returned zero horizontal overflow for all ten dossiers, including during their entrances. Rapid Lear → Renault hash changes settled on Renault with shutters hidden; the invalid-project fallback received heading focus. The Software return route showed its two projects. A final 1440px home review showed the preserved engineering opening with no overflow. Preview and existing CV HTTP checks returned 200; the CV response retained `application/pdf`.
- Review captures are viewport screenshots: `dossier-desktop-opening.jpg`, `dossier-desktop-workflow.jpg`, `dossier-mobile-fr-390.jpg`, and `dossier-mobile-fr-320.jpg`. These depict the portfolio, not the described applications.

Limits: the browser interface does not expose reduced-motion emulation, so an OS reduced-motion preference was not emulated. The CSS/GSAP fallbacks and media-query cleanup were source-reviewed only. No screen-reader speech, physical touch device, performance benchmark, or exhaustive browser compatibility test was run. Actual application screenshots, certificate proofs and missing source evidence remain outstanding in `CONTENT-CHECKLIST.md`.

The approved home/explorer implementation and factual inventory are preserved. No commit, push or website deployment was performed; the supplied private history was never copied into the checkout.

## Build

- Strict TypeScript checking passed.
- Vite production build passed. The static output is in `dist/`.
- Fonts are bundled locally; generated project covers are no longer part of the application.

## Browser checks

Checked the running application through the in-app browser at the desktop viewports (1280 × 720 and 1440 × 900), mobile (390 × 844), and narrow mobile (320 × 740).

- Black body copy on white in the default theme; white body copy on black in the dark theme. Computed text colors were checked.
- The introduction and project / experience actions are visible on the first desktop and mobile screen.
- No horizontal document overflow at the checked sizes, including French text and the independent Python project case study.
- All ten project entries are present with dates.
- Category counts: Industry 2; AI & Vision 3; Data & Analytics 2; Software 2; Robotics 1.
- Category links, search, project opening and direct case-study reload work.
- The search “Power BI” returns EMSI Analytics.
- The career index navigates to Lear, Renault and EMSI in the continuous story. Both internships include five detailed responsibility items.
- About perspectives update by clicking and by arrow key; the next-perspective button is available.
- Technical groups expand using native details controls.
- Workflow buttons update the active case-study step. Case contents links preserve the project route.
- Mobile menu opens and navigation closes it.
- English / French switching and light / dark switching work.
- Copy email reports “Email copied.” The working email and French CV download are available.
- French CV URL responds HTTP 200 with `application/pdf` and the `%PDF` signature; its saved file matches the supplied CV.
- Final browser error log: no errors.

## Motion and access

The opening now uses a coordinated, reversible scroll timeline; it transforms from an introduction into discipline navigation. The project gateway uses a scroll-linked circular reveal. Lenis and GSAP share one animation ticker. Route shutters cover page changes, the career index follows the story, the chapter rail and reading progress track position, and skill disclosures expand and collapse with animated height. Mobile uses normal document flow and native touch scrolling. System reduced-motion fallbacks are implemented; an operating-system reduced-motion preference was not separately emulated during QA.

## Evidence and remaining material

Review captures are in `screenshots/`. Project photography, app screenshots and certificate proofs have not been supplied yet. There are no fabricated project screenshots or credential URLs. Actual Coursera verification links and supplied PDFs can be assigned to each certificate’s `proof` field; the whole entry then opens the proof directly.

No public deployment was performed.

## Motion revision checks

- The opening was observed at the start, during the transition and at the discipline overview. Reverse navigation restored the introductory stage.
- Route transitions completed and uncovered the destination; all ten projects remained present.
- The project gateway was observed mid-mask and fully revealed.
- French mobile (390px): no horizontal overflow; the hero uses relative document flow with no pinned stage or clipped discipline links.
- Mobile career navigation placed the Renault chapter at 190px, below the sticky header / index; the active entry tracked it.
- Animated skill disclosure expanded and collapsed successfully.

## Engineering opening revision

- Reviewed the opening at 1848 × 836 and 1440 × 900; the hook, introduction, project action and experience action are visible together.
- Reviewed French mobile at 390 × 844 and 320 × 740, including dark mode. No horizontal document overflow was observed.
- Verified the graphic's pause / play control with visible pointer input; its state and label changed correctly.
- Keyboard focus changed the highlighted discipline. The AI field link opened the three AI projects and the route transition uncovered the destination.
- The canvas uses a capped pixel ratio, pauses offscreen / in hidden documents, and implements a static reduced-motion composition. The operating-system reduced-motion preference was not separately emulated.

- Final source passed TypeScript checking and the Vite production build. The 1280 × 720 landing view showed the complete opening, with black main text, no clipped controls and no horizontal overflow. The final browser warning/error log was empty. The complete collection still contained ten projects.

## Visual project explorer revision

- TypeScript checking and the Vite production build passed.
- All 10 project entries retained their dates. UI category checks returned All 10; Industry 2; AI 3; Data 2; Software 2; Robotics 1.
- Search for Power BI returned EMSI Analytics. A query with no matches displayed the empty state; clearing it restored all 10 entries.
- Desktop row selection changed the preview and its date; keyboard focus selected the medical project. The preview's case-study action opened Renault, and the return link restored the Industry collection.
- The animation control changed its pressed state. Preview transitions and pointer transforms use separate elements to avoid interrupting the drawing reveal.
- French mobile checked at 390 × 844 and 320 × 740, including dark mode. No horizontal document overflow was observed.
- Repeated mobile selection placed each chosen heading at about 235px, below the toolbar ending at 223px.
- Wide desktop reviewed at 1848 × 866. At 1280 × 720, the full preview frame ended at 697px and the open action at 680px, with no horizontal overflow. Main project headings computed as black in light mode and white in dark mode.
- Final browser warning/error log was empty. Reduced-motion behavior is implemented; the OS preference was not separately emulated.
- New review captures: desktop-projects.jpg, desktop-projects-industry.jpg, desktop-projects-compact.jpg and mobile-projects.jpg.

## Dossier revision and migration baseline

- Latest `ProjectDossier` / `SystemWalkthrough` source passed strict TypeScript checking and a Vite production build on 17 October 2026. Build output was approximately 469.65 kB JavaScript (154.68 kB gzip) and 104.67 kB CSS (20.42 kB gzip).
- The new TexteGuard opening and dark workflow section were visually observed on desktop. The workflow CTA preserved the route and placed the section at approximately 175px, below the sticky chapter bar ending at approximately 151px. The checked document had equal client/scroll widths (1265px).
- Full stage selection/next/restart/keyboard, pause, route navigation and mobile/French/dark-mode QA of the new dossier was interrupted by the migration request. These checks are pending; the older workflow checks above refer to the earlier case implementation.
- No new dossier user approval has been received. Preserve the approved home and explorer during the remaining work.
- No source redesign was performed during migration. GitHub contains source/assets/configuration; generated output and raw local conversations are excluded. The separate private backup retains the original project and references.
- A clean migration-checkout install with `pnpm install --frozen-lockfile` passed. The lockfile was not changed. One existing whitespace-only blank line in `src/content.ts` was cleaned for `git diff --check`; project content and behavior were unchanged.
- The clean migration checkout also passed `pnpm check` and `pnpm build`. Its CSS output was 104.73 kB (20.44 kB gzip); JavaScript was 469.65 kB (154.68 kB gzip). All original source/assets/configuration were compared with the original copy, allowing only the documented whitespace cleanup. A staged-file secret-pattern scan and forbidden-path check found no matches across 52 files; the supplied public CV/contact content was intentionally retained.
