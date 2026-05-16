"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  // Balik ke 4 menu utama biar tetap clean dan minimalis
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
        px-2
        py-2
        rounded-full
        bg-white/70
        backdrop-blur-xl
        border
        border-white/40
        shadow-[0_8px_30px_rgba(0,0,0,0.06)]
      "
    >
      <div className="flex items-center gap-1">
        {menuItems.map((item) => (
          <Link key={item} href={`#${item.toLowerCase()}`} passHref legacyBehavior>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 20,
              }}
              className="
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
      </div>
    </motion.nav>
  );
}