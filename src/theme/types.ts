/**
 * Theme types and interfaces
 */

import type { Tokens } from '../tokens'

export type ThemeMode = 'light' | 'dark' | 'system'

export interface Theme extends Tokens {
  mode: 'light' | 'dark'
}

export interface ThemeContextValue {
  theme: Theme
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
  toggleMode: () => void
}

export interface ThemeProviderProps {
  children: React.ReactNode
  defaultMode?: ThemeMode
  theme?: Partial<Theme>
}

