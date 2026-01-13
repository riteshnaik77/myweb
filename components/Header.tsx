"use client";

import { motion } from "framer-motion";

export default function Header() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6"
        >
            <nav className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl tracking-tight">
                    Ritesh
                </div>

                <div className="flex gap-6 md:gap-8 items-center">
                    <a
                        href="mailto:riteshnaik77@gmail.com"
                        className="text-gray-400 hover:text-white transition-colors text-sm md:text-base font-medium"
                    >
                        Contact
                    </a>
                    <a
                        href="https://github.com/riteshnaik77"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors text-sm md:text-base font-medium"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ritesh-naik/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors text-sm md:text-base font-medium"
                    >
                        LinkedIn
                    </a>
                </div>
            </nav>
        </motion.header>
    );
}
