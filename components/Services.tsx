"use client";

import { motion } from "framer-motion";
import { Braces, MapPin, MessageCircle, Zap } from "lucide-react";
import { buildWhatsappUrl } from "@/lib/site";

type LucideIcon = React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;

interface Service {
    icon: LucideIcon;
    title: string;
    description: string;
}

const services: Service[] = [
    {
        icon: MapPin,
        title: "Google Meu Negócio",
        description:
            "Categorias certas, fotos, avaliações e horário sempre atualizado. É o que aparece primeiro no Google Maps quando alguém pesquisa perto, e uma das fontes que buscadores e IAs usam pra saber que seu negócio existe.",
    },
    {
        icon: Zap,
        title: "Site rápido e claro",
        description:
            "Carrega rápido, funciona bem no celular e leva direto pro WhatsApp. O texto explica com clareza o que você faz, pra quem e onde, do jeito que uma pessoa ou uma IA consegue entender.",
    },
    {
        icon: Braces,
        title: "Dados estruturados e indexação",
        description:
            "Schema certo pro seu tipo de negócio, sitemap e páginas organizadas pro Google e pras ferramentas de IA lerem a informação sem ambiguidade.",
    },
];

export function Services() {
    return (
        <section id="servicos" className="relative isolate overflow-hidden section-padding">
            <div className="container-fluid">
                <motion.header
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-2xl"
                >
                    <h2 className="text-balance font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                        Ser encontrado vai além de <span className="text-destaque">ter um site</span>.
                    </h2>
                    <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-texto/65">
                        Google Meu Negócio, site e estrutura de dados trabalhando juntos pra você ser encontrado,
                        seja no Google, seja quando alguém pergunta pra uma IA.
                    </p>
                </motion.header>

                <div className="mt-14 divide-y divide-texto/10 border-t border-texto/10">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: idx * 0.08 }}
                                className="grid gap-4 py-8 md:grid-cols-12 md:items-start md:gap-8"
                            >
                                <div className="flex items-center gap-4 md:col-span-4">
                                    <span className="liquid-glass-purple flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                                        <Icon className="h-5 w-5 text-destaque" aria-hidden="true" />
                                    </span>
                                    <h3 className="font-display text-xl font-bold text-texto">
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="max-w-[52ch] text-base leading-relaxed text-texto/65 md:col-span-8">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between"
                >
                    <p className="max-w-md text-base leading-relaxed text-texto/65">
                        É uma base que aumenta suas chances ao longo do tempo, sem promessa de posição ou prazo.
                    </p>
                    <a
                        href={buildWhatsappUrl(
                            "Olá! Tenho interesse em saber mais sobre presença digital com a Covex Digital.",
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary shrink-0"
                    >
                        <MessageCircle className="h-4 w-4" aria-hidden="true" />
                        Quero saber mais
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
