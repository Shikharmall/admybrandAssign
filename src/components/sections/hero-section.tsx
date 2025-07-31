"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/buttonn"
import { Play, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-200/50 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_70%)]" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          {/* Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-white/80 backdrop-blur-sm w-fit"
            >
              <span className="text-emerald-600 font-medium">✨ New Release</span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Build the future
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600"
                >
                  one line at a time
                </motion.span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="max-w-[600px] text-slate-600 text-lg md:text-xl leading-relaxed"
              >
                Transform your ideas into reality with our cutting-edge development platform. Ship faster, scale better,
                and create experiences that matter.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-300 hover:bg-slate-50 px-8 py-3 text-lg bg-transparent"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 border-2 border-white"
                    />
                  ))}
                </div>
                <span className="text-sm text-slate-600 ml-2">Trusted by 10,000+ developers</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative lg:order-last"
          >
            <div className="relative">
              {/* Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-blue-500/20 rounded-3xl blur-3xl"
              />

              {/* Main Image Container */}
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-4 border border-white/20"
              >
                <Image
                  src="/hero-demo.png"
                  alt="Hero Dashboard Interface"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  priority
                />

                {/* Floating Elements */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                >
                  99.9% Uptime
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                >
                  Real-time Analytics
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
