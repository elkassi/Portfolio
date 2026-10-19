# Portfolio hosting

## Primary hosting: GitHub Pages — 19 October 2026

The user explicitly requested moving the existing portfolio to GitHub Pages. The configured public address is **https://elkassi.github.io/Portfolio/**. The prior Sites deployment remains available during migration; its identity is retained below for recovery. The approved layout, project facts, CV bytes and certificate assets are unchanged.

`.github/workflows/deploy-pages.yml` builds and publishes on pushes to `main` and supports manual runs from Actions. Repository Settings → Pages uses **GitHub Actions**. The workflow pins its actions, uses Node 24 and pnpm 11.25.0, installs with the existing frozen lockfile, type-checks, builds `dist`, and publishes the static artifact. The deploy job alone receives Pages write/OIDC permissions. No deployment secret or personal access token is stored in the project.

The Pages build sets `PORTFOLIO_BASE_PATH=/Portfolio/` and `PORTFOLIO_SITE_URL=https://elkassi.github.io/Portfolio/`. Vite prefixes built scripts/styles/favicon; `src/assets.ts` prefixes local CV/certificate URLs with `import.meta.env.BASE_URL`. New public-file references in structured content should use `publicAsset('/path/to/file')`. Hash routes remain directly accessible under the repository path.

Local development retains the root base by default. To preview a Pages build, set the same base environment variable for both build and preview. Site metadata is injected by Vite using `PORTFOLIO_SITE_URL`; root-hosted builds can override both values without a source rewrite.

Google Analytics Measurement ID: G-96SJSJ73X8 (supplied by the user on 19 October 2026). src/analytics.ts loads the Google tag only for production on elkassi.github.io. Standard Google page views/enhanced measurement remain automatic; custom project_view, category_view, section_view, navigation_click, cv_download and contact_click events identify portfolio interactions. Custom route events are deduplicated; no manual page_view is sent, avoiding duplicate automatic pageviews. CV tracking measures link clicks, not completed saves. Search text and email addresses are not included in custom payloads. Advertising personalization and Google Signals are disabled. Country reporting is provided by GA, not a separate geolocation service. Ad blockers can prevent measurement. QR generation and CV edits remain deferred.

Pre-migration checkpoint: local tag `before-github-pages-2026-10-19` at `9198488`. Verify the first Actions deployment and actual public assets before reporting the migration as complete.

## Previous hosting: Sites

The user requested a permanent public portfolio on 17 October 2026. Version 1 was successfully published on 18 October 2026. The live address is:

https://noureddine-el-kassi.peppyzebra32.chatgpt.site/

This address is separate from localhost and the temporary protected Cloudflare tunnel. Sites serves a static Vite production build, independently of the desktop. Confirm the native deployment result before reporting the address as live.

The existing repository and architecture remain in place. `.openai/hosting.json` stores the exact Sites project identity and declares `dist` as the static directory. Keep that identity and address for future updates. Source synchronization uses the Sites source helper and a short-lived credential held only in session memory. The GitHub `origin` is unchanged; source credentials, raw conversations, private backups and ignored tool files must never be committed or packaged.

After approved changes, run `pnpm check` and `pnpm build`. Use the Sites source helper to push the matching source and package its build, then save and deploy that version using the native Sites tools. Verify a terminal success result and public access. On this Windows desktop, add Git Bash to PATH and set `TAR_OPTIONS=--force-local` when packaging an absolute Windows archive path. The portable build wrapper cannot currently invoke the local pnpm shim; the direct project build works.

Representative responsive checks and remaining limits are recorded in `VERIFICATION.md`. Continue to test the actual deployed site on phones before final CV delivery. The user's large monitor is 2560 × 1440; browser zoom and usable CSS viewport also affect the layout.

The latest user instruction is to finish the website and deployment before creating a QR code or editing the CV. The supplied CV is unchanged. When that later step is requested, use the final stable address; regular website updates at the same address do not require a different QR code. If a custom domain is selected, establish it before printing the final CV.
