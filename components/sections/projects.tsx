'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useSite } from '@/lib/site-context'
import { ScrollReveal } from '@/components/scroll-reveal'
import { ProjectCard } from '@/components/project-card'
import { ProjectModal } from '@/components/project-modal'

const PROJECTS = [
  {
    id: 1,
    name: 'TraceIt',
    category: 'Campus Utility',
    description: 'A real-time campus lost & found ecosystem for university students.',
    extendedDescription:
      'A complete lost & found solution featuring a Flutter mobile app for users and Flutter Web admin dashboard. Real-time Firestore streams track lost and found items with automatic matching. Users can post items, browse listings, and connect with finders/lookers securely.',
    details: 'Implemented null-safe Firestore real-time streams with atomic batch writes. Integrated Cloudinary with client-side compression, reducing image upload sizes by 60%. Designed responsive UI using CustomScrollView and Slivers.',
    tech: ['Flutter', 'Firebase Firestore', 'Cloudinary', 'Provider', 'Flutter Web'],
    icon: '/lost_found.png',
    backgroundColor: 'bg-gradient-to-br from-orange-900 to-orange-950',
    screenshots: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image2.png-JmKREi0x0r229B6zFvqkDb13To4hmC.jpeg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image3.png-C0kJek3E3EobbdUCwKoaG980rIg8ZC.jpeg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image4.png-N8BEGjk3vbUK7sfZU1WPORD0oPPx0Y.jpeg',
    ],
    link: 'https://github.com/Anees03100',
  },
  {
    id: 2,
    name: 'UniFlow',
    category: 'Educational',
    description: 'University schedule and attendance tracking with GPA prediction.',
    extendedDescription:
      'UniFlow simplifies campus life with intelligent class scheduling, real-time attendance tracking, and predictive GPA analysis. Features automatic classroom silence mode during lectures, attendance alerts when thresholds are met, and semester-wide progress insights.',
    details: 'Integrated FCM for automated class reminders and Android MethodChannel for native classroom silence mode. Implemented Firestore offline persistence with cache-first fetching enabling full usability without internet connectivity.',
    tech: ['Flutter', 'Firebase', 'Provider', 'FCM', 'Android MethodChannel'],
    icon: '📚',
    backgroundColor: 'bg-gradient-to-br from-blue-900 to-blue-950',
    screenshots: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4mG1JE3ElbZXRmx00s1WRe66vaTIAC.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-F9bMn03M0dkgNEBiXEjRNhtp8aNJDo.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-58RlR2ngGjYsPjnSQvsIUDiKxZDNWk.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z9paVlvv31ijedRTadwhxXeKMUE7zO.png',
    ],
    link: 'https://github.com/Anees03100',
  },
  {
    id: 3,
    name: 'SecondUp',
    category: 'E-Commerce',
    description: 'Peer-to-peer marketplace with real-time messaging and secure transactions.',
    extendedDescription:
      'SecondUp connects buyers and sellers in a thriving peer-to-peer marketplace. Browse electronics, vehicles, furniture, and more with detailed listings. Real-time messaging enables secure communication, and a robust rating system builds community trust.',
    details: 'Developed full RESTful backend API covering user auth, product CRUD, and Cloudinary image management using Node.js, Express.js, and MongoDB. Implemented real-time messaging and secure transactions.',
    tech: ['Flutter', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Auth', 'Cloudinary'],
    icon: '🛍️',
    backgroundColor: 'bg-gradient-to-br from-emerald-900 to-emerald-950',
    screenshots: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-teGcBEGe1PBM2uf5nmuetreo7Zm25P.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-xiSeRPUZouAfitRSRXKmRutewSVSfa.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-xBIwHvtkJWlZ5NxIvlKDPmTsIQM5fM.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-nqRaznR6nM6cjRQlHsN7bCfaXA8Sho.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-iWnfOAnNBykbYRdaL310PFSZxOLKYS.png',
    ],
    link: 'https://github.com/Anees03100',
  },
  {
    id: 4,
    name: 'Meridian',
    category: 'Utility App',
    description: 'Minimalist world clock app built to master Riverpod state management.',
    extendedDescription:
      'Meet Meridian, a beautifully designed world clock app developed to explore the power of Riverpod state management. Features a precise, rolling seconds dial synchronized with device time, a sleek split-screen search interface for global time zones, localized solar data, and custom typography. This project was an amazing way to learn Riverpod and experience how clean declarative state management can be in Flutter.',
    details: 'Built with Riverpod for reactive state management with automatic caching and invalidation. Implemented precision time synchronization with device GPS for accurate local time detection. Integrated solar calculation APIs for sunrise/sunset data with beautiful, minimalist UI design patterns.',
    tech: ['Riverpod', 'Flutter', 'Dart','Time APIs', 'Custom Typography'],
    icon: '🌍',
    backgroundColor: 'bg-gradient-to-br from-gray-900 to-gray-950',
    screenshots: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-G42BvEAVTjkpQn5TYv87xXma0OOw5C.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-D9H2CdYddGopu8njmwa2axJs24ZzVZ.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-D9H2CdYddGopu8njmwa2axJs24ZzVZ.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-kMA4Lf1Of2UEvZ5dWJ89r4bOgaUHsh.png',
    ],
    link: 'https://github.com/Anees03100',
  },
]

export function ProjectsSection() {
  const { tr } = useSite()
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null)

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 font-display text-center text-foreground">
            {tr('projects.title' as any)}
          </h2>
        </ScrollReveal>

        {/* Projects Grid */}
        <ScrollReveal>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  icon={project.icon}
                  name={project.name}
                  description={project.description}
                  backgroundColor={project.backgroundColor}
                  tech={project.tech}
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </motion.div>
        </ScrollReveal>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={{
            name: selectedProject.name,
            category: selectedProject.category,
            description: selectedProject.description,
            extendedDescription: selectedProject.extendedDescription,
            tech: selectedProject.tech,
            screenshots: selectedProject.screenshots,
            icon: selectedProject.icon,
          }}
        />
      )}
    </section>
  )
}
