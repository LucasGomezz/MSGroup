"use client";

import { motion } from "framer-motion";
import { FaGlobe, FaTools, FaShip, FaBalanceScale } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import Image from "next/image";

export default function ShippingShipManagment() {
  const items = [
    {
      icon: <GiTakeMyMoney />,
      title: "Maximización de Rentabilidad",
      text: "Gestionamos todo tipo de contratos de cargas, buscando negociar el mayor beneficio para nuestros clientes.",
    },
    {
      icon: <FaBalanceScale />,
      title: "Términos Competitivos",
      text: "Negociamos términos contractuales óptimos según las condiciones vigentes del mercado para cada tipo de carga y tráfico.",
    },
    {
      icon: <MdSecurity />,
      title: "Gestión de Riesgos",
      text: "Analizamos cuidadosamente cada viaje para minimizar riesgos y explorar oportunidades en nuevas rutas y mercados..",
    },
    {
      icon: <FaGlobe />,
      title: "Red Global",
      text: "Monitoreamos en tiempo real las condiciones de mercado y mantenemos contacto directo con productores, traders y operadores globales, lo que nos permite identificar las mejores oportunidades de empleo para cada buque.",
    },
    {
      icon: <FaTools />,
      title: "Mantenimiento y Costos",
      text: "Cubrimos todos los requerimientos y necesidades de los armadores manteniendo los buques con altos estándares técnicos y operativos, optimizando costos sin comprometer la calidad del servicio.",
    },
    {
      icon: <FaShip />,
      title: "Servicios Preferenciales",
      text: "Accedemos a las mejores alternativas para la contratación de bunkers, agencias marítimas, tripulación, seguros, reparaciones y demás servicios relacionados con el manejo de buques.",
    },
  ];

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
          className="relative w-full h-105 md:h-auto rounded-2xl overflow-hidden shadow-md"
        >
          <Image
            src="/images/shipping/shipping-operacionDeBuques.jpg"
            alt="Operación de Buques"
            fill
            className="object-cover"
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
              Ship Management
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight max-w-md">
              Operación de Buques
            </h2>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-white/90 max-w-md">
              Gestionamos la operación integral para diversos armadores internacionales,
              especializándonos en buques Bulk Carrier, Multipropósito y Roll-on/Roll-off,
              entre otros.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}