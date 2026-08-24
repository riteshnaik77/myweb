"use client";

import { motion } from "framer-motion";

const STATS = [
    { v: "<2 min", l: "JD → hiring handbook (from 15–20)" },
    { v: "<2 min", l: "Resume evaluation (from 5–10)" },
    { v: "50→70%", l: "Client shortlist rate" },
    { v: "150+", l: "Recruiters using it daily" },
];

export default function Award() {
    return (
        <section className="w-full border-y border-yellow-500/20 bg-gradient-to-b from-yellow-500/[0.07] to-transparent py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        {/* Copy */}
                        <div>
                            <span className="inline-flex items-center gap-2 text-yellow-400 font-bold text-xs uppercase tracking-[0.2em] mb-5">
                                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                                National Award · ISF 2026
                            </span>

                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.1] mb-5">
                                Staffing Excellence
                                <br />
                                Recognition 2026
                            </h2>

                            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-5">
                                <span className="text-white font-semibold">PLUTO — PeopleLogic Unified Talent Operations</span>{" "}
                                won the <span className="text-white font-semibold">Indian Staffing Federation&apos;s</span> award
                                for <span className="text-white font-semibold">Outstanding Initiative</span> — one of just{" "}
                                <span className="text-white font-semibold">18 initiatives recognised across ISF&apos;s 120+ member companies</span>.
                            </p>

                            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                                Awarded on stage at ISF&apos;s 18th National Employment Conference —{" "}
                                <span className="italic">Human × AI: Employment Forward</span> — in New Delhi. I built and own
                                PLUTO as Product Manager: an AI recruitment platform that keeps recruiters at the centre of
                                hiring decisions while removing the manual cost around them.
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-6">
                                {STATS.map((s) => (
                                    <div key={s.l}>
                                        <div className="text-yellow-400 font-bold text-xl md:text-2xl">{s.v}</div>
                                        <div className="text-gray-500 text-[11px] md:text-xs leading-snug mt-1">{s.l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Main photo */}
                        <div>
                            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-yellow-500/5">
                                <img
                                    src="/award/isf-stage-hi.jpg"
                                    alt="Ritesh Naik receiving the ISF Staffing Excellence Recognition 2026 for PLUTO on stage at ISF's 18th National Employment Conference, New Delhi"
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <p className="text-gray-500 text-xs mt-3 text-center">
                                Receiving the award on stage — ISF 18th National Employment Conference, New Delhi, August 2026
                            </p>
                        </div>
                    </div>

                    {/* Secondary gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-16">
                        <figure className="group">
                            <div className="rounded-xl overflow-hidden border border-white/10">
                                <img
                                    src="/award/trophy-certificate.jpg"
                                    alt="ISF Staffing Excellence Recognition 2026 trophy and certificate for PLUTO"
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <figcaption className="text-gray-500 text-xs mt-3">
                                The trophy and certificate — signed by ISF&apos;s President, Vice President, and Executive Director.
                            </figcaption>
                        </figure>

                        <figure className="group">
                            <div className="rounded-xl overflow-hidden border border-white/10">
                                <img
                                    src="/award/coffee-table-book.jpg"
                                    alt="PLUTO featured as Initiative No. 10 in ISF's Recognising Initiatives of the Staffing Industry publication"
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <figcaption className="text-gray-500 text-xs mt-3">
                                PLUTO profiled as <span className="text-gray-400">Initiative No. 10</span> in ISF&apos;s{" "}
                                <span className="italic">Recognising Initiatives of the Staffing Industry</span> — ISF&apos;s 15-year
                                commemorative publication.
                            </figcaption>
                        </figure>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
