import type { Metadata } from 'next';
import './globals.css';
import { 
  Navbar, 
  Footer, 
  WhatsAppFloatingButton, 
  LiveTicker, 
  JsonLd,
  SITE_CONFIGS 
} from '@ramji/shared';

const config = SITE_CONFIGS.ramji3;

export const metadata: Metadata = {
  metadataBase: new URL('https://ramji247cricket.live'),
  title: {
    default: "RAMJI247 | Live Cricket Odds, Real-Time Ball-by-Ball Match Updates & In-Play Exchange",
    template: "%s | RAMJI247",
  },
  description: config.description,
  keywords:   [
      "RAMJI247 Live",
      "Live Cricket Match Information",
      "Live Cricket Scores & Odds",
      "In-Play Cricket Trading",
      "T20 World Cup Live Rates",
      "Ball by Ball Match Exchange",
      "Live Cricket Rates",
      "Cricket ID Live In-Play",
      "Real Time Match Odds"
  ],
  authors: [{ name: config.name }],
  creator: config.name,
  publisher: config.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: config.domain,
  },
  verification: {
    google: 'jj2-4tEzlZA3Bi_8gYa5XBKNTiVhSMglfm0Dj-u3qsI',
  },
  openGraph: {
    title: `${config.name} | Next-Gen Sportsbook & Turbo Casino`,
    description: config.description,
    url: config.domain,
    siteName: config.name,
    images: [
      {
        url: '/images/logo.png',
        width: 1000,
        height: 216,
        alt: `${config.name} Official Logo`,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${config.name} | Fast Live Sports Odds on WhatsApp`,
    description: config.description,
    images: ['/images/logo.png'],
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${config.domain}/#website`,
        'url': config.domain,
        'name': config.name,
        'description': config.description,
        'publisher': {
          '@id': `${config.domain}/#organization`
        }
      },
      {
        '@type': 'Organization',
        '@id': `${config.domain}/#organization`,
        'name': config.name,
        'url': config.domain,
        'logo': `${config.domain}/images/logo.png`,
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': `+91-${config.whatsappNumber}`,
          'contactType': 'customer service',
          'availableLanguage': ['English', 'Hindi']
        }
      }
    ]
  };

  return (
    <html lang="en" className="dark">
      <head>
        <JsonLd data={jsonLdData} />
      </head>
      <body className="bg-[#060e12] text-neutral-100 flex flex-col min-h-screen antialiased selection:bg-emerald-500 selection:text-black">
        <LiveTicker badgeText="RAMJI3 IN-PLAY" />
        <Navbar 
          siteName={config.name} 
          brandNumber={config.brandNumber}
          accentColor="text-emerald-400 border-emerald-500/30"
          badgeStyle="bg-emerald-500/10 text-emerald-400"
        />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer 
          siteName={config.name} 
          brandNumber={config.brandNumber} 
          tagline={config.tagline} 
        />
        <WhatsAppFloatingButton 
          siteName={config.name} 
          customMessage={config.defaultWhatsAppMessage} 
        />
      </body>
    </html>
  );
}

