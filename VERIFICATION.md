# Verification — 17 October 2026

## Route transition correction — 18 October 2026

- The user's screenshot matches the old opaque route curtain: three full-height panels in `#101010` / `#222`, a 420ms staggered close, delayed swap, then 520ms staggered opening. Removed the overlay markup/styles, transition timeline, fallback timers and delayed route handling. Existing page content entrance animations remain; no new full-screen opacity animation was added.
- `pnpm check` and `pnpm build` passed. Output approximately 486.90 kB JS (160.27 kB gzip), 116.24 kB CSS (22.65 kB gzip). `git diff --check` passed. No transition-curtain symbols remain in application source; no dependency or content change.
- Local English/light 1600 × 900: clicked the home graphic's Industry link (2 entries), All work (10 entries), then used Enter to open Renault. Destinations rendered without a cover element; header remained visible and project focus moved to H1. Browser Back restored the ten-project collection and Forward restored Renault with H1 focus. A screenshot taken just after navigation showed destination content entering rather than a full-screen curtain.
- French phone 390 × 844: Renault return link restored the remembered Industry collection (2 entries), no horizontal overflow. In dark mode, menu navigation to Home and then Projects restored all ten entries, closed the menu and focused H1, with zero curtain elements and no horizontal overflow.
- Existing reduced-motion paths were preserved/source-reviewed; OS preference emulation, screen-reader speech, physical iOS Safari and every possible browser were not tested. The prior publication remains saved as `bace640` / `published-wide-site-2026-10-18`; this fix publishes to the same Site.

## Whole-site desktop sizing and contrast — 18 October 2026

- Diagnosed the user's actual open Chrome tab at 2560 × 1215. Root color computed `rgb(8,8,8)` but body and inherited career/About text computed `rgb(90,88,89)`, with opacity 1 and no filter. Author CSS declared root color but no body color. Added explicit theme-based body foreground/background; no monitor setting was changed. Local light body/headings computed `rgb(8,8,8)` and dark body `rgb(255,255,255)`.
- Added a shared 1800px+ responsive frame/type scale for experience, project gateway, About, toolkit, certificates, contact, Atlas and dossiers. At 2560 × 1320 the home section, Atlas and dossier frames measured 2240px. Career body copy measured approximately 21px (previously 14px), and headings reached 120px. Removed viewport-height minimums from wide internship chapters; the checked Lear chapter measured about 864px. Copy and project facts are unchanged.
- Visually reviewed English/light experience, About, toolkit, certificates, contact, gateway, Atlas, Lear dossier opening and walkthrough at 2560 × 1320. No document horizontal overflow was measured. Renault career navigation placed its chapter at 125px and updated the active item. About selection changed its panel. Atlas retained ten entries; Lear selection changed the preview and its project link opened the dossier. The system CTA placed the section at about 191px below the chapter bar ending at 167px; End selected the third stage and exactly one active diagram unit, and Start again returned to stage one.
- Checked French/dark at 1980 × 960: common home frames approximately 1841px, career body 17px, section headings 93px; the translated Lear title and document had no horizontal overflow. Reviewed French phone opening at 390 × 844 in dark mode and About in light mode: original layout sizing retained, body color followed the theme, menu closed after navigation, no document overflow. Reviewed the long French Lear opening at 320 × 740: title/document had no horizontal overflow. Reviewed English/light home at 1280 × 720: existing smaller desktop sizing retained, career copy 14px, no document overflow.
- `pnpm check` and `pnpm build` passed after the final CSS change. No dependency or lockfile change. Only the stylesheet/import, review captures and continuity documentation changed. Reduced-motion code is unchanged; OS preference emulation, physical iOS Safari and every possible screen/browser combination were not tested in this pass.
- Review captures: `wide-site-experience.jpg`, `wide-site-about.jpg`, `wide-site-mobile-fr.jpg`. Deployment outcome is reported from the native Sites result; the preceding publication remains recoverable under `published-responsive-2026-10-18`.

## Arrow and wide-screen refinement — 18 October 2026

- Replaced the 15 decorative arrow glyph instances across React views with a shared SVG component (some instances repeat in lists). Existing SVG arrows remain. The three phone graphic arrows measured 18 × 18px, with `aria-hidden=true`; no native arrow text glyph remained in the checked dossier or React source. This removes dependence on emoji font presentation. The actual updated page was not tested in iOS Safari; Chromium viewport checks and SVG/source inspection were performed.
- Widened only the home/header at 1800px and above, up to 2240px, with proportional gutters and larger opening/body/field typography. At 2560 × 1320 (browser space approximating the supplied monitor screenshot), the opening measured 2240px with 152.5px side margins, 184px title text and no title/document overflow. The old opening was capped at 1680px. French/dark and English/light views were inspected.
- The wide pinned discipline list measured 780px high with 163.84px labels at 2560px. Reviewed the settled discipline stage at scrollY 1056, fully below the header; its top was 90px and document overflow was zero. The existing GSAP timeline, stage visibility/inert handling and route logic are unchanged. New layout sizing remains restricted to the existing motion-enabled tall desktop presentation.
- Reviewed English opening and settled discipline views at 1980 × 960: content width 1841.25px, list height 595.19px, zero title/document overflow. A 1600 × 800 view confirmed the new wide breakpoint was inactive and document overflow was zero. These are representative browser CSS viewport sizes, not a claim of every resolution/zoom/browser.
- At 390 × 844, checked a fresh mobile home load, inspected/captured all three SVG field arrows, and followed Industry into its two-project collection. At French dark 320 × 740, opened Lear; End selected the final workflow stage and Restart restored the first. The collection and dossier had zero document overflow. Existing phone layout CSS was preserved.
- `pnpm check` and `pnpm build` passed: JS 488.19 kB (160.61 kB gzip), CSS 109.45 kB (21.28 kB gzip). No dependencies, facts, project IDs/dates, CV or QR assets changed. Review captures: `responsive-home-*.jpg`, `responsive-disciplines-*.jpg`, `responsive-mobile-arrows.jpg`.
- `git diff --check` passed. Private user screenshots/photos were not copied into source or public assets. The previous published version is retained under `published-portfolio-2026-10-18`; the refinement uses the same Sites identity and public address. OS reduced-motion emulation and physical iPhone validation remain unperformed.

## Public-hosting preparation and responsive review

- The user explicitly requested permanent public hosting, with future CV access. The corrected large-monitor resolution is 2560 × 1440. The previous Cloudflare email-protected tunnel depends on the desktop and is not permanent hosting. A Sites project is now reserved in `.openai/hosting.json`; the native deployment result must confirm publication.
- Visually reviewed the home at 2560 × 1440, 2100 × 1600 (the earlier supplied size), 1440 × 900, 768 × 1024, English 390 × 844, and French dark 320 × 740. Measured zero horizontal document overflow in those settled views. At 2560px the existing opening content is centered within its 1680px maximum; no speculative wide-screen redesign was made. Captures are `screenshots/deploy-home-*.jpg`.
- Observed the previously documented 15px explorer overflow at 320 × 740, caused by the 320px body minimum plus Windows scrollbar. Changed only that global minimum to zero. The French dark explorer then measured zero document overflow with all ten projects; searching Power BI returned one project. Home and dossier layouts also fit the same narrow viewport.
- Exercised the 390px mobile menu, navigated to the collection, and confirmed it closed. Opened Lear from the narrow French collection, selected the final workflow stage using End, restarted at stage one, and confirmed both shared pause controls reported pressed. The dossier measured zero horizontal overflow. These are browser viewport/input checks, not physical-phone or screen-reader testing. Existing reduced-motion emulation limitations remain.
- `pnpm check` and `pnpm build` passed. The Sites build wrapper could not invoke this machine's pnpm shim; the project's direct build succeeded. The supported static packager was verified with Git Bash outside the Windows sandbox and `TAR_OPTIONS=--force-local` for Windows drive paths. This tooling issue did not require dependency or app architecture changes.
- Added only static hosting configuration and absolute canonical/social-preview metadata, alongside the one body-width correction. Project facts, routes, approved layout components, diagrams and dependencies are preserved. Private records are absent from tracked source. The user deferred QR creation and CV edits; draft QR files remain ignored and are absent from the published `public/` directory.
- `git diff --check` passed. Deployment outcome and the public URL are to be reported from the native Sites result. No claim is made that every browser, phone or possible resolution was tested.

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
