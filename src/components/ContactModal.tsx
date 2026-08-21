"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Phone,
  Mail,
  MapPin,
  Clock3,
  Send,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import content from "./ContactModal.i18n.json";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
  defaultService?: string;
};

type Status = "idle" | "sending" | "success" | "error";

export default function ContactModal({
  open,
  onClose,
  defaultService,
}: ContactModalProps) {
  const { language } = useLanguage();
  const t = content[language];

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(
    defaultService || t.seleccionarServicio
  );
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (!open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setErrors({
        name: false,
        email: false,
        message: false,
      });

      setService(defaultService || t.seleccionarServicio);
      document.body.style.overflow = "auto";
      return;
    }

    setErrors({
      name: false,
      email: false,
      message: false,
    });

    setService(defaultService || "Seleccionar servicio");
    setStatus("idle");

    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEsc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", onEsc);
    };
  }, [open, onClose, defaultService]);

  // Al llegar a "success", cierra el modal solo y limpia el form
  useEffect(() => {
    if (status !== "success") return;

    const timeout = setTimeout(() => {
      setName("");
      setCompany("");
      setEmail("");
      setMessage("");
      setService(defaultService || t.seleccionarServicio);
      setStatus("idle");
      onClose();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [status, onClose, defaultService]);

  const sendEmail = async () => {
    const newErrors = {
      name: !name.trim(),
      email: !email.trim(),
      message: !message.trim(),
    };

    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.message) return;

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, service, message }),
      });

      if (!res.ok) throw new Error("Fallo el envío");

      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/45 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-101 grid place-items-center p-4"
          >
            <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white shadow-2xl">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 rounded-full p-2 text-gray-500 hover:bg-gray-100 transition cursor-pointer"
              >
                <X size={22} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="hidden lg:block bg-navy text-white px-6 sm:px-8 lg:px-10 py-10">
                  <p className="text-coral text-sm font-semibold uppercase tracking-[0.3em] mb-4">
                    {t.eyebrow}
                  </p>

                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    {t.sidebarTitulo}
                  </h2>

                  <p className="text-white/80 mb-10">
                    {t.sidebarDescripcion}
                  </p>

                  <div className="space-y-6 text-sm sm:text-base">
                    <div className="flex gap-4">
                      <MapPin className="text-coral mt-1" size={16} />
                      <div>
                        {t.direccionLinea1}
                        <br />
                        {t.direccionLinea2}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Phone className="text-coral mt-1" size={16} />
                      <a href="tel:+54 11 4322-4902">+54 11 4322-4902</a>
                    </div>

                    <div className="flex gap-4">
                      <Mail className="text-coral mt-1" size={16} />
                      <a href="mailto:maritima@maritima-group.com">
                        maritima@maritima-group.com
                      </a>
                    </div>

                    <div className="flex gap-4">
                      <Clock3 className="text-coral mt-1" size={16} />
                      <div>{t.horario}</div>
                    </div>
                  </div>
                </div>

                <div className="px-6 sm:px-8 lg:px-10 py-10">
                  {status === "success" ? (
                    <div className="flex flex-col items-center justify-center text-center h-full py-16">
                      <CheckCircle2 className="text-green-500 mb-4" size={56} />
                      <h3 className="text-2xl font-semibold text-navy mb-2">
                        {t.exitoTitulo}
                      </h3>
                      <p className="text-gray-600">
                        {t.exitoDescripcion}
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="block lg:hidden mb-6">
                        <h3 className="text-2xl font-semibold text-navy mb-2">
                          {t.mobileTitulo}
                        </h3>
                        <p className="text-md font-semibold text-navy">
                          {t.mobileDescripcion}
                        </p>
                      </div>

                      <div className="hidden lg:block mb-6">
                        <h3 className="text-2xl font-semibold text-navy mb-2">
                          {t.desktopTitulo}
                        </h3>
                        <p className="text-md font-semibold text-navy">
                          {t.desktopDescripcion}
                        </p>
                      </div>

                      <div>
                        <input
                          type="text"
                          placeholder={t.placeholderNombre}
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            setErrors((prev) => ({ ...prev, name: false }));
                          }}
                          className={`w-full border rounded-xl my-2 px-4 py-3 outline-none transition ${errors.name
                              ? "border-red-500 focus:border-red-500"
                              : "border-gray-200 focus:border-coral"
                            }`}
                        />

                        {errors.name && (
                          <p className="text-red-500 text-sm mb-2">
                            {t.campoObligatorio}
                          </p>
                        )}
                      </div>

                      <input
                        type="text"
                        placeholder={t.placeholderEmpresa}
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-coral"
                      />

                      <div>
                        <input
                          type="email"
                          placeholder={t.placeholderEmail}
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setErrors((prev) => ({ ...prev, email: false }));
                          }}
                          className={`w-full border space-y-4 rounded-xl px-4 py-3 my-2 outline-none transition ${errors.email
                              ? "border-red-500 focus:border-red-500"
                              : "border-gray-200 focus:border-coral"
                            }`}
                        />

                        {errors.email && (
                          <p className="text-red-500 text-sm">
                            {t.campoObligatorio}
                          </p>
                        )}
                      </div>

                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 my-2 outline-none focus:border-coral text-gray-600 cursor-pointer"
                      >
                        <option>{t.seleccionarServicio}</option>
                        <option>{t.msShipping}</option>
                        <option>{t.msForwarding}</option>
                        <option>{t.msTrading}</option>
                      </select>

                      <div>
                        <textarea
                          rows={2}
                          placeholder={t.placeholderMensaje}
                          value={message}
                          onChange={(e) => {
                            setMessage(e.target.value);
                            setErrors((prev) => ({ ...prev, message: false }));
                          }}
                          className={`w-full border rounded-xl px-4 py-2.5 outline-none resize-none transition ${errors.message
                              ? "border-red-500 focus:border-red-500"
                              : "border-gray-200 focus:border-coral"
                            }`}
                        />

                        {errors.message && (
                          <p className="text-red-500 text-sm mt-1">
                            {t.campoObligatorio}
                          </p>
                        )}
                      </div>

                      {status === "error" && (
                        <p className="text-red-500 text-sm mb-2">
                          {t.errorEnvio}
                        </p>
                      )}

                      <button
                        type="button"
                        onClick={sendEmail}
                        disabled={status === "sending"}
                        className="w-full inline-flex items-center justify-center gap-3 bg-coral hover:bg-coral/90 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer"
                      >
                        <Send size={18} />
                        {status === "sending" ? t.enviando : t.enviarConsulta}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}