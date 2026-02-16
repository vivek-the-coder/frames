"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function Showcase() {
    return (
        <section className="bg-[#030303] py-luxury-section overflow-hidden">
            <div className="container-lux mb-16 md:mb-[120px]">
                <FadeIn direction="up">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-20">
                        <div>
                            {/* Increased top air for section label */}
                            <p className="text-luxury-sm text-luxury-white-40 uppercase tracking-[0.3em] font-medium mb-12 pl-1">Portfolio</p>
                            <h2 className="text-luxury-h2 font-semibold text-white tracking-[-0.05em] leading-[1.05]">The Reflection</h2>
                        </div>
                        <p className="text-luxury-body text-luxury-white-50 max-w-[420px] font-light italic pb-3">
                            Witness the transformation from raw machinery to pristine mirror finish.
                        </p>
                    </div>
                </FadeIn>
            </div>

            <FadeIn padding={false} className="px-8 md:px-12">
                <div className="relative aspect-video w-full rounded-luxury-container bg-zinc-950 border border-white/[0.04] flex items-center justify-center group overflow-hidden shadow-[0_80px_160px_rgba(0,0,0,0.6)]">

                    <div className="absolute inset-0 noise-texture z-0 opacity-[0.03]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_80%)] z-10" />

                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-all duration-1000 z-10" />

                    <button className="z-30 group/play flex flex-col items-center gap-6 md:gap-10">
                        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-2xl flex items-center justify-center transition-all duration-1000 group-hover/play:scale-110 group-hover/play:bg-white/[0.08] group-hover/play:border-white/20">
                            <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[24px] border-l-white border-b-[14px] border-b-transparent ml-2" />
                            <div className="absolute inset-0 rounded-full border border-white/0 group-hover/play:border-white/10 animate-ping opacity-10" />
                        </div>
                        <span className="text-luxury-sm font-medium tracking-[0.4em] uppercase opacity-30 group-hover/play:opacity-100 transition-all duration-700">
                            Watch Film
                        </span>
                    </button>
                </div>
            </FadeIn>
        </section>
    );
}
