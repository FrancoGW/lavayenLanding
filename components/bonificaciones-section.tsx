"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Trophy, Dumbbell, RefreshCw, Download, FileText } from "lucide-react"
import CtaButton from "./cta-button"

const bonuses = [
  {
    icon: <Trophy className="h-10 w-10 text-accent" />,
    title: "Entrada en calor para prácticas y juegos",
    description: "Rutinas optimizadas para preparar a tus jugadores física y mentalmente.",
  },
  {
    icon: <Dumbbell className="h-10 w-10 text-accent" />,
    title: "Acondicionamiento Físico en Cancha",
    description: "Ejercicios específicos para mejorar el rendimiento físico durante el juego.",
  },
  {
    icon: <Dumbbell className="h-10 w-10 text-accent" />,
    title: "Entrenamientos de fuerza en el Gimnasio",
    description: "Programas de fuerza adaptados para jugadores de baloncesto.",
  },
  {
    icon: <RefreshCw className="h-10 w-10 text-accent" />,
    title: "Actualizaciones constantes",
    description: "Contenido actualizado regularmente con las últimas tendencias y técnicas.",
  },
  {
    icon: <Download className="h-10 w-10 text-accent" />,
    title: "Descargables",
    description: "Materiales y recursos descargables para implementar en tus entrenamientos.",
  },
  {
    icon: <FileText className="h-10 w-10 text-accent" />,
    title: "Vitaminas - Físico Técnico",
    description: "Complementos para integrar el trabajo físico y técnico en tus sesiones.",
  },
]

export default function BonificacionesSection() {
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
    <section id="bonificaciones" className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
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
            <h2 className="section-title">
              Inscríbete hoy y accede a estas herramientas extra sin costo adicional y con acceso vitalicio:
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bonuses.map((bonus, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 },
                  },
                }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-t-2 border-t-accent">
                  <CardContent className="p-6">
                    <div className="mb-4">{bonus.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{bonus.title}</h3>
                    <p className="text-muted-foreground">{bonus.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <CtaButton />
        </motion.div>
      </div>
    </section>
  )
}
