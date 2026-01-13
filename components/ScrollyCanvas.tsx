"use client";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Overlay from "./Overlay";

export default function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(false);

    const frameCount = 120; // You have 120 frames (000-119)

    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const promises: Promise<void>[] = [];

            for (let i = 0; i < frameCount; i++) {
                promises.push(
                    new Promise((resolve) => {
                        const img = new Image();
                        const frameStr = i.toString().padStart(3, "0");
                        // Match your actual file pattern: frame_000_delay-0.067s.png
                        const delay = i % 3 === 1 ? "0.066s" : "0.067s";
                        img.src = `/sequence/frame_${frameStr}_delay-${delay}.png`;
                        img.onload = () => {
                            loadedImages[i] = img;
                            resolve();
                        };
                        img.onerror = () => {
                            console.error(`Failed to load frame ${i}: ${img.src}`);
                            resolve();
                        };
                    })
                );
            }

            await Promise.all(promises);
            setImages(loadedImages);
            setLoaded(true);
            console.log(`Loaded ${loadedImages.filter(img => img).length} images`);
        };

        loadImages();
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !images[index] || !loaded) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];

        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        const scale = Math.max(canvasWidth / img.width, canvasHeight / img.height);
        const x = (canvasWidth / 2) - (img.width / 2) * scale;
        const y = (canvasHeight / 2) - (img.height / 2) * scale;

        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                if (loaded && images.length > 0) {
                    const currentProgress = scrollYProgress.get();
                    const idx = Math.min(frameCount - 1, Math.floor(currentProgress * frameCount));
                    renderFrame(idx);
                }
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [loaded, images, scrollYProgress]);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const frameIndex = Math.min(frameCount - 1, Math.floor(latest * frameCount));
        requestAnimationFrame(() => renderFrame(frameIndex));
    });

    return (
        <div ref={containerRef} className="relative h-[500vh] bg-[#0B0B0F]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {!loaded && (
                    <div className="absolute inset-0 flex items-center justify-center z-50 bg-[#0B0B0F]">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-8 h-8 border-2 border-t-blue-500 border-white/10 rounded-full animate-spin" />
                            <span className="text-xs text-gray-500 uppercase tracking-widest">Loading Experience</span>
                        </div>
                    </div>
                )}
                <canvas ref={canvasRef} className="block w-full h-full object-cover" />
                <Overlay scrollYProgress={scrollYProgress} />
            </div>
        </div>
    );
}
