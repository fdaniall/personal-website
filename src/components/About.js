"use client";

import Section from "./ui/Section";
import { Cpu, Globe, Rocket, Terminal, BookOpen, Briefcase } from "lucide-react";

const BentoCard = ({ children, className, title, icon: Icon }) => (
    <div className={`bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 flex flex-col ${className}`}>
        <div className="flex items-center gap-3 mb-4">
            {Icon && <Icon className="text-accent" size={20} />}
            {title && <h3 className="text-gray-400 text-sm uppercase tracking-wider font-semibold">{title}</h3>}
        </div>
        {children}
    </div>
);

const TechBadge = ({ name }) => (
    <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 hover:bg-accent hover:text-white transition-colors cursor-default border border-white/5">
        {name}
    </span>
);

const TimelineItem = ({ role, company, period, description }) => (
    <div className="relative pl-6 pb-8 border-l border-white/10 last:pb-0">
        <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 bg-accent rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
        <h4 className="text-white font-semibold text-lg leading-tight">{role}</h4>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 mt-1 gap-1">
            <span className="text-accent text-sm">{company}</span>
            <span className="text-gray-500 text-xs font-mono">{period}</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
);

const About = () => {
    return (
        <Section id="about" className="py-20">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                    About <span className="text-gray-500">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">

                    {/* Bio */}
                    <BentoCard className="md:col-span-2 min-h-[300px]" icon={Terminal} title="Profile">
                        <h3 className="text-2xl font-bold mb-4 text-white">Software Engineer & Innovator</h3>
                        <p className="text-gray-400 leading-relaxed text-lg mb-6">
                            A Computer Science graduate from <span className="text-white font-medium">Bina Nusantara University</span> with hands-on experience in full stack development.
                            I specialize in building scalable web and mobile applications, from planning to deployment.
                            <br /><br />
                            Currently exploring emerging technologies like <span className="text-accent">Web3</span> and Blockchain infrastructure to build decentralized future.
                        </p>
                        <div className="flex gap-4 mt-auto">
                            <div className="flex flex-col flex-1 text-center">
                                <span className="text-3xl font-bold text-white">3.33</span>
                                <span className="text-xs text-gray-500 uppercase tracking-wider">GPA</span>
                            </div>
                            <div className="w-[1px] h-full bg-white/10" />
                            <div className="flex flex-col flex-1 text-center">
                                <span className="text-3xl font-bold text-white">2+</span>
                                <span className="text-xs text-gray-500 uppercase tracking-wider">Years Exp</span>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Tech Stack */}
                    <BentoCard title="Tech Stack" className="md:col-span-1" icon={Cpu}>
                        <div className="flex flex-wrap gap-2 content-start">
                            {[
                                'React.js', 'Next.js', 'Flutter', 'Tailwind',
                                'Express.js', 'Flask', 'Django',
                                'Python', 'Java', 'JavaScript', 'Solidity',
                                'MySQL', 'PostgreSQL', 'EVM'
                            ].map(tech => (
                                <TechBadge key={tech} name={tech} />
                            ))}
                        </div>
                    </BentoCard>

                    {/* Education */}
                    <BentoCard title="Education" className="md:col-span-1" icon={BookOpen}>
                        <div className="mt-2">
                            <h4 className="text-white font-semibold text-lg">Bachelor of Computer Science</h4>
                            <p className="text-accent">Bina Nusantara University</p>
                            <p className="text-gray-500 text-sm mt-1">Graduated Aug 2025</p>
                            <p className="text-gray-400 text-sm mt-4">
                                Final Project: Modular Mobile App for ISP Customer Management.
                            </p>
                        </div>
                    </BentoCard>

                    {/* Experience Timeline */}
                    <BentoCard icon={Briefcase} title="Experience" className="md:col-span-2 row-span-2">
                        <div className="mt-4">
                            <TimelineItem
                                role="Back-End Developer"
                                company="PT Ciomas Adisatwa"
                                period="Sep 2025 - Current"
                                description="Maintaining internal operational systems from reporting, user management, to production workflows. Collaborating with cross-functional teams to refine backend architecture."
                            />
                            <TimelineItem
                                role="Full Stack Developer - Intern"
                                company="PT Japfa Comfeed Indonesia Tbk"
                                period="Feb 2024 - Feb 2025"
                                description="Contributed to Japfa Innovation platform and developed iMEXS (Intelligent Manufacturing Execution System) dashboard for inventory monitoring."
                            />
                        </div>
                    </BentoCard>

                    {/* Location */}
                    <BentoCard className="md:col-span-1 bg-gradient-to-br from-blue-900/20 to-purple-900/20" icon={Globe}>
                        <h3 className="text-xl font-bold text-white mb-2">Jakarta, Indonesia 🇮🇩</h3>
                        <p className="text-gray-400 text-sm">Open to relocation & remote work.</p>
                    </BentoCard>

                </div>
            </div>
        </Section>
    );
};

export default About;
