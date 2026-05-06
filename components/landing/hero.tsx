'use client'

import Image from "next/image";
import { motion } from "framer-motion";

import { brandContent } from "@/content/brand-content";
import { SiteHeader } from "@/components/landing/site-header";
import { TrackedLink } from "@/components/landing/tracked-link";

const badges = [
  "Bienes raices premium",
  "Inversiones con criterio",
  "Avaluos y administracion integral",
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.28),_transparent_30%),linear-gradient(135deg,_rgba(10,10,10,0.9),_rgba(24,24,27,0.76)_40%,_rgba(10,10,10,0.95))]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="absolute inset-0 bg-black/25" />

      <SiteHeader page="home" />

      <div className="relative mx-auto flex min-h-[calc(100vh-104px)] w-full max-w-7xl flex-col justify-between px-6 py-8 sm:px-10 lg:px-12">

        <div className="grid items-end gap-16 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-6 flex flex-wrap gap-3"
            >
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white/70 backdrop-blur-xl"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
            >
              {brandContent.company.tagline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.72] sm:text-xl"
            >
              {brandContent.company.shortDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <TrackedLink
                href="/servicios"
                className="group inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-[0_18px_40px_rgba(249,115,22,0.35)]"
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
                className="inline-flex items-center justify-center rounded-full border border-white/[0.15] bg-white/[0.06] px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-xl transition hover:border-white/30 hover:bg-white/10"
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
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/80 to-transparent" />
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
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-orange-300">
                  Liderazgo
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">
                  Yiseth Velez
                </p>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Administracion de propiedad horizontal con enfoque legal,
                  humano y financiero.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-orange-300">
                  Cobertura
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">
                  Antioquia
                </p>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Copropiedades, proyectos residenciales y activos de inversion
                  en expansion.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
