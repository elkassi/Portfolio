# Verification — 17 October 2026

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
