export default function HeroVideo() {
  return (
    <section className="relative overflow-hidden h-screen flex items-center">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/videoplayback.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/30" />


      <div className="relative z-10 max-w-6xl mx-44 px-8 md:px-12 py-24">
        <div className="max-w-xl text-white">

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            MS Shipping
          </h1>

          <p className="text-lg md:text-3xl text-white/85 mb-8 max-w-lg">
           Servicios marítimos especializados para navieras, armadores y operadores que buscan soluciones ágiles en el puerto.
          </p>

          <button className="inline-flex items-center gap-2 bg-shippingComplementario hover:bg-shippingComplementario/90 text-white px-10 py-3 rounded-md text-2xl cursor-pointer">
            Contactanos
            <span className="text-lg">→</span>
          </button>

        </div>
      </div>

    </section>
  )
}