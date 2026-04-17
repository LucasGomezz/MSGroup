"use client"
import { useInView } from "react-intersection-observer"
import { Zap, Handshake, MapPin, DollarSign } from "lucide-react"

export default function StatsForwarding() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  const items = [
    { icon: Zap, text: "Cotización en 24hs" },
    { icon: Handshake, text: "Ejecutivo dedicado" },
    { icon: MapPin, text: "Tracking en tiempo real" },
    { icon: DollarSign, text: "Sin costos ocultos" }
  ]

  return (
    <section ref={ref} className="bg-navy text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex justify-between items-center gap-6 text-base md:text-lg">

          {items.map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 whitespace-nowrap transition-all duration-700 ease-out
                ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <item.icon className="w-6 h-6 text-sand transition-transform duration-300 hover:scale-110" />

              <span className="text-gray-200 font-medium">
                {item.text}
              </span>

              {i !== items.length - 1 && (
                <span className="text-gray-500 mx-3">|</span>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}