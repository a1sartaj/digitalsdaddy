"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/common/Reveal";

import first1 from '@/assets/images/power-grid/our-offering/grid_ec.jpg';
import second2 from '@/assets/images/power-grid/our-offering/grid_pd.jpg';
import third3 from '@/assets/images/power-grid/our-offering/grid_es.jpg';

const offerings = [
  {
    title: "Engineering Construction",
    description: "We deliver EPC, EPCM, and LSTK projects in accordance with rigorous QA, QC, and HSE policies and procedures.",
    image: first1,
    link: "#",
    reverse: false
  },
  {
    title: "Project Development",
    description: "We finance, design, and operate smart power grid projects for transmission and distribution.",
    image: second2,
    link: "#",
    reverse: true
  },
  {
    title: "Engineering Services",
    description: "We are providing integrated testing & commissioning, operation & maintenance, and calibration services for substations, overhead lines, underground cables, and power plants.",
    image: third3,
    link: "#",
    reverse: false
  }
];

export default function OurOffering() {
  return (
    /* ─── 🏛️ MODERN DESIGN ASSURANCE GRID SOLUTION MATRIX ─── */
    <div className="w-full bg-white py-20 lg:py-32 overflow-hidden relative border-b border-gray-200/60 select-none">

      {/* 🛠️ UX MATRIX CONTAINER */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">

        {/* ──── UPPER HEADER BLOCK ──── */}
        <div className="w-full max-w-4xl text-left mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-blue/10 border border-blue/20 rounded-full mb-6 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-blue">
              OUR OFFERINGS
            </span>
          </div>

          <Reveal direction="bottom" duration={450}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-[#051329] tracking-[1.5px] leading-tight mb-6 uppercase">
              Different Solutions <br />
              <span className="text-blue">for Power Grid</span>
            </h2>
          </Reveal>

          <Reveal direction="bottom" duration={500} delay={50}>
            <p className="text-sm sm:text-base lg:text-lg font-normal text-gray-700 leading-relaxed tracking-[0.5px] max-w-2xl">
              We transform, influence, and strengthen the grid with smart and sustainable solutions through:
            </p>
          </Reveal>
        </div>

        {/* ──── DYNAMIC SPLIT HALF CONTENT ROWS ENGINE ──── */}
        <div className="w-full flex flex-col gap-24 lg:gap-36">
          {offerings.map((item, idx) => (
            <div
              key={idx}
              className={`w-full grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 xl:gap-20 items-center ${
                item.reverse ? "md:direction-rtl" : ""
              }`}
            >
              {/* 1. TEXT METADATA CORE BLOCK (SPANS 5 COLS) */}
              <div className="md:col-span-5 text-left flex flex-col justify-center items-start md:direction-ltr">
                <span className="text-xs font-bold text-cyan-600 tracking-[2px] uppercase mb-2">
                  0{idx + 1} // SOLUTION VALUE
                </span>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl text-[#051329] font-black tracking-[1.5px] uppercase mb-4 leading-tight">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-700 font-normal leading-relaxed tracking-[0.5px] mb-8 max-w-xl">
                  {item.description}
                </p>

                <Link
                  href={item.link}
                  className="group relative overflow-hidden inline-flex items-center gap-3 bg-gradient-to-r from-blue via-[#00529b] to-blue border border-white/20 text-white font-bold text-xs uppercase tracking-[2px] px-8 py-4 rounded-xl shadow-lg transition-all duration-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:border-cyan-400 active:scale-95 select-none"
                >
                  <span className="relative z-10">About Solution</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-cyan-400 relative z-10" />
                  <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                </Link>
              </div>

              {/* 2. PREMIUM MASK CONTAINER VISUAL DECK (SPANS 7 COLS) */}
              <div className="md:col-span-7 w-full shrink-0 md:direction-ltr">
                <Reveal direction={item.reverse ? "left" : "right"} duration={500} delay={50}>
                  <div className="w-full aspect-[16/10] bg-slate-50 shadow-2xl border border-gray-200/80 rounded-3xl overflow-hidden relative group">
                    <Image
                      src={item.image}
                      alt={`Alfanar Power Grid Strategy offering - ${item.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 750px"
                      className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      priority={idx === 0}
                    />
                    {/* Bottom Glowing Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue via-cyan-400 to-blue z-20 opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Reveal>
              </div>

            </div>
          ))}
        </div>

      </section>
    </div>
  );
}