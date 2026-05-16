export interface Project {
  id: string;
  slug: string;             // URL ramah SEO, misal: /projects/pijarkita
  title: string;
  category: "Digital Marketing" | "Supporting Skill";
  label: "Case Study" | "Supporting Skill";
  featured: boolean;        // true = tampil di Homepage, false = cuma di All Projects
  status: "published" | "draft"; // draft = sembunyiin dulu tanpa hapus data
  thumbnail: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string[];         // List pencapaian (angka)
  tools: { name: string; icon: string }[];
}

export const projectsData: Project[] = [
  {
    id: "pijarkita-01",
    slug: "pijarkita",
    title: "PijarKita Digital Campaign",
    category: "Digital Marketing",
    label: "Case Study",
    featured: true,
    status: "published",
    thumbnail: "/assets/pijarkita-mockup.png",
    description: "Memimpin strategi digital marketing end-to-end untuk brand PijarKita selama masa bootcamp.",
    challenge: "Mencapai target konversi yang agresif dalam waktu terbatas (4 bulan) untuk brand baru di sektor edukasi/bootcamp.",
    solution: "Implementasi strategi full-funnel marketing menggunakan Meta Ads, optimalisasi landing page, serta penggunaan GTM untuk tracking data yang akurat.",
    impact: [
      "331%+ Target Performance Attainment",
      "783%+ Add to Cart Growth",
      "151%+ Sales Target Achievement",
      "Won 1st Place for Final Project"
    ],
    tools: [
      { name: "Meta Ads", icon: "/assets/meta.png" },
      { name: "Google Tag Manager", icon: "/assets/gtm.png" },
      { name: "Google Analytics 4", icon: "/assets/ga4.png" },
      { name: "Meta Business Suite", icon: "/assets/meta-biz.png" }
    ]
  },
  {
    id: "rykuza-02",
    slug: "rykuza-web",
    title: "Rykuza Landing Page",
    category: "Supporting Skill",
    label: "Supporting Skill",
    featured: true,
    status: "published",
    thumbnail: "/assets/rykuza-mockup.png",
    description: "Pengembangan landing page yang dioptimasi untuk performa iklan dan konversi.",
    challenge: "Memastikan landing page memiliki loading speed tinggi dan struktur UI/UX yang memicu user untuk melakukan action (purchase/register).",
    solution: "Menggunakan Next.js dan Tailwind CSS untuk performa maksimal, serta integrasi tracking pixel secara manual untuk akurasi data.",
    impact: [
      "Page Load Speed < 2 seconds",
      "Fully Responsive Design",
      "Integrated Tracking System"
    ],
    tools: [
      { name: "Next.js", icon: "/assets/next.png" },
      { name: "Tailwind CSS", icon: "/assets/tailwind.png" },
      { name: "Framer Motion", icon: "/assets/framer.png" }
    ]
  }
];