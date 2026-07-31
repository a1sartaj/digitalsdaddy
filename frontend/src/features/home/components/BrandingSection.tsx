"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Sparkles,
    ArrowRight,
    Play,
    CheckCircle2,
} from "lucide-react";
import { brandingData } from "@/assets/data/home/branding";

export default function BrandingSection() {
    const [isPlaying, setIsPlaying] = useState(false);

    // Deriving high-res YouTube original thumbnail directly from video ID
    const originalYoutubeThumbnail = `https://img.youtube.com/vi/${brandingData.video.youtubeId}/maxresdefault.jpg`;

    return (
        <section className="relative py-20 lg:py-28 overflow-hidden bg-[var(--background)] transition-colors duration-300 select-none">

            {/* Background Ambient Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#355396]/15 blur-[180px] pointer-events-none rounded-full" />
            <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#a67c00]/10 blur-[150px] pointer-events-none rounded-full" />

            {/* Constraints: Max-width 1440px / max-w-360, Padding: px-4 lg:px-8 */}
            <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 relative z-10 space-y-12 sm:space-y-16">

                {/* Section Header */}
                <header className="text-center max-w-3xl mx-auto space-y-4">
                    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#a67c00]/10 border border-[#a67c00]/30 text-[#a67c00]">
                        <Sparkles className="w-3.5 h-3.5 text-[#a67c00] animate-pulse" />
                        <span className="text-[14px] font-medium tracking-[2px] uppercase">
                            {brandingData.badge.label}
                        </span>
                        <span className="h-3.5 w-[1px] bg-[#a67c00]/30" />
                        <span className="text-[14px] font-semibold text-[#a67c00] tracking-[1.5px] uppercase">
                            {brandingData.badge.aiHighlight}
                        </span>
                    </div>

                    <h2 className="text-[28px] sm:text-[38px] lg:text-[48px] font-semibold tracking-[1px] text-[var(--foreground)] leading-[1.18]">
                        {brandingData.title.prefix}{" "}
                        <span className="text-[#a67c00]">
                            {brandingData.title.highlight}
                        </span>{" "}
                        {brandingData.title.suffix}
                    </h2>

                    <p className="text-[14px] sm:text-[16px] text-[var(--muted-text)] font-normal leading-relaxed max-w-2xl mx-auto tracking-[0.5px]">
                        {brandingData.subtitle}
                    </p>
                </header>

                {/* ──── VIDEO PLAYER WORKSPACE ──── */}
                <div className="max-w-5xl mx-auto">
                    <div className="relative rounded-3xl overflow-hidden  shadow-2xl group">

                        <AnimatePresence mode="wait">
                            {!isPlaying ? (
                                /* THUMBNAIL COVER STATE USING ORIGINAL YOUTUBE THUMBNAIL */
                                <motion.div
                                    key="thumbnail"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative w-full aspect-video flex items-center justify-center cursor-pointer"
                                    onClick={() => setIsPlaying(true)}
                                >
                                    {/* Original YouTube Thumbnail */}
                                    <Image
                                        src={brandingData.video.thumbnail ? brandingData.video.thumbnail : originalYoutubeThumbnail}
                                        alt={brandingData.video.title}
                                        fill
                                        priority
                                        unoptimized
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-100 group-hover:opacity-100"
                                    />

                                    {/* Dark Vignette Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/20" />

                                    {/* CENTER CUSTOM PLAY BUTTON OVERLAY */}
                                    <div className="relative z-10 flex flex-col items-center gap-4">
                                        <div className="relative flex items-center justify-center">
                                            {/* Pulse Effect Rings */}
                                            <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#a67c00]/40 animate-ping pointer-events-none" />
                                            <span className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#355396]/30 pointer-events-none" />

                                            {/* Play Button Circle */}
                                            <button
                                                type="button"
                                                aria-label="Play Brand Video"
                                                className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#a67c00] hover:bg-[#8e6900] text-white flex items-center justify-center shadow-xl shadow-[#a67c00]/40 transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                                            >
                                                <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-white text-white ml-1" />
                                            </button>
                                        </div>

                                        <span className="text-white text-[14px] font-semibold tracking-[1.5px] uppercase bg-black/50 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                                            Click To Play Video
                                        </span>
                                    </div>

                                    {/* Bottom Video Title Strip */}
                                    <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                                        <h3 className="text-[16px] sm:text-[20px] font-semibold tracking-[0.5px]">
                                            {brandingData.video.title}
                                        </h3>
                                    </div>
                                </motion.div>
                            ) : (
                                /* EMBEDDED YOUTUBE IFRAME STATE */
                                <motion.div
                                    key="iframe"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative w-full aspect-video"
                                >
                                    <iframe
                                        src={`https://www.youtube-nocookie.com/embed/${brandingData.video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                                        title={brandingData.video.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        className="w-full h-full border-0"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>
                </div>

                {/* Brand Feature Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-4">
                    {brandingData.features.map((feat) => (
                        <div
                            key={feat.title}
                            className="p-5 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] flex items-start gap-3"
                        >
                            <CheckCircle2 className="w-5 h-5 text-[#a67c00] shrink-0 mt-0.5" />
                            <div className="space-y-1">
                                <h4 className="text-[14px] font-semibold text-[var(--foreground)] tracking-[0.5px]">
                                    {feat.title}
                                </h4>
                                <p className="text-[12px] text-[var(--muted-text)] font-normal leading-relaxed tracking-[0.5px]">
                                    {feat.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Standard CTA Button: Uses px-8 py-4 padding */}
                <div className="text-center pt-2">
                    <Link
                        href={brandingData.cta.href}
                        className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#a67c00] hover:bg-[#8e6900] text-white font-semibold text-[14px] tracking-[2px] uppercase shadow-lg shadow-[#a67c00]/20 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
                    >
                        <span>{brandingData.cta.label}</span>
                        <ArrowRight className="w-4 h-4 text-white transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

            </div>
        </section>
    );
}