"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, CalendarRange } from "lucide-react";
import { timelineData } from "./ourHistoryData";

export default function OurHistory() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeNodeRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (currentIndex < timelineData.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Auto-scroll framework: Centering the selected year in mobile viewport smoothly
  useEffect(() => {
    if (activeNodeRef.current && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const activeNode = activeNodeRef.current;

      const containerWidth = container.offsetWidth;
      const nodeOffsetLeft = activeNode.offsetLeft;
      const nodeWidth = activeNode.offsetWidth;

      const scrollTarget = nodeOffsetLeft - containerWidth / 2 + nodeWidth / 2;

      container.scrollTo({
        left: scrollTarget,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const currentItem = timelineData[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -40 : 40,
      opacity: 0,
    }),
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const childItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full bg-white py-16 lg:py-24 border-b border-gray-200/60 overflow-hidden relative min-h-[650px] select-none"
    >
      {/* ──── UPPER HEADER ROW ──── */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10 mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 w-full">
          <motion.div variants={childItemVariants} className="text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-blue/10 border border-blue/20 rounded-full mb-4">
              <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-blue">
                MILESTONES
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#051329] tracking-[1.5px] leading-tight max-w-2xl">
              Here is a timeline of our key projects and achievements.
            </h2>
          </motion.div>

          {/* Desktop Control Buttons */}
          <motion.div variants={childItemVariants} className="hidden md:flex items-center gap-3 shrink-0 select-none">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`h-11 px-4 rounded-xl border flex items-center gap-2 transition-all duration-300 text-xs font-bold tracking-[1.5px] uppercase ${
                currentIndex === 0
                  ? "border-gray-200 text-gray-400 bg-gray-50/50 cursor-not-allowed"
                  : "border-gray-200 bg-white text-gray-800 hover:border-cyan-400 hover:text-blue active:scale-95 cursor-pointer shadow-sm"
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Prev</span>
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === timelineData.length - 1}
              className={`h-11 px-4 rounded-xl border flex items-center gap-2 transition-all duration-300 text-xs font-bold tracking-[1.5px] uppercase ${
                currentIndex === timelineData.length - 1
                  ? "border-gray-200 text-gray-400 bg-gray-50/50 cursor-not-allowed"
                  : "border-gray-200 bg-white text-gray-800 hover:border-cyan-400 hover:text-blue active:scale-95 cursor-pointer shadow-sm"
              }`}
            >
              <span>Next</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* ──── MID GRID NODE TRACK ──── */}
      <motion.div
        variants={childItemVariants}
        className="relative w-full mb-8 md:mb-12 overflow-hidden border-y border-gray-100 bg-slate-50/50"
      >
        <div
          ref={scrollContainerRef}
          className="w-full overflow-x-auto no-scrollbar py-6 flex items-center relative z-10"
        >
          <div className="flex justify-between items-center z-10 px-4 sm:px-8 lg:px-16 gap-10 md:gap-28 min-w-max mx-auto">
            {timelineData.map((item, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={`${item.year}-${index}`}
                  ref={isActive ? activeNodeRef : null}
                  className="flex flex-col items-center cursor-pointer group select-none shrink-0"
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                >
                  <span
                    className={`text-sm md:text-base font-extrabold transition-all duration-300 mb-2 ${
                      isActive
                        ? "text-blue scale-110 tracking-[1px]"
                        : "text-gray-400 tracking-[0.5px] group-hover:text-gray-700"
                    }`}
                  >
                    {item.year}
                  </span>

                  <div
                    className={`rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-4 h-4 bg-cyan-400 border-2 border-white shadow-md ring-2 ring-blue"
                        : "w-2.5 h-2.5 bg-gray-300 border-2 border-white group-hover:bg-gray-400"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* ──── LOWER CONTENT VIEWPORT CAROUSEL ──── */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <motion.div variants={childItemVariants} className="relative w-full">
          <div className="w-full overflow-hidden relative min-h-[400px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* Left Image Component */}
                <div className="md:col-span-5 w-full aspect-[4/3] md:aspect-[4/3] bg-slate-100 shadow-xl relative overflow-hidden rounded-2xl border border-gray-200/80 shrink-0">
                  <Image
                    src={currentItem.image}
                    alt={currentItem.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Right Text Content */}
                <div className="md:col-span-7 flex flex-col text-left justify-center items-start">
                  {currentItem.dateRange && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-gray-200 rounded-lg text-xs font-bold text-gray-700 tracking-[0.5px] mb-3">
                      <CalendarRange className="w-3.5 h-3.5 text-cyan-600" />
                      <span>{currentItem.dateRange.replace(/[()]/g, "")}</span>
                    </div>
                  )}

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#051329] mb-3 tracking-[1px] uppercase leading-tight">
                    {currentItem.title}
                  </h3>

                  <p className="text-xs sm:text-base text-gray-600 font-normal leading-relaxed tracking-[0.5px] max-w-xl whitespace-pre-line">
                    {currentItem.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex md:hidden items-center justify-between gap-4 w-full mt-6 pt-4 border-t border-gray-200/60 select-none">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`flex-1 h-11 px-4 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold tracking-[1px] uppercase ${
                currentIndex === 0
                  ? "border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed"
                  : "border-gray-200 bg-white text-gray-800 active:bg-gray-50"
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Prev</span>
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === timelineData.length - 1}
              className={`flex-1 h-11 px-4 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold tracking-[1px] uppercase ${
                currentIndex === timelineData.length - 1
                  ? "border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed"
                  : "border-gray-200 bg-white text-gray-800 active:bg-gray-50"
              }`}
            >
              <span>Next</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none !important;
        }
        .no-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}</style>
    </motion.section>
  );
}