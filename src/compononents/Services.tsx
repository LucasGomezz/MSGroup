"use client"
import ServiceCard from "./ServiceCard";
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';
import { FaTruckPlane } from "react-icons/fa6";
import HandshakeIcon from '@mui/icons-material/Handshake';
import { useInView } from "react-intersection-observer"


export default function Services() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  return (
    <section className="bg-sand py-20">
      <div
        ref={ref}
        className={`relative flex flex-col items-center gap-2 max-w-6xl mx-auto text-center px-4 transition-all duration-700 
      ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >

        <h2 className="text-6xl font-bold text-navy mb-4">
          Nuestros Servicios
        </h2>

        <p className="text-gray-600 mb-12 text-xl">
          Ofrecemos soluciones seguras y a medida para el transporte internacional.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <ServiceCard
            title="Shipping"
            subTitle="Servicios marítimos integrales."
            description="Gestión integral de servicios marítimos para la operación y comercialización de buques."
            points={[
              "Operación y gestión de buques",
              "Chartering",
              "Brokerage marítimo",
              "Agencia marítima"
            ]}
            icon={<DirectionsBoatFilledIcon sx={{ fontSize: 50 }} />}
          />

          <ServiceCard
            title="Forwarding"
            subTitle="Operaciones aéreas y terrestres"
            description="Operación integral de transporte internacional por vía marítima, aérea y terrestre, conectando cargas desde y hacia cualquier parte del mundo."
            points={[
              "Transporte marítimo, aéreo y terrestre",
              "Servicios multimodales",
              "Cargas de proyecto",
              "Logística, aduana y seguros de carga"
            ]}
            icon={<FaTruckPlane size={50} className="text-navy " />}
          />

          <ServiceCard
            title="Trading"
            subTitle="Logistica y comercialización."
            description="Desarrollo de operaciones de comercio internacional y asesoramiento estratégico para empresas exportadoras e importadoras."
            points={[
              "Trading internacional",
              "Brokerage comercial",
              "Consultoría en comercio exterior"
            ]}
            icon={<HandshakeIcon sx={{ fontSize: 50 }} />}
          />

        </div>

      </div>
    </section>
  );
}