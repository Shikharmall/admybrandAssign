"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight, Play, Sparkles } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Inc.",
    avatar: "/img2.jpg",
    rating: 5,
    content:
      "This platform has completely transformed how we build and deploy applications. The AI-powered features save us hours every day, and the performance is incredible. Our team productivity has increased by 300%.",
    highlight: "team productivity has increased by 300%",
    companyLogo: "/hero-demo.png",
    videoTestimonial: true,
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Lead Developer",
    company: "StartupLab",
    avatar: "/img2.jpg",
    rating: 5,
    content:
      "The developer experience is phenomenal. From the intuitive interface to the powerful API, everything just works. We migrated our entire infrastructure in just two weeks with zero downtime.",
    highlight: "zero downtime migration",
    companyLogo: "/hero-demo.png",
    videoTestimonial: false,
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Product Manager",
    company: "InnovateCorp",
    avatar: "/img2.jpg",
    rating: 5,
    content:
      "The analytics and insights we get are game-changing. We can make data-driven decisions faster than ever before. The customer support is also exceptional - they're always there when we need them.",
    highlight: "game-changing analytics",
    companyLogo: "/hero-demo.png",
    videoTestimonial: true,
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder & CEO",
    company: "CloudVenture",
    avatar: "/img2.jpg",
    rating: 5,
    content:
      "As a startup, we needed something that could scale with us. This platform has grown with our company from 5 to 500 employees. The enterprise features are robust yet easy to use.",
    highlight: "scaled from 5 to 500 employees",
    companyLogo: "/hero-demo.png",
    videoTestimonial: false,
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "VP of Engineering",
    company: "DataDriven Solutions",
    avatar: "/img2.jpg",
    rating: 5,
    content:
      "Security was our biggest concern when evaluating platforms. The enterprise-grade security features and compliance certifications gave us complete confidence. Highly recommended!",
    highlight: "enterprise-grade security",
    companyLogo: "/hero-demo.png",
    videoTestimonial: true,
  },
  {
    id: 6,
    name: "Alex Johnson",
    role: "Senior Architect",
    company: "ScaleTech",
    avatar: "/img2.jpg",
    rating: 5,
    content:
      "The integration capabilities are outstanding. We connected all our existing tools seamlessly. The API documentation is clear, and the SDKs are well-maintained. Perfect for enterprise use.",
    highlight: "outstanding integration capabilities",
    companyLogo: "/hero-demo.png",
    videoTestimonial: false,
  },
]

const stats = [
  { value: "10,000+", label: "Happy Customers" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "99%", label: "Would Recommend" },
  { value: "24/7", label: "Support Available" },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
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
            x: [0, 80, 0],
            y: [0, -50, 0],
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
              Customer Stories
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Loved by
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              thousands of developers
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            See what our customers have to say about their experience with our platform.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-4 hidden lg:block">
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full border border-white/50 shadow-lg flex items-center justify-center text-slate-600 hover:text-purple-600 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </motion.button>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-4 hidden lg:block">
              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full border border-white/50 shadow-lg flex items-center justify-center text-slate-600 hover:text-purple-600 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </div>

            {/* Testimonial Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl p-8 md:p-12"
              >
                <div className="grid gap-8 lg:grid-cols-2 items-center">
                  {/* Content */}
                  <div className="space-y-6">
                    {/* Quote Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg"
                    >
                      <Quote className="h-8 w-8 text-white" />
                    </motion.div>

                    {/* Rating */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="flex items-center gap-1"
                    >
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                        >
                          <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Testimonial Content */}
                    <motion.blockquote
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium"
                    >
                      "{currentTestimonial.content.replace(currentTestimonial.highlight, "")}"
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                        {currentTestimonial.highlight}
                      </span>
                      "
                    </motion.blockquote>

                    {/* Author Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="flex items-center gap-4"
                    >
                      <div className="relative">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg"
                        >
                          <Image
                            src={currentTestimonial.avatar || "/placeholder.svg"}
                            alt={currentTestimonial.name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        {currentTestimonial.videoTestimonial && (
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                          >
                            <Play className="h-3 w-3 text-white fill-current" />
                          </motion.div>
                        )}
                      </div>

                      <div>
                        <div className="font-semibold text-slate-900 text-lg">{currentTestimonial.name}</div>
                        <div className="text-slate-600">{currentTestimonial.role}</div>
                        <div className="text-purple-600 font-medium">{currentTestimonial.company}</div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Company Logo & Visual */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="flex flex-col items-center justify-center space-y-8"
                  >
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
                      <Image
                        src={currentTestimonial.companyLogo || "/placeholder.svg"}
                        alt={`${currentTestimonial.company} logo`}
                        width={120}
                        height={40}
                        className="opacity-60 hover:opacity-100 transition-opacity"
                      />
                    </div>

                    {currentTestimonial.videoTestimonial && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Play className="h-4 w-4 fill-current" />
                        Watch Video
                      </motion.button>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex justify-center gap-3 mt-8"
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </motion.div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-8 lg:hidden">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full border border-white/50 shadow-lg flex items-center justify-center text-slate-600 hover:text-purple-600 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>

            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full border border-white/50 shadow-lg flex items-center justify-center text-slate-600 hover:text-purple-600 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
