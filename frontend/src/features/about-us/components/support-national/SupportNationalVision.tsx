"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowDown, Globe2 } from "lucide-react";
import { nationalVisionData } from "./nationalVisionData";

export default function SupportNationalVision() {
  const [activeTab, setActiveTab] = useState<string>("saudi");

  const currentData = nationalVisionData.find((item) => item.id === activeTab) || nationalVisionData[0];

  // ─── STAGGER ANIMATION CONFIGURATIONS ───
  const upperContainerVariants: Variants = {
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
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div className="w-full bg-white relative overflow-hidden border-b border-gray-200/60 select-none">
      
      {/* Background Ambient Glow Lens */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue/5 rounded-full blur-[140px] pointer-events-none" />

      {/* ─── MAIN MASTER CONTAINER SURFACE ─── */}
      <section className="w-full max-w-[1600px] mx-auto py-20 lg:py-28 px-4 sm:px-8 lg:px-16 relative z-10">

        {/* ─── UPPER COLUMN: CONTENT INTRO BOARD ─── */}
        <motion.div 
          variants={upperContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full max-w-4xl mb-12 sm:mb-16 text-left"
        >
          {/* Accent Identity Tagline */}
          <motion.div 
            variants={fadeInUpVariants}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-blue/10 border border-blue/20 rounded-full mb-5 shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-blue">
              SUPPORTING NATIONAL VISIONS
            </span>
          </motion.div>
          
          {/* Main Headline Title */}
          <motion.h2 
            variants={fadeInUpVariants}
            className="text-[#051329] font-black text-3xl sm:text-4xl lg:text-5xl tracking-[1.5px] leading-tight mb-6"
          >
            Working for the world, <br />with the world.
          </motion.h2>
          
          {/* Section Summary Context Narrative */}
          <motion.p 
            variants={fadeInUpVariants}
            className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600 font-normal tracking-[0.5px] max-w-3xl"
          >
            Our projects play a key role in supporting different nations to achieve their goals and visions. From Saudi Arabia to the rest of the world, we are working closely with local governments on key energy, water, and infrastructure projects.
          </motion.p>
        </motion.div>

        {/* ─── MIDDLE NAVIGATION DESK: STRUCTURAL BUTTON ROW ─── */}
        <div className="w-full flex overflow-x-auto items-center gap-3 sm:gap-4 mb-12 lg:mb-16 border-b border-gray-200/80 pb-6 no-scrollbar snap-x snap-mandatory select-none">
          {nationalVisionData.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 h-11 px-5 rounded-2xl text-xs font-bold tracking-[1.5px] uppercase transition-all duration-300 whitespace-nowrap snap-center cursor-pointer border ${
                  isActive
                    ? "bg-blue border-cyan-400/80 text-white shadow-lg active:scale-95"
                    : "text-gray-700 hover:text-blue bg-slate-50/80 border-gray-200/80 hover:border-blue/30"
                }`}
              >
                <Globe2 className={`w-4 h-4 ${isActive ? "text-cyan-400" : "text-gray-400"}`} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* ─── LOWER COLUMNS GRID FRAMEWORK ─── */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 xl:gap-20 items-start">

          {/* LEFT AREA CONTAINER (5 COLS) */}
          <div className="md:col-span-5 w-full relative aspect-[4/5] sm:aspect-square md:aspect-[4/5] bg-[#051329] shadow-2xl border border-gray-200/80 rounded-3xl overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={currentData.bgImage}
                  alt={currentData.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 550px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] z-20" />
          </div>

          {/* RIGHT AREA CONTAINER (7 COLS) */}
          <div className="md:col-span-7 flex flex-col text-left justify-center items-start w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="w-full flex flex-col"
              >
                {/* Dynamic Block Subtitle */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#051329] tracking-[1px] leading-tight uppercase mb-6">
                  {currentData.subTitle}
                </h3>

                {/* Vertical Step Nodes Array */}
                <div className="flex flex-col gap-4 text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed font-normal tracking-[0.5px] max-w-2xl">
                  {currentData.paragraphs.map((pText, pIdx) => (
                    <div 
                      key={pIdx} 
                      className="p-5 rounded-2xl border border-gray-200/80 bg-slate-50/80 shadow-sm transition-all duration-300 hover:bg-white hover:border-cyan-400/50 hover:shadow-md"
                    >
                      <p className="whitespace-pre-line text-gray-700 font-normal leading-relaxed">{pText}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* ─── DESKTOP CONTEXT RIGHT BAR FLOATER ─── */}
        <div className="absolute right-4 xl:right-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 select-none z-20 pointer-events-none">
          <div className="w-7 h-14 rounded-full border border-blue/20 bg-white/80 backdrop-blur-sm flex items-center justify-center text-blue shadow-sm">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce mt-0.5 text-cyan-600" />
          </div>
          <span 
            className="text-[9px] font-bold tracking-[2.5px] text-blue uppercase whitespace-nowrap"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            SCROLL DOWN
          </span>
        </div>

      </section>

      {/* Embedded Native Styles */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none !important;
        }
        .no-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}</style>
    </div>
  );
}