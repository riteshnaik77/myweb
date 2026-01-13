"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "HR RAG Assistant",
        problem: "HR teams spent 20–30 minutes per query searching manual HR policies.",
        persona: "HR Operations Specialists",
        hypothesis: "If employees can query policies conversationally, then lookup time and support load will decrease.",
        solution: "Built a RAG-based internal HR Assistant with context-aware semantic search.",
        impact: "90% Time Saved (30 mins → 2 mins), 95% Internal CSAT, 4-6 queries/user/day.",
        learnings: "Users prefer concise, sentence-level responses over policy dumps.",
        gradient: "from-blue-600/20 to-indigo-900/20",
        accent: "bg-blue-500"
    },
    {
        title: "AI Resume Evaluator",
        problem: "Manual screening took 15 mins/resume with inconsistent scoring across recruiters.",
        persona: "Recruiters & Hiring Managers",
        hypothesis: "If AI can score resumes against JD criteria with explainability, then throughput and match quality increase.",
        solution: "Built a resume parser and evaluator with suitability scores and reasoning prompts.",
        impact: "3× Faster Screening, 80% Time Saved, 30% Improvement in shortlist alignment.",
        learnings: "Explainability (per-criterion scores) was the key to user trust.",
        gradient: "from-purple-600/20 to-pink-900/20",
        accent: "bg-purple-500"
    },
    {
        title: "SpringBoard Automation",
        problem: "Monthly HR data tasks took 5–6 hours of error-prone manual paper form handling.",
        persona: "HR Admin & Operations",
        hypothesis: "Automating data feeds and status workflows will cut completion time and human error.",
        solution: "Built an internal automation platform with real-time dashboards and status tracking.",
        impact: "98% Work Reduction (6 hrs → 5 mins), 75% Error Reduction, High stickiness.",
        learnings: "Ops automation adoption is highest when time-saved metrics are visible to the team.",
        gradient: "from-emerald-600/20 to-green-900/20",
        accent: "bg-emerald-500"
    }
];

export default function Projects() {
    return (
        <div id="projects" className="bg-[#0B0B0F] py-32 px-4 md:px-12 relative z-10 w-full scroll-mt-20">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Case Studies</h2>
                    <p className="text-xl text-gray-400 max-w-2xl">
                        Real products solving enterprise problems with measurable impact.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="group relative bg-white/5 border border-white/10 p-8 rounded-3xl overflow-hidden hover:border-white/20 transition-all hover:bg-white/[0.08]"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                            <div className="relative z-10">
                                <div className={`w-12 h-1 ${p.accent} mb-6 rounded-full`} />
                                <h3 className="text-2xl font-bold text-white mb-8">{p.title}</h3>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">The Problem</span>
                                        <p className="text-sm text-gray-300 leading-relaxed">{p.problem}</p>
                                    </div>

                                    <div className="space-y-2">
                                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">The Solution</span>
                                        <p className="text-sm text-gray-300 leading-relaxed">{p.solution}</p>
                                    </div>

                                    <div className="pt-6 border-t border-white/10">
                                        <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold mb-2 block">Key Impact</span>
                                        <p className="text-lg font-bold text-white leading-snug">{p.impact}</p>
                                    </div>

                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 pt-4">
                                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1 block">Learning</span>
                                        <p className="text-xs text-gray-400 italic">"{p.learnings}"</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
