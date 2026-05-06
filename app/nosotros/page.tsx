import type { Metadata } from "next";

import { brandContent } from "@/content/brand-content";
import { ScrollReveal } from "@/components/landing/scroll-reveal";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { TrackedLink } from "@/components/landing/tracked-link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce a Y.V. Group y a Yiseth Velez: experiencia en administracion de propiedad horizontal, bienes raices, avaluos e inversiones en Antioquia.",
  alternates: {
    canonical: "/nosotros",
  },
  openGraph: {
    title: "Nosotros | Y.V. Group",
    description:
      "Experiencia, vision y valores de Y.V. Group para una gestion inmobiliaria premium en Antioquia.",
    url: `${siteConfig.url}/nosotros`,
  },
};

export default function NosotrosPage() {
  return (
    <main className="theme-page">
      <SiteHeader page="home" />

      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
        <ScrollReveal className="max-w-4xl">
          <p className="accent-text text-sm font-semibold uppercase tracking-[0.3em]">
            Nosotros
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
            Una firma construida sobre criterio, confianza y direccion profesional.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Y.V. Group esta liderada por {brandContent.company.founder}, experta en administracion de
            propiedad horizontal, dominio de la Ley 675 y gestion enfocada en dar
            estabilidad financiera, orden operativo y mejor convivencia.
          </p>
        </ScrollReveal>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-8 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
        <ScrollReveal className="rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,#2a2a2a_0%,#151515_45%,#0d0d0d_100%)] p-8">
          <p className="accent-text text-xs uppercase tracking-[0.3em]">Perfil</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white">
            {brandContent.company.founder}
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Su enfoque combina conocimiento legal, liderazgo humano y criterio
            financiero para dirigir copropiedades y activos inmobiliarios con mas orden y valor.
          </p>
        </ScrollReveal>

        <ScrollReveal className="grid gap-6" delay={0.08}>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
            <p className="accent-text text-sm font-semibold uppercase tracking-[0.3em]">
              Mision
            </p>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              {brandContent.company.mission}
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
            <p className="accent-text text-sm font-semibold uppercase tracking-[0.3em]">
              Vision 2030
            </p>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              {brandContent.company.vision}
            </p>
          </div>
        </ScrollReveal>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <ScrollReveal className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
          <p className="accent-text text-sm font-semibold uppercase tracking-[0.3em]">
            Valores
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {brandContent.company.values.map((value) => (
              <span
                key={value}
                className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-medium text-zinc-200"
              >
                {value}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10 lg:px-12">
        <ScrollReveal className="flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-xl lg:flex-row lg:items-center">
          <div>
            <p className="accent-text text-sm font-semibold uppercase tracking-[0.3em]">
              Siguiente paso
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Conoce como se traduce esta vision en servicios concretos.
            </h2>
          </div>
          <TrackedLink
            href="/servicios"
            className="accent-bg accent-shadow inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white transition duration-300 hover:-translate-y-0.5"
            eventName="cta_nosotros_servicios"
            eventSection="nosotros"
          >
            Ver servicios
          </TrackedLink>
        </ScrollReveal>
      </section>

      <SiteFooter />
    </main>
  );
}
