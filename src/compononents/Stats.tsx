"use client"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4
  })
  return (
    <section className="bg-navy text-white py-20">

      <div
        ref={ref} 
        className={`relative flex flex-col items-center max-w-4xl mx-auto text-center mb-12 px-6 transition-all duration-700 
      ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <h2 className="text-3xl md:text-4xl font-semibold mb-3">
          Experiencia, Eficiencia y Confianza
        </h2>

        <p className="text-gray-300 text-lg">
          Ofrecemos soluciones seguras y a medida para el transporte internacional de mercaderías.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl py-10 px-6 grid grid-cols-2 md:grid-cols-4 text-center divide-x divide-white/20">
          <Stat number={30} label="Años de trayectoria" />
          <Stat number={3000} label="Operaciones anuales" />
          <Stat number={75} label="Países conectados" />
          <Stat number={365} label="Días al año operando" />

        </div>
      </div>

    </section>
  )
}

function Stat({ number, label }: { number: number; label: string }) {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4
  })

  return (
    <div
      ref={ref}
      className={`relative flex flex-col items-center gap-2 px-4 transition-all duration-700 
      ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >

      <h3 className="text-4xl md:text-5xl font-bold text-sand">
        {inView && (
          <CountUp
            end={number}
            duration={2}
            prefix="+"
            separator=","
          />
        )}
      </h3>

      <p className="text-sm text-gray-300">
        {label}
      </p>

    </div>
  )
}