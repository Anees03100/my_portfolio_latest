'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { useSite } from '@/lib/site-context'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Button } from '@/components/ui/button'

const CERTIFICATIONS = [
  {
    title: 'Deloitte Australia - Technology Job Simulation',
    issuer: 'Deloitte',
    date: 'Jun 2026',
    description: 'Completed the Deloitte Australia Technology Job Simulation, gaining hands-on experience with industry best practices and emerging technology solutions.',
    skills: ['Technology', 'Job Simulation', 'Professional Development'],
    credentialUrl: 'https://theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_6a40ff7e13d958649a5cb6ff_1782667266634_completion_certificate.pdf',
  },
  {
    title: 'Flutter and Dart: Developing iOS, Android, and Mobile Apps',
    issuer: 'IBM',
    date: 'Jul 2025',
    description: 'Comprehensive certification in Flutter and Dart programming, covering iOS and Android app development with hands-on projects and best practices.',
    skills: ['Flutter', 'Dart', 'iOS Development', 'Android Development', 'Mobile Apps'],
    credentialUrl: 'https://coursera.org/account/accomplishments/records/6Y3SR8H0TN3J',
  },
]

export function CertificationsSection() {
  const { tr } = useSite()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="certifications" className="relative py-24 md:py-32 bg-card/50">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display text-center text-foreground">
            Certifications & Achievements
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Professional development and continuous learning
          </p>
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="p-8 rounded-lg bg-background border border-border hover:border-accent transition-all duration-200"
              whileHover={{ y: -8 }}
            >
              {/* Header with icon and date */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <Award className="text-accent" size={28} />
                </div>
                <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {cert.date}
                </span>
              </div>

              {/* Title and issuer */}
              <h3 className="text-xl font-bold text-foreground mb-1">{cert.title}</h3>
              <p className="text-accent font-semibold mb-4">{cert.issuer}</p>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-muted-foreground mb-3">Skills Gained</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, j) => (
                    <motion.span
                      key={j}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: j * 0.05 }}
                      className="px-3 py-1 rounded-full bg-accent/10 border border-accent text-accent text-xs font-semibold"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Credential link */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent/10"
                >
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    View Credential
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
