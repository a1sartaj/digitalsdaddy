"use client";

import Image from "next/image";
import { CheckCircle2, ShieldCheck, Target } from "lucide-react";
import Reveal from '@/components/common/Reveal';
import ourVision from '@/assets/images/about-page/vision/our-vision.jpg';

export default function VisionValues() {
    return (
        /* ─── 🏛️ MODERN HYPER-GRID VISION & VALUES SURFACE ─── */
        <section className="w-full bg-white py-20 lg:py-32 overflow-hidden border-b border-gray-200/60 select-none relative">

            {/* Background Ambient Lens Glow */}
            <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-blue/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">

                {/* ──── LEFT SIDE COLUMN: ULTRA-PREMIUM GRAPHIC INTERFACE (5 COLS) ──── */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[380px] md:min-h-[480px] w-full">
                    <Reveal direction='scale' duration={500}>
                        <div className="relative z-10 p-3 bg-white border border-gray-200/80 shadow-2xl rounded-3xl w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px]">

                            {/* Floating Context Badge */}
                            <div className="absolute -top-5 right-4 z-20 bg-[#051329] text-white backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-bold tracking-[2px] uppercase border border-white/15 flex items-center gap-2 shadow-xl">
                                <Target className="w-3.5 h-3.5 text-cyan-400" />
                                <span>STRATEGIC FOCUS</span>
                            </div>

                            {/* Media Frame Layout Container */}
                            <div className="relative w-full h-full min-h-[350px] sm:min-h-[420px] overflow-hidden rounded-2xl bg-[#051329] flex items-center justify-center aspect-[4/5] sm:aspect-square">
                                <Image
                                    src={ourVision}
                                    alt="Alfanar Power Strategic Corporate Vision"
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    priority
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                                {/* Soft Vignette Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#051329]/50 via-transparent to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* ──── RIGHT SIDE COLUMN: STRUCTURAL VALUE CORE PANEL (7 COLS) ──── */}
                <div className="lg:col-span-7 flex flex-col text-left items-start w-full">

                    {/* Clean Identity Badge */}
                    <Reveal>
                        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-blue/10 border border-blue/20 rounded-full mb-6">
                            <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                            <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-blue">
                                CORPORATE DIRECTIVE
                            </span>
                        </div>
                    </Reveal>

                    {/* Master Headline */}
                    <Reveal direction='right' duration={400} delay={50}>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-[#051329] tracking-[1.5px] leading-[1.15] mb-6">
                            The direction <br />
                            we are <span className="text-blue">going.</span>
                        </h2>
                    </Reveal>

                    {/* Narrative Description Blocks */}
                    <Reveal direction='right' duration={500} delay={100}>
                        <div className="flex flex-col gap-5 text-gray-600 text-sm sm:text-base leading-relaxed font-normal max-w-2xl mb-8 tracking-[0.5px]">
                            <p>
                                Our vision is to be a global leader in project development and engineering construction by leveraging our proven expertise and deploying highly revolutionary technologies.
                            </p>

                            {/* Highlight Box Container */}
                            <div className="w-full flex items-center gap-4 bg-slate-50/80 border-l-4 border-blue border-y border-r border-gray-200/60 px-5 py-4 rounded-r-xl my-2 shadow-sm">
                                <ShieldCheck className="w-5 h-5 text-blue shrink-0" />
                                <p className="text-[#051329] font-bold tracking-[0.5px] text-xs sm:text-sm">
                                    Trust one, trust all Alfanar Projects&apos; employees to build the solid foundation of our culture:
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {/* Structural Value Grids */}
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { title: "Uphold ethics", desc: "Maintaining uncompromising transparency and moral standards in operations." },
                            { title: "Pursue excellence", desc: "Setting engineering benchmarks through extreme quality and rigorous scaling." },
                            { title: "Prioritize collaboration", desc: "Solving global challenges through strategic cross-sector framework partnerships." },
                            { title: "Embrace innovation", desc: "Deploying highly disruptive tools and next-generation technical stacks." },
                            { title: "Fulfill promises", desc: "Honoring infrastructure commitments with absolute corporate accountability." }
                        ].map((value, index) => (
                            <Reveal
                                key={value.title}
                                direction='right'
                                duration={400 + index * 50}
                                delay={150 + index * 30}
                                wrapperClassName={index === 4 ? "sm:col-span-2" : ""}
                            >
                                <div className="group h-full p-5 bg-slate-50/80 border border-gray-200/80 rounded-2xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white hover:shadow-xl flex gap-4 items-start text-left">
                                    <CheckCircle2 className="w-5 h-5 text-blue group-hover:text-cyan-500 transition-colors duration-300 shrink-0 mt-0.5" />
                                    <div className="flex flex-col min-w-0">
                                        <h3 className="text-xs sm:text-sm font-extrabold text-[#051329] tracking-[1px] uppercase mb-1">
                                            {value.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed tracking-[0.5px]">
                                            {value.desc}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}