"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import SignaturePad from "signature_pad";

export default function ESign() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const padRef = useRef<SignaturePad | null>(null);

  const [signerName, setSignerName] = useState("");
  const [signerTitle, setSignerTitle] = useState("");
  const [selectedTier, setSelectedTier] = useState<"A" | "B">("A");
  const [signed, setSigned] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [signatureData, setSignatureData] = useState<string | null>(null);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !padRef.current) return;
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;
    canvas.getContext("2d")?.scale(ratio, ratio);
    padRef.current.clear();
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;
    padRef.current = new SignaturePad(canvasRef.current, {
      backgroundColor: "rgba(13, 13, 13, 0)",
      penColor: "#C9A96E",
      minWidth: 1.5,
      maxWidth: 3,
    });
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas]);

  const clearSignature = () => {
    padRef.current?.clear();
    setSigned(false);
    setSignatureData(null);
  };

  const handleSign = () => {
    if (!padRef.current || padRef.current.isEmpty()) return;
    const data = padRef.current.toDataURL("image/png");
    setSignatureData(data);
    setSigned(true);
  };

  const handleSubmit = () => {
    if (!signed || !signerName) return;
    setSubmitted(true);
  };

  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section id="sign" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-charcoal/20 to-obsidian" />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/3 blur-[250px]"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">Execute Agreement</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-cream mb-6">
            Sign & Get Started
          </h2>
          <div className="w-16 h-[1px] bg-gold/40 mx-auto mb-8" />
          <p className="text-cream/60 max-w-xl mx-auto">
            The only required commitment is the <span className="text-gold font-semibold">$3,000/month management fee</span>.
            All other line items are optional and can be added or removed each month. Month-to-month. Cancel anytime with 30 days notice.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Download PDF */}
              <div className="glass-card rounded-2xl p-8 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-cream font-semibold text-lg mb-1">Download Full Proposal</h3>
                  <p className="text-slate text-sm">Review the complete proposal document before signing.</p>
                </div>
                <a
                  href="/Berenji_Proposal_2026.pdf"
                  download
                  className="shrink-0 inline-flex items-center gap-2 bg-gold/10 text-gold border border-gold/20 px-6 py-3 rounded-full hover:bg-gold hover:text-obsidian transition-all duration-300 font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  Download PDF
                </a>
              </div>

              {/* Tier Selection */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h3 className="text-gold text-sm tracking-[0.2em] uppercase mb-6">Select Your Tier</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {(["A", "B"] as const).map((tier) => (
                    <button
                      key={tier}
                      onClick={() => setSelectedTier(tier)}
                      className={`p-6 rounded-xl border-2 text-left transition-all duration-300 ${
                        selectedTier === tier
                          ? "border-gold bg-gold/10"
                          : "border-gold/10 hover:border-gold/30 bg-obsidian/30"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-cream">
                          Tier {tier}
                        </span>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                          selectedTier === tier ? "border-gold bg-gold" : "border-gold/30"
                        }`}>
                          {selectedTier === tier && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="3">
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <p className="text-cream/60 text-sm mb-1">
                        {tier === "A" ? "1 anchor article/month" : "2 anchor articles/month"}
                      </p>
                      <p className="text-gold font-semibold">
                        {tier === "A" ? "$3,500/month" : "$7,000/month"}
                      </p>
                      <p className="text-slate text-xs mt-1">
                        + $3,000/month management fee
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Signer info */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h3 className="text-gold text-sm tracking-[0.2em] uppercase mb-6">Signer Information</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-cream/60 text-xs uppercase tracking-wider block mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={signerName}
                      onChange={(e) => setSignerName(e.target.value)}
                      placeholder="e.g. Hossein Berenji"
                      className="w-full bg-obsidian/50 border border-gold/20 rounded-xl px-4 py-3 text-cream placeholder:text-slate/50 focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-cream/60 text-xs uppercase tracking-wider block mb-2">Title</label>
                    <input
                      type="text"
                      value={signerTitle}
                      onChange={(e) => setSignerTitle(e.target.value)}
                      placeholder="e.g. Managing Partner"
                      className="w-full bg-obsidian/50 border border-gold/20 rounded-xl px-4 py-3 text-cream placeholder:text-slate/50 focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Signature pad */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-gold text-sm tracking-[0.2em] uppercase">Signature</h3>
                  <button
                    onClick={clearSignature}
                    className="text-slate text-xs hover:text-cream transition-colors"
                  >
                    Clear
                  </button>
                </div>
                <div className="relative rounded-xl border-2 border-dashed border-gold/20 overflow-hidden bg-obsidian/30">
                  <canvas
                    ref={canvasRef}
                    className="w-full h-40 cursor-crosshair touch-none"
                  />
                  {!signed && (
                    <p className="absolute inset-0 flex items-center justify-center text-slate/30 text-sm pointer-events-none">
                      Sign here
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-slate text-xs">{today}</p>
                  <button
                    onClick={handleSign}
                    className="text-gold text-sm font-medium hover:underline"
                  >
                    Confirm Signature
                  </button>
                </div>
              </div>

              {/* Agreement terms */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <p className="text-cream/50 text-sm leading-relaxed">
                  By signing below, Berenji & Associates agrees to engage Advanced Marketing Limited for the
                  <strong className="text-cream"> Win It All</strong> media and influence program beginning April 2026.
                  The only binding commitment is the <strong className="text-gold">$3,000/month management fee</strong>.
                  All other line items (publications, KTLA, USA Today, Forbes, influencers, Facebook retargeting) are
                  optional and can be added or removed each month. Month-to-month engagement with 30 days written notice
                  to cancel. All completed work remains the property of Berenji & Associates.
                </p>
              </div>

              {/* Submit */}
              <motion.button
                onClick={handleSubmit}
                disabled={!signed || !signerName}
                whileHover={signed && signerName ? { scale: 1.02 } : {}}
                whileTap={signed && signerName ? { scale: 0.98 } : {}}
                className={`w-full py-5 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                  signed && signerName
                    ? "gold-gradient text-obsidian cursor-pointer hover:shadow-lg hover:shadow-gold/20"
                    : "bg-charcoal-light text-slate cursor-not-allowed"
                }`}
              >
                {signed && signerName ? "Execute Agreement" : "Complete all fields to sign"}
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="confirmed"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="glass-card rounded-2xl p-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mx-auto mb-8"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="3">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </motion.div>

              <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-cream mb-4">
                Agreement Executed
              </h3>
              <p className="text-cream/60 mb-8">
                Thank you, {signerName}. Your signed agreement has been recorded.
              </p>

              <div className="glass-card rounded-xl p-6 max-w-md mx-auto mb-8 text-left">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate text-xs uppercase tracking-wider mb-1">Signer</p>
                    <p className="text-cream">{signerName}</p>
                    {signerTitle && <p className="text-cream/60 text-xs">{signerTitle}</p>}
                  </div>
                  <div>
                    <p className="text-slate text-xs uppercase tracking-wider mb-1">Tier Selected</p>
                    <p className="text-gold font-semibold">Tier {selectedTier}</p>
                  </div>
                  <div>
                    <p className="text-slate text-xs uppercase tracking-wider mb-1">Date</p>
                    <p className="text-cream">{today}</p>
                  </div>
                  <div>
                    <p className="text-slate text-xs uppercase tracking-wider mb-1">Monthly Commitment</p>
                    <p className="text-gold font-semibold">$3,000</p>
                  </div>
                </div>
                {signatureData && (
                  <div className="mt-4 pt-4 border-t border-gold/10">
                    <p className="text-slate text-xs uppercase tracking-wider mb-2">Signature</p>
                    <img src={signatureData} alt="Signature" className="h-16 w-auto" />
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/Berenji_Proposal_2026.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-gold/10 text-gold border border-gold/20 px-6 py-3 rounded-full hover:bg-gold hover:text-obsidian transition-all duration-300 font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  Download Proposal PDF
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
