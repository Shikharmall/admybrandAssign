import MotionCard from "@/components/ui/MotionCard";

const faqs = [
  {
    q: "What is ADmyBRAND AI Suite?",
    a: "It’s a powerful AI-driven marketing tool to manage and optimize your campaigns.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes, we offer a 14-day free trial with full access to features.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">Frequently Asked Questions</h2>
      </div>
      <div className="space-y-6 max-w-2xl mx-auto">
        {faqs.map((faq, i) => (
          <MotionCard key={i} className="bg-white/5 backdrop-blur p-6 rounded-xl shadow-xl" delay={i * 0.2}>
            <h3 className="text-lg font-semibold">{faq.q}</h3>
            <p className="text-slate-300 mt-2">{faq.a}</p>
          </MotionCard>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
