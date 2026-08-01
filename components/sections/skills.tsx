'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSite } from '@/lib/site-context'
import { ScrollReveal } from '@/components/scroll-reveal'

const SKILLS_DATA = {
  mobile: [
    { name: 'Flutter', level: 95 },
    { name: 'Dart', level: 92 },
    { name: 'Provider, Riverpod (State Management)', level: 90 },
    { name: 'Firebase Integration', level: 88 },
    { name: 'Kotlin & Jetpack Compose', level: 85 },
    { name: 'Native Android Development', level: 82 },
  ],
  backend: [
    { name: 'REST API Integration', level: 90 },
    { name: 'Firebase (Firestore, Auth, Storage)', level: 88 },
    { name: 'Node.js & Express.js', level: 85 },
    { name: 'MongoDB', level: 85 },
    { name: 'Cloudinary Integration', level: 82 },
    { name: 'Real-Time Data Sync', level: 85 },
  ],
  design: [
    { name: 'Figma', level: 80 },
    { name: 'Git & GitHub', level: 92 },
    { name: 'Android Studio', level: 90 },
    { name: 'VS Code', level: 93 },
    { name: 'Clean Architecture', level: 85 },
    { name: 'MVC Pattern', level: 82 },
  ],
}

const TOOL_SKILLS = ['Git', 'GitHub', 'REST APIs', 'Postman', 'Figma', 'Android Studio', 'VS Code', 'Cloudinary', 'Admob']
const SOFT_SKILLS = ['Problem Solving', 'Debugging', 'Team Collaboration', 'Agile Development', 'Fast Learner', 'Cross-Platform Development']

const TECH_TAGS = [
  { name: 'Flutter', emoji: '📱', angle: 0 },
  { name: 'Kotlin', emoji: '🎯', angle: 45 },
  { name: 'Firebase', emoji: '🔥', angle: 90 },
  { name: 'Node.js', emoji: '✨', angle: 135 },
  { name: 'MongoDB', emoji: '🗄️', angle: 180 },
  { name: 'REST APIs', emoji: '🌐', angle: 225 },
  { name: 'Riverpod', emoji: '🌊', angle: 270 },
  { name: 'Jetpack', emoji: '🛠️', angle: 315 },
]

export function SkillsSection() {
  const { tr } = useSite()
  const [activeTab, setActiveTab] = useState<'mobile' | 'backend' | 'design'>('mobile')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display text-center text-foreground">
            {tr('skills.title' as any)}
          </h2>
        </ScrollReveal>

        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Tools Card */}
          <ScrollReveal direction="left" delay={0.2}>
            <motion.div
              className="p-6 rounded-lg bg-card border border-border hover:border-accent transition-all duration-200"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-foreground mb-4">{tr('skills.tools' as any)}</h3>
              <div className="flex flex-wrap gap-2">
                {TOOL_SKILLS.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-2 rounded-full bg-orange-500/10 border border-accent text-accent text-sm font-semibold hover:bg-orange-500/20 transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Soft Skills Card */}
          <ScrollReveal direction="right" delay={0.2}>
            <motion.div
              className="p-6 rounded-lg bg-card border border-border hover:border-accent transition-all duration-200"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-foreground mb-4">{tr('skills.soft' as any)}</h3>
              <div className="flex flex-wrap gap-2">
                {SOFT_SKILLS.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500 text-green-500 text-sm font-semibold hover:bg-green-500/20 transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Tabbed Skills & Constellation */}
        {mounted && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Tabbed Skills */}
          <ScrollReveal direction="left">
            <div>
              {/* Tab Buttons */}
              <div className="flex gap-4 mb-8 border-b border-border pb-4">
                {(['mobile', 'backend', 'design'] as const).map((tab) => (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                      activeTab === tab
                        ? 'bg-accent text-background'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tr(`skills.tab.${tab}` as any)}
                  </motion.button>
                ))}
              </div>

              {/* Skills List */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                  variants={containerVariants}
                >
                  {SKILLS_DATA[activeTab].map((skill, i) => (
                    <motion.div key={`${activeTab}-${i}`} variants={itemVariants}>
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-semibold text-foreground">{skill.name}</p>
                        <p className="text-sm text-accent font-bold">{skill.level}%</p>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-accent"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </ScrollReveal>

          {/* Right: Tech Constellation */}
          <ScrollReveal direction="right">
            <div className="relative h-96 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.3 }}>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--accent)" />
                    <stop offset="100%" stopColor="var(--accent)" />
                  </linearGradient>
                </defs>
                {/* Connection lines */}
                {TECH_TAGS.map((tag, i) => {
                  const centerX = 192
                  const centerY = 192
                  const radius = 120
                  const nextTag = TECH_TAGS[(i + 1) % TECH_TAGS.length]

                  const angle1 = (tag.angle * Math.PI) / 180
                  const angle2 = (nextTag.angle * Math.PI) / 180

                  const x1 = centerX + radius * Math.cos(angle1)
                  const y1 = centerY + radius * Math.sin(angle1)
                  const x2 = centerX + radius * Math.cos(angle2)
                  const y2 = centerY + radius * Math.sin(angle2)

                  return (
                    <line
                      key={`line-${i}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="url(#lineGradient)"
                      strokeWidth="1"
                    />
                  )
                })}
              </svg>

              {/* Tags */}
              {TECH_TAGS.map((tag, i) => {
                const angle = (tag.angle * Math.PI) / 180
                const radius = 120
                const x = 192 + radius * Math.cos(angle)
                const y = 192 + radius * Math.sin(angle)

                return (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${x - 40}px`,
                      top: `${y - 40}px`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{
                      scale: 1.2,
                      rotateZ: 10,
                      filter: 'drop-shadow(0 0 20px rgba(245,125,10,0.6))',
                    }}
                  >
                    <div className="w-20 h-20 rounded-lg bg-card border border-border flex flex-col items-center justify-center cursor-pointer hover:border-accent transition-colors duration-200">
                      <span className="text-2xl mb-1">{tag.emoji}</span>
                      <span className="text-xs font-semibold text-center text-foreground">{tag.name}</span>
                    </div>
                  </motion.div>
                )
              })}

              {/* Center circle */}
              <div className="absolute w-20 h-20 rounded-full border-2 border-accent/30 flex items-center justify-center bg-card">
                <span className="text-xs text-accent font-semibold text-center">Tech-Stack</span>
              </div>
            </div>
          </ScrollReveal>
          </div>
        )}
      </div>
    </section>
  )
}
