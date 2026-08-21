"use client";

import { motion } from "framer-motion";
import { FaGlobe, FaTools, FaShip, FaBalanceScale } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import content from "./ShippingShipManagement.i18n.json";

export default function ShippingShipManagment() {
  const { language } = useLanguage();
  const t = content[language];

  const icons = [
    <GiTakeMyMoney key={0} />,
    <FaBalanceScale key={1} />,
    <MdSecurity key={2} />,
    <FaGlobe key={3} />,
    <FaTools key={4} />,
    <FaShip key={5} />,
  ];

  const items = t.items.map((item, i) => ({ ...item, icon: icons[i] }));

  return (
    <div id="operacion-buques" className="w-full bg-shippingPrincipal py-16 px-6 md:px-12 lg:px-16">

      <div className="grid md:grid-cols-2 gap-10 items-stretch">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              viewport={{ once: false, amount: 0.2 }}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-shippingPrincipal/10 text-shippingPrincipal p-2 rounded-lg text-lg flex items-center justify-center transition-all duration-300 group-hover:bg-shippingPrincipal group-hover:text-white">
                  {item.icon}
                </div>

                <h4 className="text-lg font-semibold text-gray-900 leading-snug">
                  {item.title}
                </h4>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full min-h-190 md:min-h-0 md:h-auto rounded-2xl overflow-hidden shadow-md"
        >
          <Image
            src="/images/shipping/ship-managementt.jpeg"
            alt="Operación de Buques"
            fill
            className="object-cover grayscale opacity-60"
          />

          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/80" />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="absolute inset-0 flex flex-col justify-center px-6 md:px-10 lg:px-12 text-white"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-white/70">
              {t.eyebrow}
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight max-w-md lg:max-w-none">
              {t.heading}
            </h2>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-white/90 max-w-md lg:max-w-none">
              {t.parrafo1}
            </p>
            <span></span>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-white/90 max-w-md lg:max-w-none">
              {t.parrafo2}
            </p>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}