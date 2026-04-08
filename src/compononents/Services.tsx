"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const services = [
  {
    title: "Shipping",
    subTitle: "Servicios marítimos.",
    description:
      "Especializados en el manejo comercial y operativo de buques como Operadores, Charterers, Agentes Marítimos y Brokers",
    points: [
      "Servicios de Brokerage de Cargas y Buques",
      "Operación de Buques (Ship Management)",
      "Chartering",
      "Servicios de Agencia Marítima",
    ],
    cta: "Consultar servicio",
    image: "/images/shipping.png",
  },
  {
    title: "Forwarding",
    subTitle: "Operaciones aéreas y terrestres.",
    description:
      "Operadora argentina de cargas internacionales por vía marítima, aérea y terrestre desde y hacia cualquier parte del mundo.",
    points: [
      "Transporte Marítimo Internacional",
      "Transporte Aéreo Internacional",
      "Transporte Terrestre",
      "Servicios Multimodales",
      "Cargas de Proyecto",
      "Cargas Break Bulk",
      "Despacho Aduanero",
      "Seguros de Carga",
      "Depósito Fiscal y Logística",
    ],
    cta: "Cotizar envío",
    image: "/images/forwarding.png",
  },
  {
    title: "Trading",
    subTitle: "Logística y comercialización.",
    description:
      "Desarrollo de operaciones de comercio internacional y consultoría integral para empresas exportadoras e importadoras.",
    points: [
      "Trading internacional",
      "Brokerage comercial",
      "Consultoría en comercio exterior",
    ],
    cta: "Iniciar consultoría",
    image: "/images/trading.png",
  },
];

export default function Services() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const activeIndex = useTransform(
    scrollYProgress,
    [0, 0.45, 0.85],
    [0, 1, 2]
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[500vh] bg-[#fdfcf9]"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden px-6 lg:px-32">
        <div className="flex w-full max-w-7xl mx-auto gap-20 items-center">

          {/* 🔥 LADO IZQUIERDO: IMÁGENES */}
          <div className="hidden md:block w-1/2 h-[80vh] relative overflow-hidden rounded-2xl">
            {services.map((service, i) => (
              <ImageTransition
                key={i}
                index={i}
                activeIndex={activeIndex}
                image={service.image}
              />
            ))}
          </div>

          {/* 🔥 LADO DERECHO: TEXTOS */}
          <div className="w-full md:w-1/2 relative h-[80vh]">
            {services.map((service, index) => (
              <ScrollContent
                key={index}
                service={service}
                index={index}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ImageTransition({ image, index, activeIndex }: any) {
  const opacity = useTransform(
    activeIndex,
    [index - 0.5, index, index + 0.5],
    [0, 1, 0]
  );

  const scale = useTransform(
    activeIndex,
    [index - 0.5, index, index + 0.5],
    [1.05, 1, 1.05]
  );

  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0">
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover"
      />

      {/* overlay oscuro */}
      <div className="absolute inset-0 bg-black/30" />

      {/* gradiente pro */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
    </motion.div>
  );
}

function ScrollContent({ service, index, progress }: any) {
  const start = index * 0.33;
  const end = (index + 1) * 0.33;
  const transitionBuffer = 0.05;

  const opacity = useTransform(
    progress,
    [start, start + transitionBuffer, end - transitionBuffer, end],
    [0, 1, 1, 0]
  );

  const fixedOpacity =
    index === 0
      ? useTransform(opacity, (v) => Math.max(v, 0.999))
      : opacity;

  const y = useTransform(
    progress,
    [start, start + transitionBuffer, end - transitionBuffer, end],
    [150, 0, 0, -150]
  );

  const initialOpacity = index === 0 ? 1 : undefined;
  const initialY = index === 0 ? 0 : undefined;

  const zIndex = 10 + index;

  const visibility = useTransform(opacity, (val) =>
    val <= 0 ? "hidden" : "visible"
  );

  const pointerEvents = useTransform(opacity, (val) =>
    val > 0.5 ? "auto" : "none"
  );

  return (
    <motion.div
      style={{
        opacity: fixedOpacity,
        y,
        zIndex,
        visibility,
        pointerEvents,
      }}
      initial={{
        opacity: initialOpacity,
        y: initialY,
      }}
      className="absolute inset-0 flex flex-col justify-center space-y-8"
    >
      <h2 className="text-5xl md:text-7xl font-bold text-navy leading-tight">
        {service.title}
      </h2>

      <div className="space-y-6 max-w-lg">
        <h3 className="text-xl md:text-2xl font-light text-gray-700 italic">
          {service.subTitle}
        </h3>
        <p className="text-base md:text-lg text-gray-600 font-light">
          {service.description}
        </p>
      </div>

      <div
        className={`grid ${
          service.title === "Forwarding"
            ? "grid-cols-2 gap-x-8"
            : "grid-cols-1"
        } gap-y-4 pt-4 border-l-2 border-navy/10 pl-8`}
      >
        {service.points.map((point: string, i: number) => (
          <div key={i} className="flex items-start text-gray-600 group">
            <div className="w-1.5 h-1.5 min-w-[6px] min-h-[6px] bg-orange-600 rounded-full mr-4 mt-2 opacity-30 group-hover:opacity-100 transition-opacity" />
            <span className="text-sm uppercase tracking-wider font-medium opacity-70 group-hover:opacity-100 transition-opacity">
              {point}
            </span>
          </div>
        ))}
      </div>

      <button className="mt-12 group flex items-center gap-6 w-fit cursor-pointer">
        <span className="text-xs font-bold uppercase tracking-[0.4em] text-navy group-hover:text-orange-600 transition-colors">
          {service.cta}
        </span>
        <div className="h-[1.5px] w-12 bg-navy group-hover:w-24 group-hover:bg-orange-600 transition-all duration-500" />
      </button>
    </motion.div>
  );
}