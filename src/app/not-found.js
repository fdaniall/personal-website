"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-[#0a0a0a] text-white overflow-hidden relative">
            {/* Background Ambience */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center z-10"
            >
                <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 tracking-tighter mb-4">
                    404
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">Page Not Found</h2>
                <p className="text-gray-400 max-w-md mx-auto mb-10 leading-relaxed">
                    The page you are looking for doesn't exist or has been moved.
                    Let's get you back on track.
                </p>

                <Link
                    href="/"
                    className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl inline-block"
                >
                    Back to Home
                </Link>
            </motion.div>
        </div>
    );
}
