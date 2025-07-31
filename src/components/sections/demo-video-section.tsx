"use client"

import type React from "react"

import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  RotateCcw,
  FastForward,
  Rewind,
  Settings,
  Download,
  Share2,
  Sparkles,
  Monitor,
  Smartphone,
  Tablet,
  Code,
  Zap,
  Shield,
  BarChart3,
  Users,
  Globe,
  CheckCircle,
} from "lucide-react"
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/Button"
import Image from "next/image"

const demoFeatures = [
  {
    id: 1,
    title: "Lightning Fast Setup",
    description: "Get started in under 60 seconds",
    icon: Zap,
    timestamp: 15,
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 2,
    title: "Drag & Drop Builder",
    description: "Build without coding",
    icon: Code,
    timestamp: 45,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Real-time Collaboration",
    description: "Work together seamlessly",
    icon: Users,
    timestamp: 75,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "Advanced Analytics",
    description: "Track performance metrics",
    icon: BarChart3,
    timestamp: 105,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 5,
    title: "Enterprise Security",
    description: "Bank-level protection",
    icon: Shield,
    timestamp: 135,
    color: "from-red-500 to-pink-500",
  },
  {
    id: 6,
    title: "Global Deployment",
    description: "Deploy worldwide instantly",
    icon: Globe,
    timestamp: 165,
    color: "from-indigo-500 to-purple-500",
  },
]

const devicePresets = [
  { name: "Desktop", icon: Monitor, width: "100%", height: "auto" },
  { name: "Tablet", icon: Tablet, width: "768px", height: "1024px" },
  { name: "Mobile", icon: Smartphone, width: "375px", height: "667px" },
]

const videoQualities = ["1080p", "720p", "480p", "360p"]
const playbackSpeeds = [0.5, 0.75, 1, 1.25, 1.5, 2]

export default function DemoVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(180) // 3 minutes demo
  const [selectedDevice, setSelectedDevice] = useState(0)
  const [showControls, setShowControls] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [quality, setQuality] = useState("1080p")
  const [playbackSpeed, setPlaybackSpeed] = useState(1)
  const [activeFeature, setActiveFeature] = useState<number | null>(null)

  const ref = useRef(null)
  const videoRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Simulate video progress
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          const newTime = prev + playbackSpeed
          if (newTime >= duration) {
            setIsPlaying(false)
            return duration
          }
          return newTime
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, duration, playbackSpeed])

  // Update active feature based on current time
  useEffect(() => {
    const currentFeature = demoFeatures.find(
      (feature, index) =>
        currentTime >= feature.timestamp &&
        (index === demoFeatures.length - 1 || currentTime < demoFeatures[index + 1].timestamp),
    )
    setActiveFeature(currentFeature?.id || null)
  }, [currentTime])

  const togglePlay = () => setIsPlaying(!isPlaying)
  const toggleMute = () => setIsMuted(!isMuted)
  const toggleFullscreen = () => setIsFullscreen(!isFullscreen)

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const newTime = (clickX / rect.width) * duration
    setCurrentTime(newTime)
  }

  const jumpToFeature = (timestamp: number) => {
    setCurrentTime(timestamp)
    if (!isPlaying) setIsPlaying(true)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const progress = (currentTime / duration) * 100

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
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
            x: [0, 70, 0],
            y: [0, -40, 0],
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
              Interactive Demo
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            See it in
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              action
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Watch how our platform transforms your workflow in this interactive 3-minute demo.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-[1fr_350px]">
            {/* Video Player */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Device Frame */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl p-6">
                {/* Device Selector */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    {devicePresets.map((device, index) => (
                      <motion.button
                        key={device.name}
                        onClick={() => setSelectedDevice(index)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ${
                          selectedDevice === index
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        <device.icon className="h-4 w-4" />
                        {device.name}
                      </motion.button>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setShowSettings(!showSettings)}
                      className="p-2 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                    >
                      <Settings className="h-4 w-4 text-slate-600" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                    >
                      <Download className="h-4 w-4 text-slate-600" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                    >
                      <Share2 className="h-4 w-4 text-slate-600" />
                    </motion.button>
                  </div>
                </div>

                {/* Video Container */}
                <motion.div
                  ref={videoRef}
                  animate={{
                    width: devicePresets[selectedDevice].width,
                    height: devicePresets[selectedDevice].height,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative bg-slate-900 rounded-2xl overflow-hidden mx-auto"
                  style={{ maxWidth: "100%", aspectRatio: selectedDevice === 0 ? "16/9" : "9/16" }}
                  onMouseEnter={() => setShowControls(true)}
                  onMouseLeave={() => setShowControls(true)} // Keep controls visible for demo
                >
                  {/* Video Content */}
                  <div className="relative w-full h-full bg-gradient-to-br from-slate-800 to-slate-900">
                    <Image
                      src="/img3.jpg"
                      alt="Demo Video"
                      fill
                      className="object-cover"
                    />

                    {/* Play Button Overlay */}
                    {!isPlaying && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <motion.button
                          onClick={togglePlay}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl"
                        >
                          <Play className="h-8 w-8 text-purple-600 ml-1" />
                        </motion.button>
                      </motion.div>
                    )}

                    {/* Feature Highlights */}
                    <AnimatePresence>
                      {isPlaying && activeFeature && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="absolute top-4 left-4 right-4"
                        >
                          {(() => {
                            const feature = demoFeatures.find((f) => f.id === activeFeature)
                            if (!feature) return null
                            return (
                              <div
                                className={`flex items-center gap-3 px-4 py-3 bg-gradient-to-r ${feature.color} text-white rounded-2xl shadow-lg backdrop-blur-sm`}
                              >
                                <feature.icon className="h-5 w-5" />
                                <div>
                                  <div className="font-semibold text-sm">{feature.title}</div>
                                  <div className="text-xs opacity-90">{feature.description}</div>
                                </div>
                              </div>
                            )
                          })()}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Video Controls */}
                    <AnimatePresence>
                      {showControls && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4"
                        >
                          {/* Progress Bar */}
                          <div className="mb-4">
                            <div className="w-full h-2 bg-white/20 rounded-full cursor-pointer" onClick={handleSeek}>
                              <motion.div
                                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative"
                                style={{ width: `${progress}%` }}
                                layout
                              >
                                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg" />
                              </motion.div>
                            </div>
                          </div>

                          {/* Control Buttons */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <motion.button
                                onClick={() => setCurrentTime(Math.max(0, currentTime - 10))}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 text-white hover:text-purple-300 transition-colors"
                              >
                                <Rewind className="h-5 w-5" />
                              </motion.button>

                              <motion.button
                                onClick={togglePlay}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                              >
                                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
                              </motion.button>

                              <motion.button
                                onClick={() => setCurrentTime(Math.min(duration, currentTime + 10))}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 text-white hover:text-purple-300 transition-colors"
                              >
                                <FastForward className="h-5 w-5" />
                              </motion.button>

                              <motion.button
                                onClick={toggleMute}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 text-white hover:text-purple-300 transition-colors"
                              >
                                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                              </motion.button>

                              <div className="text-white text-sm">
                                {formatTime(currentTime)} / {formatTime(duration)}
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <motion.button
                                onClick={() => setCurrentTime(0)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 text-white hover:text-purple-300 transition-colors"
                              >
                                <RotateCcw className="h-5 w-5" />
                              </motion.button>

                              <motion.button
                                onClick={toggleFullscreen}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 text-white hover:text-purple-300 transition-colors"
                              >
                                <Maximize className="h-5 w-5" />
                              </motion.button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Settings Panel */}
                <AnimatePresence>
                  {showSettings && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="absolute top-20 right-6 bg-white/95 backdrop-blur-xl rounded-2xl border border-white/50 shadow-2xl p-6 w-64 z-10"
                    >
                      <h4 className="font-semibold text-slate-900 mb-4">Video Settings</h4>

                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-slate-700 mb-2 block">Quality</label>
                          <select
                            value={quality}
                            onChange={(e) => setQuality(e.target.value)}
                            className="w-full px-3 py-2 bg-slate-100 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                          >
                            {videoQualities.map((q) => (
                              <option key={q} value={q}>
                                {q}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="text-sm font-medium text-slate-700 mb-2 block">Playback Speed</label>
                          <select
                            value={playbackSpeed}
                            onChange={(e) => setPlaybackSpeed(Number(e.target.value))}
                            className="w-full px-3 py-2 bg-slate-100 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                          >
                            {playbackSpeeds.map((speed) => (
                              <option key={speed} value={speed}>
                                {speed}x
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Feature Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Demo Timeline</h3>

                <div className="space-y-4">
                  {demoFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      onClick={() => jumpToFeature(feature.timestamp)}
                      className={`group relative p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                        activeFeature === feature.id
                          ? `border-purple-300 bg-gradient-to-r ${feature.color} bg-opacity-10`
                          : "border-slate-200 bg-white/50 hover:border-slate-300 hover:bg-white/80"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg`}
                        >
                          <feature.icon className="h-6 w-6 text-white" />
                        </motion.div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-slate-900 group-hover:text-purple-600 transition-colors">
                              {feature.title}
                            </h4>
                            <div className="text-sm text-slate-500">{formatTime(feature.timestamp)}</div>
                          </div>
                          <p className="text-slate-600 text-sm">{feature.description}</p>
                        </div>

                        {activeFeature === feature.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                          >
                            <CheckCircle className="h-4 w-4 text-white" />
                          </motion.div>
                        )}
                      </div>

                      {/* Progress indicator */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200 rounded-b-2xl overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${feature.color}`}
                          style={{
                            width:
                              currentTime >= feature.timestamp
                                ? currentTime >= (demoFeatures[index + 1]?.timestamp || duration)
                                  ? "100%"
                                  : `${
                                      ((currentTime - feature.timestamp) /
                                        ((demoFeatures[index + 1]?.timestamp || duration) - feature.timestamp)) *
                                      100
                                    }%`
                                : "0%",
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-slate-200/50">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-full font-semibold shadow-lg border-0">
                      Try It Yourself
                      <Play className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                  <p className="text-center text-sm text-slate-500 mt-3">
                    Start your free trial • No credit card required
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Additional Demo Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 backdrop-blur-xl rounded-3xl border border-white/50 p-12 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Want a Personalized Demo?</h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Schedule a live demo with our team to see how our platform can be customized for your specific needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg border-0">
                  Schedule Live Demo
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-2 border-slate-300 hover:border-purple-300 hover:bg-purple-50 px-8 py-3 rounded-full font-semibold bg-white/80 backdrop-blur-sm"
                >
                  Download Resources
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
