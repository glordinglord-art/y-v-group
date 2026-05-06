'use client'

import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const steps = [
  {
    eyebrow: "Diagnostico",
    title: "Leemos el activo y detectamos prioridades reales.",
    description:
      "El primer paso es entender el estado financiero, documental y operativo para tomar decisiones con mas claridad.",
    chips: ["Revision inicial", "Mapeo de riesgo", "Prioridades criticas"],
    primaryMetricLabel: "Estado operativo",
    primaryMetricValue: "Ordenado",
    secondaryMetricLabel: "Punto de partida",
    secondaryMetricValue: "360°",
    panelTitle: "Vista de diagnostico",
  },
  {
    eyebrow: "Planeacion",
    title: "Convertimos la administracion en una hoja de ruta clara.",
    description:
      "Se estructura un plan de accion que alinea finanzas, cumplimiento, convivencia y valorizacion para dar continuidad.",
    chips: ["Hoja de ruta", "Control financiero", "Ley 675"],
    primaryMetricLabel: "Ruta definida",
    primaryMetricValue: "Activa",
    secondaryMetricLabel: "Cumplimiento",
    secondaryMetricValue: "Ley 675",
    panelTitle: "Mapa estrategico",
  },
  {
    eyebrow: "Ejecucion",
    title: "El seguimiento continuo genera confianza visible.",
    description:
      "Cada proceso se ejecuta con trazabilidad, reportes comprensibles y una lectura mas madura de la operacion diaria.",
    chips: ["Seguimiento", "Reportes", "Transparencia"],
    primaryMetricLabel: "Trazabilidad",
    primaryMetricValue: "100%",
    secondaryMetricLabel: "Decision",
    secondaryMetricValue: "Con data",
    panelTitle: "Panel de seguimiento",
  },
  {
    eyebrow: "Valorizacion",
    title: "La gestion premium se traduce en valor y reputacion.",
    description:
      "Una buena administracion protege patrimonio, mejora percepcion de marca y deja mejor preparada la copropiedad para el futuro.",
    chips: ["Valorizacion", "Convivencia", "Sostenibilidad"],
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
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
              Experiencia inmersiva
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Un mockup premium que cuenta la historia mientras el usuario baja.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              La idea es que la pagina no solo se vea linda: que se sienta viva,
              con una narrativa visual que haga ver la marca mas sofisticada y memorable.
            </p>

            <div className="mt-10 grid gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  animate={{ opacity: activeIndex === index ? 1 : 0.45, x: activeIndex === index ? 0 : -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-orange-300">
                    0{index + 1} {step.eyebrow}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">{step.title}</p>
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
                <div className="absolute inset-0 rounded-[2.75rem] bg-orange-500/20 blur-3xl" />
                <div className="relative rounded-[2.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(14,14,14,0.98))] p-4 shadow-[0_40px_100px_rgba(0,0,0,0.48)] backdrop-blur-2xl">
                  <div className="rounded-[2.1rem] border border-white/10 bg-[#0f0f10] p-4">
                    <div className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-5 py-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-orange-300">
                          Y.V. Group Interface
                        </p>
                        <motion.p
                          key={`title-${steps[0].panelTitle}`}
                          className="mt-2 text-lg font-semibold text-white"
                        >
                          Panel de administracion premium
                        </motion.p>
                      </div>
                      <div className="flex gap-2">
                        <span className="h-3 w-3 rounded-full bg-orange-400" />
                        <span className="h-3 w-3 rounded-full bg-white/30" />
                        <span className="h-3 w-3 rounded-full bg-white/15" />
                      </div>
                    </div>

                    <div className="mt-4 grid gap-4 lg:grid-cols-[0.62fr_0.38fr]">
                      <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(160deg,rgba(249,115,22,0.16),rgba(20,20,20,0.96)_56%,rgba(10,10,10,1))] p-6">
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
                                <p className="text-xs uppercase tracking-[0.28em] text-orange-200/80">
                                  {step.eyebrow}
                                </p>
                                <h3 className="mt-3 max-w-sm text-3xl font-semibold tracking-[-0.04em] text-white">
                                  {step.title}
                                </h3>
                              </div>
                              <div className="hidden h-28 w-28 rounded-full border border-orange-300/30 bg-orange-500/10 lg:block" />
                            </div>

                            <p className="mt-5 max-w-lg text-base leading-7 text-zinc-300">
                              {step.description}
                            </p>

                            <div className="mt-8 grid gap-3 sm:grid-cols-3">
                              {step.chips.map((item) => (
                                <div
                                  key={item}
                                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm font-medium text-zinc-200"
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
                            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5">
                              <p className="text-xs uppercase tracking-[0.28em] text-orange-300">
                                {step.primaryMetricLabel}
                              </p>
                              <p className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white">
                                {step.primaryMetricValue}
                              </p>
                              <p className="mt-2 text-sm text-zinc-400">{step.panelTitle}</p>
                            </div>
                            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5">
                              <p className="text-xs uppercase tracking-[0.28em] text-orange-300">
                                {step.secondaryMetricLabel}
                              </p>
                              <p className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white">
                                {step.secondaryMetricValue}
                              </p>
                              <p className="mt-2 text-sm text-zinc-400">Visibilidad premium</p>
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
