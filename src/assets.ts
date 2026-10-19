/** Local public files follow Vite's deployment base (root or /Portfolio/). */
export function publicAsset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
}
