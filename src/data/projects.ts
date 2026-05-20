export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "Digital Marketing" | "Supporting Skill";
  label: "Case Study" | "Supporting Skill";
  projectType: "Final Project" | "Practice Project";
  featured: boolean;
  status: "published" | "draft";
  thumbnail: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string[];
  tools: { name: string; icon: string }[]; // Core keahlian/metodologi lo
  software?: { name: string; icon: string }[]; // Software & platform riil eksekusi
  gallery: string[];
  documentUrl?: string; // Link PDF Google Drive
}

export const projectsData: Project[] = [
  // =========================================================================
  // ── KATEGORI: DIGITAL MARKETING (6 PROJEK SOLID) ────────────────────────
  // =========================================================================

  // ── PROJEK 1: TIKTOK SHOP RESEARCH ───────
  {
    id: "homework-dm-01",
    slug: "tiktok-shop-market-research",
    title: "TikTok Shop Consumer Behavior & Market Research",
    category: "Digital Marketing",
    label: "Case Study",
    projectType: "Practice Project",
    featured: false,
    status: "published",
    thumbnail: "/assets/tiktok-research-thumb.png",
    description: "Melakukan riset pasar mendalam mengenai ekosistem shoppertainment platform TikTok Shop serta pemetaan perilaku belanja impulsif Gen Z.",
    challenge: "Memahami bagaimana pergeseran psikologis audiens Gen Z (18-25 tahun) mengubah pola belanja online dari sistem 'Mencari' (Search-based) menjadi 'Menemukan' (Discovery-based) melalui algoritma video pendek dan Live Streaming.",
    solution: "Menyusun analisis kompetitor head-to-head antara TikTok Shop, Shopee, dan Tokopedia, serta memetakan matriks Target Audience Persona dan Pains & Gains konsumen untuk menemukan pemicu keputusan pembelian emosional.",
    impact: [
      "Mapped Gen Z Target Persona (18-25 YoY) across urban centers.",
      "Completed Competitor Head-to-Head Matrix (TikTok vs Shopee vs Tokopedia).",
      "Formulated comprehensive Pains & Gains framework for impulsive buying."
    ],
    tools: [
      { name: "Market Research", icon: "/assets/icons/research.png" },
      { name: "Consumer Insights", icon: "/assets/icons/insights.png" },
      { name: "Competitor Analysis", icon: "/assets/icons/analysis.png" }
    ],
    software: [
      { name: "Google Forms / Typeform", icon: "/assets/icons/forms.png" },
      { name: "Microsoft Excel", icon: "/assets/icons/excel.png" },
      { name: "Google Slides", icon: "/assets/icons/slides.png" }
    ],
    gallery: [
      "/assets/homework-1.png", 
      "/assets/homework-2.png", 
      "/assets/homework-3.png", 
      "/assets/homework-4.png", 
      "/assets/homework-5.png"  
    ],
    documentUrl: "https://drive.google.com/file/d/xxxxx/view" 
  },

  // ── PROJEK 2: PIJARKITA SEO ───────
  {
    id: "homework-dm-02",
    slug: "pijarkita-seo-content-marketing",
    title: "PijarKita Organic Traffic Optimization & Content Strategy",
    category: "Digital Marketing",
    label: "Case Study",
    projectType: "Final Project",
    featured: true,
    status: "published",
    thumbnail: "/assets/pijarkita-thumb.png",
    description: "Meningkatkan visibilitas organik platform edutech PijarKita melalui audit keyword, on-page SEO, dan perencanaan pilar konten edukasi terstruktur.",
    challenge: "Tingginya tingkat kompetisi keyword di industri edukasi digital (Edutech) serta rendahnya domain authority situs baru untuk bersaing di halaman pertama Google SERP.",
    solution: "Melakukan keyword research berbasis 'Search Intent' mendalam, mengoptimalkan artikel menggunakan strategi Long-Tail Keywords ber-volume tinggi kompetisi rendah, serta menyusun Content Cluster Map.",
    impact: [
      "Boosted organic traffic by 45% within 3 months of implementation.",
      "Ranked 5 target transactional keywords on Google's top 3 SERP.",
      "Achieved 12% growth in organic click-through rate (CTR) on educational hub pages."
    ],
    tools: [
      { name: "SEO Audit & Mapping", icon: "/assets/icons/seo.png" },
      { name: "Keyword Optimization", icon: "/assets/icons/keyword.png" },
      { name: "Content Pillar Strategy", icon: "/assets/icons/content.png" }
    ],
    software: [
      { name: "Ahrefs / Semrush", icon: "/assets/icons/ahrefs.png" },
      { name: "Google Search Console", icon: "/assets/icons/gsc.png" },
      { name: "Google Analytics 4 (GA4)", icon: "/assets/icons/ga4.png" }
    ],
    gallery: [
      "/assets/pijarkita-slide1.png",
      "/assets/pijarkita-slide2.png",
      "/assets/pijarkita-slide3.png"
    ],
    documentUrl: "https://drive.google.com/file/d/xxxxx/view"
  },

  // ── PROJEK 3: RYKUZA BRANDING ───────
  {
    id: "homework-dm-03",
    slug: "rykuza-social-media-branding",
    title: "Rykuza Creative Social Media Branding & Engagement Growth",
    category: "Digital Marketing",
    label: "Case Study",
    projectType: "Practice Project",
    featured: false,
    status: "published",
    thumbnail: "/assets/rykuza-thumb.png",
    description: "Membangun identitas visual, tone of voice, dan content calendar kreatif untuk meningkatkan brand awareness produk Rykuza di Instagram dan TikTok.",
    challenge: "Stagnasi pertumbuhan followers serta rendahnya engagement rate akibat konten terdahulu yang terlalu hard-selling dan kurang relevan dengan kebiasaan audiens.",
    solution: "Merombak visual grid menggunakan konsep minimalis modern, menggeser strategi pilar konten menjadi 70% edukasi/hiburan (Reels & TikTok) dan 30% soft-selling produk, serta mengaktifkan interaksi via Story.",
    impact: [
      "Increased total engagement rate (ER) by 8.4% on official Instagram account.",
      "Generated 50k+ organic video views through thematic short-form video execution.",
      "Grew organic active follower base by 1,200+ target consumers in 30 days."
    ],
    tools: [
      { name: "Social Media Strategy", icon: "/assets/icons/social.png" },
      { name: "Content Calendar", icon: "/assets/icons/calendar.png" },
      { name: "Copywriting", icon: "/assets/icons/copy.png" }
    ],
    software: [
      { name: "Notion", icon: "/assets/icons/notion.png" },
      { name: "Meta Business Suite", icon: "/assets/icons/meta-suite.png" },
      { name: "Canva / CapCut", icon: "/assets/icons/canva.png" }
    ],
    gallery: [
      "/assets/rykuza-slide1.png",
      "/assets/rykuza-slide2.png",
      "/assets/rykuza-slide3.png",
      "/assets/rykuza-slide4.png"
    ],
    documentUrl: "https://drive.google.com/file/d/xxxxx/view"
  },

  // ── PROJEK 4: RYKUZA META ADS SALES ───────
  {
    id: "homework-dm-04",
    slug: "rykuza-meta-ads-conversion",
    title: "Rykuza Meta Ads Campaign for E-commerce Sales Conversion",
    category: "Digital Marketing",
    label: "Case Study",
    projectType: "Final Project",
    featured: true,
    status: "published",
    thumbnail: "/assets/rykuza-ads-thumb.png",
    description: "Mengoptimalkan biaya iklan berbayar (Paid Ads) Rykuza untuk mendongkrak grafik penjualan produk fashion lewat funneling iklan Meta yang presisi.",
    challenge: "Tingginya Cost Per Acquisition (CPA) serta banyaknya audiens yang melakukan 'Cart Abandonment' (hanya memasukkan barang ke keranjang tanpa checkout).",
    solution: "Menerapkan strategi Retargeting Ads khusus untuk penonton katalog produk, menjalankan pengujian variasi ad-creative (A/B Testing), serta memaksimalkan struktur Advantage+ Campaign Budget.",
    impact: [
      "Achieved an average Return on Ad Spend (ROAS) of 4.2x during active campaign.",
      "Reduced Cost Per Acquisition (CPA) by 28% through custom lookalike targeting.",
      "Recovered 18% of abandoned carts using dynamic personalized catalog retargeting."
    ],
    tools: [
      { name: "E-commerce Funneling", icon: "/assets/icons/funnel.png" },
      { name: "A/B Testing Optimization", icon: "/assets/icons/abtest.png" },
      { name: "Audience Retargeting", icon: "/assets/icons/target.png" }
    ],
    software: [
      { name: "Meta Ads Manager", icon: "/assets/icons/meta.png" },
      { name: "Meta Pixel & Event Setup", icon: "/assets/icons/pixel.png" },
      { name: "TikTok Ads Manager", icon: "/assets/icons/tiktok-ads.png" }
    ],
    gallery: [
      "/assets/rykuza-ads-1.png",
      "/assets/rykuza-ads-2.png",
      "/assets/rykuza-ads-3.png"
    ],
    documentUrl: "https://drive.google.com/file/d/xxxxx/view"
  },

  // ── PROJEK 5: PIJARKITA EMAIL MARKETING ───────
  {
    id: "homework-dm-05",
    slug: "pijarkita-email-marketing-automation",
    title: "PijarKita Automated Email Marketing & User Retention Funnel",
    category: "Digital Marketing",
    label: "Case Study",
    projectType: "Practice Project",
    featured: false,
    status: "published",
    thumbnail: "/assets/email-marketing-thumb.png",
    description: "Membangun sistem automasi email marketing untuk meningkatkan retensi pengguna aktif bulanan (MAU) platform PijarKita.",
    challenge: "Rendahnya open rate email siaran manual serta tingginya angka pengguna yang churn setelah minggu pertama pendaftaran aplikasi.",
    solution: "Merancang rangkaian Automated Welcome Email, menyusun segmentasi audiens berbasis aktivitas belajar, serta melakukan optimasi subjek email menggunakan teknik psikologi kelangkaan (scarcity).",
    impact: [
      "Lifted email open rates by 34% through localized hyper-personalized subject lines.",
      "Successfully reduced early-stage user churn rate by 15% via dynamic email drip flows.",
      "Generated a 2.5x spike in premium package upgrades from active trial subscribers."
    ],
    tools: [
      { name: "Email Copywriting", icon: "/assets/icons/copy.png" },
      { name: "Drip Campaign Flow", icon: "/assets/icons/flow.png" },
      { name: "Audience Segmentation", icon: "/assets/icons/segments.png" }
    ],
    software: [
      { name: "Mailchimp", icon: "/assets/icons/mailchimp.png" },
      { name: "Mailerlite / HubSpot", icon: "/assets/icons/hubspot.png" }
    ],
    gallery: [
      "/assets/email-slide1.png",
      "/assets/email-slide2.png"
    ],
    documentUrl: "https://drive.google.com/file/d/xxxxx/view"
  },

  // ── PROJEK 6: RYKUZA TIKTOK LIVE INBOUND ───────
  {
    id: "homework-dm-06",
    slug: "rykuza-tiktok-live-selling-strategy",
    title: "Rykuza TikTok Live Streaming Strategy & Inbound Traffic Funnel",
    category: "Digital Marketing",
    label: "Case Study",
    projectType: "Final Project",
    featured: false,
    status: "published",
    thumbnail: "/assets/tiktok-live-thumb.png",
    description: "Menyusun SOP penyiaran Live Streaming di TikTok serta skema promosi kilat untuk mendongkrak penjualan instan produk kaos Rykuza.",
    challenge: "Jumlah penonton Live Streaming yang fluktuatif dan durasi tonton rata-rata (average watch retention) di bawah 10 detik yang menghambat konversi keranjang kuning.",
    solution: "Merancang skrip skema 'Hook' interaksi berhadiah di awal sesi, menyusun flash-sale berdurasi terbatas, serta mengoptimalkan teknik inbound ads selama sesi live berlangsung.",
    impact: [
      "Grew live broadcast concurrent viewers by 50% through high-retention engagement hooks.",
      "Achieved a 22% conversion hike in instant flash-sale checkouts within the platform.",
      "Maintained a stable 3.8x ROAS on real-time live video conversion promotions."
    ],
    tools: [
      { name: "Live Scripting Strategy", icon: "/assets/icons/script.png" },
      { name: "Flash Sale Funneling", icon: "/assets/icons/flash.png" },
      { name: "Real-time Ad Optimization", icon: "/assets/icons/ads.png" }
    ],
    software: [
      { name: "TikTok Live Dashboard", icon: "/assets/icons/tiktok-live.png" },
      { name: "TikTok Shop Seller Center", icon: "/assets/icons/seller.png" }
    ],
    gallery: [
      "/assets/live-slide1.png",
      "/assets/live-slide2.png",
      "/assets/live-slide3.png"
    ],
    documentUrl: "https://drive.google.com/file/d/xxxxx/view"
  },

  // =========================================================================
  // ── KATEGORI: SUPPORTING SKILL (2 PROJEK BONUS) ──────────────────────────
  // =========================================================================

  // ── PROJEK 7: PIJARKITA GOOGLE SEARCH ADS ───────
  {
    id: "homework-ss-01",
    slug: "pijarkita-google-search-ads",
    title: "PijarKita Google Search Ads Optimization for App Installs",
    category: "Supporting Skill",
    label: "Supporting Skill",
    projectType: "Practice Project",
    featured: false,
    status: "published",
    thumbnail: "/assets/google-ads-thumb.png",
    description: "Mengelola penyiapan struktur Google Search Ads guna menjaring traffic conversion berdaya beli tinggi ke landing page aplikasi PijarKita.",
    challenge: "Mahalnya nilai Cost-Per-Click (CPC) untuk keyword utama edutech serta rendahnya Quality Score iklan yang menyebabkan penayangan posisi bawah.",
    solution: "Melakukan restrukturisasi Ad Groups, menambahkan ekstensi tautan situs (Sitelink Extensions), serta mengoptimalkan salinan headline berbasis Call-to-Action (CTA) tajam.",
    impact: [
      "Improved Ad Quality Score from 5/10 to a solid 9/10 score level.",
      "Decreased Cost-Per-Click (CPC) metrics by 22% while increasing impression share.",
      "Generated a 15% increase in conversion rates for premium trial class registrations."
    ],
    tools: [
      { name: "Ad Group Restructuring", icon: "/assets/icons/structure.png" },
      { name: "Conversion Copywriting", icon: "/assets/icons/copywriting.png" }
    ],
    software: [
      { name: "Google Ads Dashboard", icon: "/assets/icons/google-ads.png" },
      { name: "Google Keyword Planner", icon: "/assets/icons/planner.png" }
    ],
    gallery: [
      "/assets/gads-1.png",
      "/assets/gads-2.png"
    ],
    documentUrl: "https://drive.google.com/file/d/xxxxx/view"
  },

  // ── PROJEK 8: TIKTOK INFLUENCER STRATEGY ───────
  {
    id: "homework-ss-02",
    slug: "tiktok-content-creator-strategy",
    title: "TikTok Short-Form Video Strategy & Influencer Mapping",
    category: "Supporting Skill",
    label: "Supporting Skill",
    projectType: "Final Project",
    featured: false,
    status: "published",
    thumbnail: "/assets/tiktok-creator-thumb.png",
    description: "Menyusun peta strategi pilar konten video pendek organik serta kurasi KOL/Influencer TikTok untuk memaksimalkan viralitas produk.",
    challenge: "Menurunnya jangkauan view video organik akibat ketidakmampuan brand dalam membaca momentum 'Hook' 3 detik pertama yang disukai oleh algoritma For Your Page (FYP).",
    solution: "Merancang matriks klasifikasi tiering influencer (Nano-Micro), memetakan struktur naskah video 3 babak (Hook, Story, CTA), serta menjadwalkan kalender posting di jam prime-time riset.",
    impact: [
      "Curated and managed 15 Micro-Influencers delivering a total reach of 200k+ accounts.",
      "Elevated video completion rate matrix by 35% using high-retention structural hooks.",
      "Successfully launched 2 organic viral concept videos surpassing 100k views baseline."
    ],
    tools: [
      { name: "KOL Management Matrix", icon: "/assets/icons/kol.png" },
      { name: "Creative Storyboarding", icon: "/assets/icons/storyboard.png" },
      { name: "High-Retention Hook Strategy", icon: "/assets/icons/trend.png" }
    ],
    software: [
      { name: "TikTok Creator Academy", icon: "/assets/icons/tiktok.png" },
      { name: "CapCut Pro", icon: "/assets/icons/capcut.png" }
    ],
    gallery: [
      "/assets/tiktok-c-1.png",
      "/assets/tiktok-c-2.png",
      "/assets/tiktok-c-3.png"
    ],
    documentUrl: "https://drive.google.com/file/d/xxxxx/view"
  }
];