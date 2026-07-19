// Kept in sync with next.config.ts. next/image does not auto-prefix
// basePath (only next/link does), so local image src values need it here.
export const basePath = "/cenoarq-site";

export function assetPath(path: string) {
  return `${basePath}${path}`;
}
