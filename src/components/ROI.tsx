"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ target, prefix = "", suffix = "", duration = 2 }: { target: number; prefix?: string; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

export default function ROI() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 50000, prefix: "$", suffix: "", label: "Value per divorce case", sublabel: "100 hrs at $500/hr" },
    { value: 5, prefix: "", suffix: "", label: "Clients to breakeven", sublabel: "At highest package" },
    { value: 237000, prefix: "$", suffix: "", label: "Max annual program cost", sublabel: "All channels included" },
  ];

  return (
    <section id="roi" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-charcoal-light/30 to-obsidian" />

      <div className="relative z-10 max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">The ROI Case</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-cream mb-6">
            Why This Program Pays for Itself
          </h2>
          <div className="w-16 h-[1px] bg-gold/40 mx-auto mb-8" />
          <p className="text-cream/60 max-w-2xl mx-auto text-lg leading-relaxed">
            At $50,000 per high-net-worth divorce case, the math is straightforward. At the highest package spend,
            Berenji breaks even at fewer than 5 new clients. The firm likely closes more than that in a single month.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
              className="glass-card rounded-2xl p-10 text-center group hover:scale-[1.02] transition-all duration-500"
            >
              <div className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold text-gold mb-4">
                {isInView && <AnimatedCounter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />}
              </div>
              <p className="text-cream text-lg font-medium mb-1">{stat.label}</p>
              <p className="text-slate text-sm">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-card rounded-2xl p-10 md:p-14 max-w-4xl mx-auto"
        >
          <p className="text-cream/80 text-lg leading-relaxed text-center">
            A single well-placed article in LA Weekly, a KTLA segment seen by hundreds of thousands of LA households,
            or a Forbes byline that ranks in Google for years — <span className="text-gold font-medium">any one of these alone can deliver a client
            that covers the entire annual program cost.</span> The combination, run consistently over 12 months, builds
            a brand that generates clients on autopilot.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
