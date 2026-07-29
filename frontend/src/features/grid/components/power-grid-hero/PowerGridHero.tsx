"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowDown, Zap } from "lucide-react";
import powerGridBg from '@/assets/images/power-grid/hero/mte_4792.jpg';

export default function PowerGridHero() {
    
  // ─── STAGGER ANIMATION CONFIGURATION ───
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    /* ─── 🏛️ CINEMATIC POWER GRID HERO SURFACE (H-SCREEN) ─── */
    <div className="w-full h-screen min-h-[650px] flex items-center overflow-hidden bg-[#051329] relative border-b border-gray-200/20 isolate select-none">

      {/* 🛠️ ABSOLUTE BACKGROUND IMAGE CONTAINER */}
      <div className="absolute inset-0 w-full h-full select-none pointer-events-none z-0">
        <Image 
          src={powerGridBg} 
          alt="Alfanar Global High-Voltage Power Grid Transmission Infrastructure Network" 
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-1000 scale-[1.01]" 
          priority 
        />
        {/* Layered Gradient Shielding Sheet for Hyper-Readable Text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#051329] via-[#051329]/90 sm:from-[#051329]/95 sm:via-[#051329]/80 to-[#051329]/20 lg:to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#051329] via-transparent to-transparent z-10" />
      </div>

      {/* ─── MAIN MASTER CONTENT WRAPPER ─── */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 pt-20 relative z-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 relative"
        >
          {/* ──── LEFT TEXT METADATA COLUMN BLOCK (SPANS 9 COLS) ──── */}
          <div className="col-span-12 md:col-span-10 lg:col-span-9 flex flex-col items-start text-left w-full relative">

            {/* Category Identity Tagline */}
            <motion.div 
              variants={fadeInUpVariants}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white/10 border border-white/15 backdrop-blur-md rounded-full mb-6 shadow-md"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-white">
                BUSINESS LINES
              </span>
            </motion.div>

            {/* Headline Integration Deck */}
            <motion.div variants={fadeInUpVariants} className="flex items-center gap-4 mb-6 select-none">
              {/* Round Electric Icon Badge */}
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl border border-white/15 flex items-center justify-center shrink-0 text-white bg-white/10 backdrop-blur-md shadow-inner">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-[1.5px] uppercase leading-none">
                Power <span className="text-cyan-400">Grid</span>
              </h1>
            </motion.div>

            {/* Description Paragraph Statement */}
            <motion.p 
              variants={fadeInUpVariants}
              className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-3xl drop-shadow-md tracking-[0.5px]"
            >
              Our extensive work on the electrical grid is a testament to our ability to deliver complex power projects in record time while maintaining the highest quality and safety standards. Over the decades, we have earned our clients&apos; and partners&apos; trust through consistent execution, ensuring reliable electricity delivery from generation sources to end users across multiple geographies.
            </motion.p>

            {/* Faded Watermark Title Background */}
            <span className="absolute left-[-10px] bottom-[-60px] md:bottom-[-100px] lg:bottom-[-140px] text-[6rem] sm:text-[10rem] md:text-[13rem] lg:text-[15rem] font-black text-white/[0.03] tracking-tight pointer-events-none select-none uppercase z-0">
              GRID
            </span>
          </div>
        </motion.div>

        {/* ─── SCROLL DOWN SIDEBAR FLOATER ─── */}
        <div className="absolute right-4 xl:right-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 select-none z-30 pointer-events-none">
          <div className="w-8 h-14 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white shadow-xl">
            <ArrowDown className="w-4 h-4 animate-bounce mt-0.5 text-cyan-400" />
          </div>
          <span 
            className="text-[9px] font-bold tracking-[2.5px] text-white/80 uppercase whitespace-nowrap"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            SCROLL DOWN
          </span>
        </div>

      </section>
    </div>
  );
}