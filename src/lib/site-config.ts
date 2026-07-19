// GitHub Pages serves this project from a /cenoarq-site sub-path;
// the build sets NEXT_PUBLIC_BASE_PATH so both next.config.ts and
// this file agree on it. Vercel (custom domain at the root) leaves
// it unset, so basePath is just "".
// next/image does not auto-prefix basePath (only next/link does),
// so local image src values need it applied here explicitly.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function assetPath(path: string) {
  return `${basePath}${path}`;
}
