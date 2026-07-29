"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, AlertCircle } from "lucide-react";

export default function NotFound() {
    return (
        <div className="relative min-h-[80vh] w-full flex items-center justify-center bg-[var(--background)] py-20 overflow-hidden select-none transition-colors duration-300">

            {/* Background Ambient Glows */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-[#355396]/10 blur-[160px] pointer-events-none rounded-full" />
            <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#a67c00]/10 blur-[140px] pointer-events-none rounded-full" />

            {/* Constraints: Max-width 1440px / max-w-360, Padding: px-4 lg:px-8 */}
            <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 relative z-10 text-center flex flex-col items-center justify-center space-y-6">

                {/* AI Highlight Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#a67c00]/10 border border-[#a67c00]/30 text-[#a67c00]"
                >
                    <Sparkles className="w-3.5 h-3.5 text-[#a67c00] animate-pulse" />
                    <span className="text-[14px] font-medium tracking-[2px] uppercase">
                        ERROR 404 · PAGE NOT FOUND
                    </span>
                </motion.div>

                {/* Massive 404 Code Display */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative inline-block"
                >
                    <span className="text-[48px] sm:text-[48px] md:text-[48px] font-semibold text-[#a67c00] tracking-[4px] leading-none block">
                        404
                    </span>
                    <div className="h-1 w-24 bg-[#355396] rounded-full mx-auto mt-2" />
                </motion.div>

                {/* Main Error Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="text-[28px] sm:text-[38px] lg:text-[48px] font-semibold tracking-[1px] text-[var(--foreground)] leading-[1.18] max-w-2xl"
                >
                    The Page You Are Looking For{" "}
                    <span className="text-[#355396]">Does Not Exist</span>
                </motion.h1>

                {/* Explanatory Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="text-[14px] sm:text-[16px] text-[var(--muted-text)] font-normal leading-relaxed max-w-md mx-auto tracking-[0.5px]"
                >
                    The link you followed may be broken, or the page has been moved to a new route within our platform.
                </motion.p>

                {/* Standard CTA Button: Uses px-8 py-4 padding */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="pt-4"
                >
                    <Link
                        href="/"
                        className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#a67c00] hover:bg-[#8e6900] text-white font-semibold text-[14px] tracking-[2px] uppercase shadow-lg shadow-[#a67c00]/20 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
                    >
                        <ArrowLeft className="w-4 h-4 text-white transform transition-transform duration-300 group-hover:-translate-x-1" />
                        <span>BACK TO HOME</span>
                    </Link>
                </motion.div>

            </div>
        </div>
    );
}