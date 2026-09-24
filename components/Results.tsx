"use client";

import { motion } from "framer-motion";
import { BarChart2, Check, Compass, Handshake, MessageCircle, Target } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import { buildWhatsappUrl } from "@/lib/site";

const differentials = [
    {
        icon: Compass,
        title: "Visão Estratégica",
        description:
            "Não executo antes de entender. Cada solução começa com diagnóstico do negócio, do mercado e dos objetivos reais, não com suposições.",
    },
    {
        icon: BarChart2,
        title: "Decisões por Dados",
        description:
            "Nada de achismo. Cada ajuste é baseado em métricas reais e análise constante do que está funcionando e do que pode melhorar.",
    },
    {
        icon: Target,
        title: "Resultado Mensurável",
        description:
            "Cada iniciativa tem objetivo definido. Você acompanha o que foi feito, o que gerou e quais são os próximos passos.",
    },
    {
        icon: Handshake,
        title: "Parceria de Longo Prazo",
        description:
            "Não sou fornecedor. Sou parceiro estratégico comprometido com o crescimento sustentável do seu negócio ao longo do tempo.",
    },
];

const idealClient = [
    "Tem um negócio funcionando e quer crescer de forma consistente",
    "Entende que presença digital é investimento estratégico, não despesa",
    "Quer acompanhar os números e tomar decisões com mais clareza",
    "Busca um parceiro que entende de negócio, não apenas de tecnologia",
];

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
};

export function Results() {
    return (
        <section id="resultados" className="relative isolate overflow-hidden section-padding">
            <div className="container-fluid">
                <motion.header
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <h2 className="text-balance font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                        O que diferencia uma <span className="text-destaque">parceria estratégica</span> de mais um
                        serviço contratado.
                    </h2>
                    <p className="mx-auto mt-5 max-w-[52ch] text-lg leading-relaxed text-texto/65">
                        A diferença está na forma como o trabalho é conduzido, com método, contexto e compromisso
                        com o que realmente importa.
                    </p>
                </motion.header>

                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-16"
                >
                    <GlassCard variant="strong" className="overflow-hidden">
                        <ul className="grid sm:grid-cols-2" aria-label="Diferenciais da Covex Digital">
                            {differentials.map((item, indice) => {
                                const Icon = item.icon;
                                return (
                                    <li
                                        key={item.title}
                                        className={`border-texto/10 p-7 lg:p-9 ${indice > 0 ? "border-t" : ""} ${indice === 1 ? "sm:border-t-0" : ""} ${indice % 2 === 1 ? "sm:border-l" : ""}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon className="h-6 w-6 shrink-0 text-destaque" aria-hidden="true" />
                                            <h3 className="font-display text-xl font-semibold text-texto">{item.title}</h3>
                                        </div>
                                        <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-texto/65">
                                            {item.description}
                                        </p>
                                    </li>
                                );
                            })}
                        </ul>
                    </GlassCard>
                </motion.div>

                <div id="perfil" className="mt-24 grid items-stretch gap-6 lg:grid-cols-12">
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-5"
                    >
                        <GlassCard variant="purple" className="flex h-full flex-col p-8 lg:p-10">
                            <h3 className="font-display text-3xl font-bold leading-tight tracking-tight text-texto sm:text-4xl">
                                Não atendo todo mundo.{" "}
                                <span className="text-destaque">E isso é intencional.</span>
                            </h3>
                            <p className="mt-6 text-base leading-relaxed text-texto/75">
                                A Covex Digital é parceira de negócios que entendem que crescimento digital exige
                                estratégia, não apenas ferramentas. Se você quer um resultado previsível, uma presença
                                digital sólida e uma operação mais eficiente,{" "}
                                <strong className="font-semibold text-texto">vamos conversar</strong>.
                            </p>
                        </GlassCard>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-7"
                    >
                        <GlassCard variant="strong" className="flex h-full flex-col p-8 lg:p-10">
                            <h3 className="font-display text-xl font-semibold text-texto sm:text-2xl">
                                O perfil de quem costuma se identificar:
                            </h3>

                            <motion.ul
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
                                className="mt-6 space-y-3"
                                aria-label="Perfil do cliente ideal"
                            >
                                {idealClient.map((item) => (
                                    <motion.li
                                        key={item}
                                        variants={fadeUp}
                                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                        className="flex items-start gap-3"
                                    >
                                        <span
                                            className="marca-check mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                                            aria-hidden="true"
                                        >
                                            <Check className="h-4 w-4 text-white" strokeWidth={3} />
                                        </span>
                                        <span className="text-base leading-relaxed text-texto/85">
                                            {item}
                                        </span>
                                    </motion.li>
                                ))}
                            </motion.ul>

                            <div className="mt-auto pt-8">
                                <a
                                    href={buildWhatsappUrl(
                                        "Olá! Quero conversar sobre como a Covex Digital pode ajudar meu negócio a crescer.",
                                    )}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary w-full justify-center sm:w-auto"
                                >
                                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                                    Quero conversar sobre meu negócio
                                </a>
                                <p className="mt-4 text-base leading-relaxed text-texto/65">
                                    Sem compromisso. Uma conversa clara sobre o que faz sentido para você.
                                </p>
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
