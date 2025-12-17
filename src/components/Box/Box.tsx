/**
 * Box component - A flexible layout primitive
 * Provides a foundation for building layouts with consistent spacing and styling
 */

import React from 'react'
import './index.scss'
import type { BoxProps } from './types'

/**
 * Converts spacing value to CSS value
 */
const getSpacingValue = (value: BoxProps['p']): string => {
  if (value === undefined) return ''
  if (typeof value === 'number') {
    return `var(--spacing-${value})`
  }
  return `var(--spacing-${value})`
}

/**
 * Box component - A flexible layout primitive
 */
export const Box: React.FC<BoxProps> = ({
  as: Component = 'div',
  children,
  display,
  p,
  pt,
  pr,
  pb,
  pl,
  px,
  py,
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  width,
  height,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  backgroundColor,
  color,
  borderRadius,
  borderWidth,
  borderColor,
  borderStyle,
  boxShadow,
  flexDirection,
  flexWrap,
  alignItems,
  justifyContent,
  gap,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  gridTemplateColumns,
  gridTemplateRows,
  gridColumn,
  gridRow,
  position,
  top,
  right,
  bottom,
  left,
  zIndex,
  overflow,
  overflowX,
  overflowY,
  style,
  className,
  id,
  'data-testid': testId,
  ...rest
}) => {
  // Build inline styles from props
  const inlineStyles: React.CSSProperties = {
    ...style,
  }

  // Display
  if (display) inlineStyles.display = display

  // Padding
  if (p) inlineStyles.padding = getSpacingValue(p)
  if (pt) inlineStyles.paddingTop = getSpacingValue(pt)
  if (pr) inlineStyles.paddingRight = getSpacingValue(pr)
  if (pb) inlineStyles.paddingBottom = getSpacingValue(pb)
  if (pl) inlineStyles.paddingLeft = getSpacingValue(pl)
  if (px) {
    inlineStyles.paddingLeft = getSpacingValue(px)
    inlineStyles.paddingRight = getSpacingValue(px)
  }
  if (py) {
    inlineStyles.paddingTop = getSpacingValue(py)
    inlineStyles.paddingBottom = getSpacingValue(py)
  }

  // Margin
  if (m) inlineStyles.margin = getSpacingValue(m)
  if (mt) inlineStyles.marginTop = getSpacingValue(mt)
  if (mr) inlineStyles.marginRight = getSpacingValue(mr)
  if (mb) inlineStyles.marginBottom = getSpacingValue(mb)
  if (ml) inlineStyles.marginLeft = getSpacingValue(ml)
  if (mx) {
    inlineStyles.marginLeft = getSpacingValue(mx)
    inlineStyles.marginRight = getSpacingValue(mx)
  }
  if (my) {
    inlineStyles.marginTop = getSpacingValue(my)
    inlineStyles.marginBottom = getSpacingValue(my)
  }

  // Dimensions
  if (width !== undefined) inlineStyles.width = width
  if (height !== undefined) inlineStyles.height = height
  if (maxWidth !== undefined) inlineStyles.maxWidth = maxWidth
  if (maxHeight !== undefined) inlineStyles.maxHeight = maxHeight
  if (minWidth !== undefined) inlineStyles.minWidth = minWidth
  if (minHeight !== undefined) inlineStyles.minHeight = minHeight

  // Colors
  if (backgroundColor) inlineStyles.backgroundColor = backgroundColor
  if (color) inlineStyles.color = color

  // Borders
  if (borderRadius) {
    inlineStyles.borderRadius = `var(--border-radius-${borderRadius})`
  }
  if (borderWidth) {
    inlineStyles.borderWidth = `var(--border-width-${borderWidth})`
  }
  if (borderColor) inlineStyles.borderColor = borderColor
  if (borderStyle) inlineStyles.borderStyle = borderStyle

  // Shadows
  if (boxShadow) {
    inlineStyles.boxShadow = `var(--shadow-${boxShadow})`
  }

  // Flexbox
  if (flexDirection) inlineStyles.flexDirection = flexDirection
  if (flexWrap) inlineStyles.flexWrap = flexWrap
  if (alignItems) inlineStyles.alignItems = alignItems
  if (justifyContent) inlineStyles.justifyContent = justifyContent
  if (gap !== undefined) inlineStyles.gap = getSpacingValue(gap)
  if (flex !== undefined) inlineStyles.flex = flex
  if (flexGrow !== undefined) inlineStyles.flexGrow = flexGrow
  if (flexShrink !== undefined) inlineStyles.flexShrink = flexShrink
  if (flexBasis !== undefined) inlineStyles.flexBasis = flexBasis

  // Grid
  if (gridTemplateColumns) inlineStyles.gridTemplateColumns = gridTemplateColumns
  if (gridTemplateRows) inlineStyles.gridTemplateRows = gridTemplateRows
  if (gridColumn) inlineStyles.gridColumn = gridColumn
  if (gridRow) inlineStyles.gridRow = gridRow

  // Position
  if (position) inlineStyles.position = position
  if (top !== undefined) inlineStyles.top = top
  if (right !== undefined) inlineStyles.right = right
  if (bottom !== undefined) inlineStyles.bottom = bottom
  if (left !== undefined) inlineStyles.left = left
  if (zIndex !== undefined) inlineStyles.zIndex = zIndex

  // Overflow
  if (overflow) inlineStyles.overflow = overflow
  if (overflowX) inlineStyles.overflowX = overflowX
  if (overflowY) inlineStyles.overflowY = overflowY

  // Build className
  const classes = ['pindorama-box']
  if (className) classes.push(className)

  return (
    <Component
      className={classes.join(' ')}
      style={inlineStyles}
      id={id}
      data-testid={testId}
      {...rest}>
      {children}
    </Component>
  )
}

