'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const SCREENSHOTS = [
  {
    id: 1,
    title: 'Weekly Timetable',
    description: 'Mark present or absent on each class card. Attendance tracked automatically.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4mG1JE3ElbZXRmx00s1WRe66vaTIAC.png',
  },
  {
    id: 2,
    title: 'Smart Silence & Threshold',
    description: 'Auto DND during class, attendance threshold, and semester reset — all in one place.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-F9bMn03M0dkgNEBiXEjRNhtp8aNJDo.png',
  },
  {
    id: 3,
    title: 'GPA & Attendance Insights',
    description: 'Per-course breakdown all in one view.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-58RlR2ngGjYsPjnSQvsIUDiKxZDNWk.png',
  },
  {
    id: 4,
    title: 'Your Academic Profile',
    description: 'Share your schedule code, import a friend\'s timetable.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z9paVlvv31ijedRTadwhxXeKMUE7zO.png',
  },
]

export function UniFlowScreenshotsGallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? SCREENSHOTS.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === SCREENSHOTS.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="space-y-6">
      {/* Main Display */}
      <div className="relative bg-gradient-to-br from-accent/5 to-transparent border border-border/50 rounded-lg overflow-hidden">
        <div className="aspect-video flex items-center justify-center bg-black/40">
          <AnimatePresence mode="wait">
            <motion.div
              key={SCREENSHOTS[activeIndex].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex items-center justify-center p-4"
            >
              <Image
                src={SCREENSHOTS[activeIndex].image}
                alt={SCREENSHOTS[activeIndex].title}
                width={300}
                height={600}
                priority
                className="h-full w-auto object-contain rounded-lg"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <motion.button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-accent/80 hover:bg-accent text-background transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft size={20} />
        </motion.button>

        <motion.button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-accent/80 hover:bg-accent text-background transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight size={20} />
        </motion.button>
      </div>

      {/* Screenshot Info */}
      <div className="space-y-2">
        <h4 className="text-lg font-semibold text-foreground">{SCREENSHOTS[activeIndex].title}</h4>
        <p className="text-sm text-muted-foreground">{SCREENSHOTS[activeIndex].description}</p>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3">
        {SCREENSHOTS.map((screenshot, index) => (
          <motion.button
            key={screenshot.id}
            onClick={() => setActiveIndex(index)}
            className={`relative rounded-lg overflow-hidden border-2 transition-all ${
              index === activeIndex ? 'border-accent' : 'border-border/30 hover:border-border'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={screenshot.image}
              alt={screenshot.title}
              width={100}
              height={200}
              className="w-full h-24 object-cover"
            />
          </motion.button>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2">
        {SCREENSHOTS.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === activeIndex ? 'bg-accent w-6' : 'bg-muted w-2'
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </div>
  )
}
