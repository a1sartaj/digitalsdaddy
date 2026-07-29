"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Sparkles, ArrowRight, ArrowUpRight, TrendingUp, CheckCircle } from "lucide-react";
import { projectsSectionData } from "@/assets/data/home/projects";

export default function ProjectDeliverSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#355396]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#a67c00]/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Constraints: Max-width 1440px / max-w-360, Padding: px-4 lg:px-8 */}
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#a67c00]/10 border border-[#a67c00]/30 text-[#a67c00]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#a67c00] animate-pulse" />
            <span className="text-[14px] font-medium tracking-[2px] uppercase">
              {projectsSectionData.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[28px] sm:text-[38px] lg:text-[48px] font-semibold tracking-[1px] text-[var(--foreground)] leading-[1.18]"
          >
            {projectsSectionData.title.prefix}{" "}
            <span className="text-[#a67c00]">
              {projectsSectionData.title.highlight}
            </span>{" "}
            {projectsSectionData.title.suffix}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[14px] sm:text-[16px] text-[var(--muted-text)] font-normal leading-relaxed max-w-2xl mx-auto tracking-[0.5px]"
          >
            {projectsSectionData.subtitle}
          </motion.p>
        </header>

        {/* Dynamic Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {projectsSectionData.projects.map((project) => (
            <motion.article
              key={project.slug}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col justify-between rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[#355396] transition-all duration-500 shadow-sm hover:shadow-xl overflow-hidden"
            >
              {/* Top Image Showcase Frame */}
              <div className="relative w-full h-[240px] sm:h-[280px] overflow-hidden bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Gradient Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] via-transparent to-black/30 z-10" />

                {/* Floating Top Badges */}
                <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between gap-2">
                  <span className="px-3.5 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-white text-[14px] font-medium tracking-[1.5px] uppercase">
                    {project.category}
                  </span>

                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#a67c00] text-white text-[14px] font-medium tracking-[1px] shadow-lg">
                    <TrendingUp className="w-3.5 h-3.5 text-white" />
                    <span>{project.impactMetric}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Content Body */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-6 relative z-20">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[14px] font-medium text-[#355396] tracking-[1px] uppercase">
                      Client: {project.client}
                    </span>

                    <Link
                      href={project.href}
                      aria-label={`View case study for ${project.title}`}
                      className="w-9 h-9 rounded-xl bg-[var(--background)] border border-[var(--card-border)] flex items-center justify-center text-[var(--muted-text)] group-hover:bg-[#355396] group-hover:text-white group-hover:border-[#355396] transition-all duration-300"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <h3 className="text-[20px] sm:text-[24px] font-semibold text-[var(--foreground)] tracking-[1px] group-hover:text-[#355396] transition-colors duration-300">
                    <Link href={project.href}>{project.title}</Link>
                  </h3>

                  <p className="text-[14px] text-[var(--muted-text)] font-normal leading-relaxed tracking-[0.5px]">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Chips */}
                <div className="pt-4 border-t border-[var(--card-border)]">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[var(--background)] border border-[var(--card-border)] text-[14px] font-normal text-[var(--muted-text)] tracking-[0.5px]"
                      >
                        <CheckCircle className="w-3 h-3 text-[#a67c00]" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Standard CTA Button (px-8 py-4) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center pt-4"
        >
          <Link
            href={projectsSectionData.cta.href}
            className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#a67c00] hover:bg-[#8e6900] text-white font-semibold text-[14px] tracking-[2px] uppercase shadow-lg shadow-[#a67c00]/20 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <span className="relative z-10">{projectsSectionData.cta.label}</span>
            <ArrowRight className="w-4 h-4 text-white transform transition-transform duration-300 group-hover:translate-x-1 relative z-10" />

            {/* Hover Glare Animation */}
            <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}