"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ${
        isScrolled ? "top-4" : ""
      }`}
    >
      <motion.div
        animate={{
          backdropFilter: isScrolled ? "blur(16px)" : "blur(8px)",
          backgroundColor: isScrolled
            ? "rgba(2, 6, 23, 0.6)"
            : "rgba(2, 6, 23, 0.4)",
        }}
        className="px-8 py-4 rounded-full border border-cyan-500/20 shadow-xl"
      >
        <div className="flex items-center gap-8">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-sm font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            🕺
          </motion.div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -2 }}
                className="text-sm text-slate-300 hover:text-cyan-400 transition-colors relative group"
              >
                {link.label}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400"
                />
              </motion.a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <motion.a
              href="https://drive.google.com/file/d/1U_lD1UcyQtG78bcFj2c2jeymc6qW-ut9/view?usp=sharing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm text-slate-300 border border-slate-600 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors"
            >
              CV
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
