'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'
import { useSite } from '@/lib/site-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ScrollReveal } from '@/components/scroll-reveal'

interface FormData {
  name: string
  email: string
  message: string
}

export function ContactSection() {
  const { tr } = useSite()
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Validate form
      if (!formData.name || !formData.email || !formData.message) {
        setSubmitStatus('error')
        setIsSubmitting(false)
        return
      }

      // In a real app, you'd send this to an API
      // For now, we'll just simulate success
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const socials = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Anees03100' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammad-anees-3aa11936b/' },
    { icon: Mail, label: 'Email', href: 'mailto:malikanees306@gmail.com' },
  ]

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
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display text-center text-foreground">
            {tr('contact.title' as any)}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-12">
          {/* Left: Social Links */}
          <ScrollReveal direction="left">
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              {/* Availability Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent/10 border border-accent"
              >
                <motion.div
                  className="w-3 h-3 rounded-full bg-green-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="font-semibold text-accent">{tr('contact.available' as any)}</span>
              </motion.div>

              {/* Social Cards */}
              <div className="space-y-4">
                {socials.map((social, i) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={i}
                      href={social.href}
                      variants={itemVariants}
                      className="group flex items-center gap-4 p-6 rounded-lg bg-card border border-border hover:border-accent hover:bg-card transition-all duration-200"
                      whileHover={{ x: 10, y: -5 }}
                    >
                      <motion.div
                        className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-background transition-all duration-200"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <Icon size={24} />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
                          {social.label}
                        </p>
                        <p className="text-sm text-muted-foreground">Get in touch</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Right: Contact Form */}
          <ScrollReveal direction="right">
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Name Input */}
              <motion.div
                className="relative"
                whileHover={{ y: -2 }}
              >
                <Input
                  type="text"
                  name="name"
                  placeholder={tr('contact.name' as any)}
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-card border-b border-b-border text-foreground placeholder:text-muted-foreground focus:border-b-accent focus:outline-none transition-colors duration-200"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                className="relative"
                whileHover={{ y: -2 }}
              >
                <Input
                  type="email"
                  name="email"
                  placeholder={tr('contact.email' as any)}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-card border-b border-b-border text-foreground placeholder:text-muted-foreground focus:border-b-accent focus:outline-none transition-colors duration-200"
                />
              </motion.div>

              {/* Message Textarea */}
              <motion.div
                className="relative"
                whileHover={{ y: -2 }}
              >
                <Textarea
                  name="message"
                  placeholder={tr('contact.message' as any)}
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-card border-b border-b-border text-foreground placeholder:text-muted-foreground focus:border-b-accent focus:outline-none transition-colors duration-200 resize-none"
                />
              </motion.div>

              {/* Status Messages */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-semibold"
                  >
                    ✓ {tr('contact.success' as any)}
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-semibold"
                  >
                    ✗ {tr('contact.error' as any)}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:opacity-90 text-background font-bold py-6 text-lg rounded-lg glow-orange disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : tr('contact.send' as any)}
                </Button>
              </motion.div>
            </motion.form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function AnimatePresence({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
