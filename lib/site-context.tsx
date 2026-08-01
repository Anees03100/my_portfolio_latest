'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { translations, Language, TranslationKey } from './translations'

interface SiteContextType {
  language: Language
  theme: 'dark' | 'light'
  showCursor: boolean
  setLanguage: (lang: Language) => void
  toggleTheme: () => void
  setShowCursor: (show: boolean) => void
  tr: (key: TranslationKey, params?: Record<string, string>) => string
}

const SiteContext = createContext<SiteContextType | undefined>(undefined)

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [showCursor, setShowCursor] = useState(true)

  // Initialize from localStorage and system preferences
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null

    if (savedLanguage && translations[savedLanguage]) {
      setLanguageState(savedLanguage)
    }

    if (savedTheme) {
      setTheme(savedTheme)
      applyTheme(savedTheme)
    } else {
      // Use system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
      applyTheme(prefersDark ? 'dark' : 'light')
    }

    // Check for touch device
    const isTouchDevice = () => {
      return (
        (typeof window !== 'undefined' && window.ontouchstart !== undefined) ||
        (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0)
      )
    }
    setShowCursor(!isTouchDevice())
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
    if (lang === 'ar' || lang === 'ur') {
      document.documentElement.dir = 'rtl'
    } else {
      document.documentElement.dir = 'ltr'
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  }

  const applyTheme = (newTheme: 'dark' | 'light') => {
    const html = document.documentElement
    if (newTheme === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }

  const tr = (key: TranslationKey, params?: Record<string, string>): string => {
    const dict = translations[language]
    let text = (dict[key] as string) || key

    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        text = text.replace(`{${k}}`, v)
      })
    }

    return text
  }

  return (
    <SiteContext.Provider
      value={{
        language,
        theme,
        showCursor,
        setLanguage,
        toggleTheme,
        setShowCursor,
        tr,
      }}
    >
      {children}
    </SiteContext.Provider>
  )
}

export function useSite() {
  const context = useContext(SiteContext)
  if (!context) {
    // Return default values if context is not available (during SSR or before hydration)
    return {
      language: 'en' as Language,
      theme: 'dark' as const,
      showCursor: true,
      setLanguage: () => {},
      toggleTheme: () => {},
      setShowCursor: () => {},
      tr: (key: TranslationKey) => key,
    }
  }
  return context
}
