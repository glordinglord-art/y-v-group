'use client'

import Image from "next/image";
import { motion } from "framer-motion";

import { brandContent } from "@/content/brand-content";
import { SiteHeader } from "@/components/landing/site-header";
import { TrackedLink } from "@/components/landing/tracked-link";
import { LightRays } from "@/components/react-bits/light-rays";
import { siteConfig } from "@/lib/site";

const heroMetrics = [
  { value: "14+", label: "años de experiencia" },
  { value: "360°", label: "visión legal y financiera" },
  { value: "Directo", label: "acompañamiento ejecutivo" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top right, rgb(var(--accent-rgb) / 0.28), transparent 30%), linear-gradient(135deg, rgba(10,10,10,0.9), rgba(24,24,27,0.76) 40%, rgba(10,10,10,0.95))",
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 opacity-70 mix-blend-screen">
        <LightRays
          raysOrigin="top-center"
          raysColor="#F97316"
          raysSpeed={0.7}
          lightSpread={0.62}
          rayLength={2.4}
          followMouse
          mouseInfluence={0.08}
          noiseAmount={0.04}
          distortion={0.035}
          fadeDistance={1.05}
          saturation={1}
        />
      </div>

      <SiteHeader page="home" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-center px-6 pb-8 pt-10 sm:px-10 sm:pt-14 md:pb-10 lg:min-h-[calc(100svh-104px)] lg:px-12 lg:pb-12 lg:pt-16 xl:pt-20">

        <div className="grid items-center gap-8 py-6 md:gap-10 md:py-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:py-10 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mx-auto mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70 backdrop-blur-xl lg:mx-0"
            >
              Administración de propiedad horizontal desde 2012
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="mx-auto max-w-4xl text-[clamp(2.25rem,9vw,4.8rem)] font-semibold tracking-[-0.04em] text-white lg:mx-0 lg:text-6xl xl:text-7xl"
            >
              {brandContent.company.tagline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/[0.72] sm:mt-5 sm:text-lg sm:leading-8 lg:mx-0 lg:text-lg xl:text-xl"
            >
              {brandContent.company.shortDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.26, ease: "easeOut" }}
              className="mx-auto mt-5 grid max-w-2xl grid-cols-3 gap-2 sm:mt-7 sm:gap-3 lg:mx-0 xl:grid-cols-3"
            >
              {heroMetrics.map((item) => (
                <div
                  key={item.label}
                  className="min-w-0 rounded-[1.2rem] border border-white/10 bg-white/[0.06] px-2.5 py-3 backdrop-blur-xl sm:rounded-[1.5rem] sm:px-5 sm:py-4"
                >
                  <p className="text-xl font-semibold tracking-[-0.05em] text-white sm:text-2xl">
                    {item.value}
                  </p>
                  <p className="mt-2 min-w-0 break-words text-[8.5px] uppercase leading-4 tracking-[0.08em] text-white/55 sm:text-xs sm:tracking-[0.24em]">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="mt-6 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4 lg:justify-start"
            >
              <TrackedLink
                href="/servicios"
                className="accent-bg accent-shadow group inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:-translate-y-0.5 sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.24em]"
                eventName="cta_services_hero"
                eventSection="hero"
              >
                Conoce nuestros servicios
                <span className="ml-3 transition duration-300 group-hover:translate-x-1">
                  {"->"}
                </span>
              </TrackedLink>
                <TrackedLink
                  href="/contacto"
                className="accent-border inline-flex w-full items-center justify-center rounded-full border border-white/[0.15] bg-white/[0.06] px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-xl transition hover:bg-white/10 sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.24em]"
                eventName="cta_contact_hero"
                eventSection="hero"
              >
                Solicitar contacto
              </TrackedLink>
            </motion.div>

          </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="relative mx-auto hidden w-full max-w-[34rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-5 md:block lg:max-w-none"
            >
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
              className="absolute left-4 right-4 top-4 z-10 rounded-[1.25rem] border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-xl sm:left-auto sm:right-7 sm:top-7 sm:rounded-full"
            >
              <p className="accent-text text-[10px] font-semibold uppercase tracking-[0.3em]">
                Contacto directo
              </p>
              <p className="mt-1 text-sm font-medium text-white/85">{siteConfig.phone}</p>
            </motion.div>

            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{ background: "linear-gradient(to right, transparent, rgb(var(--accent-rgb) / 0.8), transparent)" }}
            />
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#171717]">
              <Image
                src="/hero-architecture.svg"
                alt="Arquitectura moderna corporativa"
                width={1600}
                height={1200}
                priority
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-4 hidden grid-cols-2 gap-3 sm:mt-5 sm:gap-4 md:grid">
              <div className="rounded-[1.3rem] border border-white/10 bg-black/30 p-4 sm:rounded-[1.5rem] sm:p-5">
                <p className="accent-text text-xs uppercase tracking-[0.28em]">
                  Liderazgo
                </p>
                <p className="mt-3 text-xl font-semibold text-white sm:text-2xl">
                  Yiseth Vélez
                </p>
                <p className="mt-2 text-xs leading-5 text-white/65 sm:text-sm sm:leading-6">
                  Administración de propiedad horizontal con enfoque legal,
                  humano y financiero.
                </p>
              </div>
              <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.06] p-4 sm:rounded-[1.5rem] sm:p-5">
                <p className="accent-text text-xs uppercase tracking-[0.28em]">
                  Cobertura
                </p>
                <p className="mt-3 text-xl font-semibold text-white sm:text-2xl">
                  Antioquia
                </p>
                <p className="mt-2 text-xs leading-5 text-white/65 sm:text-sm sm:leading-6">
                  Copropiedades, proyectos residenciales y activos de inversión
                  en expansión.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
