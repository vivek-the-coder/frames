"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Hero() {
    const heroRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const carY = useTransform(scrollYProgress, [0, 1], ["0vh", "12vh"]); // Reduced for mobile smoothness
    const carScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
    const carOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

    return (
        <section
            ref={heroRef}
            id="hero"
            className="relative h-[100svh] w-full overflow-hidden bg-black md:hidden"
        >

            {/* Studio background - Desktop */}
            <div className="absolute inset-0 z-0 hidden md:block">
                <Image
                    src="/herostudiodesk3.png"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center opacity-90"
                />
            </div>

            {/* Studio background - Mobile */}
            <div className="absolute inset-0 z-0 md:hidden">
                <Image
                    src="/safeimagekit-resized-IMG_20260216_032531.png"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-fill object-center opacity-90"
                />
            </div>

            {/* Dark gradient */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-black/95" />

            {/* Text content - Stable Flex Positioning */}
            <div className="
                relative
                z-30
                flex
                flex-col
                items-center
                justify-start
                h-full
                pt-[24svh] md:pt-[22vh]
                px-6
                text-center
            ">
                <h1 className="
                    text-white
                    font-semibold
                    max-w-[298px]
                    tracking-tight
                    leading-[1.1]
                    text-3xl
                    sm:text-5xl
                    md:text-6xl
                    lg:text-7xl
                    xl:text-8xl
                    uppercase
                    drop-shadow-2xl
                ">
                    Detailing Without
                    <br />
                    Compromise
                </h1>

                <p className="
                    mt-4 md:mt-6
                    max-w-[250px]
                    mx-auto
                    text-neutral-400
                    font-light
                    text-sm md:text-lg
                    tracking-wide
                    opacity-70
                ">
                    Precision engineering meets aesthetic perfection. We shield your automotive masterpiece with the world’s most advanced systems.
                </p>

                <button className="
                    mt-8 md:mt-10
                    px-8 py-3.5
                    border border-white/20
                    rounded-full
                    text-white
                    text-xs md:text-sm
                    uppercase
                    tracking-widest
                    hover:bg-white hover:text-black
                    transition-all duration-500
                    backdrop-blur-sm
                ">
                    Start Your Aura
                </button>
            </div>

            {/* Car - Scroll Animated & Stable Anchoring */}
            <motion.div
                style={{
                    y: carY,
                    scale: carScale,
                    opacity: carOpacity
                }}
                className="
                    absolute
                    left-1/2
                    bottom-[3svh]
                    -translate-x-1/2
                    z-20
                    w-[90vw]
                    md:w-[75vw]
                    max-w-none
                    md:max-w-[1400px]
                    pointer-events-none
                    select-none
                    will-change-transform
                "
            >
                {/* Desktop Car Image */}
                <div className="hidden md:block">
                    <Image
                        src="/carherodesk.png"
                        alt="Luxury Car Desktop"
                        width={2600}
                        height={1400}
                        priority
                        quality={100}
                        className="w-full h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
                    />
                </div>

                {/* Mobile Car Image */}
                <div className="md:hidden">
                    <Image
                        src="/carhero2.png"
                        alt="Luxury Car Mobile"
                        width={2600}
                        height={1400}
                        priority
                        quality={100}
                        className="w-full h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
                    />
                </div>
            </motion.div>

        </section>
    );
}
