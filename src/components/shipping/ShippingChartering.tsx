"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import content from "./ShippingChartering.i18n.json";

export default function ShippingCherating() {
  const { language } = useLanguage();
  const t = content[language];

  const contractTypes = t.contractTypes;
  const traffics = t.traffics;

  return (
    <div id="cherating" className="relative w-full min-h-150 flex items-center justify-center overflow-hidden">

      <Image
        src="/images/shipping/ship-management.jpeg"
        alt="Chartering background"
        fill
        className="absolute inset-0 object-cover"
      />

      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.heading}
          </h2>

          <div className="w-24 h-1 bg-shippingComplementario mx-auto mb-8" />

          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-5xl mx-auto font-light leading-relaxed px-4">
            {t.intro_antes}{" "}
            <span className="font-medium text-white">{t.intro_voyageCharter}</span> {t.intro_yPorTiempo}{" "}
            <span className="font-medium text-white">{t.intro_timeCharter}</span>{" "}
            {t.intro_despues}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20"
          >
            <h3 className="text-shippingComplementario font-bold mb-6 uppercase text-xl tracking-[0.2em] flex items-center gap-2">
              <span className="w-8 h-0.5 bg-shippingComplementario" />
              {t.tiposDeContratos}
            </h3>

            <ul className="grid grid-cols-1 gap-4">
              {contractTypes.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.45,
                  }}
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-4 text-white/90 group"
                >
                  <div className="w-2 h-2 mt-2 rounded-full bg-shippingComplementario group-hover:scale-150 transition-transform" />

                  <span className="text-lg">
                    <span className="font-semibold text-white">
                      {item.title}
                    </span>{" "}
                    <span className="text-white/80">{item.desc}</span>
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20"
          >
            <h3 className="text-shippingComplementario font-bold mb-6 uppercase text-xl tracking-[0.2em] flex items-center gap-2">
              <span className="w-8 h-0.5 bg-shippingComplementario" />
              {t.traficosPrincipales}
            </h3>

            <ul className="grid grid-cols-1 gap-4">
              {traffics.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.45,
                  }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 text-white/90 group"
                >
                  <div className="w-2 h-2 rounded-full bg-shippingComplementario group-hover:scale-150 transition-transform" />

                  <span className="text-lg font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </div>
  );
}