"use client"

import { motion, useInView } from "framer-motion"
import { Check, X, Star, Zap, Crown, ArrowRight, Sparkles } from "lucide-react"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/Button"
import React from "react"

const pricingPlans = [
    {
        name: "Starter",
        description: "Perfect for individuals and small projects",
        price: { monthly: 9, yearly: 7 },
        originalPrice: { monthly: 15, yearly: 12 },
        icon: Zap,
        gradient: "from-blue-500 to-cyan-500",
        popular: false,
        features: {
            core: [
                { name: "Up to 5 projects", included: true },
                { name: "10GB storage", included: true },
                { name: "Basic analytics", included: true },
                { name: "Email support", included: true },
                { name: "SSL certificates", included: true },
            ],
            advanced: [
                { name: "Custom domains", included: false },
                { name: "Advanced analytics", included: false },
                { name: "Priority support", included: false },
                { name: "Team collaboration", included: false },
                { name: "API access", included: false },
            ],
            enterprise: [
                { name: "White-label solution", included: false },
                { name: "Dedicated account manager", included: false },
                { name: "Custom integrations", included: false },
                { name: "SLA guarantee", included: false },
            ],
        },
    },
    {
        name: "Professional",
        description: "Ideal for growing businesses and teams",
        price: { monthly: 29, yearly: 24 },
        originalPrice: { monthly: 39, yearly: 32 },
        icon: Star,
        gradient: "from-purple-500 to-pink-500",
        popular: true,
        features: {
            core: [
                { name: "Unlimited projects", included: true },
                { name: "100GB storage", included: true },
                { name: "Advanced analytics", included: true },
                { name: "Priority support", included: true },
                { name: "SSL certificates", included: true },
            ],
            advanced: [
                { name: "Custom domains", included: true },
                { name: "Advanced analytics", included: true },
                { name: "Priority support", included: true },
                { name: "Team collaboration", included: true },
                { name: "API access", included: true },
            ],
            enterprise: [
                { name: "White-label solution", included: false },
                { name: "Dedicated account manager", included: false },
                { name: "Custom integrations", included: false },
                { name: "SLA guarantee", included: false },
            ],
        },
    },
    {
        name: "Enterprise",
        description: "For large organizations with custom needs",
        price: { monthly: 99, yearly: 79 },
        originalPrice: { monthly: 129, yearly: 99 },
        icon: Crown,
        gradient: "from-emerald-500 to-teal-500",
        popular: false,
        features: {
            core: [
                { name: "Unlimited everything", included: true },
                { name: "1TB+ storage", included: true },
                { name: "Real-time analytics", included: true },
                { name: "24/7 phone support", included: true },
                { name: "Advanced SSL", included: true },
            ],
            advanced: [
                { name: "Custom domains", included: true },
                { name: "Advanced analytics", included: true },
                { name: "Priority support", included: true },
                { name: "Team collaboration", included: true },
                { name: "Full API access", included: true },
            ],
            enterprise: [
                { name: "White-label solution", included: true },
                { name: "Dedicated account manager", included: true },
                { name: "Custom integrations", included: true },
                { name: "99.9% SLA guarantee", included: true },
            ],
        },
    },
]

type FeatureCategoryKey = keyof typeof pricingPlans[0]['features']

const featureCategories: {
    key: FeatureCategoryKey
    name: string
    icon: React.ComponentType<{ className?: string }>
}[] = [
    { key: "core", name: "Core Features", icon: Zap },
    { key: "advanced", name: "Advanced Features", icon: Star },
    { key: "enterprise", name: "Enterprise Features", icon: Crown },
]
export default function PricingSection() {
    const [isYearly, setIsYearly] = useState(false)
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

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                //ease: "easeOut",
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
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                    className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 60, 0],
                        scale: [1.1, 1, 1.1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                    className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"
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
                            Simple Pricing
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                        Choose your
                        <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                            perfect plan
                        </span>
                    </h2>

                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
                        Start free and scale as you grow. All plans include our core features with no hidden fees.
                    </p>

                    {/* Billing Toggle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full p-1 border border-slate-200 shadow-lg"
                    >
                        <button
                            onClick={() => setIsYearly(false)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${!isYearly
                                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                                    : "text-slate-600 hover:text-slate-900"
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative ${isYearly
                                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                                    : "text-slate-600 hover:text-slate-900"
                                }`}
                        >
                            Yearly
                            <span className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs px-2 py-1 rounded-full">
                                Save 20%
                            </span>
                        </button>
                    </motion.div>
                </motion.div>

                {/* Pricing Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid gap-8 lg:grid-cols-3 mb-20"
                >
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                transition: { duration: 0.3, type: "spring", stiffness: 300 },
                            }}
                            className={`group relative ${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                                >
                                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                                        Most Popular
                                    </div>
                                </motion.div>
                            )}

                            {/* Card Background */}
                            <div
                                className={`absolute inset-0 rounded-3xl border transition-all duration-500 ${plan.popular
                                        ? "bg-gradient-to-br from-white to-purple-50/50 border-purple-200 shadow-2xl"
                                        : "bg-gradient-to-br from-white/80 to-white/40 border-white/50 shadow-xl group-hover:shadow-2xl"
                                    } backdrop-blur-xl`}
                            />

                            {/* Hover Glow */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} opacity-5 rounded-3xl blur-xl`}
                            />

                            {/* Card Content */}
                            <div className="relative p-8 h-full flex flex-col">
                                {/* Plan Header */}
                                <div className="text-center mb-8">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.gradient} mb-4 shadow-lg`}
                                    >
                                        <plan.icon className="h-8 w-8 text-white" />
                                    </motion.div>

                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                                    <p className="text-slate-600 mb-6">{plan.description}</p>

                                    {/* Pricing */}
                                    <div className="mb-6">
                                        <div className="flex items-center justify-center gap-2 mb-2">
                                            <span className="text-4xl font-bold text-slate-900">
                                                ${isYearly ? plan.price.yearly : plan.price.monthly}
                                            </span>
                                            <div className="text-left">
                                                <div className="text-slate-600 text-sm">per month</div>
                                                {isYearly && <div className="text-xs text-slate-500">billed yearly</div>}
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center gap-2">
                                            <span className="text-slate-400 line-through text-lg">
                                                ${isYearly ? plan.originalPrice.yearly : plan.originalPrice.monthly}
                                            </span>
                                            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs px-2 py-1 rounded-full">
                                                {Math.round(
                                                    ((isYearly ? plan.originalPrice.yearly : plan.originalPrice.monthly) -
                                                        (isYearly ? plan.price.yearly : plan.price.monthly)) /
                                                    (isYearly ? plan.originalPrice.yearly : plan.originalPrice.monthly) *
                                                    100,
                                                )}
                                                % OFF
                                            </span>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Button
                                            className={`w-full py-3 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 ${plan.popular
                                                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
                                                    : "bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 hover:border-slate-300"
                                                }`}
                                        >
                                            {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </motion.div>
                                </div>

                                {/* Features List */}
                                <div className="flex-1">
                                    {featureCategories.map((category) => (
                                        <div key={category.key} className="mb-6">
                                            <div className="flex items-center gap-2 mb-3">
                                                <category.icon className="h-4 w-4 text-slate-600" />
                                                <h4 className="font-semibold text-slate-900 text-sm">{category.name}</h4>
                                            </div>
                                            <ul className="space-y-2">
                                                {plan.features[category.key as keyof typeof plan.features].map((feature, idx) => (
                                                    <motion.li
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 + idx * 0.05 }}
                                                        className="flex items-center text-sm"
                                                    >
                                                        {feature.included ? (
                                                            <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                                        ) : (
                                                            <X className="h-4 w-4 text-slate-300 mr-3 flex-shrink-0" />
                                                        )}
                                                        <span className={feature.included ? "text-slate-700" : "text-slate-400"}>
                                                            {feature.name}
                                                        </span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Feature Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl overflow-hidden"
                >
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Detailed Feature Comparison</h3>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-slate-200">
                                        <th className="text-left py-4 px-6 font-semibold text-slate-900">Features</th>
                                        {pricingPlans.map((plan) => (
                                            <th key={plan.name} className="text-center py-4 px-6">
                                                <div className="flex flex-col items-center">
                                                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${plan.gradient} mb-2`}>
                                                        <plan.icon className="h-5 w-5 text-white m-1.5" />
                                                    </div>
                                                    <span className="font-semibold text-slate-900">{plan.name}</span>
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {featureCategories.map((category) => (
                                        <React.Fragment key={category.key}>
                                            <tr className="bg-slate-50">
                                                <td colSpan={4} className="py-3 px-6">
                                                    <div className="flex items-center gap-2">
                                                        <category.icon className="h-4 w-4 text-slate-600" />
                                                        <span className="font-semibold text-slate-900">{category.name}</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            {(pricingPlans[0].features[category.key] || []).map((feature, index) => (
                                                <tr key={feature.name} className="border-b border-slate-100 hover:bg-slate-50/50">
                                                    <td className="py-3 px-6 text-slate-700">
                                                        {feature.name}
                                                    </td>
                                                    {pricingPlans.map((plan) => {
                                                        const included = plan.features[category.key][index]?.included;
                                                        return (
                                                            <td key={plan.name} className="py-3 px-6 text-center">
                                                                {included ? (
                                                                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                                                                ) : (
                                                                    <X className="h-5 w-5 text-slate-300 mx-auto" />
                                                                )}
                                                            </td>
                                                        );
                                                    })}
                                                </tr>
                                            ))}

                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </motion.div>
                
            </div>
        </section>
    )
}
