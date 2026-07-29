"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Check,
  BarChart3,
  Send,
  Search,
  Globe,
  PenTool,
  Smartphone,
} from "lucide-react";
import { whatWeDoData } from "@/assets/data/home/whatwedo";

const renderIcon = (iconName: string, isBlueTheme: boolean) => {
  const iconProps = {
    className: `w-5 h-5 ${isBlueTheme ? "text-[#355396]" : "text-[#a67c00]"}`,
  };
  switch (iconName) {
    case "BarChart3":
      return <BarChart3 {...iconProps} />;
    case "Send":
      return <Send {...iconProps} />;
    case "Search":
      return <Search {...iconProps} />;
    case "Globe":
      return <Globe {...iconProps} />;
    case "PenTool":
      return <PenTool {...iconProps} />;
    case "Smartphone":
      return <Smartphone {...iconProps} />;
    default:
      return <Globe {...iconProps} />;
  }
};

export default function WhatWeDoSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-[#355396]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-[#a67c00]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        <header className="text-left max-w-3xl space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a67c00]/10 border border-[#a67c00]/30 text-[#a67c00]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#a67c00] animate-pulse" />
            <span className="text-[14px] font-medium tracking-[2px] uppercase">
              {whatWeDoData.badge}
            </span>
          </motion.div>

          {/* Dynamic Prefix, Highlight, & Suffix Title Rendering */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[28px] sm:text-[38px] lg:text-[48px] font-semibold tracking-[1px] text-[#a67c00] leading-[1.18]"
          >
            {whatWeDoData.title.prefix}{" "}
            <span className="text-[#355396]">
              {whatWeDoData.title.highlight}
            </span>{" "}
            {whatWeDoData.title.suffix}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[14px] sm:text-[16px] text-[var(--muted-text)] font-normal leading-relaxed max-w-2xl tracking-[0.5px]"
          >
            {whatWeDoData.subtitle}
          </motion.p>
        </header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {whatWeDoData.services.map((service) => {
            const isBlueTheme = service.titleHighlightColor === "#355396";

            return (
              <motion.article
                key={service.slug}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[#355396] transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#355396]/5 to-[#a67c00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${isBlueTheme
                        ? "bg-[#355396]/10 border border-[#355396]/20"
                        : "bg-[#a67c00]/10 border border-[#a67c00]/20"
                      }`}
                  >
                    {renderIcon(service.iconName, isBlueTheme)}
                  </div>

                  <div className="space-y-2">
                    <h3
                      className={`text-[20px] lg:text-[22px] font-semibold tracking-[1px] leading-snug transition-colors duration-300 ${isBlueTheme ? "text-[#355396]" : "text-[#a67c00]"
                        }`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-[14px] text-[var(--muted-text)] font-normal leading-relaxed tracking-[0.5px]">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-3 border-t border-[var(--card-border)]">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-[14px] font-medium text-[var(--foreground)] tracking-[0.5px]"
                      >
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${isBlueTheme ? "text-[#355396]" : "text-[#a67c00]"
                            }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10 pt-6">
                  <Link
                    href={service.href}
                    className={`inline-flex items-center gap-1.5 text-[14px] font-semibold tracking-[1.5px] uppercase transition-colors duration-300 ${isBlueTheme
                        ? "text-[#355396] hover:text-[#a67c00]"
                        : "text-[#a67c00] hover:text-[#355396]"
                      }`}
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="text-center pt-4">
          <Link
            href={whatWeDoData.cta.href}
            className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#a67c00] hover:bg-[#8e6900] text-white font-semibold text-[14px] tracking-[2px] uppercase shadow-lg shadow-[#a67c00]/20 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <span>{whatWeDoData.cta.label}</span>
            <ArrowRight className="w-4 h-4 text-white transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}