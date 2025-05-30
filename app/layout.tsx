import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FacebookPixel from "@/components/FacebookPixel"
import GoogleAnalytics from "@/components/GoogleAnalytics"

// Configuración de fuentes
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
})

// Configuración de metadatos para SEO
export const metadata: Metadata = {
  title: "Método Lavayen | Entrenamiento de Élite para Baloncesto",
  description:
    "Conviértete en un entrenador de élite en solo 3 meses con el Método Lavayen. Programa de entrenamiento avanzado para entrenadores de baloncesto.",
  generator: 'v0.dev',
  other: {
    'facebook-domain-verification': 'qe5x7yg5lxj2x9jmf52unqznpoj3zr'
  }
}

// Layout principal con píxeles de tracking integrados para análisis de conversión
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="facebook-domain-verification" content="qe5x7yg5lxj2x9jmf52unqznpoj3zr" />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <FacebookPixel />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
