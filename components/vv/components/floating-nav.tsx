"use client"

import { useState } from "react"
import { Home, User, FolderOpen, Code, Mail, Menu } from "lucide-react"

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setIsOpen(false)
  }

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "skills", label: "Skills", icon: Code },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  return (
    <div className="md:hidden fixed bottom-6 right-6 z-50">
      {/* Navigation Items */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 flex flex-col-reverse space-y-reverse space-y-3 animate-in slide-in-from-bottom-2 duration-300">
          {navItems.map((item, index) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center justify-center w-12 h-12 bg-accent text-accent-foreground rounded-full shadow-lg hover:scale-110 transition-all duration-300 animate-in slide-in-from-bottom-1"
                style={{ animationDelay: `${index * 50}ms` }}
                aria-label={item.label}
              >
                <Icon className="w-5 h-5" />
              </button>
            )
          })}
        </div>
      )}

      {/* Main FAB Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-14 h-14 bg-accent text-accent-foreground rounded-full shadow-lg hover:scale-110 transition-all duration-300 ${
          isOpen ? "rotate-45" : "rotate-0"
        }`}
        aria-label="Navigation menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10" onClick={() => setIsOpen(false)} />}
    </div>
  )
}
