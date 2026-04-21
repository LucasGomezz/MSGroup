"use client";
import { useInView } from "react-intersection-observer";
import ContactModal from "../ContactModal";
import { useState } from "react";

export default function CTAHome() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <section id="por-que-elegirnos" className="py-10 md:py-14 bg-white">
        <div
          ref={ref}
          className={`relative max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${inView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
            }`}
        >
          <div className="bg-coral rounded-2xl py-8 md:py-10 px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6 md:gap-8">

            <div className="max-w-2xl">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2 leading-tight">
                ¿Listo para potenciar tu logística internacional?
              </h3>

              <p className="text-white/90 text-sm sm:text-base md:text-lg">
                Solicitá tu cotización ahora y recibí asesoramiento a medida.
              </p>
            </div>

            <button className="w-full sm:w-auto bg-white text-coral font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition whitespace-nowrap cursor-pointer"
              onClick={() => {
                setContactOpen(true);
              }}>
              Hablemos
            </button>
          </div>
        </div>
      </section>
      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}