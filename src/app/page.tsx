// import DemoAmination from "@/components/sections/DemoAnimation";
import DemoAmination from "@/components/sections/demo-video-section";


// import PriceCalculator from "@/components/sections/PriceCalculator";
// import PricingCalculator from "@/components/sections/PricingCalculator";
import PricingCalculator from "@/components/sections/pricing-calculator";


// import HeroSection from "@/components/sections/HeroSection";
// import HeroSection from "@/components/sections/hero-section-with-scroll";
import HeroSection from "@/components/sections/hero-section";


// import FeaturesSection from "@/components/sections/FeaturesSection";
// import FeaturesSection from "@/components/sections/features-grid-alternative";
import FeaturesSection from "@/components/sections/features-section";


// import PricingSection from "@/components/sections/PricingSection";
import PricingSection from "@/components/sections/pricing-section";



// import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TestimonialsSection from "@/components/sections/testimonials-carousel";



// import FAQSection from "@/components/sections/FAQSection";
import FAQSection from "@/components/sections/faq-section";


// import BlogResourcesSection from "@/components/sections/BlogResources";
import BlogResourcesSection from "@/components/sections/blog-resources-section";


// import Footer from "@/components/layout/Footer";
// import Footer from "@/components/sections/footer";
import Footer from "@/components/sections/footee-new";
import DemoVideoSection from "@/components/sections/demo-video-section";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ">   {/* text-white */}

      {/* <HeroSection /> */}
      {/* <DemoAmination /> */}
      {/* <PriceCalculator /> */}

      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <DemoVideoSection />
      <PricingCalculator />
      <TestimonialsSection />
      <BlogResourcesSection />
      <FAQSection />
      <Footer />

    </main>
  );
}

