"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CardsServicios() {
  const services = [
    {
      title: "Servicios Multimodales",
      description:
        "Diseñamos soluciones logísticas que combinan diferentes modos de transporte (marítimo + terrestre, aéreo + terrestre) para optimizar tiempos y costos según las características de cada operación. Nuestra experiencia como operadores multimodales nos permite coordinar eficientemente cada tramo del trayecto, minimizando tiempos de espera y asegurando la trazabilidad completa del envío.",
      items: [],
    },
    {
      title: "Cargas de Proyecto",
      description:
        "Contamos con expertise especializado en el manejo de cargas sobredimensionadas, equipamiento industrial y proyectos que requieren coordinación logística compleja.",
      items: [
        "Evaluación técnica de factibilidad",
        "Planificación de rutas especiales",
        "Coordinación de permisos y autorizaciones",
        "Equipamiento especializado (flat racks, break bulk)",
        "Seguros específicos para cargas de alto valor",
      ],
    },
    {
      title: "Depósito Fiscal y Logística",
      description:
        "Ofrecemos servicios de almacenaje en depósito fiscal para mercaderías de importación y exportación, permitiendo la optimización de tiempos y gestión de inventarios.",
      items: [
        "Almacenaje en depósito fiscal habilitado por aduana",
        "Gestión de stock y control de inventario",
        "Fraccionamiento y reembalaje",
        "Preparación de pedidos (picking & packing)",
        "Distribución desde depósito",
      ],
    },
    {
      title: "Despacho Aduanero",
      description:
        "Trabajamos con una red de despachantes de aduana altamente calificados que gestionan todos los trámites de importación y exportación ante AFIP, SENASA, ANMAT y demás organismos de control.",
      items: [
        "Asesoramiento integral en materia aduanera",
        "Gestión aduanera en diferentes aduanas del pais",
        "Clasificación arancelaria de mercaderías",
        "Verificación de documentación comercial",
        "Tramitación de licencias",
        "Gestión de permisos especiales (SENASA, ANMAT, otros)",
        "Representación ante autoridades aduaneras",
      ],
    },
    {
      type: "vignette",
      image: "/images/forwarding/vignetteAtardecer.jpg",
    },
    {
      title: "Seguros de Carga",
      description:
        "Coordinamos la contratación de seguros de transporte internacional adaptados al valor y características de cada mercadería, con cobertura desde origen hasta destino final.",
      items: [
        "Seguros específicos de transporte según el tipo de mercadería",
        "Tramitación de siniestros",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-350 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.75 }}
          className="border-l-12 border-forwardingPrincipal pl-8 mb-16"
        >
          <h2 className="text-6xl font-black text-forwardingPrincipal uppercase tracking-tighter">
            Servicios <br />
            <span className="text-gray-300">Portuarios</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.08 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-gray-100"
        >
          {services.map((service, i) => {

            if (service.type === "vignette") {
              return (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, scale: 0.96 },
                    show: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.65 }}
                  whileHover={{ y: -4 }}
                  className="relative group h-100 md:h-auto overflow-hidden border-b border-gray-100 md:border-b-0"
                >
                  <Image
                    src={service.image}
                    alt="Operación Marítima"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                  />

                  <div className="absolute inset-0 bg-forwardingPrincipal/5 group-hover:bg-transparent transition-colors duration-500" />
                </motion.div>
              );
            }

            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 35 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.55 }}
                whileHover={{ y: -4 }}
                className="group bg-white border-b border-gray-100 p-12 flex flex-col justify-between hover:bg-forwardingPrincipal transition-all duration-300 ease-in-out min-h-100"
              >
                <div>
                  <span className="text-[--forwardingComplementario] font-mono font-bold text-sm tracking-[0.3em] uppercase block mb-6 transition-colors duration-300 group-hover:text-[--forwardingSecundario]">
                    Sector_0{i + 1}
                  </span>

                  <h3 className="text-3xl font-bold text-forwardingPrincipal group-hover:text-white leading-none uppercase mb-6 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 group-hover:text-white text-lg leading-snug transition-colors duration-300 font-light">
                    {service.description}
                  </p>
                </div>

                {service.items && service.items.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.15 }}
                    className="mt-8 pt-8 border-t border-gray-100 group-hover:border-white/20 transition-colors duration-300"
                  >
                    <ul className="grid grid-cols-1 gap-3">
                      {service.items.map((item: string, idx: number) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.03 }}
                          className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors duration-300 flex items-center gap-3"
                        >
                          <div className="w-5 h-0.5 bg-[--forwardingComplementario] flex-none" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}