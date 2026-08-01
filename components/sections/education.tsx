'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { useSite } from '@/lib/site-context'
import { ScrollReveal } from '@/components/scroll-reveal'

const EDUCATION_SKILLS = [
  'Flutter',
  'Firebase',
  'Node.js',
  'Clean Architecture',
  'REST APIs',
  'Provider',
  'MongoDB',
  'Responsive UI',
  'Agile',
  'Git & GitHub',
]

export function EducationSection() {
  const { tr } = useSite()

  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 font-display text-foreground">
            {tr('education.title' as any)}
          </h2>
        </ScrollReveal>

        {/* Main Education Card */}
        <ScrollReveal>
          <motion.div
            className="relative p-8 md:p-12 rounded-lg bg-card border border-border mb-12 overflow-hidden"
            whileHover={{ y: -5 }}
          >
            {/* Left Border */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-1 bg-accent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.8 }}
              style={{ originY: 0 }}
            />

            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                <GraduationCap className="text-accent" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {tr('education.degree' as any)}
                </h3>
                <p className="text-lg text-muted-foreground">{tr('education.school' as any)}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-12 mb-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Duration</p>
                <p className="text-xl font-bold text-accent">{tr('education.duration' as any)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Status</p>
                <motion.p
                  className="text-xl font-bold text-green-500 flex items-center gap-2"
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  {tr('education.status' as any)}
                </motion.p>
              </div>
            </div>

            {/* Skills Tags */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-muted-foreground">Skills & Knowledge</p>
              <div className="flex flex-wrap gap-2">
                {EDUCATION_SKILLS.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-2 rounded-full bg-accent/10 border border-accent text-accent text-sm font-semibold"
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </ScrollReveal>


      </div>
    </section>
  )
}
