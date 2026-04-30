import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">

      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center sm:text-left">

          <div className="lg:pr-10 lg:border-r border-white/20">
            <h3 className="text-coral font-semibold uppercase mb-3 text-center sm:text-left">
              MS Group
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed text-center sm:text-left">
              Soluciones integrales de logística internacional
              desde 1994.
            </p>
          </div>

          <div className=" sm:pl-0 lg:px-10 lg:border-r border-white/20 ">
            <h3 className="text-coral font-semibold uppercase mb-3 text-center sm:text-left">
              Contacto
            </h3>

            <div className="space-y-6 text-sm sm:text-base">
              <div className="flex justify-center sm:justify-start gap-4">
                <MapPin className="text-coral mt-1" size={16} />
                <div>
                  Tte. Gral. Juan D. Perón 683, 3° piso
                  <br />
                  Buenos Aires, Argentina
                </div>
              </div>

              <div className="flex justify-center sm:justify-start gap-4">
                <Phone className="text-coral mt-1" size={16} />
                <a href="tel:+541143224902">
                  +54 11 4322-4902
                </a>
              </div>

              <div className="flex justify-center sm:justify-start gap-4">
                <Mail className="text-coral mt-1" size={16} />
                <a href="mailto:maritima@maritima-group.com">
                  maritima@maritima-group.com
                </a>
              </div>

              <div className="flex justify-center sm:justify-start gap-4">
                <Clock3 className="text-coral mt-1" size={16} />
                <div>Lunes a Viernes · 9:00 a 18:00</div>
              </div>
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-1 lg:pl-10">
            <h3 className="text-coral font-semibold uppercase mb-3 text-center sm:text-left">
              Nuestros Servicios
            </h3>

            <ul className="text-gray-300 text-lg space-y-6 text-center sm:text-left ">

              <li>
                <Link
                  href="/servicios/ms-shipping"
                  className="hover:text-white transition"
                >
                  MS Shipping
                </Link>
              </li>

              <li>
                <Link
                  href="/servicios/ms-forwarding"
                  className="hover:text-white transition"
                >
                  MS Forwarding
                </Link>
              </li>

              <li>
                <Link
                  href="/servicios/mt-trading"
                  className="hover:text-white transition"
                >
                  MT Trading
                </Link>
              </li>

            </ul>
          </div>

        </div>

      </div>

      <div className="border-t border-white/20">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col lg:flex-row justify-between items-center gap-3 text-sm text-gray-300 text-center lg:text-left">

          <p>
            © 2026 MS Group S.R.L. Todos los derechos reservados.
          </p>

          <Link href="/" className="flex items-center shrink-0">
            <Image
              src={"/icon/logo.ico"}
              alt="Logo"
              width={10}
              height={5}
              className="h-10 md:h-10 w-auto"
              priority
            />
          </Link>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center">

            <p className="hover:text-white transition">
              Aviso Legal
            </p>

            <p className="hover:text-white transition">
              Política de Privacidad
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}