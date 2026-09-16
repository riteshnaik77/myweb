"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const journey = [
    {
        year: "2022-Present",
        role: "Product Manager – AI & Automation",
        company: "PeopleLogic Business Solutions",
        type: "HRTech & AI Products",
        description: "Own the AI product portfolio end to end — five production AI products used daily by 150+ recruiters. With no dedicated engineering team, I run discovery, prototype, build and ship these products hands-on. PLUTO won the Indian Staffing Federation's Staffing Excellence Recognition 2026 for Outstanding Initiative.",
        milestones: [
            "PLUTO Resume Evaluator — 5–10 min → under 2 min; client shortlist rate 50% → 70%",
            "Cost per evaluation ₹4 → ₹0.57 (85% cut) at ~30K evaluations/month",
            "Aug 2026 — PLUTO won ISF Staffing Excellence Recognition 2026"
        ],
        skills: ["AI Product Strategy", "RAG & Agents", "Hands-on Prototyping"],
        color: "from-purple-500 to-pink-600"
    },
    {
        year: "2020-2022",
        role: "Business Development Specialist",
        company: "Open Financial Technologies",
        type: "Fintech SaaS",
        description: "Partnered closely with product and data teams on growth experiments, pricing strategy, and feature iteration. This role bridged the gap between my founder experience and technical PM leadership.",
        milestones: [
            "Translated enterprise customer feedback into prioritised product improvements",
            "Identified onboarding friction; recommendations implemented by the product team",
            "Delivered pricing and feature-tiering recommendations"
        ],
        skills: ["Growth Strategy", "Pricing Optimization", "GTM Playbooks"],
        color: "from-blue-500 to-indigo-600"
    },
    {
        year: "2018-2020",
        role: "Co-Founder",
        company: "PocketTrucks (Startup)",
        type: "Logistics Marketplace",
        description: "Owned product for an asset-light logistics marketplace from 0→1 — roadmap, specs and feature logic, with an outsourced development team building to them. Ran the driver and shipper feedback loop directly. Secured seed funding and managed core operations.",
        milestones: [
            "H1 2018 — MVP launch & initial shipper onboarding (50+)",
            "H2 2018 — Reached 190+ drivers & seed round completion",
            "2019 — Scaling matching algorithm & pricing workflows"
        ],
        skills: ["0→1 Growth", "Marketplace Ops", "Fundraising"],
        color: "from-orange-500 to-red-600"
    },
    {
        year: "2016-2018",
        role: "Procurement Engineer",
        company: "LKQ India",
        type: "Automotive Aftermarket",
        description: "Priced salvage vehicles for Keystone's US operations from photo-based damage assessment — cross-referencing VIN history, repair records and engine specs across multiple external sources. Specified the data-aggregation requirements for an internal tool that auto-populated this information, cutting job completion time by 50%.",
        milestones: [
            "2016 — Photo-based salvage damage assessment and quoting",
            "2017 — Specified requirements for an internal vehicle-data aggregation tool",
            "2018 — Tool cut job completion time by 50% (built by the product team)"
        ],
        skills: ["Requirements Definition", "Data Analytics", "Salvage Valuation"],
        color: "from-cyan-500 to-blue-600"
    },
    {
        year: "2014-2015",
        role: "Graduate Apprentice Trainee",
        company: "Volvo Buses India Pvt Ltd",
        type: "New Product Development",
        description: "Contributed to new product development for BRT and SLF bus prototypes. Gained hands-on exposure to product lifecycle, quality processes, and cross-functional execution in a large-scale OEM environment.",
        milestones: [
            "2014 — NPD for BRT and SLF bus prototypes",
            "2015 — Design validation and component integration",
            "2015 — Optimized testing workflows for Indian market benchmarks"
        ],
        skills: ["NPD", "Design Validation", "Lifecycle Management"],
        color: "from-emerald-500 to-teal-600"
    }
];

function JourneyCard({ item, index }: { item: typeof journey[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`relative ${index % 2 === 0 ? 'md:pr-12 md:text-right text-left' : 'md:pl-12 md:text-left text-left'}`}
        >
            <div className="bg-[#121212] border border-white/10 rounded-3xl p-8 md:p-10 hover:border-white/20 transition-all group overflow-hidden">
                {/* Gradient accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />

                <div className="relative z-10">
                    {/* Year badge */}
                    <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-xs md:text-sm font-bold mb-4`}>
                        {item.year}
                    </div>

                    {/* Role & Company */}
                    <h3 className="text-xl md:text-3xl font-bold text-white mb-2">{item.role}</h3>
                    <div className={`flex flex-wrap items-center gap-2 mb-4 text-gray-400 text-sm md:text-base ${index % 2 === 0 ? 'md:justify-end justify-start' : 'md:justify-start'}`}>
                        <span className="font-semibold">{item.company}</span>
                        <span>•</span>
                        <span className="text-gray-500">{item.type}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-6">
                        {item.description}
                    </p>

                    {/* Milestones */}
                    <div className="mb-6 space-y-3">
                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block mb-2">Key Milestones</span>
                        <div className={`flex flex-col gap-2 ${index % 2 === 0 ? 'md:items-end items-start' : 'items-start'}`}>
                            {item.milestones.map((m, mi) => (
                                <div key={mi} className="flex items-center gap-3 text-xs text-gray-400">
                                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${item.color}`} />
                                    <span>{m}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end justify-start' : 'md:justify-start'}`}>
                        {item.skills.map((skill, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 font-medium"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Journey() {
    return (
        <div className="bg-[#0B0B0F] py-32 px-4 md:px-12 border-t border-white/5 w-full relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        The Journey
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        From engineering foundations to founding a startup to building AI products at scale
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Center line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-x-1/2" />

                    {/* Journey items */}
                    <div className="space-y-12">
                        {journey.map((item, index) => (
                            <div key={index} className="relative grid md:grid-cols-2 gap-8 items-center">
                                {/* Timeline dot */}
                                <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${item.color} shadow-lg`}>
                                        <div className="w-full h-full rounded-full bg-[#0B0B0F] scale-50" />
                                    </div>
                                </div>

                                {/* Content - alternating sides */}
                                {index % 2 === 0 ? (
                                    <>
                                        <JourneyCard item={item} index={index} />
                                        <div /> {/* Empty space on right */}
                                    </>
                                ) : (
                                    <>
                                        <div /> {/* Empty space on left */}
                                        <JourneyCard item={item} index={index} />
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
