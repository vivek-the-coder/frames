import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroDesktop from "@/components/HeroDesktop";
import ScrollVideo from "@/components/ScrollVideo";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Showcase from "@/components/Showcase";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroDesktop />
      <ScrollVideo />
      <Services />
      <BeforeAfter />
      <Showcase />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}
