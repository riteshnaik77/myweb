"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "PocketTrucks (Founder Experience)",
        problem: "Manual logistics coordination resulted in fragmented demand and 40% empty truck returns. Coordination took 4-5 days via phone calls.",
        persona: "Transporters & Shippers",
        hypothesis: "A real-time matching marketplace will optimize capacity and reduce empty returns vs legacy phone-based coordination.",
        kpis: "Onboard 50+ shippers / 100+ carriers | Target repeat order rate ≥ 30% within 30 days.",
        solution: "Built a 0→1 marketplace with real-time bidding, live tracking, and trust-based feedback loops.",
        impact: "190+ Shippers | 50+ Carriers | 35% MoM repeat usage | 25% reduction in empty returns.",
        adoption: "Users reached weekly booking cadence within first 3 weeks of onboarding.",
        tradeoffs: "Opted for bidding-first model vs fixed-pricing to build liquidity in a price-sensitive market.",
        risks: "Supply-side churn. Mitigation: Implemented driver referral incentives and fast-pay cycles.",
        learnings: "Pricing elasticity is the core lever for liquidity; SMB vs. Retail shippers require unique messaging.",
        nextSteps: "This 0→1 discovery mindset directly informs my current AI-first product roadmap strategy.",
        role: "Co-Founder & Product Lead",
        gradient: "from-orange-600/20 to-red-900/20",
        accent: "bg-orange-500"
    },
    {
        title: "Enterprise RAG Assistant",
        problem: "Manual information lookup took 20–30 minutes per query, slowing down internal operations and response times.",
        persona: "Operations Specialists & Internal Teams",
        hypothesis: "If users can query policies conversationally, then lookup time will drop by >80% and support load will decrease.",
        kpis: "Target lookup time < 5 mins | Target 90% satisfaction score.",
        solution: "Built a RAG-based internal Assistant with context-aware semantic search.",
        impact: "90% Time Saved (30 mins → 2 mins) | 95% Internal CSAT | 80% repeat use within 1st week.",
        adoption: "4–6 queries/user/day (DAU) | 90% of team migrated within 14 days.",
        tradeoffs: "Used RAG with vector search instead of a simpler rules-engine to handle semantic diversity.",
        risks: "Model hallucinations. Mitigation: Implemented source-citation and limited LLM temperature.",
        learnings: "Users prefer concise, sentence-level responses over full document dumps.",
        nextSteps: "Add multi-intent query handling and automated FAQ updates.",
        role: "Lead Product Manager (Discovery to Launch)",
        gradient: "from-blue-600/20 to-indigo-900/20",
        accent: "bg-blue-500"
    },
    {
        title: "AI Evaluator & Workflow Tool",
        problem: "High-volume decision workflows required 15+ mins per unit with inconsistent scoring across the team.",
        persona: "Reviewers & Decision Makers",
        hypothesis: "If we provide explainable scoring against criteria, users will adopt the tool over manual workflows.",
        kpis: "Evaluation time < 5 mins | 80%+ internal adoption rate.",
        solution: "Built an LLM-powered evaluator with criteria-based reasoning and automated summaries.",
        impact: "3× Faster Throughput | 80% Time Saved | 30% Improvement in shortlist consistency.",
        adoption: "Avg 10 uses/week per recruiter | 100% adoption reached in 4 weeks.",
        tradeoffs: "Prioritized reasoning transparency over raw processing speed to build user trust.",
        risks: "Bias in AI scoring. Mitigation: Human-in-the-loop validation and scoring audit logs.",
        learnings: "Explainability—showing 'how' the AI scored—was the key to user trust.",
        nextSteps: "Add cross-archetype matching and AI-backed suggestions.",
        role: "Product Owner (Concept to Scaling)",
        gradient: "from-purple-600/20 to-pink-900/20",
        accent: "bg-purple-500"
    },
    {
        title: "Internal Automation Engine",
        problem: "Repetitive monthly data workflows required 5–6 hours of manual entry with high error rates.",
        persona: "Operations & Admin Teams",
        hypothesis: "Automating repetitive work + visual time-saved dashboards will drive >70% adoption within 30 days.",
        kpis: "Reduce task time to < 10 mins | 80% reduction in manual errors.",
        solution: "Built an automation platform with real-time dashboards and status tracking.",
        impact: "98% Work Reduction (6 hrs → 5 mins) | 75% Error Reduction | 90% DAU retention.",
        adoption: "Teams reached full weekly cadence within first 2 weeks of rollout.",
        tradeoffs: "Sacrificed UI customization for rigid, 'error-proof' workflows to ensure data integrity.",
        risks: "Data fragmentation. Mitigation: Centralized master data feed and real-time syncing.",
        learnings: "Ops adoption peaks when teams can see real-time time-saved metrics.",
        nextSteps: "Predictive scheduling and forecast modeling using historical data.",
        role: "Product Manager (E2E Ownership)",
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
                        A product-first approach to solving enterprise complexity with AI and marketplaces.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="group relative bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl overflow-hidden hover:border-white/20 transition-all hover:bg-white/[0.08]"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8 text-left">
                                    <div>
                                        <div className={`w-12 h-1 ${p.accent} mb-4 rounded-full`} />
                                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{p.title}</h3>
                                    </div>
                                    <span className="text-[10px] uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full text-gray-300 font-bold whitespace-nowrap ml-4">
                                        {p.role}
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-left">
                                    <div className="space-y-1">
                                        <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">Persona</span>
                                        <p className="text-sm text-gray-300 leading-relaxed font-medium">{p.persona}</p>
                                    </div>

                                    <div className="space-y-1">
                                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Problem (JTBD)</span>
                                        <p className="text-sm text-gray-400 leading-relaxed">{p.problem}</p>
                                    </div>

                                    <div className="space-y-1">
                                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">The Hypothesis</span>
                                        <p className="text-sm text-gray-400 leading-relaxed italic border-l-2 border-white/10 pl-3">{p.hypothesis}</p>
                                    </div>

                                    <div className="space-y-1">
                                        <span className="text-[10px] uppercase tracking-widest text-orange-400/80 font-bold">Success Metrics (Pre-launch)</span>
                                        <p className="text-sm text-gray-400 leading-relaxed">{p.kpis}</p>
                                    </div>

                                    <div className="md:col-span-2 space-y-2 pt-4 border-t border-white/5">
                                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">The Solution</span>
                                        <p className="text-sm text-gray-300 leading-relaxed">{p.solution}</p>
                                    </div>

                                    <div className="md:col-span-2 py-4 px-6 bg-white/5 rounded-2xl border border-white/10">
                                        <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold mb-2 block">Quantified Impact & Behavioral Signals</span>
                                        <p className="text-lg md:text-xl font-bold text-white leading-tight">{p.impact}</p>
                                        <p className="text-xs text-emerald-400/80 mt-2 font-medium">Adoption: {p.adoption}</p>
                                    </div>

                                    <div className="space-y-1">
                                        <span className="text-[10px] uppercase tracking-widest text-purple-400 font-bold">Decision Trade-off</span>
                                        <p className="text-xs text-gray-400 italic">"{p.tradeoffs}"</p>
                                    </div>

                                    <div className="space-y-1">
                                        <span className="text-[10px] uppercase tracking-widest text-red-400 font-bold">Risk & Mitigation</span>
                                        <p className="text-xs text-gray-400">{p.risks}</p>
                                    </div>

                                    <div className="space-y-1">
                                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Key Learning</span>
                                        <p className="text-xs text-gray-400 italic">"{p.learnings}"</p>
                                    </div>

                                    <div className="space-y-1">
                                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Bridge to AI PM</span>
                                        <p className="text-xs text-gray-400 italic">{p.nextSteps}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Conversion Footer */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-20 p-12 bg-white/5 border border-white/10 rounded-[3rem] text-center"
                >
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Want the full metrics deep-dive?</h3>
                    <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                        Download my comprehensive PDF portfolio for detailed architecture diagrams,
                        quarterly roadmaps, and expanded decision logs.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <a
                            href="/RiteshNaik_Resume.pdf"
                            download
                            className="px-10 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-all shadow-xl shadow-white/5 active:scale-95"
                        >
                            Download Full Portfolio PDF
                        </a>
                        <a
                            href="https://calendly.com/riteshnaik77/30min"
                            target="_blank"
                            className="px-10 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all active:scale-95"
                        >
                            Book 15-min Walkthrough
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
