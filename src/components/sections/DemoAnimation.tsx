"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { Play, Pause, RotateCcw, CheckCircle, ArrowRight, Zap, Users, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/buttonn"
import { Card, CardContent } from "@/components/ui/cardd"
import { Progress } from "@/components/ui/progress"

const features = [
  { icon: Zap, title: "Lightning Fast", description: "Optimized for speed and performance" },
  { icon: Users, title: "Team Collaboration", description: "Work together seamlessly" },
  { icon: TrendingUp, title: "Analytics", description: "Track your progress and growth" },
]

const steps = [
  { title: "Connect Your Data", description: "Import from multiple sources" },
  { title: "Configure Settings", description: "Customize to your needs" },
  { title: "Launch & Monitor", description: "Go live and track results" },
]

export default function Component() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentScene, setCurrentScene] = useState(0)
  const controls = useAnimation()

  const scenes = ["intro", "features", "steps", "dashboard", "conclusion"]

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 1

          // Change scene based on progress
          const sceneIndex = Math.floor((newProgress / 100) * scenes.length)
          setCurrentScene(Math.min(sceneIndex, scenes.length - 1))

          if (newProgress >= 100) {
            setIsPlaying(false)
            return 100
          }
          return newProgress
        })
      }, 100)
    }

    return () => clearInterval(interval)
  }, [isPlaying, scenes.length])

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const handleRestart = () => {
    setProgress(0)
    setCurrentScene(0)
    setIsPlaying(true)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Video Player Controls */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold">Product Demo</h1>
              <div className="flex gap-2">
                <Button onClick={handlePlay} variant="outline" size="sm">
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                <Button onClick={handleRestart} variant="outline" size="sm">
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <Progress value={progress} className="mb-2" />
            <p className="text-sm text-muted-foreground">
              Scene {currentScene + 1} of {scenes.length}: {scenes[currentScene]}
            </p>
          </CardContent>
        </Card>

        {/* Demo Content */}
        <div className="relative min-h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
          <AnimatePresence mode="wait">
            {currentScene === 0 && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white"
              >
                <div className="text-center">
                  <motion.h2
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl font-bold mb-4"
                  >
                    Welcome to the Future
                  </motion.h2>
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl opacity-90"
                  >
                    Discover what makes us different
                  </motion.p>
                </div>
              </motion.div>
            )}

            {currentScene === 1 && (
              <motion.div
                key="features"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20 }}
                className="absolute inset-0 p-12"
              >
                <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12">
                  Powerful Features
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="text-center"
                    >
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {currentScene === 2 && (
              <motion.div
                key="steps"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, x: -100 }}
                className="absolute inset-0 p-12"
              >
                <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12">
                  How It Works
                </motion.h2>
                <div className="space-y-8">
                  {steps.map((step, index) => (
                    <motion.div key={step.title} variants={itemVariants} className="flex items-center gap-6">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {currentScene === 3 && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -90 }}
                className="absolute inset-0 p-12"
              >
                <h2 className="text-3xl font-bold text-center mb-8">Live Dashboard</h2>
                <div className="grid grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">Analytics Overview</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Active Users</span>
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="font-bold text-blue-600"
                          >
                            2,847
                          </motion.span>
                        </div>
                        <div className="flex justify-between">
                          <span>Revenue</span>
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="font-bold text-green-600"
                          >
                            $12,450
                          </motion.span>
                        </div>
                        <div className="flex justify-between">
                          <span>Conversion Rate</span>
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="font-bold text-purple-600"
                          >
                            3.2%
                          </motion.span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">Recent Activity</h3>
                      <div className="space-y-3">
                        {[1, 2, 3].map((item, index) => (
                          <motion.div
                            key={item}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 + index * 0.2 }}
                            className="flex items-center gap-3"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm">New user registered</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            )}

            {currentScene === 4 && (
              <motion.div
                key="conclusion"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-green-600 to-blue-600 text-white"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </motion.div>
                  <motion.h2
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl font-bold mb-4"
                  >
                    Ready to Get Started?
                  </motion.h2>
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Button size="lg" variant="secondary" className="mt-4">
                      Start Your Free Trial
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
