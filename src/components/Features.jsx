import { Lock, Zap, Shield } from "lucide-react"

export default function Features() {
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

  return (
    <section className="relative py-2 px-6 w-full">
      <div className="max-w-6xl mx-auto">
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white text-black p-8 rounded-lg hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-amber-400 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Icon size={24} className="text-black" />
                </div>
                <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
