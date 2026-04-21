"use client";

import { useRef, useState } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import ContactModal from "../ContactModal";
import Link from "next/link";

const services = [
  {
    title: "MS Shipping",
    subTitle: "Servicios marítimos.",
    href: "/servicios/ms-shipping",
    description:
      "Especializados en el manejo comercial y operativo de buques como Operadores, Charterers, Agentes Marítimos y Brokers",
    points: [
      {
        label: "Servicios de Brokerage de Cargas y Buques",
        link: "/servicios/ms-shipping#servicios-brokerage-cargas"
      },
      {
        label: "Operación de Buques (Ship Management)",
        link: "/servicios/ms-shipping#operacion-buques"
      },
      {
        label: "Chartering",
        link: "/servicios/ms-shipping#cherating"
      },
      {
        label: "Servicios de Agencia Marítima",
        link: "/servicios/ms-shipping#agencia-maritima"
      },

    ],
    cta: "Consultar servicio",
    image: "/images/shipping.png",
    defaultService: "MS Shipping"
  },
  {
    title: "MS Forwarding",
    subTitle: "Operaciones marítimas, aéreas y terrestres.",
    href: "/servicios/ms-forwarding",
    description:
      "Operadora argentina de cargas internacionales por vía marítima, aérea y terrestre desde y hacia cualquier parte del mundo.",
    points: [
      {
        label: "Transporte Marítimo Internacional",
        link: "/servicios/ms-forwarding#maritimo"
      },
      {
        label: "Transporte Aéreo Internacional",
        link: "/servicios/ms-forwarding#aereo"
      },
      {
        label: "Transporte Terrestre",
        link: "/servicios/ms-forwarding#terrestre"
      },
      {
        label: "Servicios Multimodales",
        link: "/servicios/ms-forwarding#servicios-portuarios"
      },
      {
        label: "Cargas de Proyecto",
        link: "/servicios/ms-forwarding#servicios-portuarios"
      },
      {
        label: "Cargas Break Bulk",
        link: "/servicios/ms-forwarding#servicios-portuarios"
      },
      {
        label: "Despacho Aduanero",
        link: "/servicios/ms-forwarding#servicios-portuarios"
      },
      {
        label: "Seguros de Carga",
        link: "/servicios/ms-forwarding#servicios-portuarios"
      },
      {
        label: "Depósito Fiscal y Logística",
        link: "/servicios/ms-forwarding#servicios-portuarios"
      },
    ],
    cta: "Consultar servicio",
    image: "/images/forwardingPruebaHome.jpg",
    defaultService: "MS Forwarding"
  },
  {
    title: "MT Trading",
    subTitle: "Logística y comercialización.",
    href: "/servicios/mt-trading",
    description:
      "Desarrollo de operaciones de comercio internacional y consultoría integral para empresas exportadoras e importadoras.",
    points: [
      {
        label: "Trading internacional",
        link: "/servicios/mt-trading#trading-internacional"
      },
      {
        label: "Brokerage comercial",
        link: "/servicios/mt-trading#brokerage-comercial"
      },
      {
        label: "Consultoría en comercio exterior",
        link: "/servicios/mt-trading#consultoria-comercio-exterior"
      },
    ],
    cta: "Consultar servicio",
    image: "/images/tradinggg.png",
    defaultService: "MS Trading"
  },
];

export default function Services() {
  const containerRef = useRef(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Seleccionar servicio");

  const openContact = (service: string) => {
    setSelectedService(service);
    setContactOpen(true);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const activeIndex = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 2]);

  return (
    <>
      <section
        ref={containerRef}
        className="hidden lg:block relative h-[500vh] bg-[#fdfcf9]"
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden px-8 xl:px-20">
          <div className="flex w-full max-w-7xl mx-auto gap-16 xl:gap-20 items-center">

            <div className="w-1/2 h-[78vh] relative overflow-hidden rounded-2xl">
              {services.map((service, i) => (
                <ImageTransition
                  key={i}
                  index={i}
                  activeIndex={activeIndex}
                  image={service.image}
                />
              ))}
            </div>

            <div className="w-1/2 relative h-[78vh]">
              {services.map((service, index) => (
                <ScrollContent
                  key={index}
                  service={service}
                  index={index}
                  progress={scrollYProgress}
                  onContact={openContact}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      <section className="lg:hidden bg-[#fdfcf9] py-16 px-4 sm:px-6">
        <div className="max-w-xl mx-auto space-y-12">

          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
            >
              <div className="relative h-64 sm:h-72">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-black/30" />

                <div className="absolute bottom-6 left-6 text-white">
                  <Link href={service.href}>
                    <h2 className="text-3xl sm:text-4xl font-bold">
                      {service.title}
                    </h2>
                  </Link>
                  <p className="text-sm sm:text-base opacity-90">
                    {service.subTitle}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>

                <div className="mt-6 space-y-3 border-l-2 border-navy/10 pl-5">
                  {service.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 shrink-0" />
                      <Link href={point.link}>
                        <span className="text-xs sm:text-sm uppercase tracking-wider text-gray-600">
                          {point.label}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => openContact(service.defaultService)}
                  className="mt-8 text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-navy">
                  {service.cta}
                </button>
              </div>
            </div>
          ))}

        </div>

      </section>
      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
        defaultService={selectedService}
      />
    </>
  );
}

type ImageTransitionProps = {
  image: string;
  index: number;
  activeIndex: MotionValue<number>;
};

function ImageTransition({
  image,
  index,
  activeIndex,
}: ImageTransitionProps) {
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
    <motion.div
      style={{ opacity, scale }}
      className="absolute inset-0 "
    >
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/20 z-10" />
      <div className="absolute inset-0 bg-linear-to-r from-black/30 via-black/10 to-transparent z-10" />
    </motion.div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ScrollContent({ service, index, progress, onContact }: any) {
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
      <Link href={service.href}>
        <h2 className="text-5xl xl:text-7xl font-bold text-[#001f3f] leading-tight">
          {service.title}
        </h2>
      </Link>
      <div className="space-y-6 max-w-lg">
        <h3 className="text-xl xl:text-2xl font-light text-gray-700 italic">
          {service.subTitle}
        </h3>

        <p className="text-base xl:text-lg text-gray-600 font-light">
          {service.description}
        </p>
      </div>

      <div
        className={`grid ${service.title === "MS Forwarding"
          ? "grid-cols-2 gap-x-8"
          : "grid-cols-1"
          } gap-y-4 pt-4 border-l-2 border-navy/10 pl-8`}
      >
        {service.points.map(( point: { label: string; link: string }, i: number) => (
          <div key={i} className="flex items-start text-gray-600 group">
            <div className="w-1.5 h-1.5 min-w-1.5 min-h-1.5 bg-orange-600 rounded-full mr-4 mt-2 opacity-30 group-hover:opacity-100 transition-opacity" />
            <Link href={point.link}>
              <span className="text-sm uppercase tracking-wider font-medium opacity-70 group-hover:opacity-100 transition-opacity">
                {point.label}
              </span>
            </Link>
          </div>
        ))}
      </div>

      <motion.button
        onClick={() => onContact(service.defaultService)}
        className="mt-12 group flex items-center gap-6 w-fit cursor-pointer"
      >
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
    </motion.div >
  );
}