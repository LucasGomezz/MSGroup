"use client"
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';
import { FaTruckPlane } from "react-icons/fa6";
import HandshakeIcon from '@mui/icons-material/Handshake';

const services = [
  {
    title: "Shipping",
    subTitle: "Servicios marítimos.",
    description: "Especializados en el manejo comercial y operativo de buques como Operadores, Charterers, Agentes Marítimos y Brokers",
    points: ["Servicios de Brokerage de Cargas y Buques", "Operación de Buques (Ship Management)", "Chartering", "Servicios de Agencia Marítima"],
    cta: "Consultar servicio",
    icon: <DirectionsBoatFilledIcon sx={{ fontSize: 140 }} />
  },
  {
    title: "Forwarding",
    subTitle: "Operaciones aéreas y terrestres.",
    description: "Operadora argentina de cargas internacionales por vía marítima, aérea y terrestre desde y hacia cualquier parte del mundo.",
    points: ["Transporte Marítimo Internacional",
      "Transporte Aéreo Internacional",
      "Transporte Terrestre",
      "Servicios Multimodales",
      "Cargas de Proyecto",
      "Cargas Break Bulk",
      "Despacho Aduanero",
      "Seguros de Carga",
      "Depósito Fiscal y Logística"],
    cta: "Cotizar envío",
    icon: <FaTruckPlane size={140} />
  },
  {
    title: "Trading",
    subTitle: "Logística y comercialización.",
    description: "Desarrollo de operaciones de comercio internacional y consultoría integral para empresas exportadoras e importadoras.",
    points: ["Trading internacional", "Brokerage comercial", "Consultoría en comercio exterior"],
    cta: "Iniciar consultoría",
    icon: <HandshakeIcon sx={{ fontSize: 140 }} />
  }
];

export default function Services() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const activeIndex = useTransform(scrollYProgress, [0, 0.45, 0.85], [0, 1, 2]);

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-[#fdfcf9]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden px-6 lg:px-32">
        <div className="flex w-full max-w-7xl mx-auto gap-20 items-center">

          {/* LADO IZQUIERDO: Iconos */}
          <div className="hidden md:flex w-1/2 justify-center items-center">
            <div className="relative w-80 h-80 flex items-center justify-center">
              {services.map((service, i) => (
                <IconTransition key={i} index={i} activeIndex={activeIndex}>
                  {service.icon}
                </IconTransition>
              ))}
            </div>
          </div>

          {/* LADO DERECHO: Textos */}
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

function IconTransition({ children, index, activeIndex }: any) {
  const opacity = useTransform(activeIndex, [index - 0.5, index, index + 0.5], [0, 1, 0]);
  const scale = useTransform(activeIndex, [index - 0.5, index, index + 0.5], [0.7, 1, 0.7]);
  const y = useTransform(activeIndex, [index - 0.5, index, index + 0.5], [20, 0, -20]);

  return (
    <motion.div
      style={{ opacity, scale, y }}
      className="absolute text-navy flex flex-col items-center"
    >
      <div className="p-12 bg-white rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50">
        {children}
      </div>
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

  const visibility = useTransform(opacity, (val) => (val <= 0 ? "hidden" : "visible"));
  const pointerEvents = useTransform(opacity, (val) => (val > 0.5 ? "auto" : "none"));

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
      <div className="space-y-2">
        <span className="text-blue-600 font-mono text-sm tracking-[0.3em] uppercase block">
        </span>
        <h2 className="text-5xl md:text-7xl font-bold text-navy leading-tight">
          {service.title}
        </h2>
      </div>

      <div className="space-y-6 max-w-lg">
        <h3 className="text-xl md:text-2xl font-light text-gray-700 leading-snug italic">
          {service.subTitle}
        </h3>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
          {service.description}
        </p>
      </div>

      <div
        className={`grid ${service.title === "Forwarding" ? "grid-cols-2 gap-x-8" : "grid-cols-1"} gap-y-4 pt-4 border-l-2 border-navy/10 pl-8`}>
        {service.points.map((point: string, i: number) => (
          <div key={i} className="flex items-center text-gray-600 group">
            <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-4 opacity-30 group-hover:opacity-100 transition-opacity" />
            <span className="text-sm uppercase tracking-wider font-medium">{point}</span>
          </div>
        ))}
      </div>

      <button className="mt-12 group flex items-center gap-6 w-fit cursor-pointer" >
        <span className="text-xs font-bold uppercase tracking-[0.4em] text-navy group-hover:text-orange-600 transition-colors">
          {service.cta}
        </span>
        <div className="relative h-[1.5px] w-24 overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 h-full w-full bg-navy group-hover:bg-orange-600 origin-left"
          />
        </div>
      </button>
    </motion.div>
  );
}