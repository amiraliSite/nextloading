"use client";


export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center 8a!*
bg-black overflow-hidden">
      
     
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.12)_0%,_rgba(15,23,42,0.4)_40%,_#000000_100%)]" />
      
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

     
      <div className="relative w-56 h-56" style={{ perspective: "1000px", transformStyle: "preserve-3d" }}>
        
   
        <div className="absolute top-1/2 left-1/2 w-3 h-3 -mt-1.5 -ml-1.5 rounded-full bg-white shadow-[0_0_20px_#fff,0_0_40px_#3b82f6,0_0_80px_#8b5cf6]" 
             style={{ animation: "corePulse 2s ease-in-out infinite" }} />

       
        <div className="absolute inset-0 rounded-full border border-cyan-400/40 shadow-[0_0_20px_rgba(34,211,238,0.4),inset_0_0_20px_rgba(34,211,238,0.1)]"
             style={{ animation: "spinX 4s linear infinite", transformStyle: "preserve-3d" }} />

      
        <div className="absolute inset-4 rounded-full border border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.4),inset_0_0_20px_rgba(168,85,247,0.1)]"
             style={{ animation: "spinY 5s linear infinite reverse", transformStyle: "preserve-3d" }} />

       
        <div className="absolute inset-8 rounded-full border border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.4),inset_0_0_20px_rgba(59,130,246,0.1)]"
             style={{ animation: "spinZ 6s linear infinite", transformStyle: "preserve-3d" }} />

        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-1.5 h-1.5 -mt-0.75 -ml-0.75 rounded-full bg-cyan-300 shadow-[0_0_10px_#22d3ee]"
            style={{
              animation: `orbit 4s linear infinite`,
              animationDelay: `${i * 0.66}s`,
              transformOrigin: "center center"
            }}
          />
        ))}
      </div>

     
      <style>{`
        @keyframes spinX {
          0% { transform: rotateX(0deg); }
          100% { transform: rotateX(360deg); }
        }
        @keyframes spinY {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        @keyframes spinZ {
          0% { transform: rotateZ(0deg); }
          100% { transform: rotateZ(360deg); }
        }
        @keyframes corePulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.8; }
        }
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(110px) rotate(0deg) scale(0.5); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: rotate(360deg) translateX(110px) rotate(-360deg) scale(0.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
}