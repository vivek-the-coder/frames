"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    fullWidth?: boolean;
    padding?: boolean;
}

export default function FadeIn({
    children,
    className,
    delay = 0,
    direction = "up",
    fullWidth = false,
    padding = true,
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    const directionOffset = {
        up: 40,
        down: -40,
        left: 40,
        right: -40,
    };

    const axis = direction === "left" || direction === "right" ? "x" : "y";

    return (
        <div
            ref={ref}
            className={cn(fullWidth ? "w-full" : "", padding && "px-0", className)} // container-lux already has max-width and padding
        >
            <motion.div
                initial={{ opacity: 0, [axis]: directionOffset[direction] }}
                animate={isInView ? { opacity: 1, [axis]: 0 } : { opacity: 0, [axis]: directionOffset[direction] }}
                transition={{
                    duration: 1.2, // Slower, more cinematic duration
                    delay: delay,
                    ease: [0.21, 0.47, 0.32, 0.98],
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}
