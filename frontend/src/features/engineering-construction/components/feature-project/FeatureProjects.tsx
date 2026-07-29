"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import first1 from '@/assets/images/engineering-construction/feature-plan/mte4187.jpg';
import second2 from '@/assets/images/engineering-construction/feature-plan/sea-water-intake-pump-house.jpg';
import third3 from "@/assets/images/engineering-construction/feature-plan/18.jpg";

const projectsData = [
  {
    id: 1,
    title: "Haramain High Speed Railway Substations x6",
    category: "Grid System",
    image: first1,
  },
  {
    id: 2,
    title: "Jeddah Reverse Osmosis Plant Phase III-240 MLD",
    category: "Water Treatment",
    image: second2
  },
  {
    id: 3,
    title: "Ground Mounted Solar Project",
    category: "Renewable Energy",
    image: third3,
  }
];

export default function FeaturedProjects() {
  const horizontalTrackRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (horizontalTrackRef.current) {
      const scrollOffset = direction === "left" ? -380 : 380;
      horizontalTrackRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth"
      });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    /* ─── 🏛️ MODERN ARCHITECTURAL SLIDER SURFACE ─── */
    <div className="w-full bg-white py-20 lg:py-32 overflow-hidden relative border-b border-gray-200/60 select-none">

      {/* 🛠️ UX MATRIX CONTAINER */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-16 items-start"
        >

          {/* ──── LEFT SIDE COLUMN BLOCK: CONTENT SCHEDULER (SPANS 4 COLS) ──── */}
          <div className="lg:col-span-4 flex flex-col items-start text-left lg:pt-4 w-full h-full justify-between min-h-[380px]">
            <div className="w-full">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-blue/10 border border-blue/20 rounded-full mb-6 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-blue">
                  PORTFOLIO SHOWCASE
                </span>
              </div>

              <motion.h2
                variants={fadeInUpVariants}
                className="text-[#051329] font-black text-3xl sm:text-4xl lg:text-5xl tracking-[1.5px] leading-tight mb-5 uppercase"
              >
                View Our <br />
                <span className="text-blue">Latest Projects</span>
              </motion.h2>

              <motion.p
                variants={fadeInUpVariants}
                className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal mb-8 max-w-sm tracking-[0.5px]"
              >
                Check out our latest master projects for comprehensive engineering construction across all industrial sectors.
              </motion.p>

              <motion.div variants={fadeInUpVariants}>
                <Link
                  href="#"
                  className="group relative overflow-hidden inline-flex items-center gap-3 bg-gradient-to-r from-blue via-[#00529b] to-blue border border-white/20 text-white font-bold text-xs uppercase tracking-[2px] px-8 py-4 rounded-xl shadow-lg transition-all duration-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:border-cyan-400 active:scale-95 select-none"
                >
                  <span className="relative z-10">Discover All Projects</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-cyan-400 relative z-10" />
                  <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                </Link>
              </motion.div>
            </div>

            {/* 🛠️ CONTROLLER ARROWS (DESKTOP) */}
            <motion.div
              variants={fadeInUpVariants}
              className="hidden lg:flex items-center gap-3 mt-auto pt-12 select-none"
            >
              <button
                onClick={() => scrollSlider("left")}
                aria-label="Scroll Slide Left"
                className="w-12 h-12 rounded-xl border border-gray-200 text-[#051329] bg-white hover:border-blue hover:text-blue hover:shadow-lg transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollSlider("right")}
                aria-label="Scroll Slide Right"
                className="w-12 h-12 rounded-xl border border-gray-200 text-[#051329] bg-white hover:border-blue hover:text-blue hover:shadow-lg transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center shadow-sm"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* ──── RIGHT SIDE COLUMN BLOCK: HORIZONTAL CARD SLIDER (SPANS 8 COLS) ──── */}
          <div
            ref={horizontalTrackRef}
            className="lg:col-span-8 w-full rounded-2xl overflow-x-auto py-2 flex items-center gap-6 no-scrollbar snap-x snap-mandatory scroll-smooth min-h-[440px]"
          >
            {projectsData.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUpVariants}
                className="w-[280px] sm:w-[320px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 transition-all duration-300 flex-shrink-0 relative group snap-center flex items-end p-6 bg-[#051329]"
              >
                {/* Visual Media Layer Frame */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`Alfanar Execution Phase - ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-center object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  {/* Dynamic Dark Gradient Overlay Sheet */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051329] via-[#051329]/40 to-transparent z-10" />
                </div>

                {/* TEXT CONTAINER HIGHLIGHT LABELS */}
                <div className="w-full relative z-20 text-left flex flex-col items-start pointer-events-none">
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-[1.5px] mb-2">
                    {project.category}
                  </span>

                  <h3 className="text-white font-black text-lg sm:text-xl tracking-[1px] leading-snug line-clamp-3 uppercase">
                    {project.title}
                  </h3>
                </div>

                {/* Base Glowing Accent Outline */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue via-cyan-400 to-blue z-30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
              </motion.div>
            ))}
          </div>

        </motion.div>

        {/* Mobile View Active Scrolling Buttons */}
        <div className="flex lg:hidden items-center justify-between gap-4 w-full mt-8 pt-4 border-t border-gray-200/60 select-none">
          <button
            onClick={() => scrollSlider("left")}
            className="flex-1 h-11 rounded-xl border border-gray-200 bg-white text-[#051329] active:bg-gray-50 flex items-center justify-center transition-all duration-200 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            <span className="text-xs font-bold tracking-[1px] uppercase">Prev</span>
          </button>
          <button
            onClick={() => scrollSlider("right")}
            className="flex-1 h-11 rounded-xl border border-gray-200 bg-white text-[#051329] active:bg-gray-50 flex items-center justify-center transition-all duration-200 shadow-sm"
          >
            <span className="text-xs font-bold tracking-[1px] uppercase">Next</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

      </section>

      {/* Scrollbar Custom Hide Utility */}
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