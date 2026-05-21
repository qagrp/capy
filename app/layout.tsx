import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = 'https://www.yourbrand.com';
const description =
  'Premium custom made pendrives with logo printing for events, promotions, bulk orders, and corporate gifts across India. Request a fast, secure quote.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Custom Made Pendrives for Corporate Gifting | Your Brand',
  description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large'
    }
  },
  alternates: {
    canonical: '/'
  },
  icons: {
    icon: '/favicon.svg'
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Custom Made Pendrives for Corporate Gifting',
    description:
      'Premium branded USB drives for bulk orders, promotions, and corporate gifting with fast PAN India delivery.',
    images: [
      {
        url: `${siteUrl}/assets/og-custom-pendrives.webp`,
        width: 1200,
        height: 630,
        alt: 'Custom made pendrives with your logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Made Pendrives for Corporate Gifting',
    description:
      'Premium branded USB drives for bulk orders, promotions, and corporate gifting with fast PAN India delivery.',
    images: [`${siteUrl}/assets/og-custom-pendrives.webp`]
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
