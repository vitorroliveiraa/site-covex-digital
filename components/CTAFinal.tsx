'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { GradientOrb } from './ui/GradientOrb';
import { buildWhatsappUrl } from '@/lib/site';

export function CTAFinal() {
  return (
    <section
      id="contato"
      className="relative isolate flex min-h-[80vh] items-center overflow-hidden py-24 md:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-mesh-gradient" aria-hidden="true" />
      <div className="grid-bg absolute inset-0 -z-10 opacity-60" aria-hidden="true" />

      <GradientOrb
        color="purple"
        size={620}
        className="-left-32 top-0"
        opacity={0.55}
      />
      <GradientOrb
        color="mixed"
        size={520}
        className="-right-32 bottom-0"
        opacity={0.5}
        style={{ animationDelay: '4s' }}
      />
      <GradientOrb
        color="white"
        size={320}
        className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        opacity={0.15}
        style={{ animationDelay: '7s' }}
      />

      <div className="container-fluid">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlassCard
            variant="strong"
            className="mx-auto max-w-4xl px-8 py-14 text-center sm:px-12 sm:py-20"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary-light">
              Vamos conversar
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Pronto para crescer com{' '}
              <span className="text-gradient-purple">tráfego pago</span> de verdade?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Estou abrindo apenas{' '}
              <strong className="font-semibold text-white">3 vagas</strong> para
              clínicas de estética. Nas primeiras parcerias, você paga só o
              investimento em tráfego.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4">
              <motion.a
                href={buildWhatsappUrl(
                  'Olá! Quero garantir minha vaga nas primeiras parcerias da Covex Digital.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary animate-pulse-glow text-base sm:text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Garantir minha vaga no WhatsApp
              </motion.a>
              <p className="text-sm text-white/55">
                Vagas limitadas · Sem contrato longo · Sem bullshit
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
