'use client';

import React, { useState } from 'react';
import { Sparkles, MessageCircle } from 'lucide-react';
import { 
  MOCK_CASINO_GAMES, 
  CasinoCard, 
  Breadcrumb, 
  WhatsAppCtaModal, 
  SITE_CONFIGS, 
  CasinoCategory 
} from '@ramji/shared';

const config = SITE_CONFIGS.ramji3;

export default function CasinoPage() {
  const [selectedCategory, setSelectedCategory] = useState<CasinoCategory>('all');
  const [ctaModalOpen, setCtaModalOpen] = useState(false);

  const filteredGames = selectedCategory === 'all'
    ? MOCK_CASINO_GAMES
    : MOCK_CASINO_GAMES.filter((g) => g.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Turbo Casino & Crash' }]} />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 my-6 pb-6 border-b border-emerald-500/20">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">
            <Sparkles size={14} />
            <span>High RTP Entertainment</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live Casino & Spribe Aviator Lounge
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Play Aviator, Teen Patti Live, Andar Bahar, and Lightning Roulette with certified fair RNG.
          </p>
        </div>

        <button
          onClick={() => setCtaModalOpen(true)}
          className="self-start md:self-auto flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
        >
          <MessageCircle size={15} />
          <span>Get Instant Demo</span>
        </button>
      </div>

      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none mb-8">
        {[
          { id: 'all', label: 'All Games' },
          { id: 'crash', label: '🚀 Aviator & Crash' },
          { id: 'indian', label: '🃏 Indian Tables' },
          { id: 'live-casino', label: '🎡 Live Dealers' },
          { id: 'slots', label: '🎰 Top Slots' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id as CasinoCategory)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === tab.id
                ? 'bg-emerald-500 text-neutral-950 shadow-md'
                : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <h2 className="sr-only">Available Live Casino &amp; Crash Games</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredGames.map((game) => (
          <CasinoCard
            key={game.id}
            game={game}
            onPlayDemo={() => setCtaModalOpen(true)}
            brandPrimary="text-emerald-400"
          />
        ))}
      </div>

      <WhatsAppCtaModal
        isOpen={ctaModalOpen}
        onClose={() => setCtaModalOpen(false)}
        siteName={config.name}
      />
    </div>
  );
}

