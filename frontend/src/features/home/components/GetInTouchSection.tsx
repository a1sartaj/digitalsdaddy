"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Sparkles,
    Send,
    CheckCircle2,
    Headphones,
    Clock,
    ShieldCheck,
} from "lucide-react";
import { getInTouchData } from "@/assets/data/home/getintouch";

// Dynamic Support Feature Icon Switcher
const renderSupportIcon = (iconName: string, isGold: boolean) => {
    const iconProps = {
        className: `w-4 h-4 ${isGold ? "text-[#a67c00]" : "text-[#355396]"}`,
    };
    switch (iconName) {
        case "Headphones":
            return <Headphones {...iconProps} />;
        case "Clock":
            return <Clock {...iconProps} />;
        case "ShieldCheck":
            return <ShieldCheck {...iconProps} />;
        default:
            return <Headphones {...iconProps} />;
    }
};

export default function GetInTouchSection() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        service: getInTouchData.servicesList[0],
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <section className="relative py-20 lg:py-28 overflow-hidden bg-[var(--background)] transition-colors duration-300 select-none">

            {/* Ambient Glow Effects */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#355396]/10 blur-[160px] pointer-events-none rounded-full" />
            <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#a67c00]/10 blur-[150px] pointer-events-none rounded-full" />

            {/* Constraints: Max-width 1440px / max-w-360, Padding: px-4 lg:px-8 */}
            <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 relative z-10 space-y-12 sm:space-y-16">

                {/* Section Header */}
                <header className="text-center max-w-3xl mx-auto space-y-4">
                    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#a67c00]/10 border border-[#a67c00]/30 text-[#a67c00]">
                        <Sparkles className="w-3.5 h-3.5 text-[#a67c00] animate-pulse" />
                        <span className="text-[14px] font-medium tracking-[2px] uppercase">
                            {getInTouchData.badge.label}
                        </span>
                        <span className="h-3.5 w-[1px] bg-[#a67c00]/30" />
                        <span className="text-[14px] font-semibold text-[#a67c00] tracking-[1.5px] uppercase">
                            {getInTouchData.badge.aiHighlight}
                        </span>
                    </div>

                    <h2 className="text-[28px] sm:text-[38px] lg:text-[48px] font-semibold tracking-[1px] text-[var(--foreground)] leading-[1.18]">
                        {getInTouchData.title.prefix}{" "}
                        <span className="text-[#a67c00]">
                            {getInTouchData.title.highlight}
                        </span>{" "}
                        {getInTouchData.title.suffix}
                    </h2>

                    <p className="text-[14px] sm:text-[16px] text-[var(--muted-text)] font-normal leading-relaxed max-w-2xl mx-auto tracking-[0.5px]">
                        {getInTouchData.subtitle}
                    </p>
                </header>

                {/* ──── TWO COLUMN WORKSPACE: SUPPORT SPOTLIGHT + FORM ──── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* LEFT SIDE: CUSTOMER SUPPORT SPOTLIGHT (5 COLS) */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative rounded-3xl overflow-hidden border border-[var(--card-border)] bg-[var(--card-bg)] shadow-xl p-6 sm:p-8 space-y-6">

                            {/* Image Container */}
                            <div className="relative w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden bg-slate-900 group">
                                <Image
                                    src={getInTouchData.supportInfo.image}
                                    alt={getInTouchData.supportInfo.imageAlt}
                                    fill
                                    priority
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Overlay Ambient Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                {/* Online Status Floating Pill */}
                                <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[12px] font-medium tracking-[1px]">
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span>{getInTouchData.supportInfo.statusBadge}</span>
                                </div>

                                {/* Bottom Overlay Info */}
                                <div className="absolute bottom-4 left-4 right-4 z-10 text-white space-y-1">
                                    <h3 className="text-[18px] font-semibold tracking-[0.5px]">
                                        {getInTouchData.supportInfo.overlayTitle}
                                    </h3>
                                    <p className="text-[13px] text-slate-200 font-normal tracking-[0.5px]">
                                        {getInTouchData.supportInfo.overlaySubtitle}
                                    </p>
                                </div>
                            </div>

                            {/* Support Badges & Features mapped dynamically */}
                            <div className="space-y-3 pt-2">
                                {getInTouchData.supportInfo.features.map((feat, idx) => {
                                    const isGold = feat.accentHex === "#a67c00";

                                    return (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-3 text-[14px] text-[var(--foreground)] font-medium tracking-[0.5px]"
                                        >
                                            <div
                                                className={`p-2 rounded-xl shrink-0 ${isGold
                                                        ? "bg-[#a67c00]/10 text-[#a67c00]"
                                                        : "bg-[#355396]/10 text-[#355396]"
                                                    }`}
                                            >
                                                {renderSupportIcon(feat.iconName, isGold)}
                                            </div>
                                            <span>{feat.title}</span>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>

                    {/* RIGHT SIDE: INTERACTIVE INQUIRY FORM (7 COLS) */}
                    <div className="lg:col-span-7">
                        <div className="p-8 sm:p-10 rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] shadow-xl relative overflow-hidden">

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12 space-y-4"
                                >
                                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                                        <CheckCircle2 className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-[24px] font-semibold text-[var(--foreground)] tracking-[0.5px]">
                                        Inquiry Received!
                                    </h3>
                                    <p className="text-[14px] text-[var(--muted-text)] font-normal leading-relaxed max-w-md mx-auto tracking-[0.5px]">
                                        Thank you for contacting DigitalsDaddy. A customer support lead will review your project requirements and reach out shortly.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">

                                    {/* Row 1: Name & Email */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[14px] font-medium text-[var(--foreground)] tracking-[0.5px] block">
                                                Your Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g. Sartaj Alam"
                                                value={formData.fullName}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, fullName: e.target.value })
                                                }
                                                className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--card-border)] text-[14px] text-[var(--foreground)] placeholder-[var(--muted-text)] focus:outline-none focus:border-[#355396] transition-colors"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[14px] font-medium text-[var(--foreground)] tracking-[0.5px] block">
                                                Business Email *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="sartaj@company.com"
                                                value={formData.email}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, email: e.target.value })
                                                }
                                                className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--card-border)] text-[14px] text-[var(--foreground)] placeholder-[var(--muted-text)] focus:outline-none focus:border-[#355396] transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Row 2: Phone & Service Selection */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[14px] font-medium text-[var(--foreground)] tracking-[0.5px] block">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                placeholder="+91 98182 86609"
                                                value={formData.phone}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, phone: e.target.value })
                                                }
                                                className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--card-border)] text-[14px] text-[var(--foreground)] placeholder-[var(--muted-text)] focus:outline-none focus:border-[#355396] transition-colors"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[14px] font-medium text-[var(--foreground)] tracking-[0.5px] block">
                                                Required Service *
                                            </label>
                                            <select
                                                value={formData.service}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, service: e.target.value })
                                                }
                                                className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--card-border)] text-[14px] text-[var(--foreground)] focus:outline-none focus:border-[#355396] transition-colors cursor-pointer"
                                            >
                                                {getInTouchData.servicesList.map((svc) => (
                                                    <option key={svc} value={svc}>
                                                        {svc}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Message Field */}
                                    <div className="space-y-2">
                                        <label className="text-[14px] font-medium text-[var(--foreground)] tracking-[0.5px] block">
                                            Project Details / Requirements *
                                        </label>
                                        <textarea
                                            required
                                            rows={4}
                                            placeholder="Tell us about your project scope, timeline, or key objectives..."
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData({ ...formData, message: e.target.value })
                                            }
                                            className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--card-border)] text-[14px] text-[var(--foreground)] placeholder-[var(--muted-text)] focus:outline-none focus:border-[#355396] transition-colors resize-none"
                                        />
                                    </div>

                                    {/* Form Submit Button: Uses px-8 py-4 padding */}
                                    <button
                                        type="submit"
                                        className="w-full group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#a67c00] hover:bg-[#8e6900] text-white font-semibold text-[14px] tracking-[2px] uppercase shadow-lg shadow-[#a67c00]/20 transition-all hover:scale-[1.01] active:scale-95 cursor-pointer"
                                    >
                                        <span>{getInTouchData.cta.label}</span>
                                        <Send className="w-4 h-4 text-white transform transition-transform duration-300 group-hover:translate-x-1" />
                                    </button>

                                </form>
                            )}

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}