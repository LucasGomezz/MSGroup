"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import ContactModal from "@/components/ContactModal";
import { useLanguage } from "@/lib/language-context";
import content from "./Navbar.i18n.json";

const cx = (str: string) => str.replace(/\s+/g, " ").trim();

export default function Navbar() {
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const t = content[language];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);

  const isCollapsed = isScrolled && !isHovered;

  /*
  |--------------------------------------------------------------------------
  | FASE DE TRANSICIÓN (abriendo / cerrando)
  |--------------------------------------------------------------------------
  */

  const [phase, setPhase] = useState<"opening" | "closing" | null>(null);
  const [prevCollapsed, setPrevCollapsed] = useState(isCollapsed);

  if (isCollapsed !== prevCollapsed) {
    setPhase(isCollapsed ? "closing" : "opening");
    setPrevCollapsed(isCollapsed);
  }

  /*
  |--------------------------------------------------------------------------
  | DETECTAR SCROLL (con hysteresis para evitar flicker en el umbral)
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        setIsScrolled((prev) => {
          if (prev) return window.scrollY > 80;
          return window.scrollY > 120;
        });
        ticking = false;
      });
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
    cx(`transition ${isActive(path)
      ? `${getColorPrimary()} font-semibold underline underline-offset-8`
      : `${getColorHoverSecondary()}`
    }`);

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
        className={cx(`
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
        `)}
      >
        <div
          className={cx(`
            bg-white/75
            backdrop-blur-xl
            border ${getBorderColor()}
            shadow-lg
            rounded-2xl
            px-4 md:px-6
            py-3
            transition-all duration-500 ease-in-out

            ${isCollapsed
              ? "w-fit"
              : "w-full"
            }
          `)}
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
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
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
                DESKTOP: NAV + BOTÓN
                Abre con snap instantáneo (como antes).
                Cierra con grid-template-columns suave (sin flash).
            ====================================================== */}

            <div
              className={cx(`
                hidden xl:grid
                ease-in-out
                ${phase === "closing"
                  ? "transition-[grid-template-columns] duration-500"
                  : "transition-none"
                }
                ${isCollapsed ? "grid-cols-[0fr]" : "grid-cols-[1fr]"}
              `)}
            >
              <div className={cx(`min-w-0 ${isCollapsed ? "overflow-hidden" : "overflow-visible"}`)}>
                <div
                  className={cx(`
                    flex items-center gap-10
                    ease-in-out
                    ${phase === "closing"
                      ? "transition-opacity duration-300"
                      : "transition-opacity duration-150"
                    }
                    ${isCollapsed ? "opacity-0 pointer-events-none" : "opacity-100"}
                  `)}
                >

                  {/* NAV */}

                  <nav
                    className={cx(`
                      flex items-center gap-10
                      font-medium text-base xl:text-lg
                      ${getColorPrimary()}
                    `)}
                  >
                    {/* INICIO */}

                    <Link
                      href="/"
                      className={navLinkClass("/")}
                    >
                      {t.inicio}
                    </Link>

                    {/* SERVICIOS */}

                    <div className="relative group">

                      <span
                        className={navLinkClass("/servicios")}
                      >
                        {t.servicios}
                      </span>

                      <div
                        className={cx(`
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
                        `)}
                      >
                        <Link
                          href="/servicios/ms-shipping"
                          className={cx(`
                            block
                            px-4
                            py-3
                            hover:bg-gray-100
                          `)}
                        >
                          {t.msShipping}
                        </Link>

                        <Link
                          href="/servicios/ms-forwarding"
                          className={cx(`
                            block
                            px-4
                            py-3
                            hover:bg-gray-100
                          `)}
                        >
                          {t.msForwarding}
                        </Link>

                        <Link
                          href="/servicios/ms-trading"
                          className={cx(`
                            block
                            px-4
                            py-3
                            hover:bg-gray-100
                          `)}
                        >
                          {t.msTrading}
                        </Link>
                      </div>

                    </div>

                    {/* POR QUÉ ELEGIRNOS */}

                    <Link
                      href="/#por-que-elegirnos"
                      className={navLinkClass("/#por-que-elegirnos")}
                    >
                      {t.porQueElegirnos}
                    </Link>

                  </nav>

                  {/* SELECTOR DE IDIOMA */}

                  <button
                    type="button"
                    onClick={toggleLanguage}
                    className={cx(`
                      shrink-0
                      text-xs
                      font-bold
                      tracking-wide
                      border
                      ${getBorderColor()}
                      rounded-lg
                      px-2.5
                      py-1.5
                      cursor-pointer
                      transition
                      ${getColorPrimary()}
                    `)}
                  >
                    {language === "es" ? "EN" : "ES"}
                  </button>

                  {/* BOTÓN CONTACTO */}

                  <button
                    className={cx(`
                      ${getColorSecondary()}
                      text-white
                      px-5
                      py-2
                      rounded-lg
                      font-semibold
                      hover:scale-105
                      transition-transform
                      cursor-pointer
                      shrink-0
                    `)}
                    onClick={() => {
                      setMobileOpen(false);
                      setContactOpen(true);
                    }}
                  >
                    {t.contactanos}
                  </button>

                </div>
              </div>
            </div>

            {/* =====================================================
                MOBILE MENU BUTTON
            ====================================================== */}

            <div className="flex items-center gap-3 xl:hidden">
              <button
                type="button"
                onClick={toggleLanguage}
                className={cx(`
                  text-xs
                  font-bold
                  tracking-wide
                  border
                  ${getBorderColor()}
                  rounded-lg
                  px-2.5
                  py-1.5
                  cursor-pointer
                  transition
                  ${getColorPrimary()}
                `)}
              >
                {language === "es" ? "EN" : "ES"}
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={getColorPrimary()}
              >
                {mobileOpen ? (
                  <X size={28} />
                ) : (
                  <Menu size={28} />
                )}
              </button>
            </div>

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
                className={cx(`
                  block
                  ${navLinkClass("/")}
                `)}
              >
                {t.inicio}
              </Link>

              {/* SERVICIOS */}

              <div>

                <button
                  onClick={() =>
                    setServicesOpen(!servicesOpen)
                  }
                  className={cx(`
                    flex
                    items-center
                    justify-between
                    w-full
                    ${navLinkClass("/servicios")}
                  `)}
                >
                  {t.servicios}

                  <ChevronDown
                    size={18}
                    className={cx(`
                      transition
                      ${servicesOpen
                        ? "rotate-180"
                        : ""
                      }
                    `)}
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
                      {t.msTrading}
                    </Link>

                    <Link
                      href="/servicios/ms-shipping"
                      onClick={() =>
                        setMobileOpen(false)
                      }
                      className="block"
                    >
                      {t.msShipping}
                    </Link>

                    <Link
                      href="/servicios/ms-forwarding"
                      onClick={() =>
                        setMobileOpen(false)
                      }
                      className="block"
                    >
                      {t.msForwarding}
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
                className={cx(`
                  block
                  ${navLinkClass("/#por-que-elegirnos")}
                `)}
              >
                {t.porQueElegirnos}
              </Link>

              {/* CONTACTO */}

              <button
                className={cx(`
                  w-full
                  mt-2
                  ${getColorSecondary()}
                  text-white
                  px-5
                  py-3
                  rounded-xl
                  font-semibold
                  cursor-pointer
                `)}
                onClick={() => {
                  setMobileOpen(false);
                  setContactOpen(true);
                }}
              >
                {t.contactanos}
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