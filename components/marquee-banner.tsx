'use client'

import { motion } from 'framer-motion'

const MARQUEE_ITEMS = [
  'Flutter',
  '●',
  'Firebase',
  '●',
  'Dart',
  '●',
  'Clean Architecture',
  '●',
  'Performance',
  '●',
  'UI/UX',
  '●',
  'REST APIs',
  '●',
  'Git',
  '●',
]

export function MarqueeBanner() {
  return (
    <div className="relative w-full py-8 bg-gradient-to-r from-background via-background/80 to-background overflow-hidden border-y border-border">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: '-100%' }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <span key={i} className="text-lg md:text-xl font-semibold text-foreground">
            {item === '●' ? (
              <span className="text-accent">●</span>
            ) : (
              <span className="text-muted-foreground hover:text-accent transition-colors duration-200">
                {item}
              </span>
            )}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
