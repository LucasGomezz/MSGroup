"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import content from "./CardsServicios.i18n.json";

export default function CardsServicios() {
  const { language } = useLanguage();
  const t = content[language];

  const services = [
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
      position: "left-top",
    },
    {
      title: t.services[1].title,
      description: t.services[1].description,
      items: t.services[1].items,
      position: "left-bottom",
    },
    {
      title: t.services[2].title,
      description: t.services[2].description,
      items: t.services[2].items,
      position: "right-top",
    },
    {
      type: "vignette",
      image: "/images/forwarding/forwarding-constructores.jpg",
      position: "center",
    },
    {
      title: t.services[3].title,
      description: t.services[3].description,
      items: t.services[3].items,
      position: "right-bottom",
    },
  ];

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

        {/* GRID */}
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
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            border
            border-gray-100
          "
        >
          {services.map((service, i) => {

            /* ============================
               VIGNETTE
            ============================ */

            if (service.type === "vignette") {
              return (
                <motion.div
                  key={i}
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
                  transition={{ duration: 0.65 }}
                  whileHover={{ y: -4 }}
                  className="
                    relative
                    group
                    overflow-hidden

                    min-h-100

                    lg:min-h-0
                    lg:col-start-2
                    lg:row-start-1
                    lg:row-span-2

                    border-b
                    border-gray-100
                  "
                >
                  <Image
                    src={service.image}
                    alt="Operación Marítima"
                    fill
                    priority
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
                      bg-forwardingPrincipal/10
                      group-hover:bg-transparent
                      transition-colors
                      duration-500
                    "
                  />
                </motion.div>
              );
            }

            /* ============================
               POSICIONES
            ============================ */

            let positionClasses = "";

            if (service.position === "left-top") {
              positionClasses = `
                lg:col-start-1
                lg:row-start-1
              `;
            }

            if (service.position === "left-bottom") {
              positionClasses = `
                lg:col-start-1
                lg:row-start-2
              `;
            }

            if (service.position === "right-top") {
              positionClasses = `
                lg:col-start-3
                lg:row-start-1
              `;
            }

            if (service.position === "right-bottom") {
              positionClasses = `
                lg:col-start-3
                lg:row-start-2
              `;
            }

            return (
              <motion.div
                key={i}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 35,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.55,
                }}
                whileHover={{
                  y: -4,
                }}
                className={`
                  group
                  bg-white
                  border-b
                  border-gray-100

                  p-10
                  lg:p-12

                  flex
                  flex-col
                  justify-between

                  hover:bg-forwardingPrincipal

                  transition-all
                  duration-300
                  ease-in-out

                  min-h-100

                  ${positionClasses}
                `}
              >
                <div>
                  <h3
                    className="
                      text-3xl
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
                      text-lg
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
                      {service.items.map(
                        (item: string, idx: number) => (
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
                        )
                      )}
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