"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { keyFactData } from "./keyFactData";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import ParallaxShape from "@/components/common/ParallaxShape";
import Reveal from "@/components/common/Reveal";

// Import structural vectors safely
import shape2 from "@/assets/images/Join-shape/join-shape-right-green.svg";

export default function KeyFact() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const setupSnaps = () => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
  };

  useEffect(() => {
    if (!emblaApi) return;

    setupSnaps();

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    const onReInit = () => {
      setupSnaps();
      onSelect();
    };

    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("reInit", onReInit);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("reInit", onReInit);
    };
  }, [emblaApi]);

  return (
    <ParallaxContainer>
      {/* ─── 🏛️ MODERN HYPER-GRID CONTEXT CANVAS ─── */}
      <div className="relative w-full overflow-hidden bg-[#051329] py-20 lg:py-32 border-b border-white/10 select-none isolate">
        
        {/* 🌀 BACKGROUND WATERMARK VECTOR ENGINE */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
          <div className="absolute inset-0 bg-white/[0.015] bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          <div className="hidden sm:block absolute left-[-10%] top-[-10%] opacity-[0.03] scale-[2.5] z-0">
            <ParallaxShape speed={3}>
              <Image src={shape2} alt="" aria-hidden="true" priority className="object-contain" />
            </ParallaxShape>
          </div>

          <div className="hidden sm:block absolute bottom-[-10%] right-[-10%] opacity-[0.03] scale-[2] z-0">
            <ParallaxShape speed={6}>
              <Image src={shape2} alt="" aria-hidden="true" priority className="object-contain" />
            </ParallaxShape>
          </div>
        </div>

        {/* Ambient Cyan Radial Light Flare */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none z-0" />

        <section className="mx-auto w-full max-w-[1600px] px-4 sm:px-8 lg:px-16 relative z-10">

          {/* ──── UPPER INTERFACE ROW: MASTER HEADINGS & CONTROLS ──── */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-12 lg:mb-16 w-full">
            <div className="text-left max-w-4xl">
              <Reveal>
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-blue/10 border border-blue/20 rounded-full mb-5">
                  <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-cyan-300">
                    DATA & METRICS
                  </span>
                </div>
              </Reveal>
              <Reveal direction="bottom" duration={400} delay={50}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.15] text-white tracking-[1.5px]">
                  Our clients and partners trust us to deliver beyond their expectations.
                </h2>
              </Reveal>
            </div>

            {/* Desktop Carousel Navigation Controls */}
            <Reveal direction="left" duration={400} delay={100} wrapperClassName="hidden lg:flex items-center gap-3 shrink-0">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                aria-label="Previous Slide"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition-all duration-300 hover:bg-cyan-500 hover:text-[#051329] hover:border-cyan-400 cursor-pointer active:scale-90 shadow-lg"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                aria-label="Next Slide"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition-all duration-300 hover:bg-cyan-500 hover:text-[#051329] hover:border-cyan-400 cursor-pointer active:scale-90 shadow-lg"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </Reveal>
          </div>

          <div className="w-full h-[1px] bg-white/10 mb-10 lg:mb-14" />

          {/* ──── SLIDER CONTENT CONTAINER MATRIX ──── */}
          <div className="relative w-full min-w-0">
            <Reveal direction="bottom" duration={500} delay={150}>
              <div ref={emblaRef} className="overflow-hidden w-full min-w-0">
                <div className="flex select-none -ml-6">
                  {keyFactData.map((item) => (
                    <div
                      key={item.sr}
                      className="shrink-0 basis-full md:basis-1/2 pl-6 min-w-0 flex flex-col justify-between text-left group"
                    >
                      {/* Architectural Grid Card Deck */}
                      <div className="h-full p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-500 hover:border-cyan-400/50 hover:bg-white/[0.06] hover:shadow-2xl flex flex-col justify-between">
                        <div>
                          {/* Serial Counter Header */}
                          <div className="flex items-center justify-between mb-6">
                            <span className="text-sm font-black text-cyan-400 tracking-[2px]">
                              {item.sr}
                            </span>
                            <div className="h-[2.5px] w-8 bg-cyan-400/30 group-hover:w-16 group-hover:bg-cyan-400 transition-all duration-500 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                          </div>
                          
                          <h3 className="mb-4 text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-[1.5px] uppercase leading-snug">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm lg:text-base text-white/80 font-normal leading-relaxed tracking-[0.5px]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* ──── LOWER SUB-ROW TRACK CONTROLLER SURFACE ──── */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 w-full">
            
            {/* Mobile & Tablet Control Action Buttons */}
            <div className="flex items-center gap-3 lg:hidden order-2 sm:order-1">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                aria-label="Previous Slide"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition-all active:scale-90"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                aria-label="Next Slide"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition-all active:scale-90"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Progress Line Tracking Indicators */}
            <div className="flex items-center justify-center gap-2 order-1 sm:order-2 w-full sm:w-auto">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  title={`Go to slide ${index + 1}`}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                    selectedIndex === index 
                      ? "bg-cyan-400 w-10 sm:w-12 shadow-[0_0_12px_rgba(34,211,238,0.8)]" 
                      : "w-2.5 sm:w-3 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

          </div>

        </section>
      </div>
    </ParallaxContainer>
  );
}