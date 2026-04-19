"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const slowZoomStyle = `
@keyframes slowZoom {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.08); }
}
`;

interface ServiceItem {
  title: string;
  description: string;
  items: string[];
  descriptionn: string;
  image: string;
  icon: React.ReactNode;
  tag: string;
}

const IconShip = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none">
    <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    <path d="M19.38 20.51a11.5 11.5 0 0 0-14.76 0" />
    <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
    <path d="M12 12v9" />
    <path d="M12 7v5" />
    <path d="M5 12h14" />
  </svg>
);

const IconPlane = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none">
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
  </svg>
);

const IconTruck = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none">
    <path d="M10 17h4V5H2v12h3m10 0h2l4 4h-8v-4z" />
    <circle cx="7" cy="17" r="2" />
    <circle cx="17" cy="17" r="2" />
  </svg>
);

const ServiceCard = ({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.12 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-10 md:gap-14 lg:gap-16 items-center py-14 sm:py-16 lg:py-20 relative overflow-hidden`}
    >
      <div className="flex-1 z-10 space-y-6 sm:space-y-8 w-full">

        <div className="space-y-3 sm:space-y-4">
          <motion.span
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.05 }}
            className="inline-block px-3 py-1 text-[10px] sm:text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full"
          >
            {service.tag}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.12 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tighter"
          >
            {service.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.18 }}
            className="text-base sm:text-lg lg:text-xl text-slate-500 font-medium leading-relaxed max-w-xl"
          >
            {service.description}
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.05 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
        >
          {service.items.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -2 }}
              className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-slate-50 border border-slate-100"
            >
              <div className="text-blue-500 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>

              <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                {item}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {service.descriptionn && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.25 }}
            className="text-base sm:text-lg lg:text-xl text-slate-500 font-medium leading-relaxed max-w-xl"
          >
            {service.descriptionn}
          </motion.p>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
        whileHover={{ y: -4 }}
        className="flex-1 relative w-full"
      >
        <div className="relative aspect-4/3 rounded-3xl sm:rounded-[2.5rem] overflow-hidden border-4 sm:border-8 border-white shadow-2xl">

          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            style={{
              animation: `slowZoom ${12 + index * 2}s ease-in-out infinite`,
            }}
          />

          <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent opacity-40" />

          <motion.div
            whileHover={{ scale: 1.08, rotate: 4 }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 sm:w-16 sm:h-16 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-blue-600 shadow-xl border border-white/20"
          >
            {service.icon}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function TransporteContent() {
  const services: ServiceItem[] = [
    {
      tag: "Ocean Freight",
      title: "Transporte Marítimo Internacional",
      description:
        "Gestionamos fletes marítimos FCL (contenedor completo) y LCL (consolidado) hacia y desde cualquier puerto del mundo.",
      items: [
        "Contenedores secos (20', 40', 40'HC)",
        "Contenedores refrigerados (reefer)",
        "Flat racks y open tops",
        "Consolidación LCL",
      ],
      descriptionn:
        "Mantenemos acuerdos comerciales directos con las principales navieras internacionales.",
      image: "/images/forwarding/forwarding.png",
      icon: <IconShip />,
    },
    {
      tag: "Air Solutions",
      title: "Transporte Aéreo Internacional",
      description:
        "Coordinamos embarques aéreos para cargas urgentes o de alto valor.",
      items: [
        "Vuelos directos y conexiones",
        "Cargas consolidadas",
        "Perecederos",
        "Carga peligrosa IATA",
        "Tracking completo",
      ],
      descriptionn:
        "Relaciones comerciales con principales aerolíneas.",
      image: "/images/forwarding/transporteAereo.png",
      icon: <IconPlane />,
    },
    {
      tag: "Land Network",
      title: "Transporte Terrestre",
      description:
        "Servicios door-to-door en Argentina y países limítrofes.",
      items: [
        "Carga completa (FTL)",
        "Carga consolidada (LTL)",
        "Vehículos especializados",
        "GPS en tiempo real",
        "Cobertura de seguros",
      ],
      descriptionn: "",
      image: "/images/forwarding/transporteTerrestre.jpg",
      icon: <IconTruck />,
    },
  ];

  return (
    <section className="bg-white overflow-hidden">
      <style>{slowZoomStyle}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.75 }}
          className="pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[0.95]">
            Soluciones de <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
              Transporte Inteligente.
            </span>
          </h1>
        </motion.div>

        <div className="divide-y divide-slate-100">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}