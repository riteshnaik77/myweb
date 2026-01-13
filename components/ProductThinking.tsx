"use client";

import { motion } from "framer-motion";

const philosophies = [
    {
        title: "User-Centricity",
        desc: "Start with user behavior, not tech. Align solutions with pain intensity and frequency to ensure high adoption.",
        playbook: [
            "User interviews (n=30+) to synthesize Core JTBD statements.",
            "Behavioral segmentation based on top 3 friction points."
        ]
    },
    {
        title: "Data First",
        desc: "Define hypotheses and success KPIs (time, adoption, retention) before building. Iterate based on evidence.",
        playbook: [
            "Hypothesis → KPI mapping table for every high-impact feature.",
            "A/B experiment framework to validate incremental impact."
        ]
    },
    {
        title: "Business Alignment",
        desc: "Build features that improve revenue, reduce cost, or increase retention — avoid vanity metrics.",
        playbook: [
            "RICE-based prioritization models for roadmap planning.",
            "Product OKRs mapped directly to enterprise business goals."
        ]
    },
    {
        title: "AI as Amplifier",
        desc: "Use AI when it simplifies complexity, increases scale, or reduces manual effort — not for novelty.",
        playbook: [
            "Model selection criteria based on Precision vs. Cost vs. Latency.",
            "Guardrail playbooks for hallucination and bias mitigation."
        ]
    }
];

export default function ProductThinking() {
    return (
        <div className="bg-[#0B0B0F] py-32 px-4 md:px-12 border-t border-white/5 w-full">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-20 text-white tracking-tight">How I Think</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {philosophies.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            viewport={{ once: true }}
                            className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors text-left flex flex-col"
                        >
                            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed mb-6">{item.desc}</p>

                            <div className="mt-auto space-y-3">
                                <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold block mb-2">Playbook</span>
                                <ul className="space-y-2">
                                    {item.playbook.map((step, si) => (
                                        <li key={si} className="text-[11px] text-gray-500 flex items-start leading-relaxed">
                                            <span className="text-blue-500 mr-2">•</span>
                                            {step}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
