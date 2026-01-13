"use client";

import { MotionValue, useTransform, motion } from "framer-motion";

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    // Section 1: 0% - 15% (Fade out by 20%)
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
    const scale1 = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

    // Section 2: 25% - 40% (Moves in from left)
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.25, 0.35, 0.4], [0, 1, 1, 0]);
    const x2 = useTransform(scrollYProgress, [0.2, 0.25, 0.4], [-50, 0, -50]);

    // Section 3: 50% - 65% (Moves in from right)
    const opacity3 = useTransform(scrollYProgress, [0.45, 0.5, 0.6, 0.65], [0, 1, 1, 0]);
    const x3 = useTransform(scrollYProgress, [0.45, 0.5, 0.65], [50, 0, 50]);

    // Section 4: 70% - 85% (Center rise)
    const opacity4 = useTransform(scrollYProgress, [0.7, 0.75, 0.85, 0.9], [0, 1, 1, 0]);
    const y4 = useTransform(scrollYProgress, [0.7, 0.75], [50, 0]);

    return (
        <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center items-center text-white">
            {/* Section 1 - Intro */}
            <motion.div style={{ opacity: opacity1, y: y1, scale: scale1 }} className="absolute text-center px-4 max-w-4xl">
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                    Ritesh
                </h1>
                <p className="text-xl md:text-3xl text-gray-300 font-light tracking-wide mb-4">
                    AI Product Manager & Former Founder
                </p>
                <p className="text-gray-500 text-lg font-medium">
                    Building AI platforms, workflows, and products that move business metrics.
                </p>
            </motion.div>

            {/* Section 2 - Founder Journey */}
            <motion.div style={{ opacity: opacity2, x: x2 }} className="absolute left-4 md:left-20 top-1/2 -translate-y-1/2 max-w-xl text-left px-6">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                    From Founder <br /> to Product Leader
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-blue-500 pl-4">
                    Built and shut down a logistics startup. <br />
                    Learned <span className="text-white font-semibold">ownership</span>, <span className="text-white font-semibold">velocity</span>, and <span className="text-white font-semibold">survival</span>.
                </p>
            </motion.div>

            {/* Section 3 - AI Work */}
            <motion.div style={{ opacity: opacity3, x: x3 }} className="absolute right-4 md:right-20 top-1/2 -translate-y-1/2 max-w-xl text-right px-6">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                    AI Products. <br /> Real Impact.
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed border-r-4 border-purple-500 pr-4">
                    RAG, workflow automation, internal platforms.<br />
                    Not demos — <span className="text-white font-semibold">production systems</span>.
                </p>
            </motion.div>

            {/* Section 4 - Metrics */}
            <motion.div style={{ opacity: opacity4, y: y4 }} className="absolute bottom-20 md:bottom-auto md:top-2/3 text-center max-w-4xl px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-10 text-white">
                    "I don’t ship features. I move metrics."
                </h2>
                <div className="grid grid-cols-3 gap-8 md:gap-16">
                    <div className="flex flex-col items-center">
                        <span className="text-4xl md:text-6xl font-bold text-blue-500">90%</span>
                        <span className="text-sm md:text-base text-gray-400 mt-2 uppercase tracking-widest">Time Saved</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-4xl md:text-6xl font-bold text-purple-500">80%</span>
                        <span className="text-sm md:text-base text-gray-400 mt-2 uppercase tracking-widest">Automation</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-4xl md:text-6xl font-bold text-green-500">95%</span>
                        <span className="text-sm md:text-base text-gray-400 mt-2 uppercase tracking-widest">CSAT</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
