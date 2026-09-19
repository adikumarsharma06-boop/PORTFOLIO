import React from 'react';

// Handwritten SVG arrow
export const HandDrawnArrow: React.FC<{ className?: string }> = ({ className = 'w-12 h-6 text-cyan-400' }) => (
  <svg viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path
      d="M2 15 C 25 14, 50 16, 75 14 M60 5 C 65 10, 72 13, 76 15 C 72 18, 66 22, 60 26"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Handwritten rough loop/circle to encircle tags
export const HandDrawnCircle: React.FC<{ className?: string }> = ({ className = 'w-24 h-12 text-cyan-400' }) => (
  <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path
      d="M10 25 C 10 12, 35 6, 60 7 C 85 8, 96 18, 92 32 C 87 44, 45 46, 22 43 C 8 40, 5 26, 18 16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Handwritten energetic underline mark
export const HandDrawnUnderline: React.FC<{ className?: string; color?: string }> = ({ 
  className = 'w-36 h-4 text-cyan-400',
  color = 'currentColor'
}) => (
  <svg viewBox="0 0 140 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path
      d="M2 10 C 35 4, 75 14, 110 7 C 122 5, 134 11, 138 9"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

// Handwritten scribble/marker accent
export const HandDrawnScribble: React.FC<{ className?: string }> = ({ className = 'w-16 h-8 text-lime-400' }) => (
  <svg viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path
      d="M4 14 Q 14 4, 22 16 T 38 12 T 54 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Editorial Creator Annotation Pill with Handwritten Texture
export const CreatorAnnotation: React.FC<{
  label: 'CREATE' | 'EDIT' | 'EXPERIMENT' | 'DOCUMENT';
  annotationType?: 'circle' | 'underline' | 'arrow' | 'marker';
  className?: string;
}> = ({ label, annotationType = 'marker', className = '' }) => {
  return (
    <div className={`relative inline-flex items-center select-none font-mono text-[11px] font-bold tracking-widest ${className}`}>
      {annotationType === 'circle' && (
        <span className="relative px-3 py-1 text-cyan-300">
          <HandDrawnCircle className="absolute inset-0 w-full h-full text-cyan-400/70 pointer-events-none" />
          <span>{label}</span>
        </span>
      )}

      {annotationType === 'underline' && (
        <span className="relative inline-block pb-1 text-[#F2F0EA]">
          <span>{label}</span>
          <HandDrawnUnderline className="absolute -bottom-1 left-0 w-full h-2 text-cyan-400 pointer-events-none" />
        </span>
      )}

      {annotationType === 'arrow' && (
        <span className="flex items-center gap-1.5 text-lime-400 font-semibold">
          <span>{label}</span>
          <HandDrawnArrow className="w-7 h-3.5 text-lime-400" />
        </span>
      )}

      {annotationType === 'marker' && (
        <span className="px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-500/30 rotate-[-2deg]">
          <span>// {label}</span>
        </span>
      )}
    </div>
  );
};
