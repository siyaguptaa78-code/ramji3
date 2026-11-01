import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Match-Day Boosts & Live Bonuses",
  description: "Exclusive match-day odds boosts, deposit reload promotions, and live in-play perks on RAMJI247 Live.",
  keywords: ["live cricket odds boost","matchday bonus","RAMJI247 live promo"],
  alternates: {
    canonical: "https://ramji247cricket.live/promotions",
  },
  openGraph: {
    title: "Match-Day Boosts & Live Bonuses | RAMJI247",
    description: "Exclusive match-day odds boosts, deposit reload promotions, and live in-play perks on RAMJI247 Live.",
    url: "https://ramji247cricket.live/promotions",
    siteName: "RAMJI247",
    images: [
      {
        url: '/images/logo.png',
        width: 1000,
        height: 216,
        alt: "RAMJI247 Official Logo",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Match-Day Boosts & Live Bonuses | RAMJI247",
    description: "Exclusive match-day odds boosts, deposit reload promotions, and live in-play perks on RAMJI247 Live.",
    images: ['/images/logo.png'],
  },
};

export default function SubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
