"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
    Sparkles,
    ArrowRight,
    Bot,
    Zap,
    TrendingUp,
    ShieldCheck,
    Cpu,
} from "lucide-react";
import { whyChooseUsData } from "@/assets/data/home/whychooseus";

const renderAiIcon = (iconName: string, isGold: boolean) => {
    const iconProps = {
        className: `w-5 h-5 ${isGold ? "text-[#a67c00]" : "text-[#355396]"}`,
    };
    switch (iconName) {
        case "Bot":
            return <Bot {...iconProps} />;
        case "Zap":
            return <Zap {...iconProps} />;
        case "TrendingUp":
            return <TrendingUp {...iconProps} />;
        case "ShieldCheck":
            return <ShieldCheck {...iconProps} />;
        default:
            return <Cpu {...iconProps} />;
    }
};

export default function WhyChooseUsSection() {
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
            <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#355396]/10 blur-[150px] pointer-events-none rounded-full" />
            <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#a67c00]/10 blur-[140px] pointer-events-none rounded-full" />

            <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
                <header className="text-center max-w-3xl mx-auto space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#a67c00]/10 border border-[#a67c00]/30 text-[#a67c00]"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-[#a67c00] animate-pulse" />
                        <span className="text-[14px] font-medium tracking-[2px] uppercase">
                            {whyChooseUsData.badge.label}
                        </span>
                        <span className="h-3.5 w-[1px] bg-[#a67c00]/30" />
                        <span className="text-[14px] font-semibold text-[#a67c00] tracking-[1.5px] uppercase">
                            {whyChooseUsData.badge.aiHighlight}
                        </span>
                    </motion.div>

                    {/* Dynamic Prefix, Highlight, & Suffix Title Rendering */}
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[28px] sm:text-[38px] lg:text-[48px] font-semibold tracking-[1px] text-[var(--foreground)] leading-[1.18]"
                    >
                        {whyChooseUsData.title.prefix}{" "}
                        <span className="text-[#a67c00]">
                            {whyChooseUsData.title.highlight}
                        </span>{" "}
                        {whyChooseUsData.title.suffix}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[14px] sm:text-[16px] text-[var(--muted-text)] font-normal leading-relaxed max-w-2xl mx-auto tracking-[0.5px]"
                    >
                        {whyChooseUsData.subtitle}
                    </motion.p>
                </header>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                >
                    {whyChooseUsData.features.map((feature) => {
                        const isGold = feature.accentHex === "#a67c00";

                        return (
                            <motion.article
                                key={feature.slug}
                                variants={cardVariants}
                                whileHover={{ y: -5 }}
                                className="group relative flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[#355396] transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#355396]/5 to-[#a67c00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="relative z-10 space-y-5">
                                    <div className="flex items-center justify-between gap-3">
                                        <div
                                            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${isGold
                                                    ? "bg-[#a67c00]/10 border border-[#a67c00]/20"
                                                    : "bg-[#355396]/10 border border-[#355396]/20"
                                                }`}
                                        >
                                            {renderAiIcon(feature.iconName, isGold)}
                                        </div>

                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#a67c00]/10 border border-[#a67c00]/30 text-[#a67c00] text-[14px] font-medium tracking-[1.5px] uppercase">
                                            <Sparkles className="w-3 h-3 text-[#a67c00]" />
                                            {feature.aiTrendBadge}
                                        </span>
                                    </div>

                                    <div className="space-y-2">
                                        <h3
                                            className={`text-[20px] sm:text-[22px] font-semibold tracking-[1px] transition-colors duration-300 ${isGold ? "text-[#a67c00]" : "text-[#355396]"
                                                }`}
                                        >
                                            {feature.title}
                                        </h3>

                                        <p className="text-[14px] text-[var(--muted-text)] font-normal leading-relaxed tracking-[0.5px]">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="relative z-10 pt-6 border-t border-[var(--card-border)] mt-6 flex items-center justify-between">
                                    <span className="text-[14px] font-medium uppercase tracking-[1.5px] text-[var(--foreground)]">
                                        Proven Impact:
                                    </span>
                                    <span className="text-[14px] font-semibold text-[#a67c00] tracking-[1px]">
                                        {feature.impactMetric}
                                    </span>
                                </div>
                            </motion.article>
                        );
                    })}
                </motion.div>

                <div className="text-center pt-4">
                    <Link
                        href={whyChooseUsData.cta.href}
                        className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#a67c00] hover:bg-[#8e6900] text-white font-semibold text-[14px] tracking-[2px] uppercase shadow-lg shadow-[#a67c00]/20 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
                    >
                        <span>{whyChooseUsData.cta.label}</span>
                        <ArrowRight className="w-4 h-4 text-white transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}