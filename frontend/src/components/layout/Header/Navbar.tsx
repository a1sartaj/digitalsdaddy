"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, LogIn, Menu } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import logo from "@/assets/images/logo/logo.png";
import FullScreenMenu from "./FullScreenMenu";
import { navbarHeaderData } from "@/assets/data/navbar/navbarHeaderData";
import FullScreenMobileMenu from "./FullScreenMobileMenu";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <>
            {/* ──── FIXED TOP HEADER CONTAINER (Max Width: 1600px / max-w-400) ──── */}
            <header className="fixed top-0 left-0 right-0 z-50 w-full select-none bg-[var(--backdrop-blur)] backdrop-blur-xl border-b border-[var(--card-border)] shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] transition-colors duration-300">

                {/* Ambient Glow Subtle Underlay */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-[#355396]/15 blur-[60px] pointer-events-none rounded-full" />

                {/* Max-Width Constraint: 1600px (max-w-400), Padding: px-4 lg:px-8 */}
                <div className="w-full max-w-[1600px] mx-auto h-16 sm:h-20 px-4 lg:px-8 flex items-center justify-between relative z-10">

                    {/* BRAND LOGO SHOWCASE */}
                    <Link href="/" className="shrink-0 relative py-1 group flex items-center">
                        <Image
                            src={logo}
                            alt={navbarHeaderData.logo.alt}
                            width={navbarHeaderData.logo.width}
                            height={navbarHeaderData.logo.height}
                            className="w-40 md:w-50 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                            priority
                        />
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#a67c00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Link>

                    {/* TOP RIGHT ACTION DOCK */}
                    <div className="flex items-center gap-2.5 sm:gap-3.5">

                        {/* 1. Search Control Switch */}
                        <button
                            type="button"
                            aria-label={navbarHeaderData.actions.search.ariaLabel}
                            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] hidden md:flex items-center justify-center text-[var(--foreground)] hover:text-[#a67c00] hover:border-[#355396] hover:bg-[#355396]/10 transition-all duration-300 cursor-pointer shadow-sm active:scale-95"
                        >
                            <Search className="w-4 h-4" />
                        </button>

                        {/* 2. Portal Entrance Switch */}
                        <Link
                            href={navbarHeaderData.actions.portal.href || "/login"}
                            aria-label={navbarHeaderData.actions.portal.ariaLabel}
                            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] hidden md:flex items-center justify-center text-[var(--foreground)] hover:text-[#a67c00] hover:border-[#355396] hover:bg-[#355396]/10 transition-all duration-300 cursor-pointer shadow-sm active:scale-95"
                        >
                            <LogIn className="w-4 h-4" />
                        </Link>

                        {/* Divider Line */}
                        <div className="h-5 w-[1px] bg-[var(--card-border)] mx-1 hidden sm:block" />

                        {/* 3. FULL SCREEN MENU TRIGGER BUTTON (Using px-4 sm:px-5 py-2 sm:py-2.5) */}
                        <button
                            type="button"
                            aria-label={navbarHeaderData.actions.menuButton.ariaLabel}
                            onClick={() => setIsMenuOpen(true)}
                            className="group relative overflow-hidden inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-[#a67c00] hover:bg-[#8e6900] text-white text-[14px] font-semibold tracking-[1.5px] uppercase transition-all duration-300 shadow-lg shadow-[#a67c00]/25 active:scale-95 cursor-pointer"
                        >
                            <Menu className="w-4 h-4 text-white transform transition-transform duration-300 group-hover:rotate-180" />
                            <span className="hidden sm:inline">
                                {navbarHeaderData.actions.menuButton.label}
                            </span>

                            {/* Glass Glare Animation Effect */}
                            <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                        </button>

                    </div>

                </div>
            </header>

            {/* FULL SCREEN OVERLAY MENU COMPONENT */}
            <AnimatePresence>
                {isMenuOpen && (
                    <FullScreenMenu
                        isOpen={isMenuOpen}
                        onClose={() => setIsMenuOpen(false)}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isMenuOpen && (
                    <FullScreenMobileMenu
                        isOpen={isMenuOpen}
                        onClose={() => setIsMenuOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}