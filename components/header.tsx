'use client';

import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="text-center mb-8"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif">
        2024 Reflection
      </h1>
      <p className="text-white/80 text-lg md:text-xl">
        Reflect on your year through 24 meaningful questions
      </p>
    </motion.div>
  );
}