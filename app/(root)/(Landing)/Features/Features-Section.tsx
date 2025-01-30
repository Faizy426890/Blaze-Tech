"use client"

import { motion } from "framer-motion"
import { Code2, Cpu, Globe, Smartphone, Cloud, Zap } from "lucide-react"
import { FeatureCard } from "./Features-card"

export function FeaturesSection() {
  const features = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Custom Software Development",
      description: "Tailored solutions built with cutting-edge technologies to meet your specific business needs.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Applications",
      description: "Scalable and responsive web applications that deliver exceptional user experiences.",
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "AI & Machine Learning",
      description: "Intelligent solutions that leverage the power of AI to drive business growth.",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Solutions",
      description: "Secure and scalable cloud infrastructure designed for modern applications.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that provide seamless experiences.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Enhanced speed and efficiency for optimal application performance.",
    },
  ]

  return (
    <section
      className="relative py-24 px-4 overflow-hidden bg-gradient-to-tl from-black/60  to-blue-950/20"
      id="services"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(29,78,216,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(88,28,135,0.15),transparent_50%)]" />

      <div className="relative container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Comprehensive Tech Solutions
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto text-xl leading-relaxed">
            Leverage our expertise across a wide range of technologies and services to transform your business.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

