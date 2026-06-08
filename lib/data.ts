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
  eyebrow: "COLAVO BEAUTY ACADEMY × VT COSMETICS",
  /** 행사일 */
  dateLabel: "2026. 7. 6 (MON)",
  /** Hero 뱃지용 일시·장소 */
  dateVenueBadge: "2026. 7. 6 (MON) · Espaço MIND, Paraíso",
  /** 풀패키지 잔여 좌석 */
  remainingSeats: 12,
  /** 외부 신청 링크 (placeholder) */
  registerUrl: "#",
};

// ----------------------------- 통계 (About) -----------------------------

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "2 Sessions", label: "오전 라이브 시연 + 오후 핸즈온 실습" },
  { value: "30명 한정", label: "풀패키지 소규모 집중 코칭" },
  { value: "청담동 출신", label: "이언주 마스터의 K-Beauty 테크닉" },
];

// ----------------------------- 강사 -----------------------------

export interface Instructor {
  name: string;
  nameEn: string;
  title: string;
  career: string[];
  /** 협업 브랜드 로고 라벨 (placeholder) */
  brands: string[];
}

export const instructor: Instructor = {
  name: "이언주",
  nameEn: "Eonju Lee",
  title: "K-Beauty Master Artist",
  career: [
    "청담동 프리미엄 뷰티 살롱 15년 경력",
    "K-웨딩 메이크업 누적 2,000+ 신부 시술",
    "글래스 스킨 레이어링 테크닉 세미나 다수 진행",
    "VT Cosmetics 공식 협업 아티스트",
    "국내외 뷰티 매거진 커버 메이크업 디렉팅",
  ],
  brands: ["VT Cosmetics", "Colavo", "Brand C", "Brand D"],
};

// ----------------------------- 수강 혜택 (Benefits) -----------------------------

export interface Benefit {
  /** lucide-react 아이콘 키 */
  icon: "sparkles" | "heart" | "user-check" | "gift";
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    icon: "sparkles",
    title: "글래스 스킨 테크닉 수료",
    description:
      "투명하고 윤기 나는 글래스 스킨 레이어링의 전 과정을 직접 배우고 익힙니다.",
  },
  {
    icon: "heart",
    title: "K-웨딩 메이크업 응용력",
    description:
      "신부 메이크업의 광 밸런스와 지속력을 위한 실전 응용 노하우를 얻습니다.",
  },
  {
    icon: "user-check",
    title: "1:1 개별 터치업 코칭 (2부)",
    description:
      "마스터가 직접 브러시·광 밸런스·밀착감을 점검하는 맞춤 코칭을 받습니다.",
  },
  {
    icon: "gift",
    title: "VT 코스메틱 증정 제품 (2부)",
    description:
      "풀패키지 참가자는 VT 베스트셀러 5종 중 1개를 선택해 증정받습니다.",
  },
];

// ----------------------------- FAQ -----------------------------

export interface FAQItem {
  question: string;
  answer: string;
}

export const faq: FAQItem[] = [
  {
    question: "오전 세션만 단독 신청이 가능한가요?",
    answer:
      "네, 오전 세션(Seminar Only) R$ 399 플랜으로 단독 신청이 가능합니다. 오전 라이브 시연 전 과정과 ColavoSalon Starter 3개월 무료 혜택이 포함됩니다.",
  },
  {
    question: "클래스는 어떤 언어로 진행되나요?",
    answer:
      "한국어 진행에 포르투갈어 통역이 함께 제공됩니다. 핵심 용어는 영문/포르투갈어 자료로도 안내되어 언어와 무관하게 따라오실 수 있습니다.",
  },
  {
    question: "준비물은 무엇인가요?",
    answer:
      "오후 핸즈온 실습 참가자(풀패키지)는 개인 메이크업 도구를 지참하시면 좋습니다. 기본 실습 자재와 모델은 현장에서 제공됩니다.",
  },
  {
    question: "VT 제품은 어떻게 수령하나요?",
    answer:
      "풀패키지 결제 완료 후 발송되는 수령 확인 링크에서 원하는 VT 제품 1종을 선택하시면, 행사 당일 현장에서 수령하실 수 있습니다.",
  },
  {
    question: "주차 및 대중교통 안내",
    answer:
      "Espaço MIND 건물 주차는 R$ 20/일입니다. Av. Paulista에서 도보 10분 거리로 대중교통 접근이 편리합니다.",
  },
  {
    question: "환불 및 취소 정책",
    answer:
      "행사 14일 전까지 전액 환불, 7일 전까지 50% 환불이 가능합니다. 이후에는 환불이 어려우나 1회에 한해 양도가 가능합니다.",
  },
];
