"use client";

import { motion } from "framer-motion";
import { Building2, HardHat, Layers, Ruler, Sparkles, UtensilsCrossed } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import { GradientOrb } from "./ui/GradientOrb";

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
        dor: "Cliente pesquisa “apartamento à venda [bairro]” e não te encontra. O concorrente com SEO local aparece primeiro.",
    },
    {
        icon: Sparkles,
        title: "Clínicas de estética",
        dor: "Instagram bonito não substitui aparecer no Google Maps quando alguém busca “clínica de estética perto de mim”.",
    },
    {
        icon: Ruler,
        title: "Arquitetura e engenharia",
        dor: "Portfólio forte, mas invisível pra quem pesquisa “escritório de arquitetura em João Pessoa”.",
    },
    {
        icon: HardHat,
        title: "Obras",
        dor: "Orçamento perdido pra quem tem site melhor indexado, não pra quem faz obra melhor.",
    },
    {
        icon: Layers,
        title: "Vidraçarias",
        dor: "Urgência do cliente é hoje. Se você não aparece na busca local agora, o pedido vai pro concorrente.",
    },
    {
        icon: UtensilsCrossed,
        title: "Restaurantes e pousadas",
        dor: "Reserva perdida pra quem aparece primeiro no Google, não pra quem tem comida melhor.",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
};

export function Nichos() {
    return (
        <section id="nichos" className="relative isolate overflow-hidden section-padding">
            <GradientOrb color="mixed" size={480} className="-left-32 bottom-0" opacity={0.25} />

            <div className="container-fluid">
                <motion.header
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <h2 className="text-balance font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                        Cada nicho <span className="text-gradient-purple">some no Google</span> de um jeito diferente.
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
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
                                    <span className="liquid-glass-purple flex h-12 w-12 items-center justify-center rounded-xl">
                                        <Icon className="h-5 w-5 text-secondary-light" aria-hidden="true" />
                                    </span>
                                    <h3 className="mt-5 font-display text-lg font-semibold text-white">{nicho.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-white/65">{nicho.dor}</p>
                                </GlassCard>
                            </motion.li>
                        );
                    })}
                </motion.ul>
            </div>
        </section>
    );
}
