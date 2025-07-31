"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/buttonn"
import { Play, ArrowRight, Sparkles, Zap, Shield, Rocket } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

export default function AttractiveHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 100, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/25 to-teal-400/25 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      />

      <motion.div style={{ opacity }} className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_550px] lg:gap-16 xl:grid-cols-[1fr_650px] items-center">
          {/* Content */}
          <div className="flex flex-col justify-center space-y-10">
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-purple-200/50 bg-gradient-to-r from-purple-50/80 to-pink-50/80 backdrop-blur-sm px-4 py-2 text-sm w-fit shadow-lg"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="h-4 w-4 text-purple-600" />
              </motion.div>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                Introducing AI-Powered Platform
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-none"
              >
                <span className="block text-slate-900">Transform</span>
                <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Your Vision
                </span>
                <motion.span
                  initial={{ opacity: 0, rotateX: 90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="block text-slate-900"
                >
                  Into Reality
                </motion.span>
              </motion.h1>

              {/* Enhanced Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="max-w-[650px] text-slate-600 text-xl md:text-2xl leading-relaxed font-light"
              >
                Experience the future of development with our revolutionary platform.
                <span className="text-purple-600 font-medium"> Build faster</span>,
                <span className="text-pink-600 font-medium"> scale effortlessly</span>, and
                <span className="text-blue-600 font-medium"> innovate without limits</span>.
              </motion.p>
            </div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { icon: Zap, text: "Lightning Fast", color: "from-yellow-400 to-orange-500" },
                { icon: Shield, text: "Enterprise Security", color: "from-green-400 to-emerald-500" },
                { icon: Rocket, text: "Auto-Scale", color: "from-blue-400 to-purple-500" },
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 border border-white/50 shadow-lg"
                >
                  <div className={`p-1 rounded-full bg-gradient-to-r ${feature.color}`}>
                    <feature.icon className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-2xl border-0"
                >
                  Start Building Now
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-300 hover:border-purple-300 hover:bg-purple-50 px-10 py-4 text-lg font-semibold rounded-full bg-white/80 backdrop-blur-sm"
                >
                  <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Play className="mr-2 h-5 w-5 text-purple-600" />
                  </motion.div>
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[
                    "from-purple-400 to-pink-500",
                    "from-blue-400 to-cyan-500",
                    "from-emerald-400 to-teal-500",
                    "from-orange-400 to-red-500",
                    "from-indigo-400 to-purple-500",
                  ].map((gradient, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: 180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 1.8 + i * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{ scale: 1.3, zIndex: 10 }}
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} border-3 border-white shadow-lg cursor-pointer`}
                    />
                  ))}
                </div>
                <div className="ml-2">
                  <div className="text-sm font-semibold text-slate-900">50,000+ developers</div>
                  <div className="text-xs text-slate-500">building the future</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 2 + i * 0.1 }}
                    >
                      <Sparkles className="h-4 w-4 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>
                <span className="text-sm text-slate-600">4.9/5 rating</span>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative lg:order-last"
          >
            <div className="relative">
              {/* Multiple Glow Layers */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-blue-400/30 rounded-3xl blur-3xl"
              />

              <motion.div
                animate={{
                  scale: [1.1, 1, 1.1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-l from-cyan-400/20 via-emerald-400/20 to-purple-400/20 rounded-3xl blur-2xl"
              />

              {/* Main Container */}
              <motion.div
                whileHover={{
                  y: -15,
                  rotateY: 5,
                  rotateX: 5,
                  scale: 1.02,
                }}
                transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                className="relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-3xl p-6 border border-white/50 shadow-2xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=700&width=550&text=AI+Dashboard"
                    alt="Revolutionary AI Dashboard Interface"
                    width={550}
                    height={700}
                    className="rounded-2xl shadow-2xl w-full h-auto"
                    priority
                  />

                  {/* Overlay Elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent rounded-2xl" />
                </div>

                {/* Floating Achievement Cards */}
                <motion.div
                  initial={{ opacity: 0, y: -30, rotate: -15 }}
                  animate={{ opacity: 1, y: 0, rotate: -5 }}
                  transition={{ duration: 0.8, delay: 2 }}
                  whileHover={{ scale: 1.1, rotate: 0, y: -5 }}
                  animate={{
                    y: [0, -8, 0],
                    rotate: [-5, -2, -5],
                  }}
                  transition={{
                    y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                    rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  }}
                  className="absolute -top-6 -right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-2xl cursor-pointer border border-white/20"
                >
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    99.9% Uptime
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30, rotate: 15 }}
                  animate={{ opacity: 1, y: 0, rotate: 5 }}
                  transition={{ duration: 0.8, delay: 2.2 }}
                  whileHover={{ scale: 1.1, rotate: 0, y: -5 }}
                  animate={{
                    y: [0, 8, 0],
                    rotate: [5, 2, 5],
                  }}
                  transition={{
                    y: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 },
                    rotate: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 },
                  }}
                  className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-2xl cursor-pointer border border-white/20"
                >
                  <div className="flex items-center gap-2">
                    <Rocket className="h-4 w-4" />
                    AI-Powered
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30, rotate: -10 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 2.4 }}
                  whileHover={{ scale: 1.1, x: -5 }}
                  animate={{
                    x: [0, -5, 0],
                  }}
                  transition={{
                    x: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 },
                  }}
                  className="absolute top-1/2 -left-8 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-xl cursor-pointer border border-white/20"
                >
                  <div className="flex items-center gap-1">
                    <Shield className="h-3 w-3" />
                    Secure
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent" />
    </section>
  )
}
