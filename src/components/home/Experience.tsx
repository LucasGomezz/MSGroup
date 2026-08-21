"use client";

import { useInView } from "react-intersection-observer";
import WorldMap from "@/components/ui/world-map";
import { useLanguage } from "@/lib/language-context";
import content from "./Experience.i18n.json";

export default function Experience() {
  const { language } = useLanguage();
  const t = content[language];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    root: null,
    rootMargin: "0px 0px -100px 0px",
  });

  const dots = [
    { start: { lat: -60, lng: -64 }, end: { lat: 0, lng: -100 } },
    { start: { lat: -60, lng: -64 }, end: { lat: 40.71, lng: -74.0 } },
    { start: { lat: -60, lng: -64 }, end: { lat: 45, lng: 5 } },
    { start: { lat: -60, lng: -64 }, end: { lat: 35.68, lng: 139.69 } },
    { start: { lat: -60, lng: -64 }, end: { lat: 1.35, lng: 103.82 } },
    { start: { lat: -60, lng: -64 }, end: { lat: 65, lng: 100 } },
    { start: { lat: -60, lng: -64 }, end: { lat: -30, lng: 30 } },
  ];

  return (
    <section
      ref={ref}
      className={`relative bg-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-100 translate-y-4"
      }`}
    >
      <div className="w-full mx-auto grid lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">

        <div className="px-1 sm:px-2 md:px-6 lg:px-10 text-left  order-2 lg:order-1">

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 md:mb-8 leading-tight">
            {t.heading}
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-5 md:mb-6">
            {t.p1_conMasDe}{" "}
            <span className="font-bold text-navy">{t.p1_30anos}</span>{" "}
            {t.p1_deExperiencia}{" "}
            <span className="font-bold text-navy">
              {t.p1_diferentesActividades}
            </span>{" "}
            {t.p1_deNuestraEmpresa}{" "}
            <span className="font-bold text-navy">
              {t.p1_divisionesEspecificas}
            </span>{" "}
            —

            <span className="text-coral font-semibold"> {t.p1_shipping}</span>,
            <span className="text-coral font-semibold"> {t.p1_forwarding} </span>
            {t.p1_y}
            <span className="text-coral font-semibold"> {t.p1_trading}</span> —

            {t.p1_paraGarantizar}
          </p>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
            {t.p2_hoyCon}
            <span className="font-bold text-navy"> {t.p2_argentina}</span> {t.p2_yGraciasA}
            <span className="font-bold text-navy">
              {" "}{t.p2_solucionesDeTransporte}
            </span>{" "}
            {t.p2_paraCadaTipo}
          </p>
        </div>

        <div className="relative w-full flex justify-center items-center order-1 lg:order-2">
          <div className="relative w-full max-w-xl md:max-w-2xl lg:max-w-none">
            <WorldMap dots={inView ? dots : []} />
          </div>
        </div>

      </div>
    </section>
  );
}