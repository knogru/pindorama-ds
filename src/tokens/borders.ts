/**
 * Border tokens for the design system
 * Defines border radius and border widths
 */

export const borders = {
  // Border radius - rounded corners
  radius: {
    none: '0',
    sm: '0.125rem',   // 2px
    base: '0.25rem',  // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    '3xl': '1.5rem',  // 24px
    full: '9999px',   // Fully rounded (pill/circle)
  },

  // Border widths
  width: {
    none: '0',
    thin: '1px',
    base: '1px',
    medium: '2px',
    thick: '4px',
  },

  // Border styles
  style: {
    none: 'none',
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
  },
} as const

// Type export for TypeScript
export type Borders = typeof borders

