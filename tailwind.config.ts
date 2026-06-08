import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 배경
        background: "#0A0A0A", // 거의 블랙
        section: "#111111", // 섹션 배경
        // 카드
        card: "#1A1A1A", // 카드 배경
        border: "#2A2A2A", // 보더
        // 포인트
        gold: "#C9A96E", // 포인트 골드
        steel: "#7B9EA8", // 보조 그레이시 블루
        // 텍스트
        offwhite: "#F5F5F0", // 메인 텍스트
        muted: "#8A8A8A", // 보조 텍스트
        // 세션 강조
        "session-green": "#4A9B7F", // 2부 세션
        "session-purple": "#7B6FC4", // 1부 세션
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
