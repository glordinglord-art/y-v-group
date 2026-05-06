'use client'

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import logo from "@/Pokecut_1778044080070.png";

export function IntroOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 1700);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
          className="pointer-events-none fixed inset-0 z-[120] flex items-center justify-center bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.16),transparent_24%),linear-gradient(180deg,#090909,#050505)]"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-6"
          >
            <motion.div
              animate={{ rotate: [0, -4, 4, 0], y: [0, -4, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            >
              <Image src={logo} alt="Logo Y.V. Group" className="h-16 w-16 object-contain" priority />
            </motion.div>

            <div className="text-center">
              <motion.p
                initial={{ opacity: 0, letterSpacing: "0.2em" }}
                animate={{ opacity: 1, letterSpacing: "0.35em" }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="text-xs font-semibold uppercase text-orange-300"
              >
                Y.V. Group
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.25 }}
                className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl"
              >
                Experiencia premium en movimiento
              </motion.h2>
            </div>

            <div className="h-px w-32 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.1, ease: "easeInOut", repeat: Infinity }}
                className="h-full w-16 bg-gradient-to-r from-transparent via-orange-300 to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
