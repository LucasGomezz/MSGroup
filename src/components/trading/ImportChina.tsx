"use client";

import { motion } from "framer-motion";
import { Search, ClipboardCheck, Settings, Ship } from "lucide-react";

export default function ImportChina() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false },
    transition: { duration: 0.6 },
  };

  const steps = [
    {
      icon: Search,
      title: "Buscar",
      desc: "Identificamos proveedores y productos según tus necesidades.",
    },
    {
      icon: ClipboardCheck,
      title: "Evaluar",
      desc: "Analizamos las alternativas disponibles y las condiciones de compra.",
    },
    {
      icon: Settings,
      title: "Gestionar",
      desc: "Coordinamos la compra, documentación y logística internacional.",
    },
    {
      icon: Ship,
      title: "Importar",
      desc: "Acompañamos el proceso hasta que tu mercadería llega a destino.",
    },
  ];

  return (
    <div id="importar-desde-china" className="bg-[#F4F1E8] py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div {...fadeInUp} className="mb-16 max-w-3xl">
          <h3 className="text-[#23262A] text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
            ¿Querés importar <br />
            <span className="text-[#70A4DC]">productos desde China?</span>
          </h3>

          <p className="text-xl text-[#4A5158] font-light border-l-8 border-[#70A4DC] pl-8 py-2">
            Te acompañamos de principio a fin para que puedas importar de forma simple, segura y eficiente. Contamos con operadores en China y otros mercados estratégicos que nos permiten buscar y evaluar proveedores en origen, identificar las mejores alternativas para tu negocio y gestionar toda la operación.
          </p>
        </motion.div>

        <p className="text-[#70A4DC] font-bold uppercase tracking-widest text-sm mb-8">
          Nos ocupamos de:
        </p>

        <div className="grid md:grid-cols-4 gap-4 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-3xl border border-[#7E868D]/10 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <step.icon className="text-[#70A4DC]" size={32} />
                <span className="text-[#23262A]/10 font-black text-4xl">
                  0{i + 1}
                </span>
              </div>

              <h4 className="text-[#23262A] font-bold text-lg uppercase tracking-tight">
                {step.title}
              </h4>

              <p className="text-[#4A5158] font-light leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="bg-[#23262A] rounded-3xl p-10 md:p-12 text-center"
        >
          <p className="text-white text-2xl md:text-3xl font-light leading-snug">
            Vos definís qué querés importar. <br className="hidden md:block" />
            <span className="text-[#70A4DC] font-bold">Nosotros nos ocupamos del resto.</span>
          </p>
        </motion.div>

      </div>
    </div>
  );
}
