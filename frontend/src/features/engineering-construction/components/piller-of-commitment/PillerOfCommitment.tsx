"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import Reveal from "@/components/common/Reveal";

import first1 from '@/assets/images/engineering-construction/piller/pm-ec.jpg';
import second2 from '@/assets/images/engineering-construction/piller/safety-ec.jpg';
import third3 from '@/assets/images/engineering-construction/piller/quality-ec.jpg';

const pillarsData = [
  {
    num: "01",
    title: "Strategic Project Management",
    description: "Adept project management is in our DNA. We handle projects strategically from planning to execution; utilizing the best tools, technologies, and processes to meet project schedule, avoid budget overrun, and successfully maintain and even surpass industry benchmarks.",
    bgImage: first1,
    certified: "",
  },
  {
    num: "02",
    title: "Impregnable Safety",
    description: "We prioritize safety in all our construction projects. Diligently following safety procedures and best practices is imperative in Alfanar. In turn, we create a safe environment for our teams while also being lauded by our clients through safety awards.",
    bgImage: second2,
    certified: "We are ISO 45001:2018 certified.",
  },
  {
    num: "03",
    title: "Superior Quality",
    description: "Quality is embedded in all we do. We're constantly asking ourselves, \"How can we do this better?\". In our engineering construction projects, we ensure that systems, tools, and products are always of optimal quality. And that our QA and QC engineers conduct thorough inspections at every stage of the project in accordance with our clients' specifications.",
    bgImage: third3,
    certified: "We are ISO 9001:2015 certified."
  }
];

export default function PillarsOfCommitment() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === pillarsData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? pillarsData.length - 1 : prev - 1));
  };

  const currentPillar = pillarsData[activeIndex];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 }
    }
  };

  return (
    /* ─── 🏛️ MODERN DYNAMIC PILLARS CONSOLE SURFACE ─── */
    <div className="w-full bg-white py-20 lg:py-32 overflow-hidden relative border-b border-gray-200/60 select-none">
      
      {/* 🛠️ UX MATRIX CONTAINER */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">

        {/* ──── UPPER HEADER INTRO BLOCK ──── */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 lg:mb-20">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-left max-w-3xl"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-blue/10 border border-blue/20 rounded-full mb-6 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-blue">
                CORE ASSURANCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-[#051329] tracking-[1.5px] leading-tight uppercase">
              Projects engineered around <br/>
              <span className="text-blue">three solid pillars.</span>
            </h2>
          </motion.div>

          {/* Desktop Premium Controllers */}
          <div className="hidden md:flex items-center gap-3 shrink-0 select-none">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-xl border border-gray-200 bg-white text-[#051329] hover:border-blue hover:text-blue hover:shadow-lg transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-xl border border-gray-200 bg-white text-[#051329] hover:border-blue hover:text-blue hover:shadow-lg transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center shadow-sm"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ─── MIDDLE DYNAMIC CONTROLLER VIEWPORT ─── */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 xl:gap-20 items-center">
          
          {/* LEFT GRAPHIC CANVAS FRAME (SPANS 5 COLS) */}
          <div className="md:col-span-5 w-full aspect-[4/3] sm:aspect-square md:aspect-[4/5] bg-slate-50 shadow-2xl rounded-3xl overflow-hidden relative border border-gray-200/80 shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={currentPillar.bgImage}
                  alt={`Alfanar Commitment Pillar - ${currentPillar.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 550px"
                  className="object-cover"
                  priority={activeIndex === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051329]/40 via-transparent to-transparent z-10" />
              </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-cyan-400 z-20" />
          </div>

          {/* RIGHT CONTENT DISPLAY METADATA DECK (SPANS 7 COLS) */}
          <div className="md:col-span-7 flex flex-col text-left justify-center items-start w-full min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="w-full flex flex-col items-start"
              >
                {/* Serial Tag */}
                <span className="text-xs font-bold text-cyan-600 tracking-[2px] uppercase mb-2">
                  PILLAR {currentPillar.num} // INDUSTRIAL ASSURANCE
                </span>

                {/* Title Header */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#051329] tracking-[1.5px] uppercase mb-5 leading-tight">
                  {currentPillar.title}
                </h3>

                {/* Description Paragraph */}
                <p className="text-sm sm:text-base text-gray-700 font-normal leading-relaxed tracking-[0.5px] mb-8 max-w-xl whitespace-pre-line">
                  {currentPillar.description}
                </p>

                {/* Certification Meta Box */}
                {currentPillar.certified && (
                  <div className="inline-flex items-center gap-3 bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
                    <ShieldCheck className="w-4 h-4 text-blue shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-[#051329] tracking-[0.5px]">
                      {currentPillar.certified}
                    </span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* 🛠️ MOBILE ONLY DISPLAY CONTROL BUTTONS DECK */}
        <div className="flex md:hidden items-center justify-between gap-4 w-full mt-8 pt-4 border-t border-gray-200/60 select-none">
          <button
            onClick={handlePrev}
            className="flex-1 h-11 rounded-xl border border-gray-200 bg-white text-[#051329] active:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-xs font-bold tracking-[1.5px] uppercase"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Prev</span>
          </button>
          <button
            onClick={handleNext}
            className="flex-1 h-11 rounded-xl border border-gray-200 bg-white text-[#051329] active:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-xs font-bold tracking-[1.5px] uppercase"
          >
            <span>Next</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </section>
    </div>
  );
}