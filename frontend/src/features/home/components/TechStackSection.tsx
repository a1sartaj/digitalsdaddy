"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Sparkles,
    ArrowRight,
    Cpu,
    Bot,
    Database,
    Terminal,
    Building,
    ShoppingCart,
    Cloud,
    CheckCircle2,
    Zap,
} from "lucide-react";
import { techStackData } from "@/assets/data/home/techstack";

// Category Icon Switcher
const renderCategoryIcon = (iconSlug: string) => {
    const iconProps = { className: "w-4 h-4 shrink-0" };
    switch (iconSlug) {
        case "frontier-llms-foundation-models":
            return <Cpu {...iconProps} />;
        case "ai-agents-orchestration":
            return <Bot {...iconProps} />;
        case "vector-search-rag":
            return <Database {...iconProps} />;
        case "ml-deep-learning-ops":
            return <Terminal {...iconProps} />;
        case "enterprise-erp-crm-automation":
            return <Building {...iconProps} />;
        case "e-commerce-headless-stack":
            return <ShoppingCart {...iconProps} />;
        case "cloud-devops-infrastructure":
            return <Cloud {...iconProps} />;
        default:
            return <Cpu {...iconProps} />;
    }
};

export default function TechStackSection() {
    const [activeCategorySlug, setActiveCategorySlug] = useState<string>(
        techStackData.categories[0].slug
    );

    const activeCategory =
        techStackData.categories.find((c) => c.slug === activeCategorySlug) ||
        techStackData.categories[0];

    const aiHighlightCount = activeCategory.items.filter(
        (item) => item.isAiHighlight
    ).length;

    return (
        <section className="relative py-20 lg:py-28 overflow-hidden bg-[var(--background)] transition-colors duration-300 select-none">

            {/* Background Ambient Glows */}
            <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#355396]/10 blur-[160px] pointer-events-none rounded-full" />
            <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#a67c00]/10 blur-[150px] pointer-events-none rounded-full" />

            {/* Constraints: Max-width 1440px / max-w-360, Padding: px-4 lg:px-8 */}
            <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 relative z-10 space-y-12 sm:space-y-16">

                {/* Section Header */}
                <header className="text-center max-w-3xl mx-auto space-y-4">
                    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#a67c00]/10 border border-[#a67c00]/30 text-[#a67c00]">
                        <Sparkles className="w-3.5 h-3.5 text-[#a67c00] animate-pulse" />
                        <span className="text-[14px] font-medium tracking-[2px] uppercase">
                            {techStackData.badge.label}
                        </span>
                        <span className="h-3.5 w-[1px] bg-[#a67c00]/30" />
                        <span className="text-[14px] font-semibold text-[#a67c00] tracking-[1.5px] uppercase">
                            {techStackData.badge.aiHighlight}
                        </span>
                    </div>

                    <h2 className="text-[28px] sm:text-[38px] lg:text-[48px] font-semibold tracking-[1px] text-[var(--foreground)] leading-[1.18]">
                        {techStackData.title.prefix}{" "}
                        <span className="text-[#a67c00]">
                            {techStackData.title.highlight}
                        </span>{" "}
                        {techStackData.title.suffix}
                    </h2>

                    <p className="text-[14px] sm:text-[16px] text-[var(--muted-text)] font-normal leading-relaxed max-w-2xl mx-auto tracking-[0.5px]">
                        {techStackData.subtitle}
                    </p>
                </header>

                {/* ──── REDESIGNED MAIN WORKSPACE: SIDEBAR + SPOTLIGHT GRID ──── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* LEFT SIDEBAR: CATEGORY NAVIGATOR (4 COLS) */}
                    <div className="lg:col-span-4 flex flex-col gap-2.5 overflow-x-auto lg:overflow-visible pb-2 no-scrollbar">
                        {techStackData.categories.map((cat) => {
                            const isSelected = cat.slug === activeCategorySlug;
                            const catAiCount = cat.items.filter((i) => i.isAiHighlight).length;

                            return (
                                <button
                                    key={cat.slug}
                                    type="button"
                                    onClick={() => setActiveCategorySlug(cat.slug)}
                                    className={`group relative flex items-center justify-between p-4 rounded-2xl text-left transition-all duration-300 shrink-0 cursor-pointer ${isSelected
                                            ? "bg-[#355396] text-white shadow-xl shadow-[#355396]/20 border border-[#355396]"
                                            : "bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--muted-text)] hover:border-[#355396]/50 hover:text-[var(--foreground)]"
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={`p-2 rounded-xl transition-colors ${isSelected
                                                    ? "bg-white/10 text-white"
                                                    : "bg-[#355396]/10 text-[#355396]"
                                                }`}
                                        >
                                            {renderCategoryIcon(cat.slug)}
                                        </div>
                                        <span className="text-[14px] font-semibold tracking-[0.5px]">
                                            {cat.categoryName}
                                        </span>
                                    </div>

                                    {catAiCount > 0 && (
                                        <span
                                            className={`text-[12px] font-medium px-2.5 py-0.5 rounded-full ${isSelected
                                                    ? "bg-[#a67c00] text-white"
                                                    : "bg-[#a67c00]/10 text-[#a67c00] border border-[#a67c00]/30"
                                                }`}
                                        >
                                            {catAiCount} AI
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* RIGHT DISPLAY: SPOTLIGHT BENTO BOARD (8 COLS) */}
                    <div className="lg:col-span-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory.slug}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="p-6 sm:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] shadow-xl relative overflow-hidden space-y-8"
                            >
                                {/* Category Banner Header */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--card-border)]">
                                    <div className="space-y-1">
                                        <div className="inline-flex items-center gap-2 text-[14px] font-medium text-[#a67c00] tracking-[1.5px] uppercase">
                                            <Zap className="w-4 h-4 text-[#a67c00]" />
                                            <span>{activeCategory.categoryBadge}</span>
                                        </div>
                                        <h3 className="text-[22px] sm:text-[26px] font-semibold text-[var(--foreground)] tracking-[1px]">
                                            {activeCategory.categoryName}
                                        </h3>
                                    </div>

                                    {aiHighlightCount > 0 && (
                                        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#a67c00]/10 border border-[#a67c00]/30 text-[#a67c00] text-[14px] font-medium tracking-[1px] shrink-0">
                                            <Sparkles className="w-3.5 h-3.5 text-[#a67c00]" />
                                            <span>{aiHighlightCount} Frontier Trends Featured</span>
                                        </div>
                                    )}
                                </div>

                                <p className="text-[14px] text-[var(--muted-text)] font-normal leading-relaxed tracking-[0.5px]">
                                    {activeCategory.description}
                                </p>

                                {/* Tech Cards Grid */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {activeCategory.items.map((tech) => (
                                        <motion.div
                                            key={tech.name}
                                            whileHover={{ y: -4, scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                            className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center text-center gap-2.5 relative overflow-hidden group ${tech.isAiHighlight
                                                    ? "bg-gradient-to-b from-[#a67c00]/15 to-transparent border-[#a67c00]/40 text-[#a67c00] shadow-sm"
                                                    : "bg-[var(--background)] border-[var(--card-border)] text-[var(--foreground)] hover:border-[#355396] hover:shadow-md"
                                                }`}
                                        >
                                            {tech.isAiHighlight ? (
                                                <Sparkles className="w-5 h-5 text-[#a67c00] shrink-0 animate-pulse" />
                                            ) : (
                                                <CheckCircle2 className="w-5 h-5 text-[#355396] shrink-0 group-hover:scale-110 transition-transform" />
                                            )}

                                            <span className="text-[14px] font-medium tracking-[0.5px] leading-tight">
                                                {tech.name}
                                            </span>

                                            {tech.isAiHighlight && (
                                                <span className="text-[10px] font-semibold tracking-[1px] uppercase bg-[#a67c00] text-white px-2 py-0.5 rounded-full">
                                                    TOP TREND
                                                </span>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

                {/* Standard CTA Button: Uses px-8 py-4 padding */}
                <div className="text-center pt-4">
                    <Link
                        href={techStackData.cta.href}
                        className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#a67c00] hover:bg-[#8e6900] text-white font-semibold text-[14px] tracking-[2px] uppercase shadow-lg shadow-[#a67c00]/20 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
                    >
                        <span>{techStackData.cta.label}</span>
                        <ArrowRight className="w-4 h-4 text-white transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

            </div>
        </section>
    );
}