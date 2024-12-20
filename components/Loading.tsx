'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function NPLoading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-red-900 via-red-800 to-green-900">
      <div className="flex space-x-2">
        <motion.span
          className="text-6xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            times: [0, 0.5, 1]
          }}
        >
          n
        </motion.span>
        <motion.span
          className="text-6xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            times: [0, 0.5, 1],
            delay: 0.75 // Start halfway through the 'n' animation
          }}
        >
          p
        </motion.span>
      </div>
    </div>
  )
}

