import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Live Cricket WhatsApp Helpline Desk",
  description: "Direct 24/7 WhatsApp assistance for live match odds, immediate ID delivery, and active match support.",
  keywords: ["live match support whatsapp","cricket id instant help","RAMJI247 live contact"],
  alternates: {
    canonical: "https://ramji247cricket.live/contact",
  },
  openGraph: {
    title: "Live Cricket WhatsApp Helpline Desk | RAMJI247",
    description: "Direct 24/7 WhatsApp assistance for live match odds, immediate ID delivery, and active match support.",
    url: "https://ramji247cricket.live/contact",
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
    title: "Live Cricket WhatsApp Helpline Desk | RAMJI247",
    description: "Direct 24/7 WhatsApp assistance for live match odds, immediate ID delivery, and active match support.",
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
