"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const journey = [
    {
        year: "2023-Present",
        role: "Product Manager – AI & Automation",
        company: "PeopleLogic Business Solutions",
        type: "HRTech & AI Products",
        description: "Led AI roadmap and product strategy. Designed RAG systems for HR query automation that improved policy lookup efficiency by 90%. Owning end-to-end AI product portfolio from discovery to post-launch optimization.",
        skills: ["AI Roadmap", "RAG Systems", "Product Strategy"],
        color: "from-purple-500 to-pink-600"
    },
    {
        year: "2018-2020",
        role: "Co-Founder & CEO",
        company: "PocketTrucks (Startup)",
        type: "Logistics Marketplace",
        description: "Built asset-light logistics marketplace from 0→1. Achieved early fleet utilization targets and adopted rapid product-market feedback loops. Secured seed funding and managed core operations.",
        skills: ["0→1 Growth", "Marketplace Ops", "Fundraising"],
        color: "from-orange-500 to-red-600"
    },
    {
        year: "2016-2018",
        role: "Procurement Engineer",
        company: "LKQ India",
        type: "Automotive Aftermarket",
        description: "Designed analytics-powered sourcing workflows. Improved procurement productivity by 70% through process optimization and data-driven supplier management.",
        skills: ["Process Optimization", "Data Analytics", "Supply Chain"],
        color: "from-cyan-500 to-blue-600"
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
            className={`relative ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}
        >
            <div className="bg-[#121212] border border-white/10 rounded-3xl p-8 md:p-10 hover:border-white/20 transition-all group">
                {/* Gradient accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />

                <div className="relative z-10">
                    {/* Year badge */}
                    <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-xs md:text-sm font-bold mb-4`}>
                        {item.year}
                    </div>

                    {/* Role & Company */}
                    <h3 className="text-xl md:text-3xl font-bold text-white mb-2">{item.role}</h3>
                    <div className={`flex flex-wrap items-center gap-2 mb-4 text-gray-400 text-sm md:text-base ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className="font-semibold">{item.company}</span>
                        <span>•</span>
                        <span className="text-gray-500">{item.type}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-6">
                        {item.description}
                    </p>

                    {/* Skills */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
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
                        From engineering to founding a startup to building AI products at scale
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
