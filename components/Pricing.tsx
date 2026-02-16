"use client";

import FadeIn from "@/components/ui/FadeIn";

const pricingTiers = [
    {
        title: "Essential Detail",
        subtitle: "Best for maintenance",
        price: "₹2,499",
        duration: "2 hours",
        features: [
            "Foam wash",
            "Wheel deep clean",
            "Interior vacuum",
            "Dashboard wipe",
            "Tire dressing"
        ],
        highlight: false,
        buttonText: "Book Essential"
    },
    {
        title: "Interior Restoration",
        subtitle: "Complete revival",
        price: "₹4,999",
        duration: "4 hours",
        features: [
            "Deep interior cleaning",
            "Seat shampoo",
            "Carpet extraction",
            "Leather conditioning",
            "Odor removal"
        ],
        highlight: false,
        buttonText: "Revive Interior"
    },
    {
        title: "Paint Enhancement",
        subtitle: "Gloss amplification",
        price: "₹7,999",
        duration: "6 hours",
        features: [
            "Decontamination wash",
            "Clay bar treatment",
            "1-step machine polish",
            "Gloss enhancement",
            "Paint protection sealant"
        ],
        highlight: false,
        buttonText: "Enhance Paint"
    },
    {
        title: "Ceramic Protection",
        subtitle: "FLAGSHIP PACKAGE",
        price: "₹19,999+",
        duration: "1–2 days",
        features: [
            "Full paint correction",
            "Multi-layer ceramic coating",
            "3–5 years protection",
            "Hydrophobic finish",
            "Scratch resistance"
        ],
        highlight: true,
        buttonText: "Secure Flagship"
    }
];

const ppfPackages = [
    { name: "Partial Front", price: "₹25,000+" },
    { name: "Full Front", price: "₹55,000+" },
    { name: "Full Body", price: "₹1,20,000+" }
];

export default function Pricing() {
    return (
        <section id="pricing" className="bg-[#030303] py-luxury-section relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-luxury-accent/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container-lux relative z-10">

                <FadeIn direction="up">
                    <div className="text-center mb-20 md:mb-32">
                        <p className="text-luxury-sm text-luxury-white-40 uppercase tracking-[0.3em] font-medium mb-6">Investment</p>
                        <h2 className="text-luxury-h2 font-semibold text-white leading-[1.05] tracking-[-0.04em]">
                            Protection <span className="text-luxury-accent drop-shadow-[0_0_15px_rgba(0,255,65,0.4)]">Packages</span>
                        </h2>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
                    {pricingTiers.map((tier, index) => (
                        <FadeIn key={index} delay={index * 0.1} padding={false} className="h-full">
                            <div className={`relative h-full flex flex-col p-8 md:p-10 rounded-luxury-card border transition-all duration-500 group ${tier.highlight
                                    ? 'bg-zinc-900/80 border-luxury-accent shadow-[0_0_50px_rgba(0,255,65,0.15)] scale-[1.02] md:-translate-y-4 hover:shadow-[0_0_80px_rgba(0,255,65,0.25)]'
                                    : 'bg-zinc-950/50 border-white/5 hover:border-white/20 hover:bg-zinc-900/50'
                                }`}>
                                {tier.highlight && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 rounded-full bg-luxury-accent text-black text-[11px] font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(0,255,65,0.4)] whitespace-nowrap z-20">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <p className={`text-[11px] uppercase tracking-[0.2em] font-bold mb-3 ${tier.highlight ? 'text-luxury-accent' : 'text-white/40'}`}>
                                        {tier.subtitle}
                                    </p>
                                    <h3 className="text-2xl font-medium text-white mb-6">{tier.title}</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className={`text-3xl lg:text-4xl font-semibold tracking-tight ${tier.highlight ? 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]' : 'text-white/90'}`}>
                                            {tier.price}
                                        </span>
                                    </div>
                                    <p className="text-sm text-white/40 mt-2 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                        {tier.duration} service
                                    </p>
                                </div>

                                <ul className="space-y-4 mb-10 flex-grow">
                                    {tier.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-[14px] text-white/70 font-light leading-relaxed">
                                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${tier.highlight ? 'bg-luxury-accent/80 shadow-[0_0_8px_#00ff41]' : 'bg-white/20'}`} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 rounded-xl text-[12px] uppercase tracking-[0.2em] font-bold transition-all duration-500 ${tier.highlight
                                        ? 'bg-luxury-accent text-black hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]'
                                        : 'bg-white/5 text-white border border-white/10 hover:bg-white hover:text-black hover:border-white'
                                    }`}>
                                    {tier.buttonText}
                                </button>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* PPF High-Ticket Section */}
                <FadeIn direction="up" delay={0.4}>
                    <div className="mt-20 md:mt-32 relative rounded-luxury-container overflow-hidden border border-white/10 bg-zinc-950/80 group">

                        {/* Background Visuals */}
                        <div className="absolute inset-0 bg-[url('/images/ppf.png')] bg-cover bg-center opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-[2000ms]" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10" />

                        <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between p-10 md:p-20 gap-12">
                            <div className="max-w-xl">
                                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_#60a5fa]" />
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-200">Invisible Armor</span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">Paint Protection Film</h3>
                                <p className="text-luxury-body text-white/60 font-light mb-10">
                                    The ultimate physical barrier against rock chips, scratches, and environmental damage.
                                    Maintain flawless factory paint forever.
                                </p>
                                <button className="px-10 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-500 text-[12px] uppercase tracking-[0.2em] font-bold text-white">
                                    Configure Coverage
                                </button>
                            </div>

                            <div className="w-full lg:w-auto min-w-[300px] space-y-4">
                                {ppfPackages.map((pkg, idx) => (
                                    <div key={idx} className="flex justify-between items-center p-6 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.05] transition-all cursor-default">
                                        <span className="text-[14px] font-medium text-white/80 uppercase tracking-widest">{pkg.name}</span>
                                        <span className="text-[16px] font-bold text-white ml-8">{pkg.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
}
