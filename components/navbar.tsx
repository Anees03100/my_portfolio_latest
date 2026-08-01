'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useSite } from '@/lib/site-context'
import { Button } from '@/components/ui/button'

const NAV_ITEMS = [
  { label: 'nav.about', href: '#about' },
  { label: 'nav.skills', href: '#skills' },
  { label: 'nav.projects', href: '#projects' },
  { label: 'nav.experience', href: '#experience' },
  { label: 'nav.contact', href: '#contact' },
]

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية' },
  { code: 'ur', label: 'اردو' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'zh', label: '中文' },
  { code: 'es', label: 'Español' },
  { code: 'tr', label: 'Türkçe' },
] as const

export function Navbar() {
  const { tr, toggleTheme, theme, language, setLanguage } = useSite()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showLangDropdown, setShowLangDropdown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-foreground via-accent to-accent bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            anees.dev
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground hover:text-accent transition-colors duration-200 font-medium"
                whileHover={{ y: -2 }}
              >
                {tr(item.label as any)}
              </motion.button>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-accent" />
              ) : (
                <Moon size={20} className="text-accent" />
              )}
            </motion.button>

            {/* Language Dropdown */}
            <div className="relative hidden sm:block">
              <motion.button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="px-3 py-2 hover:bg-muted rounded-lg transition-colors duration-200 text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                {language.toUpperCase()}
              </motion.button>
              <AnimatePresence>
                {showLangDropdown && (
                  <motion.div
                    className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div className="grid grid-cols-2 gap-2 p-2">
                      {LANGUAGES.map((lang) => (
                        <motion.button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code as any)
                            setShowLangDropdown(false)
                          }}
                          className={`px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                            language === lang.code
                              ? 'bg-accent text-background'
                              : 'hover:bg-muted'
                          }`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {lang.label}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block"
            >
              <Button
                onClick={() => handleNavClick('#contact')}
                className="bg-accent hover:opacity-90 text-background font-bold"
              >
                {tr('nav.hire' as any)}
              </Button>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="px-4 py-4 space-y-3">
                {NAV_ITEMS.map((item) => (
                  <motion.button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors duration-200"
                    whileHover={{ x: 4 }}
                  >
                    {tr(item.label as any)}
                  </motion.button>
                ))}
                <Button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full bg-accent hover:opacity-90 text-background font-bold"
                >
                  {tr('nav.hire' as any)}
                </Button>

                {/* Mobile Language Selector */}
                <div className="pt-2 border-t border-border">
                  <p className="text-sm text-muted-foreground px-4 py-2">Language</p>
                  <div className="grid grid-cols-2 gap-2 px-2">
                    {LANGUAGES.map((lang) => (
                      <motion.button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as any)
                          setIsOpen(false)
                        }}
                        className={`px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                          language === lang.code
                            ? 'bg-accent text-background'
                            : 'hover:bg-muted'
                        }`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {lang.label}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
