import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center justify-center pt-12 pb-8 px-4 text-center animate-fade-in">
      <div className="w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-slate-800 to-slate-700 border-2 border-slate-600 shadow-2xl flex items-center justify-center overflow-hidden">
        {/* Placeholder for profile image - using text initials for sleek look if no image provided */}
        <span className="text-3xl font-bold text-slate-400">SN</span>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-3 tracking-tighter uppercase">
        Sly NoBody
      </h1>
      
      <div className="h-1 w-20 bg-cyan-500 rounded-full mb-4 opacity-80"></div>
      
      <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-cyan-400 uppercase">
        PRODUCER * LYRICIST * VOCALIST
      </p>
    </header>
  );
};