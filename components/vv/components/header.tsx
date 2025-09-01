"use client"
import { ThemeToggle } from "./theme-toggle"

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-accent">D. Cube</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-accent transition-all duration-300 font-medium hover:scale-105"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-accent transition-all duration-300 font-medium hover:scale-105"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-accent transition-all duration-300 font-medium hover:scale-105"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-foreground hover:text-accent transition-all duration-300 font-medium hover:scale-105"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-accent transition-all duration-300 font-medium hover:scale-105"
            >
              Contact
            </button>
            <ThemeToggle />
          </nav>

          <div className="md:hidden flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
