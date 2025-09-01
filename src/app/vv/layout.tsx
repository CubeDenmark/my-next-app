import type React from "react"
import type { Metadata } from "next"
import {
  Source_Sans_3,
  Playfair_Display,
  Geist_Mono,
} from "next/font/google"
import { ThemeProvider } from "@/hooks/use-theme"
import "./globals.css"

// ✅ Google Fonts via next/font
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Denmark S. Cube - Full-Stack Developer",
  description:
    "Portfolio of Denmark S. Cube, an aspiring Full-Stack Web Developer and DevOps Engineer",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sourceSans.variable} ${playfair.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
