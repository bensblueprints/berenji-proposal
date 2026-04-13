"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const items = [
  { name: "LA Weekly (Monthly Anchor)", detail: "$3,500 x 12 months", tierA: "$42,000", tierB: "$42,000" },
  { name: "Irvine Weekly (Monthly Anchor)", detail: "$3,500 x 12 months", tierA: "Choose one", tierB: "$42,000" },
  { name: "Rotating Editorial Articles", detail: "2-5 articles/mo, $150–$4,000 each", tierA: "$48K–$96K", tierB: "$48K–$96K" },
  { name: "KTLA Unscripted Segment", detail: "One TV segment during contract", tierA: "$31,000", tierB: "$31,000" },
  { name: "USA Today", detail: "National placement, timing by Berenji", tierA: "$5,000", tierB: "$5,000" },
  { name: "Forbes", detail: "Prestige national placement", tierA: "$10,000", tierB: "$10,000" },
  { name: "LA Times Sponsored", detail: "1-2 placements during the year", tierA: "$3K–$6K", tierB: "$3K–$6K" },
  { name: "Influencer Partnerships", detail: "Micro to macro creators", tierA: "$10K–$50K", tierB: "$10K–$50K" },
  { name: "Facebook Retargeting Ads", detail: "$500–$1,000/mo, website visitors only", tierA: "$6K–$12K", tierB: "$6K–$12K" },
  { name: "Management Fee", detail: "$3,000/mo x 12 — ONLY required item", tierA: "$36,000", tierB: "$36,000", required: true },
];

export default function InvestmentSummary() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [showTierB, setShowTierB] = useState(false);

  return (
    <section id="investment" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-obsidian to-obsidian" />

      <div className="relative z-10 max-w-5xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">Investment Summary</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-cream mb-6">
            Complete Annual Budget
          </h2>
          <div className="w-16 h-[1px] bg-gold/40 mx-auto mb-8" />

          {/* Tier toggle */}
          <div className="inline-flex items-center gap-4 glass-card rounded-full px-2 py-2">
            <button
              onClick={() => setShowTierB(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !showTierB ? "bg-gold text-obsidian" : "text-slate hover:text-cream"
              }`}
            >
              Tier A (1 anchor)
            </button>
            <button
              onClick={() => setShowTierB(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                showTierB ? "bg-gold text-obsidian" : "text-slate hover:text-cream"
              }`}
            >
              Tier B (2 anchors)
            </button>
          </div>
        </motion.div>

        <div className="space-y-2">
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
              className={`glass-card rounded-xl p-5 flex items-center justify-between hover:scale-[1.005] transition-transform duration-200 ${
                item.required ? "border-gold/30 ring-1 ring-gold/20" : ""
              }`}
            >
              <div>
                <p className="text-cream font-medium flex items-center gap-2">
                  {item.name}
                  {item.required && (
                    <span className="text-[10px] bg-gold/20 text-gold px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
                      Required
                    </span>
                  )}
                </p>
                <p className="text-slate text-sm">{item.detail}</p>
              </div>
              <motion.p
                key={showTierB ? "b" : "a"}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-gold font-bold text-lg whitespace-nowrap"
              >
                {showTierB ? item.tierB : item.tierA}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Total */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 rounded-2xl p-8 bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="text-cream font-semibold text-lg">Total (all channels, full year)</p>
            <p className="text-slate text-sm">April 2026 – March 2027 • Month-to-month • Cancel anytime</p>
          </div>
          <motion.div
            key={showTierB ? "total-b" : "total-a"}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-right"
          >
            <p className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-gold">
              {showTierB ? "$233,000 – $279,000" : "$191,000 – $237,000"}
            </p>
          </motion.div>
        </motion.div>

        <p className="text-center text-slate text-sm mt-6">
          No setup fees. No cancellation penalties. 30 days written notice to pause or end.
        </p>
      </div>
    </section>
  );
}
