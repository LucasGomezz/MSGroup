import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-navy text-white">

      <div className="max-w-9/12 mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">


          <div className="md:pr-10 md:border-r border-white/20">
            <h3 className="text-coral font-semibold uppercase mb-3 text-center">
              MS Group
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed text-center">
              Soluciones integrales de logística internacional
              desde 1994.
            </p>
          </div>

          <div className="md:px-10 md:border-r border-white/20">
            <h3 className="text-coral font-semibold uppercase mb-3 text-center">
              Contacto
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed text-center">
              Tte. Gral. Juan D. Perón 683, 3° piso
              <br />
              C1038AAM - Buenos Aires, Argentina
              <br />
              Tel: +54 11 4322-4902
              <br />
              Email: maritima@maritima-group.com
            </p>
          </div>

          <div className="md:pl-10">
            <h3 className="text-coral font-semibold uppercase mb-3 text-center">
              Nuestros Servicios
            </h3>

            <ul className="text-gray-300 text-sm space-y-1 text-center">

              <li>
                <Link href="/servicios/ms-forwarding" className="hover:text-white transition">
                  MS Forwarding
                </Link>
              </li>

              <li>
                <Link href="/servicios/ms-shipping" className="hover:text-white transition">
                  MS Shipping
                </Link>
              </li>

              <li>
                <Link href="/servicios/ms-trading" className="hover:text-white transition">
                  MT Trading
                </Link>
              </li>

            </ul>
          </div>

        </div>

      </div>

      <div className="border-t border-white/20">

        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">

          <p>
            © 2026 MS Group S.R.L. Todos los derechos reservados.
          </p>

          <div className="flex gap-6 mt-2 md:mt-0">

            <Link href="/legal" className="hover:text-white transition">
              Aviso Legal
            </Link>

            <Link href="/privacidad" className="hover:text-white transition">
              Política de Privacidad
            </Link>

          </div>

        </div>

      </div>

    </footer>
  )
}