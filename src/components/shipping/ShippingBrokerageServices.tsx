"use client";

import { motion } from "framer-motion";
import {
  FaBalanceScale,
  FaGlobe,
  FaHandshake,
  FaShip,
} from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";

export default function ShippingBrokerageServices() {
  const services = [
    {
      icon: <FaShip size={18} />,
      text: "Búsqueda de buques disponibles según requerimiento de carga",
    },
    {
      icon: <FaGlobe size={18} />,
      text: "Búsqueda de cargas para buques disponibles",
    },
    {
      icon: <FaHandshake size={18} />,
      text: "Negociación de términos de charter party",
    },
    {
      icon: <FaBalanceScale size={18} />,
      text: "Asesoramiento en cálculo de costos de viaje",
    },
    {
      icon: <GiTakeMyMoney size={18} />,
      text: "Compra y venta de buques",
    },
  ];

  return (
    <section className="w-full bg-[#f8faf9] py-16 px-6">

      <div className="max-w-6xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-shippingPrincipal">
            Servicios de brokerage
          </h2>

          <div className="w-16 h-1 bg-shippingPrincipal mx-auto mt-3 rounded-full" />
        </motion.div>

        <div className="mt-16 relative">

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-shippingPrincipal/30 origin-left"
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.15 }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.09,
                },
              },
            }}
            className="grid md:grid-cols-5 gap-10 relative"
          >
            {services.map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="flex flex-col items-center text-center gap-4 group relative"
              >

                <div
                  className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-shippingPrincipal bg-white text-shippingPrincipal group-hover:bg-shippingPrincipal group-hover:text-white transition-all duration-300 shadow-sm z-10"
                >
                  {item.icon}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed max-w-40">
                  {item.text}
                </p>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}