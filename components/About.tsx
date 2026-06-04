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
                            Você precisa de alguém que pensa no{" "}
                            <span className="text-gradient-purple">negócio inteiro</span>
                            {" "}— não apenas no próximo anúncio.
                        </motion.h2>

                        <motion.div
                            variants={fadeUp}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-8 space-y-5 text-base leading-relaxed text-white/70 sm:text-lg"
                        >
                            <p>
                                Você não precisa de mais relatórios, mais ferramentas ou mais canais digitais. Você
                                precisa de alguém que entende de onde vêm seus clientes, identifica o que trava o
                                crescimento e constrói uma estrutura digital que funciona de verdade.
                            </p>
                            <p>
                                A Covex Digital é isso: uma parceria estratégica com clínicas, escritórios e pequenas
                                empresas que querem mais clientes, mais presença e uma operação mais eficiente — com
                                clareza sobre o que está sendo feito e por quê.
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
                                    alt="Vitor Oliveira — Estrategista Digital da Covex Digital"
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
                                Estrategista Digital · Covex Digital
                            </p>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
