import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', 'PORTFOLIO_');
  const siteUrl = (env.PORTFOLIO_SITE_URL || 'https://elkassi.github.io/Portfolio/').replace(/\/?$/, '/');
  return {
    base: env.PORTFOLIO_BASE_PATH || '/',
    plugins: [react(), tailwindcss(), {
      name: 'portfolio-site-metadata',
      transformIndexHtml: (html) => html.replaceAll('__PORTFOLIO_SITE_URL__', siteUrl),
    }],
  };
});
