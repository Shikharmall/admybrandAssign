"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    title: "5 Ways AI is Transforming Marketing",
    description: "Discover how AI tools like ADmyBRAND are reshaping campaigns, targeting, and engagement.",
    date: "July 15, 2025",
    link: "/blog/ai-marketing-transformation",
  },
  {
    title: "Optimizing Your Ad Spend with Predictive Analytics",
    description: "Learn how to use predictive data to maximize ROI from every campaign dollar.",
    date: "June 30, 2025",
    link: "/blog/ai-ad-spend-optimization",
  },
  {
    title: "Launching Campaigns Faster with AI Workflow Automation",
    description: "Speed up your creative-to-live process using AI-powered templates and automation.",
    date: "June 10, 2025",
    link: "/blog/campaign-automation",
  },
];

export default function BlogResourcesSection() {
  return (
    <motion.section
      id="blog"
      className="py-16 px-4 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-center">Latest Resources & Insights</h2>
      <p className="text-center mb-12 text-gray-300 max-w-2xl mx-auto">
        Stay up to date with AI trends, marketing strategies, and feature releases.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {posts.map((post, i) => (
          <motion.div
            key={i}
            className="bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-sm text-gray-400">{post.date}</p>
            <h3 className="text-xl font-semibold text-white mt-2">{post.title}</h3>
            <p className="text-gray-300 mt-2 text-sm">{post.description}</p>
            <Link href={post.link}>
              <span className="text-indigo-400 mt-4 inline-block hover:underline">Read more →</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
