import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Live Casino & Crash Aviator Lounge",
  description: "Fast-paced live casino action, Spribe Aviator, and premium live card tables on RAMJI247 Live.",
  keywords: ["live casino live odds","aviator crash live","instant casino id"],
  alternates: {
    canonical: "https://ramji247cricket.live/casino",
  },
  openGraph: {
    title: "Live Casino & Crash Aviator Lounge | RAMJI247",
    description: "Fast-paced live casino action, Spribe Aviator, and premium live card tables on RAMJI247 Live.",
    url: "https://ramji247cricket.live/casino",
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
    title: "Live Casino & Crash Aviator Lounge | RAMJI247",
    description: "Fast-paced live casino action, Spribe Aviator, and premium live card tables on RAMJI247 Live.",
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
