"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="section min-h-section flex items-center justify-center bg-gradient-to-br from-muted/20 to-primary/ px-6 py-20"
        >
            <div className="w-full max-w-9xl mx-auto">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-4">
                        <span className="text-primary">Connect</span> With Me
                    </h2>
                    <div className="w-[300px] h-[15px] -mt-2">
                        <svg 
                            viewBox="0 0 1418 125" 
                            className="w-full h-full"
                            preserveAspectRatio="none"
                        >
                            <defs>
                                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#3b82f6" />
                                    <stop offset="50%" stopColor="#0ea5e9" />
                                    <stop offset="100%" stopColor="#06b6d4" />
                                </linearGradient>
                            </defs>
                            <path 
                                d="M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z" 
                                fill="url(#waveGradient)"
                                className="transition-all duration-300 hover:opacity-90"
                            />
                        </svg>
                    </div>
                </div>

                {/* FUTURISTIC PORTAL GRID */}
                <div className="relative w-full aspect-[3/2] rounded-3xl overflow-hidden bg-black/30 backdrop-blur-xl border border-white/10 shadow-2xl">

                    {/* DATA STREAM BACKGROUND (HOVER ONLY) */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none z-0">
                        <div className="absolute top-0 left-0 w-full h-full">
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-px bg-gradient-to-b from-cyan-400/60 to-purple-400/0"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        height: `${Math.random() * 80 + 20}%`,
                                        top: `${Math.random() * 20}%`,
                                    }}
                                    animate={{
                                        y: [0, Math.random() * 100 - 50],
                                        opacity: [0.2, 0.8, 0.2],
                                    }}
                                    transition={{
                                        duration: Math.random() * 3 + 2,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* LinkedIn - Full Width, Top Row */}
                    <PortalLink
                        href="https://www.linkedin.com/"
                        bgColor="#0077b5"
                        gradient="from-blue-900 via-cyan-600 to-blue-400"
                        icon="/Icons9/icons8-linkedin-50.png"
                        label="LinkedIn"
                        top="0"
                        left="0"
                        width="100%"
                        height="33.33%"
                    />

                    {/* GitHub - Half Width, Middle Left */}
                    <PortalLink
                        href="https://github.com/"
                        bgColor="#000000"
                        gradient="from-gray-900 via-gray-700 to-cyan-900"
                        icon="/Icons9/icons8-github-50.png"
                        label="GitHub"
                        top="33.33%"
                        left="0"
                        width="50%"
                        height="33.33%"
                    />

                    {/* Instagram - Half Width, Middle Right */}
                    <PortalLink
                        href="https://instagram.com/"
                        bgColor="#f04e39"
                        gradient="from-pink-600 via-red-500 to-yellow-400"
                        icon="/Icons9/icons8-instagram-50.png"
                        label="Instagram"
                        top="33.33%"
                        left="50%"
                        width="50%"
                        height="33.33%"
                    />

                    {/* Twitter (X) - One-Third Width, Bottom Left */}
                    <PortalLink
                        href="https://twitter.com/"
                        bgColor="#1da1f2"
                        gradient="from-blue-500 via-purple-600 to-pink-500"
                        icon="/Icons9/icons8-twitter-circled-50.png"
                        label="Twitter"
                        top="66.66%"
                        left="0"
                        width="33.33%"
                        height="33.33%"
                    />

                    {/* Reddit - Two-Thirds Width, Bottom Right */}
                    <PortalLink
                        href="https://reddit.com/"
                        bgColor="#ff4500"
                        gradient="from-orange-500 via-red-500 to-yellow-500"
                        icon="/Icons9/icons8-reddit-50.png"
                        label="Reddit"
                        top="66.66%"
                        left="33.33%"
                        width="66.66%"
                        height="33.33%"
                    />
                </div>
            </div>
        </section>
    );
}

// 🔮 PORTAL LINK COMPONENT — REUSABLE FUTURISTIC HOVER MAGIC
function PortalLink({
                        href,
                        bgColor,
                        gradient,
                        icon,
                        label,
                        top,
                        left,
                        width,
                        height,
                    }: {
    href: string;
    bgColor: string;
    gradient: string;
    icon: string;
    label: string;
    top: string;
    left: string;
    width: string;
    height: string;
}) {
    const ref = useRef<HTMLAnchorElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-50, 50], [5, -5]);
    const rotateY = useTransform(x, [-50, 50], [-5, 5]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const mouseX = e.clientX - rect.left - rect.width / 2;
            const mouseY = e.clientY - rect.top - rect.height / 2;
            x.set(mouseX);
            y.set(mouseY);
        };

        const handleMouseLeave = () => {
            x.set(0);
            y.set(0);
        };

        const element = ref.current;
        element?.addEventListener("mousemove", handleMouseMove);
        element?.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            element?.removeEventListener("mousemove", handleMouseMove);
            element?.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [x, y]);

    return (
        <motion.a
            ref={ref}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute flex items-center justify-center group cursor-pointer overflow-hidden"
            style={{
                top,
                left,
                width,
                height,
                backgroundColor: bgColor,
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* GLASS OVERLAY */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-all duration-500"></div>

            {/* NEON EDGE GLOW */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div
                    className="absolute inset-0 rounded-lg p-px"
                    style={{
                        background: `linear-gradient(45deg, ${gradient})`,
                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                    }}
                ></div>
            </div>

            {/* ICON CONTAINER WITH MAGNETIC TILT */}
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="z-10"
            >
                <motion.img
                    src={icon}
                    alt={label}
                    className="w-14 h-14 transition-all duration-500 group-hover:scale-125 group-hover:brightness-150"
                    whileHover={{ y: -5 }}
                />
            </motion.div>

            {/* GLITCH PULSE ON HOVER */}
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 pointer-events-none z-0"
                animate={{ x: [0, 2, 0, -2, 0], opacity: [0.3, 0.1, 0.3, 0.1, 0.3] }}
                transition={{ duration: 0.3, repeat: Infinity, repeatType: "loop" }}
                style={{ background: `linear-gradient(45deg, ${gradient})` }}
            ></motion.div>

            {/* LABEL (Hidden by default, appears on hover for accessibility) */}
            <span className="sr-only">{label}</span>
        </motion.a>
    );
}