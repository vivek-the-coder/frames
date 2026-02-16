"use client";

import FadeIn from "@/components/ui/FadeIn";

const features = [
    {
        title: "Precise work",
        description: "Highest standards of professionalism ensuring every curve is attended to with surgical precision and care."
    },
    {
        title: "Premium Products",
        description: "Exclusively ultra-high-end waxes and ceramics sourced from the world's most reputable luxury brands."
    },
    {
        title: "High-level Privacy",
        description: "Your vehicle's identity is protected with our strict non-disclosure protocol and secure studio approach."
    }
];

export default function Features() {
    return (
        <section id="philosophy" className="bg-[#030303] py-luxury-section">
            <div className="container-lux grid md:grid-cols-2 gap-16 md:gap-[160px] items-start">

                <FadeIn direction="right">
                    <p className="text-luxury-sm text-luxury-white-40 uppercase tracking-[0.3em] font-medium mb-12 pl-1">Our Philosophy</p>
                    <h2 className="text-luxury-h2 font-semibold text-white leading-[1.05] tracking-[-0.05em] mb-12 md:mb-20">
                        We will take good care <br /> of your vehicle
                    </h2>

                    <div className="relative aspect-[4/5] rounded-luxury-container bg-zinc-950 overflow-hidden border border-white/[0.03] shadow-[0_40px_80px_rgba(0,0,0,0.6)] group hover:border-luxury-accent/10 transition-colors duration-1000">
                        <div className="absolute inset-0 noise-texture opacity-[0.04]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,65,0.03),transparent)] pointer-events-none" />
                        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black via-transparent to-transparent" />
                    </div>
                </FadeIn>

                <div className="space-y-12 md:space-y-[100px] pt-0 md:pt-44">
                    {features.map((feature, index) => (
                        <FadeIn key={index} direction="left" delay={index * 0.25}>
                            <div className="group pl-8 md:pl-20 border-l border-white/[0.03] hover:border-luxury-accent/30 transition-all duration-1000">
                                <h3 className="text-luxury-h3 font-medium text-white mb-8 tracking-tight group-hover:text-luxury-accent transition-colors duration-700">
                                    {feature.title}
                                </h3>
                                <p className="text-luxury-body text-white/55 font-light leading-relaxed max-w-60ch">
                                    {feature.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}

                    <FadeIn direction="left" delay={0.75}>
                        <button className="mt-20 group inline-flex items-center gap-6 text-luxury-sm font-medium text-white/30 hover:text-white transition-all duration-500">
                            <span className="underline underline-offset-[16px] decoration-white/10 group-hover:decoration-luxury-accent">Full Concierge Details</span>
                            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 text-luxury-accent">→</span>
                        </button>
                    </FadeIn>
                </div>

            </div>
        </section>
    );
}
