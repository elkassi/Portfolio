# Portfolio hosting

The user requested a permanent public portfolio on 17 October 2026. The reserved address is:

https://noureddine-el-kassi.peppyzebra32.chatgpt.site/

This address is separate from localhost and the temporary protected Cloudflare tunnel. Sites serves a static Vite production build, independently of the desktop. Confirm the native deployment result before reporting the address as live.

The existing repository and architecture remain in place. `.openai/hosting.json` stores the exact Sites project identity and declares `dist` as the static directory. Keep that identity and address for future updates. Source synchronization uses the Sites source helper and a short-lived credential held only in session memory. The GitHub `origin` is unchanged; source credentials, raw conversations, private backups and ignored tool files must never be committed or packaged.

After approved changes, run `pnpm check` and `pnpm build`. Use the Sites source helper to push the matching source and package its build, then save and deploy that version using the native Sites tools. Verify a terminal success result and public access. On this Windows desktop, add Git Bash to PATH and set `TAR_OPTIONS=--force-local` when packaging an absolute Windows archive path. The portable build wrapper cannot currently invoke the local pnpm shim; the direct project build works.

Representative responsive checks and remaining limits are recorded in `VERIFICATION.md`. Continue to test the actual deployed site on phones before final CV delivery. The user's large monitor is 2560 × 1440; browser zoom and usable CSS viewport also affect the layout.

The latest user instruction is to finish the website and deployment before creating a QR code or editing the CV. The supplied CV is unchanged. When that later step is requested, use the final stable address; regular website updates at the same address do not require a different QR code. If a custom domain is selected, establish it before printing the final CV.
