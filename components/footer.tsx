'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { useSite } from '@/lib/site-context'

const FOOTER_LINKS = [
  { label: 'nav.about', href: '#about' },
  { label: 'nav.skills', href: '#skills' },
  { label: 'nav.projects', href: '#projects' },
  { label: 'nav.contact', href: '#contact' },
]

const SOCIAL_LINKS = [
  { icon: Github, href: 'https://github.com/Anees03100', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-anees-3aa11936b/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:malikanees306@gmail.com', label: 'Email' },
]

export function Footer() {
  const { tr } = useSite()

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
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer className="relative border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {/* Logo & Description */}
          <motion.div variants={itemVariants}>
            <motion.a
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-foreground via-accent to-accent bg-clip-text text-transparent mb-4 block"
              whileHover={{ scale: 1.05 }}
            >
              anees.dev
            </motion.a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Flutter Developer with 1+ year shipping cross-platform apps. Specialized in Firebase, REST APIs, and clean architecture.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              {FOOTER_LINKS.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  className="block text-muted-foreground hover:text-accent transition-colors duration-200 text-sm"
                  whileHover={{ x: 4 }}
                >
                  {tr(link.label as any)}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-foreground mb-4">Follow</h3>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social, i) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    className="p-2 rounded-lg bg-muted hover:bg-accent hover:text-background text-foreground transition-colors duration-200"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    title={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          style={{ originX: 0.5 }}
        />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <motion.p variants={itemVariants} className="text-center md:text-left">
            {tr('footer.credit' as any)}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-1"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span>Made with</span>
            <Heart size={16} className="text-accent fill-accent" />
            <span>& Flutter</span>
          </motion.div>

          <motion.p variants={itemVariants} className="text-center md:text-right">
            © {new Date().getFullYear()} Muhammad Anees
          </motion.p>
        </motion.div>
      </div>

      {/* Background Effects */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </footer>
  )
}
