import type { Metadata } from "next";

import { ScrollReveal } from "@/components/landing/scroll-reveal";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { TrackedLink } from "@/components/landing/tracked-link";
import { siteConfig } from "@/lib/site";

const cases = [
  {
    title: "Caso 01 | Copropiedad residencial",
    summary:
      "Espacio listo para documentar como una gestion profesional mejoro el orden operativo, la convivencia y la confianza financiera.",
    result: "Orden administrativo y percepcion de mayor control.",
  },
  {
    title: "Caso 02 | Proyecto con enfoque en valorizacion",
    summary:
      "Aqui podran contar el contexto, los retos, las decisiones tomadas y como eso ayudo a proteger el patrimonio.",
    result: "Mejor lectura del activo y mas confianza para la toma de decisiones.",
  },
  {
    title: "Caso 03 | Gestion financiera y documental",
    summary:
      "Ideal para explicar como se fortalecieron procesos, reportes y trazabilidad dentro de la copropiedad o proyecto.",
    result: "Procesos mas claros, mayor seguimiento y mejor control interno.",
  },
];

export const metadata: Metadata = {
  title: "Casos de exito",
  description:
    "Pagina de casos de exito de Y.V. Group lista para documentar resultados, proyectos y transformaciones reales en Antioquia.",
  alternates: {
    canonical: "/casos-de-exito",
  },
  openGraph: {
    title: "Casos de exito | Y.V. Group",
    description:
      "Conoce la estructura premium de casos de exito de Y.V. Group para mostrar resultados reales y generar mas confianza.",
    url: `${siteConfig.url}/casos-de-exito`,
  },
};

export default function CasosDeExitoPage() {
  return (
    <main className="bg-[#0a0a0a] text-white">
      <SiteHeader page="home" />

      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
        <ScrollReveal className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Casos de exito
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
            Una pagina lista para demostrar resultados reales y cobrar con mas autoridad.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Cuando tu tia tenga material, aqui podran mostrar transformaciones,
            indicadores, retos y resultados para convertir visitas en confianza.
          </p>
        </ScrollReveal>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-8 sm:px-10 lg:grid-cols-3 lg:px-12">
        {cases.map((item, index) => (
          <ScrollReveal
            key={item.title}
            delay={index * 0.08}
            className="rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.05),rgba(18,18,18,0.96))] p-8 backdrop-blur-xl"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-orange-300">Resultado</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white">
              {item.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-300">{item.summary}</p>
            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
                Impacto
              </p>
              <p className="mt-3 text-base leading-7 text-zinc-200">{item.result}</p>
            </div>
          </ScrollReveal>
        ))}
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10 lg:px-12">
        <ScrollReveal className="flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-xl lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
              Preparado para crecer
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Cuando tengan los casos reales, esta pagina se convierte en una herramienta de venta muy fuerte.
            </h2>
          </div>
          <TrackedLink
            href="/contacto#formulario"
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white transition duration-300 hover:bg-orange-400"
            eventName="cta_cases_contact"
            eventSection="cases"
          >
            Ir a contacto
          </TrackedLink>
        </ScrollReveal>
      </section>

      <SiteFooter />
    </main>
  );
}
