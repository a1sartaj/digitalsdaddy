"use client";

import React from "react";

export default function OrganogramDiagram() {
  return (
    <div className="w-full flex flex-col items-center justify-center overflow-x-auto p-2 bg-[#051329] rounded-3xl shadow-2xl border border-white/20 select-none">
      <svg
        viewBox="0 0 1600 900"
        width="100%"
        height="100%"
        className="w-full h-auto max-w-[1600px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Background Grid Pattern */}
          <pattern
            id="gridPattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1"
              strokeOpacity="0.04"
            />
          </pattern>

          {/* Gradients */}
          <linearGradient id="parentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0063AF" />
            <stop offset="100%" stopColor="#002d5a" />
          </linearGradient>

          <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0c2d4a" />
            <stop offset="100%" stopColor="#051329" />
          </linearGradient>

          <linearGradient id="subNodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#11375c" />
            <stop offset="100%" stopColor="#0a1d33" />
          </linearGradient>

          {/* Glow Filter */}
          <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ─── BACKGROUND SURFACE ─── */}
        <rect width="1600" height="900" fill="#051329" rx="24" />
        <rect width="1600" height="900" fill="url(#gridPattern)" rx="24" />

        {/* Ambient Radial Lighting */}
        <circle cx="800" cy="110" r="320" fill="#0063AF" opacity="0.25" filter="blur(80px)" />
        <circle cx="800" cy="480" r="450" fill="#22d3ee" opacity="0.1" filter="blur(100px)" />

        {/* ─── MAIN HEADER BADGE ─── */}
        <text
          x="800"
          y="42"
          textAnchor="middle"
          fill="#38bdf8"
          fontSize="16"
          fontWeight="900"
          letterSpacing="4"
        >
          ALFANAR GROUP • GLOBAL ORGANIZATIONAL STRUCTURE
        </text>

        {/* ─── CONNECTING LINES ENGINE (THICK & HIGH VISIBILITY) ─── */}
        {/* Tier 1 to Pipeline */}
        <path d="M 800 175 L 800 220" stroke="#22d3ee" strokeWidth="4" filter="url(#cyanGlow)" />

        {/* Main Horizontal Bus Line */}
        <path d="M 230 220 L 1370 220" stroke="#22d3ee" strokeWidth="4" filter="url(#cyanGlow)" />

        {/* Vertical Feeders to Tier 2 */}
        <path d="M 230 220 L 230 270" stroke="#22d3ee" strokeWidth="3" />
        <path d="M 610 220 L 610 270" stroke="#22d3ee" strokeWidth="3" />
        <path d="M 990 220 L 990 270" stroke="#22d3ee" strokeWidth="3" />
        <path d="M 1370 220 L 1370 270" stroke="#22d3ee" strokeWidth="3" />

        {/* Vertical Dashed Feeders to Tier 3 */}
        <path d="M 230 370 L 230 460" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="6 4" />
        <path d="M 610 370 L 610 460" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="6 4" />
        <path d="M 990 370 L 990 460" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="6 4" />
        <path d="M 1370 370 L 1370 460" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="6 4" />


        {/* ─── TIER 1: HOLDING BOARD (PARENT NODE) ─── */}
        <g transform="translate(560, 75)">
          <rect
            width="480"
            height="100"
            rx="20"
            fill="url(#parentGrad)"
            stroke="#22d3ee"
            strokeWidth="2.5"
            filter="url(#cyanGlow)"
          />
          <text x="240" y="42" textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="900" letterSpacing="1">
            ALFANAR GROUP HOLDING
          </text>
          <text x="240" y="70" textAnchor="middle" fill="#38bdf8" fontSize="14" fontWeight="800" letterSpacing="2">
            EXECUTIVE BOARD OF DIRECTORS
          </text>
        </g>


        {/* ─── TIER 2: 4 MAIN BUSINESS DIVISIONS ─── */}
        
        {/* Division 1: EPC */}
        <g transform="translate(90, 270)">
          <rect width="280" height="100" rx="16" fill="url(#nodeGrad)" stroke="#22d3ee" strokeWidth="2" />
          <text x="140" y="34" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="900" letterSpacing="2">DIVISION 01</text>
          <text x="140" y="60" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="900">ENGINEERING & CONSTRUCTION</text>
          <text x="140" y="82" textAnchor="middle" fill="#94a3b8" fontSize="13" fontWeight="600">Turnkey EPC Infrastructure</text>
        </g>

        {/* Division 2: Development */}
        <g transform="translate(470, 270)">
          <rect width="280" height="100" rx="16" fill="url(#nodeGrad)" stroke="#22d3ee" strokeWidth="2" />
          <text x="140" y="34" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="900" letterSpacing="2">DIVISION 02</text>
          <text x="140" y="60" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="900">PROJECT DEVELOPMENT</text>
          <text x="140" y="82" textAnchor="middle" fill="#94a3b8" fontSize="13" fontWeight="600">Renewables & Water Plants</text>
        </g>

        {/* Division 3: Manufacturing */}
        <g transform="translate(850, 270)">
          <rect width="280" height="100" rx="16" fill="url(#nodeGrad)" stroke="#22d3ee" strokeWidth="2" />
          <text x="140" y="34" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="900" letterSpacing="2">DIVISION 03</text>
          <text x="140" y="60" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="900">INDUSTRIAL MANUFACTURING</text>
          <text x="140" y="82" textAnchor="middle" fill="#94a3b8" fontSize="13" fontWeight="600">Power & Electrical Systems</text>
        </g>

        {/* Division 4: Digital */}
        <g transform="translate(1230, 270)">
          <rect width="280" height="100" rx="16" fill="url(#nodeGrad)" stroke="#22d3ee" strokeWidth="2" />
          <text x="140" y="34" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="900" letterSpacing="2">DIVISION 04</text>
          <text x="140" y="60" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="900">DIGITAL SOLUTIONS & TECH</text>
          <text x="140" y="82" textAnchor="middle" fill="#94a3b8" fontSize="13" fontWeight="600">Automation & Smart Grids</text>
        </g>


        {/* ─── TIER 3: SUBSIDIARIES & OPERATIONAL UNITS ─── */}

        {/* Column 1 Sub-nodes (EPC) */}
        <g transform="translate(95, 460)">
          {/* Sub 1 */}
          <rect x="0" y="0" width="270" height="72" rx="12" fill="url(#subNodeGrad)" stroke="#ffffff" strokeOpacity="0.15" />
          <text x="135" y="32" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="800">Substations & Transmission</text>
          <text x="135" y="53" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="600">High Voltage Grid Lines</text>

          {/* Sub 2 */}
          <rect x="0" y="90" width="270" height="72" rx="12" fill="url(#subNodeGrad)" stroke="#ffffff" strokeOpacity="0.15" />
          <text x="135" y="122" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="800">Civil & Structural Works</text>
          <text x="135" y="143" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="600">Mega Infrastructure EPC</text>

          {/* Sub 3 */}
          <rect x="0" y="180" width="270" height="72" rx="12" fill="url(#subNodeGrad)" stroke="#ffffff" strokeOpacity="0.15" />
          <text x="135" y="212" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="800">Testing & Commissioning</text>
          <text x="135" y="233" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="600">Grid Operations & O&M</text>
        </g>

        {/* Column 2 Sub-nodes (Development) */}
        <g transform="translate(475, 460)">
          {/* Sub 1 */}
          <rect x="0" y="0" width="270" height="72" rx="12" fill="url(#subNodeGrad)" stroke="#ffffff" strokeOpacity="0.15" />
          <text x="135" y="32" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="800">Solar & Wind IPP Projects</text>
          <text x="135" y="53" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="600">Utility-Scale Clean Energy</text>

          {/* Sub 2 */}
          <rect x="0" y="90" width="270" height="72" rx="12" fill="url(#subNodeGrad)" stroke="#ffffff" strokeOpacity="0.15" />
          <text x="135" y="122" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="800">Water Desalination Plants</text>
          <text x="135" y="143" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="600">IWP & Sustainable Utilities</text>

          {/* Sub 3 */}
          <rect x="0" y="180" width="270" height="72" rx="12" fill="url(#subNodeGrad)" stroke="#ffffff" strokeOpacity="0.15" />
          <text x="135" y="212" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="800">Green Hydrogen & SAF</text>
          <text x="135" y="233" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="600">Sustainable Aviation Fuels</text>
        </g>

        {/* Column 3 Sub-nodes (Manufacturing) */}
        <g transform="translate(855, 460)">
          {/* Sub 1 */}
          <rect x="0" y="0" width="270" height="72" rx="12" fill="url(#subNodeGrad)" stroke="#ffffff" strokeOpacity="0.15" />
          <text x="135" y="32" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="800">Transformers & Switchgears</text>
          <text x="135" y="53" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="600">Certified Electrical Units</text>

          {/* Sub 2 */}
          <rect x="0" y="90" width="270" height="72" rx="12" fill="url(#subNodeGrad)" stroke="#ffffff" strokeOpacity="0.15" />
          <text x="135" y="122" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="800">Power Distribution Panels</text>
          <text x="135" y="143" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="600">Industrial Enclosures</text>

          {/* Sub 3 */}
          <rect x="0" y="180" width="270" height="72" rx="12" fill="url(#subNodeGrad)" stroke="#ffffff" strokeOpacity="0.15" />
          <text x="135" y="212" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="800">Cable & Wiring Systems</text>
          <text x="135" y="233" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="600">High Conductivity Cables</text>
        </g>

        {/* Column 4 Sub-nodes (Digital) */}
        <g transform="translate(1235, 460)">
          {/* Sub 1 */}
          <rect x="0" y="0" width="270" height="72" rx="12" fill="url(#subNodeGrad)" stroke="#ffffff" strokeOpacity="0.15" />
          <text x="135" y="32" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="800">Smart Grid & SCADA</text>
          <text x="135" y="53" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="600">Real-Time Control Systems</text>

          {/* Sub 2 */}
          <rect x="0" y="90" width="270" height="72" rx="12" fill="url(#subNodeGrad)" stroke="#ffffff" strokeOpacity="0.15" />
          <text x="135" y="122" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="800">Industrial IoT & AI</text>
          <text x="135" y="143" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="600">Predictive Maintenance</text>

          {/* Sub 3 */}
          <rect x="0" y="180" width="270" height="72" rx="12" fill="url(#subNodeGrad)" stroke="#ffffff" strokeOpacity="0.15" />
          <text x="135" y="212" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="800">Cybersecurity & Cloud</text>
          <text x="135" y="233" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="600">Enterprise Asset Shield</text>
        </g>

        {/* ─── FOOTER METRICS ─── */}
        <text x="800" y="855" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="700" letterSpacing="2">
          GLOBAL OPERATIONS IN SAUDI ARABIA • MIDDLE EAST • EUROPE • ASIA
        </text>
      </svg>
    </div>
  );
}