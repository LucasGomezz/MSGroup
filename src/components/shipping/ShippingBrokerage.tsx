"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  HiOutlineBadgeCheck,
  HiOutlineGlobeAlt,
  HiOutlineLink,
  HiOutlineLocationMarker,
  HiOutlinePresentationChartLine,
  HiOutlineShieldCheck,
  HiOutlineStatusOnline,
  HiOutlineSwitchHorizontal,
} from "react-icons/hi";

export default function ShippingBrokerage() {
  const items = [
    {
      title: "Red directa de contactos",
      text: "Relaciones establecidas con armadores, operadores, productores, traders, importadores y exportadores a nivel global.",
      icon: <HiOutlineGlobeAlt />,
    },
    {
      title: "Experiencia en puertos",
      text: "Amplio conocimiento de operaciones portuarias en todo el mundo, con especialización en Latinoamérica.",
      icon: <HiOutlineLocationMarker />,
    },
    {
      title: "Cooperación internacional",
      text: "Canales activos con los principales brokers y operadores del mercado mundial.",
      icon: <HiOutlineLink />,
    },
    {
      title: "Negociación especializada",
      text: "Gestionamos todo tipo de contratos de cargas, buscando obtener el mayor beneficio para nuestros clientes negociando términos contractuales óptimos según las condiciones vigentes del mercado para cualquier tipo de carga y tráfico.",
      icon: <HiOutlinePresentationChartLine />,
    },
    {
      title: "Asesoramiento integral",
      text: "Asistencia completa a clientes, desde la negociación hasta el seguimiento post-cierre de contratos.",
      icon: <HiOutlineSwitchHorizontal />,
    },
    {
      title: "Expertise en operaciones",
      text: "Como operadores de buques, calculamos costos y utilidades de viaje para contratos de chárter.",
      icon: <HiOutlineStatusOnline />,
    },
    {
      title: "Compra y venta de buques",
      text: "Intervención activa en operaciones de brokerage de compraventa de embarcaciones.",
      icon: <HiOutlineShieldCheck />,
    },
    {
      title: "Confianza internacional",
      text: "Presencia consolidada en mercados internacionales competitivos contando con la confianza de clientes de primer nivel que renuevan su confianza año a año.",
      icon: <HiOutlineBadgeCheck />,
    },
  ];

  return (
    <div id="servicios-brokerage-cargas" className="w-full bg-[#f8faf9] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-3 gap-12 items-start ">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-1 space-y-6 lg:sticky lg:top-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
              Brokerage Maritimo
            </h2>

            <div className="w-32 h-1 bg-shippingPrincipal mx-auto mb-8" />

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: false, amount: 0.15 }}
              className="pt-4"
            >
              <div className="relative rounded-2xl overflow-hidden w-full h-64">
                <Image
                  src="/images/shipping/reunionOficina.jpg"
                  alt="Brokerage Marítimo"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-[#3A6657]"
            >
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Nuestro departamento de brokerage da respuesta inmediata a todos
                los requerimientos de transporte posibilitando el acercamiento
                entre las posiciones de cargas y buques en cualquier puerto del
                mundo, actuando como intermediarios entre armadores y cargadores.
              </p>

              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Gracias a nuestra vasta experiencia en cierres de contratos de carga (Charter Party) y buques de todo tipo, contamos con la capacidad y el conocimiento necesario para gestionar cualquier tipo de contratos de cargas, buscando obtener el mayor beneficio para nuestros clientes mediante la negociación de términos contractuales óptimos según las condiciones vigentes del mercado para cada tipo de carga y tráfico.
              </p>

              <p className="text-gray-600 text-base leading-relaxed">
                Mantenemos información actualizada en tiempo real sobre
                posiciones de buques y requerimientos de cargas a nivel global,
                lo que nos permite ofrecer alternativas inmediatas a nuestros
                clientes.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.07,
                  },
                },
              }}
              className="grid sm:grid-cols-2 gap-x-10 gap-y-10"
            >
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 28 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  whileHover={{ y: -4 }}
                  className="relative pl-16 group"
                >
                  <div className="absolute left-0 top-0 w-12 h-12 flex items-center justify-center text-2xl text-shippingPrincipal bg-white shadow-sm rounded-xl group-hover:bg-shippingPrincipal group-hover:text-white transition-all duration-300 border border-gray-100">
                    {item.icon}
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-shippingPrincipal transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}