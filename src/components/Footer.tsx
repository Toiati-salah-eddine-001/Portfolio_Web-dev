"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { SectionTitle } from "./ui/SectionTitle";

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="section min-h-section flex items-center justify-center bg-gradient-to-br from-muted/20 to-primary/ px-6 py-20"
        >
            <div className="w-full max-w-9xl mx-auto">
                <SectionTitle className="mb-16">
                    <span className="text-primary">Connect</span> With Me
                </SectionTitle>
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