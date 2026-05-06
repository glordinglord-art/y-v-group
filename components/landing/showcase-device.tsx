'use client'

import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const steps = [
  {
    eyebrow: "Diagnóstico",
    title: "Leemos el activo y detectamos prioridades reales.",
    description:
      "El primer paso es entender el estado financiero, documental y operativo para tomar decisiones con más claridad.",
    chips: ["Revisión inicial", "Mapeo de riesgo", "Prioridades críticas"],
    primaryMetricLabel: "Estado operativo",
    primaryMetricValue: "Ordenado",
    secondaryMetricLabel: "Punto de partida",
    secondaryMetricValue: "360°",
    panelTitle: "Vista de diagnóstico",
  },
  {
    eyebrow: "Planeación",
    title: "Convertimos la administración en una hoja de ruta clara.",
    description:
      "Se estructura un plan de acción que alinea finanzas, cumplimiento, convivencia y valorización para dar continuidad.",
    chips: ["Hoja de ruta", "Control financiero", "Ley 675"],
    primaryMetricLabel: "Ruta definida",
    primaryMetricValue: "Activa",
    secondaryMetricLabel: "Cumplimiento",
    secondaryMetricValue: "Ley 675",
    panelTitle: "Mapa estratégico",
  },
  {
    eyebrow: "Ejecución",
    title: "El seguimiento continuo genera confianza visible.",
    description:
      "Cada proceso se ejecuta con trazabilidad, reportes comprensibles y una lectura más madura de la operación diaria.",
    chips: ["Seguimiento", "Reportes", "Transparencia"],
    primaryMetricLabel: "Trazabilidad",
    primaryMetricValue: "100%",
    secondaryMetricLabel: "Decisión",
    secondaryMetricValue: "Con data",
    panelTitle: "Panel de seguimiento",
  },
  {
    eyebrow: "Valorización",
    title: "La gestión premium se traduce en valor y reputación.",
    description:
      "Una buena administración protege patrimonio, mejora percepción de marca y deja mejor preparada la copropiedad para el futuro.",
    chips: ["Valorización", "Convivencia", "Sostenibilidad"],
    primaryMetricLabel: "Impacto",
    primaryMetricValue: "Sostenido",
    secondaryMetricLabel: "Confianza",
    secondaryMetricValue: "Alta",
    panelTitle: "Vista de resultado",
  },
];

function clampStep(progress: number) {
  if (progress < 0.25) return 0;
  if (progress < 0.5) return 1;
  if (progress < 0.75) return 2;
  return 3;
}

export function ShowcaseDevice() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const [activeIndex, setActiveIndex] = useState(0);

  const rotateX = useTransform(scrollYProgress, [0, 1], [14, 3]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const y = useTransform(scrollYProgress, [0, 1], [20, -24]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setActiveIndex(clampStep(value));
  });

  return (
    <section ref={ref} className="relative mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:py-24">
          <div className="lg:sticky lg:top-28">
            <p className="accent-text text-sm font-semibold uppercase tracking-[0.3em]">
              Experiencia inmersiva
            </p>
            <h2 className="theme-heading mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              Un mockup premium que cuenta la historia mientras el usuario baja.
            </h2>
            <p className="theme-muted mt-6 max-w-xl text-lg leading-8">
              La idea es que la página no solo se vea linda: que se sienta viva,
              con una narrativa visual que haga ver la marca más sofisticada y memorable.
            </p>

            <div className="mt-10 grid gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  animate={{ opacity: activeIndex === index ? 1 : 0.45, x: activeIndex === index ? 0 : -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="theme-surface rounded-[1.5rem] border p-5 backdrop-blur-xl"
                >
                  <p className="accent-text text-xs uppercase tracking-[0.28em]">
                    0{index + 1} {step.eyebrow}
                  </p>
                  <p className="theme-heading mt-3 text-lg font-semibold">{step.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="h-[210vh]">
            <div className="sticky top-24 flex min-h-[80vh] items-center justify-center perspective-[2000px]">
              <motion.div
                style={{ rotateX, rotateY, y }}
                className="relative w-full max-w-[860px]"
              >
                <div
                  className="absolute inset-0 rounded-[2.75rem] blur-3xl"
                  style={{ backgroundColor: "rgb(var(--accent-rgb) / 0.2)" }}
                />
                <div className="theme-panel relative rounded-[2.75rem] border border-white/10 p-4 shadow-[0_40px_100px_rgba(0,0,0,0.48)] backdrop-blur-2xl">
                  <div className="theme-surface-strong rounded-[2.1rem] border p-4">
                    <div className="theme-surface flex items-center justify-between rounded-[1.5rem] border px-5 py-4">
                      <div>
                        <p className="accent-text text-xs uppercase tracking-[0.28em]">
                          Y.V. Group Interface
                        </p>
                        <motion.p
                          key={`title-${steps[0].panelTitle}`}
                          className="theme-heading mt-2 text-lg font-semibold"
                        >
                          Panel de administración premium
                        </motion.p>
                      </div>
                      <div className="flex gap-2">
                        <span className="accent-bg h-3 w-3 rounded-full" />
                        <span className="h-3 w-3 rounded-full bg-white/30" />
                        <span className="h-3 w-3 rounded-full bg-white/15" />
                      </div>
                    </div>

                    <div className="mt-4 grid gap-4 lg:grid-cols-[0.62fr_0.38fr]">
                      <div
                        className="theme-panel rounded-[1.75rem] border border-white/10 p-6"
                        style={{
                          background:
                            "linear-gradient(160deg, rgb(var(--accent-rgb) / 0.16), color-mix(in srgb, var(--background) 94%, black 6%) 56%, var(--background))",
                        }}
                      >
                        {steps.map((step, index) => (
                          <motion.div
                            key={step.title}
                            initial={false}
                            animate={{
                              opacity: activeIndex === index ? 1 : 0,
                              y: activeIndex === index ? 0 : 18,
                              pointerEvents: activeIndex === index ? "auto" : "none",
                            }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className={activeIndex === index ? "block" : "hidden"}
                          >
                            <div className="flex items-end justify-between gap-4">
                              <div>
                                <p className="text-xs uppercase tracking-[0.28em] text-white/70">
                                  {step.eyebrow}
                                </p>
                                <h3 className="theme-heading mt-3 max-w-sm text-3xl font-semibold tracking-[-0.04em]">
                                  {step.title}
                                </h3>
                              </div>
                              <div
                                className="hidden h-28 w-28 rounded-full border lg:block"
                                style={{
                                  borderColor: "rgb(var(--accent-rgb) / 0.3)",
                                  backgroundColor: "rgb(var(--accent-rgb) / 0.1)",
                                }}
                              />
                            </div>

                            <p className="theme-muted mt-5 max-w-lg text-base leading-7">
                              {step.description}
                            </p>

                            <div className="mt-8 grid gap-3 sm:grid-cols-3">
                              {step.chips.map((item) => (
                                <div
                                  key={item}
                                  className="theme-surface rounded-2xl border px-4 py-4 text-sm font-medium theme-heading"
                                >
                                  {item}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <div className="grid gap-4">
                        {steps.map((step, index) => (
                          <motion.div
                            key={`${step.title}-metrics`}
                            initial={false}
                            animate={{
                              opacity: activeIndex === index ? 1 : 0,
                              y: activeIndex === index ? 0 : 18,
                              pointerEvents: activeIndex === index ? "auto" : "none",
                            }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className={activeIndex === index ? "grid gap-4" : "hidden"}
                          >
                            <div className="theme-surface rounded-[1.75rem] border p-5">
                              <p className="accent-text text-xs uppercase tracking-[0.28em]">
                                {step.primaryMetricLabel}
                              </p>
                              <p className="theme-heading mt-4 text-4xl font-semibold tracking-[-0.05em]">
                                {step.primaryMetricValue}
                              </p>
                              <p className="theme-muted mt-2 text-sm">{step.panelTitle}</p>
                            </div>
                            <div className="theme-surface rounded-[1.75rem] border p-5">
                              <p className="accent-text text-xs uppercase tracking-[0.28em]">
                                {step.secondaryMetricLabel}
                              </p>
                              <p className="theme-heading mt-4 text-4xl font-semibold tracking-[-0.05em]">
                                {step.secondaryMetricValue}
                              </p>
                              <p className="theme-muted mt-2 text-sm">Visibilidad premium</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mx-auto mt-4 h-4 w-40 rounded-b-full bg-white/10 blur-[1px]" />
                </div>
                <div className="mx-auto h-5 w-[82%] rounded-b-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(140,140,140,0.04))]" />
                <div className="mx-auto h-3 w-44 rounded-b-full bg-white/10 blur-md" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
