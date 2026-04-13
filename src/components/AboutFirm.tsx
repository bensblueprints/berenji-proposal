"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const awards = [
  "Super Lawyers",
  "AVVO",
  "National Trial Lawyers",
  "Best Lawyers in America",
];

const team = [
  { name: "Hossein Berenji", role: "Managing Partner", image: "/team/hossein-berenji.png" },
  { name: "Nikoo Berenji", role: "Attorney", image: "/team/nikoo-berenji.png" },
  { name: "Andrew Arakelian", role: "Attorney", image: "/team/andrew-arakelian.jpg" },
  { name: "Jacqueline Lara", role: "Attorney", image: "/team/jacqueline-lara.jpg" },
  { name: "Steven Kunysz", role: "Attorney", image: "/team/steven-kunysz.jpg" },
  { name: "Ariana C. Martin", role: "Attorney", image: "/team/ariana-martin.png" },
];

export default function AboutFirm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian to-charcoal/20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">About the Firm</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-cream mb-6 leading-tight">
              LA&apos;s High-Asset Divorce Authority
            </h2>
            <div className="w-16 h-[1px] bg-gold/40 mb-8" />

            {/* Berenji logo */}
            <div className="mb-8">
              <img src="/logos/berenji-logo.png" alt="Berenji & Associates" className="h-14 w-auto" />
            </div>

            <p className="text-cream/70 text-lg leading-relaxed mb-6">
              Berenji & Associates is one of Los Angeles&apos; premier divorce and family law firms, specializing in
              high-asset and complex divorce cases for executives, entrepreneurs, and high-net-worth individuals
              across LA, Orange County, and Southern California.
            </p>
            <p className="text-cream/60 leading-relaxed mb-8">
              With offices serving Beverly Hills, Encino, and the greater LA metro area, Berenji & Associates
              combines aggressive representation with a client-first approach that resonates with women navigating
              the highest-stakes divorces in California.
            </p>

            {/* Awards */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-gold text-sm tracking-[0.2em] uppercase mb-6">Awards & Recognition</h3>
              <div className="grid grid-cols-2 gap-4">
                {awards.map((award, i) => (
                  <motion.div
                    key={award}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-obsidian/50 border border-gold/10"
                  >
                    <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                    <span className="text-cream/80 text-sm font-medium">{award}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Team photos */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-gold text-sm tracking-[0.2em] uppercase mb-8">The Legal Team</h3>
            <div className="grid grid-cols-2 gap-5">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="glass-card rounded-2xl overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden bg-charcoal">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
                  </div>
                  <div className="p-4">
                    <p className="text-cream font-semibold text-sm">{member.name}</p>
                    <p className="text-gold/70 text-xs">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gold/10 grid grid-cols-3 gap-4 text-center">
              {[
                { label: "Beverly Hills", icon: "BH" },
                { label: "Encino", icon: "EN" },
                { label: "Greater LA", icon: "LA" },
              ].map((office) => (
                <div key={office.label}>
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-obsidian text-xs font-bold mx-auto mb-2">
                    {office.icon}
                  </div>
                  <p className="text-cream/60 text-xs">{office.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
