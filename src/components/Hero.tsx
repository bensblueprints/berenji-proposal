"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image from Berenji site */}
      <div className="absolute inset-0">
        <img
          src="/berenji-hero.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-obsidian/90 to-obsidian" />
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A96E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      {/* Floating gold orbs */}
      <motion.div
        className="absolute top-20 left-[15%] w-72 h-72 rounded-full bg-gold/5 blur-[100px]"
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-[10%] w-96 h-96 rounded-full bg-gold/5 blur-[120px]"
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-6 mb-12"
        >
          <img src="/logos/berenji-logo.png" alt="Berenji & Associates" className="h-12 md:h-16 w-auto" />
          <div className="w-[1px] h-10 bg-gold/30" />
          <img src="/logos/aml-logo.png" alt="Advanced Marketing" className="h-8 md:h-10 w-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.p
            className="text-gold tracking-[0.3em] uppercase text-sm mb-8 font-medium"
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Confidential Marketing Proposal
          </motion.p>
        </motion.div>

        <motion.h1
          className="font-[family-name:var(--font-playfair)] text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="shimmer-text">Win It All</span>
        </motion.h1>

        <motion.div
          className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        />

        <motion.p
          className="text-xl md:text-2xl text-cream/70 max-w-2xl mx-auto mb-4 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          A Media & Influence Strategy for High-Asset Divorce
        </motion.p>

        <motion.p
          className="text-slate text-base mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Prepared exclusively for <span className="text-gold">Berenji & Associates</span>, Los Angeles Divorce Attorneys
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-6 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {[
            { label: "Practice Focus", value: "High-Asset Divorce" },
            { label: "Audience", value: "Affluent Women, LA & SoCal" },
            { label: "Program Start", value: "April 2026" },
          ].map((item) => (
            <div key={item.label} className="glass-card rounded-xl px-6 py-4 transition-all duration-500">
              <p className="text-slate text-xs uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-cream font-medium">{item.value}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <a href="#roi" className="group inline-flex flex-col items-center gap-2 text-gold/60 hover:text-gold transition-colors">
            <span className="text-xs tracking-widest uppercase">Explore the Strategy</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </motion.svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
