'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate progress bar with non-linear animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        // Faster at start, slower at end
        const increment = prev < 50 ? Math.random() * 30 : Math.random() * 15
        return Math.min(prev + increment, 99)
      })
    }, 300)

    // Hide splash screen after progress reaches 100 or after 2.5 seconds
    const hideTimer = setTimeout(() => {
      setProgress(100)
      setTimeout(() => {
        setIsVisible(false)
      }, 600)
    }, 2500)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 bg-gradient-to-br from-background via-background to-background/95 flex flex-col items-center justify-center backdrop-blur-sm"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Animated background elements */}
          <motion.div
            className="absolute inset-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1 }}
          >
            {/* Gradient blur orbs */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, 30, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
              animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0], y: [0, -30, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Logo/Name */}
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-4 font-display"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <span className="text-foreground">Muhammad</span>
              <br />
              <span className="bg-gradient-to-r from-accent via-accent to-accent bg-clip-text text-transparent">
                Anees
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-12 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              Flutter Developer & Mobile Engineer
            </motion.p>

            {/* Progress Container */}
            <motion.div
              className="w-64 md:w-80 mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            >
              {/* Progress Bar Background */}
              <div className="relative h-1.5 bg-card rounded-full overflow-hidden border border-border/50">
                {/* Progress Fill */}
                <motion.div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-accent to-accent rounded-full shadow-lg"
                  style={{ width: `${progress}%` }}
                  transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                />
                
                {/* Glow Effect */}
                <motion.div
                  className="absolute left-0 top-0 h-full bg-accent blur-md opacity-50"
                  style={{ width: `${progress}%` }}
                  transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                />
              </div>

              {/* Progress Text */}
              <motion.p
                className="text-xs md:text-sm text-muted-foreground mt-4 font-medium tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
              >
                Loading Portfolio
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  ...
                </motion.span>
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Bottom accent line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            style={{ originX: 0.5 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
