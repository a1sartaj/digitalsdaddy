"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { MapPin, Globe, Building2, Layers, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import mapImage from "@/assets/images/group-structure/globla-map.webp";

interface LocationHub {
  id: string;
  name: string;
  country: string;
  role: string;
  projects: string;
  top: string;
  left: string;
  isHQ?: boolean;
}

export default function GlobalOperationsMap() {
  const [activeHub, setActiveHub] = useState<LocationHub | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const locations: LocationHub[] = [
    {
      id: "riyadh",
      name: "Riyadh",
      country: "Kingdom of Saudi Arabia",
      role: "Global Corporate Headquarters & Main Manufacturing Hub",
      projects: "300+ Mega Utilities & Grid Substations",
      top: "47%",
      left: "55.5%",
      isHQ: true,
    },
    {
      id: "london",
      name: "London",
      country: "United Kingdom",
      role: "European SAF & Tech Innovation Center",
      projects: "Lighthouse Green Fuels & Renewable Energy",
      top: "32%",
      left: "45.8%",
    },
    {
      id: "madrid",
      name: "Madrid",
      country: "Spain",
      role: "Global Renewable Energy Development Division",
      projects: "Utility-Scale Wind & Solar IPP Infrastructure",
      top: "37.5%",
      left: "43.8%",
    },
    {
      id: "dubai",
      name: "Dubai",
      country: "United Arab Emirates",
      role: "GCC Regional Commercial & EPC Operations",
      projects: "High-Voltage Substations & Power Distribution",
      top: "48.5%",
      left: "60.2%",
    },
    {
      id: "delhi",
      name: "New Delhi",
      country: "India",
      role: "Engineering, R&D & Software Development Center",
      projects: "Smart Grid Software & High-Tech Design",
      top: "51%",
      left: "68%",
    },
    {
      id: "seasia",
      name: "South East Asia",
      country: "Regional Network",
      role: "Logistics, Supply Chain & Project Management",
      projects: "Clean Energy Equipment Sourcing & Distribution",
      top: "58.5%",
      left: "76.5%",
    },
  ];

  const handlePinMouseEnter = (e: React.MouseEvent<HTMLDivElement>, loc: LocationHub) => {
    setActiveHub(loc);
    if (mapContainerRef.current) {
      const parentRect = mapContainerRef.current.getBoundingClientRect();
      const pinRect = e.currentTarget.getBoundingClientRect();

      setTooltipPos({
        x: pinRect.left - parentRect.left + pinRect.width / 2,
        y: pinRect.top - parentRect.top,
      });
    }
  };

  const handlePinMouseLeave = () => {
    setActiveHub(null);
    setTooltipPos(null);
  };

  return (
    <div 
      ref={mapContainerRef} 
      className="relative w-full overflow-hidden rounded-3xl bg-[#051329] border border-white/15 shadow-2xl select-none group"
    >
      
      {/* ──── ZOOM PAN PINCH ENGINE WRAPPER ──── */}
      <TransformWrapper
        initialScale={1}
        minScale={1}
        maxScale={4}
        centerOnInit={true}
        wheel={{ step: 0.1 }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            {/* 🛠️ TOP RIGHT FLOATING CONTROLS DOCK */}
            <div className="absolute top-4 right-4 z-30 flex items-center gap-2 bg-[#051329]/80 backdrop-blur-md p-1.5 rounded-2xl border border-white/15 shadow-lg">
              <button
                type="button"
                onClick={() => zoomIn()}
                aria-label="Zoom In"
                className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-cyan-500 hover:text-[#051329] hover:border-cyan-400 transition-all active:scale-90 cursor-pointer"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => zoomOut()}
                aria-label="Zoom Out"
                className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-cyan-500 hover:text-[#051329] hover:border-cyan-400 transition-all active:scale-90 cursor-pointer"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <div className="w-[1px] h-5 bg-white/15 mx-0.5" />
              <button
                type="button"
                onClick={() => resetTransform()}
                aria-label="Reset Zoom"
                className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-cyan-500 hover:text-[#051329] hover:border-cyan-400 transition-all active:scale-90 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* TOP LEFT HELPER BADGE */}
            <div className="absolute top-4 left-4 z-20 hidden sm:flex items-center gap-2 bg-[#051329]/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15 text-white text-[10px] font-bold tracking-[1.5px] uppercase">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
              <span>USE MOUSE WHEEL / DRAG TO ZOOM & PAN MAP</span>
            </div>

            {/* ──── TRANSFORMABLE CANVAS AREA (FIXED TYPESCRIPT PROPS) ──── */}
            <TransformComponent wrapperClass="!w-full !h-full" contentClass="!w-full !h-full">
              <div className="relative w-full h-full aspect-[3/2] min-h-[380px]">
                
                {/* 1. BACKGROUND MAP IMAGE */}
                <Image
                  src={mapImage}
                  alt="Alfanar Power Global Operations Matrix Map"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 1200px"
                  className="object-cover"
                />

                {/* 2. ABSOLUTE INTERACTIVE PINS OVERLAY */}
                {locations.map((loc) => {
                  const isHovered = activeHub?.id === loc.id;

                  return (
                    <div
                      key={loc.id}
                      style={{ top: loc.top, left: loc.left }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                      onMouseEnter={(e) => handlePinMouseEnter(e, loc)}
                      onMouseLeave={handlePinMouseLeave}
                    >
                      {/* Pulsing Outer Ring */}
                      <div
                        className={`absolute inset-0 rounded-full transition-all duration-300 ${
                          loc.isHQ
                            ? "w-8 h-8 -top-2 -left-2 bg-cyan-400/40 animate-ping"
                            : isHovered
                            ? "w-6 h-6 -top-1 -left-1 bg-cyan-400/50 animate-pulse"
                            : "w-4 h-4 bg-cyan-400/20"
                        }`}
                      />

                      {/* Pin Core Center Indicator */}
                      <div
                        className={`relative rounded-full flex items-center justify-center transition-all duration-300 ${
                          loc.isHQ
                            ? "w-5 h-5 bg-cyan-400 border-2 border-white shadow-[0_0_15px_rgba(34,211,238,1)] scale-110"
                            : isHovered
                            ? "w-4 h-4 bg-cyan-300 border-2 border-white shadow-[0_0_12px_rgba(34,211,238,0.9)] scale-125"
                            : "w-3 h-3 bg-cyan-400 border border-white/80"
                        }`}
                      />
                    </div>
                  );
                })}

              </div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>

      {/* ──── 3. FIXED NON-SCALED TOOLTIP OVERLAY (UNTOUCHED BY ZOOM SCALE) ──── */}
      {activeHub && tooltipPos && (
        <div 
          style={{ 
            left: `${tooltipPos.x}px`, 
            top: `${tooltipPos.y - 12}px` 
          }}
          className="absolute -translate-x-1/2 -translate-y-full w-64 p-4 rounded-2xl bg-[#051329]/95 backdrop-blur-xl border border-cyan-400/50 shadow-2xl text-left z-50 pointer-events-none animate-fade-in"
        >
          {/* Title */}
          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/10">
            <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-[1px] leading-tight">
                {activeHub.name}
              </h4>
              <span className="text-[10px] font-bold text-cyan-300 block">
                {activeHub.country}
              </span>
            </div>
          </div>

          {/* Role */}
          <div className="flex items-start gap-2 mb-1.5 text-[11px] text-white/80">
            <Building2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
            <span className="leading-snug">{activeHub.role}</span>
          </div>

          {/* Projects */}
          <div className="flex items-start gap-2 text-[10px] text-gray-400">
            <Layers className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
            <span className="leading-snug">{activeHub.projects}</span>
          </div>

          {/* Pointer Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-8 border-transparent border-t-[#051329]" />
        </div>
      )}

    </div>
  );
}