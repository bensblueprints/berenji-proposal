"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="relative py-24 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-obsidian" />
      <div className="absolute inset-0 bg-gradient-to-t from-gold/5 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12">
            <div className="w-24 h-[1px] bg-gold/30 mx-auto mb-12" />

            <div className="grid md:grid-cols-2 gap-12 text-left mb-16">
              <div className="glass-card rounded-2xl p-8">
                <p className="text-cream font-semibold mb-1">Berenji & Associates</p>
                <p className="text-slate text-sm mb-6">Los Angeles Divorce & Family Law</p>
                <div className="space-y-2">
                  <p className="text-slate text-sm">Signature: ____________________________</p>
                  <p className="text-slate text-sm">Date: _________________________________</p>
                </div>
              </div>
              <div className="glass-card rounded-2xl p-8">
                <p className="text-cream font-semibold mb-1">Advanced Marketing Limited</p>
                <p className="text-slate text-sm mb-6">Hong Kong SAR</p>
                <div className="space-y-2">
                  <p className="text-slate text-sm">Signature: ____________________________</p>
                  <p className="text-slate text-sm">Date: _________________________________</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-slate text-xs leading-relaxed max-w-2xl mx-auto">
            Confidential. Prepared exclusively for Berenji & Associates. Month-to-month engagement.
            Cancel anytime with 30 days notice. Advanced Marketing Limited, Hong Kong SAR.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
