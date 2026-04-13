"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { articles } from "@/lib/data";

const categories = ["All", "Lifestyle", "DO-FOLLOW", "Sponsored", "Press Release", "National Prestige"];

export default function ContentStrategy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? articles : articles.filter((a) => a.category === filter);

  return (
    <section id="content" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-obsidian to-charcoal/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">Content Strategy</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-cream mb-6">
            30 Articles Across 80+ Publications
          </h2>
          <div className="w-16 h-[1px] bg-gold/40 mx-auto mb-8" />
        </motion.div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-gold text-obsidian"
                  : "glass-card text-slate hover:text-cream"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Article grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article, i) => (
            <motion.a
              key={article.id}
              href={`/blog/${article.slug}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + (i % 9) * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/30 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="text-[10px] bg-gold/20 text-gold px-2 py-1 rounded-full uppercase tracking-wider font-bold backdrop-blur-sm">
                    {article.category}
                  </span>
                  <span className="text-[10px] bg-cream/10 text-cream/70 px-2 py-1 rounded-full uppercase tracking-wider font-bold backdrop-blur-sm">
                    {article.price}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-cream/60 text-xs">{article.publication}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gold/60 text-xs font-bold mb-2">#{String(article.id).padStart(2, "0")}</p>
                <h3 className="text-cream font-semibold leading-snug group-hover:text-gold transition-colors duration-300 line-clamp-3">
                  {article.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
