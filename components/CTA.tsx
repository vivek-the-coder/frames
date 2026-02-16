"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function CTA() {
    return (
        <section className="bg-[#030303] pt-24 md:pt-[400px] pb-luxury-section px-8 md:px-12">
            <FadeIn padding={false}>
                <div className="relative w-full rounded-luxury-container bg-gradient-to-br from-[#0e0e0e] to-[#010101] border border-white/[0.06] overflow-hidden px-8 py-20 md:px-12 md:py-40 md:p-64 shadow-[0_120px_240px_rgba(0,0,0,1)] hover:border-luxury-accent/20 transition-all duration-1000 group/panel">

                    {/* Enhanced Gloss Edge with White Tint */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00ff41]/40 to-transparent z-20" />
                    <div className="absolute top-0 inset-x-0 h-[250px] bg-gradient-to-b from-[#00ff41]/5 to-transparent z-10 pointer-events-none" />

                    {/* Layered Cinematic Wash - Custom Tone */}
                    <div className="absolute top-[-25%] right-[-15%] w-[1400px] h-[1400px] bg-[#00ff41]/5 blur-[240px] rounded-full pointer-events-none z-0 group-hover/panel:bg-[#00ff41]/10 transition-colors duration-1000" />
                    <div className="absolute bottom-[-15%] left-[-10%] w-[1000px] h-[1000px] bg-white/[0.01] blur-[200px] rounded-full pointer-events-none z-0" />

                    <div className="relative z-10 max-w-5xl">
                        <FadeIn direction="up">
                            <h2 className="text-4xl md:text-[96px] font-semibold text-white leading-[1.02] tracking-[-0.05em] mb-8 md:mb-14 drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)] uppercase italic">
                                Secure your <br className="hidden md:block" /> masterpiece today
                            </h2>
                        </FadeIn>

                        <FadeIn direction="up" delay={0.2}>
                            <p className="text-luxury-body text-white/55 mb-12 md:mb-24 max-w-2xl font-light tracking-wide italic">
                                Our schedule is strictly curated to ensure surgical focus on every vehicle.
                                Pre-book your transformation to guarantee availability.
                            </p>
                        </FadeIn>

                        <FadeIn direction="up" delay={0.4}>
                            <div className="flex flex-wrap gap-12 items-center">
                                <button className="group relative rounded-full border border-[#00ff41]/50 px-10 py-5 md:px-20 md:py-9 text-[15px] md:text-[17px] font-bold uppercase tracking-wider transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,255,65,0.3)] bg-transparent text-[#00ff41] hover:bg-[#00ff41] hover:text-black">
                                    <span className="relative z-10">Start Your Aura</span>
                                </button>
                                <button className="text-[16px] md:text-[18px] font-medium text-white/40 hover:text-[#00ff41] group flex items-center gap-4 md:gap-8 transition-all duration-500">
                                    <span className="border-b border-white/10 group-hover:border-[#00ff41]/50">Explore Services</span>
                                    <span className="w-12 h-px md:w-16 md:h-px bg-white/20 transition-all duration-700 group-hover:w-24 group-hover:bg-[#00ff41] shadow-none" />
                                </button>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="absolute inset-0 noise-texture opacity-2 z-0" />
                </div>
            </FadeIn>
        </section>
    );
}
