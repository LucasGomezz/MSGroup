"use client";

import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/language-context";
import content from "./Footer.i18n.json";

export default function Footer() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const t = content[language];

  return (
    <footer className="bg-navy text-white">

      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center sm:text-left">

          {/* MS GROUP */}
          <div className="lg:pr-10 lg:border-r border-white/20">
            <h3 className="text-coral font-semibold uppercase mb-3 text-center sm:text-left">
              {t.msGroup}
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed text-center sm:text-left">
              {t.tagline}
            </p>
          </div>

          {/* CONTACTO */}
          <div className="sm:pl-0 lg:px-10 lg:border-r border-white/20">
            <h3 className="text-coral font-semibold uppercase mb-3 text-center sm:text-left">
              {t.contacto}
            </h3>

            <div className="space-y-6 text-sm sm:text-base">

              <div className="flex justify-center sm:justify-start gap-4">
                <MapPin className="text-coral mt-1" size={16} />

                <div>
                  {t.direccionLinea1}
                  <br />
                  {t.direccionLinea2}
                </div>
              </div>

              <div className="flex justify-center sm:justify-start gap-4">
                <Phone className="text-coral mt-1" size={16} />

                <a href="tel:+541149281004">
                  +54 11 4928-1004
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

                <div>
                  {t.horario}
                </div>
              </div>

            </div>
          </div>

          {/* SERVICIOS */}
          <div className="sm:col-span-2 lg:col-span-1 lg:pl-10">
            <h3 className="text-coral font-semibold uppercase mb-3 text-center sm:text-left">
              {t.nuestrosServicios}
            </h3>

            <ul className="text-gray-300 text-lg space-y-6 text-center sm:text-left">

              <li>
                <Link
                  href="/servicios/ms-shipping"
                  className="hover:text-white transition"
                >
                  {t.msShipping}
                </Link>
              </li>

              <li>
                <Link
                  href="/servicios/ms-forwarding"
                  className="hover:text-white transition"
                >
                  {t.msForwarding}
                </Link>
              </li>

              <li>
                <Link
                  href="/servicios/ms-trading"
                  className="hover:text-white transition"
                >
                  {t.msTrading}
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/20">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col lg:flex-row justify-between items-center gap-3 text-sm text-gray-300 text-center lg:text-left">

          <p>
            {t.copyright}
          </p>

          <Link
            href="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }
            }}
            className="flex items-center shrink-0"
          >
            <div className="relative w-40 h-10">
              <Image
                src="/images/logos/logoFooter.png"
                alt="Logo"
                fill
                sizes="160px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center">

            <p className="hover:text-white transition">
              {t.avisoLegal}
            </p>

            <p className="hover:text-white transition">
              {t.politicaPrivacidad}
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}
