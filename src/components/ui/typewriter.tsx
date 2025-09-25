"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

export default function TextGenerateEffect({
  words,
  className = "",
}: {
  words: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => words.slice(0, latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, words.length, {
        type: "tween",
        duration: 2.5,
        ease: "easeInOut",
      });
      return controls.stop;
    }
  }, [isInView, words, count]); // count is managed by the animation, so we don't need it in deps

  return (
    <motion.span ref={ref} className={className}>
      {displayText}
    </motion.span>
  );
}
