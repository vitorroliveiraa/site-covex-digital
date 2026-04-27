export const siteConfig = {
  name: 'Covex Digital',
  url: 'https://covexdigital.com.br',
  description:
    'Especialista em tráfego pago com foco em ROI real. Gestão estratégica de Meta Ads e Google Ads para negócios que querem crescer com dados e performance.',
  whatsapp: {
    number: '5545988285931',
    display: '+55 (45) 98828-5931',
    message:
      'Olá! Vim pelo site da Covex Digital e gostaria de saber mais sobre gestão de tráfego pago.',
  },
  social: {
    instagram: 'https://instagram.com/covexdigital',
    linkedin: 'https://linkedin.com/company/covexdigital',
  },
  email: 'contato@covexdigital.com.br',
} as const;

export const buildWhatsappUrl = (text?: string) => {
  const message = encodeURIComponent(text ?? siteConfig.whatsapp.message);
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${message}`;
};
