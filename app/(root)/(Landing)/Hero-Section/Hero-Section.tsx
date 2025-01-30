"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

// Separate client component for animated background
interface Shape {
  id: number;
  width: number;
  height: number;
  left: string;
  top: string;
  duration: number;
}

function AnimatedBackground() {
  const [shapes, setShapes] = useState<Shape[]>([])

  useEffect(() => {
    setShapes(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        width: Math.random() * 300 + 50,
        height: Math.random() * 300 + 50,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: Math.random() * 5 + 5,
      }))
    )
  }, [])

  return (
    <motion.div
      className="absolute inset-0 opacity-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      transition={{ duration: 2 }}
    >
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full bg-blue-800"
          style={{
            width: shape.width,
            height: shape.height,
            left: shape.left,
            top: shape.top,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 1.1, 1],
            opacity: [0, 0.1, 0.05],
          }}
          transition={{
            duration: shape.duration,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}
    </motion.div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex justify-center items-center overflow-hidden bg-black">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-950" />

      {/* Animated background shapes */}
      <AnimatedBackground />

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.h2
            className="text-blue-400 font-semibold mb-2 tracking-wide"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            WELCOME TO THE FUTURE
          </motion.h2>
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Building the Future with{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text">
              Innovative Technology
            </span>
          </motion.h1>
          <motion.p
            className="text-gray-400 text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            We transform your ideas into powerful digital solutions. Experience excellence in software development,
            cloud architecture, and cutting-edge innovation.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white px-10 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Start Project <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-900 hover:text-white px-10 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5, delay: 1 }}
      />
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border-4 border-blue-800 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1, delay: 1.2 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 border-4 border-blue-700 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1, delay: 1.4 }}
      />
    </section>
  )
}
