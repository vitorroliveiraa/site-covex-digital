"use client";

import Image from "next/image";
import { Instagram, Facebook, Mail, MessageCircle } from "lucide-react";
import { buildWhatsappUrl, siteConfig } from "@/lib/site";

const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#resultados", label: "Posicionamento" },
    { href: "#processo", label: "Processo" },
    { href: "#contato", label: "Contato" },
];

const services = ["Meta Ads", "Estratégia de Funil", "Análise & Otimização"];

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative isolate overflow-hidden">
            <div
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary-light/40 to-transparent"
                aria-hidden="true"
            />

            <div className="liquid-glass border-t-0 border-b-0 border-x-0">
                <div className="container-fluid py-16">
                    <div className="grid gap-12 lg:grid-cols-12">
                        <div className="lg:col-span-5">
                            <a href="#hero" className="group inline-flex items-center gap-2" aria-label="Covex Digital">
                                <span className="relative flex h-9 w-9 items-center justify-center">
                                    <span className="absolute inset-0 -m-1 rounded-full bg-secondary/40 blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    <Image
                                        src="/logo.png"
                                        alt="Covex Digital"
                                        width={36}
                                        height={36}
                                        className="relative h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                </span>
                                <span className="font-display text-xl font-bold tracking-tight text-primary">
                                    Covex<span className="text-secondary-light">.</span>
                                    <span className="font-medium text-white/70">Digital</span>
                                </span>
                            </a>
                            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">
                                Gestão de tráfego pago de alto impacto pra negócios que entendem que marketing sério é
                                decisão estratégica, não despesa.
                            </p>

                            <div className="mt-6 flex items-center gap-3">
                                <a
                                    href={buildWhatsappUrl()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:text-secondary-light"
                                    aria-label="WhatsApp"
                                >
                                    <MessageCircle className="h-4 w-4" />
                                </a>
                                <a
                                    href={siteConfig.social.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:text-secondary-light"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="h-4 w-4" />
                                </a>
                                {/* <a
                                    href={siteConfig.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:text-secondary-light"
                                    aria-label="LinkedIn"
                                >
                                    <Facebook className="h-4 w-4" />
                                </a> */}
                                <a
                                    href={`mailto:${siteConfig.email}`}
                                    className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:text-secondary-light"
                                    aria-label="E-mail"
                                >
                                    <Mail className="h-4 w-4" />
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-8 lg:col-span-7 lg:grid-cols-3">
                            <div>
                                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary-light">
                                    Navegação
                                </h3>
                                <ul className="mt-5 space-y-3">
                                    {navLinks.map((link) => (
                                        <li key={link.href}>
                                            <a
                                                href={link.href}
                                                className="text-sm text-white/65 transition-colors hover:text-white"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary-light">
                                    Serviços
                                </h3>
                                <ul className="mt-5 space-y-3">
                                    {services.map((s) => (
                                        <li key={s} className="text-sm text-white/65">
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary-light">
                                    Contato
                                </h3>
                                <ul className="mt-5 space-y-3">
                                    <li>
                                        <a
                                            href={buildWhatsappUrl()}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-white/65 transition-colors hover:text-white"
                                        >
                                            {siteConfig.whatsapp.display}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={`mailto:${siteConfig.email}`}
                                            className="text-sm text-white/65 transition-colors hover:text-white"
                                        >
                                            {siteConfig.email}
                                        </a>
                                    </li>
                                    <li className="text-sm text-white/65">Atendimento Brasil</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row sm:items-center">
                        <p className="text-xs text-white/45">© {year} Covex Digital. Todos os direitos reservados.</p>
                        <p className="text-xs text-white/45">Construído com obsessão por performance.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
