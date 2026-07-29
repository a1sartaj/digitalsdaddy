"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView, Variants } from "framer-motion";

// Sub-component for individual counter ticking animation
function TickingNumber({ value, duration = 1.5 }: { value: number; duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const roundedValue = useTransform(motionValue, (latest) => Math.floor(latest));
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: duration,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, motionValue, value, duration]);

  useEffect(() => {
    return roundedValue.on("change", (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = latest.toLocaleString();
      }
    });
  }, [roundedValue]);

  return <span ref={nodeRef}>0</span>;
}

const statsData = [
  {
    prefix: "$",
    value: 30,
    suffix: "B",
    label: "Billion worth of flagship industrial projects delivered globally"
  },
  {
    prefix: "",
    value: 400,
    suffix: "+",
    label: "Multidisciplinary turnkey construction projects successfully completed"
  },
  {
    prefix: "",
    value: 200,
    suffix: "+",
    label: "High-Voltage & Extra-High-Voltage substations energized across Saudi Arabia"
  }
];

export default function GridStatsCounter() {

  // ─── STAGGER ENTRY CONFIGURATION ───
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const blockVariants: Variants = {
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
    /* ─── 🏛️ STATISTICS DASHBOARD BOARD ─── */
    <div className="w-full bg-white py-20 lg:py-32 overflow-hidden relative border-b border-gray-200/60 select-none">
      
      {/* 🛠️ UX MATRIX CONTAINER */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16">

        {/* Upper Identity Context Tag */}
        <div className="w-full text-left mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-blue/10 border border-blue/20 rounded-full shadow-sm">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-blue">
              SCALE & IMPACT
            </span>
          </div>
        </div>

        {/* Multi-Grid Stats Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={blockVariants}
              className="group flex flex-col justify-between items-start text-left p-6 sm:p-8 bg-slate-50/80 border border-gray-200/80 rounded-3xl shadow-sm hover:shadow-2xl hover:border-cyan-400/50 hover:bg-white hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              {/* Bottom Glowing Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-cyan-400 transition-colors duration-300" />
              
              {/* Counter Numeric Metric Wrapper */}
              <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#051329] tracking-tight mb-6 flex items-baseline gap-0.5 min-h-[60px] sm:min-h-[72px]">
                {stat.prefix && (
                  <span className="text-3xl sm:text-4xl lg:text-5xl text-blue font-bold mr-1 select-none">
                    {stat.prefix}
                  </span>
                )}
                
                <TickingNumber value={stat.value} duration={1.4} />

                {stat.suffix && (
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-600 ml-0.5 select-none">
                    {stat.suffix}
                  </span>
                )}
              </div>

              {/* Accompanying Description */}
              <h4 className="text-[#051329] font-black text-xs sm:text-sm lg:text-base leading-relaxed tracking-[1.5px] text-left mt-auto uppercase group-hover:text-blue transition-colors">
                {stat.label}
              </h4>
            </motion.div>
          ))}
        </motion.div>

      </section>
    </div>
  );
}