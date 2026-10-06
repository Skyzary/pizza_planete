import type { Metadata } from 'next';
import { Caveat, Nunito } from 'next/font/google';
import '../styles/globals.scss';
import { ReactNode } from 'react';

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

export const metadata: Metadata = {
  title: 'Pizza Planète - Les meilleures pizzas',
  description: 'Découvrez nos délicieuses pizzas chez Pizza Planète. Commandez par téléphone au 04 67 85 34 34.',
  keywords: 'pizza, pizzeria, commander pizza, pizza planète',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" className={`${caveat.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}
