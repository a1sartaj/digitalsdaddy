"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
    Sparkles,
    ArrowRight,
    Star,
    Quote,
    TrendingUp,
    Building2,
    CheckCircle2,
} from "lucide-react";
import { testimonials } from "@/assets/data/home/testimonials";

export default function TestimonialsSection() {
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

            {/* Background Ambient Glow Highlights */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#355396]/10 blur-[160px] pointer-events-none rounded-full" />
            <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#a67c00]/10 blur-[150px] pointer-events-none rounded-full" />

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
                            {testimonials.badge.label}
                        </span>
                        <span className="h-3.5 w-[1px] bg-[#a67c00]/30" />
                        <span className="text-[14px] font-semibold text-[#a67c00] tracking-[1.5px] uppercase">
                            {testimonials.badge.aiHighlight}
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[28px] sm:text-[38px] lg:text-[48px] font-semibold tracking-[1px] text-[var(--foreground)] leading-[1.18]"
                    >
                        {testimonials.title.prefix}{" "}
                        <span className="text-[#a67c00]">
                            {testimonials.title.highlight}
                        </span>{" "}
                        {testimonials.title.suffix}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[14px] sm:text-[16px] text-[var(--muted-text)] font-normal leading-relaxed max-w-2xl mx-auto tracking-[0.5px]"
                    >
                        {testimonials.subtitle}
                    </motion.p>
                </header>

                {/* Testimonials Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                >
                    {testimonials.testimonials.map((item) => {
                        const isGold = item.accentHex === "#a67c00";

                        return (
                            <motion.article
                                key={item.slug}
                                variants={cardVariants}
                                whileHover={{ y: -6 }}
                                className="group relative flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[#355396] transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden"
                            >
                                {/* Background Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#355396]/5 to-[#a67c00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="relative z-10 space-y-6">
                                    {/* Card Header: AI Tag + Rating */}
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#a67c00]/10 border border-[#a67c00]/30 text-[#a67c00] text-[14px] font-medium tracking-[1.5px] uppercase">
                                            <Sparkles className="w-3 h-3 text-[#a67c00]" />
                                            {item.aiHighlightTag}
                                        </span>

                                        {/* Star Rating */}
                                        <div className="flex items-center gap-1 text-[#a67c00]">
                                            {Array.from({ length: item.rating }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-4 h-4 fill-[#a67c00] text-[#a67c00]"
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Quote Body */}
                                    <div className="space-y-3">
                                        <Quote className="w-8 h-8 text-[#355396]/20 group-hover:text-[#a67c00]/40 transition-colors" />
                                        <p className="text-[14px] sm:text-[16px] text-[var(--foreground)] font-normal leading-relaxed tracking-[0.5px] italic">
                                            "{item.quote}"
                                        </p>
                                    </div>
                                </div>

                                {/* Footer: Client Info & Proven Impact Metric */}
                                <div className="relative z-10 pt-6 border-t border-[var(--card-border)] mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                                    {/* Client Details */}
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={`w-11 h-11 rounded-full flex items-center justify-center text-white text-[14px] font-semibold tracking-[1px] shrink-0 ${isGold ? "bg-[#a67c00]" : "bg-[#355396]"
                                                }`}
                                        >
                                            {item.clientName
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-1.5">
                                                <h3 className="text-[14px] font-semibold text-[var(--foreground)] tracking-[0.5px]">
                                                    {item.clientName}
                                                </h3>
                                                <CheckCircle2 className="w-3.5 h-3.5 text-[#355396]" />
                                            </div>
                                            <p className="text-[14px] text-[var(--muted-text)] font-normal tracking-[0.5px]">
                                                {item.role} · <span className="text-[var(--foreground)]">{item.company}</span>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Impact Metric Badge */}
                                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl bg-[#355396]/10 border border-[#355396]/20 text-[#355396] text-[14px] font-medium tracking-[1px] self-start sm:self-auto">
                                        <TrendingUp className="w-3.5 h-3.5 text-[#355396]" />
                                        <span>{item.impactMetric}</span>
                                    </div>

                                </div>
                            </motion.article>
                        );
                    })}
                </motion.div>

                {/* Standard CTA Button: Uses px-8 py-4 padding */}
                <div className="text-center pt-4">
                    <Link
                        href={testimonials.cta.href}
                        className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#a67c00] hover:bg-[#8e6900] text-white font-semibold text-[14px] tracking-[2px] uppercase shadow-lg shadow-[#a67c00]/20 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
                    >
                        <span>{testimonials.cta.label}</span>
                        <ArrowRight className="w-4 h-4 text-white transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

            </div>
        </section>
    );
}