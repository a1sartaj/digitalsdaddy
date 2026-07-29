"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Send, UserCheck, Megaphone, FileText, ChevronDown, ArrowRight } from "lucide-react";
import rightShape from '@/assets/images/Join-shape/join-shape-big-right.svg';

const categories = [
    { name: "General Enquiry", icon: <Send className="w-3.5 h-3.5" /> },
    { name: "Supplier", icon: <UserCheck className="w-3.5 h-3.5" /> },
    { name: "Press", icon: <Megaphone className="w-3.5 h-3.5" /> },
    { name: "Recruitment", icon: <FileText className="w-3.5 h-3.5" /> }
];

export default function GetInTouchForm() {
    const [activeTab, setActiveTab] = useState("General Enquiry");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        country: "",
        company: "",
        subject: "",
        requestType: "",
        message: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(`Submitted dynamic form data for ${activeTab}:`, formData);
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.06 }
        }
    };

    return (
        /* ─── 🏛️ FIXED NATURAL STACKING WRAPPER ─── */
        <div className="w-full bg-white py-20 lg:py-32 overflow-hidden relative border-b border-gray-200/60 z-0 select-none">
            
            <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full grid grid-cols-1 lg:grid-cols-12 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200/80"
                >

                    {/* ──── LEFT AREA MODULE: CORPORATE INFORMATION BRAND DECK ──── */}
                    <div className="lg:col-span-4 bg-[#051329] p-8 sm:p-12 md:p-16 flex flex-col justify-center items-start text-left relative overflow-hidden shrink-0">
                        
                        <div className="absolute inset-0 bg-white/[0.015] bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.08)_0%,transparent_50%)] pointer-events-none z-0" />
                        
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay scale-105">
                            <Image src={rightShape} alt="" fill className="object-cover" />
                        </div>

                        <div className="relative z-10 w-full">
                            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white/10 border border-white/15 rounded-full mb-6 shadow-md backdrop-blur-sm">
                                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                                <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-white">
                                    FILL THE FORM
                                </span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-[1.5px] leading-tight uppercase mb-5">
                                Get in touch <br />
                                <span className="text-cyan-400">with us.</span>
                            </h2>

                            <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-normal tracking-[0.5px] max-w-xs">
                                Our dynamic specialist teams review and respond to all system requests within two administrative business days.
                            </p>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue via-cyan-400 to-blue z-20" />
                    </div>

                    {/* ──── RIGHT AREA MODULE: INTERACTIVE MULTI-TAB SWITCH FORM ──── */}
                    <div className="lg:col-span-8 p-6 sm:p-12 md:p-16 text-left flex flex-col justify-start bg-white w-full">

                        {/* TAB NAV SELECTOR CONTROLS STRIP */}
                        <div className="w-full flex overflow-x-auto gap-3 sm:gap-4 border-b border-gray-200/80 pb-4 mb-10 no-scrollbar select-none">
                            {categories.map((tab) => {
                                const isActive = activeTab === tab.name;
                                return (
                                    <button
                                        key={tab.name}
                                        type="button"
                                        onClick={() => setActiveTab(tab.name)}
                                        className={`flex items-center gap-2.5 h-11 px-5 rounded-xl text-xs font-bold tracking-[1px] uppercase whitespace-nowrap transition-all duration-300 cursor-pointer border ${
                                            isActive
                                                ? "bg-[#051329] border-cyan-400/50 text-white shadow-md"
                                                : "text-gray-600 hover:text-[#051329] bg-slate-50 border-gray-200"
                                        }`}
                                    >
                                        {tab.icon}
                                        <span>{tab.name}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* FORM SWITCH ENTRY CAROUSEL PACKET */}
                        <div className="w-full min-h-[360px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="w-full"
                                >
                                    {activeTab === "General Enquiry" && (
                                        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
                                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First Name" required className="w-full bg-slate-50 text-gray-800 placeholder-gray-400 text-xs sm:text-sm font-normal px-5 h-12 rounded-xl border border-gray-200/80 outline-none focus:border-cyan-400 transition-all tracking-[0.5px] shadow-sm" />
                                                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last Name" required className="w-full bg-slate-50 text-gray-800 placeholder-gray-400 text-xs sm:text-sm font-normal px-5 h-12 rounded-xl border border-gray-200/80 outline-none focus:border-cyan-400 transition-all tracking-[0.5px] shadow-sm" />
                                            </div>
                                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address" required className="w-full bg-slate-50 text-gray-800 placeholder-gray-400 text-xs sm:text-sm font-normal px-5 h-12 rounded-xl border border-gray-200/80 outline-none focus:border-cyan-400 transition-all tracking-[0.5px] shadow-sm" />
                                            
                                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} placeholder="Mobile Contact Number" required className="w-full bg-slate-50 text-gray-800 placeholder-gray-400 text-xs sm:text-sm font-normal px-5 h-12 rounded-xl border border-gray-200/80 outline-none focus:border-cyan-400 transition-all tracking-[0.5px] shadow-sm" />
                                                
                                                <div className="w-full relative">
                                                    <select name="country" value={formData.country} onChange={handleInputChange} required className="w-full bg-slate-50 text-gray-800 placeholder-gray-400 text-xs sm:text-sm font-normal px-5 h-12 rounded-xl border border-gray-200/80 appearance-none outline-none focus:border-cyan-400 transition-all tracking-[0.5px] cursor-pointer shadow-sm">
                                                        <option value="" disabled className="text-gray-400">Select Country</option>
                                                        <option value="Saudi Arabia" className="text-gray-800">Kingdom of Saudi Arabia</option>
                                                        <option value="United Arab Emirates" className="text-gray-800">United Arab Emirates</option>
                                                        <option value="India" className="text-gray-800">India</option>
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400"><ChevronDown className="w-4 h-4" /></div>
                                                </div>
                                            </div>

                                            <input type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Company / Enterprise Name" required className="w-full bg-slate-50 text-gray-800 placeholder-gray-400 text-xs sm:text-sm font-normal px-5 h-12 rounded-xl border border-gray-200/80 outline-none focus:border-cyan-400 transition-all tracking-[0.5px] shadow-sm" />
                                            
                                            <div className="w-full relative">
                                                <select name="subject" value={formData.subject} onChange={handleInputChange} required className="w-full bg-slate-50 text-gray-800 placeholder-gray-400 text-xs sm:text-sm font-normal px-5 h-12 rounded-xl border border-gray-200/80 appearance-none outline-none focus:border-cyan-400 transition-all tracking-[0.5px] cursor-pointer shadow-sm">
                                                    <option value="" disabled className="text-gray-400">Inquiry Topic Subject</option>
                                                    <option value="Business Proposition" className="text-gray-800">Business Proposition</option>
                                                    <option value="General Support" className="text-gray-800">General Support Inquiry</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400"><ChevronDown className="w-4 h-4" /></div>
                                            </div>

                                            <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Describe details of your request message here..." rows={4} required className="w-full bg-slate-50 text-gray-800 placeholder-gray-400 text-xs sm:text-sm font-normal px-5 py-4 rounded-xl border border-gray-200/80 outline-none focus:border-cyan-400 transition-all tracking-[0.5px] resize-none shadow-sm" />
                                            
                                            <button 
                                                type="submit" 
                                                className="group relative overflow-hidden inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-blue via-[#00529b] to-blue border border-white/20 text-white font-bold text-xs tracking-[2px] uppercase transition-all duration-500 shadow-[0_0_20px_rgba(0,99,175,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:border-cyan-400 active:scale-95 cursor-pointer self-start"
                                            >
                                                <span className="relative z-10">Submit Dispatch</span>
                                                <ArrowRight className="w-4 h-4 text-cyan-400 transform transition-transform duration-300 group-hover:translate-x-1.5 relative z-10" />
                                                <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                                            </button>
                                        </form>
                                    )}

                                    {activeTab === "Supplier" && (
                                        <div className="w-full flex flex-col items-start justify-center py-6 text-left max-w-2xl">
                                            <h4 className="text-lg sm:text-xl font-black text-[#051329] tracking-[1px] uppercase mb-3">
                                                Partner Infrastructure Registration
                                            </h4>
                                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal tracking-[0.5px] mb-4">
                                                Join our globally trusted secure supply network chain ecosystem of premier vendors and operational delivery partners.
                                            </p>
                                            <p className="text-blue text-xs sm:text-sm leading-relaxed font-medium tracking-[0.5px] mb-8 border-l-2 border-cyan-400 pl-4 bg-slate-50 p-3 rounded-r-xl">
                                                We work side-by-side with global entities that share our absolute strict milestones dedication to operational quality, technical innovation, and safety standards execution.
                                            </p>
                                            
                                            <button 
                                                type="button" 
                                                className="group relative overflow-hidden inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-blue via-[#00529b] to-blue border border-white/20 text-white font-bold text-xs tracking-[2px] uppercase transition-all duration-500 shadow-[0_0_20px_rgba(0,99,175,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:border-cyan-400 active:scale-95 cursor-pointer self-start"
                                            >
                                                <span className="relative z-10">Vendor Onboarding Entrance</span>
                                                <ArrowRight className="w-4 h-4 text-cyan-400 transform transition-transform duration-300 group-hover:translate-x-1.5 relative z-10" />
                                                <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                                            </button>
                                        </div>
                                    )}

                                    {activeTab === "Press" && (
                                        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
                                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First Name" required className="w-full bg-slate-50 text-gray-800 placeholder-gray-400 text-xs sm:text-sm font-normal px-5 h-12 rounded-xl border border-gray-200/80 outline-none focus:border-cyan-400 transition-all tracking-[0.5px] shadow-sm" />
                                                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last Name" required className="w-full bg-slate-50 text-gray-800 placeholder-gray-400 text-xs sm:text-sm font-normal px-5 h-12 rounded-xl border border-gray-200/80 outline-none focus:border-cyan-400 transition-all tracking-[0.5px] shadow-sm" />
                                            </div>
                                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Journalist / Agency Email" required className="w-full bg-slate-50 text-gray-800 placeholder-gray-400 text-xs sm:text-sm font-normal px-5 h-12 rounded-xl border border-gray-200/80 outline-none focus:border-cyan-400 transition-all tracking-[0.5px] shadow-sm" />
                                            
                                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} placeholder="Press Desk Mobile" required className="w-full bg-slate-50 text-gray-800 placeholder-gray-400 text-xs sm:text-sm font-normal px-5 h-12 rounded-xl border border-gray-200/80 outline-none focus:border-cyan-400 transition-all tracking-[0.5px] shadow-sm" />
                                                <div className="w-full relative">
                                                    <select name="requestType" value={formData.requestType} onChange={handleInputChange} required className="w-full bg-slate-50 text-gray-800 placeholder-gray-400 text-xs sm:text-sm font-normal px-5 h-12 rounded-xl border border-gray-200/80 appearance-none outline-none focus:border-cyan-400 transition-all tracking-[0.5px] cursor-pointer shadow-sm">
                                                        <option value="" disabled className="text-gray-400">Media Intent Request</option>
                                                        <option value="Media Interview" className="text-gray-800">Strategic Interview</option>
                                                        <option value="Press Release" className="text-gray-800">Press Publication Release</option>
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400"><ChevronDown className="w-4 h-4" /></div>
                                                </div>
                                            </div>

                                            <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Enter your specific press editorial query details..." rows={4} required className="w-full bg-slate-50 text-gray-800 placeholder-gray-400 text-xs sm:text-sm font-normal px-5 py-4 rounded-xl border border-gray-200/80 outline-none focus:border-cyan-400 transition-all tracking-[0.5px] resize-none shadow-sm" />
                                            
                                            <button 
                                                type="submit" 
                                                className="group relative overflow-hidden inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-blue via-[#00529b] to-blue border border-white/20 text-white font-bold text-xs tracking-[2px] uppercase transition-all duration-500 shadow-[0_0_20px_rgba(0,99,175,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:border-cyan-400 active:scale-95 cursor-pointer self-start"
                                            >
                                                <span className="relative z-10">Dispatch Media Ticket</span>
                                                <ArrowRight className="w-4 h-4 text-cyan-400 transform transition-transform duration-300 group-hover:translate-x-1.5 relative z-10" />
                                                <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                                            </button>
                                        </form>
                                    )}

                                    {activeTab === "Recruitment" && (
                                        <div className="w-full flex flex-col items-start justify-center py-6 text-left max-w-2xl">
                                            <h4 className="text-lg sm:text-xl font-black text-[#051329] tracking-[1px] uppercase mb-3">
                                                Global Talent Acquisition Core
                                            </h4>
                                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal tracking-[0.5px] mb-4">
                                                Eager to contribute your technical engineering specializations to large scale high-impact energy infrastructure deployments worldwide?
                                            </p>
                                            <p className="text-blue text-xs sm:text-sm leading-relaxed font-medium tracking-[0.5px] mb-8 border-l-2 border-cyan-400 pl-4 bg-slate-50 p-3 rounded-r-xl">
                                                Become an integral stakeholder inside our engineering trajectory towards carbon-neutral operations execution.
                                            </p>
                                            
                                            <button 
                                                type="button" 
                                                className="group relative overflow-hidden inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-blue via-[#00529b] to-blue border border-white/20 text-white font-bold text-xs tracking-[2px] uppercase transition-all duration-500 shadow-[0_0_20px_rgba(0,99,175,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:border-cyan-400 active:scale-95 cursor-pointer self-start"
                                            >
                                                <span className="relative z-10">Access Portal Entrance</span>
                                                <ArrowRight className="w-4 h-4 text-cyan-400 transform transition-transform duration-300 group-hover:translate-x-1.5 relative z-10" />
                                                <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                                            </button>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </div>
                </motion.div>

            </section>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none !important;
                }
                .no-scrollbar {
                    -ms-overflow-style: none !important;
                    scrollbar-width: none !important;
                }
            `}</style>
        </div>
    );
}