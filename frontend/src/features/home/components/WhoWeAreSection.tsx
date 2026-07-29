"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
    Sparkles,
    Target,
    BarChart2,
    ShieldCheck,
    ArrowRight,
} from "lucide-react";
import { whoWeAreData } from "@/assets/data/home/whoweare";

const renderPillarIcon = (iconName: string, isGold: boolean) => {
    const iconProps = {
        className: `w-5 h-5 ${isGold ? "text-[#a67c00]" : "text-[#355396]"}`,
    };
    switch (iconName) {
        case "Target":
            return <Target {...iconProps} />;
        case "BarChart2":
            return <BarChart2 {...iconProps} />;
        case "Sparkles":
            return <Sparkles {...iconProps} />;
        case "ShieldCheck":
            return <ShieldCheck {...iconProps} />;
        default:
            return <Sparkles {...iconProps} />;
    }
};

export default function WhoWeAreSection() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <section className="relative py-20 lg:py-28 overflow-hidden bg-[var(--background)] transition-colors duration-300 select-none">
            <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-[#355396]/10 blur-[150px] pointer-events-none rounded-full" />
            <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-[#a67c00]/10 blur-[140px] pointer-events-none rounded-full" />

            <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 flex flex-col items-start space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a67c00]/10 border border-[#a67c00]/30 text-[#a67c00]">
                            <Sparkles className="w-3.5 h-3.5 text-[#a67c00] animate-pulse" />
                            <span className="text-[14px] font-medium tracking-[2px] uppercase">
                                {whoWeAreData.badge}
                            </span>
                        </div>

                        {/* Dynamic Prefix, Highlight, & Suffix Title Rendering */}
                        <div className="relative pl-5 border-l-4 border-[#a67c00]">
                            <h2 className="text-[28px] sm:text-[38px] lg:text-[44px] font-semibold tracking-[1px] text-[var(--foreground)] leading-[1.15]">
                                {whoWeAreData.title.prefix}{" "}
                                <span className="text-[#355396] block">
                                    {whoWeAreData.title.highlight}
                                </span>{" "}
                                {whoWeAreData.title.suffix}
                            </h2>
                        </div>

                        <div className="space-y-4 text-[14px] sm:text-[16px] text-[var(--muted-text)] font-normal leading-relaxed tracking-[0.5px]">
                            <p>{whoWeAreData.narrative.paragraph1}</p>
                            <p>{whoWeAreData.narrative.paragraph2}</p>
                        </div>

                        <div className="pt-4 border-t border-[var(--card-border)] w-full">
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex items-center -space-x-3">
                                    {whoWeAreData.teamSummary.avatars.map((avatar, idx) => (
                                        <div
                                            key={idx}
                                            style={{ backgroundColor: avatar.bgHex }}
                                            className="w-10 h-10 rounded-full border-2 border-[var(--card-bg)] flex items-center justify-center text-white text-[14px] font-medium tracking-[1px] shadow-sm"
                                        >
                                            {avatar.initials}
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-full bg-[#355396] border-2 border-[var(--card-bg)] flex items-center justify-center text-white text-[14px] font-medium tracking-[0.5px] shadow-sm">
                                        +35
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-[14px] font-semibold text-[var(--foreground)] tracking-[0.5px]">
                                        {whoWeAreData.teamSummary.countText}
                                    </span>
                                    <span className="text-[14px] text-[var(--muted-text)] font-normal tracking-[0.5px]">
                                        {whoWeAreData.teamSummary.subRolesText}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-7 space-y-6"
                    >
                        <div className="grid grid-cols-3 gap-4 sm:gap-6">
                            {whoWeAreData.stats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    className="p-4 sm:p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] text-center shadow-sm hover:border-[#355396] transition-all duration-300"
                                >
                                    <div className="text-[26px] sm:text-[36px] font-semibold text-[#a67c00] tracking-[1px] leading-tight">
                                        {stat.value}
                                    </div>
                                    <div className="text-[14px] text-[var(--muted-text)] font-normal tracking-[0.5px] mt-1">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {whoWeAreData.pillars.map((pillar) => {
                                const isGold = pillar.accentColor === "#a67c00";
                                return (
                                    <motion.div
                                        key={pillar.slug}
                                        variants={itemVariants}
                                        whileHover={{ y: -4 }}
                                        className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[#355396] transition-all duration-300 shadow-sm flex flex-col justify-between space-y-4 group"
                                    >
                                        <div className="space-y-3">
                                            <div
                                                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${isGold ? "bg-[#a67c00]/10 border border-[#a67c00]/20" : "bg-[#355396]/10 border border-[#355396]/20"
                                                    }`}
                                            >
                                                {renderPillarIcon(pillar.iconName, isGold)}
                                            </div>

                                            <h3 className="text-[18px] font-semibold text-[var(--foreground)] tracking-[0.5px] group-hover:text-[#355396] transition-colors">
                                                {pillar.title}
                                            </h3>

                                            <p className="text-[14px] text-[var(--muted-text)] font-normal leading-relaxed tracking-[0.5px]">
                                                {pillar.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <motion.div
                            variants={itemVariants}
                            className="p-6 sm:p-8 rounded-2xl bg-[#090d16] border border-[#355396]/40 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden"
                        >
                            <div className="space-y-1 text-center sm:text-left relative z-10">
                                <h3 className="text-[20px] font-semibold tracking-[0.5px] text-white">
                                    {whoWeAreData.quickCta.headline}
                                </h3>
                                <p className="text-[14px] text-slate-300 font-normal tracking-[0.5px]">
                                    {whoWeAreData.quickCta.subheadline}
                                </p>
                            </div>

                            <Link
                                href={whoWeAreData.quickCta.href}
                                className="group relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#a67c00] hover:bg-[#8e6900] text-white text-[14px] font-semibold tracking-[2px] uppercase shadow-lg shadow-[#a67c00]/20 transition-all active:scale-95 shrink-0 cursor-pointer relative z-10"
                            >
                                <span>{whoWeAreData.quickCta.buttonText}</span>
                                <ArrowRight className="w-4 h-4 text-white transform transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}