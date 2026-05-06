'use client'

import Image from "next/image";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

import { TrackedLink } from "@/components/landing/tracked-link";

const sections = [
  {
    eyebrow: "Nosotros",
    title: "El criterio humano y profesional sostiene cada decisión.",
    description:
      "La ruta comienza con la visión de Yiseth Vélez: una gestión que mezcla liderazgo, cumplimiento y lectura financiera real.",
    metric: "Visión 2030",
    chips: ["Liderazgo", "Confianza", "Dirección clara"],
    href: "/nosotros",
    eventName: "home_story_nosotros",
  },
  {
    eyebrow: "Servicios",
    title: "El portafolio ordena la operación y protege patrimonio.",
    description:
      "Administración, avaluós, control financiero y gestión documental aparecen como un sistema premium y no como piezas sueltas.",
    metric: "Portafolio",
    chips: ["Ley 675", "Avaluós", "Control financiero"],
    href: "/servicios",
    eventName: "home_story_servicios",
  },
  {
    eyebrow: "Experiencia",
    title: "Los proyectos y visuales convierten la confianza en percepción.",
    description:
      "La experiencia muestra respaldo, presencia editorial y una marca que se siente más madura mientras el usuario sigue bajando.",
    metric: "Respaldo",
    chips: ["Proyectos", "Presencia visual", "Valorización"],
    href: "/experiencia",
    eventName: "home_story_experiencia",
  },
  {
    eyebrow: "Contacto",
    title: "La última parada está hecha para convertir sin fricción.",
    description:
      "Teléfono, WhatsApp, correo y formulario cierran el recorrido con una experiencia clara, elegante y lista para vender mejor.",
    metric: "Conversión",
    chips: ["WhatsApp", "Formulario", "Contacto directo"],
    href: "/contacto",
    eventName: "home_story_contacto",
  },
];

function clampStep(progress: number) {
  if (progress < 0.25) return 0;
  if (progress < 0.5) return 1;
  if (progress < 0.75) return 2;
  return 3;
}

export function HomeStoryPanel() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const [activeIndex, setActiveIndex] = useState(0);

  const cardX = useTransform(scrollYProgress, [0, 0.18, 0.34, 1], [170, 74, -86, -86]);
  const cardY = useTransform(scrollYProgress, [0, 0.18, 0.34, 1], [-190, -78, -12, -12]);
  const cardRotate = useTransform(scrollYProgress, [0, 0.18, 0.34, 1], [-11, -7, -1.5, -1.5]);
  const cardScale = useTransform(scrollYProgress, [0, 0.16, 0.32, 1], [0.86, 0.92, 1, 1]);
  const auraOpacity = useTransform(scrollYProgress, [0, 0.18, 0.34, 1], [0.16, 0.34, 0.42, 0.28]);
  const auraScale = useTransform(scrollYProgress, [0, 0.2, 0.34, 1], [0.82, 0.94, 1.08, 1]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setActiveIndex(clampStep(value));
  });

  return (
    <section ref={ref} className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
      <div className="mb-12 max-w-4xl">
        <p className="accent-text text-sm font-semibold uppercase tracking-[0.3em]">
          Recorrido inmersivo
        </p>
        <h2 className="theme-heading mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
          Una card protagonista que se mueve contigo mientras la home resume toda la marca.
        </h2>
        <p className="theme-muted mt-6 max-w-3xl text-lg leading-8">
          La pieza visual entra como una carta premium, se desplaza de derecha a izquierda y revela cada etapa clave del negocio mientras el usuario avanza.
        </p>
      </div>

      <div className="hidden xl:block">
        <div className="h-[230vh] 2xl:h-[210vh]">
          <div className="sticky top-24 grid min-h-[78vh] grid-cols-[1.02fr_0.98fr] items-center gap-8 overflow-hidden 2xl:gap-10">
            <div className="relative min-h-[640px] 2xl:min-h-[720px]">
              <motion.div
                className="absolute left-6 top-16 h-[420px] w-[420px] rounded-full blur-3xl 2xl:h-[520px] 2xl:w-[520px]"
                style={{
                  opacity: auraOpacity,
                  scale: auraScale,
                  backgroundColor: "rgb(var(--accent-rgb) / 0.34)",
                }}
              />

              <motion.div
                style={{ x: cardX, y: cardY, rotate: cardRotate, scale: cardScale }}
                className="absolute left-0 top-1/2 w-full max-w-[490px] -translate-y-1/2 2xl:max-w-[560px]"
              >
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-5 shadow-[0_34px_90px_rgba(0,0,0,0.42)] backdrop-blur-2xl">
                  <div
                    className="absolute inset-x-0 top-0 h-px"
                    style={{ background: "linear-gradient(to right, transparent, rgb(var(--accent-rgb) / 0.8), transparent)" }}
                  />

                  <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#171717]">
                    <Image
                      src="/hero-architecture.svg"
                      alt="Arquitectura moderna corporativa"
                      width={1600}
                      height={1200}
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.22)_45%,rgba(0,0,0,0.72))]" />

                    <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-xl">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/55">
                        Arquitectura moderna corporativa
                      </p>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/10 bg-black/45 p-5 backdrop-blur-2xl">
                      <p className="accent-text text-[10px] font-semibold uppercase tracking-[0.3em]">
                        {sections[activeIndex].eyebrow}
                      </p>
                      <h3 className="mt-3 text-[1.9rem] font-semibold tracking-[-0.04em] text-white 2xl:text-3xl">
                        {sections[activeIndex].title}
                      </h3>
                      <p className="mt-3 max-w-md text-sm leading-6 text-white/68">
                        {sections[activeIndex].description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-5">
                      <p className="accent-text text-xs uppercase tracking-[0.28em]">
                        Valor percibido
                      </p>
                      <p className="mt-3 text-[1.85rem] font-semibold tracking-[-0.05em] text-white 2xl:text-3xl">
                        {sections[activeIndex].metric}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/65">
                        Dirección clara para proteger patrimonio y elevar confianza.
                      </p>
                    </div>

                    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5">
                      <p className="accent-text text-xs uppercase tracking-[0.28em]">
                        Resumen activo
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {sections[activeIndex].chips.map((chip) => (
                          <span
                            key={chip}
                            className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-[11px] uppercase tracking-[0.24em] text-white/75"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="relative">
              <div className="space-y-4">
                {sections.map((section, index) => (
                  <motion.article
                    key={section.eyebrow}
                    animate={{
                      opacity: activeIndex === index ? 1 : 0.42,
                      x: activeIndex === index ? 0 : activeIndex > index ? 18 : 72,
                      y: activeIndex === index ? 0 : activeIndex > index ? -6 : 10,
                      scale: activeIndex === index ? 1 : 0.965,
                    }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="theme-surface rounded-[1.75rem] border p-6 backdrop-blur-xl"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="accent-text text-xs uppercase tracking-[0.28em]">
                          0{index + 1} {section.eyebrow}
                        </p>
                        <h3 className="theme-heading mt-4 text-[1.65rem] font-semibold tracking-[-0.04em] 2xl:text-2xl">
                          {section.title}
                        </h3>
                      </div>
                      <div
                        className="h-3 w-3 shrink-0 rounded-full"
                        style={{ backgroundColor: activeIndex === index ? "var(--accent)" : "rgb(255 255 255 / 0.16)" }}
                      />
                    </div>

                    <p className="theme-muted mt-4 text-base leading-7">
                      {section.description}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      {section.chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-[11px] uppercase tracking-[0.24em] theme-muted"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6">
                      <TrackedLink
                        href={section.href}
                        className="accent-link inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white"
                        style={{ borderColor: "rgb(var(--accent-rgb) / 0.18)" }}
                        eventName={section.eventName}
                        eventSection="home_story"
                      >
                        Explorar ruta
                      </TrackedLink>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:hidden">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.32)] backdrop-blur-2xl">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#171717]">
            <Image
              src="/hero-architecture.svg"
              alt="Arquitectura moderna corporativa"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {sections.map((section, index) => (
          <div key={section.eyebrow} className="theme-surface rounded-[1.75rem] border p-6 backdrop-blur-xl">
            <p className="accent-text text-xs uppercase tracking-[0.28em]">
              0{index + 1} {section.eyebrow}
            </p>
            <h3 className="theme-heading mt-4 text-2xl font-semibold tracking-[-0.04em]">
              {section.title}
            </h3>
            <p className="theme-muted mt-4 text-base leading-7">
              {section.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {section.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-[11px] uppercase tracking-[0.24em] theme-muted"
                >
                  {chip}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <TrackedLink
                href={section.href}
                className="accent-link inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white sm:w-auto"
                style={{ borderColor: "rgb(var(--accent-rgb) / 0.18)" }}
                eventName={section.eventName}
                eventSection="home_story_mobile"
              >
                Explorar ruta
              </TrackedLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
