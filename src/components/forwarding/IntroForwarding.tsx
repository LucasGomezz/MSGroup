"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Ship, Plane, Truck, Anchor } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import content from "./IntroForwarding.i18n.json";

export default function IntroForwarding() {
  const { language } = useLanguage();
  const t = content[language];

  const transports = [
    { icon: Ship, label: t.transporteMaritimo },
    { icon: Plane, label: t.transporteAereo },
    { icon: Truck, label: t.transporteTerrestre },
  ];

  return (
    <section className="relative bg-[#f8f9fa] text-[#1a1a1a] py-16 lg:py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        whileInView={{ opacity: 0.03, rotate: 12 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 right-0 pointer-events-none"
      >
        <Anchor size={500} strokeWidth={1} className="-mr-24 -mt-24" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-0 border border-gray-200 bg-white shadow-xl overflow-hidden rounded-2xl">
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative min-h-125 bg-[#002147]"
          >
            <div className="absolute inset-0 z-10 bg-linear-to-t from-[#002147] via-transparent to-transparent opacity-90" />

            <Image
              src="/images/forwarding/operaciones-logisticas.jpg"
              alt="Operaciones Logísticas"
              fill
              className="object-cover grayscale contrast-125"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-10 text-white z-20">

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="h-1 bg-blue-500 mb-6"
              />

              <motion.h3
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="text-4xl font-black uppercase tracking-tighter leading-none mb-4"
              >
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3 }}
                className="text-blue-200 text-xs font-bold uppercase tracking-[0.3em]"
              >
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center"
          >
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="flex items-center gap-3"
              >
                <span className="h-0.5 w-6 bg-[#002147]" />

                <span className="text-[#002147] font-extrabold text-xs uppercase tracking-[0.2em]">
                  {t.eyebrow}
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.1, duration: 0.55 }}
                className="text-4xl md:text-5xl font-black text-[#111] leading-[1.1] tracking-tight"
              >
                {t.headingLine1} <br />
                <span className="text-[#002147]">{t.headingLine2}</span>
              </motion.h2>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.12,
                    },
                  },
                }}
                className="space-y-6"
              >
                {[
                  <>
                    {t.parrafo1_antes}{" "}
                    <strong>{t.parrafo1_personalizado}</strong> {t.parrafo1_que_prioriza} <strong>{t.parrafo1_eficiencia}</strong>{" "}
                    <strong>{t.parrafo1_operativa}</strong> {t.parrafo1_y_la} <strong>{t.parrafo1_transparencia}</strong>{" "}
                    {t.parrafo1_despues}
                  </>,
                  <>
                    {t.parrafo2_antes}{" "}
                    <strong>{t.parrafo2_coordinamos}</strong> {t.parrafo2_el_movimiento}{" "}
                    <strong>{t.parrafo2_aerea}</strong>, <strong>{t.parrafo2_marítima}</strong> {t.parrafo2_y}{" "}
                    <strong>{t.parrafo2_terrestre}</strong>, {t.parrafo2_despues}
                  </>,
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 18 },
                      show: { opacity: 1, y: 0 },
                    }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    className="text-lg text-gray-600 leading-relaxed max-w-xl"
                  >
                    {text}
                  </motion.p>
                ))}

                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false }}
                  variants={{
                    hidden: {},
                    show: {
                      transition: {
                        staggerChildren: 0.08,
                      },
                    },
                  }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-100"
                >
                  {transports.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={{
                        hidden: { opacity: 0, y: 18 },
                        show: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.45 }}
                      whileHover={{ y: -4 }}
                      className="flex flex-col items-center md:items-start gap-2"
                    >
                      <item.icon size={24} className="text-[#002147]" />

                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}