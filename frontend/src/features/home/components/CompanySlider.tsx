"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Building2, Sparkles } from "lucide-react";
import { sliderData } from "@/assets/data/home/slider";

// Import Swiper required CSS styles
import "swiper/css";

export default function Slider() {
    return (
        <section className="relative py-16 lg:py-20 overflow-hidden bg-[var(--background)] border-y border-[var(--card-border)] transition-colors duration-300 select-none">

            {/* Background Ambient Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-[#355396]/10 blur-[100px] pointer-events-none rounded-full" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[200px] bg-[#a67c00]/10 blur-[120px] pointer-events-none rounded-full" />

            {/* Constraints: Max-width 1440px / max-w-360, Padding: px-4 lg:px-8 */}
            <div className="max-w-[1440px] mx-auto px-4 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#a67c00]/10 border border-[#a67c00]/30 text-[#a67c00]">
                        <Sparkles className="w-3.5 h-3.5 text-[#a67c00] animate-pulse" />
                        <span className="text-[14px] font-medium tracking-[2px] uppercase">
                            {sliderData.badge}
                        </span>
                    </div>

                    <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-semibold text-[var(--foreground)] tracking-[1px] leading-[1.2]">
                        {sliderData.title.prefix}{" "}
                        <span className="text-[#a67c00]">
                            {sliderData.title.highlight}
                        </span>{" "}
                        {sliderData.title.suffix}
                    </h2>
                </div>

                {/* Swiper Continuous Slider */}
                <div className="relative">
                    {/* Gradient Overlay Edges for Smooth Fade Effect */}
                    <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={24}
                        slidesPerView={2}
                        loop={true}
                        speed={4000} // Continuous smooth glide speed
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 3, spaceBetween: 28 },
                            1024: { slidesPerView: 4, spaceBetween: 32 },
                            1280: { slidesPerView: 5, spaceBetween: 36 },
                        }}
                        className="w-full !timing-function-linear"
                    >
                        {sliderData.companies.map((company, index) => (
                            <SwiperSlide key={`${company.slug}-${index}`}>
                                {company.logo ? (
                                    /* 1. LOGO ONLY DESIGN (Increased Height & Full-Fitting Relative Div) */
                                    <div className="h-20   rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[#355396] transition-all duration-300 shadow-sm flex items-center justify-center group cursor-pointer">
                                        <div className="relative w-full h-full flex items-center justify-center">
                                            <Image
                                                src={company.logo}
                                                alt={`${company.name} logo`}
                                                fill
                                                className="object-contain group-hover:scale-105 transition-all duration-300 p-1"
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    /* 2. TEXT & ICON FALLBACK DESIGN */
                                    <div className="h-20  p-5 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[#355396] transition-all duration-300 shadow-sm flex items-center gap-3.5 group cursor-pointer">
                                        <div className="p-2.5 rounded-xl bg-[#355396]/10 text-[#355396] group-hover:scale-110 transition-transform flex-shrink-0">
                                            <Building2 className="w-5 h-5" />
                                        </div>
                                        <div className="overflow-hidden">
                                            <h3 className="text-[14px] font-semibold text-[var(--foreground)] group-hover:text-[#355396] transition-colors truncate tracking-[0.5px]">
                                                {company.name}
                                            </h3>
                                            <p className="text-[14px] text-[var(--muted-text)] truncate tracking-[0.5px]">
                                                Trusted Client
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>

            {/* Inline Linear Easing Overrides for Swiper Glide */}
            <style jsx global>{`
        .swiper-wrapper {
          -webkit-transition-timing-function: linear !important;
          -o-transition-timing-function: linear !important;
          transition-timing-function: linear !important;
        }
      `}</style>
        </section>
    );
}