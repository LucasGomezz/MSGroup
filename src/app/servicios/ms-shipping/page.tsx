import Hero from "@/components/Hero";
import ShippingShipManagment from "@/components/shipping/ShippingShipManagement";
import ShippingCherating from "@/components/shipping/ShippingChartering";
import ShippingBrokerage from "@/components/shipping/ShippingBrokerage";
import ShippingBrokerageServices from "@/components/shipping/ShippingBrokerageServices";
import ShippingAgency from "@/components/shipping/ShippingAgency";
import ServiceIntro from "@/components/ServiceIntro";



export default function MSShipping() {
    return (
        <>
            <Hero title="MS Shipping"
                description="División marítima de MS Group, especializada en el manejo comercial y operativo de buques como Operadores, Charterers y Brokers de cargas y buques."
                buttonText="Inicia tu consulta"
                buttonColor="bg-shippingComplementario hover:shippingComplementario/90"
                mediaType="video"
                mediaSrc="/videos/ms-shipping.mp4"
                overlayOpacity="bg-black/30"
                gradient={true}
                gradientColor="from-shippingPrincipal/40 via-shippingPrincipal/20"
                defaultService="MS Shipping" />
            <section className="relative w-full overflow-hidden">
                <ServiceIntro
                    title="MS Shipping"
                    colorClass="text-shippingPrincipal"
                    description="Desde 1990, MS Shipping opera desde Argentina como división marítima de MS Group, especializada en el manejo comercial y operativo de buques como Operadores, Charterers y Brokers para clientes locales e internacionales."
                />
                <ShippingShipManagment />
                <ShippingCherating />
                <ShippingBrokerage />
                <ShippingBrokerageServices />
                <ShippingAgency />
            </section>
        </>
    );
}




