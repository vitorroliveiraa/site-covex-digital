'use client';

import { useSyncExternalStore } from 'react';
import { Moon, Sun } from 'lucide-react';

type Tema = 'claro' | 'escuro';

type DocumentoComTransicao = Document & {
  startViewTransition?: (aoAtualizar: () => void) => unknown;
};

const CHAVE_ARMAZENAMENTO = 'covex-tema';

function lerTemaAtual(): Tema {
  return document.documentElement.dataset.tema === 'claro' ? 'claro' : 'escuro';
}

function lerTemaNoServidor(): Tema {
  return 'escuro';
}

function observarTema(aoMudar: () => void) {
  const observador = new MutationObserver(aoMudar);
  observador.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-tema'],
  });
  return () => observador.disconnect();
}

function aplicarTema(tema: Tema) {
  document.documentElement.dataset.tema = tema;
  try {
    localStorage.setItem(CHAVE_ARMAZENAMENTO, tema);
  } catch {
    // Armazenamento bloqueado (modo privado): o tema vale só nesta visita.
  }
}

function alternarTema() {
  const proximoTema: Tema = lerTemaAtual() === 'claro' ? 'escuro' : 'claro';
  const documento = document as DocumentoComTransicao;
  const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduzirMovimento || !documento.startViewTransition) {
    aplicarTema(proximoTema);
    return;
  }
  documento.startViewTransition(() => aplicarTema(proximoTema));
}

export function ComponentAlternarTema() {
  const tema = useSyncExternalStore(observarTema, lerTemaAtual, lerTemaNoServidor);

  return (
    <button
      type="button"
      onClick={alternarTema}
      aria-pressed={tema === 'claro'}
      aria-label="Modo claro"
      className="liquid-glass botao-tema flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
    >
      <span className="relative block h-5 w-5">
        <Sun className="icone-tema-sol absolute inset-0 h-5 w-5" aria-hidden="true" />
        <Moon className="icone-tema-lua absolute inset-0 h-5 w-5" aria-hidden="true" />
      </span>
    </button>
  );
}
