"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Link, MessageCircle, Camera, Mail, MapPin } from "lucide-react";

// --- ANIMATION VARIANTS ---
const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
};

const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any } },
};

const slideLeftVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any } },
};

const slideRightVariants: Variants = {
    hidden: { opacity: 0, x: 40, scale: 0.96 },
    show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
};

const contactItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any, delay: i * 0.08 },
    }),
};

const FooterSection = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-between bg-[#FFFFFF] text-[#000000] font-['Poppins'] px-8 md:px-16 lg:px-24 py-12 overflow-hidden">
            {/* BACKGROUND BLUR */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/40 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            {/* MAIN CONTENT - Pakai mb-20 buat kasih jarak ke garis bawah */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="flex-1 flex items-center relative z-10 mb-4"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center gap-12">
                    {/* LEFT SIDE */}
                    <motion.div variants={slideLeftVariants} className="flex flex-col space-y-10">
                        <div className="space-y-6">
                            <motion.h1 variants={fadeUpVariants} className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9]">
                                Let&apos;s work<br />together
                            </motion.h1>
                            <motion.p variants={fadeUpVariants} className="text-lg md:text-xl font-medium text-gray-600 max-w-md leading-relaxed">
                                Feel free to reach out for collaborations, freelance opportunities, or just a friendly hello.
                            </motion.p>
                        </div>

                        {/* CONTACT LIST CONTAINER */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                            
                            {/* COLUMN 1: LinkedIn, WA, IG */}
                            <div className="space-y-6">
                                {[
                                    { icon: Link, text: "linkedin.com/in/alif-firdaus-mulyanto", href: "https://linkedin.com/in/alif-firdaus-mulyanto" },
                                    { icon: MessageCircle, text: "wa.me/+62895402544007", href: "https://wa.me/62895402544007" },
                                    { icon: Camera, text: "instagram.com/alifrdzz", href: "https://instagram.com/alifrdzz" },
                                ].map((item, i) => (
                                    <motion.a
                                        key={i}
                                        custom={i}
                                        variants={contactItemVariants}
                                        whileHover={{ x: 6 }}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 group cursor-pointer w-fit"
                                    >
                                        <div className="bg-black p-2 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rounded-2xl">
                                            <item.icon size={20} className="text-white" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-700 transition-colors duration-300 group-hover:text-black">
                                            {item.text}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>

                            {/* COLUMN 2: Email & Map - SEKARANG PAKE motion.a DAN FLEX AGAR TIDAK HILANG */}
                            <div className="space-y-6">
                                {[
                                    { icon: Mail, text: "alifmulyanto21@gmail.com", href: "mailto:alifmulyanto21@gmail.com" },
                                    { icon: MapPin, text: "Surabaya, Indonesia", href: "https://maps.google.com/?q=Surabaya" },
                                ].map((item, i) => (
                                    <motion.a
                                        key={i}
                                        custom={i + 3} // Offset i agar animasinya nyambung dari kolom 1
                                        variants={contactItemVariants}
                                        whileHover={{ x: 6 }}
                                        href={item.href}
                                        target={item.icon === Mail ? "_self" : "_blank"}
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 group cursor-pointer w-fit"
                                    >
                                        <div className="transition-all duration-300 group-hover:scale-110">
                                            <item.icon size={24} className="text-black" strokeWidth={2.5} />
                                        </div>
                                        <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors duration-300">
                                            {item.text}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE (Avatar) */}
                    <motion.div variants={slideRightVariants} className="relative flex justify-center lg:justify-end items-center">
                        <div className="absolute w-[320px] h-[320px] md:w-[450px] md:h-[450px] bg-blue-100/40 blur-3xl rounded-full" />
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            whileHover={{ scale: 1.03, rotate: -1 }}
                            className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] z-10"
                        >
                            <Image src="/assets/your-avatar.png" alt="Avatar" fill className="object-contain drop-shadow-2xl" priority />
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* FOOTER BAR */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as any }}
                className="w-full relative z-10 pt-4 pb-2"
            >
                {/* Margin Bottom (mb-16) buat dorong teks copyright ke bawah garis */}
                <hr className="border-gray-200 w-full mb-4" />

                <div className="flex flex-col md:flex-row justify-between items-center text-sm font-medium text-gray-500 gap-4">
                    <p>© 2026 Alif Firdaus. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <button className="hover:text-black transition-colors duration-300">Terms</button>
                        <button className="hover:text-black transition-colors duration-300">Privacy</button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default FooterSection;