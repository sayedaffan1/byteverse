import React from 'react';

export const Logo = ({ size = 'md', showTagline = true, onClick }) => {
  const sizeMap = {
    sm: { icon: 28, text: 'text-xl' },
    md: { icon: 38, text: 'text-2xl' },
    lg: { icon: 54, text: 'text-4xl' }
  };

  const { icon, text } = sizeMap[size] || sizeMap.md;

  return (
    <div 
      onClick={onClick} 
      className={`inline-flex items-center gap-3 cursor-pointer group select-none transition-transform hover:scale-[1.02]`}
    >
      {/* Custom Vector Hexagonal Gateway Logo */}
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-300"></div>
        <svg 
          width={icon} 
          height={icon} 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="relative drop-shadow-[0_0_12px_rgba(0,242,254,0.5)] transition-transform group-hover:rotate-6 duration-300"
        >
          <defs>
            <linearGradient id="cyberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f2fe" />
              <stop offset="50%" stopColor="#9d4edd" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
            <linearGradient id="innerGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#9d4edd" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Hexagonal Frame */}
          <polygon 
            points="50,6 92,28 92,72 50,94 8,72 8,28" 
            fill="#0c111e" 
            stroke="url(#cyberGrad)" 
            strokeWidth="5" 
            strokeLinejoin="round" 
          />

          {/* Inner Accent Ring */}
          <polygon 
            points="50,15 84,33 84,67 50,85 16,67 16,33" 
            fill="none" 
            stroke="url(#innerGlow)" 
            strokeWidth="1.5" 
            strokeDasharray="4 2" 
          />

          {/* Code Angle Brackets < / > */}
          <path 
            d="M34 38 L22 50 L34 62" 
            stroke="#00f2fe" 
            strokeWidth="5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path 
            d="M66 38 L78 50 L66 62" 
            stroke="#ec4899" 
            strokeWidth="5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <line 
            x1="57" 
            y1="34" 
            x2="43" 
            y2="66" 
            stroke="#9d4edd" 
            strokeWidth="5" 
            strokeLinecap="round" 
          />

          {/* Central Power Core Gem */}
          <circle cx="50" cy="50" r="4.5" fill="#ffffff" className="animate-ping opacity-75 origin-center" />
          <circle cx="50" cy="50" r="3.5" fill="#00f2fe" />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className={`font-extrabold tracking-tight ${text} leading-none flex items-center gap-0.5`}>
          <span className="text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]">Byte</span>
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">Verse</span>
        </div>
        {showTagline && (
          <span className="text-[10px] uppercase tracking-widest text-cyan-400/80 font-mono mt-1 font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            PLAY &bull; LEARN &bull; CODE
          </span>
        )}
      </div>
    </div>
  );
};
