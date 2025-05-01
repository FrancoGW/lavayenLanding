"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Brain, ShoppingBasketIcon as Basketball, Flame, BookOpen, Shield } from "lucide-react"
import CtaButton from "./cta-button"

const benefits = [
  {
    icon: <Brain className="h-6 w-6 text-primary" />,
    emoji: "🧠",
    text: "Técnicas de desarrollo físico, técnico y mental aplicadas.",
  },
  {
    icon: <Basketball className="h-6 w-6 text-primary" />,
    emoji: "🏀",
    text: "Planificación clara según la etapa del jugador.",
  },
  {
    icon: <Flame className="h-6 w-6 text-primary" />,
    emoji: "🔥",
    text: "Mejoras medibles en el rendimiento de tus jugadores.",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    emoji: "📚",
    text: "Acceso a contenido descargable y actualizaciones constantes.",
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    emoji: "🛡️",
    text: "Certificación oficial del Método Lavayen.",
  },
]

export default function BeneficiosSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section id="beneficios" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-center mb-16"
          >
            <h2 className="section-title">¿Qué obtienes con el Método Lavayen?</h2>
            <p className="section-subtitle">
              Domina el entrenamiento de alto nivel y conviértete en un entrenador indispensable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
              }}
              className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MdGhstfr-Una8EezAOdQyFfcXHNrXX1KxnIt8Jx.jpeg"
                alt="Entrenamiento de baloncesto estructurado"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
              }}
            >
              <h3 className="text-2xl font-bold mb-6">Beneficios que transformarán tu carrera como entrenador</h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { delay: index * 0.1 },
                      },
                    }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center text-xl">
                      {benefit.emoji}
                    </div>
                    <p className="text-lg">{benefit.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <CtaButton />
        </motion.div>
      </div>
    </section>
  )
}
