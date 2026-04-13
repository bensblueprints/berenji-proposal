"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  {
    title: "Domain Authority",
    description: "DO-Follow placements tracked monthly. Target: 15+ new referring domains per month by Month 3.",
    icon: "🔗",
  },
  {
    title: "Search Rankings",
    description: "Track positions for 'Los Angeles divorce lawyer,' 'high asset divorce attorney LA,' and 20+ long-tail terms.",
    icon: "📈",
  },
  {
    title: "National Reach",
    description: "KTLA, USA Today, and Forbes tracked for referral traffic, brand search lift, and earned press pickup.",
    icon: "🌎",
  },
  {
    title: "FB Retargeting",
    description: "Retargeting CTR, cost-per-click, and consultation form completions from paid retargeting traffic.",
    icon: "🎯",
  },
  {
    title: "Consultation Leads",
    description: "UTM-tracked links from every article and influencer post feeding to Berenji intake form. Primary ROI metric.",
    icon: "📱",
  },
];

export default function Metrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-obsidian" />

      <div className="relative z-10 max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">Success Metrics</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-cream mb-6">
            What We Measure Monthly
          </h2>
          <div className="w-16 h-[1px] bg-gold/40 mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-8"
            >
              <span className="text-3xl mb-4 block">{m.icon}</span>
              <h3 className="text-cream font-semibold text-lg mb-2">{m.title}</h3>
              <p className="text-cream/60 text-sm leading-relaxed">{m.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
