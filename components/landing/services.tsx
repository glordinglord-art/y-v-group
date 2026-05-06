'use client'

import { motion } from "framer-motion";

const services = [
  {
    icon: "01",
    title: "Administración alineada a la Ley 675",
    description:
      "Dirección integral de copropiedades con cumplimiento normativo, operación estable y trazabilidad en la toma de decisiones.",
  },
  {
    icon: "02",
    title: "Mediación de conflictos y convivencia",
    description:
      "Intervención oportuna para proteger la armonía residencial y construir cultura de respeto entre residentes, consejo y administración.",
  },
  {
    icon: "03",
    title: "Asesoría, títulos y avalúos",
    description:
      "Análisis técnico y jurídico para inversionistas y copropiedades con soporte en estudios de títulos, marcos legales y valoración.",
  },
  {
    icon: "04",
    title: "Control contable y financiero",
    description:
      "Presupuestos, cartera, seguimiento de indicadores y administración responsable de recursos con foco en sostenibilidad financiera.",
  },
  {
    icon: "05",
    title: "Control documental y facturación digital",
    description:
      "Estandarización de procesos, soporte documental y orden administrativo para una operación moderna y auditable.",
  },
  {
    icon: "06",
    title: "Gestión estratégica para valorización",
    description:
      "Acciones concretas para elevar el valor percibido y real de los activos inmobiliarios a través de una gestión profesional.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
      <div className="mb-12 flex max-w-3xl flex-col gap-5">
        <p className="accent-text text-sm font-semibold uppercase tracking-[0.3em]">
          Portafolio de servicios
        </p>
        <h2 className="theme-heading text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
          Gestión inmobiliaria premium con criterio técnico y enfoque humano.
        </h2>
        <p className="theme-muted text-lg leading-8">
          Cada servicio está pensado para proteger patrimonio, ordenar la
          operación y convertir la administración en una fuente de confianza.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.55,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="theme-surface group relative overflow-hidden rounded-[1.75rem] border p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1"
            style={{ boxShadow: "0 20px 45px rgb(var(--accent-rgb) / 0.14)" }}
          >
            <div
              className="absolute inset-x-0 top-0 h-px opacity-0 transition group-hover:opacity-100"
              style={{ background: "linear-gradient(to right, transparent, rgb(var(--accent-rgb) / 0.8), transparent)" }}
            />
            <div className="flex items-start justify-between gap-4">
              <span
                className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border text-sm font-semibold tracking-[0.2em]"
                style={{
                  borderColor: "rgb(var(--accent-rgb) / 0.3)",
                  backgroundColor: "rgb(var(--accent-rgb) / 0.12)",
                  color: "var(--accent)",
                }}
              >
                {service.icon}
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] theme-muted">
                Premium
              </span>
            </div>
            <h3 className="theme-heading mt-8 text-2xl font-semibold tracking-[-0.03em]">
              {service.title}
            </h3>
            <p className="theme-muted mt-4 text-base leading-7">
              {service.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
