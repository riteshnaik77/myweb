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
                <ProductThinking />
                <Journey />
                <Projects />
                <Footer />
            </div>
        </main>
    );
}
