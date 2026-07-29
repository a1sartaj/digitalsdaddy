"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  MessageSquare,
  Calendar,
} from "lucide-react";
import { footerData } from "@/assets/data/footer/footer";
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";


// Dynamic Social Icon Switcher
const renderSocialIcon = (iconName: string) => {
  const iconProps = { className: "w-4 h-4" };
  switch (iconName) {
    case "Linkedin":
      return <FaLinkedin {...iconProps} />;
    case "Instagram":
      return <FaInstagram {...iconProps} />;
    case "Twitter":
      return <FaTwitter {...iconProps} />;
    case "Facebook":
      return <FaFacebook {...iconProps} />;
    case "Youtube":
      return <FaYoutube {...iconProps} />;
    default:
      return <FaLinkedin {...iconProps} />;
  }
};

export default function Footer() {
  return (
    <footer className="relative bg-[#090d16] text-white overflow-hidden border-t border-white/10 transition-colors duration-300 select-none">

      {/* Background Ambient Glow Lens */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-[#355396]/15 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#a67c00]/10 blur-[150px] pointer-events-none rounded-full" />

      {/* Constraints: Max-width 1600px / max-w-400, Padding: px-4 lg:px-8 */}
      <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-8 relative z-10 pt-16 pb-12 space-y-12">

        {/* 1. TOP HEADER STRIP: FAST CONTACT CHANNELS */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col lg:flex-row lg:items-center justify-between gap-6">

          {/* Brand Logo & Tagline */}
          <div className="space-y-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-[24px] sm:text-[28px] font-semibold tracking-[1px] text-white">
                Digitals<span className="text-[#a67c00]">Daddy</span>
              </span>
            </Link>
            <p className="text-[14px] text-slate-300 font-normal tracking-[0.5px]">
              {footerData.brand.tagline}
            </p>
          </div>

          {/* Quick Contact Badges */}
          <div className="flex flex-wrap items-center gap-6 text-[14px]">
            <a
              href={footerData.topBarContacts.phoneHref}
              className="flex items-center gap-2.5 text-slate-200 hover:text-[#a67c00] transition-colors"
            >
              <div className="p-2 rounded-xl bg-[#355396]/30 text-[#a67c00]">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-medium tracking-[0.5px]">
                {footerData.topBarContacts.phone}
              </span>
            </a>

            <a
              href={footerData.topBarContacts.emailHref}
              className="flex items-center gap-2.5 text-slate-200 hover:text-[#a67c00] transition-colors"
            >
              <div className="p-2 rounded-xl bg-[#355396]/30 text-[#a67c00]">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-medium tracking-[0.5px]">
                {footerData.topBarContacts.email}
              </span>
            </a>

            <div className="flex items-center gap-2.5 text-slate-300">
              <div className="p-2 rounded-xl bg-[#355396]/30 text-[#a67c00]">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="font-normal tracking-[0.5px] max-w-xs truncate">
                {footerData.topBarContacts.address}
              </span>
            </div>
          </div>

        </div>

        {/* 2. MAIN FOOTER CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pt-4">

          {/* LEFT BRAND SUMMARY & SOCIALS (4 COLS) */}
          <div className="lg:col-span-4 space-y-6">
            <p className="text-[14px] text-slate-300 font-normal leading-relaxed tracking-[0.5px] max-w-sm">
              {footerData.brand.description}
            </p>

            {/* Social Links */}
            <div className="space-y-3">
              <span className="text-[14px] font-semibold tracking-[2px] uppercase text-[#a67c00] block">
                Follow Us
              </span>
              <div className="flex items-center gap-2.5">
                {footerData.socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow DigitalsDaddy on ${social.platform}`}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#a67c00] hover:bg-[#a67c00] text-slate-200 hover:text-white flex items-center justify-center transition-all duration-300"
                  >
                    {renderSocialIcon(social.iconName)}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Locations Summary */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-[14px] font-semibold tracking-[2px] uppercase text-[#a67c00] block">
                Regional Contact Hubs
              </span>
              <div className="space-y-1.5 text-[14px]">
                {footerData.cityContacts.map((contact) => (
                  <div
                    key={contact.city}
                    className="flex items-center justify-between text-slate-300"
                  >
                    <span className="font-medium tracking-[0.5px]">
                      {contact.city}:
                    </span>
                    <a
                      href={contact.href}
                      className="hover:text-[#a67c00] transition-colors font-normal tracking-[0.5px]"
                    >
                      {contact.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* DYNAMIC NAVIGATION LINK GROUPS (8 COLS) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerData.linkGroups.map((group) => (
              <div key={group.title} className="space-y-4">
                <h3 className="text-[16px] font-semibold text-white tracking-[1px]">
                  {group.title}
                </h3>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[14px] text-slate-300 hover:text-[#a67c00] font-normal tracking-[0.5px] transition-colors inline-flex items-center gap-1.5 group"
                      >
                        <span>{link.label}</span>
                        {link.isAiHighlight && (
                          <Sparkles className="w-3 h-3 text-[#a67c00] animate-pulse" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* 3. QUICK ACTIONS & DISCLAIMER STRIP */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-[14px] text-slate-400">

          <p className="text-[14px] font-normal tracking-[0.5px] max-w-2xl text-center md:text-left">
            {footerData.legal.disclaimer}
          </p>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href={footerData.quickActions.whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 font-medium text-[14px] tracking-[1px] hover:bg-emerald-600 hover:text-white transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{footerData.quickActions.whatsAppLabel}</span>
            </a>

            <Link
              href={footerData.quickActions.scheduleCallHref}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#355396]/30 border border-[#355396]/50 text-white font-medium text-[14px] tracking-[1px] hover:bg-[#355396] transition-all"
            >
              <Calendar className="w-3.5 h-3.5 text-[#a67c00]" />
              <span>{footerData.quickActions.scheduleCallLabel}</span>
            </Link>
          </div>

        </div>

        {/* 4. BOTTOM COPYRIGHT & COMPLIANCE BAR */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[14px] text-slate-400">

          <span className="font-normal tracking-[0.5px]">
            {footerData.legal.copyrightText}
          </span>

          {/* Legal Links & Badges */}
          <div className="flex flex-wrap items-center gap-6">
            {footerData.legal.certifications.map((cert) => (
              <span
                key={cert}
                className="text-[12px] font-medium tracking-[1px] uppercase bg-white/5 border border-white/10 text-slate-300 px-3 py-1 rounded-full"
              >
                {cert}
              </span>
            ))}

            {footerData.legal.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-[#a67c00] transition-colors font-normal tracking-[0.5px]"
              >
                {link.label}
              </Link>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}