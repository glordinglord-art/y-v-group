'use client'

import { motion } from "framer-motion";

export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -top-32 left-[-10%] h-[32rem] w-[32rem] rounded-full bg-orange-500/10 blur-3xl"
        animate={{ x: [0, 80, -20, 0], y: [0, 40, 90, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-8%] top-[22%] h-[26rem] w-[26rem] rounded-full bg-white/[0.05] blur-3xl"
        animate={{ x: [0, -70, 30, 0], y: [0, 50, -30, 0], scale: [1, 0.95, 1.06, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[22%] h-[28rem] w-[28rem] rounded-full bg-orange-300/[0.07] blur-3xl"
        animate={{ x: [0, 35, -45, 0], y: [0, -60, 20, 0], scale: [1, 1.05, 0.98, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:96px_96px] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12),transparent_22%),linear-gradient(180deg,rgba(6,6,6,0.18),rgba(6,6,6,0.82))]" />
    </div>
  );
}
