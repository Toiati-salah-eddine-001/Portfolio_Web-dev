"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Github, Globe } from "lucide-react";
import { useEffect, useRef } from "react";

export default function ProjectCard() {
    const cardRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!cardRef.current) return;
            const rect = cardRef.current.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            x.set(mouseX - width / 2);
            y.set(mouseY - height / 2);
        };

        const handleMouseLeave = () => {
            x.set(0);
            y.set(0);
        };

        const card = cardRef.current;
        card?.addEventListener("mousemove", handleMouseMove);
        card?.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            card?.removeEventListener("mousemove", handleMouseMove);
            card?.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [x, y]);

    return (
        <motion.div
            className="max-w-5xl mx-auto p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <motion.div
                ref={cardRef}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="bg-gradient-to-br from-red-600 via-red-500 to-red-800 rounded-3xl shadow-2xl flex flex-col md:flex-row items-stretch p-1 overflow-hidden relative group"
            >
                {/* GLASS SHINE OVERLAY */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute -top-1/2 -left-1/2 w-96 h-96 bg-white rounded-full blur-3xl opacity-60 animate-pulse"></div>
                    <motion.div
                        className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                {/* INNER BORDER GLOW */}
                <div className="absolute inset-0 rounded-3xl p-px bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Left Section */}
                <div className="flex-1 flex flex-col justify-between p-8 md:p-10 relative z-10">
                    <div>
                        <motion.h2
                            className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            Nebula Admin Dashboard
                        </motion.h2>
                        <motion.p
                            className="text-white/90 text-lg mb-6 leading-relaxed"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            Real-time analytics dashboard with AI insights, dark mode, and modular widget system.
                        </motion.p>

                        {/* FLOATING TAGS (REPLACED BULLET LIST) */}
                        <motion.div
                            className="flex flex-wrap gap-2 mb-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            {["React", "Tailwind", "Framer Motion", "Node.js", "MongoDB"].map((tag, i) => (
                                <motion.span
                                    key={tag}
                                    className="bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium border border-white/30"
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.5 + i * 0.05 }}
                                    whileHover={{ scale: 1.05, y: -3 }}
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                    {/* DUAL CTA BUTTONS */}
                    <div className="flex flex-wrap gap-4 mt-4">
                        <motion.a
                            href="#"
                            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-medium border border-white/30 transition-all duration-300"
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Globe className="w-4 h-4" />
                            Live Demo
                        </motion.a>
                        <motion.a
                            href="#"
                            className="inline-flex items-center gap-2 bg-gray-800/60 hover:bg-gray-700/60 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-medium border border-gray-600/50 transition-all duration-300"
                            whileHover="hover"
                            initial="rest"
                            variants={{
                                rest: { x: 0 },
                                hover: { x: 5 },
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Github className="w-4 h-4" />
                            Github
                            <motion.div
                                variants={{
                                    rest: { x: 0 },
                                    hover: { x: 5 },
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <ArrowRight className="w-4 h-4" />
                            </motion.div>
                        </motion.a>
                    </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px bg-white/20 my-8"></div>

                {/* Right Section (Image) */}
                <div className="flex-1 relative overflow-hidden rounded-2xl md:rounded-none">
                    <motion.div
                        className="w-full h-64 md:h-full bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl md:rounded-r-3xl relative overflow-hidden"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 150 }}
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                    >
                        {/* PLACEHOLDER IMAGE — REPLACE WITH YOUR OWN */}
                        <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent z-10"></div>
                        <div className="absolute bottom-4 left-4 text-white font-medium z-10">
                            Interactive Preview
                        </div>
                        {/* FAKE SCREEN UI LINES */}
                        <div className="absolute inset-4 flex flex-col gap-2 z-10">
                            <div className="w-3/4 h-4 bg-white/30 rounded"></div>
                            <div className="w-1/2 h-3 bg-white/20 rounded"></div>
                            <div className="flex gap-2 mt-4">
                                <div className="w-16 h-16 bg-white/10 rounded-lg"></div>
                                <div className="w-16 h-16 bg-white/10 rounded-lg"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* SPARKLE ON CLICK (DELIGHT) */}
                <motion.div
                    className="pointer-events-none absolute inset-0 flex items-center justify-center z-20"
                    initial={{ opacity: 0 }}
                    whileTap={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="text-6xl"
                        initial={{ scale: 0 }}
                        whileTap={{
                            scale: [0, 1.5, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{ duration: 0.6 }}
                    >
                        ✨
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}