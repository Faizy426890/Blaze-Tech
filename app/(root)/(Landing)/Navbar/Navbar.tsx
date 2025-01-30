"use client"

import { motion, useScroll } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import type React from "react" // Added import for React

export function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50)
    })
  }, [scrollY])

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-colors duration-200 ${
        isScrolled ? "bg-gray-950/80 backdrop-blur-md border-b border-blue-900/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Rocket className="h-6 w-6 text-blue-400" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text">
            BlazeTech
          </span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <Button variant="outline" className="border-blue-500 text-blue-400 bg-transparent hover:bg-blue-500 hover:text-white">
            Get Started
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-300 hover:text-blue-400 transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full" />
    </Link>
  )
}

