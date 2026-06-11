/**
 * CBB New York — content & data layer.
 *
 * Single source of truth for every page (/, /pro, /youth, /master).
 * Components must read from here — never hard-code copy in JSX.
 */

export type Track = "pro" | "youth";

/* ------------------------------------------------------------------ */
/* Site-wide                                                          */
/* ------------------------------------------------------------------ */

export const site = {
  brand: "CBB",
  brandFull: "Colavo Beauty Bootcamp",
  tagline: "K-Beauty education, live in New York.",
  dates: "July 13–14, 2026",
  locations: ["Seoul", "São Paulo", "New York"],
  email: "hello@cbb.beauty",
  instagram: { handle: "@cbb.beauty", url: "https://instagram.com" },
  copyright:
    "© 2026 Colavo, Inc. · A Colavo Salon company · colavosalon.com",
  colavo: { name: "Colavo Salon", url: "https://colavosalon.com" },
} as const;

/* ------------------------------------------------------------------ */
/* Navigation                                                         */
/* ------------------------------------------------------------------ */

export interface NavLink {
  label: string;
  href: string;
}

export const nav: { links: NavLink[]; cta: NavLink } = {
  links: [
    { label: "Overview", href: "/" },
    { label: "Pro Masterclass", href: "/pro" },
    { label: "Youth Seminar", href: "/youth" },
    { label: "Ambassadors", href: "/master" },
  ],
  cta: { label: "Get tickets →", href: "/#events" },
};

/* ------------------------------------------------------------------ */
/* Hero                                                               */
/* ------------------------------------------------------------------ */

export interface HeroCta {
  label: string;
  href: string;
  variant: "rose" | "mint";
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroFloatingCard {
  day: string;
  track: Track;
  title: string;
  meta: string;
}

export const hero = {
  eyebrow: "Seoul → São Paulo → New York",
  // Headline rendered as: "K-Beauty's {glow} Arrives in NYC."
  titlePre: "K-Beauty's ",
  glowWord: "Glow",
  titlePost: " Arrives in NYC.",
  subtitle:
    "Glass skin, bridal elegance — Seoul's signature luminosity, live in Manhattan. July 13–14, 2026.",
  ctas: [
    { label: "Pro ticket · $200 →", href: "/pro", variant: "rose" },
    { label: "Youth · Free RSVP →", href: "/youth", variant: "mint" },
  ] satisfies HeroCta[],
  stats: [
    { value: "2 days", label: "Jul 13–14, Manhattan" },
    { value: "2 events", label: "Pro masterclass + Youth seminar" },
    { value: "1 master", label: "Eonju Lee, Gangnam" },
  ] satisfies HeroStat[],
  portrait: {
    id: "cbb-hero-portrait",
    placeholder: "Drop hero portrait — glass-skin glow",
    src: null as string | null,
  },
  floatingCards: [
    { day: "13", track: "pro", title: "Pro Masterclass", meta: "Jul 13 · Midtown · $200" },
    { day: "14", track: "youth", title: "Youth Seminar", meta: "Jul 14 · NoMad · Free" },
  ] satisfies HeroFloatingCard[],
};

/* ------------------------------------------------------------------ */
/* Marquee                                                            */
/* ------------------------------------------------------------------ */

export const marquee: string[] = [
  "Glass skin",
  "Bridal elegance",
  "K-Pop looks",
  "Seoul luminosity",
  "Live in Manhattan",
];

/* ------------------------------------------------------------------ */
/* Video                                                              */
/* ------------------------------------------------------------------ */

export const video = {
  eyebrow: "Watch",
  title: "See the glow in motion.",
  youtubeId: "cKfxl7RXsEU",
};

/* ------------------------------------------------------------------ */
/* Who is CBB                                                         */
/* ------------------------------------------------------------------ */

export interface AboutStat {
  value: string;
  title: string;
  body: string;
  /** Visual treatment of the card. */
  tone: "outline" | "mint" | "pink";
}

export const about = {
  eyebrow: "Who is CBB",
  title:
    "Colavo Beauty Bootcamp — revenue-first K-beauty education, now landing in New York.",
  stats: [
    {
      value: "41K",
      title: "Salons on Colavo",
      body: "The salon platform powering Korea's beauty industry — now backing CBB.",
      tone: "outline",
    },
    {
      value: "VOD + IRL",
      title: "Blended education",
      body: "Multilingual video lessons paired with hands-on intensives — just-in-time, not theory-first.",
      tone: "mint",
    },
    {
      value: "3 hubs",
      title: "Seoul · São Paulo · NY",
      body: "A global circuit of beauty masterclasses — New York is the next stop on the map.",
      tone: "pink",
    },
  ] satisfies AboutStat[],
};

/* ------------------------------------------------------------------ */
/* Venues                                                             */
/* ------------------------------------------------------------------ */

export interface Venue {
  id: string;
  name: string;
  floor: string;
  neighborhood: string;
  address: string;
  rating?: { score: string; reviews: number };
  transit: string[];
  parking: string;
  access?: string;
  entry?: string;
  note?: string;
  hours: string;
  mapUrl: string;
}

export const venues: Record<"perkinsCoie" | "luminary", Venue> = {
  perkinsCoie: {
    id: "perkins-coie",
    name: "Perkins Coie",
    floor: "22nd Floor",
    neighborhood: "Midtown",
    address: "1155 Avenue of the Americas (6th Ave), New York, NY 10036",
    transit: [
      "42 St–Bryant Park (B·D·F·M) — 3 min walk",
      "47–50 Sts Rockefeller Ctr (B·D·F·M) — 4 min walk",
      "Times Sq–42 St (1·2·3·7·N·Q·R·W·S) — 5 min walk",
    ],
    parking: "No visitor parking (office building) — transit recommended.",
    entry: "Lobby visitor check-in — pre-registration list + photo ID required.",
    hours: "Booked 17:00–21:00 (main event 17:00–18:30)",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Perkins+Coie+1155+Avenue+of+the+Americas+New+York&query_place_id=ChIJNZvR1v5YwokRwhttLvaPQBM",
  },
  luminary: {
    id: "luminary",
    name: "Luminary",
    floor: "4th Floor",
    neighborhood: "NoMad",
    address: "1204 Broadway, 4th floor, New York, NY 10001",
    rating: { score: "4.8", reviews: 72 },
    transit: [
      "28 St (R·W) — 2 min walk · Broadway line",
      "34 St–Herald Sq (B·D·F·M·N·Q·R·W) — 5 min walk",
    ],
    parking: "No on-site parking — transit recommended.",
    access: "Elevator + stairs both available.",
    note: "Woman-run event space — a safe environment.",
    hours: "Setup 12:30 · Start 13:30 · Wrap 15:30",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Luminary+1204+Broadway+New+York&query_place_id=ChIJsTq1q0dZwokR4vtRgO5dJTM",
  },
};

/* ------------------------------------------------------------------ */
/* Events                                                             */
/* ------------------------------------------------------------------ */

export interface EventDetail {
  label: string;
  value: string;
  /** Render the value in the rose accent (used for the price). */
  accent?: boolean;
}

export interface EventInfo {
  slug: Track;
  href: string;
  track: Track;
  dateLabel: string; // "JUL 13 · MON"
  audienceBadge: string; // "Professionals"
  title: string;
  tagline: string;
  /** Optional highlight callout (Youth "free on purpose" note). */
  highlight?: string;
  details: EventDetail[];
  cta: { label: string; variant: "rose" | "mint" };
  venueId: keyof typeof venues;
}

export const events: EventInfo[] = [
  {
    slug: "pro",
    href: "/pro",
    track: "pro",
    dateLabel: "JUL 13 · MON",
    audienceBadge: "Professionals",
    title: "Pro Masterclass",
    tagline: "From Glass Skin to Bridal Mastery.",
    details: [
      { label: "Venue", value: "Perkins Coie · Midtown" },
      { label: "Ticket", value: "$200 · per person", accent: true },
      { label: "Seats", value: "30 · licensed pros only" },
    ],
    cta: { label: "Get Pro ticket →", variant: "rose" },
    venueId: "perkinsCoie",
  },
  {
    slug: "youth",
    href: "/youth",
    track: "youth",
    dateLabel: "JUL 14 · TUE",
    audienceBadge: "Free · Community",
    title: "Youth Seminar",
    tagline: "Your Glow, Your Way.",
    highlight:
      "Free on purpose — a community seminar on healthy skin, smart choices and self-expression. No selling, gift bag for every student.",
    details: [
      { label: "Venue", value: "Luminary · NoMad" },
      { label: "Entry", value: "Free · RSVP required" },
      { label: "Seats", value: "30 · students only" },
    ],
    cta: { label: "Free RSVP →", variant: "mint" },
    venueId: "luminary",
  },
];

/* ------------------------------------------------------------------ */
/* The Master                                                         */
/* ------------------------------------------------------------------ */

export interface MasterBullet {
  text: string;
  dot: "rose" | "mint" | "pink";
}

export const master = {
  eyebrow: "The Master",
  name: "Eonju Lee",
  role: "Chief Director, MABELLE Boutique · Gangnam",
  badge: "CBB AMBASSADOR",
  bullets: [
    {
      text: "Chief Director of MABELLE Boutique — the luxury flagship salon in Gangnam.",
      dot: "rose",
    },
    { text: "Former artist at MBC Art Center, Seoul.", dot: "mint" },
    { text: "Masterclasses across Paris · London · São Paulo.", dot: "pink" },
  ] satisfies MasterBullet[],
  cta: { label: "See profile & portfolio →", href: "/master" },
  portrait: {
    id: "cbb-master-portrait",
    placeholder: "Drop portrait — Eonju Lee",
    src: null as string | null,
  },
};

/* ------------------------------------------------------------------ */
/* Schedule (2-day)                                                   */
/* ------------------------------------------------------------------ */

export interface ScheduleEntry {
  dayLabel: string; // "DAY 1 · JUL 13 MON"
  track: Track;
  time: string;
  title: string;
  location: string;
  tags: string[];
}

export const schedule = {
  eyebrow: "2-Day schedule",
  title: "Two rooms. Two afternoons.",
  days: [
    {
      dayLabel: "DAY 1 · JUL 13 MON",
      track: "pro",
      time: "17:00–18:30",
      title: "Pro Masterclass",
      location: "Perkins Coie — 22F · 1155 Avenue of the Americas, Midtown",
      tags: ["$200 · 30 seats", "Licensed pros only"],
    },
    {
      dayLabel: "DAY 2 · JUL 14 TUE",
      track: "youth",
      time: "13:30–15:00",
      title: "Youth Seminar",
      location: "Luminary — 4F · 1204 Broadway, NoMad",
      tags: ["Free · RSVP 30", "Students only", "Community initiative"],
    },
  ] satisfies ScheduleEntry[],
};

/* ------------------------------------------------------------------ */
/* Partners & sponsors                                                */
/* ------------------------------------------------------------------ */

export const partners = {
  eyebrow: "Partners & Sponsors",
  title: "Backed for the launch.",
  supporter: {
    kicker: "Supported by",
    logo: "/assets/colavo-logo.png",
    logoAlt: "Colavo Salon",
    bodyPre: "CBB is the education sub-brand of ",
    bodyStrong: "Colavo Salon",
    bodyPost:
      " — the platform powering 41K salons. Colavo, Inc. backs the New York launch.",
    link: { label: "colavosalon.com →", url: "https://colavosalon.com" },
  },
  partner: {
    kicker: "Partner",
    logo: "/assets/leonia-logo.png",
    logoAlt: "Leonia High School",
    acronym: "KSA",
    name: "Leonia High School, Korean Student Association",
    contact: "Sarah Kim",
  },
  sponsorsKicker: "Sponsors — in talks",
  sponsors: [
    { id: "cbb-sponsor-autte", placeholder: "Autte logo", tone: "mint", src: null as string | null },
    { id: "cbb-sponsor-lunabe", placeholder: "Luna&BE logo", tone: "pink", src: null as string | null },
    { id: "cbb-sponsor-danahan", placeholder: "Danahan logo", tone: "mint", src: null as string | null },
    { id: "cbb-sponsor-mubean", placeholder: "MUbean logo", tone: "pink", src: null as string | null },
  ],
};

/* ------------------------------------------------------------------ */
/* FAQ                                                                */
/* ------------------------------------------------------------------ */

export interface FaqItem {
  q: string;
  a: string;
}

export const faq = {
  eyebrow: "Questions",
  title: "Good to know.",
  items: [
    {
      q: "Who can attend each event?",
      a: "The Pro Masterclass on Jul 13 is for licensed beauty professionals and hair designers only. The Youth Seminar on Jul 14 is free and open to students, with guardian consent.",
    },
    {
      q: "How do I get a Pro ticket?",
      a: "A single $200 tier, per person, via the Pro page. Seats are capped at 30 licensed pros — once they're gone, they're gone.",
    },
    {
      q: "Is the Youth Seminar really free?",
      a: "Yes — and free by design. The Youth Seminar runs as a community initiative: no ticket, no sales pitch, and a gift bag for every student. We built it to give NYC teens real skin-health knowledge, smart-consumption habits and a welcoming cross-cultural space. Entry is by RSVP (30 seats), with a short guardian-consent step to confirm each seat.",
    },
    {
      q: "Where are the two events held?",
      a: "Day 1 (Pro) is at Perkins Coie — 22F, 1155 Avenue of the Americas, Midtown. Day 2 (Youth) is at Luminary — 4F, 1204 Broadway, NoMad. Both are best reached by subway; no on-site parking.",
    },
    {
      q: "What language are the sessions in?",
      a: "Sessions run in English, with Korean supported. Both events are demo- and talk-led, so they're easy to follow.",
    },
    {
      q: "Can general consumers buy a Pro ticket?",
      a: "No — the Pro Masterclass is restricted to licensed professionals. If you're a beauty enthusiast, the Youth-track and future open events are a better fit.",
    },
  ] satisfies FaqItem[],
};

/* ------------------------------------------------------------------ */
/* Final CTA                                                          */
/* ------------------------------------------------------------------ */

export const finalCta = {
  titlePre: "Two days. ",
  titleAccent: "Two glows.",
  subtitle:
    "Choose your room for July 13–14 in Manhattan. Seats are limited on both days.",
  ctas: [
    { label: "Pro ticket · $200 →", href: "/pro", variant: "rose" },
    { label: "Youth · Free RSVP →", href: "/youth", variant: "mint" },
  ] satisfies HeroCta[],
};

/* ================================================================== */
/* /master — Eonju Lee, CBB Global Ambassador                         */
/* ================================================================== */

/** Pink (makeup/bridal) vs mint (hair/business) accent track. */
export type CraftTrack = "pink" | "mint";

export interface CraftItem {
  num: string;
  kicker: string;
  track: CraftTrack;
  title: string;
  body: string;
  tags: string[];
  /** When true, the image sits left of the copy (alternating layout). */
  flip: boolean;
  image: { id: string; placeholder: string; src: string | null };
}

export interface AmbassadorCard {
  name: string;
  specialty: string;
  specialtyTrack: CraftTrack;
  salon: string;
  pill: { text: string; tone: "pink" | "grey" };
  /** Absolute badge over the photo (only the NY ambassador has one). */
  topBadge?: string;
  highlighted: boolean;
  image: { id: string; placeholder: string; tone: "pink" | "mint"; src: string | null };
}

export interface CircuitStop {
  kicker: string;
  kickerTone: "grey" | "rose";
  dot: "ink" | "rose";
  city: string;
  when: string;
  whenTone: "ink2" | "rose";
  body: string;
  variant: "plain" | "pink" | "highlight";
  cta?: { label: string; href: string };
}

/** Inline rich-text segment for the ambassador statement. */
export interface TextSegment {
  text: string;
  tone: "default" | "mint" | "muted";
}

export const masterPage = {
  nav: {
    badge: { text: "Ambassadors", tone: "ink" as const },
    cta: { label: "See her live · Jul 13", href: "/pro", variant: "rose" as const },
  },

  hero: {
    badge: "★ CBB Global Ambassador",
    nameLine1: "Eonju",
    nameLine2: "Lee",
    role: "이언주 · Chief Director, MABELLE Boutique",
    bio: "The Cheongdam master behind Seoul's most-booked glass-skin and bridal looks — leading CBB's São Paulo → New York leg as our 2026 ambassador.",
    chips: ["Gangnam · Cheongdam", "Ex-MBC Art Center", "Paris · London · São Paulo"],
    ctas: [
      { label: "See her at the Pro Masterclass →", href: "/pro", variant: "rose" },
      { label: "Meet the Collective", href: "#collective", variant: "outline" },
    ] as { label: string; href: string; variant: "rose" | "outline" }[],
    portrait: { id: "m-hero", placeholder: "Portrait — Eonju Lee, editorial", src: null as string | null },
    tourCard: { kicker: "2026 Tour", pre: "São Paulo → ", accent: "New York" },
    rankCard: "1 of 3 CBB Masters",
  },

  statement: {
    eyebrow: 'What "CBB Ambassador" means',
    segments: [
      { text: "CBB isn't one master's brand. It's a ", tone: "default" },
      { text: "collective of Korea's top K-beauty masters", tone: "mint" },
      { text: " who tour the world teaching their craft. ", tone: "default" },
      {
        text: "Eonju Lee carries the badge for São Paulo and New York — one of six ambassadors on the 2026 circuit.",
        tone: "muted",
      },
    ] satisfies TextSegment[],
  },

  craft: {
    eyebrow: "Signature craft",
    title: "What she teaches in the room.",
    intro:
      "The four techniques at the heart of the Jul 13 masterclass — each shown live, on a model, step by step.",
    items: [
      {
        num: "01",
        kicker: "Makeup",
        track: "pink",
        title: "Glass-skin makeup",
        body: "글래스 스킨 메이크업 — the luminous, lit-from-within base Seoul is known for. Skin prep, layering and finish that reads flawless on camera and in person.",
        tags: ["Skin prep", "Dewy layering", "Camera-ready finish"],
        flip: false,
        image: { id: "m-craft-1", placeholder: "Glass-skin makeup — close-up", src: null },
      },
      {
        num: "02",
        kicker: "Hair",
        track: "mint",
        title: "Natural-wave & texture hair",
        body: "내추럴 웨이브 / 텍스처 헤어 스타일링 — soft, movement-rich waves and lived-in texture that pair with the glass-skin base for a complete look.",
        tags: ["Natural wave", "Texture & movement", "Finishing"],
        flip: true,
        image: { id: "m-craft-2", placeholder: "Natural-wave / texture hair", src: null },
      },
      {
        num: "03",
        kicker: "Bridal · Editorial",
        track: "pink",
        title: "Bridal & editorial looks",
        body: "The most-booked wedding looks from her Cheongdam chair — elegant, photograph-first artistry refined across Paris, London and São Paulo runways.",
        tags: ["Wedding", "Editorial", "Runway"],
        flip: false,
        image: { id: "m-craft-3", placeholder: "Bridal / editorial look", src: null },
      },
      {
        num: "04",
        kicker: "Business",
        track: "mint",
        title: "K-beauty trend → revenue",
        body: "Beyond technique: reading what's booking in Seoul and turning it into high-ticket menu items — the revenue-first insight that opens the masterclass.",
        tags: ["Trend reading", "Menu pricing", "Ticket lift"],
        flip: true,
        image: { id: "m-craft-4", placeholder: "Trend briefing / studio session", src: null },
      },
    ] satisfies CraftItem[],
  },

  collective: {
    eyebrow: "The CBB Ambassador Collective · Cohort 01",
    title: "Three masters. One Korea. A world tour.",
    introPre:
      "For its first cohort, CBB partners with three leading Korean salon masters across makeup and semi-permanent (PMU) artistry. Each carries the ambassador badge to a different hub — so every CBB room gets a true specialist. Eonju Lee leads ",
    introStrong: "São Paulo → New York",
    introPost: "; here's the founding three.",
    footnote:
      "CBB Global Ambassadors · Cohort 01 (2026) — the founding three. The line-up grows each season.",
    roster: [
      {
        name: "Eonju Lee · 이언주",
        specialty: "Glass-skin makeup & bridal",
        specialtyTrack: "pink",
        salon: "MABELLE Boutique · Gangnam",
        pill: { text: "✈ São Paulo → New York · 2026", tone: "pink" },
        topBadge: "NY Ambassador",
        highlighted: true,
        image: { id: "m-c-eonju", placeholder: "Eonju Lee", tone: "pink", src: null },
      },
      {
        name: "Ahyun Kim · 김아현",
        specialty: "Hairstroke brow & eye PMU",
        specialtyTrack: "mint",
        salon: "Hanol · Hongdae",
        pill: { text: "Seoul flagship", tone: "grey" },
        highlighted: false,
        image: { id: "m-c-2", placeholder: "Ahyun Kim", tone: "mint", src: null },
      },
      {
        name: "Suhyun Cho · 조수현",
        specialty: "Lip PMU & tint",
        specialtyTrack: "pink",
        salon: "Ara PMU · Gangnam",
        pill: { text: "Seoul flagship", tone: "grey" },
        highlighted: false,
        image: { id: "m-c-3", placeholder: "Suhyun Cho", tone: "pink", src: null },
      },
    ] satisfies AmbassadorCard[],
  },

  circuit: {
    eyebrow: "The CBB world tour",
    title: "One circuit. Rotating masters.",
    intro:
      "Each city gets the right specialist from the Collective. Eonju Lee carries São Paulo and New York in 2026.",
    stops: [
      {
        kicker: "Home base",
        kickerTone: "grey",
        dot: "ink",
        city: "Seoul",
        when: "Year-round · all 3 masters",
        whenTone: "ink2",
        body: "Where the Collective is based and the VOD library is filmed.",
        variant: "plain",
      },
      {
        kicker: "Completed",
        kickerTone: "rose",
        dot: "rose",
        city: "São Paulo",
        when: "2025 · led by Eonju Lee",
        whenTone: "rose",
        body: "CBB's first overseas masterclass — glass-skin & bridal, to a sold-out pro room.",
        variant: "pink",
      },
      {
        kicker: "Next · You're invited",
        kickerTone: "rose",
        dot: "rose",
        city: "New York",
        when: "Jul 13–14, 2026 · Eonju Lee",
        whenTone: "rose",
        body: "Pro Masterclass (Jul 13) + free Youth Seminar (Jul 14) in Manhattan.",
        variant: "highlight",
        cta: { label: "Get tickets →", href: "/pro" },
      },
    ] satisfies CircuitStop[],
  },

  finalCta: {
    eyebrow: "See Eonju Lee live · Jul 13–14",
    titlePre: "Learn from the ",
    titleAccent: "Collective.",
    subtitle:
      "Catch CBB's ambassador in Manhattan — at the Pro Masterclass or the free Youth Seminar.",
    ctas: [
      { label: "Pro Masterclass · $200 →", href: "/pro", variant: "rose" },
      { label: "Youth Seminar · Free →", href: "/youth", variant: "mint" },
    ] satisfies HeroCta[],
  },
};

/* ================================================================== */
/* /youth — free Youth Seminar + 4-step guardian-consent RSVP         */
/* ================================================================== */

export interface YouthChip {
  text: string;
  /** mint = filled mint pill, grey = neutral pill. */
  tone: "mint" | "grey";
}

export interface StripFrame {
  id: string;
  placeholder: string;
  tone: "mint" | "pink";
}

export interface ProgramRow {
  start: string;
  end: string;
  duration: string;
  part: string;
  title: string;
  body: string;
}

export interface WhyCard {
  icon: string;
  title: string;
  body: string;
  dark: boolean;
}

export interface ConsentItem {
  key: "c1" | "c2" | "c3";
  strong: string;
  rest: string;
  /** trailing greyed note (e.g. the optional photo-release caveat). */
  note?: string;
  required: boolean;
}

export interface FormField {
  name: string;
  label: string;
  placeholder: string;
  type: "text" | "number" | "email" | "tel";
  /** static prefix shown inside the input (e.g. "@" for instagram). */
  prefix?: string;
}

export const youthPage = {
  nav: {
    badge: { text: "Youth · Free", tone: "mint" as const },
    cta: { label: "Free RSVP →", href: "#rsvp", variant: "mint" as const },
  },

  hero: {
    eyebrow: "✦ Free for students · Jul 14",
    titleLine1: "Your Glow,",
    titleLine2Pre: "Your ",
    glowWord: "Way.",
    subtitle:
      "A free K-beauty seminar for the next generation — Seoul's glass-skin glow, hands-on in NoMad. No ticket, no catch.",
    chips: [
      { text: "100% Free", tone: "mint" },
      { text: "Jul 14 (TUE) · 13:30–15:00", tone: "grey" },
      { text: "Luminary · NoMad", tone: "grey" },
      { text: "Students only · 30 seats", tone: "grey" },
    ] satisfies YouthChip[],
    ctas: [
      { label: "Reserve a free seat →", href: "#rsvp", variant: "mint" },
      { label: "See what we'll do", href: "#program", variant: "outline" },
    ] as { label: string; href: string; variant: "mint" | "outline" }[],
    note: "Under 18? A parent/guardian completes a quick consent — it's built into the RSVP.",
    portrait: {
      id: "y-hero",
      placeholder: "Drop a student-seminar still — dewy everyday glow",
      src: null as string | null,
    },
    floatA: { badge: "$0", title: "Free entry", meta: "RSVP required" },
    floatB: { value: "30 seats", label: "students only" },
  },

  strip: {
    eyebrow: "Looks you'll try",
    caption: "Everyday glow, your way — drag your own looks onto any frame · hover to pause",
    frames: [
      { id: "yf-1", placeholder: "Dewy everyday glow", tone: "mint" },
      { id: "yf-2", placeholder: "K-pop idol look", tone: "pink" },
      { id: "yf-3", placeholder: "Fresh base + tint", tone: "mint" },
      { id: "yf-4", placeholder: "Soft glam", tone: "pink" },
      { id: "yf-5", placeholder: "Glow close-up", tone: "mint" },
      { id: "yf-6", placeholder: "Healthy skin", tone: "pink" },
      { id: "yf-7", placeholder: "Festival look", tone: "mint" },
      { id: "yf-8", placeholder: "Everyday hair", tone: "pink" },
      { id: "yf-9", placeholder: "Confidence shot", tone: "mint" },
    ] satisfies StripFrame[],
  },

  program: {
    eyebrow: "90-min seminar",
    title: "Learn it. Try it. Keep it.",
    rows: [
      {
        start: "13:30",
        end: "–13:50",
        duration: "20 min",
        part: "Part 1",
        title: "Glow basics & skin-first habits",
        body: 'What "glass skin" really is, and the healthy-skin routine behind it — age-appropriate, no pressure.',
      },
      {
        start: "13:50",
        end: "–14:40",
        duration: "50 min · hands-on",
        part: "Part 2",
        title: "Try-it-yourself look",
        body: "Master Eonju Lee guides a fresh, everyday glow you actually do on yourself — products provided.",
      },
      {
        start: "14:40",
        end: "–15:00",
        duration: "20 min",
        part: "Part 3",
        title: "Q&A · photos · goody bag",
        body: "Ask anything about beauty as a career, grab a group photo, and take home a starter goody bag.",
      },
    ] satisfies ProgramRow[],
  },

  why: {
    eyebrow: "Why it's free",
    title: "A gift to the next generation — not a sales pitch.",
    intro:
      "CBB and Colavo run the Youth Seminar as a community program. There's no ticket, no upsell, no product you have to buy — just real skills and confidence, shared by working pros.",
    cards: [
      {
        icon: "$0",
        title: "No cost, no catch",
        body: "Free entry, products provided, goody bag included. Nothing to buy on the day.",
        dark: false,
      },
      {
        icon: "✦",
        title: "Skills & confidence",
        body: "Healthy-skin habits and a look you can actually do yourself — age-appropriate throughout.",
        dark: false,
      },
      {
        icon: "◎",
        title: "A safe, guided room",
        body: "Small group, supervised throughout, guardian consent for under-18s — by design.",
        dark: false,
      },
      {
        icon: "★",
        title: "A first look at the craft",
        body: "For anyone curious about beauty as a career — meet a master and ask anything.",
        dark: true,
      },
    ] satisfies WhyCard[],
  },

  rsvp: {
    eyebrow: "Free RSVP",
    title: "Save your seat.",
    intro:
      "Four quick steps. Students under 18 need a parent or guardian to complete the consent step — it takes about a minute.",
    seatsLeft: 12,
    seatsNote: "Students only · Jul 14",
    stepLabels: ["You", "Guardian", "Consent", "Done"],
    demoNote: "Visual demo — no real data is submitted.",
    step1: {
      title: "Step 1 · About you",
      sub: "Tell us who's coming. The seminar is for students only.",
      fields: [
        { name: "studentName", label: "Student full name", placeholder: "e.g. Mina Park", type: "text" },
        { name: "age", label: "Age", placeholder: "16", type: "number" },
        { name: "grade", label: "Grade / school", placeholder: "11th · Leonia HS", type: "text" },
        { name: "email", label: "Email", placeholder: "you@email.com", type: "email" },
        { name: "instagram", label: "Instagram handle", placeholder: "your.handle", type: "text", prefix: "@" },
      ] satisfies FormField[],
      igInfo: {
        pre: "How we'll check you in: at the door we match your name to the RSVP list, then confirm it's really you by your Instagram — be ready to open the app logged into ",
        strong1: "@your.handle",
        mid: " on your phone. Make sure the account isn't private to us, or follow ",
        strong2: "@cbb.beauty",
        post: " so we can verify quickly.",
      },
    },
    step2: {
      title: "Step 2 · Parent / guardian",
      sub: "Required for students under 18 — we'll send the consent confirmation here.",
      fields: [
        { name: "guardianName", label: "Guardian name", placeholder: "e.g. Sora Park", type: "text" },
        { name: "relationship", label: "Relationship", placeholder: "Parent", type: "text" },
        { name: "guardianEmail", label: "Guardian email", placeholder: "guardian@email.com", type: "email" },
        { name: "guardianMobile", label: "Guardian mobile", placeholder: "(201) 555-0142", type: "tel" },
      ] satisfies FormField[],
      skipNote: "18 or older? You can skip guardian details — just continue.",
    },
    step3: {
      title: "Step 3 · Guardian consent",
      sub: "Please review and agree. A parent/guardian confirms on behalf of the student.",
      consents: [
        {
          key: "c1",
          strong: "Participation & supervision.",
          rest: " I consent to my student attending the supervised CBB Youth Seminar on Jul 14.",
          required: true,
        },
        {
          key: "c2",
          strong: "Photo / media release.",
          rest: " I allow event photos that may include my student to be used by CBB. ",
          note: "(Optional — you can opt out and still attend.)",
          required: false,
        },
        {
          key: "c3",
          strong: "Conduct & data.",
          rest: " I agree to the event code of conduct and CBB's handling of this RSVP data.",
          required: true,
        },
      ] satisfies ConsentItem[],
      sigLabel: "Guardian signature (type full name)",
      sigPlaceholder: "Type your name to sign",
      errMsg: "Please agree to the required items and sign to continue.",
    },
    step4: {
      heading: "You're on the list!",
      body: "We've emailed a confirmation to both the student and guardian. See you Jul 14 at Luminary, NoMad — doors 13:15.",
      details: [
        { label: "When", value: "Tue Jul 14 · 13:30–15:00" },
        { label: "Where", value: "Luminary · 1204 Broadway, NoMad" },
        { label: "Bring", value: "Just yourself · products provided" },
        { label: "Check-in", value: "Your name + Instagram on your phone" },
      ],
      note: "At the door we'll match your name and confirm it's you via your Instagram — have the app open and logged in. Tip: follow @cbb.beauty so check-in is instant.",
      resetLabel: "Register another student",
    },
    ctaLabels: { continue: "Continue →", confirm: "Confirm RSVP →", back: "← Back" },
  },

  venue: {
    eyebrow: "Venue",
    title: "Luminary — NoMad.",
    name: "Luminary — 4th Floor",
    address: "1204 Broadway, New York, NY 10001",
    rows: [
      { label: "Subway", value: "28 St (R·W) 2 min · 28 St (6) 4 min · 23 St (F·M) 6 min" },
      { label: "Doors", value: "Open 13:15 — please arrive 15 min early for check-in" },
      {
        label: "Check-in",
        value:
          "Name on the RSVP list + Instagram match (open the app logged into your handle) — guardians welcome to drop off & wait",
      },
      { label: "Access", value: "Step-free entry & elevator to 4F" },
    ],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=1204+Broadway+New+York+NY+10001",
    mapLabel: "Open in Google Maps →",
    image: { id: "y-venue", placeholder: "Drop venue photo — Luminary 4F, NoMad", src: null as string | null },
  },

  faq: {
    eyebrow: "Questions",
    title: "Youth FAQ.",
    items: [
      {
        q: "Is it really free?",
        a: "Yes — completely. The Youth Seminar is a community program from CBB and Colavo. There's no ticket, no fee, and nothing to buy on the day. Products and a goody bag are provided.",
      },
      {
        q: "Who can attend?",
        a: "Students only — middle and high schoolers welcome. Seating is capped at 30, so RSVP early. The content is age-appropriate throughout.",
      },
      {
        q: "My child is under 18 — what consent is needed?",
        a: "A parent or guardian completes the consent step inside the RSVP — participation, an optional photo release, and the code of conduct. It takes about a minute and you'll get an email confirmation.",
      },
      {
        q: "Can a parent stay during the seminar?",
        a: "Guardians are welcome to drop off and wait nearby. The room is supervised by CBB staff throughout, with a small group size by design.",
      },
      {
        q: "Why do you ask for my Instagram, and how is it used at check-in?",
        a: "Seats are free and limited, so we confirm each attendee is the student who reserved. At the door we match your name to the RSVP list, then ask you to open Instagram logged into the handle you registered — a quick visual check, no password needed. Following @cbb.beauty beforehand makes it instant. We only use the handle for check-in and event updates.",
      },
      {
        q: "Do I need to bring anything?",
        a: "Yourself and your phone with Instagram logged in (that's how we check you in). All products and tools are provided, and you'll take home a starter goody bag. Come with clean skin if you can.",
      },
    ] satisfies FaqItem[],
  },

  finalCta: {
    eyebrow: "Jul 14 · NoMad · Free · 30 seats",
    titlePre: "Your glow starts ",
    titleAccent: "here.",
    subtitle:
      "Free, guided, and made for students. Reserve a seat — a guardian consent is built right into the RSVP.",
    primary: { label: "Reserve a free seat →", href: "#rsvp" },
    secondary: { label: "Meet the master →", href: "/master" },
    proLine: { pre: "Are you a working pro? ", linkLabel: "The Pro Masterclass is Jul 13 →", href: "/pro" },
  },
};

export type RsvpData = typeof youthPage.rsvp;

/* ================================================================== */
/* /pro — Pro Masterclass (conversion page)                           */
/* ================================================================== */

export interface ProChip {
  text: string;
  /** pink = pink-tint/rose-ink pill, grey = neutral pill. */
  tone: "pink" | "grey";
}

export interface ProProgramRow {
  start: string;
  end: string;
  duration: string;
  /** pink = pink-tint/rose-ink chip, rose = filled rose chip (the headline part). */
  durationTone: "pink" | "rose";
  part: string;
  title: string;
  body: string;
}

export interface ProBenefit {
  title: string;
  body: string;
  /** greyed trailing note (e.g. the gift-bag sponsor caveat). */
  note?: string;
  icon?: string;
  image?: { id: string; placeholder: string; src: string | null };
}

export interface Eligibility {
  mark: "✓" | "✕";
  tone: "mint" | "rose";
  text: string;
}

export const proPage = {
  nav: {
    badge: { text: "Pro", tone: "pink" as const },
    cta: { label: "Get ticket · $200", href: "#tickets", variant: "rose" as const },
  },

  hero: {
    eyebrow: "Jul 13 · Professionals Only · 30 Seats",
    titleLine1: "From Glass Skin to",
    titleLine2: "Bridal Mastery.",
    subtitle:
      "The technique behind Cheongdam's most-booked wedding looks — now a 90-minute masterclass in Midtown.",
    chips: [
      { text: "Jul 13 (MON) · 17:00–18:30", tone: "pink" },
      { text: "Perkins Coie · Midtown", tone: "grey" },
      { text: "$200 / person", tone: "grey" },
      { text: "Licensed pros only", tone: "grey" },
    ] satisfies ProChip[],
    ctas: [
      { label: "Get Pro ticket · $200 →", href: "#tickets", variant: "rose" },
      { label: "See the 90-min program", href: "#program", variant: "outline" },
    ] as { label: string; href: string; variant: "rose" | "outline" }[],
    portrait: {
      id: "pro-hero-demo",
      placeholder: "Drop a live-styling still — glass-skin demo",
      src: null as string | null,
    },
    floatA: { badge: "90", title: "Minutes, live", meta: "3 parts · one master" },
    floatB: { value: "30 seats", label: "licensed pros only" },
  },

  strip: {
    eyebrow: "Glass Skin → Bridal Mastery",
    caption: "The look you'll learn — drag your own work onto any frame · hover to pause",
    frames: [
      { id: "pf-1", placeholder: "Glass skin glow", tone: "pink" },
      { id: "pf-2", placeholder: "Bridal updo", tone: "mint" },
      { id: "pf-3", placeholder: "Natural wave", tone: "pink" },
      { id: "pf-4", placeholder: "Soft bridal glam", tone: "mint" },
      { id: "pf-5", placeholder: "Glass skin close-up", tone: "pink" },
      { id: "pf-6", placeholder: "Bridal veil look", tone: "mint" },
      { id: "pf-7", placeholder: "Editorial", tone: "pink" },
      { id: "pf-8", placeholder: "K-beauty base", tone: "mint" },
      { id: "pf-9", placeholder: "Wave styling", tone: "pink" },
    ] satisfies StripFrame[],
  },

  program: {
    eyebrow: "90-min program",
    title: "Three parts. One live look.",
    rows: [
      {
        start: "17:00",
        end: "–17:15",
        duration: "15 min",
        durationTone: "pink",
        part: "Part 1",
        title: "K-beauty trend briefing",
        body: "What's booking out in Seoul right now — and how to price it into your NYC menu.",
      },
      {
        start: "17:15",
        end: "–18:10",
        duration: "55 min · main",
        durationTone: "rose",
        part: "Part 2",
        title: "Live styling demo",
        body: "The headline act — glass-skin makeup + natural-wave hair, built on a live model step by step.",
      },
      {
        start: "18:10",
        end: "–18:30",
        duration: "20 min",
        durationTone: "pink",
        part: "Part 3",
        title: "1:1 Q&A · certificate · networking",
        body: "Ask anything, collect your CBB certificate, and meet the room.",
      },
    ] satisfies ProProgramRow[],
  },

  benefits: {
    eyebrow: "What you walk away with",
    title: "Skills you can bill for by Friday.",
    cards: [
      {
        icon: "$",
        title: "High-ticket technique",
        body: "A K-beauty look you can add to your menu and charge premium for.",
      },
      {
        icon: "✓",
        title: "Certificate + photo",
        body: "A CBB certificate and a commemorative photo from the day.",
      },
      {
        icon: "◎",
        title: "NYC pro network",
        body: "Meet licensed pros building K-beauty into their New York books.",
      },
      {
        title: "Gift bag",
        body: "A sponsor gift bag for every attendee. ",
        note: "Contents — sponsors in talks.",
        image: { id: "pro-giftbag", placeholder: "Gift bag photo", src: null },
      },
    ] satisfies ProBenefit[],
  },

  tickets: {
    eyebrow: "Tickets & eligibility",
    price: "$200",
    priceNote: "/ person · single tier",
    eligibility: [
      { mark: "✓", tone: "mint", text: "Licensed beauty pros & hair designers only" },
      { mark: "✓", tone: "mint", text: "Includes certificate, commemorative photo & gift bag" },
      { mark: "✕", tone: "rose", text: "Consumer purchase not available" },
    ] satisfies Eligibility[],
    total: 30,
    seatsLeft: 8,
    seatsHeading: "Seats remaining",
    seatsNote: "Filling up — 30-seat cap, licensed pros only.",
    reserveLabel: "Reserve my seat · $200 →",
    demoNote: "Visual demo — payment handled at checkout.",
    reservedTitle: "✓ Seat reserved",
    reservedBody: "We've emailed your confirmation & check-in details. See you Jul 13.",
  },

  venue: {
    eyebrow: "Venue",
    title: "Perkins Coie — Midtown.",
    name: "Perkins Coie — 22nd Floor",
    address: "1155 Avenue of the Americas (6th Ave), New York, NY 10036",
    rows: [
      {
        label: "Subway",
        value: "Bryant Park (B·D·F·M) 3 min · Rockefeller Ctr (B·D·F·M) 4 min · Times Sq–42 St 5 min",
      },
      { label: "Parking", value: "No visitor parking (office building) — transit recommended" },
      { label: "Entry", value: "Lobby visitor check-in — pre-registered list + photo ID required" },
      { label: "Hours", value: "Access 17:00–21:00 · main event 17:00–18:30" },
    ],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Perkins+Coie+1155+Avenue+of+the+Americas+New+York&query_place_id=ChIJNZvR1v5YwokRwhttLvaPQBM",
    mapLabel: "Open in Google Maps →",
    image: { id: "pro-venue", placeholder: "Drop venue photo — Perkins Coie 22F", src: null as string | null },
  },

  faq: {
    eyebrow: "Questions",
    title: "Pro FAQ.",
    items: [
      {
        q: "How do I prove I'm a licensed pro?",
        a: "Register with your license or salon credential. We verify the pre-registered name list at lobby check-in alongside a photo ID — bring both on the day.",
      },
      {
        q: "What's the refund policy?",
        a: "Full refund up to 7 days before the event. Within 7 days, your seat is transferable to another licensed pro. No-shows are non-refundable. Final terms confirmed at checkout.",
      },
      {
        q: "What should I bring or wear?",
        a: "Just your ID — no kit needed, the session is demo-led. Come in comfortable professional attire; a notebook or phone for notes is handy.",
      },
      {
        q: "What language is it run in?",
        a: "The masterclass runs in English, with Korean supported. The demo-led format makes the technique easy to follow regardless of first language.",
      },
      {
        q: "What's the building entry procedure?",
        a: "Check in at the lobby against the pre-registered list — a photo ID is required to go up to the 22nd floor. Please arrive about 15 minutes early to clear security.",
      },
    ] satisfies FaqItem[],
  },

  finalCta: {
    eyebrow: "Jul 13 · Midtown · 30 seats",
    titleLine1: "Learn the look.",
    titleLine2: "Bill for it Friday.",
    primary: { label: "Get Pro ticket · $200 →", href: "#tickets" },
    secondary: { label: "Meet the master →", href: "/master" },
    studentLine: { pre: "Bringing a student? ", linkLabel: "The free Youth Seminar is Jul 14 →", href: "/youth" },
  },
};

export type TicketData = typeof proPage.tickets;
