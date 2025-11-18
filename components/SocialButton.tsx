import React from 'react';
import { SocialLink } from '../types';
import { ExternalLink } from 'lucide-react';

interface SocialButtonProps {
  link: SocialLink;
  index: number;
}

export const SocialButton: React.FC<SocialButtonProps> = ({ link, index }) => {
  const baseDelay = 200; // ms
  const delay = baseDelay + index * 100;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative flex items-center justify-center w-full max-w-md p-4 mb-4 
        transition-all duration-300 ease-out
        border rounded-xl backdrop-blur-sm
        hover:scale-[1.02] active:scale-[0.98]
        animate-fade-in-up
        ${link.highlight 
          ? 'bg-cyan-900/40 border-cyan-500/50 hover:bg-cyan-800/50 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]' 
          : 'bg-slate-800/50 border-slate-700 hover:bg-slate-700/60 hover:border-slate-600 hover:shadow-lg'}
      `}
      style={{ animationDelay: `${delay}ms`, opacity: 0 }} // Start invisible for animation
    >
      {link.icon && (
        <span className={`absolute left-4 ${link.highlight ? 'text-cyan-400' : 'text-slate-400 group-hover:text-white'}`}>
          <link.icon size={24} />
        </span>
      )}
      
      <span className={`font-semibold tracking-wide ${link.highlight ? 'text-cyan-100' : 'text-slate-200'}`}>
        {link.label}
      </span>

      {link.isExternal && (
        <span className="absolute right-4 text-slate-500 group-hover:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink size={16} />
        </span>
      )}
    </a>
  );
};