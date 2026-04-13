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
    image: "/images/forwardingg.png",
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
    image: "/images/tradinggg.png",
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
    [0, 0.5, 1],
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      <div className="absolute inset-0 bg-linear-to-r from-black/40 via-black/10 to-transparent" />
    </motion.div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ScrollContent({ service, index, progress }: any) {
  const unit = 1 / (services.length - 1);
  const center = index * unit;
  const buffer = 0.2;

  const opacity = useTransform(
    progress,
    [center - buffer, center, center + buffer],
    [0, 1, 0]
  );

  const fixedOpacity = useTransform(opacity, (v) => {
    if (index === 0 && progress.get() < center) return 1;
    if (index === services.length - 1 && progress.get() > center) return 1;
    return v;
  });

  const y = useTransform(
    progress,
    [center - buffer, center, center + buffer],
    [80, 0, -80]
  );

  const fixedY = useTransform(y, (v) => {
    if (index === 0 && progress.get() < center) return 0;
    if (index === services.length - 1 && progress.get() > center) return 0;
    return v;
  });

  const visibility = useTransform(fixedOpacity, (val) =>
    val <= 0.01 ? "hidden" : "visible"
  );

  const pointerEvents = useTransform(fixedOpacity, (val) =>
    val > 0.6 ? "auto" : "none"
  );

  return (
    <motion.div
      style={{
        opacity: fixedOpacity,
        y: fixedY,
        zIndex: 10 + index,
        visibility,
        pointerEvents,
      }}
      className="absolute inset-0 flex flex-col justify-center space-y-8"
    >
      <h2 className="text-5xl md:text-7xl font-bold text-[#001f3f] leading-tight">
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
        className={`grid ${service.title === "Forwarding" ? "grid-cols-2 gap-x-8" : "grid-cols-1"
          } gap-y-4 pt-4 border-l-2 border-navy/10 pl-8`}
      >
        {service.points.map((point: string, i: number) => (
          <div key={i} className="flex items-start text-gray-600 group">
            <div className="w-1.5 h-1.5 min-w-1.5 min-h-1.5 bg-orange-600 rounded-full mr-4 mt-2 opacity-30 group-hover:opacity-100 transition-opacity" />
            <span className="text-sm uppercase tracking-wider font-medium opacity-70 group-hover:opacity-100 transition-opacity">
              {point}
            </span>
          </div>
        ))}
      </div>

      <motion.button className="mt-12 group flex items-center gap-6 w-fit cursor-pointer">
        <span className="text-xs font-bold uppercase tracking-[0.4em] text-navy group-hover:text-orange-600 transition-colors">
          {service.cta}
        </span>
        <div className="relative h-[1.5px] w-24 overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 h-full w-full bg-[#001f3f] group-hover:bg-orange-600 origin-left"
            initial={{ scaleX: 0.5 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </motion.button>
    </motion.div>
  );
}