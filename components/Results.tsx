"use client";

import { motion } from "framer-motion";
import { BarChart2, Check, Handshake, MessageCircle, ShieldCheck, Target } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import { GradientOrb } from "./ui/GradientOrb";
import { buildWhatsappUrl } from "@/lib/site";

const differentials = [
    {
        icon: Target,
        title: "Foco em Resultado",
        description:
            "Cada campanha é construída com objetivo claro: gerar leads ou vendas reais, não apenas impressões.",
    },
    {
        icon: ShieldCheck,
        title: "Risco Zero para Você",
        description:
            "Nas primeiras parcerias, você investe apenas em tráfego. Meu serviço é o meu compromisso com o seu resultado.",
    },
    {
        icon: BarChart2,
        title: "Decisões por Dados",
        description: "Nada de achismo. Cada ajuste de campanha é baseado em métricas reais e análise constante.",
    },
    {
        icon: Handshake,
        title: "Parceria de Verdade",
        description: "Não sou um fornecedor. Sou o profissional comprometido a crescer junto com o seu negócio.",
    },
];

const idealClient = [
    "Tem uma clínica de estética funcionando e quer escalar",
    "Entende que tráfego pago é investimento, não custo",
    "Quer acompanhar os números e crescer com dados",
    "Está disposto a testar, ajustar e evoluir junto",
];

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
};

export function Results() {
    return (
        <section id="resultados" className="relative isolate overflow-hidden section-padding">
            <div className="absolute inset-0 -z-10 bg-mesh-gradient opacity-60" aria-hidden="true" />
            <GradientOrb color="purple" size={520} className="left-1/2 top-10 -translate-x-1/2" opacity={0.3} />

            <div className="container-fluid">
                <motion.header
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary-light">
                        Posicionamento
                    </span>
                    <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                        O que faz a <span className="text-gradient-purple">Covex Digital</span> ser diferente.
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
                        Não é sobre prometer mundos. É sobre como o trabalho é conduzido — com método, transparência e
                        obsessão por entregar.
                    </p>
                </motion.header>

                <motion.ul
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ staggerChildren: 0.08, delayChildren: 0.15 }}
                    className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
                    aria-label="Diferenciais de posicionamento"
                >
                    {differentials.map((item) => {
                        const Icon = item.icon;
                        return (
                            <motion.li
                                key={item.title}
                                variants={fadeUp}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <GlassCard variant="strong" hoverable className="flex h-full flex-col p-6 sm:p-7">
                                    <span className="liquid-glass-purple flex h-12 w-12 items-center justify-center rounded-xl">
                                        <Icon className="h-5 w-5 text-secondary-light" aria-hidden="true" />
                                    </span>
                                    <h3 className="mt-5 font-display text-lg font-semibold text-white">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-white/65">{item.description}</p>
                                </GlassCard>
                            </motion.li>
                        );
                    })}
                </motion.ul>
            </div>
        </section>
    );
}
