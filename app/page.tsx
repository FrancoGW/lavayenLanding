import HeroSection from "@/components/hero-section"
import TestimoniosSection from "@/components/testimonios-section"
import ProgramaSection from "@/components/programa-section"
import BeneficiosSection from "@/components/beneficios-section"
import ModulosSection from "@/components/modulos-section"
import BonificacionesSection from "@/components/bonificaciones-section"
import SobreMiSection from "@/components/sobre-mi-section"
import CtaSection from "@/components/cta-section"
import FaqSection from "@/components/faq-section"
import FinalCta from "@/components/final-cta"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <>
      <HeroSection />
      <TestimoniosSection />
      <ProgramaSection />
      <BeneficiosSection />
      <ModulosSection />
      <BonificacionesSection />
      <SobreMiSection />
      <CtaSection />
      <FaqSection />
      <FinalCta />
      <ContactForm />
    </>
  )
}
