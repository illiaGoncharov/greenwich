import type { NextConfig } from "next";

/** Имя репозитория = путь на GitHub Pages (только production build) */
const repo = "greenwich";
const basePath = process.env.NODE_ENV === "production" ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath
    ? { basePath, assetPrefix: `${basePath}/` }
    : {}),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
