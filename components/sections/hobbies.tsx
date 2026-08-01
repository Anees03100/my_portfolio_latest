'use client'

import { motion } from 'framer-motion'
import { useSite } from '@/lib/site-context'
import { ScrollReveal } from '@/components/scroll-reveal'

const HOBBIES = [
  { key: 'hobbies.coding', emoji: '💻', color: 'orange' },
  { key: 'hobbies.reading', emoji: '📚', color: 'blue' },
  { key: 'hobbies.gaming', emoji: '🎮', color: 'purple' },
  { key: 'hobbies.guitar', emoji: '🎸', color: 'red' },
  { key: 'hobbies.movies', emoji: '🎬', color: 'pink' },
]

export function HobbiesSection() {
  const { tr } = useSite()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 font-display text-center text-foreground">
            {tr('hobbies.title' as any)}
          </h2>
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {HOBBIES.map((hobby, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group cursor-pointer"
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="h-64 rounded-lg bg-card border border-border p-6 flex flex-col items-center justify-center gap-4 relative overflow-hidden transition-all duration-200 group-hover:border-accent"
                whileHover={{
                  boxShadow: '0 0 30px rgba(245, 125, 10, 0.4)',
                }}
              >
                {/* Background glow on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />

                {/* Emoji */}
                <motion.div
                  className="text-6xl relative z-10"
                  initial={{ scale: 1, rotate: 0 }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  {hobby.emoji}
                </motion.div>

                {/* Label */}
                <motion.p
                  className="text-lg font-bold text-foreground text-center relative z-10"
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {tr(hobby.key as any)}
                </motion.p>

                {/* Decorative dots */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  initial={false}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  initial={false}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
