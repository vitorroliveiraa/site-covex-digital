"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Settings2, Target } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import { GradientOrb } from "./ui/GradientOrb";
import { buildWhatsappUrl } from "@/lib/site";

type LucideIcon = React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;

interface Service {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    description: string;
    highlight: string;
    tags: string[];
}

const services: Service[] = [
    {
        icon: Target,
        title: "Aquisição & Conversão",
        subtitle: "Mais clientes com custo controlado",
        description:
            "Campanhas no Meta Ads e Google Ads construídas com foco em leads e vendas reais. Estratégia por intenção de compra, criativos testados continuamente e otimização baseada em CAC — sem verba desperdiçada.",
        highlight: "Mais Clientes",
        tags: ["Meta Ads", "Google Ads", "Landing Pages", "Geração de Leads"],
    },
    {
        icon: Globe,
        title: "Presença Digital",
        subtitle: "Encontrado por quem importa",
        description:
            "Google Meu Negócio otimizado, estrutura digital consistente e posicionamento que constrói autoridade. Sua empresa presente nos momentos certos, pelos canais certos, pelas pessoas certas.",
        highlight: "Mais Visibilidade",
        tags: ["Google Meu Negócio", "SEO Local", "Reputação Online", "Identidade Digital"],
    },
    {
        icon: Settings2,
        title: "Eficiência & Automação",
        subtitle: "Menos operacional, mais estratégico",
        description:
            "Automações simples que eliminam trabalho repetitivo, organizam o atendimento e liberam seu time para o que importa. Tecnologia aplicada sem complexidade — resultado sem precisar de equipe técnica.",
        highlight: "Mais Eficiência",
        tags: ["Automações", "IA Aplicada", "Fluxos de Atendimento", "Organização Operacional"],
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0 },
};

export function Services() {
    return (
        <section id="servicos" className="relative isolate overflow-hidden section-padding">
            <GradientOrb color="purple" size={600} className="-left-40 top-1/3" opacity={0.32} />
            <GradientOrb
                color="mixed"
                size={400}
                className="-right-32 bottom-10"
                opacity={0.28}
                style={{ animationDelay: "6s" }}
            />

            <div className="container-fluid">
                <motion.header
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary-light">
                        Soluções
                    </span>
                    <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                        Três frentes de atuação.{" "}
                        <span className="text-gradient-purple">Um único objetivo</span>: crescer.
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
                        Cada solução é desenhada para atacar uma alavanca real do seu negócio — não uma lista de
                        entregáveis genéricos.
                    </p>
                </motion.header>

                <motion.ul
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ staggerChildren: 0.1, delayChildren: 0.15 }}
                    className="mt-16 grid gap-6 lg:grid-cols-3"
                    aria-label="Soluções da Covex Digital"
                >
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <motion.li
                                key={service.title}
                                variants={cardVariants}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <GlassCard hoverable className="group relative flex h-full flex-col p-7">
                                    <div className="flex items-start justify-between">
                                        <span className="liquid-glass-purple flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                            <Icon className="h-6 w-6 text-secondary-light" aria-hidden="true" />
                                        </span>
                                        <span className="liquid-glass rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/70">
                                            {service.highlight}
                                        </span>
                                    </div>

                                    <h3 className="mt-6 font-display text-xl font-bold text-white">{service.title}</h3>
                                    <p className="mt-1 text-sm font-medium text-secondary-light">{service.subtitle}</p>
                                    <p className="mt-4 flex-1 text-sm leading-relaxed text-white/65">
                                        {service.description}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2" aria-label={`O que está incluído em ${service.title}`}>
                                        {service.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="liquid-glass rounded-full px-2.5 py-1 text-[11px] font-medium text-white/60"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={buildWhatsappUrl(
                                            `Olá! Tenho interesse em saber mais sobre ${service.title} da Covex Digital.`,
                                        )}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-secondary-light"
                                        aria-label={`Conversar sobre ${service.title}`}
                                    >
                                        Quero saber mais
                                        <ArrowUpRight
                                            className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </GlassCard>
                            </motion.li>
                        );
                    })}
                </motion.ul>
            </div>
        </section>
    );
}
