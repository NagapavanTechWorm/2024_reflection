'use client';

import { motion } from 'framer-motion';
import { Snowflake } from 'lucide-react';
import { useCallback } from 'react';

export function Snowfall() {
  const getSnowflakeStyle = useCallback((index: number) => ({
    left: `${(index / 50) * 100}%`,
    top: '-20px',
  }), []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -10, opacity: 0 }}
          animate={{
            y: ['0%', '100%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i * 0.1,
          }}
          className="absolute text-white/20"
          style={getSnowflakeStyle(i)}
        >
          <Snowflake size={20} />
        </motion.div>
      ))}
    </div>
  );
}