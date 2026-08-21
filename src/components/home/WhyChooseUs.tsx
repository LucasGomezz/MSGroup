"use client";

import Feature from "@/components/home/Feature";
import {
  FaSlidersH,
  FaSearch,
  FaStar,
  FaGlobeAmericas,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/lib/language-context";
import content from "./WhyChooseUs.i18n.json";

export default function WhyMSGroup() {
  const { language } = useLanguage();
  const t = content[language];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    initialInView: false,
    fallbackInView: false,
  });

  const icons = [<FaSlidersH key={0} />, <FaSearch key={1} />, <FaStar key={2} />, <FaGlobeAmericas key={3} />];

  return (
    <section id="por-que-elegirnos" className="bg-white py-16 sm:py-20 md:py-24">
      <div
        ref={ref}
        className={`relative flex flex-col items-center gap-2 max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${
          inView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        <div className="text-center mb-12 md:mb-14 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4 leading-tight">
            {t.heading}
          </h2>

          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 w-full text-center">
          {t.features.map((feature, i) => (
            <Feature
              key={i}
              icon={icons[i]}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}