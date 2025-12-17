/**
 * Design tokens index
 * Central export point for all design system tokens
 */

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

