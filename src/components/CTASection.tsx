"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import ContactModal from "./ContactModal";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText?: string;
  bgClassName?: string;
  textClassName?: string;
  buttonClassName?: string;
  sectionClassName?: string;
}

export default function CTASection({
  title,
  description,
  buttonText = "Hablemos",
  bgClassName = "bg-coral",
  textClassName = "text-white",
  buttonClassName = "bg-white text-coral hover:bg-gray-100",
  sectionClassName = "py-10 md:py-14 bg-white",
}: CTASectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <section className={sectionClassName}>
        <div
          ref={ref}
          className={`relative max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className={`${bgClassName} rounded-2xl py-8 md:py-10 px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6 md:gap-8`}
          >
            <div className="max-w-2xl">
              <h3
                className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-2 leading-tight ${textClassName}`}
              >
                {title}
              </h3>

              <p className={`${textClassName}/90 text-sm sm:text-base md:text-lg`}>
                {description}
              </p>
            </div>

            <button
              className={`w-full sm:w-auto font-semibold px-6 py-3 rounded-md transition whitespace-nowrap cursor-pointer ${buttonClassName}`}
              onClick={() => setContactOpen(true)}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </section>

      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}