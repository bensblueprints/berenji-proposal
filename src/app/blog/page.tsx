"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { articles } from "@/lib/data";
import Navigation from "@/components/Navigation";

const categories = ["All", "Lifestyle", "DO-FOLLOW", "Sponsored", "Press Release", "National Prestige"];

export default function BlogPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? articles : articles.filter((a) => a.category === filter);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-obsidian pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">Editorial Library</p>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold text-cream mb-6">
              The Blog
            </h1>
            <div className="w-16 h-[1px] bg-gold/40 mx-auto mb-6" />
            <p className="text-cream/60 max-w-xl mx-auto">
              30 articles across 80+ publications. Each one targets affluent women researching high-asset California divorce.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat ? "bg-gold text-obsidian" : "glass-card text-slate hover:text-cream"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((article, i) => (
              <motion.a
                key={article.id}
                href={`/blog/${article.slug}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + (i % 9) * 0.05 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="glass-card rounded-2xl overflow-hidden group"
              >
                <div className="relative h-56 overflow-hidden">
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
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-cream/60 text-xs mb-1">{article.publication}</p>
                    <p className="text-gold/60 text-xs font-bold">{article.price}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gold/40 text-xs font-bold mb-3">Article #{String(article.id).padStart(2, "0")}</p>
                  <h2 className="text-cream font-semibold text-lg leading-snug group-hover:text-gold transition-colors duration-300">
                    {article.title}
                  </h2>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
