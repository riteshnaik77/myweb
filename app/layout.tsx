import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Analytics } from '@vercel/analytics/react';
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Ritesh | AI Product Manager — Enterprise AI, RAG, Automation",
    description: "Portfolio of Ritesh — AI Product Manager and former founder. AI products with measurable business impact (90% time saved, 80% automation uplift, adoption signals). Case studies in AI workflows, RAG, and internal platforms.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.variable} font-sans bg-[#0B0B0F]`}>
                <SmoothScroll>
                    {children}
                </SmoothScroll>
                <Analytics />
            </body>
        </html>
    );
}
