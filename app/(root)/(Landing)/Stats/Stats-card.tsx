"use client"

import { motion } from "framer-motion"

interface StatCardProps {
  number: string
  label: string
  hoveredValue: number | null
}

export function StatCard({ number, label, hoveredValue }: StatCardProps) {
  return (
    <motion.div
      className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-lg border border-blue-500/20 shadow-lg overflow-hidden relative group"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        initial={false}
        animate={hoveredValue !== null ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="text-4xl font-bold text-white mb-2"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {number}
      </motion.div>
      <motion.div
        className="text-blue-300"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {label}
      </motion.div>
    </motion.div>
  )
}

