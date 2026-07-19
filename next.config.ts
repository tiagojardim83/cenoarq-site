import type { NextConfig } from "next";
import { basePath } from "./src/lib/site-config";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: `${basePath}/`,
};

export default nextConfig;
