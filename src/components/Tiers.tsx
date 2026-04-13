"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Tiers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);

  const tiers = [
    {
      id: "a",
      name: "Tier A",
      subtitle: "1 Article Per Month",
      publication: "LA Weekly OR Irvine Weekly",
      price: "$3,500/month",
      description: "One DO-Follow SEO article per month. Switch between publications at any time. All other 80+ publications available as optional rotating additions.",
      annual: "$191,000 – $237,000/yr",
      featured: false,
    },
    {
      id: "b",
      name: "Tier B",
      subtitle: "2 Articles Per Month",
      publication: "LA Weekly AND Irvine Weekly",
      price: "$7,000/month",
      description: "One DO-Follow article per month in each publication. Double the SEO backlink volume covering both LA and OC markets simultaneously.",
      annual: "$233,000 – $279,000/yr",
      featured: true,
    },
  ];

  return (
    <section id="tiers" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-charcoal/20 to-obsidian" />

      <div className="relative z-10 max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">Program Tiers</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-cream mb-6">
            Choose Your Monthly Anchor
          </h2>
          <div className="w-16 h-[1px] bg-gold/40 mx-auto mb-8" />
          <p className="text-cream/60 max-w-xl mx-auto">
            The only required spend is the $3,000/month management fee. The tier determines which anchor publication runs each month.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
              onMouseEnter={() => setHoveredTier(tier.id)}
              onMouseLeave={() => setHoveredTier(null)}
              className={`relative rounded-2xl p-10 transition-all duration-500 ${
                tier.featured
                  ? "bg-gradient-to-b from-gold/10 to-gold/5 border-2 border-gold/30"
                  : "glass-card"
              } ${hoveredTier === tier.id ? "scale-[1.02]" : ""}`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-obsidian text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">
                  Recommended
                </div>
              )}
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-cream mb-2">{tier.name}</h3>
              <p className="text-gold text-lg font-medium mb-1">{tier.subtitle}</p>
              <p className="text-cream/50 text-sm mb-6">{tier.publication}</p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-gold">{tier.price}</span>
              </div>

              <p className="text-cream/60 text-sm leading-relaxed mb-8">{tier.description}</p>

              <div className="pt-6 border-t border-gold/10">
                <p className="text-slate text-xs uppercase tracking-wider mb-1">Full Program Annual Range</p>
                <p className="text-cream font-semibold text-lg">{tier.annual}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-slate text-sm mt-10 max-w-xl mx-auto"
        >
          LA Weekly and Irvine Weekly are recommended anchors. Berenji may substitute either for any publication in the 80+ list at any time.
        </motion.p>
      </div>
    </section>
  );
}
