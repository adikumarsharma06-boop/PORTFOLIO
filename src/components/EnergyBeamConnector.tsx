import React from 'react';

interface EnergyBeamConnectorProps {
  label?: string;
  targetId?: string;
}

export const EnergyBeamConnector: React.FC<EnergyBeamConnectorProps> = ({
  label = "FLOW",
  targetId = "about-section"
}) => {
  const handleScrollToTarget = () => {
    if (targetId) {
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative w-full h-24 sm:h-28 flex flex-col items-center justify-center overflow-hidden pointer-events-none select-none my-2">
      {/* Background soft ambient halo */}
      <div className="absolute w-72 h-40 bg-gradient-to-b from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-2xl pointer-events-none" />

      {/* Main Continuous Downstream Transmission Track */}
      <div className="relative w-full max-w-xl h-full flex flex-col items-center">
        {/* Top Node Connector Point */}
        <div className="w-2.5 h-2.5 rounded-full bg-[#080808] border border-cyan-400 shadow-[0_0_8px_#22d3ee] z-20 flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-white animate-ping" />
        </div>

        {/* The Dynamic Downstream Beam Line */}
        <div className="relative w-[2px] flex-1 bg-gradient-to-b from-cyan-500/40 via-[#262626] to-blue-500/40 overflow-hidden">
          {/* Downstream traveling transmission pulse */}
          <div className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-cyan-300 to-transparent shadow-[0_0_16px_#22d3ee] animate-energy-drop" />
          
          {/* Secondary delayed pulse beam */}
          <div className="absolute inset-x-0 h-12 bg-gradient-to-b from-transparent via-purple-400 to-transparent shadow-[0_0_14px_#c084fc] animate-energy-drop-delayed" />
        </div>

        {/* Floating Center Indicator - No icon, clean minimal downstream jump */}
        <div className="pointer-events-auto my-[-12px] z-20">
          <button
            onClick={handleScrollToTarget}
            className="group px-3.5 py-1 rounded-full bg-[#161616] border border-[#262626] hover:border-cyan-400 text-[#969696] hover:text-[#F2F0EA] text-[10px] font-mono uppercase tracking-widest flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>{label}</span>
            <span className="text-cyan-400 group-hover:translate-y-0.5 transition-transform text-xs">↓</span>
          </button>
        </div>

        {/* Bottom Destination Node */}
        <div className="relative w-[2px] flex-1 bg-gradient-to-b from-blue-500/40 via-[#262626] to-indigo-500/40 overflow-hidden">
          <div className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-[0_0_16px_#22d3ee] animate-energy-drop" />
        </div>

        {/* Target Anchor Dot */}
        <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] z-20" />
      </div>
    </div>
  );
};
