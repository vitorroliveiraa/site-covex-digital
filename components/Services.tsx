"use client";

import { motion } from "framer-motion";
import { MapPin, MessageCircle, Search, Zap } from "lucide-react";
import { GradientOrb } from "./ui/GradientOrb";
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
            "Categorias certas, fotos, avaliações e horário sempre atualizado. É o que aparece primeiro no Google Maps quando alguém pesquisa perto.",
    },
    {
        icon: Zap,
        title: "Site rápido e claro",
        description:
            "Carrega rápido, funciona bem no celular e leva direto pro WhatsApp. Sem enrolação pro cliente decidir.",
    },
    {
        icon: Search,
        title: "Indexação técnica",
        description:
            "Schema certo pro seu tipo de negócio, sitemap, estrutura que o Google entende e indexa de verdade.",
    },
];

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
                    className="max-w-2xl"
                >
                    <h2 className="text-balance font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                        Presença digital é mais do que{" "}
                        <span className="text-gradient-purple">ter um site</span>.
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
                        GMN, site e indexação técnica trabalhando juntos. Sem isso, o site existe mas ninguém
                        encontra.
                    </p>
                </motion.header>

                <div className="mt-14 divide-y divide-white/10 border-t border-white/10">
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
                                        <Icon className="h-5 w-5 text-secondary-light" aria-hidden="true" />
                                    </span>
                                    <h3 className="font-display text-xl font-bold text-white">
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="text-sm leading-relaxed text-white/65 sm:text-base md:col-span-8">
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
                    <p className="max-w-md text-sm leading-relaxed text-white/50">
                        A estrutura já sai com Meta Pixel e Google Ads prontos pra quando você quiser anunciar.
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
