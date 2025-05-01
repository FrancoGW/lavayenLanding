"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"

export default function CtaSection() {
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
    <section className="py-20 bg-primary text-white">
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
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            ¿Listo para convertirte en un entrenador de élite?
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-xl mb-8"
          >
            Únete al Método Lavayen y transforma tu carrera como entrenador en solo 3 meses.
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="w-full px-4"
          >
            <Button asChild size="lg" className="text-lg py-6 bg-white text-primary hover:bg-white/90 w-full">
            <Link href="#contacto" className="flex items-center justify-center">
                <span className="text-center text-xs  md:text-2xl">👉 ¡Quiero Convertirme en un Entrenador de Élite!</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
