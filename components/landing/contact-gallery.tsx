'use client'

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

import { ScrollReveal } from "@/components/landing/scroll-reveal";

const pieces = [
  {
    title: "Portafolio con presencia premium",
    description:
      "Una composicion para mostrar proyectos, fotos reales y casos de exito sin perder elegancia.",
    gradient: "from-orange-500/30 via-[#1b1b1b] to-[#090909]",
    height: "min-h-[420px]",
  },
  {
    title: "Casos que inspiran confianza",
    description:
      "Ideal para luego reemplazar por imagenes reales, recorridos o piezas editoriales del negocio.",
    gradient: "from-white/10 via-[#171717] to-[#0b0b0b]",
    height: "min-h-[300px]",
  },
  {
    title: "Visuales listos para vender mejor",
    description:
      "Ayuda a que la pagina de contacto no sea solo funcional, sino memorable y mas convincente.",
    gradient: "from-orange-300/20 via-[#181818] to-[#090909]",
    height: "min-h-[340px]",
  },
];

function Piece({
  title,
  description,
  gradient,
  height,
  y,
}: {
  title: string;
  description: string;
  gradient: string;
  height: string;
  y: MotionValue<number>;
}) {
  return (
    <motion.article
      style={{ y }}
      whileHover={{ y: -10, scale: 1.01 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${gradient} p-6 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl ${height}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_30%)] opacity-70" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/80 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="relative flex h-full flex-col justify-between gap-8">
        <div className="flex items-start justify-between gap-4">
          <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-orange-200/80">
            Contacto visual
          </span>
          <div className="hidden h-20 w-20 rounded-full border border-white/10 bg-white/[0.04] sm:block" />
        </div>
        <div>
          <h3 className="max-w-sm text-3xl font-semibold tracking-[-0.04em] text-white">
            {title}
          </h3>
          <p className="mt-4 max-w-md text-base leading-7 text-zinc-300">{description}</p>
        </div>
      </div>
    </motion.article>
  );
}

export function ContactGallery() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [34, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [14, -18]);
  const y3 = useTransform(scrollYProgress, [0, 1], [44, -12]);

  return (
    <section ref={ref} className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
      <ScrollReveal className="mb-12 flex max-w-3xl flex-col gap-5">
        <p className="accent-text text-sm font-semibold uppercase tracking-[0.3em]">
          Galeria premium
        </p>
        <h2 className="theme-heading text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
          Una ruta de contacto que tambien entra por los ojos.
        </h2>
        <p className="theme-muted text-lg leading-8">
          Esta capa editorial vuelve la pagina de contacto mas aspiracional y lista
          para presentar fotos reales, recorridos o piezas de marca de alto nivel.
        </p>
      </ScrollReveal>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Piece {...pieces[0]} y={y1} />
        <div className="grid gap-6">
          <Piece {...pieces[1]} y={y2} />
          <Piece {...pieces[2]} y={y3} />
        </div>
      </div>
    </section>
  );
}
