"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tiers = [
  {
    level: "Nano / Micro",
    followers: "1K – 50K followers",
    types: ["Divorce coaches & therapists", "Family law educators (IG/TikTok)", "Women's financial independence creators", "Local OC & LA lifestyle bloggers"],
    engagement: "3–8% engagement rates",
    cost: "$500 – $2,500 per post",
    gradient: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
  },
  {
    level: "Core Tier",
    followers: "50K – 500K followers",
    types: ["Luxury lifestyle & fashion creators", "Real estate & wealth influencers", "Women's empowerment accounts", "LA & OC mommy influencers"],
    engagement: "1–3% engagement, strong CA geo",
    cost: "$2,500 – $10,000 per campaign",
    gradient: "from-gold/20 to-gold-dark/20",
    borderColor: "border-gold/30",
  },
  {
    level: "Macro / Celebrity",
    followers: "500K+ followers",
    types: ["Celebrity-adjacent divorce commentators", "Women's wellness podcast hosts", "High-profile financial freedom accounts", "Broad brand awareness play"],
    engagement: "Mass awareness reach",
    cost: "$10,000 – $50,000+",
    gradient: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
  },
];

export default function Influencers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian to-charcoal/20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">Influencer Strategy</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-cream mb-6">
            Reaching Affluent Women Where They Listen
          </h2>
          <div className="w-16 h-[1px] bg-gold/40 mx-auto mb-8" />
          <p className="text-cream/60 max-w-xl mx-auto">
            Influencer spend scales from $10,000/year to $50,000/year. Starts with high-trust micro creators and builds toward macro reach.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.level}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`glass-card rounded-2xl p-8 border ${tier.borderColor}`}
            >
              <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${tier.gradient} mb-4`}>
                {tier.level}
              </div>
              <p className="text-slate text-sm mb-6">{tier.followers}</p>

              <ul className="space-y-3 mb-8">
                {tier.types.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-cream/70 text-sm">
                    <span className="text-gold mt-1 text-xs">◆</span>
                    {t}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-gold/10 space-y-2">
                <p className="text-cream/60 text-xs">{tier.engagement}</p>
                <p className="text-gold font-semibold">{tier.cost}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
