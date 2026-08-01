'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface MobilePhoneFrameProps {
  screenshots: string[]
  projectName: string
}

export function MobilePhoneFrame({ screenshots, projectName }: MobilePhoneFrameProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (screenshots.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [screenshots.length])

  if (screenshots.length === 0) {
    return (
      <div className="flex items-center justify-center h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-3xl border-8 border-gray-800">
        <p className="text-muted-foreground text-sm">No screenshots available</p>
      </div>
    )
  }

  return (
    <div className="relative flex justify-center items-start">
      {/* Phone Frame */}
      <div className="relative w-72 bg-black rounded-3xl border-8 border-gray-900 overflow-hidden shadow-2xl">
        {/* Phone Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20 flex items-center justify-center">
          <div className="w-32 h-5 bg-black rounded-full"></div>
        </div>

        {/* Screen */}
        <div className="relative w-full bg-black overflow-hidden pt-8 pb-3 px-2">
          <div className="relative w-full rounded-2xl bg-background overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full"
              >
                <Image
                  src={screenshots[currentIndex]}
                  alt={`${projectName} screenshot ${currentIndex + 1}`}
                  fill
                  className="object-cover"
                  quality={85}
                  priority
                  crossOrigin="anonymous"
                />
              </motion.div>
            </AnimatePresence>

            {/* Screen Reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Bottom Home Indicator */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full"></div>
      </div>

      {/* Screenshot Indicators */}
      {screenshots.length > 1 && (
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2">
          {screenshots.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-accent w-8' : 'bg-accent/40 w-2'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      )}

      {/* Screenshot Counter */}
      <div className="absolute -top-8 right-0 text-xs text-muted-foreground">
        {currentIndex + 1} / {screenshots.length}
      </div>
    </div>
  )
}
