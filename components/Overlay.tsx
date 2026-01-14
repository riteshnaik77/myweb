"use client";

import { MotionValue, useTransform, motion } from "framer-motion";
import { track } from "@vercel/analytics";

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    // Section 1: 0% - 15% (Founder Identity)
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

    // Section 2: 15% - 40% (Transition to PM + AI Focus)
    const opacity2 = useTransform(scrollYProgress, [0.15, 0.2, 0.35, 0.4], [0, 1, 1, 0]);
    const x2 = useTransform(scrollYProgress, [0.15, 0.2, 0.4], [-50, 0, -50]);

    // Section 3: 40% - 65% (Impact Highlights)
    const opacity3 = useTransform(scrollYProgress, [0.4, 0.45, 0.6, 0.65], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.4, 0.45], [50, 0]);

    // Section 4: 65% - 85% (Case Study Teasers)
    const opacity4 = useTransform(scrollYProgress, [0.65, 0.7, 0.8, 0.85], [0, 1, 1, 0]);
    const x4 = useTransform(scrollYProgress, [0.65, 0.7, 0.85], [50, 0, 50]);

    // Section 5: 85% - 100% (Personal Philosophy + Next Steps)
    const opacity5 = useTransform(scrollYProgress, [0.85, 0.9, 1], [0, 1, 1]);
    const y5 = useTransform(scrollYProgress, [0.85, 0.9], [50, 0]);

    return (
        <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center items-center text-white">
            {/* Section 1 - Intro */}
            <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute text-center px-4 max-w-5xl">
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                    Ritesh
                </h1>
                <p className="text-xl md:text-4xl text-white font-medium tracking-tight mb-4 text-balance">
                    AI Product Manager & Former Founder Driving Real Business Impact
                </p>
                <p className="text-gray-400 text-lg md:text-xl font-light max-w-3xl mx-auto">
                    Building enterprise AI platforms, RAG workflows, and automation products that increase productivity, reduce time-to-value, and improve user satisfaction.
                </p>

                <div className="mt-12 flex flex-wrap justify-center gap-6 opacity-80">
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-white">90%</span>
                        <span className="text-[10px] uppercase tracking-widest text-gray-500">Time Saved</span>
                    </div>
                    <div className="w-px h-10 bg-white/10" />
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-white">80%</span>
                        <span className="text-[10px] uppercase tracking-widest text-gray-500">Automation</span>
                    </div>
                    <div className="w-px h-10 bg-white/10" />
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-white">95%</span>
                        <span className="text-[10px] uppercase tracking-widest text-gray-500">Satisfaction</span>
                    </div>
                </div>

                <p className="mt-12 text-gray-400 text-sm md:text-base max-w-xl mx-auto italic font-light opacity-60">
                    Explore how enterprise AI products I built improved adoption, efficiency, and user satisfaction — mapped to real KPIs from discovery → launch.
                </p>

                <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 pointer-events-auto">
                    <a
                        href="/RiteshNaik_Resume.pdf"
                        download
                        onClick={() => track('portfolio_pdf_clicked', { button: 'hero' })}
                        className="px-8 py-3 bg-white text-black rounded-full font-bold text-base hover:bg-gray-200 transition-colors shadow-lg shadow-white/5"
                    >
                        Portfolio PDF
                    </a>
                    <a
                        href="https://calendly.com/riteshnaik77/30min"
                        target="_blank"
                        onClick={() => track('schedule_call_clicked', { button: 'hero' })}
                        className="px-8 py-3 bg-transparent border border-white/20 text-white rounded-full font-bold text-base hover:bg-white/10 transition-colors"
                    >
                        Schedule 15-min Call
                    </a>
                </div>
            </motion.div>

            {/* Section 2 - Transition */}
            <motion.div style={{ opacity: opacity2, x: x2 }} className="absolute left-6 md:left-24 top-1/2 -translate-y-1/2 max-w-2xl text-left">
                <h2 className="text-4xl md:text-7xl font-bold mb-6 text-white leading-tight tracking-tighter">
                    From Startup to <br /> Enterprise AI Products
                </h2>
                <p className="text-xl md:text-3xl text-gray-300 leading-relaxed border-l-4 border-blue-500 pl-6">
                    Solving real-world problems with <br />
                    <span className="text-white font-semibold italic">measurable business impact</span>.
                </p>
            </motion.div>

            {/* Section 3 - Philosophy */}
            <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute text-center px-4 max-w-4xl">
                <h2 className="text-4xl md:text-7xl font-bold mb-8 text-white tracking-tighter">
                    "Move Metrics, Not Features"
                </h2>
                <div className="flex flex-wrap justify-center gap-4 md:gap-12 text-balance">
                    <span className="text-xl md:text-2xl text-gray-400 font-light border border-white/10 px-6 py-2 rounded-full whitespace-nowrap">Impact over Output</span>
                    <span className="text-xl md:text-2xl text-gray-400 font-light border border-white/10 px-6 py-2 rounded-full whitespace-nowrap">Time Saved</span>
                    <span className="text-xl md:text-2xl text-gray-400 font-light border border-white/10 px-6 py-2 rounded-full whitespace-nowrap">CSAT Improved</span>
                </div>
            </motion.div>

            {/* Section 4 - Value Prop */}
            <motion.div style={{ opacity: opacity4, x: x4 }} className="absolute right-6 md:right-24 top-1/2 -translate-y-1/2 max-w-2xl text-right">
                <h2 className="text-4xl md:text-7xl font-bold mb-6 text-white leading-tight tracking-tighter">
                    Transparency. <br /> Metrics. Direction.
                </h2>
                <p className="text-xl md:text-3xl text-gray-300 leading-relaxed border-r-4 border-purple-500 pr-6">
                    What I build is not flashy — it’s <span className="text-white font-semibold">useful</span>, <span className="text-white font-semibold">measurable</span>, and <span className="text-white font-semibold">enterprise-ready</span>.
                </p>
            </motion.div>

            {/* Section 5 - Final CTA */}
            <motion.div style={{ opacity: opacity5, y: y5 }} className="absolute text-center px-4 max-w-4xl">
                <h2 className="text-5xl md:text-8xl font-bold mb-8 text-white tracking-tighter">
                    Let’s build <br /> what matters.
                </h2>
                <p className="text-xl md:text-3xl text-gray-400 font-light mb-12">
                    Your next product challenge starts here.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 pointer-events-auto">
                    <button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-colors"
                    >
                        View Case Studies
                    </button>
                    <a href="https://calendly.com/riteshnaik77/30min" target="_blank" className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                        Schedule Call
                    </a>
                </div>
            </motion.div>
        </div>
    );
}
