import type { Metadata } from "next";

import { ContactGallery } from "@/components/landing/contact-gallery";
import { EditorialGallery } from "@/components/landing/editorial-gallery";
import { ScrollReveal } from "@/components/landing/scroll-reveal";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { TrackedLink } from "@/components/landing/tracked-link";
import { brandContent } from "@/content/brand-content";
import { siteConfig } from "@/lib/site";

const highlightedProjects = brandContent.experience.projects.slice(0, 6);

export const metadata: Metadata = {
  title: "Experiencia",
  description:
    "Experiencia y proyectos destacados de Y.V. Group en Antioquia: administración, valorización, control financiero y sostenibilidad.",
  alternates: {
    canonical: "/experiencia",
  },
  openGraph: {
    title: "Experiencia | Y.V. Group",
    description:
      "Conoce proyectos destacados, respaldo visual y experiencia profesional de Y.V. Group.",
    url: `${siteConfig.url}/experiencia`,
  },
};

export default function ExperienciaPage() {
  return (
    <main className="theme-page">
      <SiteHeader page="home" />

      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
        <ScrollReveal className="max-w-4xl">
          <p className="accent-text text-sm font-semibold uppercase tracking-[0.3em]">
            Experiencia
          </p>
          <h1 className="theme-heading mt-5 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
            Más de 14 años administrando copropiedades, parcelaciones y condominios.
          </h1>
          <p className="theme-muted mt-6 max-w-3xl text-lg leading-8">
            {brandContent.experience.intro}
          </p>
        </ScrollReveal>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10 lg:px-12">
        <div className="grid gap-6 md:grid-cols-2">
          {highlightedProjects.map((project) => (
            <ScrollReveal
              key={project.name}
              className="theme-surface rounded-[2rem] border p-8 backdrop-blur-xl"
            >
              <p className="accent-text text-xs uppercase tracking-[0.28em]">
                {project.period}
              </p>
              <h2 className="theme-heading mt-4 text-3xl font-semibold tracking-[-0.04em]">
                {project.name}
              </h2>
              <p className="theme-muted mt-4 text-base leading-7">
                {project.location} | {project.units}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 lg:px-12">
        <ScrollReveal className="theme-surface rounded-[2rem] border p-8 backdrop-blur-xl">
          <p className="accent-text text-sm font-semibold uppercase tracking-[0.3em]">
            Historial completo
          </p>
          <h2 className="theme-heading mt-5 text-4xl font-semibold tracking-[-0.04em]">
            Algunas parcelaciones y copropiedades atendidas.
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {brandContent.experience.projects.map((project) => (
              <div
                key={`${project.period}-${project.name}`}
                className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4"
              >
                <p className="accent-text text-[11px] uppercase tracking-[0.24em]">
                  {project.period}
                </p>
                <p className="mt-3 text-base font-semibold text-white">{project.name}</p>
                <p className="mt-2 text-sm text-zinc-400">
                  {project.location} | {project.units}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <EditorialGallery />
      <ContactGallery />

      <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10 lg:px-12">
        <div className="theme-surface flex flex-col items-start justify-between gap-6 rounded-[2rem] border p-8 backdrop-blur-xl lg:flex-row lg:items-center">
          <div>
            <p className="accent-text text-sm font-semibold uppercase tracking-[0.3em]">
              Contacto
            </p>
            <h2 className="theme-heading mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Si quieres avanzar, la página de contacto ya está lista para convertir.
            </h2>
          </div>
          <TrackedLink
            href="/contacto#formulario"
            className="accent-bg accent-shadow inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white transition duration-300 hover:-translate-y-0.5"
            eventName="cta_experiencia_contacto"
            eventSection="experiencia"
          >
            Ir a contacto
          </TrackedLink>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
