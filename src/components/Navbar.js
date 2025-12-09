"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import Image from "next/image";
import logo from "@/app/styles/images/fdlogo.png";

const links = [
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Work" },
    { href: "#contact", label: "Contact" }
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 bg-black/50 backdrop-blur-lg border-b border-white/5" : "py-6 bg-transparent"
                    }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <a href="#" className="relative w-10 h-10">
                        <Image src={logo} alt="Logo" fill className="object-contain" />
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="mailto:fakhridanial29@gmail.com"
                            className="px-5 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors text-sm"
                        >
                            Let's Talk
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-8 text-2xl font-medium">
                            {links.map(link => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-gray-400 hover:text-white"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
