"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Github, Globe } from "lucide-react";
import { useEffect, useRef } from "react";
import Image from 'next/image';

export default function ProjectCard({Title,Description,Tags,Image,Link,Link2}:any) {
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
                // style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 rounded-3xl shadow-2xl flex flex-col md:flex-row items-stretch p-1 overflow-hidden relative group"
            >
                {/* GLASS SHINE OVERLAY — SOFT SKY BLUE */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute -top-1/2 -left-1/2 w-96 h-96 bg-sky-200/10 rounded-full blur-3xl opacity-60 animate-pulse"></div>
                    <motion.div
                        className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-sky-100/20 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                {/* INNER BORDER GLOW — PURE BLUE/CYAN */}
                <div className="absolute inset-0 rounded-3xl p-px bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Left Section */}
                <div className="flex-1 flex flex-col justify-between p-8 md:p-10 relative z-10">
                    <div>
                        <motion.h2
                            className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            {Title}
                        </motion.h2>
                        <motion.p
                            className="text-white/90 text-lg mb-6 leading-relaxed"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            {Description}
                        </motion.p>

                        {/* FLOATING TAGS — FROSTED SKY GLASS */}
                        <motion.div
                            className="flex flex-wrap gap-2 mb-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            {Tags.map((tag, i) => (
                                <motion.span
                                    key={tag}
                                    className="bg-white/10 backdrop-blur-sm text-sky-100 px-3 py-1.5 rounded-full text-sm font-medium border border-sky-400/30 hover:border-sky-300/60 transition-all duration-300"
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.5 + i * 0.05 }}
                                    whileHover={{ scale: 1.05, y: -3, borderColor: "rgba(100, 255, 255, 0.6)" }}
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                    {/* DUAL CTA BUTTONS — SKY GLASS STYLE */}
                    <div className="flex flex-wrap gap-4 mt-4">
                        <motion.a
                            href={Link}
                            className="inline-flex items-center gap-2 bg-sky-500/20 hover:bg-sky-500/30 backdrop-blur-sm text-sky-100 px-6 py-3 rounded-xl font-medium border border-sky-400/40 hover:border-sky-300/60 transition-all duration-300"
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Globe className="w-4 h-4" />
                            Live Demo
                        </motion.a>
                        <motion.a   
                            href={Link2}
                            className="inline-flex items-center gap-2 bg-slate-900/50 hover:bg-slate-800/50 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-medium border border-blue-500/40 transition-all duration-300"
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
                                <ArrowRight className="w-4 h-4 text-sky-300" />
                            </motion.div>
                        </motion.a>
                    </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px bg-sky-300/20 my-8"></div>

                {/* Right Section (Image) — DEEP OCEAN TINT */}
                <div className="flex-1 relative overflow-hidden rounded-2xl md:rounded-none">
                    <motion.div
                        className="w-full h-64 md:h-full bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl md:rounded-r-3xl relative overflow-hidden"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 150 }}
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                    >
                        {/* Replace 'your-image.jpg' with your actual image filename */}
                        <div className="absolute inset-0 w-full h-full">
                            {/* <Image
                                src={Image}
                                alt="Project Preview"
                                fill
                                className="object-cover"
                                
                            /> */}
                            <img src={Image} alt="ll" className="object-cover object-fill w-full h-full" />
                            {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div> */}
                            {/* <div className="absolute bottom-4 left-4 text-sky-200 font-medium z-10 text-sm md:text-base">
                                Dashboard Preview
                            </div> */}
                        </div>
                    </motion.div>
                </div>

                {/* SPARKLE ON CLICK — SKY BLUE MAGIC */}
                <motion.div
                    className="pointer-events-none absolute inset-0 flex items-center justify-center z-20"
                    initial={{ opacity: 0 }}
                    whileTap={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="text-6xl text-sky-300 drop-shadow-lg"
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