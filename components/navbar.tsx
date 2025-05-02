"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Programa", href: "#programa" },
  { name: "Beneficios", href: "#beneficios" },
  { name: "Módulos", href: "#modulos" },
  { name: "Bonificaciones", href: "#bonificaciones" },
  { name: "Sobre Mí", href: "#sobre-mi" },
  { name: "FAQ", href: "#faq" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className={`font-montserrat font-bold text-xl ${scrolled ? "text-foreground" : "text-white"}`}>
            Ezequiel Lavayen
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${scrolled ? "text-foreground/80" : "text-white"} hover:text-primary transition-colors font-medium`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="lg" className="font-medium">
            <Link href="https://pay.hotmart.com/K98327460Y" className="flex items-center justify-center">
              <span>👉 ¡Inscríbete Ahora!</span>
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className={`md:hidden ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md py-4">
          <nav className="flex flex-col gap-4 container">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild size="lg" className="font-medium mt-2 w-full">
              <Link href="https://pay.hotmart.com/K98327460Y" className="flex items-center justify-center">
                <span>👉 ¡Inscríbete Ahora!</span>
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
