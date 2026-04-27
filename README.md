# Covex Digital — Site Institucional

Site institucional SPA da **Covex Digital**, gestor de tráfego pago. Foco em posicionamento, autoridade e conversão via WhatsApp.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** com paleta customizada da marca
- **Framer Motion** para animações de entrada e scroll
- **Lucide React** para ícones
- **next/font** (Syne + Plus Jakarta Sans) com `display: swap`
- SEO completo com `next/metadata` + JSON-LD (`ProfessionalService`)

## Identidade visual

- Tema escuro (`#0a0a0a`) com destaque em roxo `#531f7b`
- Linguagem visual: **Liquid Glass** (`liquid-glass`, `liquid-glass-strong`, `liquid-glass-purple`)
- Orbs/blobs animados com `filter: blur(...)` para profundidade
- Tipografia premium: Syne (display) + Plus Jakarta Sans (corpo)

## Estrutura

```
app/
  layout.tsx          # Metadata global, fontes, JSON-LD
  page.tsx            # Composição das seções (SPA)
  globals.css         # CSS vars, classes glass, animações
components/
  Navbar.tsx          # Navbar fixa com glass on scroll + mobile menu
  Hero.tsx            # Headline, CTAs, métricas flutuantes
  About.tsx           # Posicionamento + diferenciais
  Services.tsx        # Grid de serviços com hover glow
  Results.tsx         # Counters animados + carrossel de depoimentos
  Process.tsx         # Timeline horizontal/vertical de 4 etapas
  CTAFinal.tsx        # Seção fullscreen com pulse no botão
  Footer.tsx          # Links, redes sociais, contato
  WhatsAppButton.tsx  # Botão flutuante fixo
  ui/
    GlassCard.tsx
    AnimatedCounter.tsx
    GradientOrb.tsx
lib/
  site.ts             # Config (WhatsApp, social, URL canônica)
```

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm start
```

## Configurações para ajustar antes de publicar

Em `lib/site.ts`:

- `whatsapp.number` — número real do WhatsApp (formato internacional sem `+`, ex.: `5545999999999`)
- `whatsapp.display` — exibição formatada
- `social.instagram`, `social.linkedin`, `email`
- `url` — URL canônica de produção

Em `app/layout.tsx`:

- Atualizar a imagem OpenGraph (`/og-image.jpg` na pasta `public/` quando criar)

## Acessibilidade & Performance

- HTML semântico (`main`, `section`, `article`, `header`, `footer`)
- `aria-label` em elementos interativos
- Suporte a `prefers-reduced-motion`
- Fontes com `display: swap`
- `will-change` aplicado apenas em orbs animados
- Compressão habilitada e remoção do header `x-powered-by`
