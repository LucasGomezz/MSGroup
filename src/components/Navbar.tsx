"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import ContactModal from "@/components/ContactModal";

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);

  /*
  |--------------------------------------------------------------------------
  | DETECTAR SCROLL
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | ACTIVE LINK
  |--------------------------------------------------------------------------
  */

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";

    return pathname.startsWith(path);
  };

  /*
  |--------------------------------------------------------------------------
  | COLORS
  |--------------------------------------------------------------------------
  */

  const getBorderColor = () => {
    if (pathname.startsWith("/servicios/ms-trading")) {
      return "border-tradingPrincipal/40";
    }

    if (pathname.startsWith("/servicios/ms-shipping")) {
      return "border-shippingPrincipal/40";
    }

    if (pathname.startsWith("/servicios/ms-forwarding")) {
      return "border-forwardingPrincipal/40";
    }

    return "border-white/30";
  };

  const getLogo = () => {
    if (pathname.startsWith("/servicios/ms-trading")) {
      return "/images/logos/logoMSTrading.png";
    }

    if (pathname.startsWith("/servicios/ms-shipping")) {
      return "/images/logos/logoShipping.png";
    }

    if (pathname.startsWith("/servicios/ms-forwarding")) {
      return "/images/logos/logoForwarding.png";
    }

    return "/images/logos/logoPrincipal.png";
  };

  const getColorPrimary = () => {
    if (pathname.startsWith("/servicios/ms-trading")) {
      return "text-tradingPrincipal";
    }

    if (pathname.startsWith("/servicios/ms-shipping")) {
      return "text-shippingPrincipal";
    }

    if (pathname.startsWith("/servicios/ms-forwarding")) {
      return "text-forwardingPrincipal";
    }

    return "text-navy";
  };

  const getColorSecondary = () => {
    if (pathname.startsWith("/servicios/ms-trading")) {
      return "bg-tradingComplementario hover:bg-tradingComplementario/90";
    }

    if (pathname.startsWith("/servicios/ms-shipping")) {
      return "bg-shippingComplementario hover:bg-shippingComplementario/90";
    }

    if (pathname.startsWith("/servicios/ms-forwarding")) {
      return "bg-navy hover:bg-navy/90";
    }

    return "bg-coral hover:bg-coral/90";
  };

  const getColorHoverSecondary = () => {
    if (pathname.startsWith("/servicios/ms-trading")) {
      return "hover:text-tradingComplementario";
    }

    if (pathname.startsWith("/servicios/ms-shipping")) {
      return "hover:text-shippingComplementario";
    }

    if (pathname.startsWith("/servicios/ms-forwarding")) {
      return "hover:text-forwardingComplementario";
    }

    return "hover:text-coral";
  };

  /*
  |--------------------------------------------------------------------------
  | NAV LINKS
  |--------------------------------------------------------------------------
  */

  const navLinkClass = (path: string) =>
    `transition ${isActive(path)
      ? `${getColorPrimary()} font-semibold underline underline-offset-8`
      : `${getColorHoverSecondary()}`
    }`;

  /*
  |--------------------------------------------------------------------------
  | RENDER
  |--------------------------------------------------------------------------
  */

  return (
    <>
      <header
        ref={navRef}
        onMouseEnter={() => {
          if (isScrolled) {
            setIsHovered(true);
          }
        }}
        onMouseLeave={() => {
          if (isScrolled) {
            setIsHovered(false);
          }
        }}
        className={`
           fixed top-3 md:top-4
           left-0 right-0
           mx-auto
           z-50
           transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

             ${isScrolled
            ? isHovered
              ? "w-[95%] max-w-6xl"
              : "w-fit ml-[calc((100%-72rem)/2)]"
            : "w-[95%] max-w-6xl"
          }
        `}
      >
        <div
          className={`
            bg-white/75
            backdrop-blur-xl
            border ${getBorderColor()}
            shadow-lg
            rounded-2xl
            px-4 md:px-6
            py-3
            transition-all duration-500 ease-in-out

            ${isScrolled && !isHovered
              ? "w-fit"
              : "w-full"
            }
          `}
        >
          {/* =====================================================
              TOP BAR
          ====================================================== */}

          <div className="flex items-center justify-between gap-4">

            {/* =====================================================
                LOGO
            ====================================================== */}

            <Link
              href="/"
              className="flex items-center shrink-0"
            >
              <Image
                src={getLogo()}
                alt="Logo"
                width={160}
                height={80}
                className="h-10 md:h-14 w-auto"
                priority
              />
            </Link>

            {/* =====================================================
                DESKTOP NAVBAR
            ====================================================== */}

            <nav
              className={`
                hidden xl:flex
                items-center
                gap-10
                font-medium
                text-base
                xl:text-lg
                ${getColorPrimary()}
                transition-all
                duration-500

                ${isScrolled && !isHovered
                  ? "opacity-0 invisible w-0 overflow-hidden"
                  : "opacity-100 visible"
                }
              `}
            >
              {/* INICIO */}

              <Link
                href="/"
                className={navLinkClass("/")}
              >
                Inicio
              </Link>

              {/* SERVICIOS */}

              <div className="relative group">

                <span
                  className={navLinkClass("/servicios")}
                >
                  Servicios
                </span>

                <div
                  className="
                    absolute
                    left-0
                    top-full
                    mt-3
                    w-56
                    bg-white
                    shadow-xl
                    rounded-xl
                    opacity-0
                    invisible
                    group-hover:opacity-100
                    group-hover:visible
                    transition-all
                    duration-200
                    overflow-hidden
                  "
                >
                  <Link
                    href="/servicios/ms-shipping"
                    className="
                      block
                      px-4
                      py-3
                      hover:bg-gray-100
                    "
                  >
                    MS Shipping
                  </Link>

                  <Link
                    href="/servicios/ms-forwarding"
                    className="
                      block
                      px-4
                      py-3
                      hover:bg-gray-100
                    "
                  >
                    MS Forwarding
                  </Link>

                  <Link
                    href="/servicios/ms-trading"
                    className="
                      block
                      px-4
                      py-3
                      hover:bg-gray-100
                    "
                  >
                    MS Trading
                  </Link>
                </div>

              </div>

              {/* POR QUÉ ELEGIRNOS */}

              <Link
                href="/#por-que-elegirnos"
                className={navLinkClass("/#por-que-elegirnos")}
              >
                ¿Por qué elegirnos?
              </Link>

            </nav>

            {/* =====================================================
                CONTACT BUTTON
            ====================================================== */}

            <button
              className={`
                hidden xl:block
                ${getColorSecondary()}
                text-white
                px-5
                py-2
                rounded-lg
                font-semibold
                hover:scale-105
                transition-all
                cursor-pointer

                ${isScrolled && !isHovered
                  ? "opacity-0 invisible w-0 px-0 overflow-hidden"
                  : "opacity-100 visible"
                }
              `}
              onClick={() => {
                setMobileOpen(false);
                setContactOpen(true);
              }}
            >
              Contáctanos
            </button>

            {/* =====================================================
                MOBILE MENU BUTTON
            ====================================================== */}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`
                xl:hidden
                ${getColorPrimary()}
              `}
            >
              {mobileOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </button>

          </div>

          {/* =====================================================
              MOBILE / TABLET MENU
          ====================================================== */}

          {mobileOpen && (
            <div
              className="
                xl:hidden
                pt-5
                pb-2
                border-t
                mt-4
                space-y-4
              "
            >

              {/* INICIO */}

              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className={`
                  block
                  ${navLinkClass("/")}
                `}
              >
                Inicio
              </Link>

              {/* SERVICIOS */}

              <div>

                <button
                  onClick={() =>
                    setServicesOpen(!servicesOpen)
                  }
                  className={`
                    flex
                    items-center
                    justify-between
                    w-full
                    ${navLinkClass("/servicios")}
                  `}
                >
                  Servicios

                  <ChevronDown
                    size={18}
                    className={`
                      transition
                      ${servicesOpen
                        ? "rotate-180"
                        : ""
                      }
                    `}
                  />
                </button>

                {servicesOpen && (
                  <div
                    className="
                      mt-3
                      ml-4
                      space-y-3
                      text-sm
                    "
                  >

                    <Link
                      href="/servicios/ms-trading"
                      onClick={() =>
                        setMobileOpen(false)
                      }
                      className="block"
                    >
                      MS Trading
                    </Link>

                    <Link
                      href="/servicios/ms-shipping"
                      onClick={() =>
                        setMobileOpen(false)
                      }
                      className="block"
                    >
                      MS Shipping
                    </Link>

                    <Link
                      href="/servicios/ms-forwarding"
                      onClick={() =>
                        setMobileOpen(false)
                      }
                      className="block"
                    >
                      MS Forwarding
                    </Link>

                  </div>
                )}

              </div>

              {/* POR QUÉ ELEGIRNOS */}

              <Link
                href="/#por-que-elegirnos"
                onClick={() =>
                  setMobileOpen(false)
                }
                className={`
                  block
                  ${navLinkClass("/#por-que-elegirnos")}
                `}
              >
                ¿Por qué elegirnos?
              </Link>

              {/* CONTACTO */}

              <button
                className={`
                  w-full
                  mt-2
                  ${getColorSecondary()}
                  text-white
                  px-5
                  py-3
                  rounded-xl
                  font-semibold
                  cursor-pointer
                `}
                onClick={() => {
                  setMobileOpen(false);
                  setContactOpen(true);
                }}
              >
                Contáctanos
              </button>

            </div>
          )}

        </div>

      </header>

      {/* =====================================================
          CONTACT MODAL
      ====================================================== */}

      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}