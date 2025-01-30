'use client'
import { Navbar } from "./Navbar/Navbar"
import { HeroSection } from "./Hero-Section/Hero-Section"
import { FeaturesSection } from "./Features/Features-Section"
import { StatsSection } from "./Stats/Stats-Section"
import { CTASection } from "./CTA/CTA-Section"
import Footer from "../components/Footer/Footer"
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-blue-950 to-gray-950">
      <Navbar />
      <HeroSection /> 
      <FeaturesSection/> 
      <StatsSection/> 
      <CTASection/>
      <Footer/>
    </div>
  )
}

