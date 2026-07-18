import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import ProductThinking from "@/components/ProductThinking";
import Journey from "@/components/Journey";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-[#0B0B0F]">
            <Header />

            {/* 
        The ScrollyCanvas takes up 500vh. 
        As the user scrolls down, the sticky canvas animates.
        Once the 500vh is scrolled past, the content below appears.
      */}
            <ScrollyCanvas />

            <div className="relative z-10 w-full bg-[#0B0B0F]">
                {/* ISF National Recognition — honest framing: selected + shortlisted, NOT yet won (award decided after Aug 17 2026 demo) */}
                <section className="w-full border-y border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 via-yellow-500/5 to-transparent">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                        <span className="shrink-0 inline-flex items-center gap-2 text-yellow-400 font-bold text-xs uppercase tracking-widest">
                            <span className="h-2 w-2 rounded-full bg-yellow-400" />
                            National Recognition · ISF 2026
                        </span>
                        <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                            <span className="font-semibold text-white">PLUTO</span> selected by the <span className="font-semibold text-white">Indian Staffing Federation (ISF)</span> as one of{" "}
                            <span className="font-semibold text-white">18 Recognised Initiatives of the Staffing Industry 2026</span> — shortlisted to present a live demo at ISF, Delhi (Aug 2026).
                        </p>
                    </div>
                </section>
                <ProductThinking />
                <Journey />
                <Projects />
                <Footer />
            </div>
        </main>
    );
}
