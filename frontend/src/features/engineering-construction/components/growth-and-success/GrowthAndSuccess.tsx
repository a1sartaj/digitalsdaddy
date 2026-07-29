"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Compass, Building2, Award, ShieldCheck, CheckCircle2 } from "lucide-react";

// Features data structure
const featuresData = [
  {
    icon: Compass,
    text: "IN-HOUSE DESIGN & ENGINEERING"
  },
  {
    icon: Building2,
    text: "INTEGRATED PROJECT MANAGEMENT OFFICE"
  },
  {
    icon: Award,
    text: "1ST CLASS IN CIVIL, ELECTRICAL, & MECHANICAL WORK BY SAUDI GOVERNMENT"
  },
  {
    icon: ShieldCheck,
    text: "MEMBER OF BRITISH SAFETY COUNCIL"
  },
  {
    icon: CheckCircle2,
    text: "TOTAL QUALITY & SAFETY MANAGEMENT"
  }
];

export default function GrowthAndSuccess() {
  
  // ─── STAGGER ANIMATION TIMEFRAME ───
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      }
    }
  };

  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    /* ─── 🏛️ DYNAMIC SUCCESS CONSOLE SURFACE ─── */
    <div className="w-full bg-white overflow-hidden border-b border-gray-200/60 select-none">
      
      {/* 🛠️ UX MATRIX CONTAINER */}
      <section className="w-full max-w-[1600px] mx-auto py-20 lg:py-32 px-4 sm:px-8 lg:px-16">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-start relative z-10"
        >
          
          {/* ──── LEFT COLUMN: INSIGHT NARRATIVE ──── */}
          <div className="lg:col-span-6 flex flex-col justify-start text-left lg:sticky lg:top-28">
            
            {/* Context Tag */}
            <motion.div 
              variants={fadeInUpVariants}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-blue/10 border border-blue/20 rounded-full mb-6 shadow-sm self-start"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-blue">
                ALFANAR ENGINEERING CONSTRUCTION
              </span>
            </motion.div>
            
            {/* Master Headline */}
            <motion.h2 
              variants={fadeInUpVariants}
              className="text-[#051329] font-black text-3xl sm:text-4xl lg:text-5xl tracking-[1.5px] leading-tight mb-8 uppercase"
            >
              Turn The Key Towards <br />
              <span className="text-blue">Growth & Success</span>
            </motion.h2>
            
            {/* Narrative Deck */}
            <div className="flex flex-col gap-6 text-gray-700 text-sm sm:text-base leading-relaxed font-normal max-w-2xl tracking-[0.5px]">
              <motion.p variants={fadeInUpVariants}>
                Armed with a robust supply chain, digitalization of processes, as well as decades of experience – we are ever ready to manage and execute projects across different sectors. We offer a comprehensive range of services under Engineering, Procurement, and Construction (EPC), Engineering, Procurement, and Construction Management (EPCM), Lump Sum Turnkey (LSTK), and other model contracts.
              </motion.p>
              
              <motion.p variants={fadeInUpVariants} className="text-blue font-bold border-l-2 border-cyan-400 pl-4 my-1">
                Delivering projects on time and within budget is our absolute promise.
              </motion.p>
              
              <motion.p variants={fadeInUpVariants}>
                Although we started out by contributing to the development of the grid in Saudi Arabia, as the world evolved, so did we. We are now driving the global energy transition through our mega engineering and construction projects in green fuels, clean energy, sustainable infrastructure, as well as green hydrogen.
              </motion.p>
              
              <motion.p variants={fadeInUpVariants}>
                Our value engineering approach towards projects ensures we exceed expectations and deliver the quality our clients sign up for.
              </motion.p>
            </div>
          </div>

          {/* ──── RIGHT COLUMN: ARCHITECTURAL FEATURE CARDS GRID ──── */}
          <div className="lg:col-span-6 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            
            {featuresData.map((item, index) => {
              const IconComponent = item.icon;

              return (
                <motion.div
                  key={index}
                  variants={fadeInUpVariants}
                  className={`group h-full p-6 sm:p-8 bg-slate-50/80 border border-gray-200/80 rounded-3xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:bg-white flex flex-col justify-between items-start text-left ${
                    index === 4 ? "sm:col-span-2" : ""
                  }`}
                >
                  {/* Icon Box Wrapper */}
                  <div className="w-12 h-12 rounded-2xl bg-blue/10 border border-blue/20 text-blue mb-6 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-[#051329] group-hover:border-cyan-400 transition-all duration-300 shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  {/* Feature Title */}
                  <h4 className="text-[#051329] font-black text-xs sm:text-sm tracking-[1.5px] uppercase leading-relaxed group-hover:text-blue transition-colors mt-auto">
                    {item.text}
                  </h4>
                </motion.div>
              );
            })}

          </div>

        </motion.div>

      </section>
    </div>
  );
}