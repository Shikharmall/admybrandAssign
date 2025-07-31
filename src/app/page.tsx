import HeroSection from "@/components/sections/hero-section";
import FeaturesSection from "@/components/sections/features-section";
import DemoVideoSection from "@/components/sections/demo-video-section";
import PricingSection from "@/components/sections/pricing-section";
import PricingCalculator from "@/components/sections/pricing-calculator";
import TestimonialsSection from "@/components/sections/testimonials-carousel";
import BlogResourcesSection from "@/components/sections/blog-resources-section";
import FAQSection from "@/components/sections/faq-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ">   {/* text-white */}

      <HeroSection />
      <FeaturesSection /> {/* */}
      <DemoVideoSection />
      <PricingSection /> {/* */}
      <PricingCalculator />
      <TestimonialsSection />
      <BlogResourcesSection />
      <FAQSection />
      <Footer />

    </main>
  );
}

