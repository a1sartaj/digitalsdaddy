"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const socialChannels = [
    {
        name: "Facebook", handle: "@alfanarpower", url: "#", icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
        )
    },
    {
        name: "X (Twitter)", handle: "@alfanarpower", url: "#", icon: (
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        )
    },
    {
        name: "LinkedIn", handle: "@alfanarpower", url: "#", icon: (
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        )
    },
    {
        name: "Instagram", handle: "@alfanarpower", url: "#", icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
        )
    },
    {
        name: "YouTube", handle: "@alfanarpower", url: "#", icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        )
    }
];

export default function SocialMediaChannels() {

    // ─── STAGGER VISUAL ENTRY ANIMS WITH PRECISE TYPES ───
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.06
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
        /* ─── 🏛️ MODERN HYPER-GRID INFRASTRUCTURE CHANNELS SURFACE ─── */
        <div className="w-full bg-white py-20 lg:py-32 overflow-hidden relative border-b border-gray-200/60 isolate select-none">

            {/* 🛠️ UX MATRIX CONTAINER */}
            <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full flex flex-col items-start text-left"
                >
                    {/* Identity Context Tagline Accent */}
                    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-blue/10 border border-blue/20 rounded-full mb-6 shadow-sm">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-blue">
                            SOCIAL MEDIA CHANNELS
                        </span>
                    </div>

                    {/* Master Headline Title */}
                    <motion.h2
                        variants={fadeInUpVariants}
                        className="text-[#051329] font-black text-3xl sm:text-4xl lg:text-5xl tracking-[1.5px] leading-tight mb-6 uppercase"
                    >
                        Follow us on <span className="text-blue">social media.</span>
                    </motion.h2>

                    {/* Section Summary Narrative */}
                    <motion.p
                        variants={fadeInUpVariants}
                        className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal tracking-[0.5px] max-w-2xl mb-12"
                    >
                        Join our social communities for the latest news, industrial developments, and a sneak peek at our offices, flagship project sites, and global execution teams.
                    </motion.p>

                    {/* ──── SOCIAL LINKS MATRICES ARCHITECTURE GRID ──── */}
                    <motion.div
                        variants={fadeInUpVariants}
                        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6 select-none"
                    >
                        {socialChannels.map((item) => (
                            <a
                                key={item.name}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-full p-5 bg-slate-50/80 border border-gray-200/80 rounded-2xl flex items-center justify-between gap-4 transition-all duration-300 hover:border-cyan-400/60 hover:shadow-xl hover:bg-white"
                            >
                                <div className="flex items-center gap-4">
                                    {/* Rounded Adaptive Icon Bullet Circle */}
                                    <div className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center bg-white text-gray-500 group-hover:bg-blue group-hover:text-white group-hover:border-blue transition-all duration-300 shrink-0 shadow-sm">
                                        {item.icon}
                                    </div>

                                    {/* Text Channels Identity Metadata */}
                                    <div className="flex flex-col text-left">
                                        <span className="text-[10px] font-bold text-gray-400 tracking-[1.5px] uppercase mb-0.5">
                                            {item.name}
                                        </span>
                                        <span className="text-[#051329] font-black text-sm tracking-[0.5px] group-hover:text-blue transition-colors truncate max-w-[150px] sm:max-w-[180px]">
                                            {item.handle}
                                        </span>
                                    </div>
                                </div>

                                {/* Diagonal Dynamic Action Bullet Indicator */}
                                <div className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 bg-white opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-blue group-hover:border-blue transition-all duration-300 shadow-inner">
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </a>
                        ))}
                    </motion.div>

                </motion.div>

            </section>
        </div>
    );
}