"use client"
import Feature from "./Feature"
import { FaSlidersH, FaSearch, FaStar, FaGlobeAmericas } from "react-icons/fa"
import { useInView } from "react-intersection-observer"

export default function WhyMSGroup() {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.4
    })

    return (
        <section className="bg-white py-20">
            <div
                ref={ref}
                className={`relative  flex flex-col items-center gap-2 max-w-6xl mx-auto text-center px-4 transition-all duration-700 
                ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >

                <div className="text-center mb-14">

                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                        La diferencia está en los detalles
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Somos tu socio estratégico en cada operación internacional.
                    </p>

                </div>

                <div className="grid md:grid-cols-4 gap-10 text-center">

                    <Feature
                        icon={<FaSlidersH />}
                        title="Personalización total"
                        description="Diseñamos soluciones a medida para cada cliente."
                    />

                    <Feature
                        icon={<FaSearch />}
                        title="Transparencia real"
                        description="Seguimiento en tiempo real, costos claros y comunicación directa."
                    />

                    <Feature
                        icon={<FaStar />}
                        title="Valor agregado"
                        description="Más de 35 años de experiencia optimizando operaciones internacionales."
                    />

                    <Feature
                        icon={<FaGlobeAmericas />}
                        title="Red global, trato local"
                        description="Presencia en más de 75 países con cercanía y confianza."
                    />

                </div>

            </div>

        </section>
    )
}