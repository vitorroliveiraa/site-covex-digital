"use client";

import { motion } from "framer-motion";
import { Building2, HardHat, Layers, Ruler, Sparkles, UtensilsCrossed } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

type LucideIcon = React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;

interface Nicho {
    icon: LucideIcon;
    title: string;
    dor: string;
}

const nichos: Nicho[] = [
    {
        icon: Building2,
        title: "Imobiliárias",
        dor: "Cliente pesquisa ou pergunta pra uma IA “apartamento à venda [bairro]” e não te encontra. Quem tem a estrutura certa aparece primeiro.",
    },
    {
        icon: Sparkles,
        title: "Clínicas de estética",
        dor: "Instagram bonito não substitui ser encontrado quando alguém busca ou pergunta por “clínica de estética perto de mim”.",
    },
    {
        icon: Ruler,
        title: "Arquitetura e engenharia",
        dor: "Portfólio forte, mas invisível pra quem pesquisa, ou pergunta a uma IA, por “escritório de arquitetura em João Pessoa”.",
    },
    {
        icon: HardHat,
        title: "Obras",
        dor: "Orçamento perdido pra quem é mais fácil de encontrar e entender, não pra quem faz obra melhor.",
    },
    {
        icon: Layers,
        title: "Vidraçarias",
        dor: "Urgência do cliente é hoje. Se ele pesquisa ou pergunta agora e você não aparece, o pedido vai pro concorrente.",
    },
    {
        icon: UtensilsCrossed,
        title: "Restaurantes e pousadas",
        dor: "Reserva perdida pra quem é encontrado primeiro, no Google ou numa resposta de IA, não pra quem tem comida melhor.",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
};

export function Nichos() {
    return (
        <section id="nichos" className="relative isolate overflow-hidden section-padding">
            <div className="container-fluid">
                <motion.header
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <h2 className="text-balance font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                        Cada nicho <span className="text-destaque">deixa de ser encontrado</span> de um jeito diferente.
                    </h2>
                    <p className="mx-auto mt-5 max-w-[52ch] text-lg leading-relaxed text-texto/65">
                        Negócios locais em João Pessoa que a Covex atende com mais frequência, com a dor específica de
                        cada um.
                    </p>
                </motion.header>

                <motion.ul
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ staggerChildren: 0.08, delayChildren: 0.15 }}
                    className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                    aria-label="Nichos atendidos pela Covex Digital"
                >
                    {nichos.map((nicho, idx) => {
                        const Icon = nicho.icon;
                        return (
                            <motion.li
                                key={nicho.title}
                                variants={cardVariants}
                                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: idx * 0.03 }}
                            >
                                <GlassCard hoverable className="flex h-full flex-col p-6 sm:p-7">
                                    <div className="flex items-center gap-3">
                                        <Icon className="icone-nicho h-6 w-6 shrink-0 text-destaque" aria-hidden="true" />
                                        <h3 className="font-display text-lg font-semibold text-texto">{nicho.title}</h3>
                                    </div>
                                    <p className="mt-3 text-base leading-relaxed text-texto/65">{nicho.dor}</p>
                                </GlassCard>
                            </motion.li>
                        );
                    })}
                </motion.ul>
            </div>
        </section>
    );
}
