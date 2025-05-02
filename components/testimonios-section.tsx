"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TestimoniosSection() {
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
    <section id="testimonios" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            <h2 className="section-title">🔥 ¿Querés saber si el Método Lavayen realmente transforma jugadores?</h2>
            <p className="section-subtitle">Escucha lo que dicen los chicos después de entrenar con esta metodología</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Primer video */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800"
            >
              <div className="aspect-[9/16] max-w-[350px] mx-auto">
                <video controls className="w-full h-full object-contain" preload="metadata">
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-04-24%20at%205.01.03%20PM%20%281%29-TuwTuLajyrZ8sQbtrI64BU5awTqlBx.mp4"
                    type="video/mp4"
                  />
                  Tu navegador no soporta videos HTML5.
                </video>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">🏀 Joaquin Rodriguez</h3>
              </div>
            </motion.div>

            {/* Segundo video */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
              }}
              className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800"
            >
              <div className="aspect-[9/16] max-w-[350px] mx-auto">
                <video controls className="w-full h-full object-contain" preload="metadata">
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-04-24%20at%205.01.03%20PM-pO6l5x1xS3d6gNyuDu79qtLzUJb6VY.mp4"
                    type="video/mp4"
                  />
                  Tu navegador no soporta videos HTML5.
                </video>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">🏀 Maria Luisa</h3>
              </div>
            </motion.div>
          </div>

          {/* Cierre emotivo */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.3 } },
            }}
            className="text-center mt-12 mb-12 max-w-3xl mx-auto"
          >
            <p className="text-xl">
              🏀 Así como estos jugadores lograron superarse, vos podés ser el entrenador que guíe a su equipo a
              alcanzar ese mismo nivel de excelencia.
            </p>
          </motion.div>

          {/* Botón CTA */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.4 } },
            }}
            className="flex justify-center w-full px-4"
          >
            <Button asChild size="lg" className="text-lg py-6 bg-primary hover:bg-primary/90 w-full">
              <Link href="https://pay.hotmart.com/K98327460Y" className="flex items-center justify-center">
                <span className="text-center">👉 Sumate al Método Lavayen</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
