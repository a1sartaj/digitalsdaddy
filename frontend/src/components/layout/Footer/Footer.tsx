"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
} from "lucide-react";
import { footerData } from "@/assets/data/footer/footer";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

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
  const [chatMessage, setChatMessage] = useState(
    footerData.quickActions.message
  );

  const directWhatsAppUrl = `${footerData.quickActions.whatsAppHref}?text=${encodeURIComponent(
    chatMessage
  )}`;

  return (
    <footer className="relative bg-[#090d16] text-white overflow-hidden border-t border-white/10 transition-colors duration-300 select-none">

      {/* Background Ambient Glow Lens */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-[#355396]/15 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#a67c00]/10 blur-[150px] pointer-events-none rounded-full" />

      {/* Constraints: Max-width 1600px / max-w-400, Padding: px-4 lg:px-8 */}
      <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-8 relative z-10 pt-16 pb-12 space-y-12">

        {/* 1. TOP HEADER STRIP: LOGO, TAGLINE & HEADQUARTERS LOCATION */}
        <div className="w-full p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

          {/* LEFT: Logo & Description (Occupies 5 Columns) */}
          <div className="lg:col-span-5 space-y-3">
            <Link href="/" className="inline-block p-2 rounded-xl bg-[var(--background)] border border-white/10">
              <Image
                src={footerData.brand.logoPath}
                alt={footerData.brand.logoAlt}
                width={180}
                height={48}
                className="w-44 h-auto object-contain"
                priority
              />
            </Link>

            <p className="text-[14px] text-slate-300 leading-relaxed">
              {footerData.brand.description}
            </p>
          </div>

          {/* RIGHT: Contact Stack (Occupies 7 Columns, Aligned Far Right) */}
          <div className="lg:col-span-7 flex flex-col gap-3 text-[14px] lg:items-end">

            {/* Row 1: Phone & Email */}
            <div className="flex flex-wrap items-center gap-5 lg:justify-end">
              <a
                href={footerData.topBarContacts.phoneHref}
                className="inline-flex items-center gap-2 text-slate-200 hover:text-[#a67c00] transition-colors"
              >
                <div className="p-2 rounded-lg bg-[#355396]/30 text-[#a67c00]">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-medium">{footerData.topBarContacts.phone}</span>
              </a>

              <a
                href={footerData.topBarContacts.emailHref}
                className="inline-flex items-center gap-2 text-slate-200 hover:text-[#a67c00] transition-colors"
              >
                <div className="p-2 rounded-lg bg-[#355396]/30 text-[#a67c00]">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-medium">{footerData.topBarContacts.email}</span>
              </a>
            </div>

            {/* Row 2: Address */}
            <div className="inline-flex items-center gap-2 text-slate-300 lg:justify-end">
              <div className="p-2 rounded-lg bg-[#355396]/30 text-[#a67c00]">
                <MapPin className="w-4 h-4" />
              </div>
              <span>{footerData.topBarContacts.address}</span>
            </div>

          </div>

        </div>

        {/* 2. MAIN FOOTER CONTENT GRID */}
        <div className="grid grid-cols-1  lg:grid-cols-12 gap-10 lg:gap-8 pt-4">

          {/* LEFT SIDE: DYNAMIC NAVIGATION LINK GROUPS (7 COLS) */}
          <div className="lg:col-span-7 grid grid-cols-2 lg:grid-cols-4 gap-8">
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

          {/* RIGHT SIDE: SOCIALS & REGIONAL OFFICES (5 COLS) */}

          <div className="lg:col-span-5 space-y-6">

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

            {/* Regional Offices List */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <span className="text-[14px] font-semibold tracking-[2px] uppercase text-[#a67c00] block">
                Our Regional Hubs
              </span>
              <div className="space-y-3">
                {footerData.offices.slice(1).map((office) => (
                  <div
                    key={office.city}
                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[14px] font-semibold text-white tracking-[0.5px]">
                        {office.city}
                      </span>
                      <span className="text-[11px] font-medium tracking-[1px] uppercase bg-[#a67c00]/20 text-[#a67c00] border border-[#a67c00]/30 px-2.5 py-0.5 rounded-full">
                        {office.regionTag}
                      </span>
                    </div>

                    <p className="text-[13px] text-slate-300 font-normal leading-relaxed tracking-[0.5px]">
                      {office.address}
                    </p>

                    <a
                      href={`tel:${office.phone.replace(/\s+/g, "")}`}
                      className="text-[13px] text-[#355396] hover:text-[#a67c00] font-medium tracking-[0.5px] block transition-colors"
                    >
                      Tel: {office.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* 3. QUICK ACTIONS & HOVER WHATSAPP CHAT POPUP */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-[14px] text-slate-400">

          <p className="text-[14px] font-normal tracking-[0.5px] max-w-2xl text-center md:text-left">
            {footerData.legal.disclaimer}
          </p>

          {/* RIGHT SIDE: WHATSAPP TRIGGER & DYNAMIC HOVER CARD */}
          <div className="relative group shrink-0">

            {/* Main Trigger Button */}
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 font-semibold text-[14px] tracking-[1px] hover:bg-emerald-600 hover:text-white transition-all shadow-lg shadow-emerald-950/20 cursor-pointer"
            >
              <FaWhatsapp className="w-4 h-4 text-emerald-400 group-hover:text-white transition-colors" />
              <span>{footerData.quickActions.whatsAppLabel}</span>
            </a>

            {/* HIGH-UX WHATSAPP HOVER CHAT CARD CONTAINER */}
            <div className="absolute bottom-full right-0 w-[300px] pb-3 pointer-events-none group-hover:pointer-events-auto z-50">

              {/* INVISIBLE HOVER BRIDGE: Prevents hover loss when moving mouse across the gap */}
              <div className="rounded-2xl bg-[#111b21] border border-emerald-500/30 shadow-2xl overflow-hidden opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">

                {/* Header */}
                <div className="bg-[#075e54] p-3.5 flex items-center gap-3 text-white">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white/10 shrink-0 border border-white/20">
                    {footerData.quickActions.supportAvatar ? (
                      <Image
                        src={footerData.quickActions.supportAvatar}
                        alt="DigitalsDaddy Support"
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <Image
                        src={footerData.brand.logoPath}
                        alt="DigitalsDaddy Logo"
                        fill
                        className="object-contain p-1"
                      />
                    )}
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[14px] font-semibold leading-tight">
                      Digitals Daddy
                    </span>
                    <span className="text-[11px] text-emerald-200/90 font-medium">
                      Typically replies instantly
                    </span>
                  </div>
                </div>

                {/* Chat Body Pattern */}
                <div className="p-4 bg-[#0b141a] space-y-3 min-h-[110px] flex flex-col justify-end">
                  <div className="self-start max-w-[85%] bg-[#202c33] text-slate-100 p-3 rounded-2xl rounded-tl-xs text-[13px] leading-relaxed shadow-sm space-y-1">
                    <p>{chatMessage}</p>
                    <span className="text-[9px] text-slate-400 block text-right">
                      Just now
                    </span>
                  </div>
                </div>

                {/* Footer Input Strip */}
                <div className="p-2.5 bg-[#202c33] border-t border-white/5 flex items-center gap-2">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 bg-[#2a3942] text-slate-100 text-[13px] px-3 py-2 rounded-xl focus:outline-none placeholder-slate-400"
                  />
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-[#00a884] text-white flex items-center justify-center hover:bg-[#008f6f] transition-colors shrink-0"
                  >
                    <Send className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>

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