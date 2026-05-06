'use client'

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

const stats: Stat[] = [
  { value: 14, suffix: " anos", label: "de experiencia" },
  { value: 2542, suffix: " familias", label: "impactadas" },
  { value: 7222, suffix: " millones", label: "de presupuesto administrado" },
];

function Counter({ value, suffix, label }: Stat) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate(latest) {
        setDisplay(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <div ref={ref} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
      <p className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
        {display.toLocaleString("es-CO")}
        <span className="accent-text">{suffix}</span>
      </p>
      <p className="mt-3 text-sm uppercase tracking-[0.22em] text-zinc-400">
        {label}
      </p>
    </div>
  );
}

export function AnimatedStats() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-10 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid gap-5 md:grid-cols-3"
      >
        {stats.map((stat) => (
          <Counter key={stat.label} {...stat} />
        ))}
      </motion.div>
    </section>
  );
}
