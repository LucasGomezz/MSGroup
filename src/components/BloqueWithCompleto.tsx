type BloqueCompleto = {
  title: string
  description: string
  titleColor?: string
  descriptionColor?:string
}


export default function BloqueWithCompleto({title, description, titleColor, descriptionColor} :BloqueCompleto) {
    return (
        <section className="w-full">
            <div className="bg-[#f5f5f5] py-20 px-6 text-center">
                <h2 className={`text-3xl md:text-6xl font-semibold ${titleColor ? titleColor : "text-navy"}`}>
                    {title}
                </h2>
                
                <p className={`mt-6 max-w-5xl  mx-auto  ${descriptionColor ? descriptionColor : "text-gray-500"} text-3xl whitespace-pre-line`}>
                    {description}
                </p>

            </div>
        </section>
    )
}