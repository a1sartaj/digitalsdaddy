"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight, Phone, ChevronRight, Sparkles } from "lucide-react";
import logo2 from "@/assets/images/logo/logo-2.png";
import { navbarData, menuOverlayData, NavItem } from "@/assets/data/navbar/navbarData";
import { div } from "framer-motion/client";

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FullScreenMenu({ isOpen, onClose }: FullScreenMenuProps) {
  // Set to null so by default no right-side box opens until hovered
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

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

  const currentActiveItem = navbarData.find((item) => item.slug === activeSlug);
  const { contactDirectory, footer } = menuOverlayData;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.99 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.99 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="hidden fixed inset-0 top-0 left-0 h-screen w-screen z-[99999] bg-[#0d1424] text-slate-100 overflow-x-hidden overflow-y-auto lg:flex flex-col justify-between py-8 select-none isolate"
    >
      {/* BACKGROUND MASK MESH & BRAND AMBIENT GLOWS */}
      <div className="absolute inset-0 bg-white/[0.012] bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#355396]/25 rounded-full blur-[140px] pointer-events-none z-0 overflow-hidden" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#a67c00]/15 rounded-full blur-[120px] pointer-events-none z-0 overflow-hidden" />

      {/* ──── 1. OVERLAY HEADER BAR ──── */}
      <div className="w-full max-w-[1600px] mx-auto px-8 flex items-center justify-between relative z-10 pb-6 border-b border-[#355396]/30 shrink-0">
        <Link href="/" onClick={onClose} className="group shrink-0 relative">
          <Image
            src={logo2}
            alt="DigitalsDaddy Logo"
            width={140}
            height={75}
            className="w-48 h-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Contact Phone & Close Actions */}
        <div className="flex items-center gap-6">
          <a
            href={`tel:${contactDirectory.phone.raw}`}
            className="flex items-center gap-2.5 text-[14px] font-semibold text-slate-200 hover:text-[#a67c00] px-4 py-2 rounded-xl bg-[#355396]/20 border border-[#355396]/40 transition-all duration-300"
          >
            <Phone className="w-4 h-4 text-[#a67c00]" />
            <span className="tracking-[0.5px]">{contactDirectory.phone.display}</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="group relative overflow-hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#355396]/20 border border-[#355396]/40 text-slate-100 text-[14px] font-medium tracking-[2.5px] uppercase hover:bg-[#a67c00] hover:text-white hover:border-[#a67c00] transition-all duration-300 cursor-pointer shadow-lg active:scale-95"
          >
            <span className="relative z-10">CLOSE</span>
            <X className="w-4 h-4 text-white group-hover:text-white transition-colors relative z-10" />
          </button>
        </div>
      </div>

      {/* ──── 2. OVERLAY MAIN GRID ──── */}
      <div className="w-full max-w-[1440px] mx-auto px-8 my-auto py-10 relative z-10 grid grid-cols-12 gap-10 items-start">

        {/* LEFT COLUMN: NAVIGATION LIST (4 COLS) */}
        <div className="col-span-4 flex flex-col items-start gap-2 w-full">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a67c00]/10 border border-[#a67c00]/30 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#a67c00] animate-pulse" />
            <span className="text-[14px] font-medium tracking-[2px] uppercase text-[#a67c00]">
              MENU
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
                    className="group relative flex items-center justify-between w-full py-3 transition-all duration-300 border-b border-white/5 text-slate-300 hover:text-[#a67c00] hover:pl-2 text-left"
                  >
                    <span className="text-2xl font-semibold tracking-[1px] uppercase transition-transform duration-300">
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
                  className={`group relative flex items-center justify-between w-full py-3 transition-all duration-300 border-b cursor-pointer text-left ${isActive
                    ? "border-[#a67c00]/50 text-[#a67c00] pl-3 bg-white/[0.02]"
                    : "border-white/5 text-slate-300 hover:text-white hover:pl-2"
                    }`}
                >
                  <span className="text-2xl font-semibold tracking-[1px] uppercase transition-transform duration-300">
                    {item.label}
                  </span>

                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${isActive
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

        {/* RIGHT COLUMN: DYNAMIC DECK (8 COLS) */}
        <div className="col-span-8 h-[480px] bg-[#131d33]/80 backdrop-blur-md border border-[#355396]/40 p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden shadow-2xl w-full shrink-0">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#355396] via-[#a67c00] to-[#355396]" />

          {currentActiveItem ? (
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

                  <p className="text-[15px] text-slate-300 leading-relaxed font-normal tracking-[0.5px] mb-6 shrink-0">
                    {currentActiveItem.description ||
                      "Enterprise software engineering, generative AI solutions, and performance growth channels."}
                  </p>

                  {currentActiveItem.menuData && currentActiveItem.menuData.length > 0 && (
                    <div className="grid grid-cols-2  gap-5 overflow-y-auto pr-2 max-h-[260px] no-scrollbar">


                      {currentActiveItem.menuData.map((subMenu, index) => {
                        return (
                          <div key={index} className="flex flex-col gap-2">
                            <span className="text-lg font-medium tracking-[1.5px] uppercase text-slate-400">
                              {subMenu.title}
                            </span>


                            <div className="flex flex-col gap-1.5">
                              {subMenu.links.map((subLink) => (
                                <Link
                                  key={subLink.href}
                                  href={subLink.href}
                                  onClick={onClose}
                                  className="inline-flex items-center justify-between text-[15px] font-medium text-slate-200 hover:text-[#a67c00] tracking-[1px] transition-all py-1 group/sub"
                                >
                                  <span className="group-hover/sub:translate-x-1 transition-transform">
                                    {subLink.label}
                                  </span>
                                  <ChevronRight className="w-4 h-4 text-[#a67c00] opacity-0 group-hover/sub:opacity-100 group-hover/sub:translate-x-1 transition-all" />
                                </Link>
                              ))}
                            </div>
                          </div>



                        )
                      }

                      )}



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
          ) : (
            /* DEFAULT EMPTY STATE BEFORE HOVER */
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-3 text-slate-400 my-auto">
              <Sparkles className="w-8 h-8 text-[#a67c00] opacity-60 animate-pulse" />
              <p className="text-[15px] font-medium tracking-[0.5px]">
                Hover over any menu item on the left to explore services & solutions
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ──── 3. OVERLAY FOOTER BAR ──── */}
      <div className="w-full max-w-[1600px] mx-auto px-8 pt-4 border-t border-[#355396]/30 flex flex-row items-center justify-between text-[14px] text-slate-400 relative z-10 gap-2 shrink-0 font-normal tracking-[0.5px]">
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