"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Section from "./ui/Section";

// Import images
import projectGif from "../app/styles/gif/yourinnovation2.gif";
import projectStatic from "../app/styles/images/firstyourinnovationgif.png";
import projectLogo from "../app/styles/images/yourinnovation.png";
import moneyhunterImg from "../app/styles/images/moneyhunter.png";
import confideeImg from "../app/styles/images/confidee.png";
import rajawifiBg from "../app/styles/images/rajawifi_bg.png";
import crmBg from "../app/styles/images/crm_bg.png";
import imexsBg from "../app/styles/images/imexs_bg.png";
import stakoBg from "../app/styles/images/stako.png";

const projects = [
    {
        title: "Stako Protocol",
        description: "Tokenized Stock Protocol on Lisk L2. Buy global stocks with IDRX stablecoin.",
        staticImage: stakoBg,
        url: "https://stako.vercel.app/",
        isPublic: true,
        tech: ["Next.js", "Lisk L2", "Blockchain", "Tailwind"]
    },
    {
        title: "Confidee",
        description: "Web3 anonymous social platform. 10k+ users on Web2 version. Base L2 + AI powered.",
        staticImage: confideeImg,
        url: "https://confidee.xyz",
        isPublic: true,
        tech: ["Next.js", "Solidity", "Base L2", "AI"]
    },
    {
        title: "RajaWifi ISP",
        description: "Modular ISP Management with mobile app, admin dashboard, and payment gateway.",
        staticImage: rajawifiBg, // Placeholder used as no specific image provided, user can update later
        url: "https://play.google.com/store/apps/details?id=com.rajawifi.app",
        isPublic: true,
        tech: ["Flutter", "Express.js", "MySQL", "React"]
    },
    {
        title: "Travel CRM",
        description: "Comprehensive CRM for travel management, sales, and loyalty systems.",
        staticImage: crmBg, // Placeholder
        url: "#",
        isPublic: false,
        tech: ["Next.js", "TypeScript", "MySQL"]
    },
    {
        title: "iMEXS",
        description: "Intelligent Manufacturing Execution System for real-time inventory monitoring.",
        staticImage: imexsBg, // Placeholder
        url: "#",
        isPublic: false,
        tech: ["Django", "React", "PostgreSQL"]
    },
    {
        title: "Money Hunter",
        description: "Financial tracking and management tool.",
        staticImage: moneyhunterImg,
        url: "https://moneyhunter.xyz",
        isPublic: true,
        tech: ["React", "Finance", "Web3"]
    },
    {
        title: "Your Innovation",
        description: "Internal platform for showcasing corporate innovation ideas.",
        staticImage: projectStatic,
        gif: projectGif,
        logo: projectLogo,
        url: "#",
        isPublic: false,
        tech: ["Django", "Tailwind", "PostgreSQL"]
    }
];

const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="group relative h-[400px] w-full bg-neutral-900 rounded-3xl overflow-hidden cursor-pointer border border-white/5"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
        >
            {/* Image Background */}
            <div className="absolute inset-0">
                <Image
                    src={project.isPublic ? project.staticImage : (isHovered && project.gif ? project.gif : project.staticImage)}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-6 line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex gap-2 flex-wrap mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    {project.tech.map((t, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-white/10 rounded-full text-gray-200 backdrop-blur-md">
                            {t}
                        </span>
                    ))}
                </div>

                {/* Action Button */}
                <div className="flex gap-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                    {project.isPublic ? (
                        <a href={project.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white font-medium hover:text-accent transition-colors">
                            Visit Site <ExternalLink size={16} />
                        </a>
                    ) : (
                        <span className="text-gray-500 text-sm flex items-center gap-2">Private Project</span>
                    )}
                </div>
            </div>

            {/* Private Project Logo Overlay (if applicable, from original code) */}
            {!project.isPublic && project.logo && (
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                    <Image src={project.logo} width={100} height={100} alt="Logo" className="drop-shadow-lg" />
                </div>
            )}

        </motion.div>
    );
};

const Portfolio = () => {
    return (
        <Section id="portfolio">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                    Selected <span className="text-gray-500">Works</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Portfolio;
