"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Building2, Contact, Phone, MapPin, X, ExternalLink, Globe2 } from "lucide-react";

interface Branch {
  city: string;
  company: string;
  address: string[];
  phone: string;
  mapLink: string;
  embedMapUrl: string;
  countryCode: string;
}

const branchesData: Branch[] = [
  {
    city: "Riyadh, Saudi Arabia",
    company: "Alfanar Corporate Headquarters,",
    address: ["Alfanar Complex, Northern Ring Road,", "P.O. Box 564,", "Riyadh 11383, KSA"],
    phone: "+966 11 920006111",
    countryCode: "KSA",
    mapLink: "https://maps.google.com/?q=Alfanar+Headquarters+Riyadh",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.12345!2d46.675!3d24.713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQyJzQ2LjgiTiA0NsKwNDAnMzAuMCJF!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
  },
  {
    city: "Madrid, Spain",
    company: "Alfanar Energia Europe,",
    address: ["Calle Velazquez 34,", "2nd Floor,", "Madrid 28001, Spain"],
    phone: "+34 910 106 873",
    countryCode: "ESP",
    mapLink: "https://maps.google.com/?q=Calle+Velazquez+34+Madrid",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.12345!2d-3.685!3d40.425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI1JzMwLjAiTiAzwrA0MScwNi4wIlc!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
  },
  {
    city: "Cairo, Egypt",
    company: "Alfanar Projects Egypt,",
    address: ["181 Salah Salem Street,", "In front of Military Academy,", "Cairo 11736, Egypt"],
    phone: "+20 2 22662903",
    countryCode: "EGY",
    mapLink: "https://maps.google.com/?q=181+Salah+Salem+Street+Cairo",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.12345!2d31.325!3d30.085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA1JzA2LjAiTiAzMcKwMTknMzAuMCJF!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
  },
  {
    city: "London, UK",
    company: "Alfanar Energy Limited,",
    address: ["1-6 Lombard Street,", "London,", "EC3V 9AA, UK"],
    phone: "+44 207 6232 911",
    countryCode: "UK",
    mapLink: "https://maps.google.com/?q=1-6+Lombard+Street+London",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.12345!2d-0.088!3d51.512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTEgw4MzMCc0My4yIk4gMMKwMDUnMTYuOCJX!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
  }
];

export default function OfficeBranchesTabs() {
  const [activeTab, setActiveTab] = useState<"offices" | "contacts">("offices");
  const [selectedMapBranch, setSelectedMapBranch] = useState<Branch | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    /* ─── 🏛️ TAB MODULE INTERFACE ─── */
    <div className="w-full bg-white py-20 lg:py-32 overflow-hidden relative border-b border-gray-200/60 select-none">
      
      {/* 🛠️ UX MATRIX CONTAINER */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">

        {/* ──── TAB SELECTION CONTROL DESK ──── */}
        <div className="w-full flex items-center justify-start gap-8 sm:gap-12 mb-16 border-b border-gray-200/80 pb-4 relative z-20">
          <button
            onClick={() => setActiveTab("offices")}
            className={`flex items-center gap-2.5 text-xl sm:text-2xl font-black tracking-[1px] relative pb-2 transition-colors duration-300 cursor-pointer uppercase ${
              activeTab === "offices" ? "text-blue" : "text-gray-400 hover:text-[#051329]"
            }`}
          >
            <Building2 className="w-6 h-6" />
            <span>Our Global Offices</span>
            {activeTab === "offices" && (
              <motion.div layoutId="activeTabUnderline" className="absolute bottom-[-17px] left-0 right-0 h-1 bg-cyan-400" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("contacts")}
            className={`flex items-center gap-2.5 text-xl sm:text-2xl font-black tracking-[1px] relative pb-2 transition-colors duration-300 cursor-pointer uppercase ${
              activeTab === "contacts" ? "text-blue" : "text-gray-400 hover:text-[#051329]"
            }`}
          >
            <Contact className="w-6 h-6" />
            <span>Regional Hubs</span>
            {activeTab === "contacts" && (
              <motion.div layoutId="activeTabUnderline" className="absolute bottom-[-17px] left-0 right-0 h-1 bg-cyan-400" />
            )}
          </button>
        </div>

        {/* ──── DYNAMIC DISPATCH PANELS DECK ──── */}
        <div className="w-full min-h-[440px]">
          <AnimatePresence mode="wait">
            {activeTab === "offices" ? (

              /* ─── TAB 1 PANEL: INTERNATIONAL BRANCHES MATRIX GRID ─── */
              <motion.div
                key="offices-track"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -15 }}
                className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
              >
                {branchesData.map((branch) => (
                  <motion.div
                    key={branch.city}
                    variants={fadeInUpVariants}
                    className="group flex flex-col justify-between items-start text-left p-8 bg-slate-50/80 border border-gray-200/80 rounded-3xl hover:bg-white hover:border-cyan-400/60 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="w-full">
                      {/* Country Identifier Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-10 h-10 rounded-2xl bg-blue/10 border border-blue/20 text-blue flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-[#051329] group-hover:border-cyan-400 transition-all duration-300">
                          <Globe2 className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold text-cyan-600 tracking-[1.5px] uppercase bg-cyan-500/10 px-2.5 py-1 rounded-full">
                          {branch.countryCode}
                        </span>
                      </div>

                      {/* City Name */}
                      <h3 className="text-xl font-black text-[#051329] tracking-[1px] uppercase mb-3 group-hover:text-blue transition-colors">
                        {branch.city}
                      </h3>

                      {/* Address Details */}
                      <div className="text-gray-600 font-normal text-xs sm:text-sm leading-relaxed tracking-[0.5px] mb-6 flex flex-col min-h-[85px]">
                        <p className="text-[#051329] font-bold">{branch.company}</p>
                        {branch.address.map((line, lIdx) => (
                          <p key={lIdx}>{line}</p>
                        ))}
                      </div>
                    </div>

                    <div className="w-full flex flex-col gap-4 mt-auto">
                      {/* Interactive Call Line Gateway */}
                      <a
                        href={`tel:${branch.phone.replace(/\s+/g, "")}`}
                        className="inline-flex items-center gap-2 text-[#051329] font-bold text-xs sm:text-sm hover:text-blue transition-colors tracking-[1px] self-start"
                      >
                        <Phone className="w-3.5 h-3.5 text-cyan-600" />
                        <span>{branch.phone}</span>
                      </a>

                      {/* Embedded Map Modal Trigger Button */}
                      <button
                        type="button"
                        onClick={() => setSelectedMapBranch(branch)}
                        className="group/btn relative overflow-hidden inline-flex items-center justify-between px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue via-[#00529b] to-blue border border-white/20 text-white text-xs font-bold tracking-[2px] uppercase hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:border-cyan-400 transition-all duration-300 shadow-md active:scale-95 cursor-pointer w-full"
                      >
                        <span className="relative z-10">VIEW ON MAP</span>
                        <MapPin className="w-4 h-4 text-cyan-400 relative z-10" />
                        <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover/btn:translate-x-[300%] transition-transform duration-1000 ease-out" />
                      </button>
                    </div>

                    {/* Bottom Glowing Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue via-cyan-400 to-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </motion.div>
            ) : (

              /* ─── TAB 2 PANEL: REGIONAL LOGISTICS WITH MAP GRID ─── */
              <motion.div
                key="contacts-track"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                <div className="lg:col-span-7 p-8 bg-slate-50/80 border border-gray-200/80 rounded-3xl shadow-xl relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 bottom-0 right-0 w-1.5 bg-cyan-400" />
                  
                  <div>
                    <span className="text-xs font-bold text-cyan-600 tracking-[2px] uppercase block mb-2">
                      TECHNICAL DIVISION
                    </span>
                    <h3 className="text-2xl font-black text-[#051329] tracking-[1px] uppercase mb-6">
                      Alfanar Technical Services Hub
                    </h3>

                    <div className="w-full border-b border-gray-200/80 pb-6 mb-6">
                      <div className="text-gray-600 font-normal text-sm sm:text-base leading-relaxed tracking-[0.5px] flex flex-col gap-1">
                        <p className="text-[#051329] font-bold">Jubail Industrial City,</p>
                        <p>P.O. Box 35388,</p>
                        <p>Jubail 31961, Kingdom of Saudi Arabia</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4">
                    <a
                      href="tel:+966133418777"
                      className="inline-flex items-center gap-2.5 text-[#051329] font-black text-sm sm:text-base hover:text-blue transition-colors tracking-[1px] group/phone"
                    >
                      <div className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center bg-white shadow-sm text-blue group-hover/phone:bg-blue group-hover/phone:text-white transition-all">
                        <Phone className="w-4 h-4 text-cyan-600" />
                      </div>
                      <span>+966 13 341 8777</span>
                    </a>

                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-blue hover:text-cyan-600 uppercase tracking-[1.5px] transition-colors"
                    >
                      <span>OPEN EXTERNAL MAP</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* SIDE-BY-SIDE MAP DISPLAY FOR TAB 2 */}
                <div className="lg:col-span-5 h-[300px] lg:h-auto rounded-3xl overflow-hidden border border-gray-200/80 shadow-lg relative min-h-[250px]">
                  <iframe
                    title="Jubail Technical Services Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.00000!2d49.65000!3d27.00000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDAwJzAwLjAiTiA0OcKwMzknMDAuMCJF!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
                    className="w-full h-full border-0 filter grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </section>

      {/* ─── MAP LIGHTBOX MODAL OVERLAY ─── */}
      <AnimatePresence>
        {selectedMapBranch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-[#051329]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedMapBranch(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-2xl w-full max-w-3xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 bg-[#051329] text-white flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-black uppercase tracking-[1.5px]">{selectedMapBranch.city}</h4>
                  <p className="text-xs text-cyan-400 font-bold tracking-[0.5px]">{selectedMapBranch.company}</p>
                </div>
                <button
                  onClick={() => setSelectedMapBranch(null)}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-[#051329] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Embed Map Body */}
              <div className="w-full h-[350px] sm:h-[400px] relative bg-slate-100">
                <iframe
                  title={selectedMapBranch.city}
                  src={selectedMapBranch.embedMapUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-5 bg-slate-50 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs text-gray-600 font-medium tracking-[0.5px]">
                  {selectedMapBranch.address.join(" ")}
                </span>
                <a
                  href={selectedMapBranch.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue text-white text-xs font-bold uppercase tracking-[1.5px] hover:bg-[#00529b] transition-colors shrink-0"
                >
                  <span>GOOGLE MAPS</span>
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}