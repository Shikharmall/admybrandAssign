"use client"

import { motion, useInView } from "framer-motion"
import {
  Zap,
  Shield,
  Rocket,
  Brain,
  Globe,
  BarChart3,
  Lock,
  Smartphone,
  Cloud,
  Sparkles,
  ArrowRight,
} from "lucide-react"
import { useRef } from "react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description:
      "Experience blazing-fast load times with our optimized infrastructure. Built for speed from the ground up.",
    gradient: "from-yellow-400 to-orange-500",
    delay: 0.1,
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption, SOC 2 compliance, and advanced threat protection.",
    gradient: "from-green-400 to-emerald-500",
    delay: 0.2,
  },
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Leverage cutting-edge AI to automate workflows, predict trends, and make smarter decisions.",
    gradient: "from-purple-400 to-pink-500",
    delay: 0.3,
  },
  {
    icon: Rocket,
    title: "Auto-Scale Infrastructure",
    description: "Seamlessly scale from startup to enterprise with our intelligent auto-scaling technology.",
    gradient: "from-blue-400 to-cyan-500",
    delay: 0.4,
  },
  {
    icon: Globe,
    title: "Global CDN Network",
    description: "Deliver content at lightning speed worldwide with our 200+ edge locations across 6 continents.",
    gradient: "from-indigo-400 to-purple-500",
    delay: 0.5,
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Get instant insights with comprehensive analytics, custom dashboards, and predictive reporting.",
    gradient: "from-rose-400 to-pink-500",
    delay: 0.6,
  },
  {
    icon: Lock,
    title: "Zero-Trust Security",
    description: "Advanced security model that verifies every user and device before granting access to resources.",
    gradient: "from-teal-400 to-green-500",
    delay: 0.7,
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive design that works perfectly on any device, with native mobile app performance.",
    gradient: "from-violet-400 to-purple-500",
    delay: 0.8,
  },
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description: "Built on modern cloud infrastructure with 99.99% uptime guarantee and automatic backups.",
    gradient: "from-sky-400 to-blue-500",
    delay: 0.9,
  },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        // ease: "easeOut",
        ease: "easeOut" as const
      },
    },
  }

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-purple-200/50 bg-gradient-to-r from-purple-50/80 to-pink-50/80 backdrop-blur-sm px-4 py-2 text-sm mb-6 shadow-lg"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 text-purple-600" />
            </motion.div>
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
              Powerful Features
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Everything you need to
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              build amazing products
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover the comprehensive suite of tools and features designed to accelerate your development process and
            scale your business to new heights.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, type: "spring", stiffness: 300 },
              }}
              className="group relative"
            >
              {/* Card Background with Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl rounded-3xl border border-white/50 shadow-xl group-hover:shadow-2xl transition-all duration-500" />

              {/* Hover Glow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-5 rounded-3xl blur-xl`}
              />

              {/* Card Content */}
              <div className="relative p-8 h-full flex flex-col">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 shadow-lg`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{feature.description}</p>
                </div>

                {/* Learn More Link */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center text-sm font-semibold text-purple-600 group-hover:text-purple-700 cursor-pointer"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 backdrop-blur-xl rounded-3xl border border-white/50 p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Ready to experience the difference?</h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already building the future with our platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl border-0"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="border-2 border-slate-300 hover:border-purple-300 hover:bg-purple-50 px-8 py-4 rounded-full font-semibold text-lg bg-white/80 backdrop-blur-sm"
              >
                View All Features
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
