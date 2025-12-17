/**
 * Shadow tokens for the design system
 * Provides elevation system using box shadows
 */

export const shadows = {
  // Box shadows for elevation
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  none: 'none',
} as const

// Semantic shadow names for common use cases
export const elevation = {
  // No elevation
  none: shadows.none,
  
  // Low elevation (cards, inputs)
  low: shadows.sm,
  
  // Medium elevation (dropdowns, popovers)
  medium: shadows.md,
  
  // High elevation (modals, dialogs)
  high: shadows.lg,
  
  // Very high elevation (tooltips, floating elements)
  veryHigh: shadows.xl,
  
  // Maximum elevation
  maximum: shadows['2xl'],
} as const

// Type export for TypeScript
export type Shadows = typeof shadows
export type Elevation = typeof elevation

