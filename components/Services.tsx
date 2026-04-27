"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Compass, LineChart, Search, Users2 } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeta } from "@fortawesome/free-brands-svg-icons";
import { GlassCard } from "./ui/GlassCard";
import { GradientOrb } from "./ui/GradientOrb";
import { buildWhatsappUrl } from "@/lib/site";

type IconProps = { className?: string; "aria-hidden"?: boolean | "true" | "false" };

const MetaIcon = ({ className, "aria-hidden": ariaHidden }: IconProps) => (
    <FontAwesomeIcon icon={faMeta} className={className} aria-hidden={ariaHidden} />
);

const services = [
    {
        icon: MetaIcon,
        title: "Meta Ads",
        subtitle: "Facebook & Instagram",
        description:
            "Campanhas de aquisição, remarketing e funis full-stack no Meta. Estrutura de conta limpa, criativos testados e otimização baseada em CAC, não em ego.",
        highlight: "Aquisição & Funil",
    },
    // {
    //   icon: Search,
    //   title: 'Google Ads',
    //   subtitle: 'Search, Display, YouTube e PMax',
    //   description:
    //     'Captura de demanda quente no Search, awareness no YouTube e escala com Performance Max. Estratégia por intenção e jornada — sem desperdiçar verba.',
    //   highlight: 'Captura & Escala',
    // },
    {
        icon: Compass,
        title: "Estratégia de Funil Completo",
        subtitle: "Topo, meio e fundo",
        description:
            "Mapeamento da jornada do seu cliente, distribuição de verba por etapa do funil e mensagens calibradas pra cada estágio. Marketing que conversa com vendas.",
        highlight: "Funil 360º",
    },
    {
        icon: LineChart,
        title: "Análise & Otimização",
        subtitle: "Dados que viram decisão",
        description:
            "Dashboards customizados, leitura de cohort, análise de criativo por desempenho e ajustes contínuos. Você enxerga o que sua conta de anúncio esconde.",
        highlight: "Performance",
    },
    // {
    //   icon: Users2,
    //   title: 'Consultoria em Tráfego Pago',
    //   subtitle: 'Pra times in-house',
    //   description:
    //     'Mentoria estratégica para empresas com time interno. Auditoria, plano de ação, treinamento de equipe e acompanhamento. Acelero quem já está no jogo.',
    //   highlight: 'Mentoria',
    // },
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
                        Serviços
                    </span>
                    <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                        Operação completa de tráfego pago — do <span className="text-gradient-purple">criativo</span> ao{" "}
                        <span className="text-gradient-purple">caixa</span>.
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
                        Cada serviço é desenhado pra atacar uma alavanca específica do seu crescimento. Sem pacote
                        engessado, sem entrega genérica.
                    </p>
                </motion.header>

                <motion.ul
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ staggerChildren: 0.08, delayChildren: 0.15 }}
                    className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    aria-label="Lista de serviços"
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

                                    <a
                                        href={buildWhatsappUrl(
                                            `Olá! Tenho interesse no serviço de ${service.title} da Covex Digital.`,
                                        )}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-secondary-light"
                                        aria-label={`Conversar sobre ${service.title}`}
                                    >
                                        Conversar sobre esse serviço
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
