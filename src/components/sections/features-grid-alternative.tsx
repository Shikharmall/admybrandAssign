"use client"

import { motion, useInView } from "framer-motion"
import { Zap, Shield, Rocket, Brain, Globe, BarChart3, Lock, Smartphone, Cloud, CheckCircle } from "lucide-react"
import { useRef } from "react"

const mainFeatures = [
  {
    icon: Brain,
    title: "AI-Powered Automation",
    description: "Intelligent automation that learns from your workflow patterns and optimizes processes in real-time.",
    benefits: ["Smart workflow optimization", "Predictive analytics", "Automated decision making"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Rocket,
    title: "Instant Deployment",
    description: "Deploy your applications globally in seconds with our edge computing infrastructure.",
    benefits: ["Zero-downtime deployments", "Global edge network", "Automatic rollbacks"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Enterprise-grade security with multi-layer protection and compliance certifications.",
    benefits: ["End-to-end encryption", "SOC 2 compliance", "Advanced threat detection"],
    gradient: "from-green-500 to-emerald-500",
  },
]

const additionalFeatures = [
  { icon: Zap, title: "Lightning Performance", description: "Sub-second response times globally" },
  { icon: Globe, title: "Global CDN", description: "200+ edge locations worldwide" },
  { icon: BarChart3, title: "Real-time Analytics", description: "Comprehensive insights dashboard" },
  { icon: Lock, title: "Zero-Trust Security", description: "Advanced security protocols" },
  { icon: Smartphone, title: "Mobile Optimized", description: "Perfect mobile experience" },
  { icon: Cloud, title: "Cloud Native", description: "Built for modern infrastructure" },
]

export default function FeaturesGridAlternative() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container px-4 md:px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Features that
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              power your success
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to build, deploy, and scale modern applications with confidence.
          </p>
        </motion.div>

        {/* Main Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid gap-8 lg:grid-cols-3 mb-20"
        >
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              {/* Gradient Background */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-3xl`}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 shadow-lg`}
              >
                <feature.icon className="h-8 w-8 text-white" />
              </motion.div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{feature.description}</p>

                {/* Benefits List */}
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 + idx * 0.1 }}
                      className="flex items-center text-sm text-slate-600"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl flex items-center justify-center group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300"
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
