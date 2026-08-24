"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import content from "./CardsServicios.i18n.json";

export default function CardsServicios() {
  const { language } = useLanguage();
  const t = content[language];

  const leftServices = [
    {
      title: t.services[0].title,
      description: (
        <>
          {t.services[0].descriptionPart1}
          <br />
          <br />
          {t.services[0].descriptionPart2}
        </>
      ),
      items: [],
    },
    {
      title: t.services[1].title,
      description: t.services[1].description,
      items: t.services[1].items,
    },
  ];

  const rightServices = [
    {
      title: t.services[2].title,
      description: t.services[2].description,
      items: t.services[2].items,
    },
    {
      title: t.services[3].title,
      description: t.services[3].description,
      items: t.services[3].items,
    },
  ];

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  const Card = ({
    service,
  }: {
    service: {
      title: string;
      description: React.ReactNode;
      items: string[];
    };
  }) => (
    <motion.div
      variants={cardVariants}
      transition={{ duration: 0.55 }}
      whileHover={{ y: -4 }}
      className="
        group
        bg-white
        border
        border-gray-100
        p-8
        lg:p-10
        flex
        flex-col
        justify-between
        hover:bg-forwardingPrincipal
        transition-all
        duration-300
        ease-in-out
        min-h-90
        lg:min-h-100
      "
    >
      <div>
        <h3
          className="
            text-2xl
            lg:text-3xl
            font-bold
            text-forwardingPrincipal
            group-hover:text-white
            leading-none
            uppercase
            mb-6
            transition-colors
            duration-300
          "
        >
          {service.title}
        </h3>

        <p
          className="
            text-gray-600
            group-hover:text-white
            text-base
            lg:text-lg
            leading-snug
            transition-colors
            duration-300
            font-light
          "
        >
          {service.description}
        </p>
      </div>

      {service.items && service.items.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.15 }}
          className="
            mt-8
            pt-8
            border-t
            border-gray-100
            group-hover:border-white/20
            transition-colors
            duration-300
          "
        >
          <ul className="grid grid-cols-1 gap-3">
            {service.items.map((item: string, idx: number) => (
              <motion.li
                key={idx}
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: idx * 0.03,
                }}
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-widest
                  text-gray-500
                  group-hover:text-white
                  transition-colors
                  duration-300
                  flex
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    w-5
                    h-0.5
                    bg-[--forwardingComplementario]
                    flex-none
                  "
                />

                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );

  return (
    <section id="servicios-portuarios" className="py-24 bg-white">
      <div className="max-w-350 mx-auto px-6">

        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.75 }}
          className="border-l-12 border-forwardingPrincipal pl-8 mb-16"
        >
          <h2 className="text-6xl font-black text-forwardingPrincipal uppercase tracking-tighter">
            {t.heading}
          </h2>
        </motion.div>

        {/* CONTENEDOR PRINCIPAL */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: false,
            amount: 0.08,
          }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1fr_1fr_1fr]
            border
            border-gray-100
          "
        >

          {/* =========================
              IZQUIERDA - 2 CARDS
          ========================= */}
          <div className="grid grid-rows-2">
            {leftServices.map((service, index) => (
              <Card
                key={index}
                service={service}
              />
            ))}
          </div>

          {/* =========================
              VIGNETTE CENTRAL
          ========================= */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                scale: 0.96,
              },
              show: {
                opacity: 1,
                scale: 1,
              },
            }}
            transition={{
              duration: 0.7,
            }}
            whileHover={{
              y: -4,
            }}
            className="
              relative
              group
              overflow-hidden
              min-h-100
              lg:min-h-0
              order-first
              lg:order-0
            "
          >
            <Image
              src="/images/forwarding/forwarding-constructores.jpg"
              alt="Operación Marítima"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="
                object-cover
                grayscale
                group-hover:grayscale-0
                transition-all
                duration-700
                ease-in-out
                scale-105
                group-hover:scale-100
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-forwardingPrincipal/5
                group-hover:bg-transparent
                transition-colors
                duration-500
              "
            />
          </motion.div>

          {/* =========================
              DERECHA - 2 CARDS
          ========================= */}
          <div className="grid grid-rows-2">
            {rightServices.map((service, index) => (
              <Card
                key={index}
                service={service}
              />
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}