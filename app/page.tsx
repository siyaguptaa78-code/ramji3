'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Trophy, MessageCircle, ShieldCheck, Zap, ArrowRight, 
  Flame, CheckCircle, Sparkles, TrendingUp, Cpu, Radio, Play
} from 'lucide-react';
import { 
  SITE_CONFIGS, 
  MOCK_MATCHES, 
  MOCK_CASINO_GAMES, 
  GENERAL_FAQS, 
  MatchCard, 
  CasinoCard, 
  QuickBetSlipModal, 
  WhatsAppCtaModal, 
  FaqAccordion, 
  ProvidersBar, 
  PaymentMethodsBar,
  WHATSAPP_LINK, 
  Match 
} from '@ramji/shared';

const config = SITE_CONFIGS.ramji3;

export default function HomePage() {
  const [selectedSport, setSelectedSport] = useState<string>('all');
  const [betSlipOpen, setBetSlipOpen] = useState(false);
  const [ctaModalOpen, setCtaModalOpen] = useState(false);
  const [activeSelection, setActiveSelection] = useState<{
    match: Match;
    team: string;
    odds: number;
    type: 'back' | 'lay';
  } | null>(null);

  const handleSelectOdds = (match: Match, team: string, odds: number, type: 'back' | 'lay') => {
    setActiveSelection({ match, team, odds, type });
    setBetSlipOpen(true);
  };

  const filteredMatches = selectedSport === 'all' 
    ? MOCK_MATCHES 
    : MOCK_MATCHES.filter(m => m.sport === selectedSport);

  return (
    <div className="w-full">
      {/* 1. CYBER HERO BANNER */}
      <section className="relative overflow-hidden py-12 sm:py-20 border-b border-emerald-500/20 bg-gradient-to-b from-[#0a1e18] via-[#071310] to-[#060e12]">
        <div className="absolute top-0 left-1/3 w-[650px] h-[350px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase">
                <Radio size={14} className="animate-pulse" />
                <span>Next-Gen Sportsbook Engine • Live Odds Sync</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
                Faster Odds. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  Instant WhatsApp IDs.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Connect to <strong className="text-emerald-400 font-semibold">Ramji3</strong> for dynamic in-play cricket, international soccer leagues, and high-frequency crash games. Zero registration friction, instant deposits and rapid 2-minute UPI cashouts.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={() => setCtaModalOpen(true)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-sm tracking-wide shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all hover:scale-[1.02]"
                >
                  <MessageCircle size={18} className="fill-white" />
                  <span>Start on WhatsApp in 60s</span>
                </button>

                <button
                  onClick={() => setCtaModalOpen(true)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 border border-emerald-500/40 text-emerald-300 font-bold text-sm transition-all"
                >
                  <Play size={16} className="fill-current" />
                  <span>Test Free Demo ID</span>
                </button>
              </div>

              {/* Quick Spec Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10 text-xs">
                <div className="p-2.5 rounded-lg bg-neutral-900/50 border border-neutral-800">
                  <div className="text-emerald-400 font-mono font-bold text-base">0% Comm</div>
                  <div className="text-[11px] text-neutral-400">On Matched Odds</div>
                </div>
                <div className="p-2.5 rounded-lg bg-neutral-900/50 border border-neutral-800">
                  <div className="text-cyan-400 font-mono font-bold text-base">&lt; 15s</div>
                  <div className="text-[11px] text-neutral-400">WhatsApp Reply</div>
                </div>
                <div className="p-2.5 rounded-lg bg-neutral-900/50 border border-neutral-800">
                  <div className="text-amber-400 font-mono font-bold text-base">₹100</div>
                  <div className="text-[11px] text-neutral-400">Min Starting Refill</div>
                </div>
                <div className="p-2.5 rounded-lg bg-neutral-900/50 border border-neutral-800">
                  <div className="text-rose-400 font-mono font-bold text-base">1000+</div>
                  <div className="text-[11px] text-neutral-400">Live Casino Tables</div>
                </div>
              </div>
            </div>

            {/* Right Column: Football & Cricket In-Play Matrix */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-neutral-900/90 border border-emerald-500/30 p-5 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-emerald-500/20 text-xs">
                  <span className="font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                    <Flame size={14} className="text-red-500 animate-pulse" />
                    PREMIER LEAGUE LIVE 62&apos;
                  </span>
                  <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-bold text-[10px]">IN-PLAY</span>
                </div>

                <div className="bg-black/50 rounded-xl p-4 border border-white/5 space-y-2 mb-4">
                  <div className="flex justify-between items-center text-sm font-bold text-white">
                    <span>Arsenal</span>
                    <span className="text-emerald-400 font-mono text-base">2</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-bold text-white">
                    <span>Manchester City</span>
                    <span className="text-emerald-400 font-mono text-base">1</span>
                  </div>
                  <div className="text-[11px] text-neutral-400 pt-1 font-mono">
                    Possession: 54% - 46% • Next Goal Market Active
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4 text-xs font-mono">
                  <button
                    onClick={() => handleSelectOdds(MOCK_MATCHES[3], 'Arsenal', 1.85, 'back')}
                    className="p-2 rounded bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-center"
                  >
                    <div className="text-[10px] text-neutral-400">1 (ARS)</div>
                    <div className="font-bold text-emerald-400">1.85</div>
                  </button>
                  <button
                    onClick={() => handleSelectOdds(MOCK_MATCHES[3], 'Draw', 3.20, 'back')}
                    className="p-2 rounded bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-center"
                  >
                    <div className="text-[10px] text-neutral-400">X (Draw)</div>
                    <div className="font-bold text-cyan-400">3.20</div>
                  </button>
                  <button
                    onClick={() => handleSelectOdds(MOCK_MATCHES[3], 'Manchester City', 3.40, 'back')}
                    className="p-2 rounded bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-center"
                  >
                    <div className="text-[10px] text-neutral-400">2 (MCI)</div>
                    <div className="font-bold text-amber-400">3.40</div>
                  </button>
                </div>

                <button
                  onClick={() => setCtaModalOpen(true)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                >
                  <Zap size={14} />
                  <span>Trade Live Football on WhatsApp</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MATCHES LIST */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">
              <Trophy size={14} />
              <span>Multi-Sport Sportsbook</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Live & Upcoming Global Tournaments
            </h2>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: 'all', label: 'All Fixtures' },
              { id: 'cricket', label: 'Cricket' },
              { id: 'football', label: 'Football' },
              { id: 'tennis', label: 'Tennis' },
              { id: 'kabaddi', label: 'Kabaddi' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedSport(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  selectedSport === tab.id
                    ? 'bg-emerald-500 text-neutral-950 shadow-md'
                    : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredMatches.map((match) => (
            <MatchCard
              key={match.id}
              match={match}
              onSelectOdds={handleSelectOdds}
              brandPrimary="text-emerald-400"
            />
          ))}
        </div>
      </section>

      {/* 3. CASINO & CRASH SECTION */}
      <section className="py-12 sm:py-16 bg-neutral-950/80 border-y border-emerald-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Speed & High RTP</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Turbo Casino & Instant Games</h2>
            </div>
            <Link href="/casino" className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1">
              <span>View All Games</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {MOCK_CASINO_GAMES.map((game) => (
              <CasinoCard
                key={game.id}
                game={game}
                onPlayDemo={() => setCtaModalOpen(true)}
                brandPrimary="text-emerald-400"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. PAYMENT & PROVIDERS */}
      <PaymentMethodsBar />
      <ProvidersBar />

      {/* 5. FAQS */}
      <FaqAccordion 
        faqs={GENERAL_FAQS}
        title="Ramji3 Frequently Asked Questions"
        subtitle="Quick answers on ID creation, sportsbook markets, and 2-minute UPI cashouts."
        brandPrimary="text-emerald-400"
      />

      {/* MODALS */}
      <QuickBetSlipModal
        isOpen={betSlipOpen}
        onClose={() => setBetSlipOpen(false)}
        selection={activeSelection}
        siteName={config.name}
      />

      <WhatsAppCtaModal
        isOpen={ctaModalOpen}
        onClose={() => setCtaModalOpen(false)}
        siteName={config.name}
      />
    </div>
  );
}

