"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import { datas, heroVideo } from "@/assets/data/home/hero";

export default function Hero() {
  const [currentSlider, setCurrentSlider] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlider((prev) => (prev === datas.length - 1 ? 0 : prev + 1));
    }, 6500);
    return () => clearInterval(interval);
  }, [currentSlider]);

  const textContainerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.08,
      },
    },
  };

  const textItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const current = datas[currentSlider];

  return (
    <section className="relative w-full h-[calc(100dvh-64px)] lg:h-[calc(100vh-64px)] bg-[#0d1424] flex items-center overflow-hidden select-none">

      {/* ─── 1. GLOBAL BACKGROUND VIDEO FRAME ─── */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        <video
          className="w-full h-full object-cover scale-105 filter brightness-[0.75] dark:brightness-[0.5]"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Cinematic Multi-Layer Brand Color Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1424]/95 via-[#0d1424]/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-transparent to-black/40 z-10" />

        {/* Brand Glow Overlays */}
        <div className="absolute top-1/4 left-10 w-[500px] h-[350px] bg-[#355396]/30 blur-[140px] rounded-full z-10" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[300px] bg-[#a67c00]/20 blur-[130px] rounded-full z-10" />
      </div>

      {/* ─── 2. HERO CONTENT CORE WRAPPER (Max-width: 1440px / max-w-360) ─── */}
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 relative z-20 text-left flex items-center h-full">
        <div className="max-w-2xl lg:max-w-3xl text-slate-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlider}
              variants={textContainerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-col items-start"
            >
              {/* Gold Sub-Header Badge */}
              <motion.div
                variants={textItemVariants}
                className="inline-flex items-center gap-2.5 mb-5 px-4 py-2 rounded-full bg-[#a67c00]/10 border border-[#a67c00]/30 backdrop-blur-md shadow-lg shadow-[#a67c00]/10"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#a67c00] animate-pulse" />
                <span className="text-[14px] font-medium tracking-[2.5px] uppercase text-[#a67c00]">
                  {current?.topHead}
                </span>
              </motion.div>

              {/* Headline Title (Capped between 14px and 48px) */}
              <motion.h1
                variants={textItemVariants}
                className="text-[28px] sm:text-[38px] lg:text-[48px] font-semibold tracking-[1px] leading-[1.12] mb-6 text-white drop-shadow-md"
              >
                {current.title}
              </motion.h1>

              {/* Description Paragraph */}
              <motion.p
                variants={textItemVariants}
                className="text-[14px] sm:text-[16px] lg:text-[18px] text-slate-300 leading-relaxed max-w-xl font-normal mb-8 tracking-[0.5px]"
              >
                {current.description}
              </motion.p>

              {/* Call To Action Button (Rest of Button: px-8 py-4) */}
              <motion.div variants={textItemVariants}>
                <Link
                  href={current.href || "/"}
                  className="group relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#a67c00] hover:bg-[#8e6900] border border-[#a67c00]/40 text-white text-[14px] font-semibold tracking-[2px] uppercase transition-all duration-300 shadow-xl shadow-[#a67c00]/20 active:scale-95 cursor-pointer"
                >
                  <span className="relative z-10">{current.button}</span>
                  <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1.5 relative z-10" />

                  {/* Internal Shimmer Animation Sweep */}
                  <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ─── 3. ARROW CONTROLS DOCK ─── */}
      <div className="absolute bottom-8 sm:bottom-12 right-4 lg:right-8 z-30 flex items-center gap-3">
        <button
          type="button"
          aria-label="Previous Slide"
          onClick={() =>
            setCurrentSlider((prev) => (prev === 0 ? datas.length - 1 : prev - 1))
          }
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl border border-[#355396]/40 bg-[#131d33]/80 backdrop-blur-xl text-white flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#a67c00] hover:border-[#a67c00] active:scale-90 shadow-lg"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          aria-label="Next Slide"
          onClick={() =>
            setCurrentSlider((prev) => (prev === datas.length - 1 ? 0 : prev + 1))
          }
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl border border-[#355396]/40 bg-[#131d33]/80 backdrop-blur-xl text-white flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#a67c00] hover:border-[#a67c00] active:scale-90 shadow-lg"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* ─── 4. BOTTOM PROGRESS STRIP ─── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-3">
        {datas.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlider(index)}
            aria-label={`Slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ease-out cursor-pointer ${currentSlider === index
                ? "w-10 sm:w-12 bg-[#a67c00] shadow-[0_0_12px_rgba(166,124,0,0.8)]"
                : "w-2.5 sm:w-3 bg-white/20 hover:bg-white/40"
              }`}
          />
        ))}
      </div>
    </section>
  );
}