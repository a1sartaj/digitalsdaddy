"use client";

import React from "react";
import Reveal from "@/components/common/Reveal";

export default function OurPurpose() {
  return (
    /* ─── 🏛️ CLEAN INDUSTRIAL PURPOSE BANNER DECK ─── */
    <section className="w-full bg-white py-20 lg:py-32 overflow-hidden relative border-b border-gray-200/60 select-none">
      
      {/* Background Ambient Glow Lens */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Structural layout matrix matching global standard max-w */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 text-center flex flex-col items-center relative z-10">
        
        {/* Modern Accent Indicator Badge */}
        <Reveal>
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-blue/10 border border-blue/20 rounded-full mb-8">
            <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-blue">
              MISSION MANIFESTO
            </span>
          </div>
        </Reveal>

        {/* Main Strategic Heading */}
        <Reveal direction="bottom" duration={400} delay={50}>
          <h2 className="text-3xl sm:text-5xl xl:text-6xl font-black text-[#051329] tracking-[1.5px] mb-8 leading-tight max-w-4xl">
            Our Purpose. Our &apos;Why&apos;.
          </h2>
        </Reveal>

        {/* Sub-heading / Highlighted Statement Deck */}
        <Reveal direction="bottom" duration={500} delay={100}>
          <div className="bg-slate-50/80 border-y border-x-4 border-blue/20 border-x-blue rounded-2xl p-6 sm:p-8 max-w-3xl mb-8 shadow-sm backdrop-blur-md">
            <p className="text-base sm:text-xl lg:text-2xl text-[#051329] font-extrabold leading-relaxed tracking-[0.5px]">
              Answering the increasingly complex energy, water, and infrastructure needs of our world.
            </p>
          </div>
        </Reveal>

        {/* Detailed Descriptive Narrative Paragraph Block */}
        <Reveal direction="bottom" duration={600} delay={150}>
          <p className="text-xs sm:text-base lg:text-lg text-gray-600 font-normal max-w-4xl leading-relaxed sm:leading-loose tracking-[0.5px]">
            We answer the growing and increasingly complex energy, water, and infrastructure needs of our world through
            sustainable solutions that are powered by a unique combination of disruptive technologies, extraordinary engineering
            minds, and an absolute passion for protecting our planet.
          </p>
        </Reveal>

      </div>
    </section>
  );
}