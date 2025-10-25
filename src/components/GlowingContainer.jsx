import React from 'react';

export default function GlowingContainer() {
  const ellipses = [
    { width: 400, height: 350, opacity: 0.8, delay: '0s' },
    { width: 560, height: 450, opacity: 0.63, delay: '0.2s' },
    { width: 720, height: 550, opacity: 0.46, delay: '0.4s' },
    { width: 880, height: 650, opacity: 0.29, delay: '0.6s' },
    { width: 1040, height: 750, opacity: 0.12, delay: '0.8s' },
    { width: 1200, height: 850, opacity: 0.05, delay: '1s' },
    { width: 1360, height: 950, opacity: 0.01, delay: '1.2s' },
    // { width: 1520, height: 1050, opacity: 0.05, delay: '1.4s' },
    // { width: 1680, height: 1150, opacity: 0.05, delay: '1.6s' },
    // { width: 1840, height: 1250, opacity: 0.05, delay: '1.8s' },
    // { width: 2000, height: 1350, opacity: 0.05, delay: '2s' },
    // { width: 2160, height: 1450, opacity: 0.05, delay: '2.2s' }
  ];

  return (
    <div className="relative w-full min-h-screen bg-black flex justify-center items-center overflow-hidden">
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

      <div className="absolute w-full h-full overflow-hidden pointer-events-none">
        {/* Bottom Gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 gradient-glow"
          style={{
            height: '80%',
            backgroundImage: 'radial-gradient(circle at 50% 100%, #FF8000 10%, #FFBF00 25%, #FFBF00 35%, #FFBF00 45%, transparent 65%)',
            transformOrigin: '50% 100%',
            opacity: 1,
            transform: 'scaleX(0.8) scaleY(0.6) translateZ(0px)'
          }}
          aria-hidden="true"
        />

        {/* Concentric Ellipses */}
        <div className="absolute -bottom-[200px] w-full h-full flex justify-center items-end pointer-events-none">
          {ellipses.map((ellipse, index) => (
            <span
              key={index}
              className="absolute bottom-0 ellipse-ripple"
              style={{
                width: `${ellipse.width}px`,
                height: `${ellipse.height}px`,
                opacity: ellipse.opacity,
                border: '1px dotted #FFBF00',
                borderRadius: '50%',
                animationDelay: ellipse.delay,
               
              }}
            />
          ))}
        </div>
      </div>

  
    </div>
  );
}