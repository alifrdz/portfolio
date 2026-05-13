"use client";

import Image from "next/image"; // FIX: Import Image untuk aset asli nanti
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// ─────────────────────────────────────────────
// ANIMATION VARIANTS
// ─────────────────────────────────────────────

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            delay,
        },
    }),
};

const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    show: (delay = 0) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            delay,
        },
    }),
};

const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    show: (delay = 0) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            delay,
        },
    }),
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.94 },
    show: (delay = 0) => ({
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
            delay,
        },
    }),
};

// ─────────────────────────────────────────────
// COUNTER COMPONENT
// ─────────────────────────────────────────────

const NumberCounter = ({
    value,
    isCurrency = false,
}: {
    value: string;
    isCurrency?: boolean;
}) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const target = parseInt(value.replace(/\D/g, ""));

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = target;
            const duration = 2000; // FIX: Durasi tetap 2 detik biar mulus
            const frameRate = 1000 / 60;
            const totalFrames = duration / frameRate;
            const increment = end / totalFrames;

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, frameRate);

            return () => clearInterval(timer);
        }
    }, [isInView, target]);

    const formattedCount = isCurrency
        ? `Rp ${count.toLocaleString("id-ID")}`
        : count.toLocaleString("id-ID");

    return (
        <span ref={ref} className="flex items-center justify-center gap-1">
            {formattedCount}
            {value.includes("%") ? "%" : ""}
            <motion.span
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="text-emerald-500 font-bold text-[14px] ml-0.5"
            >
                ↑
            </motion.span>
        </span>
    );
};

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────

export default function ProjectShowcaseTwo() {
    return (
        <section className="w-full bg-white py-12 md:py-24 px-4 md:px-8 overflow-hidden">
            {/* MAIN CONTAINER */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                custom={0}
                className="relative bg-white border border-gray-100 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 shadow-sm overflow-hidden font-['Poppins'] max-w-7xl mx-auto"
            >
                {/* BADGE 02 + TITLE */}
                <motion.div
                    variants={fadeRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    custom={0.15}
                    className="absolute top-0 right-0 flex flex-row-reverse items-center gap-4 md:gap-6 z-20"
                >
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="bg-[#3B82F6] text-white flex items-center px-6 md:px-10 py-4 md:py-6 rounded-bl-[1.5rem] md:rounded-bl-[2.5rem] shadow-lg"
                    >
                        <span className="font-black text-3xl md:text-5xl">02</span>
                    </motion.div>

                    <div className="text-right">
                        <h3 className="text-lg md:text-[24px] font-black tracking-tighter leading-none text-black">@rykuzastore</h3>
                        <p className="text-sm md:text-[20px] font-bold opacity-60 mt-2 text-black">Ads & Performance Marketing</p>
                    </div>
                </motion.div>

                {/* GRID */}
                <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-start mt-20 md:mt-24">
                    
                    {/* LEFT COLUMN */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        custom={0.2}
                        className="lg:col-span-5 flex flex-col space-y-10 text-black order-last lg:order-first"
                    >
                        <div className="space-y-10">
                            <motion.div variants={fadeUp} custom={0.1}>
                                <h4 className="text-xl font-bold mb-3 uppercase">OBJECTIVES</h4>
                                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                                    <span className="font-bold text-black">Rykuza Store</span> aimed to increase consideration for{" "}
                                    <span className="font-bold text-black">premium app and game top-up services.</span> By utilizing{" "}
                                    <span className="font-bold text-black">Meta Ads</span>, the campaign targeted specific interest groups.
                                </p>
                            </motion.div>

                            <motion.div variants={fadeUp} custom={0.2}>
                                <h4 className="text-xl font-bold mb-3 uppercase">MY SCOPE</h4>
                                <ul className="text-black text-[15px] font-bold space-y-2 list-disc list-inside">
                                    <li>Meta Ads Campaign Management</li>
                                    <li>Audience Targeting & Segmentation</li>
                                    <li>Performance Data Analysis</li>
                                    <li>Ad Creative Optimization</li>
                                </ul>
                            </motion.div>

                            <motion.div variants={fadeUp} custom={0.3}>
                                <h4 className="text-xl font-bold mb-3 uppercase">STRATEGY</h4>
                                <div className="text-gray-800 text-[15px] leading-relaxed font-medium space-y-4">
                                    <p>Defined a precise <span className="font-bold text-black">target audience</span> aged <span className="font-bold text-black">18-30</span>, focusing on interests in <span className="font-bold text-black">Action Movies, Canva, and Netflix.</span></p>
                                    <p>Concentrated <span className="font-bold text-black">100% of the ad placement</span> on <span className="font-bold text-black">Instagram Mobile</span> to maximize engagement.</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN (VISUALS) */}
                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        custom={0.3}
                        className="lg:col-span-7 flex flex-col items-center"
                    >
                        {/* MOCKUP - FIXED with Image Component */}
                        <motion.div
                            variants={scaleIn}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            custom={0.1}
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                            }}
                            whileHover={{ scale: 1.01 }}
                            className="w-full max-w-[600px] aspect-[16/10] bg-white rounded-3xl border border-gray-200 shadow-xl relative overflow-hidden mb-12"
                        >
                            <div className="absolute top-4 left-0 w-full text-center z-10">
                                <span className="text-xl md:text-2xl font-black text-gray-800">Content Ads</span>
                            </div>
                            <Image 
                                src="/assets/rykuza-ads.png" 
                                alt="Content Ads Rykuza" 
                                fill 
                                className="object-cover"
                            />
                        </motion.div>

                        {/* RESULT SECTION */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            custom={0.25}
                            className="w-full flex flex-col items-center"
                        >
                            <h4 className="text-2xl md:text-3xl font-black text-black mb-10">RESULT</h4>

                            <div className="flex flex-wrap justify-center gap-4 w-full mb-4">
                                {[
                                    { title: "Demographic Focus", value: "67%", extra: "Male" },
                                    { title: "Cost Per Result", value: "1837", currency: true },
                                    { title: "Reach", value: "3727" },
                                ].map((item, i) => (
                                    <motion.div key={i} variants={fadeUp} custom={i * 0.1} whileHover={{ y: -6, scale: 1.02 }} className="bg-white rounded-3xl shadow-sm border border-gray-100 px-6 py-5 flex flex-col items-center min-w-[140px] flex-1">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase mb-2 text-center">{item.title}</span>
                                        <span className="text-xl font-black text-black leading-none flex items-center gap-1">
                                            <NumberCounter value={item.value} isCurrency={item.currency} />
                                            {item.extra && <span className="text-sm font-bold text-black">{item.extra}</span>}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex justify-center gap-4 w-full md:max-w-[70%]">
                                {[
                                    { title: "Link Clicks", value: "15" },
                                    { title: "Impression", value: "3836" },
                                ].map((item, i) => (
                                    <motion.div key={i} variants={fadeUp} custom={i * 0.12} whileHover={{ y: -6, scale: 1.02 }} className="bg-white rounded-3xl shadow-sm border border-gray-100 px-6 py-5 flex flex-col items-center flex-1">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase mb-2 text-center">{item.title}</span>
                                        <span className="text-xl font-black text-black leading-none">
                                            <NumberCounter value={item.value} />
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}