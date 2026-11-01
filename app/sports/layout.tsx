import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Live In-Play Cricket & Sports Match Odds",
  description: "Track real-time ball-by-ball odds and live match sessions across all international and domestic cricket tournaments.",
  keywords: ["live in-play odds","cricket match session rates","live cricket trading"],
  alternates: {
    canonical: "https://ramji247cricket.live/sports",
  },
  openGraph: {
    title: "Live In-Play Cricket & Sports Match Odds | RAMJI247",
    description: "Track real-time ball-by-ball odds and live match sessions across all international and domestic cricket tournaments.",
    url: "https://ramji247cricket.live/sports",
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
    title: "Live In-Play Cricket & Sports Match Odds | RAMJI247",
    description: "Track real-time ball-by-ball odds and live match sessions across all international and domestic cricket tournaments.",
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
