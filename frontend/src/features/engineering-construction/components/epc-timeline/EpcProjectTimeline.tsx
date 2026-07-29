"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, CalendarDays, BarChart3, BriefcaseBusiness, Settings2, Package, DraftingCompass, Handshake, HardHat } from "lucide-react";

// Updated data structure with consistent Lucide icons
const timelinePhases = [
  {
    id: "management",
    num: "01",
    title: "Assign Management",
    description: "Assign a Project Director, Site Manager, and core Project Team upon contract signing.",
    duration: "M0 - M4 (4 Mos)",
    icon: BriefcaseBusiness,
    color: "stroke-blue", // Matching token system
  },
  {
    id: "engineering",
    num: "02",
    title: "Engineering Review",
    description: "Detailed verification of architectural maps, compliance standards, load calculations, and approving designs.",
    duration: "M0 - M6 (6 Mos)",
    icon: DraftingCompass,
    color: "stroke-cyan-500",
  },
  {
    id: "procurement",
    num: "03",
    title: "Procurement",
    description: "Ordering extra-high-voltage transformers, switchgears, and cabling networks from approved vendors.",
    duration: "M3 - M12 (9 Mos)",
    icon: Package,
    color: "stroke-blue",
  },
  {
    id: "mobilization",
    num: "04",
    title: "Mobilization to Site",
    description: "Setting up temporary facilities, transferring heavy equipment, safety checks, and initial ground works.",
    duration: "M3 - M9 (6 Mos)",
    icon: Settings2,
    color: "stroke-cyan-500",
  },
  {
    id: "construction",
    num: "05",
    title: "Construction",
    description: "Foundation laying, steel structure erection, installation of heavy equipment, cabling, control room construction.",
    duration: "M6 - M18 (12 Mos)",
    icon: HardHat,
    color: "stroke-blue",
  },
  {
    id: "installation",
    num: "06",
    title: "Installation & Pre-Comm.",
    description: "Cold testing of internal circuits, insulation tests, calibrating relays, and initial grid energization checks.",
    duration: "M12 - M20 (8 Mos)",
    icon: Zap,
    color: "stroke-cyan-500",
  },
  {
    id: "testing",
    num: "07",
    title: "Testing & Commissioning",
    description: "Final hot testing, synchronization checks with national grid operators, load balancing, and optimization.",
    duration: "M16 - M22 (6 Mos)",
    icon: BarChart3,
    color: "stroke-blue",
  },
  {
    id: "handover",
    num: "08",
    title: "Handover & Closeout",
    description: "Submitting as-built documentation, operational training, clearing commercial closeouts, and official handovers.",
    duration: "M18 - M25 (7 Mos)",
    icon: Handshake,
    color: "stroke-cyan-500",
  }
];

export default function EpcProjectTimeline() {
  // Use "management" as the default active state for the desk detail card
  const [activePhaseId, setActivePhaseId] = useState<string | null>("management");

  const activePhase = timelinePhases.find((p) => p.id === activePhaseId);

  return (
    /* ─── 🏛️ MODERN VERTICAL INFOGRAPHIC TIMELINE SURFACE ─── */
    <div className="w-full bg-white py-20 lg:py-32 overflow-hidden relative border-b border-gray-200/60 select-none">
      
      {/* Background Ambient Power Grid Lens */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue/5 rounded-full blur-[160px] pointer-events-none" />

      {/* 🛠️ UX MATRIX CONTAINER */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">

        {/* ──── UPPER HEADER INTRO ──── */}
        <div className="w-full max-w-4xl text-left mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-blue/10 border border-blue/20 rounded-full mb-6 shadow-sm relative overflow-hidden">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-blue">
              PROJECT ARCHITECTURE
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#051329] tracking-[1.5px] leading-tight uppercase mb-6">
            Constructing a typical <span className="text-blue">380 kV Substation:</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg font-normal text-gray-700 leading-relaxed tracking-[0.5px]">
            Explore the specialized vertical flow and duration for the standardized Engineering, Procurement, and Construction lifecycle (M0 - M25).
          </p>
        </div>

        {/* ─── DYNAMIC VERTICAL FLOW INTERFACE ─── */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ──── LEFT SIDE: THE ENERGY FLOW ARC (SPANS 6 COLS) ──── */}
          <div className="lg:col-span-6 flex flex-col items-center relative pt-4">
            
            {/* Main Vertical Track Line (Energy Conduit) */}
            <div className="absolute top-0 bottom-0 left-[26px] w-1 bg-gray-200 rounded-full z-0 overflow-hidden">
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                className="w-full bg-gradient-to-b from-blue via-cyan-400 to-blue shadow-[0_0_10px_rgba(34,211,238,0.6)]"
              />
            </div>

            {/* Timeline Hubs Engine */}
            <div className="w-full flex flex-col gap-10 sm:gap-12 relative z-10">
              {timelinePhases.map((phase, idx) => {
                const isHovered = activePhaseId === phase.id;
                const IconComponent = phase.icon;

                return (
                  <motion.div
                    key={phase.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.1 + idx * 0.08 }}
                    className="flex items-center gap-6 cursor-pointer group"
                    onMouseEnter={() => setActivePhaseId(phase.id)}
                    onMouseLeave={() => setActivePhaseId(phase.id)} // Keep last hovered active on desktop
                  >
                    {/* The "Power Hub" connecting node */}
                    <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                      {/* Pulse Wave Animation on Hover */}
                      {isHovered && (
                        <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-25" />
                      )}
                      {/* Luminous Inner Circle */}
                      <div className={`w-14 h-14 rounded-full bg-[#051329] border-2 ${isHovered ? "border-cyan-400" : "border-blue/30"} shadow-[0_0_15px_rgba(0,99,175,0.2)] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]`}>
                        <IconComponent className={`w-6 h-6 ${isHovered ? "text-cyan-300" : "text-blue"} ${phase.color} transition-colors duration-300 group-hover:text-cyan-300`} />
                      </div>
                    </div>

                    {/* Metadata Header Label */}
                    <div className="flex flex-col flex-1 text-left justify-center">
                      <span className="text-[10px] font-bold text-cyan-600 tracking-[2px] uppercase">
                        PHASE {phase.num} // {phase.duration}
                      </span>
                      <h3 className={`text-xl font-black ${isHovered ? "text-blue" : "text-[#051329]"} tracking-[1px] uppercase transition-colors duration-300 group-hover:text-blue leading-tight`}>
                        {phase.title}
                      </h3>
                    </div>

                    {/* Desktop Hover Pointer indicator */}
                    <div className={`hidden lg:block w-3 h-3 rounded-full ${isHovered ? "bg-cyan-400" : "bg-transparent"} transition-colors duration-300 shrink-0`} />

                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ──── RIGHT SIDE: GLASSMORPHIC DETAIL DOCK (SPANS 6 COLS) ──── */}
          <div className="lg:col-span-6 w-full h-full lg:sticky lg:top-28 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {activePhase ? (
                <motion.div
                  key={activePhase.id}
                  initial={{ opacity: 0, scale: 0.98, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -15 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full p-8 sm:p-10 rounded-3xl bg-slate-50/70 border border-gray-200/80 backdrop-blur-xl shadow-2xl relative overflow-hidden text-left"
                >
                  {/* Floating Micro Grid Pattern */}
                  <div className="absolute inset-0 bg-white/[0.015] bg-[linear-gradient(to_right,#05132910_1px,transparent_1px),linear-gradient(to_bottom,#05132910_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                  {/* Top Accompanying Meta Row */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200/80 relative z-10">
                    <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-blue/10 border border-blue/20 rounded-full text-blue text-[11px] font-bold tracking-[1px] uppercase">
                      <Zap className="w-3.5 h-3.5 text-cyan-500" />
                      <span> {activePhase.duration} CYCLE</span>
                    </div>
                    <span className="text-3xl font-black text-cyan-600/30 tracking-tight select-none">
                      P{activePhase.num}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div className="relative z-10 mb-8 flex flex-col items-start">
                    <h4 className="font-extrabold text-xs sm:text-sm tracking-[2px] uppercase mb-2 text-blue">
                      PROJECT PHASE: {activePhase.num}
                    </h4>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#051329] tracking-[1px] uppercase leading-snug mb-5">
                      {activePhase.title}
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal tracking-[0.5px]">
                      {activePhase.description}
                    </p>
                  </div>

                  {/* Industrial Identifier base accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue via-cyan-400 to-blue pointer-events-none" />
                </motion.div>
              ) : (
                // Desktop Placeholder if none is explicitly hovered
                <div className="hidden lg:flex flex-col items-center text-center max-w-sm text-gray-500 gap-4 select-none">
                   <div className="p-4 rounded-full bg-slate-100 border border-gray-200">
                      <DraftingCompass className="w-10 h-10 text-gray-400" />
                   </div>
                   <p className="text-sm font-medium tracking-[0.5px]">
                      Hover over any phase on the left matrix to explore the industrial lifecycle metrics.
                   </p>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </section>

      {/* Helper Shimmer Keyframes */}
      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.8s infinite;
        }
      `}</style>
    </div>
  );
}