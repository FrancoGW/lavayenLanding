"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Para quién es este programa?",
    answer:
      "Para entrenadores, profes de educación física y preparadores que buscan dominar técnicas de élite y profesionalizar su forma de trabajar.",
  },
  {
    question: "¿Cuánto tiempo tardaré en ver resultados?",
    answer:
      "Aplicando el Método Lavayen, desde las primeras semanas empezarás a ver mejoras en el rendimiento de tus jugadores y en tu estructura de entrenamiento.",
  },
  {
    question: "¿Necesito experiencia previa?",
    answer:
      "Sí, está dirigido a entrenadores con conocimientos básicos o experiencia que quieran evolucionar a un nivel de élite.",
  },
  {
    question: "¿Cómo es la modalidad de aprendizaje?",
    answer:
      "Curso online grabado + grupo privado de soporte + llamadas grupales semanales durante los primeros 2 meses + recursos descargables.",
  },
  {
    question: "¿Debo estar disponible en horarios específicos?",
    answer:
      "No. El contenido grabado es a tu ritmo. Las llamadas grupales son semanales, pero si no podés asistir quedan grabadas.",
  },
  {
    question: "¿Hay garantía?",
    answer: "Sí. Tenés 7 días de garantía para probar el programa sin riesgo.",
  },
]

export default function FaqSection() {
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
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            <h2 className="section-title">Preguntas Frecuentes</h2>
            <p className="section-subtitle">Resolvemos tus dudas sobre el Método Lavayen</p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
