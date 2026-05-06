import type { Metadata } from "next";

import { Services } from "@/components/landing/services";
import { ShowcaseDevice } from "@/components/landing/showcase-device";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { TrackedLink } from "@/components/landing/tracked-link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de Y.V. Group: administracion de propiedad horizontal, avaluos, asesoria inmobiliaria, control financiero y gestion documental en Antioquia.",
  alternates: {
    canonical: "/servicios",
  },
  openGraph: {
    title: "Servicios | Y.V. Group",
    description:
      "Descubre el portafolio premium de Y.V. Group para copropiedades, inversionistas y consejos de administracion.",
    url: `${siteConfig.url}/servicios`,
  },
};

export default function ServiciosPage() {
  return (
    <main className="theme-page">
      <SiteHeader page="home" />

      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
        <div className="max-w-4xl">
          <p className="accent-text text-sm font-semibold uppercase tracking-[0.3em]">
            Servicios
          </p>
          <h1 className="theme-heading mt-5 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
            Un portafolio pensado para proteger patrimonio y ordenar la operacion.
          </h1>
          <p className="theme-muted mt-6 max-w-3xl text-lg leading-8">
            Aqui estan reunidos los servicios con los que Y.V. Group acompana
            copropiedades, inversionistas y consejos para tomar mejores decisiones.
          </p>
        </div>
      </section>

      <Services />
      <ShowcaseDevice />

      <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10 lg:px-12">
        <div className="theme-surface flex flex-col items-start justify-between gap-6 rounded-[2rem] border p-8 backdrop-blur-xl lg:flex-row lg:items-center">
          <div>
            <p className="accent-text text-sm font-semibold uppercase tracking-[0.3em]">
              Continuemos
            </p>
            <h2 className="theme-heading mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Mira la experiencia y los proyectos que respaldan este portafolio.
            </h2>
          </div>
          <TrackedLink
            href="/experiencia"
            className="accent-bg accent-shadow inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white transition duration-300 hover:-translate-y-0.5"
            eventName="cta_servicios_experiencia"
            eventSection="servicios"
          >
            Ver experiencia
          </TrackedLink>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
