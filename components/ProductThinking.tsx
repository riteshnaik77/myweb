"use client";

import { motion } from "framer-motion";

export default function ProductThinking() {
    return (
        <div className="bg-[#0B0B0F] py-32 px-4 md:px-12 border-t border-white/5 w-full">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-20 text-white tracking-tight">How I Think</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "User-Centricity", desc: "Start with user behavior, not tech. Align solutions with pain intensity and frequency to ensure high adoption." },
                        { title: "Data First", desc: "Define hypotheses and success KPIs (time, adoption, retention) before building. Iterate based on evidence." },
                        { title: "Business Alignment", desc: "Build features that improve revenue, reduce cost, or increase retention — avoid vanity metrics." },
                        { title: "AI as Amplifier", desc: "Use AI when it simplifies complexity, increases scale, or reduces manual effort — not for novelty." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            viewport={{ once: true }}
                            className="p-8 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-colors text-left"
                        >
                            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-base text-gray-400 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
