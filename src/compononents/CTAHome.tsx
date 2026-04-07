"use client"
import { useInView } from "react-intersection-observer"

export default function CTAHome() {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.4
    })

    return (
        <section className="py-10 bg-white">

            <div
                ref={ref}
                className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                    }`}
            >

                <div className="bg-coral rounded-xl py-10 px-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">

                    <div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                            ¿Listo para potenciar tu logística internacional?
                        </h3>

                        <p className="text-white/90 text-sm md:text-base">
                            Obtén una cotización personalizada de forma inmediata.
                        </p>y
                    </div>

                    <button className="bg-white text-coral font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition">
                        Solicitar cotización gratuita
                    </button>

                </div>

            </div>

        </section>
    )
}