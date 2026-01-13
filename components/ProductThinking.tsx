"use client";

import { motion } from "framer-motion";

export default function ProductThinking() {
    return (
        <div className="bg-[#0B0B0F] py-32 px-4 md:px-12 border-t border-white/5 w-full">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-20 text-white tracking-tight">How I Think</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { title: "User-Centric", desc: "Obsessive about the user problem, not the shiny tech. If it doesn't solve a pain point, it doesn't ship." },
                        { title: "Metrics-First", desc: "Define success before writing code. Tracking utilization, retention, and revenue impact from Day 1." },
                        { title: "AI as Leverage", desc: "AI isn't the product; it's the multiplier. Using LLMs to remove friction, not add novelty." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            viewport={{ once: true }}
                            className="p-8 md:p-10 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-colors"
                        >
                            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-lg text-gray-400 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
