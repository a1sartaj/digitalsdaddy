"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import Reveal from "@/components/common/Reveal";

export default function NewsletterAndLinks() {
  const [email, setEmail] = useState<string>("");
  const [agreed, setAgreed] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!agreed) {
      setError("Please agree to the terms and conditions before subscribing.");
      return;
    }

    console.log("Subscribed email gateway endpoint:", email);
    // Integrate newsletter subscription logic API matrix safely here
  };

  return (
    /* ─── 🏛️ MODERN HYPER-GRID INFRASTRUCTURE BOARD ─── */
    <section className="w-full bg-white py-20 lg:py-28 overflow-hidden relative border-b border-gray-200/60 select-none">
      
      {/* Background Ambient Glow Lens */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10 flex flex-col items-center">

        {/* ──── ROW 1: PREMIUM ARCHITECTURAL NEWSLETTER CONSOLE ──── */}
        <div className="w-full bg-slate-50/80 border border-gray-200/80 rounded-3xl py-12 px-6 sm:px-12 md:px-16 text-center shadow-xl relative mb-16 max-w-5xl backdrop-blur-md">
          
          <Reveal direction="bottom" duration={450}>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-blue/10 border border-blue/20 rounded-full mb-6">
              <Mail className="w-4 h-4 text-blue" />
              <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-blue">
                INSIGHT NETWORKS
              </span>
            </div>
          </Reveal>

          <Reveal direction="bottom" duration={500} delay={50}>
            <h3 className="text-[#051329] font-black text-xl sm:text-2xl lg:text-3xl tracking-[1.5px] leading-snug mb-8 max-w-2xl mx-auto uppercase">
              Subscribe to our newsletter to receive all the latest news at Alfanar Projects.
            </h3>
          </Reveal>

          {/* Form Layout Grid */}
          <form onSubmit={handleSubscribe} className="w-full max-w-2xl mx-auto flex flex-col sm:flex-row items-stretch justify-center gap-3.5 mb-5 relative z-10">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              required
              className="w-full flex-1 bg-white text-gray-800 placeholder-gray-400 text-xs sm:text-sm font-normal px-5 py-4 rounded-xl border border-gray-200/80 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all shadow-sm tracking-[0.5px]"
            />
            <button
              type="submit"
              className="group relative overflow-hidden inline-flex items-center justify-center gap-2 h-12 sm:h-auto px-8 rounded-xl bg-gradient-to-r from-blue via-[#00529b] to-blue border border-white/20 text-white font-bold text-xs tracking-[2px] uppercase transition-all duration-500 shadow-[0_0_20px_rgba(0,99,175,0.25)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:border-cyan-400 active:scale-95 cursor-pointer shrink-0"
            >
              <span className="relative z-10">SUBSCRIBE</span>

              {/* Shimmer Sweep Animation */}
              <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
            </button>
          </form>

          {/* Error Alerts Deck */}
          {error && (
            <p className="text-xs font-bold text-cyan-600 tracking-[0.5px] mb-4 text-center animate-fade-in">
              {error}
            </p>
          )}

          {/* Checkbox / Operations Terms Selector Row */}
          <div className="w-full max-w-2xl mx-auto flex items-start gap-3 text-left relative z-10">
            <label className="relative flex items-center mt-0.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-4 h-4 bg-white border border-gray-300 rounded-md peer-checked:bg-blue peer-checked:border-blue flex items-center justify-center transition-all duration-200">
                <svg className="w-2.5 h-2.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </label>
            <p className="text-gray-600 text-xs leading-relaxed font-normal tracking-[0.5px]">
              By subscribing, you agree to our{" "}
              <a href="/trust-center" className="text-blue hover:text-cyan-600 font-bold underline transition-colors">terms & conditions</a>{" "}
              and{" "}
              <a href="/privacy-policy" className="text-blue hover:text-cyan-600 font-bold underline transition-colors">privacy policy</a>. You may unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Corporate Divider Line */}
        <div className="w-full h-[1px] bg-gray-200/60 mb-12" />

        {/* ──── ROW 2: STRATEGIC SHORTCUT LINK CARDS DIRECTION ──── */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 select-none">
          {[
            { label: "Executive Management", href: "/who-we-are/executive-management" },
            { label: "Group Structure", href: "/who-we-are/group-structure" },
            { label: "Sustainability", href: "/sustainability" }
          ].map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              className="w-full group block"
            >
              <Reveal direction="scale" duration={400} delay={index * 50}>
                <div className="w-full p-5 bg-slate-50/80 border border-gray-200/80 rounded-2xl flex items-center justify-between gap-4 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-xl hover:bg-white">
                  
                  {/* Text Label Anchor */}
                  <span className="text-[#051329] font-bold text-xs sm:text-sm tracking-[1.5px] uppercase transition-colors group-hover:text-blue">
                    {link.label}
                  </span>

                  {/* Geometric Action Indicator Bullet */}
                  <div className="w-10 h-10 rounded-xl border border-gray-200/80 flex items-center justify-center text-gray-500 bg-white group-hover:bg-blue group-hover:text-white group-hover:border-blue transition-all duration-300 transform group-hover:scale-105 shrink-0 shadow-sm">
                    <ArrowUpRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  
                </div>
              </Reveal>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}