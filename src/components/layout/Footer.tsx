"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <motion.footer
      className="bg-slate-900 text-white py-10 px-4 md:px-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Description */}
        <div>
          <h3 className="text-xl font-bold">ADmyBRAND AI Suite</h3>
          <p className="text-sm mt-2 text-gray-400">
            Empowering marketers with AI to create, manage, and optimize campaigns effortlessly.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/#features">Features</Link></li>
            <li><Link href="/#pricing">Pricing</Link></li>
            <li><Link href="/#testimonials">Testimonials</Link></li>
            <li><Link href="/#faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-3">Connect with us</h4>
          <div className="flex space-x-4 text-lg">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-gray-300 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {currentYear} ADmyBRAND. All rights reserved.
      </div>
    </motion.footer>
  );
}
