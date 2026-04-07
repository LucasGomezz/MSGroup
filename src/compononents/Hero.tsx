export default function Hero() {
    return (
        <section
            className="relative overflow-hidden min-h-150 flex items-center bg-cover bg-center "
            style={{ backgroundImage: "url('/images/heroBoat.png')" }}
        >
            {/* Overlay general para oscurecer un poco */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Degradé izquierdo navy */}
            <div className="absolute inset-y-0 left-0 w-[60%] bg-linear-to-r from-navy via-navy/80 to-transparent" />

            {/* Contenido */}
            <div className="relative z-10 max-w-6xl mx-44 px-8 md:px-12 py-24">
                <div className="max-w-xl text-white">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
                        Un partner para toda tu operación internacional.
                    </h1>

                    <p className="text-lg md:text-3xl text-white/85 mb-8 max-w-lg">
                        Soluciones integrales de logística desde 1990.
                        Movilizamos tu negocio sin fronteras.
                    </p>

                    <button className="inline-flex items-center gap-2 bg-coral hover:bg-coral/90 text-white  px-10 py-3 rounded-md  text-2xl cursor-pointer">
                        Solicitar cotización
                        <span className="text-lg">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
}