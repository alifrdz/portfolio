"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icon hamburger & close

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          DESKTOP NAVBAR (Pill Version - Hidden on Mobile)
          ───────────────────────────────────────────────────────────── */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as any }}
        className="
          fixed
          top-6
          left-1/2
          -translate-x-1/2
          z-50
          hidden
          md:flex
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
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
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

      {/* ─────────────────────────────────────────────────────────────
          MOBILE HAMBURGER TRIGGER (Visible only on Mobile)
          ───────────────────────────────────────────────────────────── */}
      <div className="fixed top-6 right-6 z-50 md:hidden">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-full bg-white/80 backdrop-blur-md border border-gray-100 shadow-lg text-black"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MOBILE FULLSCREEN MENU OVERLAY
          ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as any }}
            className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-6">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={`#${item.toLowerCase()}`}>
                    <span
                      onClick={() => setIsOpen(false)} // Otomatis nutup menu pas diklik
                      className="text-2xl font-bold text-black/60 hover:text-black tracking-tight block py-2 cursor-pointer transition-colors"
                    >
                      {item}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}