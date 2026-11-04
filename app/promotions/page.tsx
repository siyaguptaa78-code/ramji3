'use client';

import React, { useState } from 'react';
import { Gift, Zap, Star, ShieldCheck, MessageCircle } from 'lucide-react';
import { Breadcrumb, WhatsAppCtaModal, SITE_CONFIGS } from '@ramji/shared';

const config = SITE_CONFIGS.ramji3;

export default function PromotionsPage() {
  const [ctaModalOpen, setCtaModalOpen] = useState(false);

  const promos = [
    {
      title: '150% Super Boost on First Deposit',
      badge: 'NEW PLAYER EXCLUSIVE',
      desc: 'Turbocharge your balance with a 150% match bonus on WhatsApp ID activation. Min deposit ₹100.',
      code: 'TURBO150',
      icon: Zap,
    },
    {
      title: 'Weekly 12% In-Play Loss Refund',
      badge: 'AUTOMATIC REFUND',
      desc: 'Automatic 12% cashback credited to your account every Tuesday on all live sports bets.',
      code: 'CYBER12',
      icon: ShieldCheck,
    },
    {
      title: 'Aviator Crash Extra Multiplier Booster',
      badge: 'CRASH BONUS',
      desc: 'Get an extra 5% payout on any winning Aviator bet over 10x multiplier.',
      code: 'AVIATORBOOST',
      icon: Star,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Promotions & Offers' }]} />

      <div className="text-center max-w-2xl mx-auto my-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
          <Gift size={14} />
          <span>BOOSTERS & REWARDS</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          RAMJI247 Promotional Offers &amp; Rewards
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400 mt-2">
          Review active bonus structures and weekly rebates available through our 24/7 WhatsApp helpdesk.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        {promos.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className="rounded-2xl border border-emerald-500/30 bg-neutral-900/90 p-6 flex flex-col justify-between hover:border-emerald-500/60 transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-black/60 border border-emerald-500/20 text-emerald-400">
                    <Icon size={24} />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                    {p.badge}
                  </span>
                </div>
                <h2 className="text-base font-bold text-white mb-2">{p.title}</h2>
                <p className="text-xs text-neutral-300 leading-relaxed mb-4">{p.desc}</p>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-emerald-400">CODE: {p.code}</span>
                <button
                  onClick={() => setCtaModalOpen(true)}
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
                >
                  <MessageCircle size={13} />
                  <span>Claim</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <WhatsAppCtaModal
        isOpen={ctaModalOpen}
        onClose={() => setCtaModalOpen(false)}
        siteName={config.name}
      />
    </div>
  );
}

