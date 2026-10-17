# Prompt for the new Codex Cloud task

Copy the text below into a new task using the `elkassi/Portfolio` repository on `main`.

---

Continue my existing Noureddine El Kassi portfolio. This is a migration from a local Codex session, not a request to build a new portfolio.

First read `AGENTS.md`, `PROJECT_HANDOFF.md`, `README.md`, `CLOUD_SETUP.md`, `CONTENT-CHECKLIST.md` and `VERIFICATION.md`. Inspect the entire repository, including all source components, content, styles, configuration, assets, licenses and review screenshots. Understand the current implementation and identify unfinished tasks before editing. Distinguish historically verified features from the latest unfinished detail-page QA. Briefly report what is already complete and the concrete next task.

Preserve the architecture (React, TypeScript, Vite, Tailwind, GSAP, Lenis) and the current black/cobalt engineering visual direction. I approved the home page and visual Project Atlas explorer. Do not replace them, apply another template, recreate completed features, or perform a broad redesign. The most recent work is the new `ProjectDossier` / `SystemWalkthrough` project-detail design. It builds, but its complete interaction and mobile/French/dark-mode review is unfinished and I have not approved it yet.

My latest UI request was: individual project-detail pages must be creative, attractive and straightforward, with useful effects and smooth transitions. Inspect and finish the existing revision. Verify its diagram/walkthrough controls, keyboard behavior, pause, sticky chapter navigation, previous/next/back navigation, focus, cleanup, mobile layouts and translations. Fix observed issues with scoped changes. Respect reduced-motion preferences and readable black main text on white (white on dark).

Keep all ten projects and their confirmed dates. Oracle is a 2026 certificate, not a project. Renault was July–August 2025. The Python/SQLite stock app was a separate March–June 2025 project. Keep personal contributions accurate and separate from team work. Never invent metrics, capabilities, screenshots, credentials, URLs, robotics modes or work ownership. Empty unsupported fields are intentional. Keep concept diagrams labeled; use real screenshots/proofs only when supplied. Do not ask again for facts already answered in the handoff.

Use `pnpm install --frozen-lockfile`, `pnpm check` and `pnpm build`. Start Vite with `pnpm dev -- --host 0.0.0.0` if needed by the Cloud preview. Report checks actually run, what remains unverified and any real blockers. Do not claim browser QA if the environment has no browser capability. Keep a truthful checklist for user review where needed.

Do not delete existing progress, rewrite unrelated files, expose secrets/raw conversation archives or publicly deploy the website. Ask only when an essential fact or authorization is missing; otherwise continue the documented work. The local original conversation has a separate private backup; it is not automatically present in this Cloud chat. Use the curated handoff for continuity.
