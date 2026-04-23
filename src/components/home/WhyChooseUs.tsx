"use client";

import Feature from "@/components/home/Feature";
import {
  FaSlidersH,
  FaSearch,
  FaStar,
  FaGlobeAmericas,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function WhyMSGroup() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    initialInView: false,
    fallbackInView: false,
  });

  return (
    <section id="por-que-elegirnos" className="bg-white py-16 sm:py-20 md:py-24">
      <div
        ref={ref}
        className={`relative flex flex-col items-center gap-2 max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${
          inView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        <div className="text-center mb-12 md:mb-14 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4 leading-tight">
            La diferencia está en los detalles
          </h2>

          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
            Somos tu socio estratégico en cada operación internacional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 w-full text-center">
          <Feature
            icon={<FaSlidersH />}
            title="Personalización total"
            description="Diseñamos soluciones a medida para cada cliente, adaptándonos a la complejidad de cada operación."
          />

          <Feature
            icon={<FaSearch />}
            title="Transparencia real"
            description="Seguimiento en tiempo real, costos claros y comunicación directa con tu ejecutivo asignado."
          />

          <Feature
            icon={<FaStar />}
            title="Valor agregado"
            description="Aportamos valor a tu negocio con recomendaciones basadas en +35 años de experiencia en operaciones internacionales de todo tipo."
          />

          <Feature
            icon={<FaGlobeAmericas />}
            title="Red global, trato local"
            description="Presencia en +100 países a través de nuestra red de agentes con la cercanía y confianza de una empresa argentina."
          />
        </div>
      </div>
    </section>
  );
}