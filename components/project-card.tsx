'use client'

import { motion } from 'framer-motion'

interface ProjectCardProps {
  icon: string
  name: string
  description: string
  backgroundColor: string
  tech: string[]
  onClick: () => void
}

export function ProjectCard({
  icon,
  name,
  description,
  backgroundColor,
  tech,
  onClick,
}: ProjectCardProps) {
  
  // 1. We add this check to see if the icon string is a file path
  const isImagePath = icon.includes('.') || icon.startsWith('/')

  return (
    <motion.button
      onClick={onClick}
      className="group relative w-full text-left"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-full p-8 rounded-2xl border border-border bg-card hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
        
        {/* Icon Background */}
        <div
          className={`${backgroundColor} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-4xl overflow-hidden`}
        >
          {/* 2. We conditionally render an image OR the emoji */}
          {isImagePath ? (
            <img 
              src={icon} 
              alt={`${name} icon`} 
              className="w-12 h-12 object-contain" 
            />
          ) : (
            icon
          )}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
          {name}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-5 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20 font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Preview Button */}
        <motion.div
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-accent to-accent/80 text-background font-semibold text-sm text-center hover:from-accent hover:to-accent transition-all group-hover:shadow-lg group-hover:shadow-accent/30"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Preview App →
        </motion.div>
      </div>
    </motion.button>
  )
}