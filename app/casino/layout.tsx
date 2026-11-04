import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Live Casino, Teen Patti & Crash Games",
  description: "Explore live dealer Teen Patti, Andar Bahar, Roulette, and Spribe Aviator crash games on RAMJI247 with 24/7 WhatsApp support.",
  keywords: ["ramji247 live casino","aviator crash game","teen patti live tables"],
  alternates: {
    canonical: "https://ramji247cricket.live/casino",
  },
  openGraph: {
    title: "Live Casino, Teen Patti & Crash Games | RAMJI247",
    description: "Explore live dealer Teen Patti, Andar Bahar, Roulette, and Spribe Aviator crash games on RAMJI247 with 24/7 WhatsApp support.",
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
    title: "Live Casino, Teen Patti & Crash Games | RAMJI247",
    description: "Explore live dealer Teen Patti, Andar Bahar, Roulette, and Spribe Aviator crash games on RAMJI247 with 24/7 WhatsApp support.",
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
