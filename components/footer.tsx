import type React from "react"
import Link from "next/link"
import { Instagram, Youtube, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

// Componente personalizado para el icono de TikTok
function TiktokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Método Lavayen</h3>
            <p className="text-gray-400 mb-4">
              Eleva tus entrenamientos al siguiente nivel y conviértete en un entrenador de élite en solo 3 meses.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/ezequiellavayen?igsh=MTZnMWd4YnVxMnN4Ng=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram />
              </Link>
              <Link
                href="https://youtube.com/@ezequiellavayen?si=ZPrzmUCYUnRRvUQQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Youtube />
              </Link>
              <Link
                href="https://www.tiktok.com/@ezelavayen?_t=ZM-8voEgXcadOh&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <TiktokIcon />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#programa" className="text-gray-400 hover:text-primary transition-colors">
                  Programa
                </Link>
              </li>
              <li>
                <Link href="#modulos" className="text-gray-400 hover:text-primary transition-colors">
                  Módulos
                </Link>
              </li>
              <li>
                <Link href="#bonificaciones" className="text-gray-400 hover:text-primary transition-colors">
                  Bonificaciones
                </Link>
              </li>
              <li>
                <Link href="#sobre-mi" className="text-gray-400 hover:text-primary transition-colors">
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-primary transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-400">ezequilavayen@gmail.com</span>
              </div>
              <Button asChild className="mt-4">
                <Link href="https://pay.hotmart.com/K98327460Y">👉 ¡Inscríbete Ahora!</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Método Lavayen. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="/terminos" className="text-gray-500 hover:text-primary text-sm transition-colors">
              Términos y condiciones
            </Link>
            <Link href="/privacidad" className="text-gray-500 hover:text-primary text-sm transition-colors">
              Política de privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
