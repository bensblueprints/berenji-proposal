"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Select Your Tier", description: "Confirm Tier A or Tier B and which optional channels to activate in Month 1." },
  { num: "02", title: "Month 1 Content Brief", description: "Advanced Marketing delivers anchor article brief plus 2-3 rotating article briefs within 5 business days." },
  { num: "03", title: "FB Retargeting Setup", description: "Facebook pixel verified on Berenji site and retargeting audience built before Month 1 ends." },
  { num: "04", title: "Program Begins", description: "First month retainer ($3,000 management fee) activates everything. Cancel anytime." },
];

export default function NextSteps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="next-steps" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-charcoal/20 to-obsidian" />

      {/* Floating gold orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/3 blur-[200px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">Next Steps</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-cream mb-6">
            Getting Started
          </h2>
          <div className="w-16 h-[1px] bg-gold/40 mx-auto" />
        </motion.div>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              whileHover={{ x: 8, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-8 flex items-start gap-6"
            >
              <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center text-obsidian font-bold text-lg shrink-0">
                {step.num}
              </div>
              <div>
                <h3 className="text-cream font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-cream/60 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
