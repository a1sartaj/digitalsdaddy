"use client";

import React from "react";
import Reveal from "@/components/common/Reveal";

export default function Transmission() {
  return (
    /* ─── 🏛️ MODERN DESIGN ASSURANCE TRANSMISSION TEXT CANVAS ─── */
    <div className="w-full bg-white py-20 lg:py-32 overflow-hidden relative border-b border-gray-200/60 select-none">

      {/* 🛠️ UX MATRIX CONTAINER */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10 flex justify-start">
        
        {/* Text Content Delivery Engine */}
        <div className="w-full max-w-4xl text-left">
          
          {/* Identity Context Tagline */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-blue/10 border border-blue/20 rounded-full mb-6 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-blue">
              Transmission & Distribution
            </span>
          </div>

          {/* Master Segment Header */}
          <Reveal direction="bottom" duration={450}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#051329] tracking-[1.5px] leading-tight uppercase mb-8 md:mb-12 max-w-3xl">
              Working to keep the grid – <span className="text-blue">resilient, efficient, and secure.</span>
            </h2>
          </Reveal>

          {/* Paragraph Narrative Cluster Grid */}
          <div className="flex flex-col gap-6 text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed font-normal tracking-[0.5px]">
            
            <Reveal direction="bottom" delay={50}>
              <p className="p-6 rounded-3xl border border-gray-200/80 bg-slate-50/80 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:border-cyan-400/50 hover:shadow-xl hover:-translate-y-1">
                Our journey began in the Saudi utilities sector in the 1970s, and while we continue to grow our presence in the Kingdom, today, our landmark grid projects extend to the UAE, Bahrain, Egypt, India, Spain, and the United Kingdom.
              </p>
            </Reveal>

            <Reveal direction="bottom" delay={100}>
              <p className="p-6 rounded-3xl border border-gray-200/80 bg-slate-50/80 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:border-cyan-400/50 hover:shadow-xl hover:-translate-y-1">
                We have successfully delivered an extensive range of high-voltage and extra-high-voltage projects, including 66 kV to 500 kV, including both indoor and outdoor substations, overhead transmission lines, and underground cable networks. Our scope extends beyond traditional grid infrastructure to encompass integrated smart grid solutions, such as the deployment of advanced smart metering systems that enhance operational efficiency, reduce technical and commercial losses, and provide real-time data for better network management.
              </p>
            </Reveal>

            <Reveal direction="bottom" delay={150}>
              <p className="p-6 rounded-3xl border border-gray-200/80 bg-slate-50/80 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:border-cyan-400/50 hover:shadow-xl hover:-translate-y-1">
                Our capabilities also cover the complete lifecycle of transmission and distribution assets, from design, engineering, procurement, and construction to operation, maintenance, testing, and commissioning. We integrate modern automation systems, protection and control schemes, and fiber-optic communication networks to ensure that every project meets today’s energy needs and is future-ready for emerging technologies and renewable energy integration.
              </p>
            </Reveal>
            
          </div>
        </div>

      </section>
    </div>
  );
}