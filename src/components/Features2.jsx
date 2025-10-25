"use client"
import { Lock, Zap, Shield } from "lucide-react"

export default function Features2() {


    const features = [
    {
      icon: Lock,
      title: "Secure & Safe",
      description: "Bank-level security with industry-leading encryption to protect your assets",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Execute transactions quickly with optimized gas fees and instant confirmations",
    },
    {
      icon: Shield,
      title: "Multi-Chain",
      description: "Support for multiple blockchains and thousands of tokens in one wallet",
    },
  ]

  const SphereVisual = () => (
    <div className="relative w-full h-48 flex items-center justify-center">
      <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 blur-2xl opacity-60"></div>
      <div
        className="relative w-24 h-24 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-400 shadow-2xl"
        style={{ boxShadow: "0 0 40px #FFBF00, 0 0 80px rgba(255, 191, 0, 0.5)" }}
      ></div>
    </div>
  )

  const GearVisual = () => (
    <div className="relative w-full h-48 flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full border-4 border-yellow-400 opacity-40"></div>
        <div className="absolute w-16 h-16 rounded-full border-4 border-yellow-400 opacity-60"></div>
        <div
          className="absolute w-12 h-12 rounded-full border-4 border-yellow-300 opacity-80"
          style={{ boxShadow: "0 0 30px #FFBF00" }}
        ></div>
      </div>
      <div className="relative text-yellow-400 text-4xl opacity-70">⚙</div>
    </div>
  )

  const CubeVisual = () => (
    <div className="relative w-full h-48 flex items-center justify-center">
      <div className="absolute w-32 h-32 border-2 border-yellow-400 opacity-30 transform -rotate-45"></div>
      <div
        className="relative w-24 h-24 border-2 border-yellow-400 transform -rotate-45"
        style={{ boxShadow: "0 0 30px #FFBF00, inset 0 0 30px rgba(255, 191, 0, 0.3)" }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-gradient-to-br from-yellow-300 to-yellow-500 opacity-20 blur-xl"></div>
      </div>
    </div>
  )

  const getVisual = (type) => {
    switch (type) {
      case "sphere":
        return <SphereVisual />
      case "gear":
        return <GearVisual />
      case "cube":
        return <CubeVisual />
      default:
        return null
    }
  }

  return (
    <section className="relative py-2 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
              const Icon = feature.icon
            return (
            <div
              key={index}
              className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-400 rounded-2xl p-8 hover:shadow-lg transition transform hover:-translate-y-1 overflow-hidden"
             style={{ boxShadow: "0 0 10px #FFBF00, 0 0 80px rgba(255, 191, 0, 0.5)" }}
            >
                  {/* <div className="mb-6">{getVisual(feature.visual)}</div> */}
                   <div className="w-12 h-12 bg-amber-400 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Icon size={24} className="text-black" />
                </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description.split(feature.highlight || "").map((part, i) =>
                  i === 0 ? (
                    part
                  ) : (
                    <span key={i}>
                      <span className="text-yellow-400 font-semibold">{feature.highlight}</span>
                      {part}
                    </span>
                  ),
                )}
              </p>
            </div>
       )
          })}
        </div>

        {/* CTA Button */}
      
      </div>
    </section>
  )
}
