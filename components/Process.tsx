'use client';

import { motion } from 'framer-motion';
import { ClipboardCheck, Rocket, Search, TrendingUp } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { GradientOrb } from './ui/GradientOrb';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Diagnóstico',
    description:
      'Auditoria do que existe hoje: Google Meu Negócio, site e indexação. Identificação de buracos e oportunidades reais.',
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'Estrutura',
    description:
      'Plano da presença completa: GMN otimizado, site rápido e indexação correta, com prioridade clara do que resolve primeiro.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Execução',
    description:
      'Construção e ajustes técnicos: schema certo pro seu negócio, performance e conteúdo local, sem atalho que quebra depois.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Acompanhamento',
    description:
      'Monitoramento da posição no Google e do tráfego orgânico, com ajustes contínuos conforme o negócio evolui.',
  },
];

export function Process() {
  return (
    <section
      id="processo"
      className="relative isolate overflow-hidden section-padding"
    >
      <GradientOrb
        color="purple"
        size={460}
        className="-right-32 top-20"
        opacity={0.28}
      />
      <GradientOrb
        color="mixed"
        size={400}
        className="-left-24 bottom-10"
        opacity={0.22}
        style={{ animationDelay: '5s' }}
      />

      <div className="container-fluid">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Um método claro do <span className="text-gradient-purple">primeiro briefing</span>
            {' '}até o resultado.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
            Sem improviso. Cada etapa existe pra reduzir risco e encurtar o caminho
            até você aparecer no Google.
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16"
        >
          <GlassCard variant="strong" className="overflow-hidden">
            <ol
              className="grid divide-y divide-white/10 md:grid-cols-4 md:divide-x md:divide-y-0"
              aria-label="Etapas do processo de trabalho"
            >
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <li key={step.number} className="p-7 md:p-8">
                    <div className="flex items-center gap-3">
                      <span className="liquid-glass-purple flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                        <Icon className="h-4 w-4 text-secondary-light" aria-hidden="true" />
                      </span>
                      <span className="font-display text-sm font-semibold text-secondary-light">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      {step.description}
                    </p>
                  </li>
                );
              })}
            </ol>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
