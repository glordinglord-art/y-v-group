'use client'

import { TrackedLink } from "@/components/landing/tracked-link";
import { Card, CardSwap } from "@/components/react-bits/card-swap";

const sections = [
  {
    eyebrow: "Nosotros",
    title: "Yiseth Vélez lidera una firma constituida desde 2012.",
    description:
      "Administración de propiedad horizontal con criterio legal, financiero y humano para proteger patrimonio y convivencia.",
    metric: "14+ años",
    chips: ["Ley 675", "Confianza", "Dirección"],
    href: "/nosotros",
    eventName: "home_story_nosotros",
  },
  {
    eyebrow: "Servicios",
    title: "Gestión integral para copropiedades e inversionistas.",
    description:
      "Gestión financiera, contabilidad, facturación, asesoría legal, mantenimiento locativo y administración eficiente.",
    metric: "Portafolio integral",
    chips: ["Finanzas", "Legal", "Operación"],
    href: "/servicios",
    eventName: "home_story_servicios",
  },
  {
    eyebrow: "Experiencia",
    title: "Trayectoria real en parcelaciones, condominios y unidades mixtas.",
    description:
      "Más de 2.542 familias impactadas y 7.222 millones de presupuesto administrado en proyectos de Antioquia.",
    metric: "2.542 familias",
    chips: ["Parcelaciones", "Condominios", "Mixtos"],
    href: "/experiencia",
    eventName: "home_story_experiencia",
  },
  {
    eyebrow: "Contacto",
    title: "Una ruta clara para atender tu copropiedad.",
    description:
      "Formulario, WhatsApp, teléfono y correo para iniciar una conversación profesional sobre administración o inversión.",
    metric: "Contacto directo",
    chips: ["WhatsApp", "Formulario", "Asesoría"],
    href: "/contacto",
    eventName: "home_story_contacto",
  },
];

export function HomeStoryPanel() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
      <div className="grid gap-12 xl:grid-cols-[0.88fr_1.12fr] xl:items-center">
        <div className="max-w-2xl">
          <p className="accent-text text-sm font-semibold uppercase tracking-[0.3em]">
            Enfocados en atender su copropiedad
          </p>
          <h2 className="theme-heading mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
            Administración integral para proteger el valor, la convivencia y la operación diaria.
          </h2>
          <p className="theme-muted mt-6 text-lg leading-8">
            Y.V. Group acompaña copropiedades con gestión financiera, contabilidad, facturación, asesoría legal, mantenimiento locativo y seguimiento constante para generar seguridad, tranquilidad y bienestar.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="theme-surface rounded-[1.5rem] border p-5 backdrop-blur-xl">
              <p className="accent-text text-xs uppercase tracking-[0.28em]">Trayectoria</p>
              <p className="theme-heading mt-3 text-2xl font-semibold">14 años de experiencia</p>
              <p className="theme-muted mt-2 text-sm leading-6">
                Administración residencial, mixta, comercial, parcelaciones y condominios.
              </p>
            </div>
            <div className="theme-surface rounded-[1.5rem] border p-5 backdrop-blur-xl">
              <p className="accent-text text-xs uppercase tracking-[0.28em]">Respaldo</p>
              <p className="theme-heading mt-3 text-2xl font-semibold">2.542 familias</p>
              <p className="theme-muted mt-2 text-sm leading-6">
                Atención personalizada y optimización de recursos para cuidar patrimonio.
              </p>
            </div>
          </div>
        </div>

        <div className="relative hidden min-h-[650px] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(12,12,12,0.9))] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.32)] backdrop-blur-2xl xl:block">
          <div
            className="absolute -right-24 top-10 h-72 w-72 rounded-full blur-3xl"
            style={{ backgroundColor: "rgb(var(--accent-rgb) / 0.22)" }}
          />
          <div className="absolute left-6 top-6 z-10 max-w-sm">
            <p className="accent-text text-xs font-semibold uppercase tracking-[0.3em]">
              Áreas clave
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
              La información se mueve sola, limpia y sin ruido.
            </h3>
          </div>

          <div className="absolute bottom-12 right-8 h-[430px] w-[min(86vw,540px)]">
            <CardSwap
              width="min(82vw, 520px)"
              height={390}
              cardDistance={52}
              verticalDistance={58}
              delay={4300}
              pauseOnHover
              skewAmount={4}
            >
              {sections.map((section, index) => (
                <Card
                  key={section.eyebrow}
                  className="border border-white/10 bg-[linear-gradient(145deg,rgba(20,20,20,0.98),rgba(8,8,8,0.96))] p-7 text-white shadow-[0_26px_80px_rgba(0,0,0,0.34)]"
                >
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <p className="accent-text text-xs font-semibold uppercase tracking-[0.3em]">
                        0{index + 1} {section.eyebrow}
                      </p>
                      <h4 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white">
                        {section.title}
                      </h4>
                      <p className="mt-4 max-w-md text-base leading-7 text-zinc-300">
                        {section.description}
                      </p>
                    </div>

                    <div>
                      <p className="text-4xl font-semibold tracking-[-0.05em] text-white">
                        {section.metric}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {section.chips.map((chip) => (
                          <span
                            key={chip}
                            className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-[11px] uppercase tracking-[0.24em] text-white/70"
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
                          eventSection="home_card_swap_clean"
                        >
                          Explorar ruta
                        </TrackedLink>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>

        <div className="grid gap-4 xl:hidden">
          {sections.map((section, index) => (
            <div key={section.eyebrow} className="theme-surface rounded-[1.5rem] border p-5 backdrop-blur-xl">
              <p className="accent-text text-xs uppercase tracking-[0.28em]">
                0{index + 1} {section.eyebrow}
              </p>
              <h3 className="theme-heading mt-3 text-2xl font-semibold tracking-[-0.04em]">
                {section.title}
              </h3>
              <p className="theme-muted mt-3 text-sm leading-6">{section.description}</p>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
