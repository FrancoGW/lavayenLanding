"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, Target, Users, Award } from "lucide-react"
import CtaButton from "./cta-button"

const features = [
  {
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    title: "Técnicas avanzadas",
    description: "que elevan el nivel de tus entrenamientos.",
  },
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: "Planificación estructurada",
    description: "dejando atrás la improvisación.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Acompañamiento personalizado",
    description: "para implementar el método paso a paso.",
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Comunidad exclusiva",
    description: "donde entrenadores comparten aprendizajes y desafíos.",
  },
]

export default function ProgramaSection() {
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
    <section
      id="programa"
      className="py-20 bg-gradient-to-b from-background to-gray-50 dark:from-background dark:to-gray-900"
    >
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
            El programa que transforma entrenadores en verdaderos referentes de alto rendimiento
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                <CardContent className="p-6 flex gap-4">
                  <div className="mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
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
