/** @type {import('next').NextConfig} */
// Static export for GitHub Pages. On the Pages build, NEXT_PUBLIC_BASE_PATH is
// set to "/beauty-academy" (the project-page subpath); locally it's unset so
// the site stays at "/".
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: base || undefined,
  assetPrefix: base || undefined,
};

export default nextConfig;
