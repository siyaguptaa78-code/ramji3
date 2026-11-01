import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Responsible Gaming & Safe In-Play Guidelines",
  description: "Practical tools and strict guidelines for balanced and mindful in-play participation on RAMJI247 Live.",
  keywords: ["responsible in-play gaming","match timeout limit","RAMJI247 safe play"],
  alternates: {
    canonical: "https://ramji247cricket.live/responsible-gaming",
  },
  openGraph: {
    title: "Responsible Gaming & Safe In-Play Guidelines | RAMJI247",
    description: "Practical tools and strict guidelines for balanced and mindful in-play participation on RAMJI247 Live.",
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
    title: "Responsible Gaming & Safe In-Play Guidelines | RAMJI247",
    description: "Practical tools and strict guidelines for balanced and mindful in-play participation on RAMJI247 Live.",
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
