
"use client";

// --- Boutique Specialty Services ---

import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

const services = [
    {
        title: "Ceramic Coating",
        description: "Multi-layered liquid polymer that bonds to your paint, providing permanent protection and extreme hydrophobicity.",
        highlight: false,
        image: "/images/ceramiccoating.png"
    },
    {
        title: "PPF Protection",
        description: "Premium Paint Protection Film that shields your vehicle from chips, scratches, and pollutants while maintaining a deep gloss.",
        highlight: true,
        image: "/images/ppf.png"
    },
    {
        title: "Body Shop",
        description: "Restoring the surgical perfection of your vehicle's frame and finish with expert craftsmanship and precision.",
        highlight: false,
        image: "/images/bodyshop.png"
    }
];

export default function Services() {
    return (
        <section id="services" className="relative bg-[#030303] pb-luxury-section pt-0 -mt-1 overflow-hidden">
            <div className="container-lux relative z-10">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-[140px] gap-12">
                    <FadeIn direction="right">
                        <p className="text-luxury-sm text-[#00ff41]/60 uppercase tracking-[0.3em] font-medium mb-10 pl-1">Our Specialties</p>
                        <h2 className="text-luxury-h2 font-semibold text-white max-w-[750px] leading-[1.05] tracking-[-0.04em]">
                            The Detailing <span className="text-[#00ff41] drop-shadow-[0_0_15px_rgba(0,255,65,0.4)]">Aura</span>
                        </h2>
                    </FadeIn>

                    <FadeIn direction="left" delay={0.2} className="pb-2">
                        <p className="text-luxury-body text-white/55 max-w-[500px] font-light leading-relaxed">
                            We focus on high-ticket protection systems. Our workflow is
                            surgical, our materials are elite, and our results are eternal.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-16 md:mt-32">
                    {services.map((service, index) => (
                        <FadeIn key={index} delay={index * 0.2} padding={false}>
                            <div
                                className={`group relative ${service.highlight ? 'min-h-[520px] lg:h-[620px] lg:-mt-12 border-[#00ff41]/30 shadow-[0_40px_100px_rgba(0,255,65,0.1)]' : 'min-h-[480px] lg:h-[560px] border-white/5 shadow-2xl'} rounded-luxury-card overflow-hidden transition-all duration-1000 md:hover:-translate-y-4 bg-zinc-950 border hover:border-[#00ff41]/50`}
                            >
                                {/* Service Image Background */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-[2000ms] ease-out"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    {/* Cinematic Overlays */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent z-10" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000 z-10" />
                                </div>

                                {/* Micro-glow on hover - Green Tint */}
                                <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,255,65,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-20" />

                                {service.highlight && (
                                    <div className="absolute top-8 right-8 z-30">
                                        <span className="px-5 py-1.5 rounded-full border border-[#00ff41]/30 bg-black/60 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.3em] text-[#00ff41] shadow-[0_0_15px_rgba(0,255,65,0.2)]">
                                            Signature
                                        </span>
                                    </div>
                                )}

                                <div className="absolute inset-x-0 bottom-0 p-8 md:p-14 z-30">
                                    <h3 className="text-luxury-h3 font-medium text-white mb-6 tracking-tight group-hover:text-[#00ff41] transition-colors uppercase italic drop-shadow-lg">{service.title}</h3>
                                    <p className="text-luxury-sm text-white/50 mb-10 leading-relaxed font-light transition-colors group-hover:text-white/90 line-clamp-3">{service.description}</p>

                                    <button className="text-[12px] uppercase tracking-[0.3em] font-bold text-white/30 group-hover:text-[#00ff41] transition-all duration-500 flex items-center gap-4">
                                        Discover
                                        <span className="w-8 h-px bg-white/10 group-hover:w-20 bg-gradient-to-r group-hover:from-[#00ff41]/40 group-hover:to-[#00ff41] transition-all duration-1000" />
                                    </button>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-luxury-accent/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none z-0" />
        </section>
    );
}
