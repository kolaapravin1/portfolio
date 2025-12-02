"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import PageLoader from "@/components/page-loader"
import Navbar from "@/components/navbar"
import ScrollProgress from "@/components/scroll-progress"
import Hero from "@/components/sections/hero"
import Skills from "@/components/sections/skills"
import Certifications from "@/components/sections/certifications"
import Publications from "@/components/sections/publications"
import Projects from "@/components/sections/projects"
import Experience from "@/components/sections/experience"
import Education from "@/components/sections/education"
import Contact from "@/components/sections/contact"
import GetInTouch from "@/components/sections/get-in-touch"
import SocialLinks from "@/components/social-links"
import Footer from "@/components/footer"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) return <PageLoader />

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/5 via-slate-950 to-violet-900/5" />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-0 -left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [20, 0, 20],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, delay: 5 }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"
        />
      </div>

      <ScrollProgress />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Skills />
        <Certifications />
        <Publications />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <GetInTouch />
        <SocialLinks />
      </main>

      <Footer />
    </div>
  )
}
