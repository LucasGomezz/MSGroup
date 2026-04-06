import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-200">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

  
        <div className="flex items-center gap-3">
          <Image
            src="/images/MSLogo.png"
            alt="Marítima"
            width={120}
            height={40}
            priority
          />
        </div>

        <nav className="hidden md:flex items-center gap-10 text-navy font-medium">

          <Link href="/" className="hover:text-coral transition">
            Inicio
          </Link>

          <Link href="/servicios" className="hover:text-coral transition">
            Servicios
          </Link>

          <Link href="/nosotros" className="hover:text-coral transition">
            Nosotros
          </Link>

          <Link href="/contacto" className="hover:text-coral transition">
            Contacto
          </Link>

        </nav>

        <button className="bg-coral text-white px-5 py-2.5 rounded-md font-semibold hover:bg-orange-600 transition">
          Contáctenos
        </button>

      </div>

    </header>
  )
}