import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Match Settlement & Terms of Information",
  description: "Transparent match settlement criteria, rain/abandonment rules, and informational terms for RAMJI247 Live.",
  keywords: ["cricket settlement rules","rain match rules cricket","RAMJI247 live terms"],
  alternates: {
    canonical: "https://ramji247cricket.live/terms",
  },
  openGraph: {
    title: "Match Settlement & Terms of Information | RAMJI247",
    description: "Transparent match settlement criteria, rain/abandonment rules, and informational terms for RAMJI247 Live.",
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
    title: "Match Settlement & Terms of Information | RAMJI247",
    description: "Transparent match settlement criteria, rain/abandonment rules, and informational terms for RAMJI247 Live.",
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
