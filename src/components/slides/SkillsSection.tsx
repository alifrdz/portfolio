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
        icon: (
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#21759b">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.05 14.47L8.27 9.64H9.9l1.35 4.14 1.35-4.14h1.63l-2.33 6.83zm5.8 0l-2.33-6.83h1.63l1.35 4.14 1.35-4.14H20.3l-2.55 6.83z" />
          </svg>
        ),
        bg: "#f0f4ff",
      },
      {
        name: "Ahrefs",
        icon: (
          <svg viewBox="0 0 50 50" className="w-7 h-7">
            <rect width="50" height="50" rx="10" fill="#FF7043" />
            <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="Arial">Ah</text>
          </svg>
        ),
        bg: "#fff3ef",
      },
      {
        name: "Yoast SEO",
        icon: (
          <svg viewBox="0 0 50 50" className="w-7 h-7">
            <rect width="50" height="50" rx="10" fill="#9b59b6" />
            <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="Arial">Yo</text>
          </svg>
        ),
        bg: "#f8f0ff",
      },
    ],
    items: ["WordPress", "Ahrefs", "Yoast SEO"],
  },
  {
    category: "Branding & Content Creation",
    tools: [
      {
        name: "Canva",
        icon: (
          <svg viewBox="0 0 50 50" className="w-7 h-7">
            <rect width="50" height="50" rx="10" fill="url(#canvaGrad)" />
            <defs>
              <linearGradient id="canvaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00C4CC" />
                <stop offset="100%" stopColor="#7B2FFF" />
              </linearGradient>
            </defs>
            <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial">C</text>
          </svg>
        ),
        bg: "#f0fffe",
      },
      {
        name: "CapCut",
        icon: (
          <svg viewBox="0 0 50 50" className="w-7 h-7">
            <rect width="50" height="50" rx="10" fill="#111" />
            <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial">CC</text>
          </svg>
        ),
        bg: "#f5f5f5",
      },
      {
        name: "TikTok",
        icon: (
          <svg viewBox="0 0 50 50" className="w-7 h-7">
            <rect width="50" height="50" rx="10" fill="#010101" />
            <path
              d="M34 18.5c-2.3-.5-4-2.5-4-4.8V12h-4v17c0 1.7-1.3 3-3 3s-3-1.3-3-3 1.3-3 3-3c.3 0 .6 0 .9.1V22c-.3 0-.6-.1-.9-.1-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7V23c1.5.9 3.2 1.4 5 1.4v-4c-.7 0-1.4-.2-2-.4z"
              fill="white"
            />
          </svg>
        ),
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
        icon: (
          <svg viewBox="0 0 50 50" className="w-7 h-7">
            <defs>
              <radialGradient id="igGrad" cx="30%" cy="107%" r="150%">
                <stop offset="0%" stopColor="#fdf497" />
                <stop offset="5%" stopColor="#fdf497" />
                <stop offset="45%" stopColor="#fd5949" />
                <stop offset="60%" stopColor="#d6249f" />
                <stop offset="90%" stopColor="#285AEB" />
              </radialGradient>
            </defs>
            <rect width="50" height="50" rx="12" fill="url(#igGrad)" />
            <rect x="13" y="13" width="24" height="24" rx="6" fill="none" stroke="white" strokeWidth="2.5" />
            <circle cx="25" cy="25" r="7" fill="none" stroke="white" strokeWidth="2.5" />
            <circle cx="36" cy="14" r="2" fill="white" />
          </svg>
        ),
        bg: "#fff0f8",
      },
      {
        name: "Google Trends",
        icon: (
          <svg viewBox="0 0 50 50" className="w-7 h-7">
            <rect width="50" height="50" rx="10" fill="#fff" />
            <polyline points="8,38 18,22 26,30 34,16 44,28" fill="none" stroke="#4285F4" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="44" cy="28" r="3" fill="#EA4335" />
          </svg>
        ),
        bg: "#f0f8ff",
      },
      {
        name: "Google Analytics",
        icon: (
          <svg viewBox="0 0 50 50" className="w-7 h-7">
            <rect width="50" height="50" rx="10" fill="#fff" />
            <rect x="10" y="28" width="8" height="14" rx="4" fill="#F9AB00" />
            <rect x="21" y="18" width="8" height="24" rx="4" fill="#E37400" />
            <rect x="32" y="8" width="8" height="34" rx="4" fill="#1A73E8" />
          </svg>
        ),
        bg: "#fffdf0",
      },
    ],
    items: ["Instagram", "Google Trends", "Google Analytics"],
  },
  {
    category: "Ads & Growth",
    tools: [
      {
        name: "Meta Ads",
        icon: (
          <svg viewBox="0 0 50 50" className="w-7 h-7">
            <rect width="50" height="50" rx="10" fill="#fff" />
            <path
              d="M25 12C18.373 12 13 17.373 13 24c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zm-3 16.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm6 0c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
              fill="#0866FF"
            />
          </svg>
        ),
        bg: "#f0f4ff",
      },
      {
        name: "Google Ads",
        icon: (
          <svg viewBox="0 0 50 50" className="w-7 h-7">
            <rect width="50" height="50" rx="10" fill="#fff" />
            <path d="M11 36l12-20 7 12-4 8H11z" fill="#FBBC04" />
            <path d="M23 16l7 12H37l-7-12H23z" fill="#4285F4" />
            <circle cx="37" cy="36" r="6" fill="#34A853" />
          </svg>
        ),
        bg: "#f0fff4",
      },
      {
        name: "TikTok Ads",
        icon: (
          <svg viewBox="0 0 50 50" className="w-7 h-7">
            <rect width="50" height="50" rx="10" fill="#010101" />
            <text x="50%" y="45%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="Arial">
               <tspan x="50%" dy="0">TikTok</tspan>
               <tspan x="50%" dy="10">Ads</tspan>
            </text>
          </svg>
        ),
        bg: "#f5f5f5",
      },
    ],
    items: ["Meta Ads", "Google Ads", "TikTok Ads"],
  },
];

const certifications = [
  {
    org: "Rakamin Academy",
    title: "Scholarship Digital Marketing Bootcamp",
    date: "Jan 2026 – May 2026",
    logoBg: "#008F9B",
    logoText: "</>",
    logoColor: "white",
  },
  {
    org: "Rakamin Academy",
    title: "Advanced Social Media Marketing",
    date: "Apr 2026",
    logoBg: "#008F9B",
    logoText: "</>",
    logoColor: "white",
  },
  {
    org: "Google",
    title: "Ads Search Certificate",
    date: "Feb 2026 – Feb 2027",
    logoBg: "#fff",
    logoText: "G",
    logoColor: "#4285F4",
    logoBorder: "#e5e7eb",
  },
  {
    org: "Google",
    title: "Ads Display Certificate",
    date: "Feb 2026 – Feb 2027",
    logoBg: "#fff",
    logoText: "G",
    logoColor: "#EA4335",
    logoBorder: "#e5e7eb",
  },
  {
    org: "Coursera",
    title: "Meta Social Media Marketing Certificate",
    date: "Jan 2022 – Apr 2022",
    logoBg: "#0056D2",
    logoText: "C",
    logoColor: "white",
  },
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

function ToolIcon({ tool }: { tool: { name: string; icon: React.ReactNode; bg: string } }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.1, rotate: -1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className="flex flex-col items-center gap-1.5 cursor-pointer group"
      title={tool.name}
    >
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm border border-white/60"
        style={{ background: tool.bg }}
      >
        {tool.icon}
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
        type: "spring",
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
        ease: [0.16, 1, 0.3, 1],
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
        ease: [0.16, 1, 0.3, 1],
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
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm font-bold text-sm transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: cert.logoBg,
                    color: cert.logoColor,
                    border: cert.logoBorder ? `1px solid ${cert.logoBorder}` : "none",
                  }}
                >
                  {cert.logoText}
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