'use client'

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

import { ScrollReveal } from "@/components/landing/scroll-reveal";

const galleryItems = [
  {
    title: "Arquitectura, orden y presencia",
    description:
      "Composicion visual pensada para transmitir una marca sobria, moderna y confiable.",
    accent: "from-orange-500/35 via-[#1b1b1b] to-[#090909]",
    height: "min-h-[420px]",
  },
  {
    title: "Gestion con criterio premium",
    description:
      "El lenguaje visual comunica control, sofisticacion y direccion estrategica.",
    accent: "from-white/10 via-[#141414] to-[#0a0a0a]",
    height: "min-h-[300px]",
  },
  {
    title: "Detalle que hace ver la marca cara",
    description:
      "Tarjetas editoriales listas para reemplazarse luego por fotos reales del negocio.",
    accent: "from-orange-300/20 via-[#181818] to-[#090909]",
    height: "min-h-[340px]",
  },
];

function GalleryCard({
  title,
  description,
  accent,
  height,
  progress,
  offset,
}: {
  title: string;
  description: string;
  accent: string;
  height: string;
  progress: MotionValue<number>;
  offset: [number, number];
}) {
  const y = useTransform(progress, [0, 1], offset);

  return (
    <motion.article
      style={{ y }}
      whileHover={{ y: offset[0] - 10, scale: 1.01 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${accent} p-6 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl ${height}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_30%)] opacity-70" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/80 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="relative flex h-full flex-col justify-between gap-8">
        <div className="flex items-start justify-between gap-4">
          <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-orange-200/80">
            Editorial
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

export function EditorialGallery() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={ref} className="mx-auto w-full max-w-7xl px-6 py-28 sm:px-10 lg:px-12">
      <ScrollReveal className="mb-12 flex max-w-3xl flex-col gap-5">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          Galeria editorial
        </p>
        <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
          Una capa visual tipo revista premium para que la marca se sienta mas exclusiva.
        </h2>
        <p className="text-lg leading-8 text-zinc-300">
          Esta seccion aporta lenguaje visual de lujo y queda lista para reemplazar
          cada panel con fotografias reales mas adelante, sin cambiar la estructura.
        </p>
      </ScrollReveal>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <GalleryCard {...galleryItems[0]} progress={scrollYProgress} offset={[40, -40]} />

        <div className="grid gap-6">
          <GalleryCard {...galleryItems[1]} progress={scrollYProgress} offset={[22, -24]} />
          <GalleryCard {...galleryItems[2]} progress={scrollYProgress} offset={[54, -16]} />
        </div>
      </div>
    </section>
  );
}
