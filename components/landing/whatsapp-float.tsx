'use client'

import { motion } from "framer-motion";

import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/lib/site";

const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

export function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackEvent("click_whatsapp_float", { section: "floating_cta" })}
      initial={{ opacity: 0, y: 24, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full border border-emerald-400/30 bg-[#0d1b16]/90 px-4 py-3 text-white shadow-[0_18px_45px_rgba(16,185,129,0.28)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-500/20"
      aria-label="Contactar por WhatsApp"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 text-lg font-bold text-white">
        W
      </span>
      <span className="hidden pr-1 sm:block">
        <span className="block text-[11px] uppercase tracking-[0.28em] text-emerald-200/75">
          WhatsApp
        </span>
        <span className="block text-sm font-semibold">Habla con Y.V. Group</span>
      </span>
    </motion.a>
  );
}
