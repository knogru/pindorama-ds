/**
 * Box component types
 */

import type { ReactNode, CSSProperties } from 'react'

export type SpacingValue =
  | '0'
  | 'xs'
  | 'sm'
  | 'md'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | number

export type DisplayValue =
  | 'block'
  | 'inline-block'
  | 'inline'
  | 'flex'
  | 'inline-flex'
  | 'grid'
  | 'inline-grid'
  | 'none'

export type FlexDirectionValue =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'

export type FlexWrapValue = 'nowrap' | 'wrap' | 'wrap-reverse'

export type AlignItemsValue =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'stretch'

export type JustifyContentValue =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export type GapValue = SpacingValue

export interface BoxProps {
  /**
   * Content to render inside the Box
   */
  children?: ReactNode

  /**
   * HTML element to render (default: 'div')
   */
  as?: keyof JSX.IntrinsicElements

  /**
   * CSS display property
   */
  display?: DisplayValue

  /**
   * Padding (uses spacing tokens)
   */
  p?: SpacingValue
  /**
   * Padding top
   */
  pt?: SpacingValue
  /**
   * Padding right
   */
  pr?: SpacingValue
  /**
   * Padding bottom
   */
  pb?: SpacingValue
  /**
   * Padding left
   */
  pl?: SpacingValue
  /**
   * Padding horizontal (left and right)
   */
  px?: SpacingValue
  /**
   * Padding vertical (top and bottom)
   */
  py?: SpacingValue

  /**
   * Margin (uses spacing tokens)
   */
  m?: SpacingValue
  /**
   * Margin top
   */
  mt?: SpacingValue
  /**
   * Margin right
   */
  mr?: SpacingValue
  /**
   * Margin bottom
   */
  mb?: SpacingValue
  /**
   * Margin left
   */
  ml?: SpacingValue
  /**
   * Margin horizontal (left and right)
   */
  mx?: SpacingValue
  /**
   * Margin vertical (top and bottom)
   */
  my?: SpacingValue

  /**
   * Width
   */
  width?: string | number
  /**
   * Height
   */
  height?: string | number
  /**
   * Max width
   */
  maxWidth?: string | number
  /**
   * Max height
   */
  maxHeight?: string | number
  /**
   * Min width
   */
  minWidth?: string | number
  /**
   * Min height
   */
  minHeight?: string | number

  /**
   * Background color (uses color tokens)
   */
  backgroundColor?: string
  /**
   * Text color (uses color tokens)
   */
  color?: string

  /**
   * Border radius (uses border tokens)
   */
  borderRadius?: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'
  /**
   * Border width
   */
  borderWidth?: 'none' | 'thin' | 'base' | 'medium' | 'thick'
  /**
   * Border color
   */
  borderColor?: string
  /**
   * Border style
   */
  borderStyle?: 'none' | 'solid' | 'dashed' | 'dotted'

  /**
   * Box shadow (uses shadow tokens)
   */
  boxShadow?: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | 'inner'

  /**
   * Flexbox properties
   */
  flexDirection?: FlexDirectionValue
  flexWrap?: FlexWrapValue
  alignItems?: AlignItemsValue
  justifyContent?: JustifyContentValue
  gap?: GapValue
  flex?: number | string
  flexGrow?: number
  flexShrink?: number
  flexBasis?: string | number

  /**
   * Grid properties
   */
  gridTemplateColumns?: string
  gridTemplateRows?: string
  gridColumn?: string
  gridRow?: string

  /**
   * Position
   */
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'
  top?: string | number
  right?: string | number
  bottom?: string | number
  left?: string | number
  zIndex?: number

  /**
   * Overflow
   */
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto'
  overflowX?: 'visible' | 'hidden' | 'scroll' | 'auto'
  overflowY?: 'visible' | 'hidden' | 'scroll' | 'auto'

  /**
   * Additional CSS properties
   */
  style?: CSSProperties

  /**
   * CSS class name
   */
  className?: string

  /**
   * HTML id
   */
  id?: string

  /**
   * Test id for testing
   */
  'data-testid'?: string
}

