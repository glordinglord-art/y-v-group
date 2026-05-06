'use client'

import { motion } from "framer-motion";

const services = [
  {
    icon: "01",
    title: "Administracion alineada a la Ley 675",
    description:
      "Direccion integral de copropiedades con cumplimiento normativo, operacion estable y trazabilidad en la toma de decisiones.",
  },
  {
    icon: "02",
    title: "Mediacion de conflictos y convivencia",
    description:
      "Intervencion oportuna para proteger la armonia residencial y construir cultura de respeto entre residentes, consejo y administracion.",
  },
  {
    icon: "03",
    title: "Asesoria, titulos y avaluos",
    description:
      "Analisis tecnico y juridico para inversionistas y copropiedades con soporte en estudios de titulos, marcos legales y valoracion.",
  },
  {
    icon: "04",
    title: "Control contable y financiero",
    description:
      "Presupuestos, cartera, seguimiento de indicadores y administracion responsable de recursos con foco en sostenibilidad financiera.",
  },
  {
    icon: "05",
    title: "Control documental y facturacion digital",
    description:
      "Estandarizacion de procesos, soporte documental y orden administrativo para una operacion moderna y auditable.",
  },
  {
    icon: "06",
    title: "Gestion estrategica para valorizacion",
    description:
      "Acciones concretas para elevar el valor percibido y real de los activos inmobiliarios a traves de una gestion profesional.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
      <div className="mb-12 flex max-w-3xl flex-col gap-5">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          Portafolio de servicios
        </p>
        <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
          Gestion inmobiliaria premium con criterio tecnico y enfoque humano.
        </h2>
        <p className="text-lg leading-8 text-zinc-300">
          Cada servicio esta pensado para proteger patrimonio, ordenar la
          operacion y convertir la administracion en una fuente de confianza.
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
            className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-orange-400/50 hover:bg-white/[0.07] hover:shadow-[0_20px_45px_rgba(249,115,22,0.14)]"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/80 to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="flex items-start justify-between gap-4">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-400/30 bg-orange-500/12 text-sm font-semibold tracking-[0.2em] text-orange-300">
                {service.icon}
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white/45">
                Premium
              </span>
            </div>
            <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-white">
              {service.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-zinc-300">
              {service.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
