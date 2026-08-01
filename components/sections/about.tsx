'use client'

import { motion } from 'framer-motion'
import { useSite } from '@/lib/site-context'
import { ScrollReveal } from '@/components/scroll-reveal'

export function AboutSection() {
  const { tr } = useSite()

  const codeLines = [
    'class MuhammadAnees {',
    '  final String role = "Flutter Dev";',
    '  final years = 1;',
    '  final List<String> shipped = [',
    '    "TraceIt", "UniFlow", "SecondUp", "Meridian"',
    '  ];',
    '  final passion = ∞;',
    '}',
  ]

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <ScrollReveal direction="left">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display text-foreground">
                {tr('about.title' as any)}
              </h2>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {tr('about.description' as any)}
              </p>

              <motion.div
                className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent text-accent text-sm font-semibold mb-8"
                whileHover={{ scale: 1.05 }}
              >
                 {tr('about.studying' as any)}
              </motion.div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-12">
                {[
                  { label: 'about.metric1', value: '4+' },
                  { label: 'about.metric2', value: '∞' },
                  { label: 'about.metric3', value: '60' },
                ].map((metric, i) => (
                  <motion.div
                    key={i}
                    className="text-center p-4 rounded-lg bg-card border border-border hover:border-accent transition-colors duration-200"
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <p className="text-2xl font-bold text-accent mb-2">{metric.value}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{tr(metric.label as any)}</p>
                  </motion.div>
                ))}
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[1, 2, 3].map((_, i) => (
                  <motion.div
                    key={i}
                    className="p-4 rounded-lg bg-accent/5 border border-accent/20 hover:border-accent hover:bg-accent/10 transition-all duration-200"
                    whileHover={{ y: -5 }}
                  >
                    <h4 className="font-semibold text-foreground mb-2">
                      {tr(`about.highlight${i + 1}` as any)}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Code Window */}
          <ScrollReveal direction="right">
            <motion.div
              className="relative rounded-lg overflow-hidden bg-card border border-border"
              whileHover={{ y: -5 }}
            >
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-accent/10 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs text-muted-foreground ml-auto font-mono">profile.dart</span>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm md:text-base overflow-x-auto">
                <div className="space-y-2">
                  {codeLines.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center"
                    >
                      <span className="text-muted-foreground mr-4 select-none">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-foreground">
                        {line.split('').map((char, j) => (
                          <motion.span
                            key={j}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 + j * 0.02 }}
                            className={
                              char === '"' || char === "'" ? 'text-green-500' :
                              ['final', 'class', 'String', 'List'].some(keyword => line.includes(keyword)) ? 'text-blue-400' :
                              char === '=' ? 'text-accent' :
                              char === ';' ? 'text-accent' : ''
                            }
                          >
                            {char}
                          </motion.span>
                        ))}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
