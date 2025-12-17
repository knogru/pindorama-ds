/**
 * Spacing tokens for the design system
 * Provides a consistent spacing scale based on 4px base unit
 */

// Base spacing unit (4px)
const baseUnit = 4

// Generate spacing scale from 0 to 64 (0px to 256px)
const generateSpacing = () => {
  const spacing: Record<string, string> = {
    0: '0',
  }

  // Generate spacing values: 1-64 (4px - 256px)
  for (let i = 1; i <= 64; i++) {
    spacing[i] = `${i * baseUnit}px`
  }

  return spacing
}

export const spacing = {
  ...generateSpacing(),
  // Semantic spacing names for common use cases
  xs: '4px',      // 1 unit
  sm: '8px',      // 2 units
  md: '12px',     // 3 units
  base: '16px',   // 4 units
  lg: '24px',     // 6 units
  xl: '32px',     // 8 units
  '2xl': '48px',  // 12 units
  '3xl': '64px',  // 16 units
  '4xl': '96px',  // 24 units
  '5xl': '128px', // 32 units
} as const

// Type export for TypeScript
export type Spacing = typeof spacing

