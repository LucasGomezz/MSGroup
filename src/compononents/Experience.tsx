"use client"

import { useInView } from "react-intersection-observer"
import WorldMap from "@/components/ui/world-map"

export default function Experience() {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3
    })

    return (
        <section
            ref={ref}
            className={`relative bg-white py-28 min-h-162.5 z-10 text-center px-6 transition-all duration-700
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >

            {/* MAPA DE FONDO */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="w-8/12 max-w-[90%] ">
                    {inView && (
                        <WorldMap

                            dots={[
                                { start: { lat: -34.6, lng: -58.38 }, end: { lat: 40.71, lng: -74.0 } }, // USA
                                { start: { lat: -34.6, lng: -58.38 }, end: { lat: 48.85, lng: 2.35 } },  // Paris
                                { start: { lat: -34.6, lng: -58.38 }, end: { lat: -23.55, lng: -46.63 } }, // Brasil
                                { start: { lat: -34.6, lng: -58.38 }, end: { lat: 35.68, lng: 139.69 } }, // Japón
                                { start: { lat: -34.6, lng: -58.38 }, end: { lat: 1.35, lng: 103.82 } },  // Singapur
                                { start: { lat: -34.6, lng: -58.38 }, end: { lat: 65, lng: 100 } }   // Londres
                            ]}
                        />
                    )}
                </div>
            </div>

            {/* CONTENIDO */}
            <div className="relative z-10 max-w-4xl mx-auto text-center px-6">

                <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8">
                    La diferencia está en los detalles
                </h2>

                <p className="text-lg md:text-2xl text-gray-700 leading-relaxed mb-6">

                    Con más de <span className="font-bold text-navy">30 años</span> de experiencia,
                    entendemos que cada requerimiento es único. Por eso,
                    hemos dividido las <span className="font-bold text-navy">diferentes actividades</span> de nuestra empresa
                    creando <span className="font-bold text-navy">divisiones específicas</span> —

                    <span className="text-coral font-semibold"> Shipping</span>,
                    <span className="text-coral font-semibold"> Forwarding</span>
                    y <span className="text-coral font-semibold"> Trading</span> —

                    para garantizar un asesoramiento especializado en cada área.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed md:text-2xl">

                    Hoy, nuestra red global y nuestra base en
                    <span className="font-bold text-navy"> Argentina</span> nos permiten
                    garantizar la confianza de nuestros clientes brindando
                    <span className="font-bold text-navy"> soluciones operativas</span> de alto nivel.

                </p>

            </div>

        </section>
    )
}