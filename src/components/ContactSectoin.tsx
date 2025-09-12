"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Twitter, Globe } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
    const [hovered, setHovered] = useState<string | null>(null);

    const handleHover = (id: string) => {
        setHovered(id);
    };

    const handleLeave = () => {
        setHovered(null);
    };

    const getStyles = (id: string) => ({
        background: hovered === id ? "rgba(0,0,0,0.9)" : "",
        transform: hovered === id ? "scale(1.02)" : "",
        zIndex: hovered === id ? 10 : 1,
    });

    return (
        <section
            id="contact"
            className="section min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/10 px-6"
        >
            <div className="w-full max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">Connect With Me</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* LinkedIn */}
                    <motion.div
                        className="relative h-24 rounded-lg overflow-hidden cursor-pointer"
                        style={{ backgroundColor: "#0077b5" }}
                        onMouseEnter={() => handleHover("linkedin")}
                        onMouseLeave={handleLeave}
                        animate={getStyles("linkedin")}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center text-white"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <Linkedin className="w-8 h-8" />
                        </motion.div>
                    </motion.div>

                    {/* GitHub */}
                    <motion.div
                        className="relative h-24 rounded-lg overflow-hidden cursor-pointer"
                        style={{ backgroundColor: "#000000" }}
                        onMouseEnter={() => handleHover("github")}
                        onMouseLeave={handleLeave}
                        animate={getStyles("github")}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center text-white"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <Github className="w-8 h-8" />
                        </motion.div>
                    </motion.div>

                    {/* Instagram */}
                    <motion.div
                        className="relative h-24 rounded-lg overflow-hidden cursor-pointer"
                        style={{ backgroundColor: "#f04e39" }}
                        onMouseEnter={() => handleHover("instagram")}
                        onMouseLeave={handleLeave}
                        animate={getStyles("instagram")}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center text-white"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <Instagram className="w-8 h-8" />
                        </motion.div>
                    </motion.div>

                    {/* Twitter */}
                    <motion.div
                        className="relative h-24 rounded-lg overflow-hidden cursor-pointer"
                        style={{ backgroundColor: "#1da1f2" }}
                        onMouseEnter={() => handleHover("twitter")}
                        onMouseLeave={handleLeave}
                        animate={getStyles("twitter")}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center text-white"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <Twitter className="w-8 h-8" />
                        </motion.div>
                    </motion.div>

                    {/* Globe (replaces Reddit) */}
                    <motion.div
                        className="relative h-24 rounded-lg overflow-hidden cursor-pointer"
                        style={{ backgroundColor: "#0a192f" }}
                        onMouseEnter={() => handleHover("globe")}
                        onMouseLeave={handleLeave}
                        animate={getStyles("globe")}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center text-white"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <Globe className="w-8 h-8" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}