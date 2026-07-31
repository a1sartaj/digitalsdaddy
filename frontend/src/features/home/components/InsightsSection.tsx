"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
    Sparkles,
    ArrowRight,
    ArrowUpRight,
    Clock,
    Calendar,
    BookOpen,
} from "lucide-react";
import { insightsData } from "@/assets/data/home/insights";

export default function InsightsSection() {
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

            {/* Background Ambient Glows */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#355396]/10 blur-[160px] pointer-events-none rounded-full" />
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
                            {insightsData.badge.label}
                        </span>
                        <span className="h-3.5 w-[1px] bg-[#a67c00]/30" />
                        <span className="text-[14px] font-semibold text-[#a67c00] tracking-[1.5px] uppercase">
                            {insightsData.badge.aiHighlight}
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[28px] sm:text-[38px] lg:text-[48px] font-semibold tracking-[1px] text-[var(--foreground)] leading-[1.18]"
                    >
                        {insightsData.title.prefix}{" "}
                        <span className="text-[#a67c00]">
                            {insightsData.title.highlight}
                        </span>{" "}
                        {insightsData.title.suffix}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[14px] sm:text-[16px] text-[var(--muted-text)] font-normal leading-relaxed max-w-2xl mx-auto tracking-[0.5px]"
                    >
                        {insightsData.subtitle}
                    </motion.p>
                </header>

                {/* Dynamic Blog Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {insightsData.articles.map((article) => (
                        <motion.article
                            key={article.slug}
                            variants={cardVariants}
                            whileHover={{ y: -6 }}
                            className="group relative flex flex-col justify-between rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[#355396] transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden"
                        >
                            {/* Thumbnail Container */}
                            <div className="relative w-full h-[220px] bg-slate-900 overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                                />

                                {/* Ambient Image Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] via-transparent to-black/30 z-10" />

                                {/* Floating Top Badges */}
                                <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between gap-2">
                                    <span className="px-3 py-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-white text-[12px] font-medium tracking-[1.5px] uppercase">
                                        {article.category}
                                    </span>

                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#a67c00] text-white text-[12px] font-medium tracking-[1px]">
                                        <Sparkles className="w-3 h-3 text-white animate-pulse" />
                                        <span>{article.aiHighlightTag}</span>
                                    </span>
                                </div>
                            </div>

                            {/* Article Content Body */}
                            <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-6 relative z-20">
                                <div className="space-y-3">
                                    {/* Metadata Bar */}
                                    <div className="flex items-center gap-4 text-[13px] text-[var(--muted-text)] font-medium tracking-[0.5px]">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5 text-[#355396]" />
                                            <span>{article.publishedAt}</span>
                                        </div>
                                        <span className="h-3 w-[1px] bg-[var(--card-border)]" />
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-3.5 h-3.5 text-[#a67c00]" />
                                            <span>{article.readTime}</span>
                                        </div>
                                    </div>

                                    {/* Title & Link */}
                                    <h3 className="text-[18px] sm:text-[20px] font-semibold text-[var(--foreground)] tracking-[0.5px] leading-snug group-hover:text-[#355396] transition-colors duration-300">
                                        <Link href={`/blog/${article.slug}`}>
                                            {article.title}
                                        </Link>
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-[14px] text-[var(--muted-text)] font-normal leading-relaxed tracking-[0.5px] line-clamp-3">
                                        {article.excerpt}
                                    </p>
                                </div>

                                {/* Article Footer: Author Profile & Read Trigger */}
                                <div className="pt-4 border-t border-[var(--card-border)] flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-8 h-8 rounded-full bg-[#355396] text-white flex items-center justify-center text-[12px] font-semibold tracking-[0.5px]">
                                            {article.author.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[13px] font-semibold text-[var(--foreground)] tracking-[0.5px]">
                                                {article.author.name} <span className="text-[#a67c00]" >( Author )</span>
                                            </span>
                                            <span className="text-[11px] text-[var(--muted-text)] font-normal tracking-[0.5px]">
                                                {article.author.role}
                                            </span>
                                        </div>
                                    </div>

                                    <Link
                                        href={`/blog/${article.slug}`}
                                        aria-label={`Read ${article.title}`}
                                        className="w-9 h-9 rounded-xl bg-[var(--background)] border border-[var(--card-border)] flex items-center justify-center text-[var(--muted-text)] group-hover:bg-[#355396] group-hover:text-white group-hover:border-[#355396] transition-all duration-300"
                                    >
                                        <ArrowUpRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Standard CTA Button: Uses px-8 py-4 padding */}
                <div className="text-center pt-4">
                    <Link
                        href={insightsData.cta.href}
                        className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#a67c00] hover:bg-[#8e6900] text-white font-semibold text-[14px] tracking-[2px] uppercase shadow-lg shadow-[#a67c00]/20 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
                    >
                        <span>{insightsData.cta.label}</span>
                        <ArrowRight className="w-4 h-4 text-white transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

            </div>
        </section>
    );
}