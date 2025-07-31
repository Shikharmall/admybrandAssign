"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin, ArrowRight, Heart } from "lucide-react"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const linkVariants = {
  hover: {
    scale: 1.05,
    x: 5,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

const socialIconVariants = {
  hover: {
    scale: 1.3,
    rotate: 10,
    y: -5,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.9,
  },
}

const contactItemVariants = {
  hover: {
    x: 8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

const glowVariants = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(59, 130, 246, 0.3)",
      "0 0 30px rgba(59, 130, 246, 0.5)",
      "0 0 20px rgba(59, 130, 246, 0.3)",
    ],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

export default function Footer() {
  return (
    <motion.footer
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative container mx-auto px-6 py-16">
        {/* Header Section */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Stay Connected
          </motion.h2>
          <motion.p className="text-slate-300 text-lg max-w-2xl mx-auto" variants={itemVariants}>
            Join our community and never miss an update. Follow us on social media and get in touch!
          </motion.p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16" variants={containerVariants}>
          {/* Company Info */}
          <motion.div
            className="space-y-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500"
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <motion.div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm" />
              </div>
              <h3 className="text-xl font-bold">Company</h3>
            </motion.div>
            <ul className="space-y-3">
              {[
                { href: "/about", text: "About Us" },
                { href: "/careers", text: "Careers" },
                { href: "/press", text: "Press" },
                { href: "/blog", text: "Blog" },
              ].map((link, index) => (
                <motion.li key={link.href} variants={itemVariants}>
                  <motion.div variants={linkVariants} whileHover="hover">
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.text}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Products & Services */}
          <motion.div
            className="space-y-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500"
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <motion.div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm" />
              </div>
              <h3 className="text-xl font-bold">Products</h3>
            </motion.div>
            <ul className="space-y-3">
              {[
                { href: "/products", text: "All Products" },
                { href: "/pricing", text: "Pricing" },
                { href: "/enterprise", text: "Enterprise" },
                { href: "/api", text: "API" },
              ].map((link, index) => (
                <motion.li key={link.href} variants={itemVariants}>
                  <motion.div variants={linkVariants} whileHover="hover">
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.text}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support & Resources */}
          <motion.div
            className="space-y-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500"
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <motion.div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm" />
              </div>
              <h3 className="text-xl font-bold">Support</h3>
            </motion.div>
            <ul className="space-y-3">
              {[
                { href: "/help", text: "Help Center" },
                { href: "/docs", text: "Documentation" },
                { href: "/community", text: "Community" },
                { href: "/contact", text: "Contact Support" },
              ].map((link, index) => (
                <motion.li key={link.href} variants={itemVariants}>
                  <motion.div variants={linkVariants} whileHover="hover">
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.text}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            className="space-y-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500"
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <motion.div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm" />
              </div>
              <h3 className="text-xl font-bold">Contact</h3>
            </motion.div>

            <div className="space-y-4">
              {[
                { icon: Mail, text: "hello@company.com", color: "from-blue-400 to-blue-600" },
                { icon: Phone, text: "+1 (555) 123-4567", color: "from-green-400 to-green-600" },
                { icon: MapPin, text: "123 Business St, City, ST 12345", color: "from-purple-400 to-purple-600" },
              ].map((contact, index) => {
                const IconComponent = contact.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 text-slate-300 cursor-pointer group"
                    variants={contactItemVariants}
                    whileHover="hover"
                  >
                    <motion.div
                      className={`w-10 h-10 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <IconComponent className="h-5 w-5 text-white" />
                    </motion.div>
                    <span className="group-hover:text-white transition-colors">{contact.text}</span>
                  </motion.div>
                )
              })}
            </div>

            {/* Social Media */}
            <motion.div className="pt-6 border-t border-white/10" variants={itemVariants}>
              <motion.h4
                className="text-lg font-semibold mb-4 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Follow Us
              </motion.h4>
              <motion.div className="flex justify-center space-x-4" variants={containerVariants}>
                {[
                  {
                    href: "https://facebook.com",
                    icon: Facebook,
                    label: "Facebook",
                    color: "from-blue-600 to-blue-700",
                  },
                  { href: "https://twitter.com", icon: Twitter, label: "Twitter", color: "from-sky-500 to-sky-600" },
                  {
                    href: "https://instagram.com",
                    icon: Instagram,
                    label: "Instagram",
                    color: "from-pink-500 to-purple-600",
                  },
                  {
                    href: "https://linkedin.com",
                    icon: Linkedin,
                    label: "LinkedIn",
                    color: "from-blue-700 to-blue-800",
                  },
                  { href: "https://github.com", icon: Github, label: "GitHub", color: "from-gray-700 to-gray-800" },
                ].map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.div key={social.href} variants={itemVariants}>
                      <motion.div variants={socialIconVariants} whileHover="hover" whileTap="tap" className="relative">
                        <Link
                          href={social.href}
                          className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
                          aria-label={social.label}
                        >
                          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <IconComponent className="h-6 w-6 relative z-10" />
                        </Link>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          className="mb-16 p-8 rounded-3xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/20"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <motion.h3 className="text-2xl font-bold mb-4" whileHover={{ scale: 1.05 }}>
              Subscribe to Our Newsletter
            </motion.h3>
            <motion.p className="text-slate-300 mb-6" variants={itemVariants}>
              Get the latest updates, exclusive content, and special offers delivered straight to your inbox.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" variants={containerVariants}>
              <motion.input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                variants={itemVariants}
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                variants={glowVariants}
                animate="animate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div className="pt-8 border-t border-white/20" variants={itemVariants}>
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            variants={containerVariants}
          >
            <motion.div
              className="text-slate-400 flex items-center space-x-2"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <span>© {new Date().getFullYear()} Company Name. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>in San Francisco</span>
            </motion.div>
            <motion.div className="flex space-x-8" variants={containerVariants}>
              {[
                { href: "/privacy", text: "Privacy Policy" },
                { href: "/terms", text: "Terms of Service" },
                { href: "/cookies", text: "Cookie Policy" },
              ].map((link, index) => (
                <motion.div key={link.href} variants={itemVariants}>
                  <motion.div variants={linkVariants} whileHover="hover">
                    <Link href={link.href} className="text-slate-400 hover:text-white transition-colors relative group">
                      {link.text}
                      <motion.div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
