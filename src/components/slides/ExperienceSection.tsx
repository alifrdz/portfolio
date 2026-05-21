"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            ease: "easeOut" as const
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } }
};

export default function ExperienceSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const experiences = [
        {
            company: "PijarKita",
            role: "Content Specialist - Bootcamp Final Project",
            date: "April 2026 · 1 month",
            description: "Handled content strategy and social media execution for an MSME brand specializing in custom book stamps collaborating with team on KOL coordination and Meta Ads.",
            logo: "/assets/pijarkita.png",
        },
        {
            company: "PT. KOKEK Consulting",
            role: "Web Content & Data Administrator Intern",
            date: "Aug 2025 - Oct 2025",
            description: "Managed structured data for the tourism platform Destinasiku. Conducted data validation and quality checks to maintain accurate and efficient content management.",
            logo: "/assets/kokek.png",
        },
        {
            company: "PT. Poetra Teknologi Indonesia",
            role: "Hardware Support Intern",
            date: "Sep 2023 - Okt 2023",
            description: "Performed hardware troubleshooting for client devices. Installed and configured operating systems, drivers, and supporting software for daily operational needs",
            logo: "/assets/poetra.png",
        },
        {
           company: "Black Broadcast",
role: "Creative Team - Extracurricular",
date: "Jul 2024 - Dec 2025",
description: "Handled media asset management and content production for school broadcasting extracurricular covering school events and creative content execution.",
logo: "/assets/broadcast.png",
        }
    ];

    const education = [
        {
            school: "SMK NEGERI 10 SURABAYA",
            badge: "Vocational High School",
            date: "June 2023 - June 2026",
            major: "Software Engineering",
            logo: "/assets/smkn10.png",
        },
        {
            school: "Rakamin Academy - Scholarship Digital Marketing Bootcamp",
            date: "Jan 2026 - May 2026",
             description: "Received full scholarship covering 5 months of \nA-Z Digital Marketing.\nWon 1st place Final Project led social media content for @pijarkita_ collaborating with team on KOL coordination and Meta Ads.",
              logo: "/assets/rakamin.png",
        }
    ];

    return (
        <section id="experience" className="h-full w-full bg-[#fafafa] flex flex-col relative py-20">
            <div className="w-full max-w-7xl mx-auto px-8 flex-1 flex flex-col lg:flex-row gap-12 z-10">
                
                {/* Left Column: Experience */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full lg:w-1/2 flex flex-col"
                >
                    <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-bold text-[#111] mb-8 tracking-tight">
                        Experience
                    </motion.h2>

                    <motion.div variants={itemVariants} className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100 flex-1 relative" ref={containerRef}>
                        
                        {/* Timeline Track (Grey) */}
                        <div className="absolute left-[72px] md:left-[80px] top-[64px] md:top-[72px] bottom-[120px] md:bottom-[164px] w-1 bg-[#3B82F6] rounded-full z-0 overflow-hidden">
                             {/* Timeline Fill (Blue) */}
                            <motion.div
                                className="w-full bg-[#3B82F6] origin-top h-full"
                                style={{ scaleY: lineHeight }}
                            />
                        </div>
                        
                        <div className="flex flex-col gap-10 relative z-10">
                            {experiences.map((exp, index) => (
                                <div key={index} className="flex gap-6">
                                    {/* Logo Box Experience with Hover */}
                                    <motion.div 
                                        whileHover={{ y: -8, scale: 1.1, rotate: -1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                        className="w-20 h-20 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-center justify-center shrink-0 z-10 overflow-hidden cursor-pointer"
                                    >
                                        <img 
                                            src={exp.logo} 
                                            alt={exp.company} 
                                            className="w-full h-full object-contain p-2"
                                        />
                                    </motion.div>

                                    {/* Content */}
                                    <div className="flex flex-col pt-1">
                                        <h3 className="text-xl font-bold text-[#111] leading-tight">{exp.company}</h3>
                                        <h4 className="text-[1.05rem] font-semibold text-gray-800 mt-1">{exp.role}</h4>
                                        <p className="text-sm text-gray-400 mt-1 mb-3">{exp.date}</p>
                                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Column: Education */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full lg:w-1/2 flex flex-col mt-12 lg:mt-0"
                >
                    <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-bold text-[#111] mb-8 tracking-tight">
                        Education
                    </motion.h2>

                    <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
                        <div className="flex flex-col gap-10">
                            {/* SMK */}
                            <div className="flex gap-6 items-start">
                                <motion.div 
                                    whileHover={{ y: -8, scale: 1.1, rotate: -1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                    className="w-20 h-20 shrink-0 flex items-center justify-start cursor-pointer"
                                >
                                    <img 
                                        src={education[0].logo} 
                                        alt={education[0].school} 
                                        className="w-full h-full object-contain object-left"
                                    />
                                </motion.div>
                                <div className="flex flex-col pt-1">
                                    <h3 className="text-xl font-bold text-[#111] leading-tight">{education[0].school}</h3>
                                    <div className="mt-2">
                                        <span className="bg-[#3B82F6] text-white text-xs font-semibold px-3 py-1 rounded-full">
                                            {education[0].badge}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400 mt-2 mb-1">{education[0].date}</p>
                                    <p className="text-gray-600 font-medium text-sm md:text-base">
                                        {education[0].major}
                                    </p>
                                </div>
                            </div>

                            {/* Rakamin */}
                            <div className="flex gap-6">
                                <motion.div 
                                    whileHover={{ y: -8, scale: 1.1, rotate: -1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                    className="w-20 h-20 shrink-0 flex items-center justify-center cursor-pointer"
                                >
                                    <img 
                                        src={education[1].logo} 
                                        alt={education[1].school} 
                                        className="w-full h-full object-contain p-2"
                                    />
                                </motion.div>
                                <div className="flex flex-col pt-1">
                                    <h3 className="text-xl font-bold text-[#111] leading-tight md:pr-10">Rakamin Academy</h3>
                                    <div className="mt-2">
                                        <span className="bg-[#008F9B] text-white text-xs font-semibold px-3 py-1 rounded-full">
                                            Digital Marketing Bootcamp
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400 mt-2 mb-3">{education[1].date}</p>
                                    <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-2 whitespace-pre-line">
                                        {education[1].description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}