'use client'

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import logo from "@/Pokecut_1778044080070.png";
import { TrackedLink } from "@/components/landing/tracked-link";

const homeLinks = [
  { href: "/", label: "Inicio", eventName: "nav_home" },
  { href: "/nosotros", label: "Nosotros", eventName: "nav_about" },
  { href: "/servicios", label: "Servicios", eventName: "nav_services" },
  { href: "/experiencia", label: "Experiencia", eventName: "nav_experience" },
  { href: "/insights", label: "Insights", eventName: "nav_insights" },
  { href: "/casos-de-exito", label: "Casos", eventName: "nav_cases" },
  { href: "/contacto", label: "Contacto", eventName: "nav_contact" },
];

const contactLinks = [
  { href: "/", label: "Inicio", eventName: "nav_home_contact" },
  { href: "/nosotros", label: "Nosotros", eventName: "nav_about_contact" },
  { href: "/servicios", label: "Servicios", eventName: "nav_services_contact" },
  { href: "/experiencia", label: "Experiencia", eventName: "nav_experience_contact" },
  { href: "/insights", label: "Insights", eventName: "nav_insights_contact" },
  { href: "/casos-de-exito", label: "Casos", eventName: "nav_cases_contact" },
  { href: "/contacto#formulario", label: "Contacto", eventName: "nav_contact_contact" },
];

type SiteHeaderProps = {
  page: "home" | "contact";
};

export function SiteHeader({ page }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const links = page === "home" ? homeLinks : contactLinks;
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(scrollY, [0, 120], ["rgba(0,0,0,0.28)", "rgba(8,8,8,0.82)"]);
  const borderColor = useTransform(scrollY, [0, 120], ["rgba(255,255,255,0.10)", "rgba(249,115,22,0.22)"]);
  const boxShadow = useTransform(scrollY, [0, 120], ["0 0 0 rgba(0,0,0,0)", "0 24px 60px rgba(0,0,0,0.28)"]);

  return (
    <div className="sticky top-0 z-40 mx-auto w-full max-w-7xl px-6 pt-6 sm:px-10 lg:px-12">
      <motion.div
        style={{ backgroundColor, borderColor, boxShadow }}
        className="rounded-[2rem] border px-4 py-4 backdrop-blur-2xl sm:px-5"
      >
        <div className="flex items-center justify-between gap-4">
          <TrackedLink
            href="/"
            className="flex items-center gap-3"
            eventName="nav_logo"
            eventSection="header"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-2 backdrop-blur-xl">
              <Image
                src={logo}
                alt="Logo Y.V. Group"
                className="h-11 w-11 object-contain"
                priority
              />
            </div>
            <div>
              <p className="accent-text text-xs font-semibold uppercase tracking-[0.35em]">
                Y.V. Group
              </p>
              <p className="text-sm text-white/70">
                Real Estate, Investments & Appraisals
              </p>
            </div>
          </TrackedLink>

          <nav className="hidden items-center gap-2 lg:flex">
            {links.map((link) => (
              <TrackedLink
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/75 transition hover:bg-white/[0.06] hover:text-white"
                eventName={link.eventName}
                eventSection="header"
              >
                {link.label}
              </TrackedLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <TrackedLink
              href="/contacto#formulario"
              className="accent-bg accent-shadow rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition duration-300 hover:-translate-y-0.5"
              eventName="nav_cta_contact"
              eventSection="header"
            >
              Agendar
            </TrackedLink>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            <span className="text-lg">{open ? "x" : "+"}</span>
          </button>
        </div>

        {open ? (
          <div className="mt-4 grid gap-2 border-t border-white/10 pt-4 lg:hidden">
            {links.map((link) => (
              <TrackedLink
                key={link.label}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/[0.06] hover:text-white"
                eventName={link.eventName}
                eventSection="header_mobile"
              >
                {link.label}
              </TrackedLink>
            ))}
            <TrackedLink
              href="/contacto#formulario"
              className="accent-bg mt-2 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition duration-300"
              eventName="nav_cta_contact_mobile"
              eventSection="header_mobile"
            >
              Agendar
            </TrackedLink>
          </div>
        ) : null}
      </motion.div>
    </div>
  );
}
