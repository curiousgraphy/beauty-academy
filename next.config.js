/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // STATIC_EXPORT=true 로 빌드하면 정적 HTML(out/)을 생성한다.
  // (별도 서버 없이 미리보기/배포용 — 평소 dev/build 동작에는 영향 없음)
  ...(process.env.STATIC_EXPORT === "true"
    ? { output: "export", images: { unoptimized: true } }
    : {}),
};

module.exports = nextConfig;
