"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const publications = [
  { name: "LA Weekly", domain: "laweekly.com" },
  { name: "Forbes", domain: "forbes.com" },
  { name: "USA Today", domain: "usatoday.com" },
  { name: "KTLA", domain: "ktla.com" },
  { name: "LA Times", domain: "latimes.com" },
  { name: "OC Register", domain: "ocregister.com" },
  { name: "Hollywood Life", domain: "hollywoodlife.com" },
  { name: "SF Weekly", domain: "sfweekly.com" },
  { name: "San Diego Union Tribune", domain: "sandiegouniontribune.com" },
  { name: "East Bay Times", domain: "eastbaytimes.com" },
  { name: "SF Examiner", domain: "sfexaminer.com" },
  { name: "Fresno Bee", domain: "fresnobee.com" },
  { name: "Daily Breeze", domain: "dailybreeze.com" },
  { name: "OC Weekly", domain: "ocweekly.com" },
  { name: "Pasadena Magazine", domain: "pasadenamagazine.com" },
  { name: "Orange Coast Magazine", domain: "orangecoast.com" },
  { name: "LA Mag", domain: "lamag.com" },
];

export default function AsSeenIn() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const doubled = [...publications, ...publications];

  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-charcoal/30" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <p className="text-center text-gold tracking-[0.3em] uppercase text-xs mb-12">
          As Seen In 80+ Publications
        </p>

        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-obsidian to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-obsidian to-transparent z-10" />

          <div className="flex logo-scroll">
            {doubled.map((pub, i) => (
              <div
                key={`${pub.domain}-${i}`}
                className="flex-shrink-0 mx-6 flex items-center justify-center h-16 px-6 glass-card rounded-lg min-w-[180px]"
              >
                <img
                  src={`https://img.logo.dev/${pub.domain}?token=pk_a8z0e1JTRnOxc2FImsMZNQ&format=png&size=120`}
                  alt={pub.name}
                  className="h-8 max-w-[140px] w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling;
                    if (fallback) (fallback as HTMLElement).style.display = "flex";
                  }}
                />
                <span className="hidden items-center text-cream/60 text-sm font-medium whitespace-nowrap">{pub.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Second row — reversed direction */}
        <div className="relative overflow-hidden mt-4">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-obsidian to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-obsidian to-transparent z-10" />

          <div className="flex logo-scroll-reverse">
            {[...publications.slice(8), ...publications.slice(0, 8), ...publications.slice(8), ...publications.slice(0, 8)].map((pub, i) => (
              <div
                key={`rev-${pub.domain}-${i}`}
                className="flex-shrink-0 mx-6 flex items-center justify-center h-16 px-6 glass-card rounded-lg min-w-[180px]"
              >
                <img
                  src={`https://img.logo.dev/${pub.domain}?token=pk_a8z0e1JTRnOxc2FImsMZNQ&format=png&size=120`}
                  alt={pub.name}
                  className="h-8 max-w-[140px] w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling;
                    if (fallback) (fallback as HTMLElement).style.display = "flex";
                  }}
                />
                <span className="hidden items-center text-cream/60 text-sm font-medium whitespace-nowrap">{pub.name}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-slate text-sm mt-10 max-w-xl mx-auto">
          Placements available across 80+ outlets. Prices range from $150 to $4,000 per placement.
          Any publication can be swapped at any time.
        </p>
      </motion.div>
    </section>
  );
}
