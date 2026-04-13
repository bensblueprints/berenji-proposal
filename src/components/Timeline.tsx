"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { timeline } from "@/lib/data";

const phases = [
  { num: 1, label: "Phase 1", months: "April – July", range: "~$8,900–$13,700/mo", color: "bg-gold/20 text-gold border-gold/30" },
  { num: 2, label: "Phase 2", months: "August – October", range: "~$12,400–$18,700/mo", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  { num: 3, label: "Phase 3", months: "November – March", range: "~$14,000–$22,000/mo", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
];

function getPhaseColor(phase: number) {
  if (phase === 1) return "border-l-gold";
  if (phase === 2) return "border-l-blue-400";
  return "border-l-purple-400";
}

function getPhaseDot(phase: number) {
  if (phase === 1) return "bg-gold";
  if (phase === 2) return "bg-blue-400";
  return "bg-purple-400";
}

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [expandedMonth, setExpandedMonth] = useState<number | null>(null);

  return (
    <section id="timeline" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-charcoal/20 to-obsidian" />

      <div className="relative z-10 max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">12-Month Rollout Plan</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-cream mb-6">
            April 2026 — March 2027
          </h2>
          <div className="w-16 h-[1px] bg-gold/40 mx-auto mb-8" />
        </motion.div>

        {/* Phase pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {phases.map((p) => (
            <div key={p.num} className={`${p.color} border rounded-full px-5 py-2 text-sm font-medium`}>
              {p.label}: {p.months} <span className="opacity-70">({p.range})</span>
            </div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="space-y-3">
          {timeline.map((month, i) => (
            <motion.div
              key={month.month}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
              onClick={() => setExpandedMonth(expandedMonth === i ? null : i)}
              className={`glass-card rounded-xl border-l-4 ${getPhaseColor(month.phase)} cursor-pointer hover:bg-charcoal-light/30 transition-all duration-300`}
            >
              <div className="flex items-center justify-between p-5">
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${getPhaseDot(month.phase)}`} />
                  <span className="text-cream font-semibold min-w-[80px]">{month.month}</span>
                  <span className="text-cream/50 text-sm hidden md:block">{month.rotating.substring(0, 60)}...</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-gold font-bold text-lg">{month.total}</span>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-slate"
                    animate={{ rotate: expandedMonth === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </motion.svg>
                </div>
              </div>

              <motion.div
                initial={false}
                animate={{ height: expandedMonth === i ? "auto" : 0, opacity: expandedMonth === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 pt-2 border-t border-gold/10 grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-slate text-xs uppercase tracking-wider mb-1">Anchor</p>
                    <p className="text-cream">LA Weekly or Irvine Weekly — {month.anchor}</p>
                  </div>
                  <div>
                    <p className="text-slate text-xs uppercase tracking-wider mb-1">Rotating Publications</p>
                    <p className="text-cream/70">{month.rotating}</p>
                  </div>
                  <div>
                    <p className="text-slate text-xs uppercase tracking-wider mb-1">Influencer + FB</p>
                    <p className="text-cream/70">{month.extras}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 glass-card rounded-xl p-6 flex items-center justify-between"
        >
          <div>
            <p className="text-cream font-semibold text-lg">Total (Tier A shown)</p>
            <p className="text-slate text-sm">12 anchor articles + 30 rotating + KTLA + USA Today + Forbes</p>
          </div>
          <div className="text-right">
            <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-gold">~$192,650</p>
            <p className="text-slate text-xs">Tier B adds $42,000/yr</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
