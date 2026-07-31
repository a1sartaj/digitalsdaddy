"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight, Phone, ChevronDown, ChevronRight, Sparkles } from "lucide-react";
import logo2 from "@/assets/images/logo/logo-2.png";
import { navbarData, menuOverlayData, NavItem } from "@/assets/data/navbar/navbarData";

interface FullScreenMobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function FullScreenMobileMenu({ isOpen, onClose }: FullScreenMobileMenuProps) {
    // Track open accordion slug for mobile downwards expansion
    const [openSlug, setOpenSlug] = useState<string | null>(null);

    // Toggle tab logic
    const handleToggle = (slug: string) => {
        setOpenSlug((prev) => (prev === slug ? null : slug));
    };

    // Prevent background body scroll when mobile menu is active
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const { contactDirectory, footer } = menuOverlayData;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="fixed lg:hidden inset-0 top-0 left-0 h-screen w-screen z-[99999] bg-[#0d1424] text-slate-100 overflow-y-auto flex flex-col justify-between py-6 px-4 select-none isolate"
            >
                {/* BACKGROUND AMBIENT GLOWS */}
                <div className="absolute inset-0 bg-white/[0.012] bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />
                <div className="absolute top-0 right-0 w-[280px] h-[280px] bg-[#355396]/20 rounded-full blur-[90px] pointer-events-none z-0" />
                <div className="absolute bottom-0 left-0 w-[240px] h-[240px] bg-[#a67c00]/15 rounded-full blur-[80px] pointer-events-none z-0" />

                {/* ──── 1. MOBILE HEADER BAR ──── */}
                <div className="w-full flex items-center justify-between relative z-10 pb-4 border-b border-[#355396]/30 shrink-0">
                    <Link href="/" onClick={onClose} className="shrink-0 relative">
                        <Image
                            src={logo2}
                            alt="DigitalsDaddy Logo"
                            width={130}
                            height={45}
                            className="w-40 h-auto object-contain"
                            priority
                        />
                    </Link>

                    <div className="flex items-center gap-3">
                        {/* Quick Mobile Phone Action */}
                        <a
                            href={`tel:${contactDirectory.phone.raw}`}
                            aria-label="Call Head Office"
                            className="w-10 h-10 rounded-xl bg-[#355396]/20 border border-[#355396]/40 flex items-center justify-center text-[#a67c00] active:scale-95 transition-transform"
                        >
                            <Phone className="w-4 h-4" />
                        </a>

                        {/* Close Button */}
                        <button
                            type="button"
                            onClick={onClose}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#355396]/20 border border-[#355396]/40 text-slate-100 text-[13px] font-medium tracking-[2px] uppercase active:scale-95 transition-all"
                        >
                            <span>CLOSE</span>
                            <X className="w-4 h-4 text-white" />
                        </button>
                    </div>
                </div>

                {/* ──── 2. MOBILE ACCORDION NAVIGATION LIST ──── */}
                <div className="w-full my-auto py-6 relative z-10 space-y-3">
                    <div className="flex justify-between items-center" >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a67c00]/10 border border-[#a67c00]/30 mb-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#a67c00] animate-pulse" />
                            <span className="text-[12px] font-medium tracking-[2px] uppercase text-[#a67c00]">
                                MENU
                            </span>
                        </div>

                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a67c00]/10 border border-[#a67c00]/30 mb-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#a67c00] animate-pulse" />
                            <span className="text-[12px] font-medium tracking-[2px] uppercase text-[#a67c00]">
                                <a
                                    href={`tel:${contactDirectory.phone.raw}`}
                                    aria-label="Call Head Office"
                                >

                                    {menuOverlayData.contactDirectory.phone.display}
                                </a>
                            </span>
                        </div>
                    </div>

                    <div className="space-y-2.5">
                        {navbarData.map((item: NavItem, idx: number) => {
                            const isOpenTab = openSlug === item.slug;
                            const hasDropdown = item.type === "dropdown";

                            if (!hasDropdown) {
                                return (
                                    <div key={item.slug} className="w-full border-b border-white/5 pb-1">
                                        <Link
                                            href={item.href || "/"}
                                            onClick={onClose}
                                            className="flex items-center justify-between w-full py-3 text-slate-200 hover:text-[#a67c00] text-[18px] font-semibold uppercase tracking-[0.5px]"
                                        >
                                            <span>{item.label}</span>
                                            <ArrowUpRight className="w-5 h-5 text-[#a67c00]" />
                                        </Link>
                                    </div>
                                );
                            }

                            return (
                                <div
                                    key={item.slug}
                                    className={`w-full rounded-2xl transition-colors duration-300 border ${isOpenTab
                                        ? "bg-[#131d33]/90 border-[#355396]/60"
                                        : "bg-white/[0.02] border-white/5"
                                        }`}
                                >
                                    {/* Category Header Button */}
                                    <button
                                        type="button"
                                        onClick={() => handleToggle(item.slug)}
                                        className="flex items-center justify-between w-full p-4 text-left cursor-pointer"
                                    >
                                        <span
                                            className={`text-[17px] font-semibold uppercase tracking-[0.5px] ${isOpenTab ? "text-[#a67c00]" : "text-slate-200"
                                                }`}
                                        >
                                            {item.label}
                                        </span>

                                        <div
                                            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${isOpenTab
                                                ? "bg-[#a67c00] text-white rotate-180"
                                                : "bg-white/5 text-slate-400"
                                                }`}
                                        >
                                            <ChevronDown className="w-4 h-4" />
                                        </div>
                                    </button>

                                    {/* DOWNWARDS EXPANDING ACCORDION CONTENT */}
                                    <AnimatePresence initial={false}>
                                        {isOpenTab && (
                                            <motion.div
                                                key="content"
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden px-4 pb-5 space-y-4 border-t border-white/10 pt-3"
                                            >
                                                {item.description && (
                                                    <p className="text-[13px] text-slate-300 leading-relaxed tracking-[0.5px]">
                                                        {item.description}
                                                    </p>
                                                )}

                                                {item.menuData && item.menuData.length > 0 && (
                                                    <div className="space-y-4 pt-1">
                                                        {item.menuData.map((category, catIdx) => (
                                                            <div key={catIdx} className="space-y-2">
                                                                <span className="text-[12px] font-semibold uppercase tracking-[1.5px] text-[#a67c00] block">
                                                                    {category.title}
                                                                </span>

                                                                <div className="space-y-1 pl-2 border-l-2 border-[#a67c00]/30">
                                                                    {category.links.map((subLink) => (
                                                                        <Link
                                                                            key={subLink.href}
                                                                            href={subLink.href}
                                                                            onClick={onClose}
                                                                            className="flex items-center justify-between text-[14px] text-slate-200 hover:text-[#a67c00] py-1.5 transition-colors"
                                                                        >
                                                                            <span>{subLink.label}</span>
                                                                            <ChevronRight className="w-3.5 h-3.5 text-[#a67c00]" />
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                {item.href && (
                                                    <div className="pt-2">
                                                        <Link
                                                            href={item.href}
                                                            onClick={onClose}
                                                            className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#a67c00] uppercase tracking-[1.5px]"
                                                        >
                                                            <span>{item.actionLabel || "DISCOVER ALL"}</span>
                                                            <ArrowUpRight className="w-4 h-4" />
                                                        </Link>
                                                    </div>
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ──── 3. MOBILE FOOTER STRIP ──── */}
                <div className="w-full pt-4 border-t border-[#355396]/30 flex flex-col gap-3 text-center text-[12px] text-slate-400 relative z-10 shrink-0">
                    <p>{footer.copyright}</p>
                    <div className="flex items-center justify-center gap-4">
                        {footer.links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={onClose}
                                className="hover:text-white transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}