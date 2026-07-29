"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Plus,
  Minus,
  HelpCircle,
} from "lucide-react";
import { faqsData } from "@/assets/data/home/faqs";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-[var(--background)] transition-colors duration-300 select-none">

      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#355396]/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#a67c00]/10 blur-[150px] pointer-events-none rounded-full" />

      {/* Constraints: Max-width 1440px / max-w-360, Padding: px-4 lg:px-8 */}
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 relative z-10 space-y-12 sm:space-y-16">

        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#a67c00]/10 border border-[#a67c00]/30 text-[#a67c00]">
            <Sparkles className="w-3.5 h-3.5 text-[#a67c00] animate-pulse" />
            <span className="text-[14px] font-medium tracking-[2px] uppercase">
              {faqsData.badge.label}
            </span>
            <span className="h-3.5 w-[1px] bg-[#a67c00]/30" />
            <span className="text-[14px] font-semibold text-[#a67c00] tracking-[1.5px] uppercase">
              {faqsData.badge.aiHighlight}
            </span>
          </div>

          <h2 className="text-[28px] sm:text-[38px] lg:text-[48px] font-semibold tracking-[1px] text-[var(--foreground)] leading-[1.18]">
            {faqsData.title.prefix}{" "}
            <span className="text-[#a67c00]">
              {faqsData.title.highlight}
            </span>{" "}
            {faqsData.title.suffix}
          </h2>

          <p className="text-[14px] sm:text-[16px] text-[var(--muted-text)] font-normal leading-relaxed max-w-2xl mx-auto tracking-[0.5px]">
            {faqsData.subtitle}
          </p>
        </header>

        {/* Accordion Container */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqsData.questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.slug}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                  ? "bg-[var(--card-bg)] border-[#355396] shadow-md"
                  : "bg-[var(--card-bg)] border-[var(--card-border)] hover:border-[#355396]/50"
                  }`}
              >
                {/* Question Trigger */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-xl shrink-0 transition-colors ${isOpen
                        ? "bg-[#355396] text-white"
                        : "bg-[#355396]/10 text-[#355396]"
                        }`}
                    >
                      <HelpCircle className="w-5 h-5" />
                    </div>

                    <span className="text-[16px] sm:text-[18px] font-semibold text-[var(--foreground)] tracking-[0.5px]">
                      {item.question}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {item.isAiHighlight && (
                      <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold tracking-[1px] uppercase bg-[#a67c00]/10 text-[#a67c00] border border-[#a67c00]/30 px-2.5 py-0.5 rounded-full">
                        <Sparkles className="w-3 h-3 text-[#a67c00]" />
                        AI TREND
                      </span>
                    )}

                    <div
                      className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${isOpen
                        ? "bg-[#a67c00] border-[#a67c00] text-white"
                        : "border-[var(--card-border)] text-[var(--muted-text)]"
                        }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Animated Expandable Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-[var(--card-border)] text-[14px] sm:text-[15px] text-[var(--muted-text)] font-normal leading-relaxed tracking-[0.5px]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Standard CTA Button: Uses px-8 py-4 padding */}
        <div className="text-center pt-4">
          <Link
            href={faqsData.cta.href}
            className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#a67c00] hover:bg-[#8e6900] text-white font-semibold text-[14px] tracking-[2px] uppercase shadow-lg shadow-[#a67c00]/20 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <span>{faqsData.cta.label}</span>
            <ArrowRight className="w-4 h-4 text-white transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}