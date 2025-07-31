import { CheckCircle } from "lucide-react";
import MotionCard from "@/components/ui/MotionCard";

const features: string[] = [
  "AI Campaign Generator",
  "Predictive Analytics",
  "Multi-Channel Publishing",
  "Smart Ad Optimization",
  "SEO Assistant",
  "Creative Suggestions"
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">Powerful Features</h2>
        <p className="text-slate-400 mt-2">Automate and amplify every aspect of your marketing.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <MotionCard key={i} className="bg-white/5 backdrop-blur p-6 rounded-xl shadow-xl" delay={i * 0.2}>
            <CheckCircle className="text-blue-500 mb-3" size={32} />
            <h3 className="text-xl font-semibold">{feature}</h3>
          </MotionCard>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;