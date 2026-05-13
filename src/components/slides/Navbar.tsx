"use client"; // BARIS 1: Wajib supaya animasi jalan di browser

import Link from "next/link"; // BARIS 2: Buat navigasi Next.js yang bener
import { motion } from "framer-motion"; // BARIS 3: INI SOLUSI ERROR 'motion is not defined'

export default function Navbar() {
    const menuItems = ["Home", "About", "Projects", "Contact"];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1] as any,
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
            {menuItems.map((item) => (
                <Link key={item} href={`#${item.toLowerCase()}`} passHref legacyBehavior>
                    <motion.a
                        whileHover={{
                            y: -2,
                        }}
                        whileTap={{
                            scale: 0.96,
                        }}
                        transition={{
                            type: "spring" as const,
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
                            cursor-pointer
                        "
                    >
                        {item}
                    </motion.a>
                </Link>
            ))}
        </motion.nav>
    );
}