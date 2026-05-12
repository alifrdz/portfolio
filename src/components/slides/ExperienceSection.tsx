"use client";


import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


export default function ExperienceSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], [0, 1]);

    
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

    const experiences = [
        {
            company: "PijarKita",
            role: "Digital Marketing & Content Contributor",
            date: "April 2026",
            description: "Supported digital marketing campaigns through content, influencer partnerships, and paid ads. Helped increase brand awareness and sales through engagement optimization.",
            logoText: "Pijar.",
        },
        {
            company: "PT. KOKEK Consulting",
            role: "Web Content & Data Administrator Intern",
            date: "Aug 2025 - Oct 2025",
            description: "Managed structured data for the tourism platform Destinasiku. Conducted data validation and quality checks to maintain accurate and efficient content management.",
            logoText: "KOKEK",
        },
        {
            company: "PT. Poetra Teknologi Indonesia",
            role: "Hardware Support Intern",
            date: "Sep 2023 - Okt 2023",
            description: "Performed hardware troubleshooting for client devices. Installed and configured operating systems, drivers, and supporting software for daily operational needs",
            logoText: "POETRA",
        },
        {
            company: "Black Broadcast",
            role: "Creative Staff",
            date: "Jul 2024 - Dec 2025",
            description: "Managed media assets and content production for school broadcasting activities. Assisted event coverage and creative content execution",
            logoText: "BROADCAST",
        }
    ];

    const education = [
        {
            school: "SMK NEGERI 10 SURABAYA",
            badge: "Vocational High School",
            date: "July 2024 - Apr 2026",
            major: "Software Engineering",
            logoText: "SMKN 10",
        },
        {
            school: "Rakamin Academy - Scholarship Digital Marketing Bootcamp",
            date: "Jan 2026 - May 2026",
            description: "Received full 100% scholarship to learn topic A-Z Digital Marketing for ~4 months.\nLed Project & Won 1st Final Project : @pijarkita_\nAchieved 331%+ target performance, 783%+ Add to Cart growth, and 151%+ Sales target attainment.",
            logoText: "</>",
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
 <div className="absolute left-[62px] md:left-[70px] top-[64px] md:top-[72px] bottom-[120px] md:bottom-[164px] w-1 bg-[#3B82F6] rounded-full z-0 overflow-hidden">
                        </div>
                        
                        {/* Timeline Fill (Blue) */}
                       <motion.div
  className="absolute left-0 top-0 w-full h-full bg-[#3B82F6] origin-top"
  style={{ scaleY: lineHeight }}
/>

                        <div className="flex flex-col gap-10 relative z-10">
                            {experiences.map((exp, index) => (
                                <div key={index} className="flex gap-6">
                                    {/* Logo Box */}
                                    <div className="w-16 h-16 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-center justify-center shrink-0 z-10">
                                        <span className="text-[10px] font-bold text-gray-800 tracking-wider text-center px-1">{exp.logoText}</span>
                                    </div>

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
                            <div className="flex gap-6">
                                <div className="w-16 h-16 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                                    <span className="text-[10px] font-bold text-green-600 text-center px-1">{education[0].logoText}</span>
                                </div>
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
                                <div className="w-16 h-16 bg-[#008F9B] border border-gray-100 rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                                    <span className="text-xl font-bold text-white tracking-widest">{education[1].logoText}</span>
                                </div>
                                <div className="flex flex-col pt-1">
                                    <h3 className="text-xl font-bold text-[#111] leading-tight md:pr-10">Rakamin Academy</h3>
                                    <div className="mt-2">
                                        <span className="bg-[#008F9B] text-white text-xs font-semibold px-3 py-1 rounded-full">
                                            Marketing Bootcamp
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
