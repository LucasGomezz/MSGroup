"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function TradingBrokerage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false },
    transition: { duration: 0.6 },
  };

  const items = [
    { title: "Identificación de compradores", desc: "Potenciales según producto y mercado objetivo" },
    { title: "Negociación comercial", desc: "Términos, precios, volúmenes e Incoterms" },
    { title: "Estructuración legal", desc: "Contratos internacionales sólidos" },
    { title: "Seguimiento", desc: "Cumplimiento de obligaciones contractuales" },
    { title: "Gestión de crisis", desc: "Resolución de contingencias comerciales" },
  ];

  return (
    <div className="bg-[#777777] py-28 px-6 text-white relative">
      <div className="max-w-6xl mx-auto">

        <motion.div {...fadeInUp} className="mb-16">
          <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
            Brokerage Comercial
          </h3>

          <p className="text-xl md:text-2xl text-[#F4F1E8]/80 max-w-3xl font-light">
            Facilitamos el encuentro entre compradores y vendedores a nivel internacional, actuando como intermediarios que garantizan <strong>transparencia, seguridad y cumplimiento</strong>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="md:col-span-2 grid gap-4">
            <p className="text-[#70A4DC] font-bold uppercase tracking-widest text-sm mb-2">
              Servicios de brokerage:
            </p>

            {items.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 p-6 bg-black/10 border-l-4 border-[#70A4DC] hover:bg-black/20 transition-all"
              >
                <span className="text-[#70A4DC] font-black text-xl">
                  0{i + 1}
                </span>

                <div>
                  <h4 className="font-bold text-lg uppercase tracking-tight">
                    {item.title}
                  </h4>

                  <p className="text-[#F4F1E8]/70 font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-[#5C5C5C] p-10 rounded-3xl border border-white/10 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
              <Briefcase size={80} />
            </div>

            <h4 className="text-[#70A4DC] font-black text-2xl mb-6">
              Nuestro valor agregado como brokers
            </h4>

            <p className="text-[#F4F1E8] font-light leading-relaxed">
              Reside en la red de contactos consolidada a lo largo de más de tres décadas.
            </p>

            <div className="mt-8 pt-8 border-t border-white/10 italic text-[#8C8C8C]">
              Más de 35 años de confianza global
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}