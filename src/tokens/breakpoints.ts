/**
 * Breakpoint tokens for responsive design
 * Defines screen size breakpoints for mobile-first design
 */

export const breakpoints = {
  // Mobile-first breakpoints (min-width)
  sm: '640px',   // Small devices (landscape phones)
  md: '768px',   // Medium devices (tablets)
  lg: '1024px',  // Large devices (desktops)
  xl: '1280px',  // Extra large devices (large desktops)
  '2xl': '1536px', // 2X Extra large devices (larger desktops)
} as const

// Helper function to create media queries
export const mediaQuery = {
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  '2xl': `@media (min-width: ${breakpoints['2xl']})`,
} as const

// Max-width breakpoints (for max-width queries)
export const maxBreakpoints = {
  sm: '639px',
  md: '767px',
  lg: '1023px',
  xl: '1279px',
  '2xl': '1535px',
} as const

// Helper function to create max-width media queries
export const maxMediaQuery = {
  sm: `@media (max-width: ${maxBreakpoints.sm})`,
  md: `@media (max-width: ${maxBreakpoints.md})`,
  lg: `@media (max-width: ${maxBreakpoints.lg})`,
  xl: `@media (max-width: ${maxBreakpoints.xl})`,
  '2xl': `@media (max-width: ${maxBreakpoints['2xl']})`,
} as const

// Type export for TypeScript
export type Breakpoints = typeof breakpoints

