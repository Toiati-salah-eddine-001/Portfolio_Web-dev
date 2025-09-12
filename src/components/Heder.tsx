"use client"
import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"



export default function PortfolioHeader() {
  const [isDark, setIsDark] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  
  // Register GSAP plugins
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const handleNavClick = (section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsExpanded(true)
      } else {
        setIsExpanded(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Initialize theme based on system preference
  useEffect(() => {
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(isSystemDark)
    if (isSystemDark) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  useGSAP(() => {
    gsap.to(".sectionHeder", {
      width: isExpanded ? "896px" : "100%",
      duration: 1,
      ease: "sine.inOut"
    })
  }, [isExpanded])

  return (
    <header className="sectionHeder fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-4">
      <div className="bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl shadow-primary/5">
        <div className="flex items-center justify-between px-8 py-4">
          <nav className="flex items-center space-x-8">
            {["hero", "about", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className="relative text-sm font-medium transition-all duration-300 ease-out hover:text-primary hover:scale-105 text-muted-foreground hover:text-foreground"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary/30 rounded-full transition-all duration-300 hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-foreground font-bold text-xl tracking-tight">Portfolio</h1>
          </div>

          <button
            onClick={toggleTheme}
            className="relative w-11 h-11 rounded-xl bg-muted/50 hover:bg-accent/20 border border-border/50 hover:border-accent/30 flex items-center justify-center transition-all duration-300 group hover:shadow-lg hover:shadow-accent/20 active:scale-95"
            aria-label="Toggle theme"
          >
            <div className="relative w-5 h-5">
              <Sun
                className={`absolute inset-0 w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-500 ${
                  isDark ? "opacity-0 rotate-180 scale-75" : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <Moon
                className={`absolute inset-0 w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-500 ${
                  isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-75"
                }`}
              />
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}
