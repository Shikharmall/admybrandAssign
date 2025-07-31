"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0e1014] to-[#1a1c22] overflow-hidden px-6">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-lg rounded-none z-0" />

            <motion.div
                className="relative z-10 max-w-6xl mx-auto text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
                    ADmyBRAND AI Suite
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 drop-shadow">
                    Revolutionize your marketing with AI-powered tools. Automate campaigns, optimize performance, and convert smarter — all in one suite.
                </p>
                <Button className="text-lg px-6 py-3 rounded-full font-medium shadow-lg">
                    Get Started
                </Button>

                {/* Optional Hero Image or Video */}
                <div className="mt-12 flex justify-center">
                    <Image
                        src="/hero-demo.png" // Replace with your asset
                        alt="AI Suite Preview"
                        width={960}
                        height={540}
                        className="rounded-xl shadow-2xl border border-white/10"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
