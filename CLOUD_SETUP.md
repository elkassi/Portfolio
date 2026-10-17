# Resume from another computer

Checked against official OpenAI documentation on 17 October 2026. This file prepares the workflow; it does not claim that an account-specific Cloud environment has already been created.

## Current Codex Cloud workflow

1. On the desktop PC, sign in to the same ChatGPT account on the web or desktop app.
2. Choose **Work in → Cloud → Select environment → Create environment**, or open **Settings → Codex Cloud → Environments → Create environment**.
3. Connect GitHub if asked and select **elkassi/Portfolio**. Allow repository access only as needed. Use `main` as the source branch.
4. Select **Get started**. Ask setup to use Node.js 24 LTS (the local build used Node 24.15), pnpm and the repository lockfile. Request:

   ```sh
   pnpm install --frozen-lockfile
   pnpm check
   pnpm build
   ```

   If pnpm is not installed, use Corepack or the environment's package-manager setup. The portfolio requires no API keys, environment variables, backend or paid services. Package registry access is needed for installation.
5. Review the setup results and any files changed during setup. Preserve the portfolio architecture and dependencies. Save and select **Publish**, then wait for **Environment published**. Publishing the environment prepares a task workspace; it does not deploy the portfolio website.
6. Select **Start a new task** and paste the body of `CLOUD_CONTINUATION_PROMPT.md`.
7. Continue in that same Cloud task across devices. Commit work or open a pull request to preserve changes in GitHub. New tasks have separate workspaces, so do not assume uncommitted state carries across them.

If your account still shows the legacy Codex environment settings, choose the repository and configure the equivalent dependency setup there. Current documentation labels that route legacy. Use the current workflow above when available. This session did not inspect or change your account's Cloud environment settings.

## Local checkout on the desktop (optional)

```sh
git clone https://github.com/elkassi/Portfolio.git
cd Portfolio
pnpm install --frozen-lockfile
pnpm dev
```

For a Cloud/network preview, start Vite with `pnpm exec vite --host 0.0.0.0`. Use the environment's forwarded preview URL; laptop localhost URLs do not transfer to the desktop. Static production files can be regenerated with `pnpm build`.

## Conversation preservation and limitations

The curated `PROJECT_HANDOFF.md` and continuation prompt are in Git. Raw local history/attachments are kept in a separate private laptop backup and must be transferred separately if desired. They are not a restorable Codex Cloud chat and must not be committed to this public repository.

Official CLI documentation describes `/export session.md` for a Markdown export after the current turn is idle. It is not a background export tool exposed to this agent. The migration created a verified read-only local session snapshot and reconstructed readable transcript instead; completeness beyond the recorded data is not guaranteed. Instructions for the optional official export are in the private backup README.

The current Cloud environment guide lists computer/browser use as unsupported. If your environment has no preview automation, run build/type checks and request a human visual review, or inspect the local checkout on the desktop. Do not claim that unperformed mobile/browser checks passed. Local personal skills are not automatically synced; repository instructions are included here.

## Official sources

- [Codex Cloud overview](https://learn.chatgpt.com/docs/cloud)
- [Current Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environments)
- [Legacy environments](https://learn.chatgpt.com/docs/environments/cloud-environment)
- [Developer commands — CLI export](https://learn.chatgpt.com/docs/developer-commands)
- [Troubleshooting — local transcript locations](https://learn.chatgpt.com/docs/reference/troubleshooting)

Features and labels can change; check the linked official guides if the UI differs.
