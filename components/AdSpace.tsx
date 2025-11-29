import React from 'react';

interface AdSpaceProps {
  type: 'banner' | 'rectangle';
  className?: string;
}

export const AdSpace: React.FC<AdSpaceProps> = ({ type, className = '' }) => {
  const heightClass = type === 'banner' ? 'h-24' : 'h-64';
  const widthClass = type === 'banner' ? 'w-full max-w-4xl' : 'w-full max-w-sm';

  return (
    <div className={`mx-auto flex flex-col items-center justify-center border-2 border-dashed border-slate-700 bg-slate-900/30 rounded-lg p-4 text-slate-500 hover:border-slate-600 hover:text-slate-400 transition-colors ${heightClass} ${widthClass} ${className}`}>
      <span className="text-xs uppercase tracking-widest font-semibold mb-1">Ad Space</span>
      <span className="text-xs opacity-50">Sponsor the Apocalypse</span>
    </div>
  );
};