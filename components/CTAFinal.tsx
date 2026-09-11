"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import { GradientOrb } from "./ui/GradientOrb";
import { buildWhatsappUrl } from "@/lib/site";

export function CTAFinal() {
    return (
        <section
            id="contato"
            className="relative isolate flex min-h-[80vh] items-center overflow-hidden py-24 md:py-32"
        >
            <div className="absolute inset-0 -z-10 bg-mesh-gradient" aria-hidden="true" />

            <GradientOrb color="purple" size={620} className="-left-32 top-0" opacity={0.55} />
            <GradientOrb
                color="mixed"
                size={520}
                className="-right-32 bottom-0"
                opacity={0.5}
                style={{ animationDelay: "4s" }}
            />
            <GradientOrb
                color="white"
                size={320}
                className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                opacity={0.15}
                style={{ animationDelay: "7s" }}
            />

            <div className="container-fluid">
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <GlassCard
                        variant="strong"
                        className="mx-auto max-w-4xl px-8 py-14 text-center sm:px-12 sm:py-20"
                    >
                        <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                            Pronto para construir uma{" "}
                            <span className="text-gradient-purple">estrutura digital</span> que trabalha pelo seu
                            negócio?
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                            Uma conversa de 15 minutos pode revelar as principais oportunidades de crescimento que
                            seu negócio ainda não está aproveitando.
                        </p>

                        <div className="mt-10 flex flex-col items-center gap-4">
                            <motion.a
                                href={buildWhatsappUrl(
                                    "Olá! Quero um diagnóstico digital da Covex Digital para entender as oportunidades do meu negócio.",
                                )}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary animate-pulse-glow text-base sm:text-lg"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                                Quero meu diagnóstico digital
                            </motion.a>
                            <p className="text-sm text-white/55">
                                Sem compromisso. Sem contrato. Só clareza.
                            </p>
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    );
}
