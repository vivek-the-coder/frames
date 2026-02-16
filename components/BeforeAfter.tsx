"use client";

import { useState, useRef, useEffect } from "react";
import FadeIn from "@/components/ui/FadeIn";

export default function BeforeAfter() {
    const [position, setPosition] = useState(50);
    const [isResizing, setIsResizing] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (x: number) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const scrollX = x - rect.left;
        const percentage = (scrollX / rect.width) * 100;
        setPosition(Math.max(0, Math.min(100, percentage)));
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isResizing && e.buttons !== 1) return;
        handleMove(e.clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    const onMouseDown = () => setIsResizing(true);
    const onMouseUp = () => setIsResizing(false);

    useEffect(() => {
        window.addEventListener("mouseup", onMouseUp);
        return () => window.removeEventListener("mouseup", onMouseUp);
    }, []);

    return (
        <section id="portfolio" className="bg-[#030303] pt-24 md:pt-[320px] pb-luxury-section">
            <div className="container-lux">

                <div className="mb-luxury-gap-md px-1 text-center">
                    <FadeIn direction="up">
                        <p className="text-luxury-label text-luxury-white-40 uppercase font-medium mb-10">Transformation</p>
                        <h2 className="text-luxury-h2 font-semibold text-luxury-dim leading-[1.05] tracking-[-0.04em]">
                            Crafted to <span className="text-luxury-accent">Perfection</span>
                        </h2>
                    </FadeIn>
                </div>

                <FadeIn padding={false}>
                    <div
                        ref={containerRef}
                        onMouseMove={onMouseMove}
                        onTouchMove={onTouchMove}
                        onMouseDown={onMouseDown}
                        className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden rounded-luxury-container cursor-ew-resize select-none border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.8)] group transition-all duration-700 hover:border-luxury-accent/10"
                    >
                        {/* After Image */}
                        <div className="absolute inset-0">
                            <img
                                src="/images/1000250563.jpg"
                                alt="After Detail"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-10 right-10 z-20">
                                <span className="px-6 py-2.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-xl text-[14px] font-bold uppercase tracking-[0.25em] text-white/70 group-hover:text-luxury-accent transition-colors duration-500">
                                    After
                                </span>
                            </div>
                        </div>

                        {/* Before Image */}
                        <div
                            className="absolute inset-0 overflow-hidden z-10"
                            style={{ width: `${position}%` }}
                        >
                            <img
                                src="/images/1000250563.jpg"
                                alt="Before Detail"
                                className="w-[100vw] max-w-none h-full object-cover grayscale brightness-75 contrast-75 saturate-50 opacity-80"
                                style={{ width: containerRef.current?.offsetWidth }}
                            />
                            <div className="absolute top-10 left-10">
                                <span className="px-6 py-2.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-xl text-[14px] font-bold uppercase tracking-[0.25em] text-white/70">
                                    Before
                                </span>
                            </div>

                            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/60 to-transparent pointer-events-none" />
                        </div>

                        {/* Handle / Divider System */}
                        <div
                            className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent z-20"
                            style={{ left: `${position}%` }}
                        >
                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 bg-white/95 backdrop-blur-3xl flex items-center justify-center transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,0.5)] group-active:scale-90"
                            >
                                <div className="flex gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-black/40" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-black/40" />
                                </div>
                            </div>

                            {/* Vertical Ambient Glow */}
                            <div className="absolute inset-y-0 -left-10 w-20 bg-white/[0.01] blur-xl" />
                        </div>

                        <div className="absolute inset-0 noise-texture opacity-[0.03] z-30 pointer-events-none" />
                        <div className="absolute inset-0 vignette-layer z-30 pointer-events-none opacity-50" />
                    </div>
                </FadeIn>

                <div className="mt-20 text-center">
                    <p className="text-luxury-sm text-luxury-white-40 font-light italic tracking-wide">
                        Slide to reveal the surgical precision of our ceramic coating process.
                    </p>
                </div>
            </div>
        </section>
    );
}
