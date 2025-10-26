import Features from "./Features";

export default function Hero() {
  return (
    <section
      className="relative max-h-auto flex flex-col items-center justify-center px-6 pt-20 pb-[250px] w-[98%] m-auto"
      style={{
        boxShadow: "0px 1px 6px 3px #FFBF00",
      }}
    >
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mb-20">
        <h1 className="text-6xl md:text-7xl text-[#FFBF00] font-bold mb-2 leading-tight">
          GOLDX Wallet
        </h1>

        <p className="text-xl text-[#FFBF00] md:text-2xl text-gray-300 mb-12 leading-relaxed">
          Your secure crypto wallet to explore blockchain
        </p>

        {/* <Features /> */}
        <Features />
        <button
          style={{
            background: "linear-gradient(135deg, #FFBF00 0%, #FF8000 100%)",
          }}
          className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105 max-sm:mb-6"
        >
          Get started
          <span>→</span>
        </button>
      </div>
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes ripple {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          50% {
            transform: scale(1);
          }
          100% {
            transform: scale(0.95);
            opacity: 0.8;
          }
        }

        @keyframes mobileGlowFloat {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.9;
          }
          50% {
            transform: translateY(-15px);
            opacity: 1;
          }
        }

        @keyframes mobileGlowPulse {
          0%, 100% {
            filter: blur(30px);
            opacity: 0.8;
          }
          50% {
            filter: blur(40px);
            opacity: 1;
          }
        }

        .gradient-glow {
          animation: pulse 4s ease-in-out infinite;
        }

        .ellipse-ripple {
          animation: ripple 3s ease-out infinite;
        }

        /* Improved mobile responsive glow - uses different gradient and positioning for mobile */
        @media (max-width: 640px) {
          .gradient-glow {
            height: 100% !important;
            width: 120% !important;
            left: -10% !important;
            background-image: radial-gradient(ellipse 100% 60% at 50% 100%, rgba(255, 128, 0, 1) 0%, rgba(255, 191, 0, 0.8) 20%, rgba(255, 191, 0, 0.4) 40%, transparent 70%) !important;
            transform: none !important;
            animation: mobileGlowFloat 4s ease-in-out infinite, mobileGlowPulse 3s ease-in-out infinite !important;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .gradient-glow {
            height: 70% !important;
            background-image: radial-gradient(circle at 50% 100%, rgba(255, 128, 0, 1) 5%, rgba(255, 191, 0, 0.9) 25%, rgba(255, 191, 0, 0.6) 35%, rgba(255, 191, 0, 0.3) 45%, transparent 65%) !important;
            transform: scaleX(0.75) scaleY(0.55) translateZ(0px) !important;
          }
        }

        @media (min-width: 1025px) {
          .gradient-glow {
            height: 80% !important;
            background-image: radial-gradient(circle at 50% 100%, rgba(255, 128, 0, 1) 5%, rgba(255, 191, 0, 0.9) 25%, rgba(255, 191, 0, 0.6) 35%, rgba(255, 191, 0, 0.3) 45%, transparent 65%) !important;
            transform: scaleX(0.8) scaleY(0.6) translateZ(0px) !important;
          }
        }
      `}</style>

      <div
        className="absolute bottom-0 left-0 right-0 gradient-glow"
        style={{
          height: "80%",
          backgroundImage:
            "radial-gradient(circle at 50% 100%, rgba(255, 128, 0, 1) 5%, rgba(255, 191, 0, 0.9) 25%, rgba(255, 191, 0, 0.6) 35%, rgba(255, 191, 0, 0.3) 45%, transparent 65%)",
          transformOrigin: "50% 100%",
          opacity: 1,
          transform: "scaleX(0.8) scaleY(0.6) translateZ(0px)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
