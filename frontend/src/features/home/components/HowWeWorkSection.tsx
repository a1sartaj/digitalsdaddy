"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Compass,
  Palette,
  Code2,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import { howWeWorkData } from "@/assets/data/home/howwework";

const renderStepIcon = (iconName: string, isGold: boolean) => {
  const iconProps = {
    className: `w-5 h-5 ${isGold ? "text-[#a67c00]" : "text-[#355396]"}`,
  };
  switch (iconName) {
    case "Compass":
      return <Compass {...iconProps} />;
    case "Palette":
      return <Palette {...iconProps} />;
    case "Code2":
      return <Code2 {...iconProps} />;
    case "Rocket":
      return <Rocket {...iconProps} />;
    default:
      return <Compass {...iconProps} />;
  }
};

export default function HowWeWorkSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-[var(--background)] transition-colors duration-300 select-none">
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-[#355396]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-[#a67c00]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        <header className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a67c00]/10 border border-[#a67c00]/30 text-[#a67c00]">
            <Sparkles className="w-3.5 h-3.5 text-[#a67c00] animate-pulse" />
            <span className="text-[14px] font-medium tracking-[2px] uppercase">
              {howWeWorkData.badge}
            </span>
          </div>

          {/* Dynamic Prefix, Highlight, & Suffix Title Rendering */}
          <h2 className="text-[28px] sm:text-[38px] lg:text-[48px] font-semibold tracking-[1px] text-[var(--foreground)] leading-[1.18]">
            {howWeWorkData.title.prefix}{" "}
            <span className="text-[#a67c00]">
              {howWeWorkData.title.highlight}
            </span>{" "}
            {howWeWorkData.title.suffix}
          </h2>

          <p className="text-[14px] sm:text-[16px] text-[var(--muted-text)] font-normal leading-relaxed max-w-2xl mx-auto tracking-[0.5px]">
            {howWeWorkData.subtitle}
          </p>
        </header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative"
        >
          {howWeWorkData.steps.map((step, index) => {
            const isGold = step.titleColor === "#a67c00";
            const isActive = activeStep === index;

            return (
              <motion.article
                key={step.slug}
                variants={cardVariants}
                onMouseEnter={() => setActiveStep(index)}
                whileHover={{ y: -6 }}
                className={`group relative flex flex-col justify-between p-7 rounded-3xl bg-[var(--card-bg)] border transition-all duration-500 shadow-sm hover:shadow-xl overflow-hidden cursor-pointer ${isActive
                    ? "border-[#355396] shadow-md"
                    : "border-[var(--card-border)] hover:border-[#355396]/50"
                  }`}
              >
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span
                    className={`text-[28px] font-semibold tracking-[1px] ${isGold ? "text-[#a67c00]" : "text-[#355396]"
                      }`}
                  >
                    {step.stepNumber}
                  </span>

                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${isGold
                        ? "bg-[#a67c00]/10 border border-[#a67c00]/20"
                        : "bg-[#355396]/10 border border-[#355396]/20"
                      }`}
                  >
                    {renderStepIcon(step.iconName, isGold)}
                  </div>
                </div>

                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      className={`text-[20px] font-semibold tracking-[0.5px] mb-2 leading-snug transition-colors duration-300 ${isGold ? "text-[#a67c00]" : "text-[#355396]"
                        }`}
                    >
                      {step.title}
                    </h3>

                    <p className="text-[14px] text-[var(--muted-text)] font-normal leading-relaxed tracking-[0.5px]">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--card-border)] space-y-2 mt-4">
                    <span className="text-[14px] font-medium uppercase tracking-[1.5px] text-[var(--foreground)] block mb-1">
                      Key Deliverables:
                    </span>
                    {step.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-[14px] font-normal text-[var(--muted-text)] tracking-[0.5px]"
                      >
                        <CheckCircle2
                          className={`w-3.5 h-3.5 shrink-0 ${isGold ? "text-[#a67c00]" : "text-[#355396]"
                            }`}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="text-center pt-4">
          <Link
            href={howWeWorkData.cta.href}
            className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#a67c00] hover:bg-[#8e6900] text-white font-semibold text-[14px] tracking-[2px] uppercase shadow-lg shadow-[#a67c00]/20 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <span>{howWeWorkData.cta.label}</span>
            <ArrowRight className="w-4 h-4 text-white transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}