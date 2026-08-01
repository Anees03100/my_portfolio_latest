'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface AppScreenshot {
  id: number
  title: string
  description: string
  image: string
}

const SCREENSHOTS: AppScreenshot[] = [
  {
    id: 1,
    title: 'Live Campus Feed',
    description: 'Browse all lost and found items reported on campus in real-time',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image2.png-JmKREi0x0r229B6zFvqkDb13To4hmC.jpeg',
  },
  {
    id: 2,
    title: 'Report Items',
    description: 'Report lost or found items in seconds with photos and details',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image3.png-C0kJek3E3EobbdUCwKoaG980rIg8ZC.jpeg',
  },
  {
    id: 3,
    title: 'Track Reports',
    description: 'Monitor your posts and track their status in real-time',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image4.png-N8BEGjk3vbUK7sfZU1WPORD0oPPx0Y.jpeg',
  },
]

export function AppScreenshotsGallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + SCREENSHOTS.length) % SCREENSHOTS.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SCREENSHOTS.length)
  }

  if (!mounted) return null

  return (
    <div className="w-full">
      <div className="relative">
        {/* Main Screenshot Display */}
        <div className="relative h-96 md:h-[28rem] flex items-center justify-center mb-8 perspective overflow-hidden rounded-xl border border-border/50">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-background to-card"
            >
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <Image
                  src={SCREENSHOTS[activeIndex].image}
                  alt={SCREENSHOTS[activeIndex].title}
                  width={280}
                  height={560}
                  className="h-full w-auto object-contain drop-shadow-xl"
                  priority
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            onClick={handlePrev}
            className="absolute left-4 z-20 p-3 rounded-full bg-accent hover:opacity-90 text-background transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            onClick={handleNext}
            className="absolute right-4 z-20 p-3 rounded-full bg-accent hover:opacity-90 text-background transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Progress Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {SCREENSHOTS.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-accent w-8' : 'bg-muted w-2'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>

        {/* Screenshot Info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-2 mb-6"
          >
            <h3 className="text-2xl font-bold text-foreground">
              {SCREENSHOTS[activeIndex].title}
            </h3>
            <p className="text-muted-foreground text-lg">
              {SCREENSHOTS[activeIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Thumbnail Gallery */}
        <div className="grid grid-cols-3 gap-4">
          {SCREENSHOTS.map((screenshot, index) => (
            <motion.button
              key={screenshot.id}
              onClick={() => setActiveIndex(index)}
              className={`relative h-24 md:h-28 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === activeIndex
                  ? 'border-accent shadow-lg shadow-accent/50'
                  : 'border-border/50 hover:border-accent/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={screenshot.image}
                alt={screenshot.title}
                fill
                className="object-cover"
              />
              <div
                className={`absolute inset-0 transition-all duration-300 ${
                  index === activeIndex ? 'bg-black/0' : 'bg-black/40 hover:bg-black/20'
                }`}
              />
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}
