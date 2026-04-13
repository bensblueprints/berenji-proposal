"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { articles } from "@/lib/data";
import Navigation from "@/components/Navigation";

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = articles.find((a) => a.slug === slug);
  const articleIndex = article ? articles.indexOf(article) : -1;
  const prevArticle = articleIndex > 0 ? articles[articleIndex - 1] : null;
  const nextArticle = articleIndex < articles.length - 1 ? articles[articleIndex + 1] : null;

  if (!article) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center bg-obsidian">
          <p className="text-cream/60 text-lg">Article not found</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-obsidian">
        {/* Hero image */}
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian/30" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs bg-gold/20 text-gold px-3 py-1 rounded-full uppercase tracking-wider font-bold">
                    {article.category}
                  </span>
                  <span className="text-cream/40 text-xs">|</span>
                  <span className="text-cream/60 text-sm">{article.publication}</span>
                  <span className="text-cream/40 text-xs">|</span>
                  <span className="text-gold/60 text-sm font-bold">{article.price}</span>
                </div>
                <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-cream leading-tight">
                  {article.title}
                </h1>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Article body */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="prose prose-invert prose-gold max-w-none"
          >
            <div className="glass-card rounded-2xl p-8 md:p-12 mb-12">
              <p className="text-cream/70 text-lg leading-relaxed mb-0">
                This article is part of the <span className="text-gold font-semibold">Win It All</span> media strategy
                — a 30-article editorial campaign across 80+ publications designed to position Berenji & Associates as
                the definitive authority in high-asset divorce law for affluent women in California.
              </p>
            </div>

            <div className="space-y-6 text-cream/70 text-lg leading-relaxed">
              <p>
                Article #{String(article.id).padStart(2, "0")} is scheduled for publication in <span className="text-gold">{article.publication}</span> as
                a {article.category.toLowerCase()} placement at a rate card price of <span className="text-gold font-semibold">{article.price}</span>.
              </p>
              <p>
                Each article in the campaign includes SEO frontmatter, a strong editorial hook, structured H2 sections,
                and a soft brand close referencing Berenji & Associates. All articles target affluent women researching
                high-asset California divorce.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 my-10">
                <div className="glass-card rounded-xl p-6">
                  <p className="text-gold text-xs uppercase tracking-wider font-bold mb-2">Publication</p>
                  <p className="text-cream font-medium">{article.publication}</p>
                </div>
                <div className="glass-card rounded-xl p-6">
                  <p className="text-gold text-xs uppercase tracking-wider font-bold mb-2">Category</p>
                  <p className="text-cream font-medium">{article.category}</p>
                </div>
                <div className="glass-card rounded-xl p-6">
                  <p className="text-gold text-xs uppercase tracking-wider font-bold mb-2">Rate Card</p>
                  <p className="text-cream font-medium">{article.price}</p>
                </div>
                <div className="glass-card rounded-xl p-6">
                  <p className="text-gold text-xs uppercase tracking-wider font-bold mb-2">Article</p>
                  <p className="text-cream font-medium">#{String(article.id).padStart(2, "0")} of 30</p>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-16 pt-8 border-t border-gold/10">
            {prevArticle ? (
              <a href={`/blog/${prevArticle.slug}`} className="group text-left">
                <p className="text-slate text-xs uppercase tracking-wider mb-1">Previous</p>
                <p className="text-cream/70 group-hover:text-gold transition-colors text-sm max-w-xs truncate">{prevArticle.title}</p>
              </a>
            ) : <div />}
            <a href="/blog" className="text-gold text-sm hover:underline">All Articles</a>
            {nextArticle ? (
              <a href={`/blog/${nextArticle.slug}`} className="group text-right">
                <p className="text-slate text-xs uppercase tracking-wider mb-1">Next</p>
                <p className="text-cream/70 group-hover:text-gold transition-colors text-sm max-w-xs truncate">{nextArticle.title}</p>
              </a>
            ) : <div />}
          </div>
        </div>
      </main>
    </>
  );
}
