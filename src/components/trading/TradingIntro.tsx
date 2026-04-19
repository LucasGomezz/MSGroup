"use client";

import { motion } from "framer-motion";

export default function TradingIntro() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false },
    transition: { duration: 0.6 },
  };

  return (
    <div className="relative py-28 px-6 flex flex-col items-center justify-center bg-linear-to-b from-white to-[#F4F1E8]">
      <motion.div {...fadeInUp} className="max-w-4xl text-center">
        <span className="text-[#70A4DC] font-black tracking-[0.3em] uppercase text-xs mb-4 block">
          División Comercio Exterior
        </span>

        <h2 className="text-5xl md:text-7xl font-black text-[#5C5C5C] leading-none mb-8">
          MS <span className="text-[#70A4DC]">TRADING</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-left mt-12 border-t border-[#8C8C8C]/20 pt-10">
          <p className="text-lg md:text-xl text-[#5C5C5C] leading-relaxed font-medium">
            Especializada en la intermediación comercial y el asesoramiento estratégico para empresas que buscan expandir sus operaciones en mercados internacionales.
          </p>

          <p className="text-lg text-[#777777] leading-relaxed font-light">
            Fundada en 1990 junto con el grupo empresarial, MS Trading combina el conocimiento profundo de los mercados globales con la capacidad logística integrada del grupo, ofreciendo soluciones comerciales completas que van desde la identificación de oportunidades hasta la entrega final del producto.
          </p>
        </div>
      </motion.div>

      <div className="absolute -bottom-10 left-10 text-[180px] font-black text-[#5C5C5C]/5 pointer-events-none">
        +35
      </div>
    </div>
  );
}