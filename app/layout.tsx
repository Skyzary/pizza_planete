import type { Metadata, Viewport } from 'next';
import { Caveat, Nunito } from 'next/font/google';
import '../styles/globals.scss';
import { ReactNode } from 'react';
import { RestaurantJsonLd } from '../components/seo/RestaurantJsonLd';
import { StickyMobileBar } from '../components/molecules/StickyMobileBar/StickyMobileBar';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pizza-planete.fr';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Pizza Planète | Pizzeria artisanale & Livraison Gratuite à Fabrègues (34690)',
    template: '%s | Pizza Planète Fabrègues',
  },
  description:
    'Pizzeria artisanale à Fabrègues (34690). Plus de 50 pizzas savoureuses cuites avec passion. Livraison 100% gratuite à domicile ou au travail, paiement CB & tickets resto. Commandez au 04 67 85 34 34.',
  keywords: [
    'pizza fabregues',
    'pizzeria fabregues',
    'livraison pizza fabregues',
    'pizza 34690',
    'pizza planete fabregues',
    'pizza cournonterral',
    'livraison gratuite pizza',
    'commander pizza fabregues',
    'pizzeria hérault',
  ],
  authors: [{ name: 'Pizza Planète' }],
  creator: 'Pizza Planète',
  publisher: 'Pizza Planète',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pizza Planète | Pizzeria artisanale & Livraison Gratuite à Fabrègues',
    description:
      'Pizzeria artisanale à Fabrègues (34690). Plus de 50 recettes au choix, livraison 100% gratuite, paiement CB & tickets resto acceptés.',
    url: siteUrl,
    siteName: 'Pizza Planète Fabrègues',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Pizza Planète - Pizzeria artisanale à Fabrègues',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pizza Planète | Pizzeria artisanale à Fabrègues (34690)',
    description:
      'Pizzas artisanales avec livraison 100% gratuite à Fabrègues. Commandez par téléphone au 04 67 85 34 34.',
    images: ['/banner.jpg'],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/icon.svg' }],
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" className={`${caveat.variable} ${nunito.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/banner.webp"
          type="image/webp"
          fetchPriority="high"
        />
        <RestaurantJsonLd />
      </head>
      <body>
        {children}
        <StickyMobileBar />
      </body>
    </html>
  );
}
