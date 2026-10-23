import type { NextConfig } from "next";

/** Имя репозитория = путь на GitHub Pages */
const repo = "greenwich";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
