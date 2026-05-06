import type { Metadata } from "next";

import { ScrollReveal } from "@/components/landing/scroll-reveal";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { siteConfig } from "@/lib/site";

const insights = [
  {
    tag: "SEO local",
    title: "Cómo elegir una administración de propiedad horizontal en Antioquia",
    description:
      "Pieza pensada para captar tráfico orgánico con una intención comercial clara y construir autoridad local.",
  },
  {
    tag: "Inversión",
    title: "Señales clave antes de invertir en un activo inmobiliario",
    description:
      "Contenido futuro ideal para campañas de Meta Ads y Google Ads orientadas a educar y convertir.",
  },
  {
    tag: "Convivencia",
    title: "Buenas prácticas para mejorar la convivencia en copropiedades",
    description:
      "Una categoría muy útil para posicionar la experiencia de Y.V. Group y atraer administraciones que buscan orden.",
  },
];

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Espacio editorial de Y.V. Group para contenidos sobre propiedad horizontal, avaluós, inversión inmobiliaria y SEO local en Antioquia.",
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: "Insights | Y.V. Group",
    description:
      "Página preparada para contenidos futuros, autoridad de marca y publicidad de Y.V. Group.",
    url: `${siteConfig.url}/insights`,
  },
};

export default function InsightsPage() {
  return (
    <main className="theme-page">
      <SiteHeader page="home" />

      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
        <ScrollReveal className="max-w-4xl">
          <p className="accent-text text-sm font-semibold uppercase tracking-[0.3em]">
            Insights
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
            Un espacio listo para SEO, autoridad y campañas futuras.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Aquí se pueden publicar artículos, novedades y piezas que apoyen el posicionamiento de marca y el rendimiento de la publicidad.
          </p>
        </ScrollReveal>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-8 sm:px-10 lg:grid-cols-3 lg:px-12">
        {insights.map((item, index) => (
          <ScrollReveal
            key={item.title}
            delay={index * 0.08}
            className="rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.05),rgba(18,18,18,0.96))] p-8 backdrop-blur-xl"
          >
            <p className="accent-text text-xs uppercase tracking-[0.3em]">{item.tag}</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white">
              {item.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-300">{item.description}</p>
          </ScrollReveal>
        ))}
      </section>

      <SiteFooter />
    </main>
  );
}
