import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="bg-[#030303] border-t border-white/5 pt-luxury-section pb-20">
            <div className="container-lux">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 sm:gap-24 md:gap-luxury-gap-lg text-luxury-white-60 mb-16 md:mb-32">

                    <div className="space-y-12 col-span-1 md:col-span-1">
                        <Link href="/" className="relative h-10 w-40 block">
                            <Image
                                src="/images/logo.png"
                                alt="The Detailing Aura"
                                fill
                                className="object-contain"
                            />
                        </Link>
                        <div className="space-y-6">
                            <p className="text-luxury-body text-white/55 leading-relaxed max-w-xs font-light">
                                Elevating vehicle care into an art form. Delivering unparalleled
                                aesthetic perfection and protection for connoisseurs.
                            </p>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:border-[#00ff41]/50 hover:text-[#00ff41] transition-all duration-500 cursor-pointer group">
                                    <span className="text-xs font-bold group-hover:shadow-[0_0_15px_rgba(0,255,65,0.4)] transition-shadow">IG</span>
                                </div>
                                <div className="w-12 h-12 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:border-[#00ff41]/50 hover:text-[#00ff41] transition-all duration-500 cursor-pointer group">
                                    <span className="text-xs font-bold group-hover:shadow-[0_0_15px_rgba(0,255,65,0.4)] transition-shadow">FB</span>
                                </div>
                                <div className="w-12 h-12 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:border-[#00ff41]/50 hover:text-[#00ff41] transition-all duration-500 cursor-pointer group">
                                    <span className="text-xs font-bold group-hover:shadow-[0_0_15px_rgba(0,255,65,0.4)] transition-shadow">YT</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-10">
                        <h4 className="text-[12px] uppercase tracking-[0.2em] font-bold text-white">The Studio</h4>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <p className="text-[15px] font-medium italic text-white/70">Main Workshop</p>
                                <p className="text-luxury-sm text-white/40">123 Detailer&apos;s Row, Industrial Estate<br />London, SW1A 1AA</p>
                            </div>
                            <a href="#" className="inline-block text-[11px] uppercase tracking-[0.2em] font-bold text-[#00ff41] border-b border-[#00ff41]/30 pb-1 hover:border-[#00ff41] hover:shadow-[0_5px_10px_-3px_rgba(0,255,65,0.3)] transition-all">
                                Get Directions
                            </a>
                        </div>
                    </div>

                    <div className="space-y-10">
                        <h4 className="text-[12px] uppercase tracking-[0.2em] font-bold text-white">Availability</h4>
                        <ul className="space-y-4 text-[15px] font-medium text-white/60">
                            <li className="flex justify-between border-b border-white/[0.03] pb-2">
                                <span>Mon — Fri</span>
                                <span className="text-white/40">09:00 - 19:00</span>
                            </li>
                            <li className="flex justify-between border-b border-white/[0.03] pb-2">
                                <span>Saturday</span>
                                <span className="text-white/40">10:00 - 17:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span className="text-[#00ff41]/70 italic drop-shadow-[0_0_8px_rgba(0,255,65,0.2)]">By Appointment</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-10 sm:col-span-2 lg:col-span-1">
                        <h4 className="text-[12px] uppercase tracking-[0.2em] font-bold text-white">Contact</h4>
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <p className="text-2xl font-bold tracking-tight text-white">+44 20 1234 5678</p>
                                <p className="text-luxury-sm text-white/40">info@detailingaura.com</p>
                            </div>
                            <button className="w-full py-4 rounded-xl bg-[#00ff41]/5 border border-[#00ff41]/20 text-[#00ff41] text-[12px] uppercase tracking-[0.2em] font-bold hover:bg-[#00ff41]/10 hover:border-[#00ff41]/40 hover:shadow-[0_0_20px_rgba(0,255,65,0.1)] transition-all flex items-center justify-center gap-3 group">
                                <span className="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse group-hover:shadow-[0_0_10px_#00ff41]" />
                                WhatsApp Specialist
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-[12px] text-white/20 tracking-[0.3em] uppercase font-bold">
                    <p>© {currentYear} The Detailing Aura. All rights reserved.</p>
                    <div className="flex gap-12">
                        <a href="#" className="hover:text-[#00ff41] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#00ff41] transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
