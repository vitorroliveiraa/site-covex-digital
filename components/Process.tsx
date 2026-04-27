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
      'Auditoria completa das contas, do funil e do histórico. Identificação de buracos e oportunidades reais.',
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'Estratégia',
    description:
      'Plano de mídia desenhado por etapa do funil, com hipóteses claras, KPIs definidos e meta de ROI.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Execução',
    description:
      'Estruturação de campanhas, criativos testados em loop e ajustes operacionais frequentes.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Resultados',
    description:
      'Análise semanal, otimização contínua e escala do que prova retorno. Você acompanha tudo em tempo real.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

export function Process() {
  return (
    <section
      id="processo"
      className="relative isolate overflow-hidden section-padding"
    >
      <div className="grid-bg absolute inset-0 -z-10 opacity-50" aria-hidden="true" />
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
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary-light">
            Processo
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Um método claro do <span className="text-gradient-purple">primeiro briefing</span>
            {' '}até o resultado.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
            Sem improviso. Cada etapa existe pra reduzir risco, encurtar caminho até
            o ROI e te dar previsibilidade.
          </p>
        </motion.header>

        <div className="relative mt-16">
          <div
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-secondary-light/40 to-transparent lg:hidden"
            aria-hidden="true"
          />
          <div
            className="absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-transparent via-secondary-light/40 to-transparent lg:block"
            aria-hidden="true"
          />

          <motion.ol
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
            className="grid gap-6 lg:grid-cols-4"
            aria-label="Etapas do processo de trabalho"
          >
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.li
                  key={step.number}
                  variants={fadeUp}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <div
                    className="absolute left-1/2 top-16 z-10 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary-light shadow-[0_0_18px_rgba(123,61,181,0.8)] lg:block"
                    aria-hidden="true"
                  />

                  <GlassCard hoverable className="h-full p-7">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-5xl font-bold leading-none text-white/10 transition-colors group-hover:text-secondary-light/40">
                        {step.number}
                      </span>
                      <span className="liquid-glass-purple flex h-12 w-12 items-center justify-center rounded-xl">
                        <Icon
                          className="h-5 w-5 text-secondary-light"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-xl font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/65">
                      {step.description}
                    </p>
                  </GlassCard>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
