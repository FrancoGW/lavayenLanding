"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import CtaButton from "./cta-button"

export default function SobreMiSection() {
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
    <section id="sobre-mi" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
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
            <h2 className="section-title">De Entre Ríos al mundo: formando entrenadores y jugadores de élite.</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
              }}
              className="relative"
            >
              <div className="relative h-[500px] w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-primary rounded-lg transform -rotate-3"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-24%20at%204.35.13%20PM-NIJvEwgiH0tXSOiicIXsWREiQJ1tEj.jpeg"
                  alt="Ezequiel Lavayen"
                  fill
                  className="object-cover rounded-lg transform rotate-3 hover:rotate-0 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-primary text-white py-3 px-8 rounded-full font-bold text-xl">
                Ezequiel Lavayen
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
              }}
              className="space-y-6"
            >
              <p className="text-lg">
                Nací en una pequeña ciudad del norte de Entre Ríos, donde el básquet no era solo un deporte: era parte
                de nuestra vida diaria. Desde chico entendí que el talento solo no alcanza: hace falta pasión,
                disciplina y preparación.
              </p>
              <p className="text-lg">
                Ese mismo enfoque me llevó a ser Preparador Físico en Boca Juniors, a trabajar en Lanús y a formar parte
                de la Selección Argentina en tres Mundiales Juveniles. Cada jugador que entrené, cada equipo que
                acompañé, reforzó mi convicción:
              </p>
              <p className="text-lg font-bold italic">
                El verdadero cambio empieza cuando hay un método sólido detrás.
              </p>
              <p className="text-lg">
                Hoy sigo perfeccionando ese método trabajando en la Liga Profesional de México y apoyando a jugadores en
                ligas de todo el mundo.
              </p>
              <p className="text-lg">
                Mi misión ahora es ayudarte a vos, entrenador, a formar la próxima generación de jugadores de élite.
              </p>
            </motion.div>
          </div>

          <CtaButton />
        </motion.div>
      </div>
    </section>
  )
}
