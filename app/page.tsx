import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import ComponentShowcase from "@/components/home/ComponentShowcase";
import AIFeature from "@/components/home/AIFeature";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <ComponentShowcase />
      <AIFeature />
      <Footer />
    </div>
  );
}