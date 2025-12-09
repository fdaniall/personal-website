"use client";

import Section from "./ui/Section";
import { Cpu, Globe, Rocket, Terminal } from "lucide-react";

const BentoCard = ({ children, className, title }) => (
    <div className={`bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 ${className}`}>
        {title && <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-4 font-semibold">{title}</h3>}
        {children}
    </div>
);

const TechBadge = ({ name }) => (
    <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 hover:bg-accent hover:text-white transition-colors cursor-default">
        {name}
    </span>
);

const About = () => {
    return (
        <Section id="about" className="py-20">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                    About <span className="text-gray-500">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
                    {/* Bio - Large Block */}
                    <BentoCard className="md:col-span-2 row-span-2 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-4 text-white">Who I am</h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            I'm Fakhri, a Full Stack Developer with a passion for building beautiful, functional, and scalable web applications.
                            I love exploring new technologies, pushing creative limits, and leveraging AI to craft mind-blowing experiences.
                            <br /><br />
                            Always soaking up diverse perspectives and mentoring aspiring developers along the way.
                        </p>
                    </BentoCard>

                    {/* Tech Stack */}
                    <BentoCard title="Tech Stack" className="md:col-span-1">
                        <div className="flex flex-wrap gap-2">
                            {['React', 'Next.js', 'Node.js', 'Tailwind', 'Python', 'TypeScript', 'MongoDB', 'Git'].map(tech => (
                                <TechBadge key={tech} name={tech} />
                            ))}
                        </div>
                    </BentoCard>

                    {/* Philosophy / Approach */}
                    <BentoCard title="My Approach" className="md:col-span-1 flex flex-col justify-between">
                        <div className="flex items-center gap-4 text-gray-300 mb-2">
                            <Rocket className="text-accent" />
                            <span>Performance First</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-300 mb-2">
                            <Cpu className="text-accent" />
                            <span>Clean Architecture</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-300">
                            <Globe className="text-accent" />
                            <span>User Centric</span>
                        </div>
                    </BentoCard>

                    {/* Location / Status */}
                    <BentoCard className="md:col-span-3 bg-gradient-to-r from-blue-900/20 to-purple-900/20 flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">Based in Indonesia 🇮🇩</h3>
                            <p className="text-gray-400">Available for freelance & remote work</p>
                        </div>
                        <Terminal className="text-gray-500 w-12 h-12 opacity-50" />
                    </BentoCard>
                </div>
            </div>
        </Section>
    );
};

export default About;
