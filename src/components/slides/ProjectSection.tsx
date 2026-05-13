"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image"; // FIX: Import Image untuk optimasi

// ─────────────────────────────────────────────────────────────
// ANIMATION VARIANTS
// ─────────────────────────────────────────────────────────────

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    show: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1] as any,
            delay,
        },
    }),
};

const fadeLeft = {
    hidden: {
        opacity: 0,
        x: 40,
    },
    show: (delay = 0) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1] as any,
            delay,
        },
    }),
};

const scaleIn = {
    hidden: {
        opacity: 0,
        scale: 0.92,
    },
    show: (delay = 0) => ({
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1] as any,
            delay,
        },
    }),
};

// ─────────────────────────────────────────────────────────────
// COUNTER COMPONENT
// ─────────────────────────────────────────────────────────────

const NumberCounter = ({ value }: { value: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const target = parseInt(value.replace(/\D/g, ""));

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = target;
            const duration = 2000; // 2 seconds animation
            const increment = end / (60 * (duration / 1000));

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 1000 / 60);

            return () => clearInterval(timer);
        }
    }, [isInView, target]);

    return (
        <span ref={ref} className="flex items-center justify-center gap-0.5">
            {count}
            {value.includes("%") ? "%" : ""}
            <motion.span
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="text-emerald-500 font-bold text-sm ml-0.5"
            >
                ↑
            </motion.span>
        </span>
    );
};

// ─────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────

export default function ProjectSection() {
    const results = [
        { v: "151%", l: "Sales Growth" },
        { v: "783%", l: "Add to Cart" },
        { v: "331%", l: "Impression" },
        { v: "144%", l: "Profile Visit" },
        { v: "300%", l: "KOL Video" },
    ];

    return (
        // FIX: Tambahkan id="projects" supaya navbar berfungsi
        <section id="projects" className="min-h-screen w-full bg-white py-24 flex flex-col items-center font-['Poppins'] overflow-hidden">
            <div className="w-full max-w-7xl px-8">

                {/* HEADLINE - FIX: Tambahkan responsive text size */}
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    custom={0}
                    className="text-4xl md:text-6xl font-black text-center mb-16 md:mb-24 tracking-tighter text-black"
                >
                    Projects & Case Studies
                </motion.h2>

                {/* MAIN CARD */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    custom={0.1}
                    className="relative bg-[#fcfcfc] border border-gray-100 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 shadow-sm overflow-hidden"
                >
                    {/* BADGE */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        custom={0.2}
                        className="absolute top-0 left-0 flex items-center gap-4 md:gap-6 z-20"
                    >
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring" as const, stiffness: 300, damping: 15 }}
                            className="bg-[#3B82F6] text-white flex items-center px-6 md:px-10 py-4 md:py-6 rounded-br-[1.5rem] md:rounded-br-[2.5rem] shadow-lg"
                        >
                            <span className="font-black text-3xl md:text-5xl">01</span>
                        </motion.div>
                        <div className="text-black">
                            <h3 className="text-lg md:text-[24px] font-black tracking-tighter leading-none">@pijarkita_</h3>
                            <p className="text-xs md:text-[18px] font-bold opacity-60 mt-1">Digital Marketing & Content Strategy</p>
                        </div>
                    </motion.div>

                    {/* GRID */}
                    <div className="grid lg:grid-cols-12 gap-10 items-start mt-20 md:mt-24">
                        {/* LEFT */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            custom={0.25}
                            className="lg:col-span-4 flex flex-col gap-12"
                        >
                            {/* IMAGE GRID - FIX: Pake Image component */}
                            <div className="grid grid-cols-2 gap-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <motion.div
                                        key={i}
                                        variants={scaleIn}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true }}
                                        custom={i * 0.08}
                                        whileHover={{ y: -6, scale: 1.02 }}
                                        className="aspect-square bg-gray-100 rounded-2xl border-4 border-white shadow-sm relative overflow-hidden"
                                    >
                                        <Image 
                                            src={`/assets/project1-${i}.png`} 
                                            alt="Project Grid" 
                                            fill 
                                            className="object-cover"
                                        />
                                    </motion.div>
                                ))}
                            </div>

                            {/* RESULT */}
                            <div className="flex flex-col items-center">
                                <motion.h4 variants={fadeUp} custom={0.15} className="text-2xl font-black text-black mb-8">RESULT</motion.h4>
                                <div className="flex flex-col gap-4 w-full">
                                    <div className="flex justify-center gap-3">
                                        {results.slice(0, 3).map((res, i) => (
                                            <motion.div key={i} variants={fadeUp} custom={i * 0.1} whileHover={{ y: -6, scale: 1.02 }} className="bg-white rounded-3xl shadow-sm border border-gray-50 p-4 flex flex-col items-center flex-1">
                                                <span className="text-lg font-black text-black leading-none">
                                                    <NumberCounter value={res.v} />
                                                </span>
                                                <span className="text-[10px] font-bold text-gray-400 uppercase mt-2 text-center leading-tight">{res.l}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="flex justify-center gap-3 px-6 md:px-10">
                                        {results.slice(3, 5).map((res, i) => (
                                            <motion.div key={i} variants={fadeUp} custom={i * 0.12} whileHover={{ y: -6, scale: 1.02 }} className="bg-white rounded-3xl shadow-sm border border-gray-50 p-4 flex flex-col items-center flex-1">
                                                <span className="text-lg font-black text-black leading-none">
                                                    <NumberCounter value={res.v} />
                                                </span>
                                                <span className="text-[10px] font-bold text-gray-400 uppercase mt-2 text-center leading-tight">{res.l}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* CENTER MOCKUP */}
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.35} className="lg:col-span-4 flex justify-center order-first lg:order-none">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                whileHover={{ scale: 1.02 }}
                                className="w-[280px] md:w-[310px] h-[580px] md:h-[630px] bg-black rounded-[3.5rem] border-[12px] border-[#1a1a1a] shadow-2xl relative overflow-hidden"
                            >
                                <Image 
                                    src="/assets/pijarkita-mockup.png" 
                                    alt="Mockup" 
                                    fill 
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>
                        </motion.div>

                        {/* RIGHT DESCRIPTION */}
                        <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.4} className="lg:col-span-4 flex flex-col pt-0 lg:pt-10">
                            <div className="space-y-10">
                                <motion.div variants={fadeUp} custom={0.1}>
                                    <h5 className="text-xl font-bold text-black mb-3">Objectives</h5>
                                    <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                                        <span className="font-bold text-black">PijarKita</span> is an MSME specializing in{" "}
                                        <span className="font-bold text-black">custom book stamps</span> for journaling and personal branding.
                                    </p>
                                </motion.div>

                                <motion.div variants={fadeUp} custom={0.2}>
                                    <h5 className="text-xl font-bold text-black mb-3">My Scope</h5>
                                    <ul className="text-black text-[15px] font-bold space-y-1 list-disc list-inside">
                                        <li>Digital Marketing & Funnel Strategy</li>
                                        <li>KOL Management & Media Relations</li>
                                        <li>Social Media Content Specialist</li>
                                        <li>Meta Ads & Shopee Ads</li>
                                    </ul>
                                </motion.div>

                                <motion.div variants={fadeUp} custom={0.3}>
                                    <h5 className="text-xl font-bold text-black mb-3">Strategy</h5>
                                    <div className="text-gray-800 text-[15px] leading-relaxed font-medium space-y-4">
                                        <p>Implemented <span className="font-bold text-black">3H content pillars</span> and optimized <span className="font-bold text-black">funnels</span>.</p>
                                        <p>Executed <span className="font-bold text-black">Micro KOL partnerships</span> to expand organic reach.</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}