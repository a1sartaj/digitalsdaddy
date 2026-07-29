"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Building2, Layers2, Milestone } from "lucide-react";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Reveal from "@/components/common/Reveal";
import alfanarTurbine from "@/assets/images/about-page/out-story/alfanar-turbine.webp";

export default function AboutHero() {

  // ─── STAGGER CONTAINER ENTRANCE VARIANTS ───
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      }
    }
  };

  return (
    <ParallaxContainer>
      {/* ─── 🏛️ FULL VIEWPORT HERO SURFACE (H-SCREEN READY) ─── */}
      <div className="relative w-full bg-white overflow-hidden border-b border-gray-200/60 min-h-[680px] lg:h-screen lg:max-h-[1080px] flex items-center select-none py-16 lg:py-0">

        {/* Backdrop Industrial Image Frame */}
        <div className="absolute inset-0 w-full h-full select-none pointer-events-none z-0">
          <Image
            src={alfanarTurbine}
            alt="Alfanar Power Global Operational Industrial Turbine Framework"
            priority
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-1000 scale-[1.01]"
          />
          {/* High-Contrast Matte Gradient Overlay Shield */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-75% to-white/30 sm:to-transparent z-10" />
        </div>

        {/* Ambient Lens Glow */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue/5 rounded-full blur-[140px] pointer-events-none z-10" />

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 z-20 isolate grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
        >

          {/* ──── LEFT SIDE COLUMN: BRAND IDENTITY CANVAS (5 COLS) ──── */}
          <div className="lg:col-span-5 flex flex-col items-start text-left relative z-10">

            {/* Identity Badge */}
            <Reveal>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-blue/10 border border-blue/20 rounded-full mb-6">
                <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-blue">
                  OUR MANIFESTO
                </span>
              </div>
            </Reveal>

            {/* Core Header */}
            <Reveal direction="bottom" duration={400} delay={50}>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-[1.5px] leading-[1.15] text-[#051329] mb-6">
                Global company <br />
                with <span className="text-blue">Saudi roots.</span>
              </h1>
            </Reveal>

            {/* Structural Milestone Tag */}
            <Reveal direction="bottom" duration={500} delay={100}>
              <div className="flex items-center gap-3 py-2.5 px-4 bg-slate-50/90 border border-blue/20 rounded-xl shadow-sm backdrop-blur-md">
                <Milestone className="w-4 h-4 text-cyan-500" />
                <span className="text-xs font-bold text-gray-800 tracking-[1px] uppercase">
                  ESTABLISHED LEADERSHIP SINCE 1970
                </span>
              </div>
            </Reveal>
          </div>

          {/* ──── RIGHT SIDE COLUMN: IMMERSIVE DETAILS DECK (7 COLS) ──── */}
          <div className="lg:col-span-7 flex flex-col gap-6 relative z-10 w-full">

            {/* Block Concept 1: The Transformation */}
            <Reveal direction="right" duration={500} delay={150}>
              <div className="w-full p-6 sm:p-8 rounded-2xl border border-gray-200/80 bg-slate-50/80 backdrop-blur-md shadow-sm hover:shadow-xl hover:border-cyan-400/50 transition-all duration-300 group flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue/10 border border-blue/20 flex items-center justify-center shrink-0 text-blue group-hover:bg-blue group-hover:text-white transition-colors duration-300">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="flex flex-col text-left">
                  <h2 className="text-base sm:text-lg font-bold text-[#051329] tracking-[1px] mb-2 uppercase">
                    Evolution & Diversification
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed tracking-[0.5px]">
                    Since the 1970s, we&apos;ve been growing and diversifying our business to consistently meet the evolving needs of our world. Today, we have transformed into a global project developer, engineering construction & technology solutions provider, with a vast portfolio of landmark projects across multiple sectors.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Block Concept 2: Human Capital Advantage */}
            <Reveal direction="right" duration={500} delay={200}>
              <div className="w-full p-6 sm:p-8 rounded-2xl border border-gray-200/80 bg-slate-50/80 backdrop-blur-md shadow-sm hover:shadow-xl hover:border-cyan-400/50 transition-all duration-300 group flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shrink-0 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-[#051329] transition-colors duration-300">
                  <Layers2 className="w-6 h-6" />
                </div>
                <div className="flex flex-col text-left">
                  <h2 className="text-base sm:text-lg font-bold text-[#051329] tracking-[1px] mb-2 uppercase">
                    Human Capital Infrastructure
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed tracking-[0.5px]">
                    Our people — more than <span className="text-blue font-bold">10,000 unique minds</span> — are the strength and absolute advantage of our business. Our success as a global company is tied directly to their strategic growth; we value, nurture, and empower them to succeed at every stage.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>

        </motion.section>
      </div>
    </ParallaxContainer>
  );
}