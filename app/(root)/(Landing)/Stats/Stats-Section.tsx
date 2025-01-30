"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { CircleDollarSign, FileCode2, Target, Users } from "lucide-react"
import type React from "react"

const projectStats = [
  { name: "Completed", value: 85, color: "bg-blue-500" },
  { name: "In Progress", value: 65, color: "bg-purple-500" },
  { name: "Planning", value: 40, color: "bg-emerald-500" },
]

export function StatsSection() {
  return (
    <section className="py-24 px-4" id="stats">
      <div className="container mx-auto max-w-[1200px]">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Project Status */}
          <Card className="bg-[#0f1729]/90 border-[#1f2b47] p-6">
            <CardHeader className="px-0">
              <CardTitle className="text-xl font-medium text-white">Project Status</CardTitle>
            </CardHeader>
            <CardContent className="px-0 space-y-8">
              {projectStats.map((stat, index) => (
                <ProjectProgress key={index} {...stat} />
              ))}
            </CardContent>
          </Card>

          {/* Project Success Metrics */}
          <Card className="bg-[#0f1729]/80 border-[#1f2b47] p-6">
            <CardHeader className="px-0">
              <CardTitle className="text-xl font-medium text-white">Success Metrics</CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <div className="grid gap-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-400">Project Success Rate</p>
                    <p className="text-2xl font-semibold text-white">94.2%</p>
                  </div>
                  <CircleProgress value={94} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-400">Client Satisfaction</p>
                    <p className="text-2xl font-semibold text-white">98.1%</p>
                  </div>
                  <CircleProgress value={98} color="bg-purple-500" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-400">On-Time Delivery</p>
                    <p className="text-2xl font-semibold text-white">89.5%</p>
                  </div>
                  <CircleProgress value={89} color="bg-emerald-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <Card className="mt-6 bg-[#0f1729]/80 border-[#1f2b47]">
          <CardContent className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
            <QuickStat
              icon={<Target className="h-5 w-5 text-blue-500" />}
              label="Total Projects"
              value="248"
              change="+12.5%"
            />
            <QuickStat
              icon={<FileCode2 className="h-5 w-5 text-purple-500" />}
              label="Lines of Code"
              value="1.2M"
              change="+8.2%"
            />
            <QuickStat
              icon={<Users className="h-5 w-5 text-emerald-500" />}
              label="Team Members"
              value="48"
              change="+4.9%"
            />
            <QuickStat
              icon={<CircleDollarSign className="h-5 w-5 text-amber-500" />}
              label="Avg. Project Value"
              value="$32.5K"
              change="+15.3%"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function ProjectProgress({ name, value, color }: { name: string; value: number; color: string }) {
  return (
    <motion.div
      className="space-y-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm text-white font-medium">{name}</span>
        <span className="text-sm font-semibold text-white">{value}%</span>
      </div>
      <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-gray-800/50">
        <motion.div
          className={`h-full rounded-full ${color}`}
          style={{
            background: `linear-gradient(90deg, ${getGradientColor(color)})`,
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  )
}

function CircleProgress({ value, color = "bg-blue-500" }: { value: number; color?: string }) {
  const circumference = 2 * Math.PI * 24 // r=24 (radius of circle)
  const offset = circumference - (value / 100) * circumference

  return (
    <div className="relative h-16 w-16">
      <svg className="h-full w-full -rotate-90">
        <circle className="stroke-gray-800/50" strokeWidth="4" fill="none" r="24" cx="32" cy="32" />
        <motion.circle
          className={color.replace("bg-", "stroke-")}
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          r="24"
          cx="32"
          cy="32"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ strokeDasharray: circumference }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-semibold text-white">{value}%</span>
      </div>
    </div>
  )
}

function QuickStat({
  icon,
  label,
  value,
  change,
}: {
  icon: React.ReactNode
  label: string
  value: string
  change: string
}) {
  return (
    <div className="flex items-center space-x-4">
      <div className="p-2 rounded-full bg-gray-800/50">{icon}</div>
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <div className="flex items-center gap-2">
          <p className="text-xl font-semibold text-white">{value}</p>
          <span className="text-xs text-emerald-500">{change}</span>
        </div>
      </div>
    </div>
  )
}

function getGradientColor(color: string) {
  const colors = {
    "bg-blue-500": "rgba(59, 130, 246, 1), rgba(59, 130, 246, 0.8)",
    "bg-purple-500": "rgba(168, 85, 247, 1), rgba(168, 85, 247, 0.8)",
    "bg-emerald-500": "rgba(16, 185, 129, 1), rgba(16, 185, 129, 0.8)",
  }
  return colors[color as keyof typeof colors]
}

