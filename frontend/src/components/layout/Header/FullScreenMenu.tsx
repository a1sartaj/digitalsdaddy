"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight, Phone, MapPin, Globe, ChevronRight } from "lucide-react";
import logo from "@/assets/images/logo/logo.png";
import { navbarData, menuOverlayData, NavItem } from "@/assets/data/navbar/navbarData";

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FullScreenMenu({ isOpen, onClose }: FullScreenMenuProps) {
  const [activeSlug, setActiveSlug] = useState<string>(
    menuOverlayData.defaultActiveSlug || "ai-emerging-tech"
  );

  // Prevent background body scroll when overlay is active
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

  const currentActiveItem =
    navbarData.find((item) => item.slug === activeSlug) || navbarData[0];

  const { contactDirectory, footer } = menuOverlayData;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.99 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.99 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 top-0 left-0 h-screen w-screen z-[99999] bg-[#0d1424] text-slate-100 overflow-x-hidden overflow-y-auto flex flex-col justify-between py-6 lg:py-8 select-none isolate"
    >
      {/* BACKGROUND MASK MESH & BRAND AMBIENT GLOWS */}
      <div className="absolute inset-0 bg-white/[0.012] bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#355396]/25 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none z-0 overflow-hidden" />
      <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#a67c00]/15 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none z-0 overflow-hidden" />

      {/* ──── 1. OVERLAY HEADER BAR (Max-width: 1600px / max-w-400) ──── */}
      <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-8 flex items-center justify-between relative z-10 pb-4 sm:pb-6 border-b border-[#355396]/30 shrink-0">
        <Link href="/" onClick={onClose} className="group shrink-0 relative">
          <Image
            src={logo}
            alt="DigitalsDaddy Logo"
            width={140}
            height={75}
            className="w-24 sm:w-[130px] h-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Close Button: Uses px-4 sm:px-5 py-2 sm:py-2.5 and min 14px text */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onClose}
            className="group relative overflow-hidden inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-[#355396]/20 border border-[#355396]/40 text-slate-100 text-[14px] font-medium tracking-[2.5px] uppercase hover:bg-[#a67c00] hover:text-white hover:border-[#a67c00] transition-all duration-300 cursor-pointer shadow-lg active:scale-95"
          >
            <span className="relative z-10">CLOSE</span>
            <X className="w-4 h-4 text-white group-hover:text-white transition-colors relative z-10" />
          </button>
        </div>
      </div>

      {/* ──── 2. OVERLAY MAIN GRID (Max-width: 1440px / max-w-360) ──── */}
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 my-auto py-6 sm:py-8 lg:py-10 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        {/* LEFT COLUMN: CATEGORY NAVIGATION (4 COLS) */}
        <div className="lg:col-span-4 flex flex-col items-start gap-1 sm:gap-2 w-full">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a67c00]/10 border border-[#a67c00]/30 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#a67c00] animate-pulse" />
            <span className="text-[14px] font-medium tracking-[2px] uppercase text-[#a67c00]">
              EXPLORE NAVIGATION
            </span>
          </div>

          {navbarData.map((item: NavItem, idx: number) => {
            const isActive = activeSlug === item.slug;
            const hasDropdown = item.type === "dropdown";

            if (!hasDropdown) {
              return (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 + idx * 0.03, duration: 0.3 }}
                  className="w-full"
                >
                  <Link
                    href={item.href || "/"}
                    onClick={onClose}
                    className="group relative flex items-center justify-between w-full py-2.5 sm:py-3 transition-all duration-300 border-b border-white/5 text-slate-300 hover:text-[#a67c00] hover:pl-2 text-left"
                  >
                    <span className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-[1px] uppercase transition-transform duration-300">
                      {item.label}
                    </span>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 opacity-60 group-hover:opacity-100 group-hover:bg-[#a67c00] group-hover:text-white">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 + idx * 0.03, duration: 0.3 }}
                className="w-full"
              >
                <button
                  type="button"
                  onClick={() => setActiveSlug(item.slug)}
                  onMouseEnter={() => setActiveSlug(item.slug)}
                  className={`group relative flex items-center justify-between w-full py-2.5 sm:py-3 transition-all duration-300 border-b cursor-pointer text-left ${
                    isActive
                      ? "border-[#a67c00]/50 text-[#a67c00] pl-2 sm:pl-3 bg-white/[0.02]"
                      : "border-white/5 text-slate-300 hover:text-white hover:pl-2"
                  }`}
                >
                  <span className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-[1px] uppercase transition-transform duration-300">
                    {item.label}
                  </span>

                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-[#a67c00] text-white opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-2 text-slate-400"
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* CENTER COLUMN: DYNAMIC DECK */}
        <div className="lg:col-span-5 h-auto lg:h-[480px] bg-[#131d33]/80 backdrop-blur-md border border-[#355396]/40 p-6 sm:p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden shadow-2xl w-full shrink-0">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#355396] via-[#a67c00] to-[#355396]" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full flex flex-col justify-between h-full"
            >
              <div className="flex-1 flex flex-col justify-start min-h-0">
                <span className="text-[14px] font-semibold text-[#a67c00] tracking-[2px] uppercase block mb-3 shrink-0">
                  {currentActiveItem.label} DECK
                </span>

                <p className="text-[14px] sm:text-[15px] text-slate-300 leading-relaxed font-normal tracking-[0.5px] mb-6 shrink-0">
                  {currentActiveItem.description ||
                    "Enterprise software engineering, generative AI solutions, and performance growth channels."}
                </p>

                {currentActiveItem.menuData && currentActiveItem.menuData.length > 0 && (
                  <div className="flex flex-col gap-5 lg:overflow-y-auto lg:pr-2 lg:max-h-[260px] no-scrollbar">
                    {currentActiveItem.menuData.map((category) => (
                      <div key={category.title} className="flex flex-col gap-2">
                        <span className="text-[14px] font-medium tracking-[1.5px] uppercase text-slate-400">
                          {category.title}
                        </span>
                        <div className="flex flex-col gap-1.5">
                          {category.links.map((subLink) => (
                            <Link
                              key={subLink.href}
                              href={subLink.href}
                              onClick={onClose}
                              className="inline-flex items-center justify-between text-[14px] sm:text-[15px] font-medium text-slate-200 hover:text-[#a67c00] tracking-[1px] transition-all py-1 group/sub"
                            >
                              <span className="group-hover/sub:translate-x-1 transition-transform">
                                {subLink.label}
                              </span>
                              <ChevronRight className="w-4 h-4 text-[#a67c00] opacity-0 group-hover/sub:opacity-100 group-hover/sub:translate-x-1 transition-all" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {currentActiveItem.href && (
                <Link
                  href={currentActiveItem.href}
                  onClick={onClose}
                  className="mt-6 pt-4 border-t border-white/10 inline-flex items-center gap-2 text-[14px] font-semibold text-[#a67c00] hover:text-white transition-colors uppercase tracking-[2px] shrink-0"
                >
                  <span>
                    {currentActiveItem.actionLabel || "DISCOVER ALL DETAILS"}
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT COLUMN: QUICK CONTACT INFO */}
        <div className="lg:col-span-3 h-auto lg:h-[480px] flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#355396]/30 pt-6 lg:pt-0 lg:pl-8 w-full shrink-0">
          <div className="flex flex-col items-start gap-4 sm:gap-6 w-full">
            <span className="text-[14px] font-semibold tracking-[2px] uppercase text-[#a67c00]">
              {contactDirectory.title}
            </span>

            <div className="flex flex-col gap-5 text-[14px] text-slate-300 w-full font-normal">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#355396]/20 border border-[#355396]/40 flex items-center justify-center text-[#a67c00] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-white tracking-[0.5px]">
                    {contactDirectory.location.country}
                  </span>
                  <span className="text-slate-400 text-[14px] tracking-[0.5px]">
                    {contactDirectory.location.address}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#355396]/20 border border-[#355396]/40 flex items-center justify-center text-[#a67c00] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href={`tel:${contactDirectory.phone.raw}`}
                  className="hover:text-[#a67c00] transition-colors font-medium text-[14px] tracking-[1px]"
                >
                  {contactDirectory.phone.display}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#355396]/20 border border-[#355396]/40 flex items-center justify-center text-[#a67c00] shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <a
                  href={contactDirectory.website.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-300 hover:text-[#a67c00] transition-colors text-[14px] tracking-[0.5px]"
                >
                  {contactDirectory.website.display}
                </a>
              </div>
            </div>
          </div>

          {/* Main CTA Button: Uses px-8 py-4 and min 14px text */}
          <Link
            href={contactDirectory.cta.href}
            onClick={onClose}
            className="group relative overflow-hidden inline-flex items-center justify-between w-full px-8 py-4 rounded-full bg-[#a67c00] hover:bg-[#8e6900] text-white text-[14px] font-semibold tracking-[2px] uppercase transition-all duration-300 shadow-xl shadow-[#a67c00]/20 active:scale-95 shrink-0 mt-6 lg:mt-0"
          >
            <span>{contactDirectory.cta.label}</span>
            <ArrowUpRight className="w-4 h-4 text-white transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* ──── 3. OVERLAY FOOTER BAR (Max-width: 1600px / max-w-400) ──── */}
      <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-8 pt-4 border-t border-[#355396]/30 flex flex-col sm:flex-row items-center justify-between text-[14px] text-slate-400 relative z-10 gap-2 shrink-0 font-normal tracking-[0.5px]">
        <p>{footer.copyright}</p>
        <div className="flex items-center gap-6">
          {footer.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="hover:text-white transition-colors tracking-[1px]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}