"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { Plus, Minus, HelpCircle, Sparkles, MessageCircle, Mail, Phone } from "lucide-react"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/Button"

const faqData = [
  {
    category: "Getting Started",
    questions: [
      {
        id: 1,
        question: "How do I get started with your platform?",
        answer:
          "Getting started is simple! Sign up for a free account, complete the onboarding process, and you'll have access to our dashboard within minutes. We provide step-by-step tutorials and documentation to help you set up your first project quickly.",
      },
      {
        id: 2,
        question: "Is there a free trial available?",
        answer:
          "Yes! We offer a 14-day free trial with full access to all Professional features. No credit card required to start. You can upgrade, downgrade, or cancel at any time during or after the trial period.",
      },
      {
        id: 3,
        question: "What kind of support do you provide?",
        answer:
          "We provide comprehensive support including 24/7 email support for all plans, priority support for Professional and Enterprise users, live chat during business hours, extensive documentation, video tutorials, and community forums.",
      },
    ],
  },
  {
    category: "Pricing & Billing",
    questions: [
      {
        id: 4,
        question: "Can I change my plan at any time?",
        answer:
          "You can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately, and we'll prorate any billing adjustments. There are no long-term contracts or cancellation fees.",
      },
      {
        id: 5,
        question: "Do you offer refunds?",
        answer:
          "Yes, we offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with our service within the first 30 days, contact our support team for a full refund. No questions asked.",
      },
      {
        id: 6,
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise customers. All payments are processed securely through our PCI-compliant payment processors.",
      },
    ],
  },
  {
    category: "Features & Functionality",
    questions: [
      {
        id: 7,
        question: "What's included in the AI-powered features?",
        answer:
          "Our AI features include intelligent automation, predictive analytics, smart recommendations, automated workflows, content optimization, and real-time insights. The AI learns from your usage patterns to provide increasingly personalized suggestions.",
      },
      {
        id: 8,
        question: "How secure is my data?",
        answer:
          "Security is our top priority. We use enterprise-grade encryption, SOC 2 compliance, regular security audits, multi-factor authentication, and follow industry best practices. Your data is stored in secure, geographically distributed data centers.",
      },
      {
        id: 9,
        question: "Can I integrate with other tools?",
        answer:
          "Yes! We offer 200+ integrations with popular tools like Slack, GitHub, Jira, Salesforce, and more. We also provide a comprehensive REST API and webhooks for custom integrations. Our Enterprise plan includes custom integration support.",
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        id: 10,
        question: "What are your uptime guarantees?",
        answer:
          "We guarantee 99.9% uptime for all paid plans, backed by our SLA. Our infrastructure is built on multiple cloud providers with automatic failover, ensuring maximum reliability. We provide real-time status updates and incident reports.",
      },
      {
        id: 11,
        question: "Do you provide API access?",
        answer:
          "Yes! All paid plans include API access with different rate limits. Our RESTful API is well-documented with SDKs available in multiple programming languages. Enterprise customers get dedicated API support and higher rate limits.",
      },
      {
        id: 12,
        question: "How do you handle data backups?",
        answer:
          "We automatically backup all data multiple times daily across geographically distributed locations. Backups are encrypted and retained for 90 days. Enterprise customers can request custom backup schedules and longer retention periods.",
      },
    ],
  },
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState("Getting Started")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const categories = [...new Set(faqData.map((item) => item.category))]
  const filteredQuestions = faqData.find((item) => item.category === selectedCategory)?.questions || []

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 50, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 30,
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
              Frequently Asked Questions
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Got questions?
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              We've got answers
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most common questions about our platform, features, and services.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "bg-white/80 backdrop-blur-sm text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 shadow-md hover:shadow-lg"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* FAQ Items */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {filteredQuestions.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <motion.button
                        onClick={() => toggleItem(item.id)}
                        whileHover={{ backgroundColor: "rgba(248, 250, 252, 0.8)" }}
                        className="w-full px-8 py-6 text-left flex items-center justify-between transition-colors duration-200"
                      >
                        <div className="flex items-center gap-4">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0"
                          >
                            <HelpCircle className="h-5 w-5 text-white" />
                          </motion.div>
                          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-purple-600 transition-colors">
                            {item.question}
                          </h3>
                        </div>

                        <motion.div
                          animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0 ml-4"
                        >
                          {openItems.includes(item.id) ? (
                            <Minus className="h-5 w-5 text-slate-600" />
                          ) : (
                            <Plus className="h-5 w-5 text-slate-600" />
                          )}
                        </motion.div>
                      </motion.button>

                      <AnimatePresence>
                        {openItems.includes(item.id) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-8 pb-6">
                              <div className="pl-14">
                                <motion.p
                                  initial={{ y: -10, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  exit={{ y: -10, opacity: 0 }}
                                  transition={{ duration: 0.2, delay: 0.1 }}
                                  className="text-slate-600 leading-relaxed"
                                >
                                  {item.answer}
                                </motion.p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Still Have Questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20"
          >
            <div className="bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 backdrop-blur-xl rounded-3xl border border-white/50 p-12 shadow-2xl text-center">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mb-6 shadow-lg"
              >
                <MessageCircle className="h-8 w-8 text-white" />
              </motion.div>

              <h3 className="text-3xl font-bold text-slate-900 mb-4">Still have questions?</h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help you get the answers you need.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg border-0">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Support
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    variant="outline"
                    className="border-2 border-slate-300 hover:border-purple-300 hover:bg-purple-50 px-8 py-3 rounded-full font-semibold bg-white/80 backdrop-blur-sm"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Schedule Call
                  </Button>
                </motion.div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">24/7</div>
                    <div className="text-sm text-slate-600">Email Support</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">{"<"} 2hrs</div>
                    <div className="text-sm text-slate-600">Response Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">99%</div>
                    <div className="text-sm text-slate-600">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
