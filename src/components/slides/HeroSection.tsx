"use client";

import Image from "next/image";
import { Sparkles, Rss, Rocket } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GREETINGS = ["Hello!", "Halo!", "Hola!", "Bonjour!", "Konnichiwa!"];

export default function Slide1() {
    const [greetingIndex, setGreetingIndex] = useState(0);

    // Dynamic Greeting Logic
    useEffect(() => {
        const interval = setInterval(() => {
            setGreetingIndex((prev) => (prev + 1) % GREETINGS.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Stagger Animations for Text
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section className="h-full w-full bg-white flex flex-col items-center relative pt-24 pb-20">
            {/* Floating Navbar */}
           <motion.nav
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
    }}
    className="
        fixed
        top-6
        left-1/2
        -translate-x-1/2
        z-50
        flex
        items-center
        gap-2
        px-3
        py-3
        rounded-full
        bg-white/70
        backdrop-blur-xl
        border
        border-white/40
        shadow-[0_8px_30px_rgba(0,0,0,0.06)]
    "
>
    {["Home", "About", "Projects", "Contact"].map((item) => (
        <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            whileHover={{
                y: -2,
            }}
            whileTap={{
                scale: 0.96,
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 20,
            }}
            className="
                relative
                px-5
                py-2.5
                rounded-full
                text-[14px]
                font-semibold
                text-black/60
                hover:text-black
                hover:bg-black/[0.04]
                transition-all
                duration-200
                tracking-tight
            "
        >
            {item}
        </motion.a>
    ))}
</motion.nav>

            <div className="flex flex-col items-center w-full pt-16 pb-10 flex-1">
                {/* Top Decoration */}
                <div className="relative flex items-center justify-center h-10">
                    <svg className="absolute -right-6 -top-4 w-6 h-6 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M4 12c4-2 8-2 12 0" />
                        <path d="M6 18c3-1.5 7-1.5 10 0" />
                    </svg>

                    {/* Dynamic Title / Hello Logic */}
                    <div className="border border-gray-300 rounded-full px-6 py-1.5 text-sm font-medium text-black relative flex justify-center items-center shadow-sm bg-white overflow-hidden" style={{ minWidth: "120px" }}>
                        <AnimatePresence mode="wait">
                            <motion.span
                                layout
                                key={greetingIndex}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="absolute"
                            >
                                {GREETINGS[greetingIndex]}
                            </motion.span>
                        </AnimatePresence>
                        {/* Spacer to maintain bubble size */}
                        <span className="opacity-0">Konnichiwa!</span>
                    </div>
                </div>

                {/* Heading (Staggered Reveal) */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="relative mt-8 text-center z-10"
                >
                    <svg className="absolute -left-12 top-4 w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M4 8c4-2 8-2 12 0" />
                        <path d="M6 14c3-1.5 7-1.5 10 0" />
                    </svg>

                    <motion.h1 layout variants={itemVariants} className="text-6xl md:text-[5.5rem] leading-[1.1] font-bold text-black tracking-[-0.03em] flex items-center justify-center gap-2">
                        I&apos;m <span className="text-[#3B82F6]">Alif</span>
                        <motion.span
                            className="inline-block origin-bottom-right"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1, rotate: [0, 15, -5, 15, -5, 10, 0] }}
                            transition={{
                                scale: { type: "spring", damping: 10, stiffness: 200, delay: 0.2 },
                                rotate: { repeat: Infinity, repeatDelay: 1.5, duration: 2, ease: "easeInOut", delay: 1 }
                            }}
                        >
                            👋
                        </motion.span>
                    </motion.h1>
                    <motion.h2 layout variants={itemVariants} className="text-6xl md:text-[5.5rem] leading-[1.1] font-bold text-black tracking-[-0.03em] mt-1">
                        A Brand & Marketing Specialist
                    </motion.h2>
                </motion.div>

                {/* Center Layout (Texts + Image + Badges) */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-12 px-8 flex-1 relative"
                >
                    {/* Left Text Block */}
                    <motion.div layout variants={itemVariants} className="md:w-1/4 text-left z-10 mb-10 md:mb-0">
                        <div className="text-gray-400 text-3xl font-serif leading-none mb-2">&quot;</div>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-[250px]">
                            Crafting <span className="text-black font-semibold">high performance</span> digital
                            campaigns through <span className="text-black font-semibold">rigorous testing</span>,{" "}
                            <span className="text-black font-semibold">SEO</span>, and <span className="text-black font-semibold">data-backed insights</span>.
                        </p>
                    </motion.div>

                    {/* Center Visual (Circle + Image + Badges) */}
                    <motion.div layout variants={itemVariants} className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex justify-center items-end mt-10 md:mt-0">
                        {/* Blue Circle */}
                       <div className="group relative w-full h-full flex justify-center items-end">

    {/* BACKGROUND CIRCLE */}
    <div
        className="
            absolute
            inset-x-0
            bottom-0
            top-[10%]
            bg-[#3B82F6]
            rounded-full
            z-0
            mx-auto
            w-full
            h-full
            scale-100
            transition-all
            duration-500
            ease-out
            group-hover:scale-105
            group-hover:brightness-110
        "
    />

    {/* USER IMAGE */}
    <img
        src="/assets/alif.png"
        alt="Alif Profile"
        className="
            relative
            z-10
            w-full
            h-full
            object-contain
            object-bottom
            translate-y-6
            scale-110
            transition-all
            duration-500
            ease-out
            group-hover:scale-[1.16]
            drop-shadow-[0_25px_60px_rgba(0,0,0,0.18)]
        "
    />

</div>

                        {/* Badges */}
                        {/* Marketing Badge */}
                        <div className="absolute top-[20%] -left-[10%] md:-left-[15%] z-10">
                            <motion.div
                                layout
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="bg-[#111] text-white px-5 py-2.5 rounded-full flex items-center gap-2 shadow-xl shadow-black/10"
                            >
                                <Rss size={16} className="text-gray-300" />
                                <span className="text-sm font-medium">Marketing</span>
                            </motion.div>
                        </div>

                        {/* Brand Badge */}
                        <div className="absolute bottom-[28%] -left-[5%] md:-left-[8%] z-10">
                            <motion.div
                                layout
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                                className="bg-[#111] text-white px-5 py-2.5 rounded-full flex items-center gap-2 shadow-xl shadow-black/10"
                            >
                                <Sparkles size={16} className="text-yellow-400" fill="currentColor" />
                                <span className="text-sm font-medium">Brand</span>
                            </motion.div>
                        </div>

                        {/* Ads Badge */}
                        <div className="absolute top-[35%] -right-[5%] md:-right-[8%] z-10">
                            <motion.div
                                layout
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="bg-[#111] text-white px-5 py-2.5 rounded-full flex items-center gap-2 shadow-xl shadow-black/10"
                            >
                                <Rocket size={16} className="text-orange-500" fill="currentColor" />
                                <span className="text-sm font-medium">Ads</span>
                            </motion.div>
                        </div>

                        {/* Social Media Badge */}
                        <div className="absolute bottom-[18%] -right-[8%] md:-right-[12%] z-10">
                            <motion.div
                                layout
                                animate={{ y: [0, -14, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                                className="bg-[#111] text-white px-5 py-2.5 rounded-full flex items-center gap-2 shadow-xl shadow-black/10"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                <span className="text-sm font-medium">Social Media</span>
                            </motion.div>
                        </div>

                      <motion.div
    layout
    variants={itemVariants}
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{
        duration: 0.6,
        ease: "easeOut",
    }}
    whileHover={{
        y: -4,
        scale: 1.02,
    }}
    className="
        absolute 
        -bottom-6 
        left-1/2 
        -translate-x-1/2 
        z-30 
        bg-[#111]/90
        backdrop-blur-xl
        rounded-full 
        p-1.5 
        flex 
        flex-nowrap
        items-center 
        shadow-[0_20px_60px_rgba(0,0,0,0.35)]
        border
        border-white/10
    "
>
    {/* PORTFOLIO BUTTON */}
    <motion.button
        whileHover={{
            scale: 1.03,
        }}
        whileTap={{
            scale: 0.97,
        }}
        transition={{
            type: "spring",
            stiffness: 500,
            damping: 18,
        }}
        className="
            bg-[#3B82F6] 
            hover:bg-blue-600 
            text-white 
            px-6 
            py-2.5 
            rounded-full 
            text-sm 
            font-medium 
            flex 
            items-center 
            gap-1
            whitespace-nowrap
            shadow-lg
        "
    >
        Portfolio

        <motion.span
            animate={{
                x: [0, 3, 0],
                y: [0, -2, 0],
            }}
            transition={{
                duration: 1.8,
                repeat: Infinity,
            }}
            className="ml-1 text-xs"
        >
            ↗
        </motion.span>
    </motion.button>

    {/* HIRE ME BUTTON */}
    <motion.button
        whileHover={{
            color: "#ffffff",
            x: 2,
        }}
        whileTap={{
            scale: 0.96,
        }}
        transition={{
            duration: 0.2,
        }}
        className="
            text-gray-300 
            hover:text-white 
            px-6 
            py-2.5 
            rounded-full 
            text-sm 
            font-medium 
            transition-all 
            duration-300
            whitespace-nowrap
        "
    >
        <a
    href="https://wa.me/62895402544007"
    target="_blank"
>
    Hire me
</a>
    </motion.button>
</motion.div>

                    </motion.div>

                    {/* Right Text Block */}
                    <motion.div layout variants={itemVariants} className="md:w-1/4 text-center md:text-right z-10 mt-16 md:mt-0 flex flex-col items-center md:items-end">
                        <h3 className="text-black font-bold text-sm tracking-wider mb-2">GROWTH FOCUSED</h3>
                        <p className="text-gray-500 text-xs leading-relaxed max-w-[200px] text-center md:text-right">
                            Optimizing digital growth for maximum conversion and ROI
                        </p>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
