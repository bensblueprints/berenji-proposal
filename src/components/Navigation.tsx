"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const links = [
  { label: "ROI", href: "#roi" },
  { label: "Tiers", href: "#tiers" },
  { label: "Content", href: "#content" },
  { label: "Timeline", href: "#timeline" },
  { label: "Investment", href: "#investment" },
  { label: "Blog", href: "/blog" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 100);
  });

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-obsidian/80 backdrop-blur-xl border-b border-gold/10" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/logos/berenji-logo.png" alt="Berenji & Associates" className="h-8 w-auto" />
          <span className="text-gold text-lg font-light">×</span>
          <img src="/logos/aml-logo.png" alt="Advanced Marketing" className="h-6 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#next-steps"
          className="text-sm bg-gold/10 text-gold border border-gold/20 px-5 py-2 rounded-full hover:bg-gold hover:text-obsidian transition-all duration-300"
        >
          Get Started
        </a>
      </div>
    </motion.nav>
  );
}
