'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useSite } from '@/lib/site-context'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/scroll-reveal'

const JOB_TITLES = ['Flutter Developer', 'Performance Enthusiast', 'Full Stack Builder', 'UI/UX Lover']

export function HeroSection() {
  const { tr } = useSite()
  const [currentTitle, setCurrentTitle] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % JOB_TITLES.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const scrollVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,125,10,.5) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(255,125,10,.5) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Animated gradient blobs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(245,125,10,0.3) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, 40, -40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(245,125,10,0.2) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, -40, 40, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 font-display"
        >
          <span className="text-foreground">Muhammad</span>
          <br />
          <span className="bg-gradient-to-r from-accent via-accent to-accent bg-clip-text text-transparent">
            / Anees
          </span>
        </motion.h1>

        {/* Job Title with Typing Effect */}
        {mounted && (
          <motion.div variants={itemVariants} className="h-12 md:h-16 mb-6">
            <motion.p
              key={currentTitle}
              className="text-2xl md:text-3xl text-accent font-semibold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
            >
              {JOB_TITLES[currentTitle]}
            </motion.p>
          </motion.div>
        )}

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {tr('hero.subtitle' as any)}
        </motion.p>

        {/* Stats Row */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 py-8 border-y border-border"
        >
          {[
            { label: 'hero.stat1', value: '4+' },
            { label: 'hero.stat2', value: '1+' },
            { label: 'hero.stat3', value: '100%' },
            { label: 'hero.stat4', value: '∞' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-bold text-accent mb-2">{stat.value}</p>
              <p className="text-sm md:text-base text-muted-foreground">{tr(stat.label as any)}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => {
                const element = document.querySelector('#projects')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-accent hover:opacity-90 text-background font-bold py-6 text-lg px-8 rounded-lg glow-orange"
            >
              {tr('hero.cta.work' as any)}
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10 font-bold py-6 text-lg px-8 rounded-lg cursor-pointer"
              onClick={() => {
                const link = document.createElement('a')
                link.href = 'https://blobs.vusercontent.net/blob/Muhammad-Anees-CV%20%282%29-tYFy7sjlHJ1YFuA9q07bOe4vD4mYK0.pdf'
                link.download = 'Muhammad-Anees-CV.pdf'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
            >
              {tr('hero.cta.cv' as any)}
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        variants={scrollVariants}
        animate="animate"
      >
        <ChevronDown className="text-accent opacity-50" size={32} />
      </motion.div>
    </section>
  )
}
