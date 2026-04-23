import Hero from "@/components/Hero";
import ShippingIntro from "@/components/shipping/ShippingIntro";
import ShippingShipManagment from "@/components/shipping/ShippingShipManagement";
import ShippingCherating from "@/components/shipping/ShippingChartering";
import ShippingBrokerage from "@/components/shipping/ShippingBrokerage";
import ShippingBrokerageServices from "@/components/shipping/ShippingBrokerageServices";
import ShippingAgency from "@/components/shipping/ShippingAgency";
import CTASection from "@/components/CTASection";



export default function MSShipping() {
    return (
        <>
            <Hero title="MS Shipping"
                description="Servicios marítimos especializados para navieras, armadores y operadores que buscan soluciones ágiles en el puerto."
                buttonText="Iniciá tu consulta"
                buttonColor="bg-shippingComplementario hover:shippingComplementario/90"
                mediaType="video"
                mediaSrc="/videos/ms-shipping.mp4"
                overlayOpacity="bg-black/30"
                gradient={true}
                gradientColor="from-shippingPrincipal/40 via-shippingPrincipal/20"
                defaultService="MS Shipping" />
            <section className="relative w-full overflow-hidden">
                <ShippingIntro />
                <ShippingShipManagment />
                <ShippingCherating />
                <ShippingBrokerage />
                <ShippingBrokerageServices />
                <CTASection
                    title="¿LISTO PARA OPTIMIZAR TUS OPERACIONES MARÍTIMAS?"
                    description="Coordiná tus buques con eficiencia y recibí asesoramiento especializado en cada escala."
                    buttonText="Hablemos"
                    bgClassName="bg-shippingPrincipal"
                    textClassName="text-white"
                    buttonClassName="bg-white text-shippingPrincipal hover:bg-gray-100"
                />
                <ShippingAgency />
            </section>
        </>
    );
}




