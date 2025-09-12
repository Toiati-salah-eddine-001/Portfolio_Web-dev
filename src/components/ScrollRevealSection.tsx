"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealSectionProps {
    children: React.ReactNode;
    className?: string;
}

export default function ScrollRevealSection({
                                                children,
                                                className = "",
                                            }: ScrollRevealSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        // Select all direct children (your cards)
        const cards = section.querySelectorAll(":scope > *");

        // Animate cards on scroll
        gsap.fromTo(
            cards,
            {
                opacity: 0,
                y: 50,
                scale: 0.98,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.2, // delay between each card
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%", // when top of section hits 80% from top of viewport
                    end: "bottom 20%",
                    toggleActions: "play none none reverse", // play on enter, reverse on leave
                },
            }
        );

        // Cleanup ScrollTrigger on unmount
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div ref={sectionRef} className={className}>
            {children}
        </div>
    );
}