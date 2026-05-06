import type { Metadata } from "next";

import { AnimatedStats } from "@/components/landing/animated-stats";
import { Hero } from "@/components/landing/hero";
import { ScrollReveal } from "@/components/landing/scroll-reveal";
import { SiteFooter } from "@/components/landing/site-footer";
import { TrackedLink } from "@/components/landing/tracked-link";
import { WhatsAppFloat } from "@/components/landing/whatsapp-float";
import { brandContent } from "@/content/brand-content";
import { siteConfig } from "@/lib/site";

const summaryCards = [
  {
    eyebrow: "Nosotros",
    title: "La vision y el liderazgo que sostienen la marca.",
    description:
      "Conoce a Yiseth Velez, la mision, la vision 2030 y los valores que respaldan cada decision.",
    href: "/nosotros",
    eventName: "home_teaser_nosotros",
  },
  {
    eyebrow: "Servicios",
    title: "Un portafolio premium para administrar, asesorar y valorizar.",
    description:
      "Explora el detalle de administracion, mediacion, avaluos, control financiero y gestion documental.",
    href: "/servicios",
    eventName: "home_teaser_servicios",
  },
  {
    eyebrow: "Experiencia",
    title: "Proyectos y presencia visual que fortalecen la confianza.",
    description:
      "Mira proyectos destacados, piezas editoriales y experiencia aplicada en Antioquia.",
    href: "/experiencia",
    eventName: "home_teaser_experiencia",
  },
  {
    eyebrow: "Contacto",
    title: "Una ruta hecha para convertir visitas en conversaciones reales.",
    description:
      "Formulario, telefono, correo, WhatsApp y una pagina dedicada para cerrar con elegancia.",
    href: "/contacto",
    eventName: "home_teaser_contacto",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Y.V. Group",
  alternateName: "Y.V. Group Real Estate, Investments & Appraisals",
  description:
    "Empresa de bienes raices, inversiones, avaluos y administracion de propiedad horizontal liderada por Yiseth Velez.",
  areaServed: "Antioquia, Colombia",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Antioquia",
    addressCountry: "CO",
  },
  telephone: "+57 310 838 1590",
  email: "gerencia@yvgroup.com.co",
};

export const metadata: Metadata = {
  title: "Y.V. Group | Real Estate, Investments & Appraisals",
  description:
    "Landing principal de Y.V. Group en Antioquia. Descubre nosotros, servicios, experiencia y contacto desde una entrada premium y clara.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Y.V. Group | Bienes raices, inversiones y avaluos",
    description:
      "Inicio premium de Y.V. Group con acceso a servicios, experiencia, nosotros y contacto.",
    url: siteConfig.url,
  },
};

export default function Home() {
  return (
    <main className="theme-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <WhatsAppFloat />

      <Hero />
      <AnimatedStats />

      <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
        <ScrollReveal className="max-w-4xl">
          <p className="accent-text text-sm font-semibold uppercase tracking-[0.3em]">
            Inicio
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            {brandContent.home.introTitle}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            {brandContent.home.introDescription}
          </p>
        </ScrollReveal>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-8 sm:px-10 lg:grid-cols-2 lg:px-12">
        {summaryCards.map((card, index) => (
          <ScrollReveal
            key={card.title}
            delay={index * 0.06}
            className="rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.05),rgba(18,18,18,0.96))] p-8 backdrop-blur-xl"
          >
            <p className="accent-text text-xs uppercase tracking-[0.3em]">{card.eyebrow}</p>
            <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white">
              {card.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-zinc-300">{card.description}</p>
            <div className="mt-8">
              <TrackedLink
                href={card.href}
                className="accent-link inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white"
                style={{ borderColor: "rgb(var(--accent-rgb) / 0.18)" }}
                eventName={card.eventName}
                eventSection="home_summary"
              >
                Ver mas
              </TrackedLink>
            </div>
          </ScrollReveal>
        ))}
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 lg:px-12">
        <ScrollReveal
          className="flex flex-col items-start justify-between gap-6 rounded-[2rem] p-8 backdrop-blur-xl lg:flex-row lg:items-center"
          style={{
            border: "1px solid rgb(var(--accent-rgb) / 0.2)",
            background:
              "linear-gradient(135deg, rgb(var(--accent-rgb) / 0.14), rgba(18,18,18,0.9) 45%, rgba(10,10,10,1))",
          }}
        >
          <div>
            <p className="accent-text text-sm font-semibold uppercase tracking-[0.3em]">
              Ruta recomendada
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Si quieres una visita guiada, empieza por servicios y termina en contacto.
            </h2>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <TrackedLink
              href="/servicios"
              className="accent-bg accent-shadow inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white transition duration-300 hover:-translate-y-0.5"
              eventName="cta_home_servicios"
              eventSection="home"
            >
              Ir a servicios
            </TrackedLink>
            <TrackedLink
              href="/contacto"
              className="accent-link inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white"
              style={{ borderColor: "rgb(var(--accent-rgb) / 0.18)" }}
              eventName="cta_home_contacto"
              eventSection="home"
            >
              Ir a contacto
            </TrackedLink>
          </div>
        </ScrollReveal>
      </section>

      <SiteFooter />
    </main>
  );
}
