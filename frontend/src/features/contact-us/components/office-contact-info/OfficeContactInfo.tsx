"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import logo from "@/assets/images/logo/logo.webp";

export default function OfficeContactInfo() {

  // ─── STAGGER ENTRANCE MECHANICS ───
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    /* ─── 🏛️ MODERN CONTACT INFORMATION PLATFORM (H-SCREEN) ─── */
    <div className="w-full h-screen min-h-[650px] bg-[#051329] flex items-center overflow-hidden relative border-b border-white/10 isolate select-none">

      {/* 🛠️ GRAPHIC SQUARE GRID BACKDROP MASK */}
      <div className="absolute inset-0 bg-white/[0.015] bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      {/* Radial color lens flare overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.08)_0%,transparent_50%)]" />

      {/* 🛠️ UX MATRIX CONTAINER */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 pt-20 relative z-10">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center"
        >

          {/* ──── LEFT COLUMN MODULE: DATA INFORMATION FIELDS (SPANS 7 COLS) ──── */}
          <div className="col-span-12 md:col-span-8 lg:col-span-7 flex flex-col items-start text-left w-full">

            {/* Identity Context Tagline */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white/10 border border-white/15 rounded-full mb-6 shadow-md backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-white">
                CONTACT US
              </span>
            </div>

            {/* Core Master Title */}
            <motion.h2
              variants={fadeInUpVariants}
              className="text-white font-black text-3xl sm:text-4xl lg:text-5xl tracking-[1.5px] leading-tight mb-8 uppercase"
            >
              Alfanar <span className="text-cyan-400">Head Office</span>
            </motion.h2>

            {/* Address Block Stack Structure */}
            <motion.div
              variants={fadeInUpVariants}
              className="text-white/80 font-normal text-sm sm:text-base leading-relaxed tracking-[0.5px] mb-6 flex flex-col gap-1.5"
            >
              <div className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-xl border border-white/15 flex items-center justify-center bg-white/10 backdrop-blur-sm text-cyan-400 mt-0.5 shadow-sm shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-white font-bold">Building 1 (4006),</p>
                  <p>Northern Ring Road, AlNafal District</p>
                  <p>Riyadh 13312, Kingdom of Saudi Arabia</p>
                </div>
              </div>
            </motion.div>

            {/* Office Operations Hours Tracker */}
            <motion.p
              variants={fadeInUpVariants}
              className="text-white/90 text-xs sm:text-sm leading-relaxed font-normal tracking-[0.5px] mb-8 max-w-sm lg:max-w-xl bg-white/5 border border-white/10 rounded-2xl p-5 shadow-lg backdrop-blur-sm"
            >
              Our office hours are from <span className="text-cyan-400 font-bold">8:00 AM to 5:00 PM</span> (Arabian Standard Time) from Sunday to Thursday.
            </motion.p>

            {/* Dynamic Core Telecommunication Anchor Link */}
            <motion.div variants={fadeInUpVariants} className="mb-8 select-none">
              <a
                href="tel:+96611920006111"
                className="inline-flex items-center gap-3.5 text-white font-bold text-sm sm:text-base hover:text-cyan-400 transition-colors tracking-[1px] group"
              >
                <div className="w-11 h-11 rounded-xl border border-white/15 flex items-center justify-center bg-white/10 backdrop-blur-sm shadow-md text-cyan-400 group-hover:bg-cyan-500 group-hover:text-[#051329] group-hover:border-cyan-400 transition-all duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+966 11 920 006111</span>
              </a>
            </motion.div>

            {/* Action CTA Button */}
            <motion.div variants={fadeInUpVariants}>
              <Link
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue via-[#00529b] to-blue border border-white/20 text-white text-xs font-bold tracking-[2px] uppercase transition-all duration-500 shadow-[0_0_20px_rgba(0,99,175,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:border-cyan-400 active:scale-95 cursor-pointer"
              >
                <span className="relative z-10">View On Google Maps</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 transform transition-transform duration-300 group-hover:translate-x-1.5 relative z-10" />
                <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
              </Link>
            </motion.div>

          </div>

          {/* ──── RIGHT COLUMN MODULE: VECTOR BRAND MARK SHOWCASE (SPANS 5 COLS) ──── */}
          <motion.div
            variants={fadeInUpVariants}
            className="col-span-12 md:col-span-4 lg:col-span-5 flex items-center justify-center md:justify-end shrink-0 select-none"
          >
            <div className="w-full max-w-[240px] lg:max-w-[280px] p-8 bg-white border border-white/15 rounded-3xl shadow-2xl relative group">
              <Image
                src={logo}
                alt="Alfanar Enterprise Engineering Logistics Identity Mark"
                className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-blue via-cyan-400 to-blue rounded-full" />
            </div>
          </motion.div>

        </motion.div>

      </section>
    </div>
  );
}