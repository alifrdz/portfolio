"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const skillPills = [
  "Content & Branding",
  "Growth Marketing",
  "Social Media & Strategy",
  "Analytics",
  "Marketing Strategy",
  "Brand Management",
  "Creative Campaign",
];

const toolGroups = [
  {
    category: "Marketing Strategy & SEO",
    tools: [
      {
        name: "WordPress",
        icon: "/assets/wordpress.png",
        bg: "#f5f5f5",
      },
      {
        name: "Ahrefs",
        icon: "/assets/ahrefs.png",
        bg: "#f5f5f5",
        customScale: 1.0,
      },
      {
        name: "Yoast SEO",
        icon: "/assets/yoast.png",
        bg: "#f5f5f5",
        customScale: 1.0,
      },
    ],
    items: ["WordPress", "Ahrefs", "Yoast SEO"],
  },
  {
    category: "Branding & Content Creation",
    tools: [
      {
        name: "Canva",
        icon: "/assets/canva.png",
        bg: "#f5f5f5",
        customScale: 1.0,
      },
      {
        name: "CapCut",
        icon: "/assets/capcut.png",
        bg: "#f5f5f5",
      },
      {
        name: "TikTok",
        icon: "/assets/tiktok.png",
        bg: "#f5f5f5",
      },
    ],
    items: ["Canva", "CapCut", "TikTok"],
  },
  {
    category: "Social Media & Insights",
    tools: [
      {
        name: "Instagram",
        icon: "/assets/instagram.png",
        bg: "#f5f5f5",
        customScale: 1.0,
      },
      {
        name: "Google Trends",
        icon: "/assets/google-trends.png",
        bg: "#f5f5f5",
        customScale: 1.0,
      },
      {
        name: "Google Analytics",
        icon: "/assets/google-analytics.png",
        bg: "#f5f5f5",
        customScale: 1.0,
      },
    ],
    items: ["Instagram", "Google Trends", "Google Analytics"],
  },
  {
    category: "Ads & Growth",
    tools: [
      {
        name: "Meta Ads",
        icon: "/assets/meta-ads.png",
        bg: "#f5f5f5",
      },
      {
        name: "Google Ads",
        icon: "/assets/google-ads.png",
        bg: "#f5f5f5",
      },
      {
        name: "Google Search Console",
        icon: "/assets/google-search-console.png",
        bg: "#f5f5f5",
        customScale: 1.0,
      },
    ],
    items: ["Meta Ads", "Google Ads", "Google Search Console"],
  },
];

const certifications = [
  {
    org: "Rakamin Academy",
    title: "Scholarship Digital Marketing Bootcamp",
    date: "May 2026",
    logo: "/assets/rakamin.png",
  },
  {
    org: "Rakamin Academy",
    title: "Advanced Social Media Marketing",
    date: "Apr 2026",
    logo: "/assets/rakamin.png",
  },
  {
    org: "Google",
    title: "Ads Search Certificate",
    date: "Feb 2026 – Feb 2027",
    logo: "/assets/google.png",
  },
  {
    org: "Google",
    title: "Ads Display Certificate",
    date: "Feb 2026 – Feb 2027",
    logo: "/assets/google.png",
  },

  /*
  {
    org: "Coursera",
    title: "Meta Social Media Marketing Certificate",
    date: "Jan 2022 – Apr 2022",
    logo: "/assets/coursera.png",
  },
  */
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function CurvedLineDecoration({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      width="44"
      height="22"
      viewBox="0 0 44 22"
      fill="none"
      className={`inline-block ${flip ? "scale-x-[-1]" : ""}`}
    >
      <path
        d="M4 18 C12 4, 32 4, 40 18"
        stroke="#3B82F6"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M10 22 C18 8, 38 8, 44 22"
        stroke="#93C5FD"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

// 1. Update Tipe Data biar nerima customScale (optional)
function ToolIcon({ tool }: { tool: { name: string; icon: string; bg: string; customScale?: number } }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.1, rotate: -1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring" as const, stiffness: 400, damping: 15 }}
      className="flex flex-col items-center gap-1.5 cursor-pointer group"
      title={tool.name}
    >
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm border border-white/60 overflow-hidden" 
        style={{ background: tool.bg }}
      >
        <img 
          src={tool.icon} 
          alt={tool.name} 
          // 2. Classname tetep standar w-full h-full p-2
          className="w-full h-full object-contain p-2" 
          // 3. INI KUNCINYA: Pake Inline Style buat nembak 'transform scale'
          style={
            tool.customScale 
              ? { transform: `scale(${tool.customScale})`, padding: 0 } // Kalau ada customScale, p-2 di-override jadi p-0
              : {} // Kalau ga ada, kosongan aja
          }
        />
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SkillsSection() {
  const pillVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    show: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 500,
        damping: 20,
        delay: i * 0.08,
      },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as any,
        delay: i * 0.15,
      },
    }),
  };

  const certVariants = {
    hidden: { opacity: 0, x: 60 },
    show: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as any,
        delay: 0.3 + i * 0.1,
      },
    }),
  };

  return (
    <section
      id="skills"
      className="min-h-screen w-full bg-[#f8f9fa] flex flex-col relative py-12 px-4"
    >
      {/* ── Header ── */}
      <div className="flex flex-col items-center gap-3 mb-8">
        <div className="flex items-center gap-4">
          <CurvedLineDecoration />
          <CurvedLineDecoration flip />
        </div>

        <h2 className="text-5xl md:text-6xl font-extrabold text-[#111] tracking-tight leading-none">
          Skills
        </h2>

        {/* ── Pills ── */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-4 max-w-3xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {skillPills.map((pill, i) => (
            <motion.span
              key={pill}
              custom={i}
              variants={pillVariants}
              className="px-5 py-2 rounded-full border border-gray-200 bg-white text-gray-800 font-medium text-sm shadow-sm cursor-default hover:border-blue-400 hover:text-blue-600 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              {pill}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* ── Two-column Cards ── */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 flex-1">

        {/* ── LEFT: Tools Card ── */}
        <motion.div
          custom={0}
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="w-full lg:w-1/2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <h3 className="text-4xl md:text-5xl font-extrabold text-[#111] mb-6 tracking-tight">
            Tools
          </h3>

          <div className="grid grid-cols-2 gap-6">
            {toolGroups.map((group) => (
              <div key={group.category} className="flex flex-col gap-3">
                <div className="flex gap-3">
                  {group.tools.map((tool) => (
                    <ToolIcon key={tool.name} tool={tool} />
                  ))}
                </div>
                <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 rounded-full px-3 py-1 w-fit">
                  {group.category}
                </span>
                <ul className="flex flex-col gap-1">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT: Certification Card ── */}
        <motion.div
          custom={1}
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="w-full lg:w-1/2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <h3 className="text-4xl md:text-5xl font-extrabold text-[#111] mb-6 tracking-tight">
            Certification
          </h3>

          <div className="flex flex-col gap-5">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={certVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                className="flex items-start gap-4 group p-2 rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                {/* LOGIKA KONDISIONAL UNTUK RAKAMIN ACADEMY */}
                <div
                  className={`w-11 h-11 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                    cert.org === "Rakamin Academy" 
                    ? "bg-transparent shadow-none" 
                    : "bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden"
                  }`}
                >
                  <img 
                    src={cert.logo} 
                    alt={cert.org} 
                    className={`w-full h-full object-contain ${cert.org === "Rakamin Academy" ? "p-0" : "p-1.5"}`} 
                  />
                </div>

                <div className="flex flex-col">
                  <p className="text-[15px] font-bold text-[#111] leading-snug">
                    {cert.org} – {cert.title}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}