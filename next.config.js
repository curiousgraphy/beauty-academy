/** @type {import('next').NextConfig} */
const isExport = process.env.STATIC_EXPORT === "true";
// GitHub Pages 프로젝트 페이지는 /<repo> 하위 경로에서 서빙된다.
// 예: https://curiousgraphy.github.io/beauty-academy → PAGES_BASE_PATH=/beauty-academy
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  // 클라이언트에서 이미지 등 정적 자산 경로 앞에 붙일 base path.
  // (next/image unoptimized + string src에는 basePath가 자동 적용되지 않아 직접 처리)
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  // STATIC_EXPORT=true 로 빌드하면 정적 HTML(out/)을 생성한다.
  // (별도 서버 없이 미리보기/배포용 — 평소 dev/build 동작에는 영향 없음)
  ...(isExport
    ? {
        output: "export",
        images: { unoptimized: true },
        ...(basePath ? { basePath, assetPrefix: basePath } : {}),
      }
    : {}),
};

module.exports = nextConfig;
