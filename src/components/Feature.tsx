export default function Feature({
  icon,
  title,
  description
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {

  return (
    <div className="flex flex-col items-center text-center">

      <div className="text-coral text-4xl mb-4">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-navy mb-2">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>

    </div>
  )
}