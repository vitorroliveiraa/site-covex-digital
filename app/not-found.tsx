import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { GradientOrb } from '@/components/ui/GradientOrb';
import { buildWhatsappUrl } from '@/lib/site';

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-dvh items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-mesh-gradient" aria-hidden="true" />
      <GradientOrb color="purple" size={520} className="-left-32 top-10" opacity={0.4} />

      <div className="container-fluid">
        <GlassCard
          variant="strong"
          className="mx-auto max-w-xl px-8 py-14 text-center sm:px-12 sm:py-20"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary-light">
            Erro 404
          </span>
          <h1 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Essa página não existe.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/70">
            O link pode estar errado ou a página foi movida. Volte pro início ou fale direto com a gente.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/" className="btn-primary">
              Voltar ao início
            </Link>
            <a
              href={buildWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Falar no WhatsApp
            </a>
          </div>
        </GlassCard>
      </div>
    </main>
  );
}
