import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service & Match Information Rules",
  description: "Read the RAMJI247 Terms of Service, informational platform scope, 18+ eligibility standards, and match settlement guidelines.",
  keywords: ["ramji247 terms of service","match settlement rules","RAMJI247 guidelines"],
  alternates: {
    canonical: "https://ramji247cricket.live/terms",
  },
  openGraph: {
    title: "Terms of Service & Match Information Rules | RAMJI247",
    description: "Read the RAMJI247 Terms of Service, informational platform scope, 18+ eligibility standards, and match settlement guidelines.",
    url: "https://ramji247cricket.live/terms",
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
    title: "Terms of Service & Match Information Rules | RAMJI247",
    description: "Read the RAMJI247 Terms of Service, informational platform scope, 18+ eligibility standards, and match settlement guidelines.",
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
