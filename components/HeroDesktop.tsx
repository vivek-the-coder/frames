"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function HeroDesktop() {
    const heroRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    // Desktop-specific Parallax
    const carY = useTransform(scrollYProgress, [0, 1], ["0vh", "15vh"]);
    const carScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
    const carOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

    return (
        <section
            ref={heroRef}
            id="hero-desktop"
            className="relative h-[100svh] w-full overflow-hidden bg-black hidden md:block"
        >
            {/* Desktop Studio Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/herostudiodesk3.png"
                    alt="Studio Desktop"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center opacity-90"
                />
                {/* Brand Ambient Glow */}
                <div className="absolute inset-0 bg-radial-gradient from-[#00ff41]/10 via-transparent to-transparent opacity-60" />
            </div>

            {/* Dark gradient */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-black/95" />

            {/* Text content - Replicated Content from Mobile Hero */}
            <div className="
                relative
                z-30
                flex
                flex-col
                items-center
                justify-start
                h-full
                pt-[11vh]
                px-6
                text-center
            ">
                <h1 className="
                    text-white
                    font-semibold
                    tracking-tight
                    leading-[1.1]
                    text-6xl
                    lg:text-7xl
                    xl:text-8xl
                    uppercase
                    drop-shadow-[0_0_25px_rgba(0,255,65,0.3)]
                ">
                    Detailing Without
                    <br />
                    Compromise
                </h1>

                <p className="
                    mt-6
                    max-w-[600px]
                    mx-auto
                    text-neutral-400
                    font-light
                    text-lg
                    tracking-wide
                    opacity-70
                ">
                    Precision engineering meets aesthetic perfection. We shield your automotive masterpiece with the world’s most advanced systems.
                </p>

                <button className="
                    mt-10
                    px-10 py-4
                    border border-[#00ff41]/50
                    rounded-full
                    text-[#00ff41]
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    hover:bg-[#00ff41] hover:text-black hover:shadow-[0_0_30px_rgba(0,255,65,0.4)]
                    transition-all duration-500
                    backdrop-blur-md
                ">
                    Start Your Aura
                </button>
            </div>

            {/* Desktop Car - Grounded & Animated */}
            <motion.div
                style={{
                    y: carY,
                    scale: carScale,
                    opacity: carOpacity
                }}
                className="
                    absolute
                    left-1/2
                    bottom-[2vh]
                    -translate-x-1/2
                    z-20
                    w-[30vw]
                    max-w-[1500px]
                    pointer-events-none
                    select-none
                    will-change-transform
                "
            >
                <Image
                    src="/carherodesk.png"
                    alt="Luxury Car Desktop"
                    width={2600}
                    height={1400}
                    priority
                    quality={100}
                    className="w-full h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
                />
            </motion.div>

        </section>
    );
}
