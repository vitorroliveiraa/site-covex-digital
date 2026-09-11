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
    default: 'Covex Digital | Presença Digital para Negócios Locais em João Pessoa',
    template: '%s | Covex Digital',
  },
  description: siteConfig.description,
  keywords: [
    'seo local joão pessoa',
    'presença digital joão pessoa',
    'google meu negócio joão pessoa',
    'site para negócio local',
    'marketing digital joão pessoa',
    'covex digital',
    'google meu negócio',
    'performance digital',
  ],
  authors: [{ name: 'Covex Digital' }],
  creator: 'Covex Digital',
  publisher: 'Covex Digital',
  openGraph: {
    title: 'Covex Digital | Presença Digital para Negócios Locais em João Pessoa',
    description:
      'Seu negócio achável no Google, com Google Meu Negócio, site e indexação técnica trabalhando juntos.',
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Covex Digital | Presença Digital para Negócios Locais em João Pessoa',
    description:
      'Seu negócio achável no Google, com Google Meu Negócio, site e indexação técnica trabalhando juntos.',
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
  icons: {
    icon: '/favicon.svg',
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
  priceRange: '$$',
  telephone: `+${siteConfig.whatsapp.number}`,
  areaServed: {
    '@type': 'City',
    name: 'João Pessoa',
    containedInPlace: {
      '@type': 'State',
      name: 'Paraíba',
    },
  },
  serviceType: [
    'Presença Digital e SEO Local',
    'Google Meu Negócio',
    'Desenvolvimento de Sites e Landing Pages',
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
