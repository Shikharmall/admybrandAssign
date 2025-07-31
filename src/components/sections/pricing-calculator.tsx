"use client"

import { motion, useInView } from "framer-motion"
import { Calculator, Users, Database, Zap, Globe, Shield, Check, Sparkles, ArrowRight } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/Button"

interface PricingTier {
  name: string
  basePrice: number
  color: string
  gradient: string
  icon: any
  features: string[]
  limits: {
    users: number
    storage: number
    apiCalls: number
    projects: number
  }
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    basePrice: 9,
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
    icon: Zap,
    features: ["Basic analytics", "Email support", "SSL certificates", "5 integrations"],
    limits: {
      users: 5,
      storage: 10,
      apiCalls: 10000,
      projects: 5,
    },
  },
  {
    name: "Professional",
    basePrice: 29,
    color: "purple",
    gradient: "from-purple-500 to-pink-500",
    icon: Users,
    features: ["Advanced analytics", "Priority support", "Custom domains", "50 integrations", "Team collaboration"],
    limits: {
      users: 25,
      storage: 100,
      apiCalls: 100000,
      projects: 25,
    },
  },
  {
    name: "Enterprise",
    basePrice: 99,
    color: "emerald",
    gradient: "from-emerald-500 to-teal-500",
    icon: Shield,
    features: ["Real-time analytics", "24/7 phone support", "White-label", "Unlimited integrations", "Custom SLA"],
    limits: {
      users: 100,
      storage: 1000,
      apiCalls: 1000000,
      projects: 100,
    },
  },
]

const usageMultipliers = {
  users: 2, // $2 per additional user
  storage: 0.1, // $0.10 per GB
  apiCalls: 0.00001, // $0.01 per 1000 calls
  projects: 5, // $5 per additional project
}

export default function PricingCalculator() {
  const [selectedTier, setSelectedTier] = useState(1) // Professional by default
  const [isYearly, setIsYearly] = useState(false)
  const [usage, setUsage] = useState({
    users: 10,
    storage: 50,
    apiCalls: 50000,
    projects: 10,
  })
  const [calculatedPrice, setCalculatedPrice] = useState(0)
  const [savings, setSavings] = useState(0)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const currentTier = pricingTiers[selectedTier]

  // Calculate pricing based on usage
  useEffect(() => {
    const basePrice = currentTier.basePrice
    let additionalCosts = 0

    // Calculate overages
    const userOverage = Math.max(0, usage.users - currentTier.limits.users)
    const storageOverage = Math.max(0, usage.storage - currentTier.limits.storage)
    const apiOverage = Math.max(0, usage.apiCalls - currentTier.limits.apiCalls)
    const projectOverage = Math.max(0, usage.projects - currentTier.limits.projects)

    additionalCosts += userOverage * usageMultipliers.users
    additionalCosts += storageOverage * usageMultipliers.storage
    additionalCosts += apiOverage * usageMultipliers.apiCalls
    additionalCosts += projectOverage * usageMultipliers.projects

    const monthlyPrice = basePrice + additionalCosts
    const yearlyPrice = monthlyPrice * 12 * 0.8 // 20% discount for yearly

    setCalculatedPrice(isYearly ? yearlyPrice : monthlyPrice)
    setSavings(isYearly ? monthlyPrice * 12 - yearlyPrice : 0)
  }, [selectedTier, usage, isYearly, currentTier])

  const handleUsageChange = (key: keyof typeof usage, value: number) => {
    setUsage((prev) => ({ ...prev, [key]: value }))
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const getUsageColor = (current: number, limit: number) => {
    const percentage = (current / limit) * 100
    if (percentage <= 50) return "text-green-600"
    if (percentage <= 80) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 60, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-400/8 to-cyan-400/8 rounded-full blur-3xl"
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
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
              Pricing Calculator
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Calculate your
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              perfect price
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Customize your plan based on your exact needs. See real-time pricing as you adjust your requirements.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Calculator Controls */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Plan Selection */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center"
                  >
                    <Calculator className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-900">Choose Your Plan</h3>
                </div>

                <div className="grid gap-4">
                  {pricingTiers.map((tier, index) => (
                    <motion.button
                      key={tier.name}
                      onClick={() => setSelectedTier(index)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                        selectedTier === index
                          ? `border-${tier.color}-300 bg-${tier.color}-50/50`
                          : "border-slate-200 bg-white/50 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-xl bg-gradient-to-r ${tier.gradient} flex items-center justify-center`}
                        >
                          <tier.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900">{tier.name}</div>
                          <div className="text-sm text-slate-600">Starting at ${tier.basePrice}/month</div>
                        </div>
                        {selectedTier === index && <Check className="h-5 w-5 text-green-500" />}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Usage Sliders */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Customize Your Usage</h3>

                <div className="space-y-6">
                  {/* Users */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-slate-600" />
                        <label className="font-semibold text-slate-900">Team Members</label>
                      </div>
                      <div className={`font-bold ${getUsageColor(usage.users, currentTier.limits.users)}`}>
                        {usage.users} / {currentTier.limits.users} included
                      </div>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="200"
                      value={usage.users}
                      onChange={(e) => handleUsageChange("users", Number.parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    {usage.users > currentTier.limits.users && (
                      <div className="text-sm text-orange-600 mt-1">
                        +{usage.users - currentTier.limits.users} additional users ($
                        {(usage.users - currentTier.limits.users) * usageMultipliers.users}/month)
                      </div>
                    )}
                  </div>

                  {/* Storage */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Database className="h-5 w-5 text-slate-600" />
                        <label className="font-semibold text-slate-900">Storage (GB)</label>
                      </div>
                      <div className={`font-bold ${getUsageColor(usage.storage, currentTier.limits.storage)}`}>
                        {usage.storage} / {currentTier.limits.storage} included
                      </div>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="2000"
                      value={usage.storage}
                      onChange={(e) => handleUsageChange("storage", Number.parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    {usage.storage > currentTier.limits.storage && (
                      <div className="text-sm text-orange-600 mt-1">
                        +{usage.storage - currentTier.limits.storage} GB additional storage ($
                        {((usage.storage - currentTier.limits.storage) * usageMultipliers.storage).toFixed(2)}/month)
                      </div>
                    )}
                  </div>

                  {/* API Calls */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-slate-600" />
                        <label className="font-semibold text-slate-900">API Calls/Month</label>
                      </div>
                      <div className={`font-bold ${getUsageColor(usage.apiCalls, currentTier.limits.apiCalls)}`}>
                        {usage.apiCalls.toLocaleString()} / {currentTier.limits.apiCalls.toLocaleString()} included
                      </div>
                    </div>
                    <input
                      type="range"
                      min="1000"
                      max="5000000"
                      step="1000"
                      value={usage.apiCalls}
                      onChange={(e) => handleUsageChange("apiCalls", Number.parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    {usage.apiCalls > currentTier.limits.apiCalls && (
                      <div className="text-sm text-orange-600 mt-1">
                        +{(usage.apiCalls - currentTier.limits.apiCalls).toLocaleString()} additional calls ($
                        {((usage.apiCalls - currentTier.limits.apiCalls) * usageMultipliers.apiCalls).toFixed(2)}/month)
                      </div>
                    )}
                  </div>

                  {/* Projects */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-slate-600" />
                        <label className="font-semibold text-slate-900">Projects</label>
                      </div>
                      <div className={`font-bold ${getUsageColor(usage.projects, currentTier.limits.projects)}`}>
                        {usage.projects} / {currentTier.limits.projects} included
                      </div>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="500"
                      value={usage.projects}
                      onChange={(e) => handleUsageChange("projects", Number.parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    {usage.projects > currentTier.limits.projects && (
                      <div className="text-sm text-orange-600 mt-1">
                        +{usage.projects - currentTier.limits.projects} additional projects ($
                        {(usage.projects - currentTier.limits.projects) * usageMultipliers.projects}/month)
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pricing Summary */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-8"
            >
              {/* Billing Toggle */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="inline-flex items-center bg-slate-100 rounded-full p-1">
                    <button
                      onClick={() => setIsYearly(false)}
                      className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                        !isYearly ? "bg-white text-slate-900 shadow-md" : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Monthly
                    </button>
                    <button
                      onClick={() => setIsYearly(true)}
                      className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative ${
                        isYearly ? "bg-white text-slate-900 shadow-md" : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Yearly
                      <span className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs px-2 py-1 rounded-full">
                        20% OFF
                      </span>
                    </button>
                  </div>
                </div>

                {/* Price Display */}
                <div className="text-center mb-8">
                  <motion.div
                    key={calculatedPrice}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2"
                  >
                    {formatPrice(calculatedPrice)}
                  </motion.div>
                  <div className="text-slate-600 text-lg">{isYearly ? "per year" : "per month"}</div>
                  {isYearly && savings > 0 && (
                    <div className="text-emerald-600 font-semibold mt-2">Save {formatPrice(savings)} annually!</div>
                  )}
                </div>

                {/* Plan Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-slate-900 mb-4">What&apos;s included:</h4>
                  <ul className="space-y-2">
                    {currentTier.features.map((feature, index) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    className={`w-full py-4 rounded-full font-semibold text-lg shadow-lg bg-gradient-to-r ${currentTier.gradient} hover:shadow-xl transition-all duration-300 text-white border-0`}
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>

                <p className="text-center text-sm text-slate-500 mt-4">
                  14-day free trial • No credit card required • Cancel anytime
                </p>
              </div>

              {/* Usage Summary */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl p-8">
                <h4 className="font-semibold text-slate-900 mb-4">Your Configuration</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Plan</span>
                    <span className="font-semibold">{currentTier.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Team Members</span>
                    <span className="font-semibold">{usage.users}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Storage</span>
                    <span className="font-semibold">{usage.storage} GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">API Calls</span>
                    <span className="font-semibold">{usage.apiCalls.toLocaleString()}/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Projects</span>
                    <span className="font-semibold">{usage.projects}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8b5cf6, #ec4899);
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8b5cf6, #ec4899);
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  )
}
