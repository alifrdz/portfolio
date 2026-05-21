"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

// 1. Buat MotionImage agar Image Next.js bisa di-animasikan langsung
const MotionImage = motion(Image);

// 2. Variabel di LUAR (Sesuai struktur lo) + Fix Ease Type
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            ease: "easeOut" as const // FIX: as const wajib buat TypeScript
        }
    }
};

export default function AboutSection() {
    // 3. Variabel di DALAM (Sesuai gaya asli lo)
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } 
        }
    };

  return (
    <section id="about" className="h-full w-full bg-white flex flex-col relative pt-20">
        {/* Marquee Animation */}
        <div className="w-full overflow-hidden border-y border-gray-100 py-4 flex relative mt-8 shrink-0">
            <motion.div
                className="flex whitespace-nowrap font-bold text-2xl md:text-4xl text-[#111] uppercase tracking-widest"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }} // Durasi dinaikin ke 25 biar jalannya ga terlalu ngebut karena teksnya makin panjang
            >
                {/* Loop 2 kali, tapi isi teks di dalamnya diperbanyak biar lebih lebar dari layar monitor */}
                {[1, 2].map((i) => (
                   <div key={i} className="flex gap-8 items-center shrink-0 pr-8">
    <span>CONTENT</span><span className="text-[#3B82F6]">✦</span>
    <span>BRAND</span><span className="text-[#3B82F6]">✦</span>
    <span>MARKETING</span><span className="text-[#3B82F6]">✦</span>

    <span>SEO</span><span className="text-[#3B82F6]">✦</span>
    <span>SOCIAL MEDIA</span><span className="text-[#3B82F6]">✦</span>
    <span>PAID ADS</span><span className="text-[#3B82F6]">✦</span>

    <span>CONTENT</span><span className="text-[#3B82F6]">✦</span>
    <span>BRAND</span><span className="text-[#3B82F6]">✦</span>
    <span>MARKETING</span><span className="text-[#3B82F6]">✦</span>

    <span>SEO</span><span className="text-[#3B82F6]">✦</span>
    <span>SOCIAL MEDIA</span><span className="text-[#3B82F6]">✦</span>
    <span>PAID ADS</span><span className="text-[#3B82F6]">✦</span>
</div>
                ))}
            </motion.div>
        </div>

        {/* Main Content: 2 Columns */}
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-8 flex-1 pt-2 pb-10 gap-10 z-10 mt-6">
            
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
        Call me Alif a fresh graduate with a genuine curiosity for{" "}
        <span className="font-semibold text-gray-800">digital marketing</span>{" "}
        and how brands connect with people through{" "}
        <span className="font-semibold text-gray-800">content, strategy, and data</span>.
    </p>
    <p>
        I sharpened my skills through{" "}
        <span className="font-semibold text-gray-800">Rakamin's Digital Marketing Bootcamp</span>{" "}
        (full scholarship), where I led a real campaign for an MSME brand handling{" "}
        <span className="font-semibold text-gray-800">social media strategy, KOL management,</span> and{" "}
        <span className="font-semibold text-gray-800">Meta Ads</span> and our team{" "}
        <span className="font-bold text-gray-800 border-b-2 border-[#3B82F6]">won 1st place</span>{" "}
        in the final project.
    </p>
    <p>
        I'm early in my career, but I take it seriously showing up with a{" "}
        <span className="font-semibold text-gray-800">learner's mindset</span>,
        strong work ethic, and a focus on{" "}
        <span className="font-semibold text-gray-800">real results</span>, not just activity.
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
                <MotionImage 
                    src="/assets/alif-about.png" 
                    alt="Alif - About Me" 
                    width={600} 
                    height={800}
                    className="h-full w-auto object-contain object-bottom scale-110 drop-shadow-2xl"
                    style={{ transformOrigin: "bottom center" }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    animate={{ rotate: [0, 2, -2, 2, -1, 1, 0] }}
                    transition={{
                        scale: { type: "spring" as const, damping: 10, stiffness: 120, duration: 0.8 },
                        opacity: { duration: 0.8 },
                        rotate: { repeat: Infinity, repeatDelay: 1, duration: 2.5, ease: "easeInOut" },
                    }}
                />
            </motion.div>
        </div>
    </section>
);
}