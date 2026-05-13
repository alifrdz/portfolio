"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion"; // 1. Variants dipindah ke atas

// 2. Variabel animasi dipindah ke LUAR fungsi agar tidak error 'outside of module'
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            ease: "easeOut"
        }
    }
};

export default function AboutSection() {
    // 3. itemVariants tetap di sini sesuai gaya asli lo
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section id="about" className="h-full w-full bg-white flex flex-col relative pt-20">
            {/* Marquee Animation */}
            <div className="w-full overflow-hidden border-y border-gray-100 py-4 flex whitespace-nowrap relative mt-8 shrink-0">
                <motion.div
                    className="flex whitespace-nowrap font-bold text-2xl md:text-4xl text-[#111] uppercase tracking-widest gap-8 items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                >
                    <div className="flex gap-8 items-center shrink-0 pl-8">
                        <span>UX DESIGN</span>
                        <span className="text-[#3B82F6]">✦</span>
                        <span>BRAND</span>
                        <span className="text-[#3B82F6]">✦</span>
                        <span>MARKETING</span>
                        <span className="text-[#3B82F6]">✦</span>
                        <span>UX DESIGN</span>
                        <span className="text-[#3B82F6]">✦</span>
                        <span>BRAND</span>
                        <span className="text-[#3B82F6]">✦</span>
                        <span>MARKETING</span>
                        <span className="text-[#3B82F6]">✦</span>
                    </div>
                    <div className="flex gap-8 items-center shrink-0 pl-8">
                        <span>UX DESIGN</span>
                        <span className="text-[#3B82F6]">✦</span>
                        <span>BRAND</span>
                        <span className="text-[#3B82F6]">✦</span>
                        <span>MARKETING</span>
                        <span className="text-[#3B82F6]">✦</span>
                        <span>UX DESIGN</span>
                        <span className="text-[#3B82F6]">✦</span>
                        <span>BRAND</span>
                        <span className="text-[#3B82F6]">✦</span>
                        <span>MARKETING</span>
                        <span className="text-[#3B82F6]">✦</span>
                    </div>
                </motion.div>
            </div>

            {/* Main Content: 2 Columns */}
            <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-8 flex-1 py-10 gap-10 z-10 mt-20">
                
                {/* Left: Text Description */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full lg:w-1/2 text-left z-10 flex flex-col justify-center"
                >
                    <motion.h2 variants={itemVariants} className="text-6xl md:text-[5.5rem] leading-[1.1] font-bold text-[#111] mb-8 tracking-tight">
                        About Me
                    </motion.h2>
                    <motion.div variants={itemVariants} className="space-y-6 text-gray-600 text-base md:text-[1.05rem] leading-relaxed">
                        <p>
                            Call me Alif, a fresh graduate with a passion for building{" "}
                            <span className="font-semibold text-gray-800">business and marketing strategies</span>. I focus on{" "}
                            <span className="font-semibold text-gray-800">growth marketing</span>{" "}
                            and various brand activities to drive better business results.
                        </p>
                        <p>
                            <span className="font-bold text-gray-800 border-b-2 border-[#3B82F6]">I have</span> developed core skills in{" "}
                            <span className="font-semibold text-gray-800">business development, marketing strategy,</span> and{" "}
                            <span className="font-semibold text-gray-800">data analysis</span>. I am also experienced in managing social media and brand campaigns through various academic and personal projects.
                        </p>
                        <p>
                            I have explored various marketing frameworks through academic projects and case studies, focusing on social media strategy, brand development, and ads performance.
                        </p>
                        <p>
                            I am committed to delivering real results through marketing strategies, brand campaigns, and optimizing performance with a data-driven mindset.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Right: Character Image */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/2 flex justify-center items-end h-[70vh] lg:h-[82vh] relative mt-10 lg:mt-0"
                >
                    <motion.img 
                        src="/assets/alif-about.png" 
                        alt="Alif - About Me" 
                        className="h-full w-auto object-contain object-bottom scale-110 drop-shadow-2xl"
                        style={{ transformOrigin: "bottom center" }}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        animate={{ rotate: [0, 2, -2, 2, -1, 1, 0] }}
                        transition={{
                            scale: { type: "spring", damping: 10, stiffness: 120, duration: 0.8 },
                            opacity: { duration: 0.8 },
                            rotate: { repeat: Infinity, repeatDelay: 1, duration: 2.5, ease: "easeInOut" },
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
}