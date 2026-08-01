'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'
import { useSite } from '@/lib/site-context'
import { ScrollReveal } from '@/components/scroll-reveal'

const EXPERIENCE = [
  {
    title: 'Android App Development',
    company: 'NAM Group of Companies',
    duration: 'Jul 2026 - Present',
    type: 'Internship · Onsite',
    description: 'Interning as an Android App Developer at NAM Group of Companies, a Software Development company. Working on native Android development with Kotlin and Jetpack Compose, gaining hands-on experience in modern Android architecture and UI development.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Android Studio', 'Firebase'],
    highlights: [
      'Building native Android applications with Kotlin',
      'Implementing UI with Jetpack Compose',
      'Collaborating with senior engineers on production features',
    ],
  },
  {
    title: 'Flutter Development',
    company: 'Software Productivity Strategists, Inc. (SPS)',
    duration: 'Jul 2025 - Sep 2025',
    type: 'Internship · Remote',
    description: 'Interned as a Flutter Developer at SPS, an IT Services and IT Consulting company specializing in AI and Cloud solutions. Developed cross-platform mobile applications and gained experience with enterprise-level Flutter development practices.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs'],
    highlights: [
      'Developed multiple Flutter applications for cloud solutions',
      'Implemented clean architecture patterns in production code',
      'Collaborated remotely with distributed development team',
    ],
  },
  {
    title: 'Flutter Developer',
    company: 'DevelopersHub Corporation©',
    duration: 'May 2025 - Jul 2025',
    type: 'Internship · Remote',
    description: 'Interned as a Flutter Developer at DevelopersHub Corporation, an IT Services company with over 1000+ employees globally. Developed cross-platform mobile applications with focus on UI/UX implementation and state management.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Provider'],
    highlights: [
      'Built responsive Flutter applications from wireframes to production',
      'Implemented state management using Provider pattern',
      'Worked with international development team across time zones',
    ],
  },
  {
    title: 'Freelance Graphic Designer',
    company: 'Fiverr',
    duration: 'Aug 2023 - Present',
    type: 'Freelance',
    description: 'Working as a Graphic Designer on Fiverr, a global freelance marketplace. Creating custom designs including logos, graphics, and visual assets for clients worldwide while managing multiple projects simultaneously.',
    technologies: ['Adobe Lightroom', 'Design', 'Graphics Software'],
    highlights: [
      'Completed designs for international clients',
      'Maintained high client satisfaction and positive reviews',
      'Built professional design portfolio',
    ],
  },
]

export function ExperienceSection() {
  const { tr } = useSite()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 font-display text-foreground">
            Experience
          </h2>
        </ScrollReveal>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative p-8 rounded-lg bg-card border border-border hover:border-accent transition-all duration-200"
              whileHover={{ y: -5 }}
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-l-lg" />

              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 flex-shrink-0">
                    <Briefcase className="text-accent" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                    <p className="text-lg text-accent font-semibold mb-1">{exp.company}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                      <span className="ml-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>

              {/* Highlights */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-muted-foreground mb-3">Key Achievements</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.1 }}
                      className="flex items-start gap-3 text-foreground"
                    >
                      <span className="text-accent mt-1">→</span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-3">Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, j) => (
                    <motion.span
                      key={j}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: j * 0.05 }}
                      className="px-3 py-1 rounded-full bg-accent/10 border border-accent text-accent text-xs font-semibold"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
