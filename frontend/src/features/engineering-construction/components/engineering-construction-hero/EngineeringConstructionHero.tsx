"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";
import constructionBg from '@/assets/images/engineering-construction/hero/engineering-construction.jpg';

export default function EngineeringConstructionHero() {

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
    /* ─── 🏛️ HERO SURFACE WITH H-SCREEN HEIGHT ─── */
    <div className="w-full h-screen min-h-[650px] flex items-center overflow-hidden bg-[#051329] relative border-b border-gray-200/20 isolate select-none">
      
      {/* 🛠️ ABSOLUTE BACKGROUND CANVAS CONTAINER */}
      <div className="absolute inset-0 w-full h-full select-none pointer-events-none z-0">
        <Image 
          src={constructionBg} 
          alt="Alfanar Engineering Construction Industrial Infrastructure Background Framework" 
          priority 
          fill 
          sizes="100vw"
          className="object-cover transition-transform duration-1000 scale-[1.01]"
        />
        
        {/* 🎨 Dual-Layer Premium Gradient Sheet: Guarantees Crisp Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 sm:via-white/90 to-white/20 lg:to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
      </div>

      {/* ─── CORE CONTENT VIEWPORT WRAPPER ─── */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 pt-20 relative z-20">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 relative"
        >
          {/* ──── CONTENT BRAND DESK (SPANS 8 COLS) ──── */}
          <div className="col-span-12 md:col-span-9 lg:col-span-8 flex flex-col items-start text-left w-full">
            
            {/* Context Badge */}
            <motion.div 
              variants={fadeInUpVariants}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-blue/10 border border-blue/20 backdrop-blur-md rounded-full mb-6 shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-blue">
                WHAT WE DO
              </span>
            </motion.div>

            {/* Title Heading */}
            <motion.h2
              variants={fadeInUpVariants}
              className="text-[#051329] font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-[1.5px] leading-[1.08] mb-6 uppercase"
            >
              Engineering <br />
              Construction
            </motion.h2>

            {/* Description Narrative */}
            <motion.p
              variants={fadeInUpVariants}
              className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 font-normal tracking-[0.5px] max-w-3xl drop-shadow-sm"
            >
              Over the past half century, we have scripted our unique success story in Saudi Arabia and the rest of the world through our growing portfolio of engineering construction projects. From Sharourah and Hail power plants in Saudi Arabia to EWA and DEWA substations in Bahrain and UAE, from solar photovoltaic projects in Egypt to wind farms in India and Spain – our multidisciplinary teams continue to reinvent themselves to undertake bespoke engineering construction projects across the world.
            </motion.p>
          </div>
        </motion.div>

        {/* ─── SCROLL DOWN SIDEBAR FLOATER ─── */}
        <div className="absolute right-4 xl:right-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 select-none z-30 pointer-events-none">
          <div className="w-8 h-14 rounded-full border border-blue/20 bg-white/90 backdrop-blur-md flex items-center justify-center text-blue shadow-md">
            <ArrowDown className="w-4 h-4 animate-bounce mt-0.5 text-cyan-600" />
          </div>
          <span 
            className="text-[9px] font-bold tracking-[2.5px] text-blue uppercase whitespace-nowrap"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            SCROLL DOWN
          </span>
        </div>

      </section>
    </div>
  );
}