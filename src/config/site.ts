/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONFIGURATION — Abdullah Raees Portfolio
 *  Everything editable lives here: contact details, links, images, copy.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/**
 * WhatsApp number INCLUDING country code, digits only (no "+", spaces or dashes).
 * Example for Germany: "4915112345678". Leave empty until the real number is known —
 * no placeholder number is invented on the website.
 */
export const WHATSAPP_NUMBER_WITH_COUNTRY_CODE = "4915144385048";

/** Default pre-filled text used when a WhatsApp button has no specific message. */
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi Abdullah, I found your portfolio website and would like to get in touch.";

export const whatsappUrl = (message: string = WHATSAPP_DEFAULT_MESSAGE) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER_WITH_COUNTRY_CODE}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const links = {
  instagram: "https://www.instagram.com/abdullahraeesoffical/",
  youtube: "https://youtube.com/@abdullahraeesoffical",
  youtubeSubscribe: "https://youtube.com/@abdullahraeesoffical?sub_confirmation=1",
  youtubeVideos: "https://youtube.com/@abdullahraeesoffical/videos",
  agency: "https://www.instagram.com/hop_marketing.agency/",
  // Publicly listed on the YouTube channel ("For paid promotions")
  email: "Abdullahraees077@gmail.com",
  canvaPortfolio: "https://raeesverse.my.canva.site/",
} as const;

export const profile = {
  name: "Abdullah Raees",
  firstName: "Abdullah",
  lastName: "Raees",
  initials: "AR",
  title: "Digital Marketer | Content Creator | Video Editor | Influencer",
  roles: ["Digital Marketer", "Content Creator", "Video Editor", "Influencer"],
  tagline: "Creating Content. Building Brands. Driving Growth.",
  location: "Based in Germany",
  origin: "Pakistan",
  instagramHandle: "@abdullahraeesoffical",
  youtubeHandle: "@abdullahraeesoffical",
  agencyHandle: "@hop_marketing.agency",
  agencyName: "Hop Marketing Agency",
  availability: "Available for Professional Opportunities",
} as const;

/**
 * IMAGES
 * ──────
 * Real photos only. Each slot tries sources in order and falls back to a clean
 * monogram placeholder when nothing loads.
 *
 *  1. Local files — drop Abdullah's photos into  public/images/  using these names.
 *  2. Remote fallbacks — assets currently published on the Canva portfolio
 *     (raeesverse.my.canva.site) and the public YouTube channel avatar.
 *
 * Replace the local files to take full control; remote fallbacks can then be removed.
 */
const canvaAsset = (file: string) => `https://raeesverse.my.canva.site/_assets/media/${file}`;

export const images = {
  /** Hero portrait (portrait orientation, ~4:5). Local: public/images/abdullah-hero.jpg */
  hero: ["images/abdullah-hero.jpg", canvaAsset("6bf1885b48559571e1c66efca2a0f435.jpg")],
  /** About portrait. Local: public/images/abdullah-about.jpg */
  about: ["images/abdullah-about.jpg", canvaAsset("0d87ab9635c92445e17115254a24aae0.png")],
  /** Square avatar (profile card). Local: public/images/abdullah-avatar.jpg */
  avatar: [
    "images/abdullah-avatar.jpg",
    "https://yt3.googleusercontent.com/55AcwA3eowVq6JrHnyBuF2XD26W6Rk7wP3DlMCwKEePxbSYiRcBNXqJWIUxl3yRtxDGwr31q=s900-c-k-c0x00ffffff-no-rj",
  ],
  /** Media-kit portrait. Local: public/images/abdullah-mediakit.jpg */
  mediaKit: ["images/abdullah-mediakit.jpg", canvaAsset("6bf1885b48559571e1c66efca2a0f435.jpg")],
  /** Instagram profile screenshot (16:9). Local: public/images/instagram-profile.png */
  instagramScreenshot: ["images/instagram-profile.png", canvaAsset("5f6d26ea683aed7fa72efb23b5b83398.png")],
  /** Content / campaign visuals (square). Local: public/images/content-1.jpg … content-4.jpg */
  content: [
    ["images/content-1.jpg", canvaAsset("3d4961f93d7146717d9fc6ff0e83c967.jpg")],
    ["images/content-2.jpg", canvaAsset("aea1c0d01fb7a7d1235d16131fe19a23.jpg")],
    ["images/content-3.jpg"],
    ["images/content-4.jpg"],
  ],
} as const;

export const heroStats = [
  { value: 5, suffix: "", label: "Years of Experience", kind: "number" },
  { value: 80, suffix: "K+", label: "Instagram Followers", kind: "number" },
  { value: 100, suffix: "+", label: "Brand Collaborations", kind: "number" },
  { text: "Founder", label: "Marketing Agency in Pakistan", kind: "text" },
  { text: "Germany", label: "Currently Based In", kind: "text" },
  { text: "Open", label: "Available for Professional Opportunities", kind: "text" },
] as const;

export const aboutParagraphs = [
  "I am a digital marketing professional, content creator, video editor, and influencer with five years of experience in social media marketing, brand development, and digital content creation.",
  "As the founder of a marketing agency in Pakistan, I have gained hands-on experience in managing social media accounts, developing creative content, designing promotional materials, editing videos, and helping brands strengthen their online presence.",
  "Alongside my agency experience, I have built my personal brand as a social media influencer, growing my Instagram audience to over 80,000 followers and collaborating with more than 100 brands.",
  "My work combines creativity, content strategy, audience engagement, and an understanding of how brands communicate with their target audiences. I enjoy transforming ideas into engaging digital content that captures attention and supports business objectives.",
  "I am now looking to bring my creative skills, practical experience, and passion for digital media to professional opportunities in Germany.",
];

export const experience = [
  {
    role: "Founder & Digital Marketing Specialist",
    company: "Hop Marketing Agency",
    location: "Pakistan",
    period: "5 Years",
    summary:
      "Built and led a marketing agency delivering social media management, creative content and digital campaigns for brands.",
    responsibilities: [
      "Social media account management",
      "Content strategies and planning",
      "Promotional graphics and posters",
      "Video editing and short-form content",
      "Digital marketing campaigns",
      "Brand promotion and visual consistency",
    ],
    cta: { label: "Visit Agency Instagram", href: links.agency },
  },
  {
    role: "Content Creator & Social Media Influencer",
    company: "@abdullahraeesoffical",
    location: "Instagram · YouTube",
    period: "Ongoing",
    summary:
      "Grew a personal brand to a community of 80K+ followers and partnered with more than 100 brands on sponsored content and promotions.",
    metrics: [
      { value: "80K+", label: "Instagram Followers" },
      { value: "100+", label: "Brand Collaborations" },
    ],
    responsibilities: ["Sponsored Content", "Brand Promotions", "Personal Branding", "Audience Engagement"],
    cta: { label: "View Instagram Profile", href: links.instagram },
  },
];

export const skills = [
  { name: "Video Editing & Production", icon: "Clapperboard", blurb: "Edits built for retention — pacing, sound and story." },
  { name: "Instagram Reels", icon: "Smartphone", blurb: "Short-form content designed for reach and saves." },
  { name: "Graphic Design", icon: "PenTool", blurb: "Promotional graphics, posters and brand visuals." },
  { name: "Social Media Management", icon: "LayoutGrid", blurb: "Calendars, publishing, community and reporting." },
  { name: "Digital Marketing", icon: "TrendingUp", blurb: "Campaign planning across paid and organic channels." },
  { name: "Influencer Marketing", icon: "Users", blurb: "Creator partnerships that feel native to the audience." },
  { name: "Content Strategy", icon: "Compass", blurb: "Positioning, pillars and formats tied to objectives." },
  { name: "Brand Collaborations", icon: "Handshake", blurb: "100+ partnerships delivered from brief to results." },
  { name: "Audience Engagement", icon: "MessageSquare", blurb: "Conversations that turn viewers into communities." },
] as const;

export const tools = [
  { name: "Adobe Premiere Pro", mono: "Pr", category: "Video Editing" },
  { name: "Adobe After Effects", mono: "Ae", category: "Motion & Effects" },
  { name: "Adobe Photoshop", mono: "Ps", category: "Graphic Design" },
  { name: "CapCut", mono: "Cc", category: "Short-form Editing" },
  { name: "Canva", mono: "Cv", category: "Design & Layout" },
  { name: "Meta Business Suite", mono: "Mb", category: "Publishing & Insights" },
] as const;

export type ProjectCategory =
  | "Video Editing"
  | "Brand Promotional Videos"
  | "Graphic Design"
  | "Social Media Management"
  | "Influencer Campaigns";

export const projectCategories: ProjectCategory[] = [
  "Video Editing",
  "Brand Promotional Videos",
  "Graphic Design",
  "Social Media Management",
  "Influencer Campaigns",
];

export type Project = {
  id: string;
  title: string;
  label: "Featured Work" | "Creative Project" | "Brand Collaboration" | "Content Example";
  categories: ProjectCategory[];
  description: string;
  href: string;
  type: "reel" | "profile" | "design";
  /** Instagram reel shortcode, used for the in-page embed preview */
  reelId?: string;
  handle?: string;
  /** Optional local thumbnail, e.g. images/projects/reel-1.jpg */
  thumbnail?: string[];
};

export const projects: Project[] = [
  {
    id: "reel-1",
    title: "Short-form Edit — Reel",
    label: "Featured Work",
    categories: ["Video Editing", "Brand Promotional Videos"],
    description: "Fast-paced short-form edit crafted for Instagram — cuts, sound design and captions tuned for retention.",
    href: "https://www.instagram.com/reel/DNwcbmnUIzL/",
    type: "reel",
    reelId: "DNwcbmnUIzL",
    thumbnail: ["images/projects/reel-1.jpg"],
  },
  {
    id: "reel-2",
    title: "Promotional Reel",
    label: "Content Example",
    categories: ["Brand Promotional Videos", "Influencer Campaigns"],
    description: "Promotional short-form video combining product storytelling with a native creator feel.",
    href: "https://www.instagram.com/reel/DNzABqAWJpK/",
    type: "reel",
    reelId: "DNzABqAWJpK",
    thumbnail: ["images/projects/reel-2.jpg"],
  },
  {
    id: "reel-3",
    title: "Creator Content — Reel",
    label: "Featured Work",
    categories: ["Video Editing", "Influencer Campaigns"],
    description: "Audience-first creator content edited for pacing, hooks and shareability.",
    href: "https://www.instagram.com/reel/DX2I7IgsQqo/",
    type: "reel",
    reelId: "DX2I7IgsQqo",
    thumbnail: ["images/projects/reel-3.jpg"],
  },
  {
    id: "kjunction",
    title: "K Junction Clothing",
    label: "Brand Collaboration",
    categories: ["Social Media Management"],
    description: "Social media content and promotion for a fashion brand — visual consistency, product posts and campaign support.",
    href: "https://www.instagram.com/kjunction_clothing/",
    type: "profile",
    handle: "@kjunction_clothing",
  },
  {
    id: "sorella",
    title: "Sorella PK",
    label: "Brand Collaboration",
    categories: ["Social Media Management", "Graphic Design"],
    description: "Social content, promotional graphics and brand-aligned creative for a lifestyle label.",
    href: "https://www.instagram.com/sorella_pk/",
    type: "profile",
    handle: "@sorella_pk",
  },
  {
    id: "caesars",
    title: "Caesar's Pizza PK",
    label: "Brand Collaboration",
    categories: ["Social Media Management", "Brand Promotional Videos"],
    description: "Food & beverage social media content — promotional posts and short-form video for a restaurant brand.",
    href: "https://www.instagram.com/caesarspizzapk/",
    type: "profile",
    handle: "@caesarspizzapk",
  },
  {
    id: "agency-design",
    title: "Promotional Graphics & Posters",
    label: "Creative Project",
    categories: ["Graphic Design"],
    description: "Posters, promotional graphics and brand visuals produced for Hop Marketing Agency campaigns.",
    href: links.agency,
    type: "design",
    handle: "@hop_marketing.agency",
  },
];

export const education = {
  degree: "Diploma in Information Systems Management (DISM)",
  institution: "Aptech Computer Education",
  completed: "September 2024",
  grade: "Credit",
  issuedBy: "AGLSM SDN BHD",
  issuedLocation: "Kuala Lumpur, Malaysia",
  training: {
    name: "ACCP Prime — Term 1 & Term 2",
    subjects: [
      "HTML",
      "CSS",
      "Bootstrap",
      "jQuery",
      "UI/UX Fundamentals",
      "SEO",
      "JavaScript",
      "JSON",
      "MySQL",
      "PHP",
      "Laravel",
      "Responsive Web Design",
      "Web Application Development",
    ],
  },
};

export const mediaKit = {
  metrics: [
    { value: "80K+", label: "Instagram Followers" },
    { value: "100+", label: "Brand Collaborations" },
    { value: "5", label: "Years of Experience" },
  ],
  opportunities: [
    { title: "Sponsored Reels & Posts", text: "Native short-form content produced end-to-end." },
    { title: "Brand Promotions", text: "Product features and launches presented to an engaged audience." },
    { title: "Campaign Content Production", text: "Editing, graphics and copy for brand-owned channels." },
    { title: "Long-term Ambassadorships", text: "Consistent brand presence across Instagram and YouTube." },
  ],
  /**
   * Audience demographics, engagement rate, average views and campaign results are
   * intentionally omitted until verified figures are supplied. Add them here when available:
   * e.g. insights: [{ label: "Engagement Rate", value: "x %" }]
   */
  insights: [] as { label: string; value: string }[],
};

/** YouTube — add real video IDs (from youtube.com/watch?v=ID) to show thumbnails. */
export const youtube = {
  channelName: "Abdullah Raees Offical",
  handle: "@abdullahraeesoffical",
  channelId: "UCVVY8XTpI9EOMzI0juysF9w",
  // Publicly listed content focus on the channel
  topics: ["Vlogs", "Daily Routine", "Challenges", "Lifestyle"],
  /** Subscriber count is only displayed when verified. Leave empty to hide. */
  subscriberCount: "",
  videoIds: [] as string[],
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Social Media", href: "#social" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;
