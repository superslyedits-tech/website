import React from 'react';
import { MapPin, Mail } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="w-full max-w-2xl mx-auto mt-16 mb-12 px-6 animate-fade-in text-center">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-12"></div>
      
      <h2 className="text-2xl font-bold text-slate-100 mb-6 tracking-tight">ABOUT ME</h2>
      
      <div className="prose prose-invert mx-auto">
        <p className="text-slate-400 leading-relaxed text-lg mb-8">
          I'm a recording artist, producer & writer born in Sarasota, Florida. 
          I'm currently based in <span className="text-slate-200">San Francisco</span>.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-slate-500 mb-8">
           <div className="flex items-center gap-2">
              <Mail size={16} className="text-cyan-500" />
              <a href="mailto:slybusiness111@gmail.com" className="hover:text-cyan-400 transition-colors">slybusiness111@gmail.com</a>
           </div>
           <div className="flex items-center gap-2">
              <MapPin size={16} className="text-cyan-500" />
              <span>North Beach / Downtown SF</span>
           </div>
        </div>

        <p className="text-slate-500 italic text-sm">
          "Catch me sometime busking in North Beach, or downtown SF"
        </p>
      </div>
      
      <footer className="mt-16 text-xs text-slate-700 uppercase tracking-widest">
        © {new Date().getFullYear()} Sly NoBody
      </footer>
    </section>
  );
};