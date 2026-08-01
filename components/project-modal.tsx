'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { MobilePhoneFrame } from '@/components/mobile-phone-frame'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    name: string
    category: string
    description: string
    extendedDescription: string
    tech: string[]
    screenshots: string[]
    icon: string
  }
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 flex items-center justify-center"
          >
            <div className="relative w-full h-full max-w-5xl bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="absolute top-6 right-6 z-10 p-2 rounded-full bg-accent/20 hover:bg-accent/40 text-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={24} />
              </motion.button>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                {/* Left Side - Details */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="flex flex-col p-8 md:p-10 overflow-y-auto"
                >
                  {/* Header */}
                  <div>
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                      {project.name}
                    </h2>
                    <p className="text-sm text-accent font-semibold mb-6">
                      {project.icon} Flutter App
                    </p>

                    {/* Description */}
                    <p className="text-base text-muted-foreground leading-relaxed mb-6">
                      {project.extendedDescription}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 rounded-lg bg-accent/10 text-accent text-sm font-medium border border-accent/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Right Side - Mobile Frame */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="hidden lg:flex items-center justify-center p-6 md:p-8 bg-gradient-to-br from-background to-background/50"
                >
                  <MobilePhoneFrame
                    screenshots={project.screenshots}
                    projectName={project.name}
                  />
                </motion.div>

                {/* Mobile Frame on Small Screens */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.3 }}
                  className="flex lg:hidden items-center justify-center p-6 bg-gradient-to-br from-background to-background/50 border-t border-border"
                >
                  <MobilePhoneFrame
                    screenshots={project.screenshots}
                    projectName={project.name}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
