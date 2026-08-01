'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { AnimatedCursor } from '@/components/animated-cursor'
import { MarqueeBanner } from '@/components/marquee-banner'
import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { SkillsSection } from '@/components/sections/skills'
import { ProjectsSection } from '@/components/sections/projects'
import { EducationSection } from '@/components/sections/education'
import { ExperienceSection } from '@/components/sections/experience'
import { CertificationsSection } from '@/components/sections/certifications'
import { HobbiesSection } from '@/components/sections/hobbies'
import { ContactSection } from '@/components/sections/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden bg-background text-foreground">
      <AnimatedCursor />
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Marquee Banner */}
      <MarqueeBanner />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Education Section */}
      <EducationSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Certifications Section */}
      <CertificationsSection />

      {/* Hobbies Section */}
      <HobbiesSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 right-8 p-4 rounded-full bg-accent text-background shadow-lg hover:opacity-90 transition-colors duration-200 z-30"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        viewport={{ once: false }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </main>
  )
}
