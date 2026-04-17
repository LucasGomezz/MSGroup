"use client"
import { motion } from "framer-motion"
import { ArrowRight, Ship, Box, FileText, Globe2, Anchor } from "lucide-react"

export default function IntroForwarding() {
  return (
    <section className="relative bg-[#f8f9fa] text-[#1a1a1a] py-16 lg:py-24 overflow-hidden">
      
      {/* Marca de agua náutica de fondo */}
      <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none">
        <Anchor size={500} strokeWidth={1} className="-mr-24 -mt-24 rotate-12" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Contenedor Principal con estilo de bloque industrial */}
        <div className="grid lg:grid-cols-12 gap-0 border border-gray-200 bg-white shadow-xl overflow-hidden rounded-2xl">
          
          {/* LADO IZQUIERDO: Visual con enfoque en transporte */}
          <div className="lg:col-span-5 relative min-h-[500px] bg-[#002147]">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#002147] via-transparent to-transparent opacity-90" />
            
            <img 
              src="/images/fowarding/operaciones-logisticas.jpg"
              alt="Operaciones Logísticas"
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
            />
            
            <div className="absolute inset-0 flex flex-col justify-end p-10 text-white z-20">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                transition={{ duration: 0.8 }}
                className="h-1 bg-blue-500 mb-6" 
              />
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-black uppercase tracking-tighter leading-none mb-4"
              >
                Infraestructura <br /> de Carga
              </motion.h3>
              <p className="text-blue-200 text-xs font-bold uppercase tracking-[0.3em]">
                Global Forwarding Network
              </p>
            </div>
          </div>

          {/* LADO DERECHO: Texto Editorial y Corporativo */}
          <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center">
            
            <div className="space-y-8">
              {/* Badge de Trayectoria */}
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3"
              >
                <span className="h-[2px] w-6 bg-[#002147]" />
                <span className="text-[#002147] font-extrabold text-xs uppercase tracking-[0.2em]">
                  MS Forwarding • Est. 1990
                </span>
              </motion.div>

              {/* Título Principal */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-black text-[#111] leading-[1.1] tracking-tight"
              >
                Más de 30 años <br /> 
                <span className="text-[#002147]">en el mercado.</span>
              </motion.h2>

              {/* Descripción */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Ofrecemos soluciones integrales de transporte y logística internacional, gestión aduanera y documental y seguro de mercadería con un enfoque personalizado que prioriza la eficiencia operativa y la transparencia en cada etapa del proceso logístico.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Como agentes de carga internacional especializados, coordinamos el movimiento de mercaderías, brindando a nuestros clientes visibilidad completa de sus envíos y respuesta ágil ante cualquier requerimiento.
                </p>

                {/* Grid de servicios con iconos limpios */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-100">
                  {[
                    { icon: Ship, label: "Marítimo" },
                    { icon: Globe2, label: "Aéreo" },
                    { icon: Box, label: "Terrestre" },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center md:items-start gap-2">
                      <item.icon size={24} className="text-[#002147]" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Botón de Acción */}
                <div className="pt-8">
                  <button className="group relative bg-[#002147] text-white px-10 py-4 font-bold text-xs uppercase tracking-[0.2em] transition-all hover:bg-black hover:pl-12 flex items-center gap-4 rounded-xl">
                    Explorar Servicios
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                  </button>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Detalle inferior: Estilo Manifiesto de Aduana */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-gray-400 uppercase tracking-[0.3em] px-2"
        >
          <div className="flex items-center gap-4">
            <span>2026</span>
            <span className="hidden md:block">|</span>
            <span>MS-Group</span>
          </div>
          <p>Visibilidad • Respuesta Ágil • Seguridad</p>
        </motion.div>
      </div>
    </section>
  )
}