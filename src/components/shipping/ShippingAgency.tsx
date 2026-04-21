"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container, Eye, Languages, Ship, Users } from "lucide-react";

export default function ShippingAgency() {
  const capacities = [
    {
      icon: Ship,
      title: "Atención a diversos tipos de buques",
      desc: "Bulk carriers, buques multipropósito, Roll-on/Roll-off (Ro/Ro), portacontenedores y buques pesqueros.",
    },
    {
      icon: Container,
      title: "Gestión de múltiples tipos de carga",
      desc: "Graneles, productos agrícolas, productos siderúrgicos, fertilizantes, contenedores, carga de proyecto, vehículos y carga general.",
    },
    {
      icon: Eye,
      title: "Seguimiento permanente",
      desc: "Monitoreo continuo de operaciones portuarias cumpliendo con todos los requerimientos operativos y documentales de nuestros clientes.",
    },
    {
      icon: Users,
      title: "Equipo especializado",
      desc: "Staff de profesionales con amplia experiencia y la infraestructura necesaria para asegurar operaciones portuarias eficientes.",
    },
    {
      icon: Languages,
      title: "Capacidad multilingüe",
      desc: "Personal bilingüe español/inglés, con conocimientos adicionales de italiano y portugués para comunicación con tripulaciones y armadores internacionales.",
    },
  ];

  const services = [
    "Servicio de agencia",
    "Coordinación de servicio de prácticos y pilotos de puertos y canales",
    "Servicio de remolcadores y lanchas",
    "Atención a tripulación",
    "Provisión de víveres y provisiones",
    "Manejo y provisión de repuestos y reparaciones",
    "Atención y coordinación de drydock",
    "Bunkering",
    "Operaciones portuarias (carga/descarga)",
  ];

  return (
    <div id="agencia-maritima" className="w-full bg-white font-sans overflow-hidden">

      <div className="relative w-full min-h-187.5 flex items-center justify-center p-6 md:p-12 lg:p-20">

        <div className="absolute inset-0 z-0">
          <Image
            src="/images/shipping/shipping-agenciaMaritima.jpg"
            alt="Agencia Marítima"
            fill
            className="object-cover shadow-inner"
          />

          <div className="absolute inset-0 bg-linear-to-r from-[#1a4731]/80 via-[#1a4731]/70 to-black/40" />
        </div>


        <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">

          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-white flex flex-col justify-center space-y-6"
          >
            <div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7 }}
                className="h-1 bg-shippingComplementario mb-6"
              />

              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-tight mb-4">
                Agencia Marítima
              </h2>

              <p className="text-base md:text-lg text-white/80 max-w-md font-light leading-relaxed">
                Ofrecemos todos los servicios portuarios para atención de buques y
                cargas en los principales puertos argentinos.
              </p>
            </div>

            <h3 className="text-white font-semibold text-lg pt-4">
              Nuestra capacidad de agencia marítima incluye:
            </h3>

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
              className="grid grid-cols-1 gap-5 pt-6 border-t border-white/10"
            >
              {capacities.map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    show: { opacity: 1, y: 0 },
                  }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.45 }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 group"
                >
                  <item.icon className="w-6 h-6 text-shippingComplementario transition-transform group-hover:scale-110 shrink-0 mt-1" />

                  <div>
                    <p className="font-bold text-xs uppercase tracking-wider">
                      {item.title}
                    </p>

                    <p className="text-xs text-white/60 leading-tight">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-2xl shadow-2xl flex flex-col justify-center"
          >
            <h3 className="text-lg md:text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
              Servicios Ofrecidos en Puertos Argentinos
            </h3>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
              className="grid grid-cols-1 gap-2"
            >
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.35 }}
                  viewport={{ once: false }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 py-2.5 px-4 rounded-lg hover:bg-white/5 transition-colors group cursor-default"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-shippingComplementario group-hover:scale-125 transition-all" />

                  <span className="text-xs md:text-sm font-medium text-white/90 uppercase tracking-wide">
                    {service}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}