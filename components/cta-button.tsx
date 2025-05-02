import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CtaButton({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center mt-8 px-4 w-full ${className}`}>
      <Button asChild size="lg" className="text-lg py-6 bg-primary hover:bg-primary/90 w-full">
        <Link href="https://pay.hotmart.com/K98327460Y" className="flex items-center justify-center">
          <span className="text-center">👉 Sumate al Método Lavayen</span>
        </Link>
      </Button>
    </div>
  )
}
