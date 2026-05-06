import type { Metadata } from "next";

import { Contact } from "@/components/landing/contact";
import { ContactGallery } from "@/components/landing/contact-gallery";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { TrackedLink } from "@/components/landing/tracked-link";
import { brandContent } from "@/content/brand-content";
import { siteConfig } from "@/lib/site";

const projects = [
  {
    name: "Parcelación San Luis",
    detail: "Gestión administrativa y financiera para una operación ordenada.",
    location: "El Retiro, Antioquia",
    category: "Copropiedad residencial",
  },
  {
    name: "Villa Fontana",
    detail: "Acompañamiento integral enfocado en convivencia y valorización.",
    location: "Envigado, Antioquia",
    category: "Gestión de convivencia",
  },
  {
    name: "Continental Towers",
    detail: "Control presupuestal y trazabilidad operativa para decisiones sólidas.",
    location: "Área metropolitana",
    category: "Control financiero",
  },
  {
    name: "Retiro Verde",
    detail: "Dirección moderna de copropiedad con foco en sostenibilidad.",
    location: "Oriente antioqueño",
    category: "Sostenibilidad y gestión",
  },
];

const faqs = [
  {
    question: "¿Qué servicios ofrece Y.V. Group?",
    answer:
      "Y.V. Group ofrece administración de propiedad horizontal, asesoría inmobiliaria, avaluós, control financiero, mediación de conflictos y gestión documental.",
  },
  {
    question: "¿Y.V. Group trabaja con la Ley 675?",
    answer:
      "Sí. La gestión de Y.V. Group está alineada con la Ley 675 y con buenas prácticas administrativas para copropiedades y conjuntos residenciales.",
  },
  {
    question: "¿Cómo puedo contactar a Yiseth Vélez?",
    answer:
      "Puedes contactar a Y.V. Group por teléfono, correo, WhatsApp o mediante el formulario de contacto de esta página.",
  },
  {
    question: "¿Y.V. Group presta servicios de avaluós e inversión inmobiliaria?",
    answer:
      "Sí. La firma acompaña procesos de avaluós, asesoría legal e inversión inmobiliaria para tomar decisiones más seguras y rentables.",
  },
];

export const metadata: Metadata = {
  title: "Contacto y Proyectos",
  description:
    "Página de contacto de Y.V. Group con formulario, WhatsApp, proyectos destacados y preguntas frecuentes en Antioquia.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto Y.V. Group | Asesoría inmobiliaria en Antioquia",
    description:
      "Contacta a Y.V. Group por formulario, correo, teléfono o WhatsApp. Conoce proyectos y servicios inmobiliarios en Antioquia.",
    url: `${siteConfig.url}/contacto`,
  },
};

export default function ContactPage() {
  return (
    <main className="theme-page">
      <SiteHeader page="contact" />

      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at top right, rgb(var(--accent-rgb) / 0.24), transparent 28%), linear-gradient(140deg, rgba(8,8,8,0.96), rgba(20,20,20,0.92) 48%, rgba(8,8,8,1))",
          }}
        />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-24 sm:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="accent-text text-sm font-semibold uppercase tracking-[0.3em]">
                Contáctanos
              </p>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
                Una página aparte para hablar claro, mostrar proyectos y cerrar clientes.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                {brandContent.contact.description}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <TrackedLink
                  href="#formulario"
                  className="accent-bg accent-shadow inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white transition duration-300 hover:-translate-y-0.5"
                  eventName="cta_form_contact_page"
                  eventSection="contact_page"
                >
                  Ir al formulario
                </TrackedLink>
                <TrackedLink
                  href={siteConfig.phoneHref}
                  className="accent-link inline-flex items-center justify-center rounded-full border bg-white/[0.05] px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white"
                  style={{ borderColor: "rgb(var(--accent-rgb) / 0.2)" }}
                  eventName="cta_call_contact_page"
                  eventSection="contact_page"
                >
                  Llamar ahora
                </TrackedLink>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
                <p className="accent-text text-xs uppercase tracking-[0.3em]">
                  Teléfono
                </p>
                <p className="mt-4 text-3xl font-semibold text-white">310 838 1590</p>
                <p className="mt-3 text-base leading-7 text-zinc-300">
                  Atención cercana para copropiedades, consejos e inversionistas.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
                <p className="accent-text text-xs uppercase tracking-[0.3em]">
                  Correo
                </p>
                <p className="mt-4 text-xl font-semibold text-white">{siteConfig.email}</p>
                <p className="mt-3 text-base leading-7 text-zinc-300">
                  Ideal para solicitudes formales, propuestas y seguimiento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia" className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
        <div className="mb-12 flex max-w-3xl flex-col gap-5">
          <p className="accent-text text-sm font-semibold uppercase tracking-[0.3em]">
            Proyectos y experiencia
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Fotos visuales y casos que respaldan la confianza de la marca.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] backdrop-blur-xl"
            >
              <div
                className="flex h-72 items-end p-7"
                style={{
                  background:
                    index % 2 === 0
                      ? "linear-gradient(160deg, rgb(var(--accent-rgb) / 0.35), rgba(23,23,23,0.92) 55%, rgba(10,10,10,1))"
                      : "linear-gradient(160deg, rgba(255,255,255,0.08), rgba(39,39,42,0.94) 50%, rgba(10,10,10,1))",
                }}
              >
                <div>
                  <p className="accent-text text-xs uppercase tracking-[0.3em]">
                    Proyecto destacado
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
                    {project.name}
                  </h3>
                  <p className="mt-4 text-sm uppercase tracking-[0.24em] text-white/60">
                    {project.location} | {project.category}
                  </p>
                </div>
              </div>
              <div className="p-7">
                <p className="text-base leading-7 text-zinc-300">{project.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ContactGallery />

      <section className="mx-auto w-full max-w-7xl px-6 py-6 sm:px-10 lg:px-12">
        <div
          className="rounded-[2rem] p-8 lg:p-12"
          style={{
            border: "1px solid rgb(var(--accent-rgb) / 0.2)",
            background:
              "linear-gradient(135deg, rgb(var(--accent-rgb) / 0.14), rgba(18,18,18,0.9) 45%, rgba(10,10,10,1))",
          }}
        >
          <p className="accent-text text-sm font-semibold uppercase tracking-[0.3em]">
            Conversión
          </p>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Si tu tía quiere que los clientes contacten fácil, esta página ya está hecha para eso.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Botones claros, teléfono, correo, WhatsApp y formulario visible en una sola ruta.
          </p>
        </div>
      </section>

      <div id="formulario">
        <Contact />
      </div>

      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
        <div className="mb-12 flex max-w-3xl flex-col gap-5">
          <p className="accent-text text-sm font-semibold uppercase tracking-[0.3em]">
            Preguntas frecuentes
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Respuestas claras para decidir más rápido.
          </h2>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-white">
                {faq.question}
              </summary>
              <p className="mt-4 max-w-4xl text-base leading-7 text-zinc-300">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
