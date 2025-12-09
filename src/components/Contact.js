"use client";

import Section from "./ui/Section";
import { Mail, Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

const SocialLink = ({ href, icon: Icon, label, username, hoverColor }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 w-full"
    >
        <div className="flex items-center gap-4">
            <div className={`p-3 bg-white/10 rounded-full group-hover:text-white transition-all duration-300 ${hoverColor}`}>
                <Icon size={24} />
            </div>
            <div>
                <h3 className="text-lg font-semibold text-white">{label}</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300">{username}</p>
            </div>
        </div>
        <ArrowUpRight className="text-gray-500 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
    </a>
);

const Contact = () => {
    return (
        <Section id="contact" className="py-20">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Let's <span className="text-gray-500">Connect</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Interested in working together? Feel free to reach out for collaborations,
                        freelance projects, or just a friendly chat.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <SocialLink
                        href="mailto:fakhridanial29@gmail.com"
                        icon={Mail}
                        label="Email"
                        username="fakhridanial29@gmail.com"
                        hoverColor="group-hover:bg-[#EA4335]" // Official Gmail Red
                    />
                    <SocialLink
                        href="https://linkedin.com/in/fdaniall"
                        icon={Linkedin}
                        label="LinkedIn"
                        username="fdaniall"
                        hoverColor="group-hover:bg-[#0077b5]" // Official LinkedIn Blue
                    />
                    <SocialLink
                        href="https://github.com/fdaniall"
                        icon={Github}
                        label="GitHub"
                        username="@fdaniall"
                        hoverColor="group-hover:bg-[#24292e]" // Official GitHub Dark
                    />
                    <SocialLink
                        href="https://instagram.com/fdaniall"
                        icon={Instagram}
                        label="Instagram"
                        username="@fdaniall"
                        hoverColor="group-hover:bg-gradient-to-br group-hover:from-[#833ab4] group-hover:via-[#fd1d1d] group-hover:to-[#fcb045]" // Official Instagram Gradient
                    />
                </div>

                <div className="mt-20 text-center text-gray-600 text-sm">
                    <p>© {new Date().getFullYear()} Fakhri Danial. All rights reserved.</p>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
