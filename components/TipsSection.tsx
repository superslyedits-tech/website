import React from 'react';
import { DollarSign, CreditCard } from 'lucide-react';

export const TipsSection: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto mb-8 px-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700/50 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
        
        <h3 className="text-center text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Support The Art</h3>
        
        <div className="flex flex-col gap-3">
          {/* PayPal */}
          <a 
            href="https://paypal.me/slydylan13"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-4 py-3 bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#00457C] rounded-full text-white">
                <CreditCard size={16} />
              </div>
              <span className="text-sm font-medium text-slate-200">PayPal</span>
            </div>
            <span className="text-xs text-slate-500 group-hover:text-cyan-400 transition-colors">paypal.me/slydylan13</span>
          </a>

          {/* CashApp */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-800/80 rounded-lg border border-slate-700">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#00D632] rounded-full text-white">
                <DollarSign size={16} />
              </div>
              <span className="text-sm font-medium text-slate-200">Cash App</span>
            </div>
            <span className="text-xs font-mono text-emerald-400 select-all">$slydylan1313</span>
          </div>
        </div>
      </div>
    </div>
  );
};