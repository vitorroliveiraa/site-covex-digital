import type { Metadata, Viewport } from 'next';
import { Syne, Plus_Jakarta_Sans } from 'next/font/google';
import { config as faConfig } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { siteConfig } from '@/lib/site';
import './globals.css';

faConfig.autoAddCss = false;

const display = Syne({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const body = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Covex Digital | Gestão de Tráfego Pago — Meta Ads & Google Ads',
    template: '%s | Covex Digital',
  },
  description: siteConfig.description,
  keywords: [
    'gestor de tráfego pago',
    'meta ads',
    'google ads',
    'tráfego pago',
    'marketing digital',
    'covex digital',
    'gestão de anúncios',
    'performance digital',
    'roi marketing',
  ],
  authors: [{ name: 'Covex Digital' }],
  creator: 'Covex Digital',
  publisher: 'Covex Digital',
  openGraph: {
    title: 'Covex Digital | Tráfego Pago com Performance',
    description:
      'Gestão estratégica de Meta Ads e Google Ads. ROI real, sem promessas vazias.',
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Covex Digital | Tráfego Pago com Performance',
    description:
      'Gestão estratégica de Meta Ads e Google Ads. ROI real, sem promessas vazias.',
  },
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
    canonical: siteConfig.url,
  },
  category: 'business',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${siteConfig.url}#organization`,
  name: 'Covex Digital',
  description: siteConfig.description,
  url: siteConfig.url,
  image: `${siteConfig.url}/og-image.jpg`,
  priceRange: '$$',
  telephone: `+${siteConfig.whatsapp.number}`,
  areaServed: {
    '@type': 'Country',
    name: 'Brasil',
  },
  serviceType: [
    'Gestão de Tráfego Pago',
    'Meta Ads',
    'Google Ads',
    'Consultoria em Marketing Digital',
  ],
  sameAs: [siteConfig.social.instagram, siteConfig.social.linkedin],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-dark text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
