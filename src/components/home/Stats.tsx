"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/lib/language-context";
import content from "./Stats.i18n.json";

export default function Stats() {
  const { language } = useLanguage();
  const t = content[language];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    initialInView: false,
    fallbackInView: false
  });

  const numbers = [35, 500, 100, 365];

  return (
    <section className="bg-navy text-white py-16 sm:py-20 md:py-24">
      <div
        ref={ref}
        className={`relative flex flex-col items-center max-w-4xl mx-auto text-center mb-10 md:mb-14 px-4 sm:px-6 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 leading-tight">
          {t.heading}
        </h2>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
          {t.description}
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl py-8 sm:py-10 px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 text-center md:divide-x md:divide-white/20">
          {t.stats.map((stat, i) => (
            <Stat key={i} number={numbers[i]} label={stat.label} />
          ))}
        </div>
      </div>

    </section>
  );
}

function Stat({
  number,
  label,
}: {
  number: number;
  label: string;
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.35,
    initialInView: false,
    fallbackInView: false,
  });

  return (
    <div
      ref={ref}
      className={`relative flex flex-col items-center justify-center gap-2 px-3 sm:px-4 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
    >
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sand leading-none">
        <CountUp
          end={inView ? number : 0}
          duration={2}
          prefix="+"
          separator=","
        />
      </h3>

      <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-snug max-w-32.5 sm:max-w-none">
        {label}
      </p>
    </div>
  );
}