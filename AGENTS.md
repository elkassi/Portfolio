# Portfolio continuity

Read `PROJECT_HANDOFF.md`, `CONTENT-CHECKLIST.md`, and `VERIFICATION.md` before changing the site. This is an existing portfolio, not a starter project.

Latest user feedback, 17 October 2026: the current site, dossier composition and project-title/walkthrough polish are approved. The user also approved the suggested project names and subtitles; the current naming checkpoint is local tag `approved-project-names-2026-10-17`. Future work is scoped polishing requested by the user. Preserve unrelated layout, color, content and interactions. Before changing an approved version, save a local Git checkpoint containing only public project files and identify it to the user. Never push or deploy merely to save a version. Original baseline: commit `ae61f34`, local tag `approved-portfolio-2026-10-17`. Approved project polish: local tag `approved-projects-2026-10-17`.

- Preserve the approved home, project explorer and dossier composition. Inspect the existing implementation before changing anything; keep edits within the user's requested scope.
- Keep React / TypeScript / Vite / Tailwind, GSAP and Lenis. No rewrite or new template is requested.
- Main copy must remain black on light backgrounds and readable white on dark backgrounds. Keep English and French equivalent.
- Dates and personal contributions must follow the documented corrections. Oracle is a certificate, not a project. There are ten projects.
- Never invent metrics, credentials, URLs, screenshots, project capabilities, team ownership, or completed robotics modes.
- Keep the concept diagrams labeled. Add real screenshot/proof links only when supplied.
- Preserve responsive, keyboard, pause and reduced-motion behavior. Scope detail-page styles so the approved opening/explorer do not regress.
- Run `pnpm check` and `pnpm build` after changes. Report visual checks actually performed; do not claim untested behavior passed.
- Keep secrets, local session records, raw conversations and private reference materials outside Git.
- Do not deploy the website without a new explicit request. Uploading source to GitHub does not authorize a public site deployment.
