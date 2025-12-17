/**
 * Design tokens index
 * Central export point for all design system tokens
 */

import { colors } from './colors'
import { typography } from './typography'
import { spacing } from './spacing'
import { borders } from './borders'
import { breakpoints } from './breakpoints'
import { shadows, elevation } from './shadows'

// Re-export types and values
export { colors, type Colors } from './colors'
export { typography, type Typography } from './typography'
export { spacing, type Spacing } from './spacing'
export { borders, type Borders } from './borders'
export { breakpoints, mediaQuery, maxBreakpoints, maxMediaQuery, type Breakpoints } from './breakpoints'
export { shadows, elevation, type Shadows, type Elevation } from './shadows'

// Combined tokens object for convenience
export const tokens = {
  colors,
  typography,
  spacing,
  borders,
  breakpoints,
  shadows,
  elevation,
} as const

export type Tokens = typeof tokens

