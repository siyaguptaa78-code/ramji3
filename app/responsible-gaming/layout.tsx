import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Responsible Gaming & 18+ Safe Play Policy",
  description: "Learn about RAMJI247 18+ responsible gaming guidelines, session limits, bankroll discipline, and WhatsApp self-exclusion options.",
  keywords: ["ramji247 responsible gaming","18+ safe play policy","self exclusion whatsapp"],
  alternates: {
    canonical: "https://ramji247cricket.live/responsible-gaming",
  },
  openGraph: {
    title: "Responsible Gaming & 18+ Safe Play Policy | RAMJI247",
    description: "Learn about RAMJI247 18+ responsible gaming guidelines, session limits, bankroll discipline, and WhatsApp self-exclusion options.",
    url: "https://ramji247cricket.live/responsible-gaming",
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
    title: "Responsible Gaming & 18+ Safe Play Policy | RAMJI247",
    description: "Learn about RAMJI247 18+ responsible gaming guidelines, session limits, bankroll discipline, and WhatsApp self-exclusion options.",
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
