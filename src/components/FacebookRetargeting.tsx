"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FacebookRetargeting() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-obsidian" />

      <div className="relative z-10 max-w-6xl mx-auto px-6" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">Facebook Retargeting</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-cream mb-6 leading-tight">
              Convert the Traffic You&apos;re Already Getting
            </h2>
            <div className="w-16 h-[1px] bg-gold/40 mb-8" />
            <p className="text-cream/70 leading-relaxed mb-6">
              This is not a cold audience campaign. We retarget the people who already visited the Berenji website —
              people who are actively researching divorce attorneys — and keep the firm top of mind until they book a consultation.
            </p>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-gold">$500–$1,000</span>
              <span className="text-slate">/month</span>
            </div>
            <p className="text-cream/50 text-sm">Ad spend only. No additional management fee.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              {
                title: "What it does",
                text: "A custom audience is built from Berenji website visitors. Facebook ads follow those visitors across their feed, Instagram, and partner sites with branded content reinforcing the firm's authority.",
              },
              {
                title: "The conversion multiplier",
                text: "When a woman researching divorce sees a Berenji article in LA Weekly and then sees a Berenji ad on her Facebook feed that evening, the conversion rate increases dramatically.",
              },
              {
                title: "Why minimal spend works",
                text: "Retargeting audiences are small and highly qualified. A $500/month budget delivers full coverage multiple times per week. This is the highest-ROI Facebook spend available.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                className="glass-card rounded-xl p-6 hover:scale-[1.01] transition-transform duration-300"
              >
                <h4 className="text-gold text-sm font-semibold mb-2">{item.title}</h4>
                <p className="text-cream/60 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
