"use client"

import Features from "./Features"
import Features2 from "./Features2"
import Features3 from "./Features3"
import GlowingContainer from "./GlowingContainer"

export default function Hero() {

const ellipses = [
    { width: 500, height: 450, opacity: 0.8, delay: '0s' },
    { width: 660, height: 550, opacity: 0.63, delay: '0.2s' },
    { width: 820, height: 650, opacity: 0.46, delay: '0.4s' },
    { width: 980, height: 750, opacity: 0.29, delay: '0.6s' },
    { width: 1140, height: 850, opacity: 0.12, delay: '0.8s' },
    // { width: 1200, height: 850, opacity: 0.05, delay: '1s' },
    // { width: 1360, height: 950, opacity: 0.05, delay: '1.2s' },
    // { width: 1520, height: 1050, opacity: 0.05, delay: '1.4s' },
    // { width: 1680, height: 1150, opacity: 0.05, delay: '1.6s' },
    // { width: 1840, height: 1250, opacity: 0.05, delay: '1.8s' },
    // { width: 2000, height: 1350, opacity: 0.05, delay: '2s' },
    // { width: 2160, height: 1450, opacity: 0.05, delay: '2.2s' }
  ];

  return (
      <section
    //  style={{ background: "linear-gradient(135deg, #FFBF00 0%, #FF8000 100%)" }}
          className="relative max-h-auto flex flex-col items-center justify-center px-6 pt-20 pb-[250px] w-[98%] m-auto"
      
          style={{
          boxShadow: "0px 1px 6px 3px #FFBF00"
      }}>

      {/* Glowing Background Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl opacity-30 -translate-y-20"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mb-20">
        <h1 className="text-6xl md:text-7xl text-[#FFBF00] font-bold mb-2 leading-tight">
          GOLDX
          Wallet
        </h1>

        <p className="text-xl text-[#FFBF00] md:text-2xl text-gray-300 mb-12 leading-relaxed">
          Your secure crypto wallet to explore blockchain
        </p>

              {/* <Features /> */}
              <Features3/>
              <button
        style={{ background: "linear-gradient(135deg, #FFBF00 0%, #FF8000 100%)" }}
                  className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105 max-sm:mb-6">
          Get started
          <span>→</span>
        </button>
          </div>
 <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scaleX(0.8) scaleY(0.6) translateZ(0px);
            opacity: 1;
          }
          50% {
            transform: scaleX(0.9) scaleY(0.7) translateZ(0px);
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

        .gradient-glow {
          animation: pulse 4s ease-in-out infinite;
        }

        .ellipse-ripple {
          animation: ripple 3s ease-out infinite;
        }
      `}</style>

          
          {/* Gradient Glow - positioned below button */}
          <div
          className="absolute left-0 right-0"
          style={{
            bottom: '-10%',
            height: '70%',

      backgroundImage: 'radial-gradient(circle at 50% 100%, rgba(255, 128, 0, 1) 5%, rgba(255, 191, 0, 0.9) 25%, rgba(255, 191, 0, 0.6) 35%, rgba(255, 191, 0, 0.3) 45%, transparent 65%)',
            transformOrigin: '50% 100%',
            opacity: 1,
            transform: 'scaleX(0.8) scaleY(0.6) translateZ(0px)'
          }}
          aria-hidden="true"
          />
          

    </section>
  )
}