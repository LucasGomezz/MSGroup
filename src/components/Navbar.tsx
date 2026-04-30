"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import ContactModal from "@/components/ContactModal";

export default function Navbar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const TOP_OFFSET = 150;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= TOP_OFFSET) {
        setVisible(true);
      } else if (currentScroll > lastScroll) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScroll(currentScroll);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const isNearTop = e.clientY <= 80;
      const isInsideNavbar = navRef.current?.contains(e.target as Node);

      if (window.scrollY > TOP_OFFSET && !mobileOpen) {
        if (isNearTop || isInsideNavbar) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScroll, mobileOpen]);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const getBorderColor = () => {
    if (pathname.startsWith("/servicios/mt-trading"))
      return "border-tradingPrincipal/40";

    if (pathname.startsWith("/servicios/ms-shipping"))
      return "border-shippingPrincipal/40";

    if (pathname.startsWith("/servicios/ms-forwarding"))
      return "border-forwardingPrincipal/40";

    return "border-white/30";
  };

  const getLogo = () => {
    if (pathname.startsWith("/servicios/mt-trading"))
      return "/images/logos/logoMSTrading.png";

    if (pathname.startsWith("/servicios/ms-shipping"))
      return "/images/logos/logoShipping.png";

    if (pathname.startsWith("/servicios/ms-forwarding"))
      return "/images/logos/logoForwarding.png";

    return "/images/logos/logoPrincipal.png";
  };

  const getColorPrimary = () => {
    if (pathname.startsWith("/servicios/mt-trading"))
      return "text-tradingPrincipal";

    if (pathname.startsWith("/servicios/ms-shipping"))
      return "text-shippingPrincipal";

    if (pathname.startsWith("/servicios/ms-forwarding"))
      return "text-forwardingPrincipal";

    return "text-navy";
  };

  const getColorSecondary = () => {
    if (pathname.startsWith("/servicios/mt-trading"))
      return "bg-tradingComplementario hover:bg-tradingComplementario/90";

    if (pathname.startsWith("/servicios/ms-shipping"))
      return "bg-shippingComplementario hover:bg-shippingComplementario/90";

    if (pathname.startsWith("/servicios/ms-forwarding"))
      return "bg-forwardingComplementario hover:bg-forwardingComplementario/90";

    return "bg-coral hover:bg-coral/90";
  };

  const getColorHoverSecondary = () => {
    if (pathname.startsWith("/servicios/mt-trading"))
      return "hover:text-tradingComplementario";

    if (pathname.startsWith("/servicios/ms-shipping"))
      return "hover:text-shippingComplementario";

    if (pathname.startsWith("/servicios/ms-forwarding"))
      return "hover:text-forwardingComplementario";

    return "hover:text-coral";
  };

  const navLinkClass = (path: string) =>
    `transition ${isActive(path)
      ? `${getColorPrimary()} font-semibold underline underline-offset-8`
      : `${getColorHoverSecondary()}`
    }`;

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-3 md:top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-500 ${visible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
          }`}
      >
        <div
          className={`bg-white/75 backdrop-blur-xl border ${getBorderColor()} shadow-lg rounded-2xl px-4 md:px-6 py-3`}
        >
          {/* TOP BAR */}
          <div className="flex items-center justify-between gap-4">
            {/* LOGO */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src={getLogo()}
                alt="Logo"
                width={160}
                height={80}
                className="h-10 md:h-14 w-auto"
                priority
              />
            </Link>

            <nav
              className={`hidden xl:flex items-center gap-10 font-medium text-base xl:text-lg ${getColorPrimary()}`}
            >
              <Link href="/" className={navLinkClass("/")}>
                Inicio
              </Link>

              <div className="relative group">
                <span className={navLinkClass("/servicios")}>Servicios</span>

                <div className="absolute left-0 top-full mt-3 w-56 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                  <Link
                    href="/servicios/ms-shipping"
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    MS Shipping
                  </Link>
                  
                  <Link
                    href="/servicios/ms-forwarding"
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    MS Forwarding
                  </Link>

                  <Link
                    href="/servicios/mt-trading"
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    MT Trading
                  </Link>
                </div>
              </div>

              <Link
                href="/#por-que-elegirnos"
              >
                ¿Por qué elegirnos?
              </Link>

            </nav>

            {/* CTA SOLO XL+ */}
            <button
              className={`hidden xl:block ${getColorSecondary()} text-white px-5 py-2 rounded-lg font-semibold hover:scale-105 transition-all cursor-pointer`}
              onClick={() => {
                setMobileOpen(false);
                setContactOpen(true);
              }}
            >
              Contactanos
            </button>

            {/* MOBILE / TABLET / NOTEBOOK CHICA */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`xl:hidden ${getColorPrimary()}`}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* MENU MOBILE / TABLET */}
          {mobileOpen && (
            <div className="xl:hidden pt-5 pb-2 border-t mt-4 space-y-4">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className={`block ${navLinkClass("/")}`}
              >
                Inicio
              </Link>

              {/* SERVICIOS */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`flex items-center justify-between w-full ${navLinkClass(
                    "/servicios"
                  )}`}
                >
                  Servicios

                  <ChevronDown
                    size={18}
                    className={`transition ${servicesOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {servicesOpen && (
                  <div className="mt-3 ml-4 space-y-3 text-sm">
                    <Link
                      href="/servicios/mt-trading"
                      onClick={() => setMobileOpen(false)}
                      className="block"
                    >
                      MT Trading
                    </Link>

                    <Link
                      href="/servicios/ms-shipping"
                      onClick={() => setMobileOpen(false)}
                      className="block"
                    >
                      MS Shipping
                    </Link>

                    <Link
                      href="/servicios/ms-forwarding"
                      onClick={() => setMobileOpen(false)}
                      className="block"
                    >
                      MS Forwarding
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/porQueElegirnos"
                onClick={() => setMobileOpen(false)}
                className={`block ${navLinkClass("/porQueElegirnos")}`}
              >
                Por Qué Elegirnos
              </Link>
              <button
                className={`w-full mt-2 ${getColorSecondary()} text-white px-5 py-3 rounded-xl font-semibold cursor-pointer`}
                onClick={() => {
                  setMobileOpen(false);
                  setContactOpen(true);
                }}
              >
                Contactanos
              </button>
            </div>
          )}
        </div>

      </header>
      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}