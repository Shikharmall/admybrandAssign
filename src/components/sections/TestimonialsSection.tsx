import MotionCard from "@/components/ui/MotionCard";

const testimonials = [
  { name: "Jane Doe", quote: "ADmyBRAND transformed our campaigns!", company: "Startup Inc." },
  { name: "John Smith", quote: "Incredible time saver and ROI booster.", company: "Tech Co." },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">What Customers Say</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <MotionCard key={i} className="bg-white/5 backdrop-blur p-6 rounded-xl shadow-xl" delay={i * 0.2}>
            <p className="italic text-lg">“{t.quote}”</p>
            <p className="mt-4 font-bold">{t.name}</p>
            <p className="text-sm text-slate-400">{t.company}</p>
          </MotionCard>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;