import type { Metadata } from "next";

import { ContactGallery } from "@/components/landing/contact-gallery";
import { EditorialGallery } from "@/components/landing/editorial-gallery";
import { ScrollReveal } from "@/components/landing/scroll-reveal";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { TrackedLink } from "@/components/landing/tracked-link";
import { siteConfig } from "@/lib/site";

const projects = [
  {
    name: "Parcelacion San Luis",
    detail: "Gestion administrativa y financiera para una operacion ordenada.",
    location: "El Retiro, Antioquia",
  },
  {
    name: "Villa Fontana",
    detail: "Acompanamiento integral enfocado en convivencia y valorizacion.",
    location: "Envigado, Antioquia",
  },
  {
    name: "Continental Towers",
    detail: "Control presupuestal y trazabilidad operativa para decisiones solidas.",
    location: "Area metropolitana",
  },
  {
    name: "Retiro Verde",
    detail: "Direccion moderna de copropiedad con foco en sostenibilidad.",
    location: "Oriente antioqueno",
  },
];

export const metadata: Metadata = {
  title: "Experiencia",
  description:
    "Experiencia y proyectos destacados de Y.V. Group en Antioquia: administracion, valorizacion, control financiero y sostenibilidad.",
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
    <main className="bg-[#0a0a0a] text-white">
      <SiteHeader page="home" />

      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
        <ScrollReveal className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Experiencia
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
            Proyectos y visuales que respaldan una gestion de alto nivel.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Esta pagina concentra la experiencia destacada, la presencia visual y
            el lenguaje editorial que fortalece la percepcion de marca.
          </p>
        </ScrollReveal>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10 lg:px-12">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ScrollReveal
              key={project.name}
              className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-orange-300">
                {project.location}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
                {project.name}
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-300">{project.detail}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <EditorialGallery />
      <ContactGallery />

      <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-xl lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
              Contacto
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Si quieres avanzar, la pagina de contacto ya esta lista para convertir.
            </h2>
          </div>
          <TrackedLink
            href="/contacto#formulario"
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white transition duration-300 hover:bg-orange-400"
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
