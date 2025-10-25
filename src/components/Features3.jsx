"use client"

export default function Features3() {
  const features = [
    {
      title: "Secure & Safe",
      description:
        "Bank-level security with industry-leading encryption to protect your assets.",
      highlight: "Safe",
      visual: "/secure.svg",
    },
    {
      title: "Lightning Fast",
      description:
        "Execute transactions quickly with optimized gas fees and instant confirmations",
      highlight: "Fast",
      visual: "/lighting.svg",
    },
    {
      title: "Multi-Chain",
      description:
        "Support for multiple blockchains and thousands of tokens in one wallet",
      highlight: "GOLDX",
      visual: "/mutli.svg",
    },
  ]

  const GlowingSphere = () => (
    <div className="relative w-full h-48 flex items-center justify-center">
      {/* Outer glow layers */}
      <div
        className="absolute w-48 h-48 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, #FFBF00 0%, transparent 70%)" }}
      ></div>
      <div
        className="absolute w-40 h-40 rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, #FF8000 0%, transparent 70%)" }}
      ></div>

      {/* Main sphere with particle effect */}
      <div className="absolute w-32 h-32 rounded-full bg-black/80 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle at 30% 30%, #FFBF00 0%, #FF8000 30%, transparent 70%)",
            opacity: 0.6,
          }}
        ></div>
        {/* Particle dots */}
        <div
          className="absolute inset-2 rounded-full"
          style={{
            backgroundImage: "radial-gradient(circle, #FFBF00 1px, transparent 1px)",
            backgroundSize: "8px 8px",
            opacity: 0.8,
          }}
        ></div>
      </div>
    </div>
  )

  const getVisual = (type) => {
    return <GlowingSphere />
  }

  return (
    <section className="relative px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden transition transform hover:-translate-y-2"
                  style={{
                
                background: "#000",
                border: "1px solid #FFBF00",
                boxShadow:
                  "0 -40px 80px rgba(255, 191, 0, 0.5), 0 -20px 60px rgba(255, 191, 0, 0.3), 0 20px 40px rgba(0, 0, 0, 0.8), inset 0 0 30px rgba(255, 191, 0, 0.1)",
              }}
            >
              <div className="p-[4px] rounded-2xl">
<div className="mb-6 flex justify-center">
  <div className="w-full max-w-2xl">
    <img 
      src={feature.visual} 
      className="w-full h-auto object-contain"
      alt="Feature visual"
    />
  </div>
</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed text-center mb-3">
                  {feature.description.split(feature.highlight || "").map((part, i) =>
                    i === 0 ? (
                      part
                    ) : (
                      <span key={i}>
                        <span className="text-yellow-300 font-semibold">{feature.highlight}</span>
                        {part}
                      </span>
                    ),
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
