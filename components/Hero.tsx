"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, MessageCircle, Sparkles, Target, Zap } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import { GradientOrb } from "./ui/GradientOrb";
import { buildWhatsappUrl } from "@/lib/site";

const heroBadges = [
    {
        icon: Target,
        label: "Aquisição de Clientes",
    },
    {
        icon: Globe,
        label: "Presença Digital",
    },
    {
        icon: Zap,
        label: "Eficiência Operacional",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

export function Hero() {
    return (
        <section id="hero" className="relative isolate overflow-hidden pb-24 pt-36 md:pt-44 lg:pb-32 lg:pt-48">
            <div className="absolute inset-0 -z-10 bg-mesh-gradient" aria-hidden="true" />
            <div className="grid-bg absolute inset-0 -z-10" aria-hidden="true" />

            <GradientOrb color="purple" size={520} className="-left-32 top-10" opacity={0.55} />
            <GradientOrb
                color="mixed"
                size={420}
                className="-right-20 top-40"
                opacity={0.45}
                style={{ animationDelay: "4s" }}
            />
            <GradientOrb
                color="white"
                size={300}
                className="left-1/2 top-2/3 -translate-x-1/2"
                opacity={0.18}
                style={{ animationDelay: "8s" }}
            />

            <div className="container-fluid relative">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="mx-auto flex max-w-4xl flex-col items-center text-center"
                >
                    <motion.div variants={itemVariants}>
                        <div className="liquid-glass-purple inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/85">
                            <Sparkles className="h-3.5 w-3.5 text-secondary-light" aria-hidden="true" />
                            Parceiro Estratégico Digital
                        </div>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                    >
                        Estrutura Digital que{" "}
                        <span className="text-gradient-purple">Cresce</span>
                        <br className="hidden sm:block" />
                        com o seu Negócio.
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
                    >
                        A Covex Digital é parceira estratégica de clínicas, escritórios e pequenas empresas que querem{" "}
                        <strong className="font-semibold text-white">atrair mais clientes</strong>,{" "}
                        <strong className="font-semibold text-white">fortalecer a presença digital</strong> e operar
                        com mais eficiência — sem depender de sorte.
                    </motion.p>

                    <motion.div variants={itemVariants} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
                        <a
                            href={buildWhatsappUrl(
                                "Olá! Vim pelo site da Covex Digital e quero entender como vocês podem ajudar meu negócio a crescer.",
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
                </motion.div>

                <motion.ul
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
                    aria-label="Pilares da Covex Digital"
                >
                    {heroBadges.map((badge, idx) => {
                        const Icon = badge.icon;
                        return (
                            <motion.li
                                key={badge.label}
                                variants={itemVariants}
                                className="animate-float"
                                style={{ animationDelay: `${idx * 1.2}s` }}
                            >
                                <GlassCard variant="strong" hoverable className="flex items-center gap-4 p-5">
                                    <span className="liquid-glass-purple flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                                        <Icon className="h-5 w-5 text-secondary-light" aria-hidden="true" />
                                    </span>
                                    <p className="text-left font-display text-sm font-semibold leading-tight text-white sm:text-base">
                                        {badge.label}
                                    </p>
                                </GlassCard>
                            </motion.li>
                        );
                    })}
                </motion.ul>
            </div>
        </section>
    );
}
