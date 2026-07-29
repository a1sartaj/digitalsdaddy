"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/common/Reveal";

interface ShortcutLink {
  label: string;
  href: string;
}

const shortcutLinks: ShortcutLink[] = [
  { label: "Homepage", href: "/" },
  { label: "Business Lines", href: "/business-lines" },
  { label: "What We Do", href: "/what-we-do" }
];

export default function BottomShortcuts() {
  return (
    /* ─── 🏛️ MODERN DESIGN SYSTEM NAVIGATION SHORTCUT MATRICES ─── */
    <div className="w-full bg-pure-white py-12 border-t border-gray-light-1/60 overflow-hidden relative">
      
      {/* 🛠️ UX MATRIX: Strictly locked standard layouts configuration framework */}
      <section className="w-full max-w-[1600px] mx-auto px-4 lg:px-20 relative z-10">

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center select-none">
          {shortcutLinks.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className="w-full group block"
            >
              <Reveal direction="scale" duration={400} delay={index * 50}>
                <div className="w-full p-5 bg-pure-white border border-gray-light-1 rounded-2xl flex items-center justify-between gap-4 transition-all duration-300 hover:border-blue/30 hover:shadow-xl hover:bg-gray-50/20">
                  
                  {/* Dynamic Action Title Label */}
                  <span className="text-pure-black font-semibold text-sm sm:text-base tracking-[1.5px] uppercase transition-colors group-hover:text-blue whitespace-nowrap">
                    {item.label}
                  </span>

                  {/* Geometric Context Bullet Arrow Tracker Indicator */}
                  <div className="w-11 h-11 rounded-xl border border-gray-light-1 flex items-center justify-center text-gray-mid-2 bg-pure-white group-hover:bg-blue group-hover:text-pure-white group-hover:border-blue transition-all duration-300 transform group-hover:scale-102 shrink-0 shadow-sm">
                    <ArrowUpRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  
                </div>
              </Reveal>
            </Link>
          ))}
        </div>

      </section>
    </div>
  );
}