"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Slider } from "@/components/ui/Slider";
import { Button } from "@/components/ui/Button";

export default function InteractivePricingCalculator() {
  const [users, setUsers] = useState(10);
  const [storage, setStorage] = useState(5);
  const [support, setSupport] = useState(false);

  const calculatePrice = () => {
    const base = 29;
    const userCost = users * 2;
    const storageCost = storage * 1.5;
    const supportCost = support ? 20 : 0;
    return base + userCost + storageCost + supportCost;
  };

  return (
    <motion.section
      className="p-6 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4">Interactive Pricing Calculator</h2>
      <Card className="p-6 space-y-4">
        <div>
          <label className="block mb-2 font-medium">Users: {users}</label>
          <Slider min={1} max={100} value={[users]} onValueChange={([v]) => setUsers(v)} />
        </div>
        <div>
          <label className="block mb-2 font-medium">Storage (GB): {storage}</label>
          <Slider min={1} max={100} value ={[storage]} onValueChange={([v]) => setStorage(v)} />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={support}
            onChange={(e) => setSupport(e.target.checked)}
            className="w-4 h-4"
          />
          <label className="text-sm">Premium Support (+$20)</label>
        </div>
        <div className="text-xl font-semibold">
          Total: ${calculatePrice().toFixed(2)} / month
        </div>
        <Button className="mt-4">Get Started</Button>
      </Card>
    </motion.section>
  );
}
