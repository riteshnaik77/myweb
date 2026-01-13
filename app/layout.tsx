import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Ritesh | AI Product Manager",
    description: "Senior Creative Technologist + Product Designer. AI Product Manager Portfolio.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body className={`${inter.variable} font-sans bg-[#0B0B0F] antialiased`}>{children}</body>
        </html>
    );
}
