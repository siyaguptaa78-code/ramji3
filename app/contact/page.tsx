'use client';

import React from 'react';
import { MessageCircle, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Breadcrumb, SITE_CONFIGS, WHATSAPP_LINK, WHATSAPP_NUMBER } from '@ramji/shared';

const config = SITE_CONFIGS.ramji3;

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: '24/7 Official Contact & WhatsApp' }]} />

      <div className="text-center max-w-2xl mx-auto my-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Ramji3 Verified Support Desk
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400 mt-2">
          Connect immediately with our WhatsApp team for ID registration, rapid payouts, and live match trading.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-neutral-900/90 border border-emerald-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <MessageCircle className="w-8 h-8" />
          </div>
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">Primary Helpline</span>
            <h2 className="text-xl font-bold text-white">24/7 WhatsApp Hotline</h2>
          </div>
        </div>

        <div className="bg-black/60 rounded-xl p-4 border border-white/10 mb-6 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-neutral-400 block">Official Number:</span>
            <span className="text-lg font-mono font-bold text-emerald-400">+91 {WHATSAPP_NUMBER}</span>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold animate-pulse">
            ACTIVE NOW
          </span>
        </div>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg transition-all"
        >
          <MessageCircle size={18} className="fill-white" />
          <span>Chat on WhatsApp (+91 {WHATSAPP_NUMBER})</span>
          <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
}

