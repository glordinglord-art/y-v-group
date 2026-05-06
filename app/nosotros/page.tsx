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
    "Conoce a Y.V. Group y a Yiseth Vélez: experiencia en administración de propiedad horizontal, bienes raíces, avaluós e inversiones en Antioquia.",
  alternates: {
    canonical: "/nosotros",
  },
  openGraph: {
    title: "Nosotros | Y.V. Group",
    description:
      "Experiencia, visión y valores de Y.V. Group para una gestión inmobiliaria premium en Antioquia.",
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
            Soy Yiseth Vélez. Asesoro y protejo tus inversiones inmobiliarias.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            {brandContent.company.shortDescription}
          </p>
        </ScrollReveal>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-8 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
        <ScrollReveal className="rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,#2a2a2a_0%,#151515_45%,#0d0d0d_100%)] p-8">
          <p className="accent-text text-xs uppercase tracking-[0.3em]">Sobre mí</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white">
            {brandContent.aboutYiseth.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            {brandContent.aboutYiseth.description}
          </p>
          <div className="mt-8 grid gap-3">
            {brandContent.aboutYiseth.bullets.map((item) => (
              <p
                key={item}
                className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-zinc-300"
              >
                {item}
              </p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="grid gap-6" delay={0.08}>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
            <p className="accent-text text-sm font-semibold uppercase tracking-[0.3em]">
              Compañía legalmente constituida
            </p>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              {brandContent.company.legalDescription}
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
            <p className="accent-text text-sm font-semibold uppercase tracking-[0.3em]">
              Misión
            </p>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              {brandContent.company.mission}
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
            <p className="accent-text text-sm font-semibold uppercase tracking-[0.3em]">
              Visión 2030
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
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {brandContent.company.values.map((value) => (
              <div
                key={value.name}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5"
              >
                <p className="text-lg font-semibold text-white">{value.name}</p>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{value.description}</p>
              </div>
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
              Conoce cómo se traduce esta visión en servicios concretos.
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
