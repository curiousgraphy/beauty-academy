// ============================================================
// CBB K-Beauty Master Class — 콘텐츠 데이터
// 모든 텍스트/가격/장소/제품 데이터를 한 곳에서 관리합니다.
// ============================================================

// ----------------------------- 티켓 플랜 -----------------------------

export interface TicketPlan {
  id: string;
  /** 플랜 이름 */
  name: string;
  /** 부제 (영문 라벨) */
  subtitle: string;
  /** 가격 (브라질 헤알) */
  price: string;
  /** 포함 혜택 목록 */
  perks: string[];
  /** 좌석 한정 안내 (없으면 undefined) */
  limited?: string;
  /** 추천(하이라이트) 플랜 여부 */
  featured?: boolean;
}

export const ticketPlans: TicketPlan[] = [
  {
    id: "morning",
    name: "오전 세션",
    subtitle: "Seminar Only",
    price: "R$ 399",
    perks: ["ColavoSalon Starter 3개월 무료"],
  },
  {
    id: "full",
    name: "풀패키지",
    subtitle: "Seminar + 1:1 Coaching",
    price: "R$ 1,199",
    perks: [
      "VT 제품 선택 증정",
      "ColavoSalon Standard 3개월 무료",
    ],
    limited: "30석 한정",
    featured: true,
  },
];

// ----------------------------- 장소 -----------------------------

export interface Venue {
  name: string;
  address: string;
  googleRating: number;
  doorsOpen: string;
  parking: string;
  transit: string;
  googleMapsUrl: string;
  hallUrl: string;
  homepageUrl: string;
}

export const venue: Venue = {
  name: "Espaço MIND — Auditório Jung",
  address: "R. Abílio Soares, 607 - Paraíso, São Paulo - SP, 04005-002",
  googleRating: 4.9,
  doorsOpen: "09:45 AM",
  parking: "R$ 20 / 일",
  transit: "Av. Paulista 도보 10분",
  googleMapsUrl: "https://maps.app.goo.gl/GtBvxrNbVJaYaa4G9",
  hallUrl: "https://espacomindsp.com.br/auditorios/jung/",
  homepageUrl: "https://espacomindsp.com.br/",
};

// ----------------------------- VT 제품 -----------------------------

export interface VTProduct {
  /** 이미지 파일명에 쓰이는 slug → /images/vt-{slug}.jpg */
  slug: string;
  name: string;
  price: string;
}

export const vtProducts: VTProduct[] = [
  { slug: "reedle-shot-100", name: "Reedle Shot 100", price: "R$ 139.63" },
  {
    slug: "reedle-shot-lip-plumper",
    name: "Reedle Shot Lip Plumper Expert",
    price: "R$ 82.42",
  },
  { slug: "pdrn-essence-100", name: "PDRN Essence 100", price: "R$ 174.53" },
  {
    slug: "pdrn-capsule-cream",
    name: "PDRN Capsule Cream",
    price: "R$ 107.16",
  },
  {
    slug: "pdrn-reedle-shot-brush-hair-serum",
    name: "PDRN Reedle Shot Brush Hair Serum",
    price: "R$ 110.49",
  },
];

// ----------------------------- 커리큘럼 -----------------------------

export interface CurriculumItem {
  /** 시간 (없는 항목도 있음) */
  time?: string;
  title: string;
  /** 부가 설명 */
  description?: string;
}

export interface CurriculumSession {
  id: string;
  /** 세션 라벨 (예: 오전 1부) */
  label: string;
  /** 진행 시간대 */
  timeRange: string;
  /** 강조 색상 키 (tailwind 색상명) */
  accent: "session-purple" | "session-green";
  items: CurriculumItem[];
}

export const curriculum: CurriculumSession[] = [
  {
    id: "part1",
    label: "오전 1부",
    timeRange: "10:00 – 13:00",
    accent: "session-purple",
    items: [
      { time: "10:00", title: "Opening & K-Beauty Presentation" },
      { time: "10:20", title: "모델 피부 분석 및 메이크업 방향 설명" },
      { time: "10:30", title: "Glass Skin Demonstration" },
      { time: "11:00", title: "K-Wedding Makeup Demonstration" },
      { time: "11:40", title: "Photo Shooting" },
      {
        time: "12:00",
        title: "Q&A & Networking",
        description: "점심 (12:00 – 14:00)",
      },
    ],
  },
  {
    id: "part2",
    label: "오후 2부",
    timeRange: "14:00 – 16:00",
    accent: "session-green",
    items: [
      {
        title: "Hands-on Practical Training",
        description: "글래스 스킨 레이어링, 윤광 베이스",
      },
      {
        title: "1:1 Touch-up Coaching",
        description: "브러시, 광 밸런스, 밀착감",
      },
    ],
  },
];

// ----------------------------- 이벤트 메타 -----------------------------

export const eventMeta = {
  title: "CBB K-Beauty Master Class",
  tagline: "Glass Skin & K-Wedding Makeup Master Class",
  description:
    "한국 뷰티의 정수를 상파울루에서. 글래스 스킨과 K-웨딩 메이크업을 직접 배우는 하루.",
};
