export const siteConfig = {
  name: 'Covex Digital',
  url: 'https://covexdigital.com.br',
  description:
    'Parceiro estratégico digital de clínicas, escritórios e pequenas empresas. Aquisição de clientes, presença digital e eficiência operacional — com estratégia, clareza e resultado real.',
  whatsapp: {
    number: '5545988285931',
    display: '+55 (45) 98828-5931',
    message:
      'Olá! Vim pelo site da Covex Digital e gostaria de entender como vocês podem ajudar meu negócio a crescer.',
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
