"use client"

import { motion } from "framer-motion"
import { Navbar } from "../(Landing)/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import { RocketIcon, LightbulbIcon, UsersIcon, GlobeIcon } from "lucide-react"
import { Code2, Globe, Smartphone, Sparkles, Cloud, Apple, Brain } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}


const timelineEvents = [
  {
    year: "2021",
    title: "The Spark",
    description: "Founded with a vision to revolutionize the tech industry.",
    icon: <LightbulbIcon className="w-6 h-6" />,
  },
  {
    year: "2022",
    title: "Taking Off",
    description: "Expanded from a garage startup to our first office space.",
    icon: <RocketIcon className="w-6 h-6" />,
  },
  {
    year: "2023",
    title: "Growing Strong",
    description: "Reached 20 team members and opened our Lahore office.",
    icon: <UsersIcon className="w-6 h-6" />,
  },
  {
    year: "2024",
    title: "Global Presence",
    description: "Expanded to internationally, now serving clients worldwide.",
    icon: <GlobeIcon className="w-6 h-6" />,
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-black">
        <div className="container mx-auto px-4 py-16 sm:py-20">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-blue-400 font-medium mb-4">ABOUT US</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Blaze Tech</h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              Igniting Innovation Through Cutting-Edge Technology
            </p>
          </motion.div>

          {/* Enhanced Company Story Section */}
          <motion.div
            className="mb-20 sm:mb-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 sm:mb-12 text-center">Our Story</h2>
            <div className="relative">
              {/* Vertical line - hidden on mobile, shown on larger screens */}
              <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/30" />

              {/* Mobile timeline line */}
              <div className="sm:hidden absolute left-8 transform -translate-x-1/2 h-full w-1 bg-blue-500/30" />

              {/* Timeline events */}
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col sm:flex-row items-start mb-8 sm:mb-12 ${
                    index % 2 === 1 ? "sm:flex-row-reverse" : ""
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-8 sm:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center z-10"
                    style={{ marginTop: "24px" }}
                  >
                    {event.icon}
                  </div>

                  {/* Content */}
                  <div className="ml-16 sm:ml-0 sm:w-1/2 sm:px-8">
                    <div
                      className={`bg-blue-900/30 p-4 sm:p-6 rounded-lg border border-blue-500/30 shadow-lg ${
                        index % 2 === 0 ? "sm:text-right" : ""
                      }`}
                    >
                      <h3 className="text-xl font-bold text-blue-400 mb-2">{event.year}</h3>
                      <h4 className="text-lg font-semibold text-white mb-2">{event.title}</h4>
                      <p className="text-gray-300 text-sm sm:text-base">{event.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-12 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
                From our humble beginnings to our current global presence, our mission remains unchanged: to empower
                businesses with innovative technology solutions that drive growth, efficiency, and user satisfaction.
                We're not just building software; we're crafting digital experiences that make a difference.
              </p>
            </motion.div>
          </motion.div>

          {/* What We Do Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-12 items-center mb-32"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-white mb-6">What We Do</h2>
              <p className="text-gray-300 mb-6">
                At Blaze Tech, we're not just building software; we're crafting digital experiences that transform
                businesses and delight users. Our team of visionary developers and designers collaborate to create
                innovative solutions that push the boundaries of what's possible in the digital realm.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Globe, text: "Enterprise Web Applications" },
                  { icon: Smartphone, text: "Mobile App Development" },
                  { icon: Code2, text: "Custom Software Solutions" },
                  { icon: Cloud, text: "Cloud Infrastructure & DevOps" },
                  { icon: Apple, text: "iOS App Development" },
                  { icon: Brain, text: "AI & Machine Learning Integration" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 text-gray-300"
                    whileHover={{ x: 10, color: "#60A5FA" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <item.icon className="text-blue-400" />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-blue-500 rounded-lg opacity-20 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                variants={fadeInUp}
                className="relative bg-blue-950/80 p-2 sm:p-8 rounded-lg border border-blue-900/30"
              >
                <h3 className="text-2xl font-bold text-white mb-4 mt-4">Our Tech Arsenal</h3>
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  {[
                    {
                      title: "Web Development",
                      items: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Node.js"],
                    },
                    {
                      title: "Mobile Development",
                      items: ["Swift (iOS)", "Kotlin (Android)", "React Native", "Flutter"],
                    },
                    { title: "Cloud & DevOps", items: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"] },
                    { title: "AI & ML", items: ["TensorFlow", "PyTorch", "OpenAI GPT", "Computer Vision"] },
                  ].map((stack, index) => (
                    <motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-slate-200/10 p-4 rounded-lg">
                      <h4 className="text-blue-400 font-semibold mb-2">{stack.title}</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        {stack.items.map((item, i) => (
                          <motion.li
                            key={i}
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20 sm:mb-32"
          >
            {[
              { number: "50+", label: "Clients Worldwide" },
              { number: "100+", label: "Projects Completed" },
              { number: "5+", label: "Years Experience" },
              { number: "30+", label: "Team Members" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)" }}
                className="text-center p-4 sm:p-6 bg-blue-950/80 rounded-lg border border-blue-900/30 transition-shadow duration-300"
              >
                <motion.div
                  className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm sm:text-base text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center px-4"
          >
            <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Ready to Ignite Your Digital Journey?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              From concept to launch, we're here to transform your boldest ideas into groundbreaking digital realities.
              Let's create something extraordinary together.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <motion.button
                className="bg-blue-500 hover:bg-blue-600 mx-auto text-white px-8 sm:px-12 py-3 flex items-center gap-2 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="mr-2" />
                Ignite Your Project
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}

