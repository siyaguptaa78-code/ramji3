import React from 'react';
import Link from 'next/link';
import { Home, MessageCircle, AlertCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '@ramji/shared';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md w-full bg-neutral-900/60 border border-emerald-500/20 rounded-2xl p-8 backdrop-blur-md shadow-2xl">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
          <AlertCircle size={32} />
        </div>
        <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
          Error 404 • Page Not Found
        </span>
        <h1 className="text-3xl font-extrabold text-white mt-2 mb-3">
          Match Not Found
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
          The requested sports event or casino fixture is currently offline. Head back to the live sports lobby or request demo access via WhatsApp.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all"
          >
            <Home size={15} />
            <span>Sportsbook Lobby</span>
          </Link>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs uppercase tracking-wider transition-all border border-neutral-700"
          >
            <MessageCircle size={15} />
            <span>WhatsApp Support</span>
          </a>
        </div>
      </div>
    </div>
  );
}

