"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, MapPin, MessageCircle, Zap } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import { GradientOrb } from "./ui/GradientOrb";
import { buildWhatsappUrl } from "@/lib/site";

// #region dados da seção
const pilaresHero = [
    {
        icone: MapPin,
        titulo: "Google Meu Negócio",
        descricao: "Sua ficha completa e atualizada onde o cliente procura.",
    },
    {
        icone: Zap,
        titulo: "Site claro e rápido",
        descricao: "Texto que explica o que você faz, pra quem e onde.",
    },
    {
        icone: Bot,
        titulo: "Dados estruturados",
        descricao: "Informação organizada pro Google e pras IAs lerem sem erro.",
    },
];

const variantesContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

const variantesItem = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};
// #endregion

export function Hero() {
    return (
        <section id="hero" className="relative isolate overflow-hidden pb-24 pt-36 md:pt-44 lg:pb-32 lg:pt-48">
            <div
                className="absolute inset-0 -z-10 bg-mesh-gradient [mask-image:linear-gradient(to_bottom,black_55%,transparent)]"
                aria-hidden="true"
            />

            <GradientOrb color="purple" size={520} className="-left-32 top-10" opacity={0.55} />
            <GradientOrb
                color="mixed"
                size={420}
                className="-right-20 top-40"
                opacity={0.45}
                style={{ animationDelay: "4s" }}
            />

            <div className="container-fluid relative">
                <motion.div variants={variantesContainer} initial="hidden" animate="show">
                    <motion.h1
                        variants={variantesItem}
                        className="max-w-5xl text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
                    >
                        Quando alguém pergunta pra IA quem contratar em João Pessoa,{" "}
                        <span className="text-destaque">seu negócio é citado?</span>
                    </motion.h1>

                    <div className="mt-12 grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
                        <div className="lg:col-span-7">
                            <motion.p
                                variants={variantesItem}
                                className="max-w-[52ch] text-lg leading-relaxed text-texto/70"
                            >
                                As ferramentas de IA respondem com o que conseguem ler e entender. A Covex{" "}
                                <strong className="font-semibold text-texto">constrói a estrutura</strong> pro seu
                                negócio ser lido, entendido e citado, seja no Google, no ChatGPT, no Gemini, no Claude
                                ou no Perplexity.
                            </motion.p>

                            <motion.div variants={variantesItem} className="mt-9 flex flex-col gap-4 sm:flex-row">
                                <a
                                    href={buildWhatsappUrl(
                                        "Olá! Vim pelo site da Covex Digital e quero entender como vocês podem ajudar meu negócio a ser encontrado.",
                                    )}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary"
                                >
                                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                                    Quero um diagnóstico gratuito
                                </a>
                                <a href="#servicos" className="btn-secondary">
                                    Conheça as soluções
                                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                                </a>
                            </motion.div>

                            <motion.p variants={variantesItem} className="mt-6 max-w-[52ch] text-base text-texto/65">
                                É uma base que aumenta suas chances ao longo do tempo. Sem promessa de posição nem de
                                prazo.
                            </motion.p>
                        </div>

                        <motion.div variants={variantesItem} className="lg:col-span-5">
                            <GlassCard variant="strong" className="p-2">
                                <ul aria-label="Pilares da Covex Digital" className="divide-y divide-texto/10">
                                    {pilaresHero.map((pilar) => {
                                        const Icone = pilar.icone;
                                        return (
                                            <li key={pilar.titulo} className="flex items-start gap-4 p-5">
                                                <Icone className="mt-1 h-5 w-5 shrink-0 text-destaque" aria-hidden="true" />
                                                <div>
                                                    <p className="font-display text-base font-semibold text-texto">
                                                        {pilar.titulo}
                                                    </p>
                                                    <p className="mt-1 text-base leading-relaxed text-texto/65">
                                                        {pilar.descricao}
                                                    </p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </GlassCard>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
