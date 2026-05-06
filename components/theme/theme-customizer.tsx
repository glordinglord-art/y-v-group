'use client'

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const accents = [
  { name: "Naranja", value: "#f97316", rgb: "249 115 22" },
  { name: "Azul", value: "#38bdf8", rgb: "56 189 248" },
  { name: "Verde", value: "#34d399", rgb: "52 211 153" },
  { name: "Violeta", value: "#a78bfa", rgb: "167 139 250" },
  { name: "Rose", value: "#fb7185", rgb: "251 113 133" },
];

type ThemeMode = "dark" | "light";

function applyTheme(mode: ThemeMode, accent: (typeof accents)[number]) {
  const root = document.documentElement;
  root.dataset.theme = mode;
  root.style.setProperty("--accent", accent.value);
  root.style.setProperty("--accent-rgb", accent.rgb);
}

export function ThemeCustomizer() {
  const initialTheme = useMemo(() => {
    if (typeof window === "undefined") {
      return { mode: "dark" as ThemeMode, accent: accents[0] };
    }

    const storedMode = (window.localStorage.getItem("yv-theme-mode") as ThemeMode | null) || "dark";
    const storedAccent = window.localStorage.getItem("yv-theme-accent");
    const foundAccent = accents.find((item) => item.value === storedAccent) || accents[0];

    return { mode: storedMode, accent: foundAccent };
  }, []);

  const [mode, setMode] = useState<ThemeMode>(initialTheme.mode);
  const [accent, setAccent] = useState(initialTheme.accent);

  useEffect(() => {
    applyTheme(mode, accent);
  }, [mode, accent]);

  const updateMode = (nextMode: ThemeMode) => {
    setMode(nextMode);
    window.localStorage.setItem("yv-theme-mode", nextMode);
    applyTheme(nextMode, accent);
  };

  const updateAccent = (nextAccent: (typeof accents)[number]) => {
    setAccent(nextAccent);
    window.localStorage.setItem("yv-theme-accent", nextAccent.value);
    applyTheme(mode, nextAccent);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.35 }}
      className="fixed right-4 top-24 z-[110] rounded-[1.5rem] border border-white/10 bg-black/40 p-3 shadow-[0_24px_60px_rgba(0,0,0,0.3)] backdrop-blur-2xl"
    >
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => updateMode("dark")}
          className={`rounded-full px-3 py-2 text-sm transition ${mode === "dark" ? "accent-bg text-white" : "bg-white/[0.06] text-white/70"}`}
          aria-label="Modo oscuro"
        >
          ☾
        </button>
        <button
          type="button"
          onClick={() => updateMode("light")}
          className={`rounded-full px-3 py-2 text-sm transition ${mode === "light" ? "accent-bg text-white" : "bg-white/[0.06] text-white/70"}`}
          aria-label="Modo claro"
        >
          ☀
        </button>
      </div>

      <div className="mt-3 flex items-center gap-2">
        {accents.map((item) => (
          <button
            key={item.name}
            type="button"
            onClick={() => updateAccent(item)}
            aria-label={`Color ${item.name}`}
            className={`h-7 w-7 rounded-full border transition ${accent.value === item.value ? "border-white scale-110" : "border-white/20"}`}
            style={{ backgroundColor: item.value }}
          />
        ))}
      </div>
    </motion.div>
  );
}
