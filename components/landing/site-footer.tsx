import Image from "next/image";

import logo from "@/Pokecut_1778044080070.png";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/experiencia", label: "Experiencia" },
  { href: "/insights", label: "Insights" },
  { href: "/casos-de-exito", label: "Casos" },
  { href: "/contacto#formulario", label: "Contacto" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:px-12">
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-2 backdrop-blur-xl">
              <Image
                src={logo}
                alt="Logo Y.V. Group"
                className="h-11 w-11 object-contain"
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
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-zinc-400">
            Administracion de propiedad horizontal, bienes raices, inversiones y
            avaluos con enfoque premium, confianza institucional y vision de crecimiento.
          </p>
        </div>

        <div>
          <p className="accent-text text-xs font-semibold uppercase tracking-[0.3em]">
            Navegacion
          </p>
          <div className="mt-5 grid gap-3 text-sm text-zinc-400">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="accent-text text-xs font-semibold uppercase tracking-[0.3em]">
            Contacto
          </p>
          <div className="mt-5 grid gap-3 text-sm text-zinc-400">
            <a href={siteConfig.phoneHref} className="transition hover:text-white">
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
              {siteConfig.email}
            </a>
            <p>{siteConfig.location}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-zinc-500 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <p>Y.V. Group | Diseno premium responsive listo para despliegue en Vercel.</p>
          <p>Preparada para SEO, metricas, publicidad y conversion.</p>
        </div>
      </div>
    </footer>
  );
}
