"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GlassCard } from "./ui/GlassCard";
import { GradientOrb } from "./ui/GradientOrb";

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
};

export function About() {
    return (
        <section id="sobre" className="relative isolate overflow-hidden section-padding">
            <div className="grid-bg absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
            <GradientOrb color="purple" size={520} className="-right-40 top-20" opacity={0.35} />

            <div className="container-fluid">
                <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ staggerChildren: 0.1 }}
                        className="lg:col-span-7"
                    >
                        <motion.span
                            variants={fadeUp}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary-light"
                        >
                            Sobre a Covex
                        </motion.span>

                        <motion.h2
                            variants={fadeUp}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
                        >
                            Não é mais um <span className="text-white/40 line-through">profissional de marketing</span>.
                            É <span className="text-gradient-purple">precisão aplicada</span> ao seu dinheiro.
                        </motion.h2>

                        <motion.div
                            variants={fadeUp}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-8 space-y-5 text-base leading-relaxed text-white/70 sm:text-lg"
                        >
                            <p>
                                Você não precisa de mais um “profissional de marketing”. Você precisa de alguém que
                                entende de números, que lê os dados como um livro e que trata o seu dinheiro como se
                                fosse o dele.
                            </p>
                            <p>
                                A Covex Digital nasce com um propósito claro: ser a prova de que tráfego pago bem feito
                                transforma negócios. Sem histórico inflado, sem promessas vazias — só método, dedicação
                                e resultado real.
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="mx-auto w-full max-w-sm lg:col-span-5 lg:mx-0 lg:ml-auto"
                    >
                        <GlassCard variant="strong" className="overflow-hidden p-1.5">
                            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                                <Image
                                    src="/vitor.webp"
                                    alt="Vitor Oliveira — Gestor de Tráfego da Covex Digital"
                                    fill
                                    sizes="(max-width: 1024px) 384px, 400px"
                                    className="object-cover"
                                    priority={false}
                                />
                            </div>
                        </GlassCard>

                        <GlassCard variant="strong" className="mt-4 px-6 py-4 text-center">
                            <p className="font-display text-lg font-semibold leading-tight text-white">
                                Vitor Oliveira
                            </p>
                            <p className="mt-1.5 text-sm font-medium leading-tight" style={{ color: "#a78bfa" }}>
                                Gestor de Tráfego · Covex Digital
                            </p>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
