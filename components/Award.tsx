"use client";

import { motion } from "framer-motion";

export default function Award() {
    return (
        <section className="w-full border-y border-yellow-500/20 bg-gradient-to-b from-yellow-500/[0.07] to-transparent py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                >
                    {/* Copy */}
                    <div>
                        <span className="inline-flex items-center gap-2 text-yellow-400 font-bold text-xs uppercase tracking-[0.2em] mb-5">
                            <span className="h-2 w-2 rounded-full bg-yellow-400" />
                            National Award · 2026
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.1] mb-5">
                            Staffing Excellence
                            <br />
                            Recognition 2026
                        </h2>

                        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                            <span className="text-white font-semibold">PLUTO — PeopleLogic Unified Talent Operations</span>{" "}
                            won the{" "}
                            <span className="text-white font-semibold">Indian Staffing Federation&apos;s</span> award for{" "}
                            <span className="text-white font-semibold">Outstanding Initiative</span>, presented on stage at the
                            ISF National Conference — <span className="italic">Human × AI: Employment Forward</span> — in New Delhi.
                        </p>

                        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                            I built and own PLUTO as Product Manager: an AI recruitment platform that keeps recruiters at the
                            centre of hiring decisions while removing the manual cost around them. The PLUTO journey is also
                            featured in the ISF Coffee Table Book.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-6">
                            {[
                                { v: "<2 min", l: "JD to handbook (from 15–20)" },
                                { v: "<2 min", l: "Resume eval (from 5–10)" },
                                { v: "50→70%", l: "Client shortlist rate" },
                                { v: "150+", l: "Recruiters daily" },
                            ].map((s) => (
                                <div key={s.l}>
                                    <div className="text-yellow-400 font-bold text-xl md:text-2xl">{s.v}</div>
                                    <div className="text-gray-500 text-[11px] md:text-xs leading-snug mt-1">{s.l}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Photo */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-yellow-500/5">
                            <img
                                src="/award/isf-stage.jpeg"
                                alt="Ritesh Naik receiving the ISF Staffing Excellence Recognition 2026 for PLUTO on stage at the ISF National Conference, New Delhi"
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                        </div>
                        <p className="text-gray-500 text-xs mt-3 text-center">
                            Receiving the award at the ISF National Conference, New Delhi — August 2026
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
