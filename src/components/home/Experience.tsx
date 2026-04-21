"use client";

import { useInView } from "react-intersection-observer";
import WorldMap from "@/components/ui/world-map";

export default function Experience() {
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

        <div className="px-1 sm:px-2 md:px-6 lg:px-10 text-left md:text-justify order-2 lg:order-1">

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 md:mb-8 leading-tight">
            La diferencia está en los detalles
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-5 md:mb-6">
            Con más de{" "}
            <span className="font-bold text-navy">30 años</span> de experiencia,
            entendemos que cada requerimiento es único. Por eso, hemos dividido
            las{" "}
            <span className="font-bold text-navy">
              diferentes actividades
            </span>{" "}
            de nuestra empresa creando{" "}
            <span className="font-bold text-navy">
              divisiones específicas
            </span>{" "}
            —

            <span className="text-coral font-semibold"> Shipping</span>,
            <span className="text-coral font-semibold"> Forwarding </span>
            y
            <span className="text-coral font-semibold"> Trading</span> —

            para garantizar un asesoramiento especializado en cada área.
          </p>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
            Hoy, nuestra red global y nuestra base en
            <span className="font-bold text-navy"> Argentina</span> nos permiten
            garantizar la confianza de nuestros clientes brindando
            <span className="font-bold text-navy">
              {" "}soluciones operativas
            </span>{" "}
            de alto nivel.
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