"use client"

import { useEffect } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BookOpen, Users, Trophy } from "lucide-react"
import CtaButton from "./cta-button"

const modules = [
  {
    icon: <BookOpen className="h-12 w-12 text-primary" />,
    number: "1",
    title: "Acondicionamiento en Mini Básquetbol",
    description: "Domina las técnicas fundamentales del mini básquet.",
    items: [
      "Fundamentos técnicos adaptados",
      "Ejercicios progresivos",
      "Planificación por edades",
      "Evaluación de progreso",
    ],
  },
  {
    icon: <Users className="h-12 w-12 text-primary" />,
    number: "2",
    title: "Jóvenes: Planificación y Desarrollo",
    description: "Aprende a estructurar entrenamientos efectivos.",
    items: ["Desarrollo físico y mental", "Técnicas avanzadas", "Estrategias de juego", "Liderazgo en cancha"],
  },
  {
    icon: <Trophy className="h-12 w-12 text-primary" />,
    number: "3",
    title: "Entrenamiento con Profesionales",
    description: "Lleva tu entrenamiento al siguiente nivel.",
    items: [
      "Metodologías de élite",
      "Análisis de rendimiento",
      "Preparación física avanzada",
      "Estrategias competitivas",
    ],
  },
]

export default function ModulosSection() {
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
    <section id="modulos" className="py-20 bg-gray-50 dark:bg-gray-900">
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
          className="text-center mb-16"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="section-title"
          >
            Módulos del Programa
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="section-subtitle"
          >
            Un programa completo diseñado para transformarte en un entrenador de élite en solo 3 meses.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.2 },
                },
              }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-t-primary">
                <CardHeader className="pb-0 pt-6 text-center relative">
                  <div className="mx-auto mb-4">{module.icon}</div>
                  <div className="absolute top-2 right-2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {module.number}
                  </div>
                  <h3 className="text-xl font-bold">{module.title}</h3>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground mb-4 text-center">{module.description}</p>
                  <ul className="space-y-2">
                    {module.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <CtaButton />
      </div>
    </section>
  )
}
