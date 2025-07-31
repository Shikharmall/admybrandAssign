"use client"

import { motion, useInView } from "framer-motion"
import {
  BookOpen,
  Clock,
  ArrowRight,
  Search,
  Download,
  Play,
  FileText,
  Video,
  Headphones,
  Sparkles,
  TrendingUp,
  Code,
  Lightbulb,
  Users,
} from "lucide-react"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/buttonn"
import Image from "next/image"

const categories = [
  { name: "All", icon: BookOpen, count: 24 },
  { name: "Tutorials", icon: Code, count: 8 },
  { name: "Best Practices", icon: Lightbulb, count: 6 },
  { name: "Case Studies", icon: TrendingUp, count: 4 },
  { name: "Team Management", icon: Users, count: 6 },
]

const resourceTypes = [
  { name: "Articles", icon: FileText, color: "from-blue-500 to-cyan-500" },
  { name: "Videos", icon: Video, color: "from-purple-500 to-pink-500" },
  { name: "Podcasts", icon: Headphones, color: "from-emerald-500 to-teal-500" },
  { name: "Downloads", icon: Download, color: "from-orange-500 to-red-500" },
]

const featuredArticles = [
  {
    id: 1,
    title: "Building Scalable Applications with Modern Architecture",
    excerpt:
      "Learn how to design and implement scalable applications that can handle millions of users while maintaining performance and reliability.",
    author: "Sarah Chen",
    authorAvatar: "/placeholder.svg?height=40&width=40&text=SC",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Best Practices",
    image: "/placeholder.svg?height=300&width=500&text=Scalable+Architecture",
    type: "article",
    featured: true,
    tags: ["Architecture", "Scalability", "Performance"],
  },
  {
    id: 2,
    title: "Complete Guide to API Integration",
    excerpt:
      "Master the art of API integration with this comprehensive guide covering authentication, error handling, and best practices.",
    author: "Marcus Rodriguez",
    authorAvatar: "/placeholder.svg?height=40&width=40&text=MR",
    date: "2024-01-12",
    readTime: "12 min read",
    category: "Tutorials",
    image: "/placeholder.svg?height=300&width=500&text=API+Integration",
    type: "article",
    featured: true,
    tags: ["API", "Integration", "Development"],
  },
  {
    id: 3,
    title: "Team Productivity Masterclass",
    excerpt:
      "Discover proven strategies to boost your team's productivity and collaboration in remote and hybrid work environments.",
    author: "Emily Watson",
    authorAvatar: "/placeholder.svg?height=40&width=40&text=EW",
    date: "2024-01-10",
    readTime: "45 min",
    category: "Team Management",
    image: "/placeholder.svg?height=300&width=500&text=Team+Productivity",
    type: "video",
    featured: true,
    tags: ["Productivity", "Team", "Management"],
  },
]

const recentArticles = [
  {
    id: 4,
    title: "Security Best Practices for Modern Applications",
    excerpt:
      "Essential security measures every developer should implement to protect their applications and user data.",
    author: "David Kim",
    authorAvatar: "/placeholder.svg?height=40&width=40&text=DK",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "Best Practices",
    image: "/placeholder.svg?height=200&width=300&text=Security",
    type: "article",
    featured: false,
    tags: ["Security", "Development"],
  },
  {
    id: 5,
    title: "Optimizing Database Performance",
    excerpt: "Learn advanced techniques to optimize your database queries and improve application performance.",
    author: "Lisa Thompson",
    authorAvatar: "/placeholder.svg?height=40&width=40&text=LT",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Tutorials",
    image: "/placeholder.svg?height=200&width=300&text=Database",
    type: "article",
    featured: false,
    tags: ["Database", "Performance"],
  },
  {
    id: 6,
    title: "The Future of Web Development",
    excerpt: "Explore emerging trends and technologies that will shape the future of web development.",
    author: "Alex Johnson",
    authorAvatar: "/placeholder.svg?height=40&width=40&text=AJ",
    date: "2024-01-03",
    readTime: "30 min",
    category: "Case Studies",
    image: "/placeholder.svg?height=200&width=300&text=Future+Web",
    type: "podcast",
    featured: false,
    tags: ["Trends", "Future", "Web Development"],
  },
  {
    id: 7,
    title: "Microservices Architecture Guide",
    excerpt: "A comprehensive guide to implementing microservices architecture in your applications.",
    author: "Sarah Chen",
    authorAvatar: "/placeholder.svg?height=40&width=40&text=SC",
    date: "2024-01-01",
    readTime: "15 min read",
    category: "Tutorials",
    image: "/placeholder.svg?height=200&width=300&text=Microservices",
    type: "article",
    featured: false,
    tags: ["Microservices", "Architecture"],
  },
  {
    id: 8,
    title: "DevOps Automation Strategies",
    excerpt: "Streamline your development workflow with these proven DevOps automation strategies.",
    author: "Marcus Rodriguez",
    authorAvatar: "/placeholder.svg?height=40&width=40&text=MR",
    date: "2023-12-28",
    readTime: "25 min",
    category: "Best Practices",
    image: "/placeholder.svg?height=200&width=300&text=DevOps",
    type: "video",
    featured: false,
    tags: ["DevOps", "Automation"],
  },
  {
    id: 9,
    title: "Building High-Performance Teams",
    excerpt: "Learn how to build and manage high-performance development teams that deliver exceptional results.",
    author: "Emily Watson",
    authorAvatar: "/placeholder.svg?height=40&width=40&text=EW",
    date: "2023-12-25",
    readTime: "8 min read",
    category: "Team Management",
    image: "/placeholder.svg?height=200&width=300&text=High+Performance",
    type: "article",
    featured: false,
    tags: ["Team", "Performance", "Management"],
  },
]

export default function BlogResourcesSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredArticles = [...featuredArticles, ...recentArticles].filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesType = selectedType === "All" || article.type === selectedType.toLowerCase()

    return matchesCategory && matchesSearch && matchesType
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return Video
      case "podcast":
        return Headphones
      case "download":
        return Download
      default:
        return FileText
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "video":
        return "from-purple-500 to-pink-500"
      case "podcast":
        return "from-emerald-500 to-teal-500"
      case "download":
        return "from-orange-500 to-red-500"
      default:
        return "from-blue-500 to-cyan-500"
    }
  }

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 70, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
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
            x: [0, -60, 0],
            y: [0, 40, 0],
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
              Blog & Resources
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Learn and
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              grow with us
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover insights, tutorials, and best practices from our team and the developer community.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl p-8">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search articles, tutorials, and resources..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-slate-900 placeholder-slate-500"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <motion.button
                    key={category.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                      selectedCategory === category.name
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                        : "bg-white/80 text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 shadow-md hover:shadow-lg"
                    }`}
                  >
                    <category.icon className="h-4 w-4" />
                    {category.name}
                    <span className="text-xs opacity-75">({category.count})</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Resource Types */}
            <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-slate-200/50">
              <button
                onClick={() => setSelectedType("All")}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedType === "All"
                    ? "bg-gradient-to-r from-slate-600 to-slate-700 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                All Types
              </button>
              {resourceTypes.map((type) => (
                <motion.button
                  key={type.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedType(type.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    selectedType === type.name
                      ? `bg-gradient-to-r ${type.color} text-white shadow-lg`
                      : "bg-white/80 text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <type.icon className="h-4 w-4" />
                  {type.name}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Articles */}
        {selectedCategory === "All" && searchQuery === "" && selectedType === "All" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-8">Featured Content</h3>
            <div className="grid gap-8 lg:grid-cols-3">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className="relative">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div
                        className={`flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${getTypeColor(
                          article.type,
                        )} text-white text-sm font-semibold shadow-lg`}
                      >
                        {(() => {
                          const Icon = getTypeIcon(article.type)
                          return <Icon className="h-3 w-3" />
                        })()}
                        {article.type === "video" ? "Video" : article.type === "podcast" ? "Podcast" : "Article"}
                      </div>
                    </div>
                    {article.type === "video" && (
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                          <Play className="h-6 w-6 text-purple-600 ml-1" />
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1 text-slate-500 text-sm">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-slate-600 mb-4 line-clamp-3">{article.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Image
                          src={article.authorAvatar || "/placeholder.svg"}
                          alt={article.author}
                          width={32}
                          height={32}
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <div className="text-sm font-semibold text-slate-900">{article.author}</div>
                          <div className="text-xs text-slate-500">{new Date(article.date).toLocaleDateString()}</div>
                        </div>
                      </div>

                      <motion.div whileHover={{ x: 5 }}>
                        <ArrowRight className="h-5 w-5 text-purple-600 group-hover:text-purple-700" />
                      </motion.div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Articles Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-slate-900">
              {selectedCategory === "All" ? "Latest Articles" : selectedCategory}
            </h3>
            <div className="text-slate-600">
              {filteredArticles.length} {filteredArticles.length === 1 ? "result" : "results"}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.slice(0, 9).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-white/80 backdrop-blur-xl rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="relative">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <div
                      className={`flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r ${getTypeColor(
                        article.type,
                      )} text-white text-xs font-semibold shadow-lg`}
                    >
                      {(() => {
                        const Icon = getTypeIcon(article.type)
                        return <Icon className="h-3 w-3" />
                      })()}
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1 text-slate-500 text-xs">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image
                        src={article.authorAvatar || "/placeholder.svg"}
                        alt={article.author}
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full"
                      />
                      <div className="text-xs text-slate-600">{article.author}</div>
                    </div>

                    <div className="text-xs text-slate-500">{new Date(article.date).toLocaleDateString()}</div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          {filteredArticles.length > 9 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-center mt-12"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg border-0">
                  Load More Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 backdrop-blur-xl rounded-3xl border border-white/50 p-12 shadow-2xl text-center">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mb-6 shadow-lg"
            >
              <BookOpen className="h-8 w-8 text-white" />
            </motion.div>

            <h3 className="text-3xl font-bold text-slate-900 mb-4">Stay Updated</h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Get the latest articles, tutorials, and resources delivered to your inbox every week.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg border-0 whitespace-nowrap">
                  Subscribe
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
