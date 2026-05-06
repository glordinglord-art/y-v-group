'use client'

import { motion } from "framer-motion";
import { useState } from "react";

import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/lib/site";

const allies = ["Alcaldia de El Retiro", "Cornare", "Alcaldia de Envigado"];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    trackEvent("lead_form_submit", { section: "contacto" });
    setSubmitted(true);
  };

  return (
    <section
      id="contacto"
      className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-24 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="rounded-[2rem] border border-white/10 bg-[#111111] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.28)]"
      >
        <p className="accent-text text-sm font-semibold uppercase tracking-[0.3em]">
          Contacto
        </p>
        <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white">
          Hablemos de tu copropiedad o de tu próxima inversión.
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-300">
          Estructura pensada para integrarse fácilmente con EmailJS o Formspree
          sin depender de backend propio.
        </p>

        <div className="mt-10 grid gap-6 text-zinc-200">
          <div className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.04] p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Teléfono
            </p>
            <a
              href={siteConfig.phoneHref}
              onClick={() => trackEvent("click_phone", { section: "contacto" })}
              className="accent-link mt-3 block text-2xl font-semibold text-white"
            >
              {siteConfig.phone.replace("+57 ", "")}
            </a>
          </div>
          <div className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.04] p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Correo
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              onClick={() => trackEvent("click_email", { section: "contacto" })}
              className="accent-link mt-3 block text-xl font-semibold text-white"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            Aliados
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {allies.map((ally) => (
              <div
                key={ally}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-center text-sm font-medium text-zinc-400 grayscale"
              >
                {ally}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
        action={siteConfig.contactFormAction}
        method="POST"
        onSubmit={handleSubmit}
        className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-2xl"
      >
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 rounded-[1.5rem] border border-emerald-400/20 bg-emerald-500/[0.08] p-5"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
              Mensaje enviado
            </p>
            <p className="mt-3 text-base leading-7 text-zinc-200">
              Gracias. Tu solicitud fue enviada y pronto recibiras seguimiento.
            </p>
          </motion.div>
        ) : null}

        <div className="grid gap-6">
          <label className="grid gap-3">
            <span className="text-sm font-medium text-zinc-200">Nombre</span>
            <input
              type="text"
              name="name"
              required
              placeholder="Tu nombre"
              className="accent-focus rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none placeholder:text-zinc-500"
            />
          </label>
          <label className="grid gap-3">
            <span className="text-sm font-medium text-zinc-200">Correo</span>
            <input
              type="email"
              name="email"
              required
              placeholder="tu@correo.com"
              className="accent-focus rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none placeholder:text-zinc-500"
            />
          </label>
          <label className="grid gap-3">
            <span className="text-sm font-medium text-zinc-200">Teléfono</span>
            <input
              type="tel"
              name="phone"
              placeholder="Tu teléfono"
              className="accent-focus rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none placeholder:text-zinc-500"
            />
          </label>
          <label className="grid gap-3">
            <span className="text-sm font-medium text-zinc-200">Inter\u00e9s principal</span>
            <select
              name="interest"
              defaultValue=""
              className="accent-focus rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none"
            >
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="administracion">Administración de propiedad horizontal</option>
              <option value="avaluos">Avaluós</option>
              <option value="asesoria">Asesoría inmobiliaria</option>
              <option value="inversiones">Inversión inmobiliaria</option>
            </select>
          </label>
          <label className="grid gap-3">
            <span className="text-sm font-medium text-zinc-200">Mensaje</span>
            <textarea
              name="message"
              rows={6}
              required
              placeholder="Cuantame que necesitas y te contactaremos pronto."
              className="accent-focus rounded-[1.5rem] border border-white/10 bg-black/20 px-5 py-4 text-white outline-none placeholder:text-zinc-500"
            />
          </label>
          <button
            type="submit"
            className="accent-bg accent-shadow inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition duration-300 hover:-translate-y-0.5"
          >
            Enviar mensaje
          </button>
          <p className="text-sm leading-6 text-zinc-400">
            Configura `NEXT_PUBLIC_CONTACT_FORM_ACTION` para conectar Formspree o
            el servicio que prefieras sin cambiar este componente.
          </p>
        </div>
      </motion.form>
    </section>
  );
}
