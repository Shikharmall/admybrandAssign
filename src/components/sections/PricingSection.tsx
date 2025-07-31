import MotionCard from "@/components/ui/MotionCard";

const pricingPlans = [
  {
    name: "Starter",
    price: "$19/mo",
    features: ["Basic AI tools", "Email support", "Community access"],
  },
  {
    name: "Professional",
    price: "$49/mo",
    features: ["All Starter features", "Advanced AI automation", "Analytics dashboard"],
  },
  {
    name: "Enterprise",
    price: "Contact us",
    features: ["Unlimited usage", "Dedicated support", "Custom integrations"],
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">Pricing Plans</h2>
        <p className="text-slate-400 mt-2">Flexible options for teams of all sizes.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, i) => (
          <MotionCard key={i} className="bg-white/5 backdrop-blur p-6 rounded-xl shadow-xl" delay={i * 0.2}>
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-xl text-blue-400 font-semibold mb-4">{plan.price}</p>
            <ul className="text-sm space-y-2">
              {plan.features.map((f, idx) => (
                <li key={idx}>✓ {f}</li>
              ))}
            </ul>
          </MotionCard>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;