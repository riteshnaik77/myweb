"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "HR RAG Assistant",
        problem: "Policy lookup took 20+ mins per query.",
        built: "RAG pipeline on Pinecone + LangChain.",
        impact: "90% time reduction.",
        gradient: "from-blue-600 to-indigo-900"
    },
    {
        title: "Resume Evaluator",
        problem: "Manual screening took 15 mins/resume.",
        built: "LLM-based scoring & entity extraction.",
        impact: "Screening cut from 15 → 3 mins.",
        gradient: "from-purple-600 to-pink-900"
    },
    {
        title: "SpringBoard Platform",
        problem: "Manual onboarding flows were error-prone.",
        built: "Automated workflow engine.",
        impact: "5 hours/month → 5 minutes automation.",
        gradient: "from-emerald-600 to-green-900"
    },
    {
        title: "PocketTrucks (Founder)",
        problem: "Fleet underutilization in logistics.",
        built: "Real-time dispatch algorithm.",
        impact: "Increased utilization + Secured seed funding.",
        gradient: "from-orange-600 to-red-900"
    }
];

export default function Projects() {
    return (
        <div className="bg-[#0B0B0F] py-32 px-4 md:px-12 relative z-10 w-full">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-20 text-white text-center tracking-tight">Case Studies</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="group relative bg-[#121212] border border-white/10 p-8 md:p-12 rounded-3xl overflow-hidden hover:border-white/20 transition-all hover:shadow-2xl hover:shadow-blue-900/10"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700 ease-out`} />

                            <h3 className="text-3xl font-bold text-white mb-6 z-10 relative">{p.title}</h3>

                            <div className="space-y-6 text-gray-400 z-10 relative">
                                <div>
                                    <span className="text-xs uppercase tracking-widest text-gray-600 font-semibold mb-1 block">Problem</span>
                                    <p className="text-base md:text-lg text-gray-300">{p.problem}</p>
                                </div>
                                <div>
                                    <span className="text-xs uppercase tracking-widest text-gray-600 font-semibold mb-1 block">What I Built</span>
                                    <p className="text-base md:text-lg text-gray-300">{p.built}</p>
                                </div>
                                <div className="pt-4 border-t border-white/5">
                                    <span className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-1 block">Impact</span>
                                    <p className="text-xl md:text-2xl font-bold text-white">{p.impact}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
