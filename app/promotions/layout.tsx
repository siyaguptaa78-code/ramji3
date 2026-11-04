import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Match-Day Promotions & Weekly Rewards",
  description: "Review active RAMJI247 match-day promotions, welcome bonus structures, and weekly in-play reward terms via our 24/7 WhatsApp desk.",
  keywords: ["ramji247 promotions","matchday bonus offers","RAMJI247 rewards"],
  alternates: {
    canonical: "https://ramji247cricket.live/promotions",
  },
  openGraph: {
    title: "Match-Day Promotions & Weekly Rewards | RAMJI247",
    description: "Review active RAMJI247 match-day promotions, welcome bonus structures, and weekly in-play reward terms via our 24/7 WhatsApp desk.",
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
    title: "Match-Day Promotions & Weekly Rewards | RAMJI247",
    description: "Review active RAMJI247 match-day promotions, welcome bonus structures, and weekly in-play reward terms via our 24/7 WhatsApp desk.",
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
