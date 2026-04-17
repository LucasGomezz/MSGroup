"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  const getLogo = () => {
    if (pathname.startsWith("/servicios/ms-trading")) {
      return "/images/logos/logoMSTrading.png"
    }
    if (pathname.startsWith("/servicios/ms-shipping")) {
      return "/images/logos/logoShipping.png"
    }
    if (pathname.startsWith("/servicios/ms-fowarding")) {
      return "/images/logos/logoFowarding.png"
    }

    return "/images/logos/logoPrincipal.png"
  }

  const getColorPrimary = () => {
    if (pathname.startsWith("/servicios/ms-trading")) {
      return "text-tradingPrincipal"
    }
    if (pathname.startsWith("/servicios/ms-shipping")) {
      return "text-shippingPrincipal"
    }
    if (pathname.startsWith("/servicios/ms-fowarding")) {
      return "text-fowardingPrincipal"
    }

    return "text-navy"
  }
  const getColorSecondary = () => {
    if (pathname.startsWith("/servicios/ms-trading")) {
      return "tradingComplementario"
    }
    if (pathname.startsWith("/servicios/ms-shipping")) {
      return "shippingComplementario"
    }
    if (pathname.startsWith("/servicios/ms-fowarding")) {
      return "fowardingComplementario"
    }

    return "coral"
  }

  const getColorHoverSecondary = () => {
    if (pathname.startsWith("/servicios/ms-trading")) {
      return "hover:text-tradingComplementario"
    }
    if (pathname.startsWith("/servicios/ms-shipping")) {
      return "hover:text-shippingComplementario"
    }
    if (pathname.startsWith("/servicios/ms-fowarding")) {
      return "hover:text-fowardingComplementario"
    }

    return "hover:text-coral"
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 flex justify-center">

      <div className="w-11/12 mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="/" className="flex items-center">
          <Image
            src={getLogo()}
            alt="Logo"
            width={200}
            height={100}
            className="h-20 w-auto"
            unoptimized
          />
        </Link>

        <nav className={`hidden md:flex items-center gap-16 font-medium text-xl ${getColorPrimary()}`}>
          <Link href="/" className={`${getColorHoverSecondary()}`}>Inicio</Link>
          <div className="relative group">
            <span className={`cursor-pointer  ${getColorHoverSecondary()}`}>
              Servicios
            </span>

            {/* Dropdown */}
            <div className="absolute left-0 top-full mt-4 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

              <Link
                href="/servicios/ms-trading"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                MS Trading
              </Link>

              <Link
                href="/servicios/ms-shipping"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                MS Shipping
              </Link>

              <Link
                href="/servicios/ms-fowarding"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                MS Fowarding
              </Link>

            </div>
          </div>
          <Link href="/nosotros" className={`${getColorHoverSecondary()}`}>Nosotros</Link>
          <Link href="/contacto" className={`${getColorHoverSecondary()}`}>Contacto</Link>
        </nav>

        <button className={`hidden md:block bg-${getColorSecondary()} text-white px-5 py-2.5 rounded-md font-semibold hover:bg-${getColorSecondary()}/90 transition`}>
          Contactanos
        </button>

      </div>
    </header>
  )
}