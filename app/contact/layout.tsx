import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "24/7 Official WhatsApp Support & Helpline",
  description: "Contact the official RAMJI247 24/7 WhatsApp helpline (+91 8360750829) for live match inquiries, account assistance, and user support.",
  keywords: ["ramji247 whatsapp support","live cricket support desk","RAMJI247 contact"],
  alternates: {
    canonical: "https://ramji247cricket.live/contact",
  },
  openGraph: {
    title: "24/7 Official WhatsApp Support & Helpline | RAMJI247",
    description: "Contact the official RAMJI247 24/7 WhatsApp helpline (+91 8360750829) for live match inquiries, account assistance, and user support.",
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
    title: "24/7 Official WhatsApp Support & Helpline | RAMJI247",
    description: "Contact the official RAMJI247 24/7 WhatsApp helpline (+91 8360750829) for live match inquiries, account assistance, and user support.",
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
