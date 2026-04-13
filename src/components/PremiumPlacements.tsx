"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const placements = [
  {
    name: "KTLA",
    type: "Unscripted Segment",
    timing: "Once During Contract — Q2 or Q3",
    description: "TV placement on one of LA's most-watched local stations. Reaches hundreds of thousands of LA households. Positions a Berenji attorney as the go-to expert for high-asset divorce.",
    price: "$31,000",
    icon: "📺",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    name: "USA Today",
    type: "National Print & Digital",
    timing: "Once During Contract — Q2",
    description: "National reach. Positions Berenji beyond the LA market. Drives brand search volume and signals credibility to a national audience of high-income women.",
    price: "$5,000",
    icon: "🗞️",
    gradient: "from-red-500/20 to-orange-500/20",
  },
  {
    name: "Forbes",
    type: "National Prestige",
    timing: "Once During Contract — Q4",
    description: "The highest-prestige placement in the program. A Forbes byline ranks in Google for years and creates a permanent credibility asset no local competitor can match.",
    price: "$10,000",
    icon: "👑",
    gradient: "from-gold/20 to-gold-dark/20",
  },
];

export default function PremiumPlacements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-obsidian to-charcoal/20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">Premium & TV Placements</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-cream mb-6">
            KTLA, USA Today & Forbes
          </h2>
          <div className="w-16 h-[1px] bg-gold/40 mx-auto mb-8" />
          <p className="text-cream/60 max-w-xl mx-auto">
            Each once, whenever you&apos;re ready. One-time placements over the life of the contract. Timing chosen by Berenji.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {placements.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card rounded-2xl p-8 group cursor-default"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {p.icon}
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-cream mb-1">{p.name}</h3>
              <p className="text-gold text-sm font-medium mb-1">{p.type}</p>
              <p className="text-slate text-xs mb-4">{p.timing}</p>
              <p className="text-cream/60 text-sm leading-relaxed mb-6">{p.description}</p>
              <div className="pt-4 border-t border-gold/10">
                <span className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-gold">{p.price}</span>
                <span className="text-slate text-sm ml-2">one-time</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
