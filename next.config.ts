import type { NextConfig } from "next";
import { basePath } from "./src/lib/site-config";

// GitHub Pages serves this project from a /cenoarq-site sub-path, so
// only that build target needs basePath/assetPrefix and a static
// export. Vercel (custom domain at the root) runs the regular
// Next.js server build.
const isGithubPages = process.env.DEPLOY_TARGET === "github-pages";

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: "export" as const,
        images: { unoptimized: true },
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
};

export default nextConfig;
