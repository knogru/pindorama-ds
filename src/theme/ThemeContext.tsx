/**
 * Theme Context and Provider
 */

import React, { createContext, useEffect, useState, useMemo } from 'react'
import { tokens } from '../tokens'
import type { ThemeContextValue, ThemeProviderProps, ThemeMode, Theme } from './types'

// Create the theme context
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

/**
 * Gets the system preference for color scheme
 */
const getSystemMode = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  }
  return 'light'
}

/**
 * Gets the resolved theme mode (converts 'system' to actual light/dark)
 */
const getResolvedMode = (mode: ThemeMode): 'light' | 'dark' => {
  return mode === 'system' ? getSystemMode() : mode
}

/**
 * ThemeProvider component
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultMode = 'system',
  theme: customTheme,
}) => {
  // Get initial mode from localStorage or use default
  const [mode, setModeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme-mode') as ThemeMode | null
      return stored || defaultMode
    }
    return defaultMode
  })

  // Resolve the actual theme mode (light or dark)
  const resolvedMode = useMemo(() => getResolvedMode(mode), [mode])

  // Listen for system preference changes
  useEffect(() => {
    if (mode !== 'system') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      // Force re-render when system preference changes
      setModeState('system')
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [mode])

  // Save mode to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme-mode', mode)
    }
  }, [mode])

  // Merge default tokens with custom theme
  const theme: Theme = useMemo(() => {
    const baseTheme: Theme = {
      ...tokens,
      mode: resolvedMode,
    }

    if (customTheme) {
      return {
        ...baseTheme,
        ...customTheme,
        mode: resolvedMode,
      }
    }

    return baseTheme
  }, [customTheme, resolvedMode])

  // Set mode function
  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode)
  }

  // Toggle between light and dark
  const toggleMode = () => {
    setModeState((current) => {
      if (current === 'light') return 'dark'
      if (current === 'dark') return 'light'
      // If system, toggle to opposite of current system preference
      return getSystemMode() === 'light' ? 'dark' : 'light'
    })
  }

  // Inject CSS variables for SCSS compatibility
  useEffect(() => {
    if (typeof document === 'undefined') return

    const root = document.documentElement

    // Inject color tokens as CSS variables
    Object.entries(theme.colors.primary).forEach(([key, value]) => {
      root.style.setProperty(`--color-primary-${key}`, value)
    })

    Object.entries(theme.colors.semantic.success).forEach(([key, value]) => {
      root.style.setProperty(`--color-success-${key}`, value)
    })

    Object.entries(theme.colors.semantic.error).forEach(([key, value]) => {
      root.style.setProperty(`--color-error-${key}`, value)
    })

    Object.entries(theme.colors.semantic.warning).forEach(([key, value]) => {
      root.style.setProperty(`--color-warning-${key}`, value)
    })

    Object.entries(theme.colors.semantic.info).forEach(([key, value]) => {
      root.style.setProperty(`--color-info-${key}`, value)
    })

    Object.entries(theme.colors.neutral.gray).forEach(([key, value]) => {
      root.style.setProperty(`--color-gray-${key}`, value)
    })

    root.style.setProperty('--color-white', theme.colors.neutral.white)
    root.style.setProperty('--color-black', theme.colors.neutral.black)

    // Inject spacing tokens
    Object.entries(theme.spacing).forEach(([key, value]) => {
      root.style.setProperty(`--spacing-${key}`, value)
    })

    // Inject typography tokens
    Object.entries(theme.typography.fontSize).forEach(([key, value]) => {
      root.style.setProperty(`--font-size-${key}`, value)
    })

    Object.entries(theme.typography.fontWeight).forEach(([key, value]) => {
      root.style.setProperty(`--font-weight-${key}`, value)
    })

    Object.entries(theme.typography.lineHeight).forEach(([key, value]) => {
      root.style.setProperty(`--line-height-${key}`, value)
    })

    // Inject border tokens
    Object.entries(theme.borders.radius).forEach(([key, value]) => {
      root.style.setProperty(`--border-radius-${key}`, value)
    })

    Object.entries(theme.borders.width).forEach(([key, value]) => {
      root.style.setProperty(`--border-width-${key}`, value)
    })

    // Inject shadow tokens
    Object.entries(theme.shadows).forEach(([key, value]) => {
      root.style.setProperty(`--shadow-${key}`, value)
    })

    // Inject theme mode
    root.style.setProperty('--theme-mode', resolvedMode)
    root.setAttribute('data-theme', resolvedMode)
  }, [theme, resolvedMode])

  const value: ThemeContextValue = useMemo(
    () => ({
      theme,
      mode,
      setMode,
      toggleMode,
    }),
    [theme, mode]
  )

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

export { ThemeContext }

