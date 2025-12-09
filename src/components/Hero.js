"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profile from "../app/styles/images/profile.jpg";
import { ArrowDown } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-bg">
            {/* Background Gradients */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-secondary font-medium tracking-wide text-lg md:text-xl mb-4">
                            WELCOME TO MY WORLD
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-calSans tracking-tight leading-tight">
                            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Fakhri</span>
                        </h1>
                        <div className="text-2xl md:text-4xl text-gray-400 font-light h-[50px]">
                            <span>I am a </span>
                            <span className="text-accent font-semibold">
                                <Typewriter
                                    words={['Full Stack Developer', 'Creative Thinker', 'Tech Enthusiast']}
                                    loop={0}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </div>

                        <p className="mt-8 text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
                            Crafting premium digital experiences with code and creativity.
                            Let's turn your ideas into reality.
                        </p>

                        <motion.div
                            className="mt-10 flex flex-col md:flex-row gap-4 items-center md:items-start justify-center md:justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <a
                                href="#portfolio"
                                className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl"
                            >
                                View Work
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-3 border border-gray-700 text-white font-semibold rounded-full hover:bg-white/5 transition-all"
                            >
                                Contact Me
                            </a>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Profile Image (with subtle floating animation) */}
                <motion.div
                    className="flex-1 relative w-full max-w-[400px] aspect-square"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse" />
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-full h-full rounded-full overflow-hidden border border-white/10 shadow-2xl"
                    >
                        <Image
                            src={profile}
                            alt="Fakhri Danial"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ArrowDown size={24} />
            </motion.div>
        </section>
    );
};

export default Hero;
