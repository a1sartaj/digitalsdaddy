"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";
import {
    Sparkles,
    ArrowRight,
    CheckCircle2,
    Users,
    TrendingUp,
    Code2,
} from "lucide-react";
import { statsData } from "@/assets/data/home/stats";

// Dynamic Icon Switcher
const renderStatIcon = (iconName: string, isGold: boolean) => {
    const iconProps = {
        className: `w-6 h-6 ${isGold ? "text-[#a67c00]" : "text-[#355396]"}`,
    };
    switch (iconName) {
        case "CheckCircle2":
            return <CheckCircle2 {...iconProps} />;
        case "Users":
            return <Users {...iconProps} />;
        case "TrendingUp":
            return <TrendingUp {...iconProps} />;
        case "Code2":
            return <Code2 {...iconProps} />;
        default:
            return <CheckCircle2 {...iconProps} />;
    }
};

// Animated Counter Sub-Component (0 -> Target)
function Counter({
    value,
    duration = 2.5,
    suffix = "",
}: {
    value: number;
    duration?: number;
    suffix?: string;
}) {
    const [count, setCount] = useState<number>(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;

        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);

            // Ease-out quad formula for smooth decelerating animation
            const easeOutValue = 1 - (1 - progress) * (1 - progress);
            setCount(Math.floor(easeOutValue * value));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                setCount(value);
            }
        };

        window.requestAnimationFrame(step);
    }, [isInView, value, duration]);

    return (
        <span ref={ref} className="inline-block">
            {count.toLocaleString()}
            {suffix}
        </span>
    );
}

export default function StatsSection() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.1 },
        },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <section className="relative py-20 lg:py-28 overflow-hidden bg-[var(--background)] transition-colors duration-300 select-none">

            {/* Background Lens Glow Highlights */}
            <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#355396]/10 blur-[160px] pointer-events-none rounded-full" />
            <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#a67c00]/10 blur-[150px] pointer-events-none rounded-full" />

            {/* Constraints: Max-width 1440px / max-w-360, Padding: px-4 lg:px-8 */}
            <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 relative z-10 space-y-12 sm:space-y-16">

                {/* Section Header */}
                <header className="text-center max-w-3xl mx-auto space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#a67c00]/10 border border-[#a67c00]/30 text-[#a67c00]"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-[#a67c00] animate-pulse" />
                        <span className="text-[14px] font-medium tracking-[2px] uppercase">
                            {statsData.badge.label}
                        </span>
                        <span className="h-3.5 w-[1px] bg-[#a67c00]/30" />
                        <span className="text-[14px] font-semibold text-[#a67c00] tracking-[1.5px] uppercase">
                            {statsData.badge.aiHighlight}
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[28px] sm:text-[38px] lg:text-[48px] font-semibold tracking-[1px] text-[var(--foreground)] leading-[1.18]"
                    >
                        {statsData.title.prefix}{" "}
                        <span className="text-[#a67c00]">
                            {statsData.title.highlight}
                        </span>{" "}
                        {statsData.title.suffix}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[14px] sm:text-[16px] text-[var(--muted-text)] font-normal leading-relaxed max-w-2xl mx-auto tracking-[0.5px]"
                    >
                        {statsData.subtitle}
                    </motion.p>
                </header>

                {/* STATS BENTO GRID WITH COUNT-UP ANIMATION */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                >
                    {statsData.metrics.map((metric) => {
                        const isGold = metric.accentHex === "#a67c00";

                        return (
                            <motion.article
                                key={metric.slug}
                                variants={cardVariants}
                                whileHover={{ y: -6 }}
                                className="group relative flex flex-col justify-between p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[#355396] transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden"
                            >
                                {/* Background Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#355396]/5 to-[#a67c00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="relative z-10 space-y-6">
                                    {/* Top Bar: Icon */}
                                    <div
                                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${isGold
                                                ? "bg-[#a67c00]/10 border border-[#a67c00]/20"
                                                : "bg-[#355396]/10 border border-[#355396]/20"
                                            }`}
                                    >
                                        {renderStatIcon(metric.iconName, isGold)}
                                    </div>

                                    {/* Animated Counter Number (Max Font Size Clamped to 48px) */}
                                    <div className="space-y-1">
                                        <div
                                            className={`text-[38px] sm:text-[44px] lg:text-[48px] font-semibold tracking-[1px] leading-none ${isGold ? "text-[#a67c00]" : "text-[#355396]"
                                                }`}
                                        >
                                            <Counter
                                                value={metric.numberValue}
                                                suffix={metric.suffix}
                                            />
                                        </div>

                                        <h3 className="text-[18px] sm:text-[20px] font-semibold text-[var(--foreground)] tracking-[0.5px] pt-1">
                                            {metric.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Subtitle / Subtext */}
                                <div className="relative z-10 pt-4 border-t border-[var(--card-border)] mt-6">
                                    <p className="text-[14px] text-[var(--muted-text)] font-normal leading-relaxed tracking-[0.5px]">
                                        {metric.subtitle}
                                    </p>
                                </div>
                            </motion.article>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
}