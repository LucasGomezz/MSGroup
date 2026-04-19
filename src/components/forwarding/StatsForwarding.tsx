"use client";

import { motion } from "framer-motion";
import { Zap, Handshake, MapPin, DollarSign } from "lucide-react";

export default function StatsForwarding() {
  const items = [
    { icon: Zap, text: "Cotización en 24hs" },
    { icon: Handshake, text: "Ejecutivo dedicado" },
    { icon: MapPin, text: "Tracking en tiempo real" },
    { icon: DollarSign, text: "Sin costos ocultos" },
  ];

  return (
    <section className="bg-navy text-white py-14 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row justify-between items-center gap-4 sm:gap-5 lg:gap-6 text-sm sm:text-base md:text-lg"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              whileHover={{ y: -3 }}
              className="flex items-center justify-center lg:justify-start gap-3 whitespace-nowrap w-full sm:w-auto py-3"
            >
              <motion.div
                whileHover={{ scale: 1.12, rotate: 4 }}
                transition={{ duration: 0.25 }}
              >
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-sand" />
              </motion.div>

              <span className="text-gray-200 font-medium">
                {item.text}
              </span>

              {i !== items.length - 1 && (
                <span className="hidden lg:block text-gray-500 mx-3">|</span>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}