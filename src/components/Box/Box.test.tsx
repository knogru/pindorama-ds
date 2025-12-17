/**
 * Box component tests
 */

import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Box } from './'

describe('Box', () => {
  it('renders with default props', () => {
    render(<Box data-testid="box">Test content</Box>)
    const box = screen.getByTestId('box')
    expect(box).toBeInTheDocument()
    expect(box).toHaveTextContent('Test content')
  })

  it('renders as a different HTML element', () => {
    render(
      <Box as="section" data-testid="box">
        Section content
      </Box>
    )
    const box = screen.getByTestId('box')
    expect(box.tagName).toBe('SECTION')
  })

  it('applies padding prop', () => {
    render(
      <Box p="md" data-testid="box">
        Content
      </Box>
    )
    const box = screen.getByTestId('box')
    expect(box).toHaveStyle({ padding: 'var(--spacing-md)' })
  })

  it('applies margin prop', () => {
    render(
      <Box m="lg" data-testid="box">
        Content
      </Box>
    )
    const box = screen.getByTestId('box')
    expect(box).toHaveStyle({ margin: 'var(--spacing-lg)' })
  })

  it('applies horizontal padding', () => {
    render(
      <Box px="base" data-testid="box">
        Content
      </Box>
    )
    const box = screen.getByTestId('box')
    expect(box).toHaveStyle({
      paddingLeft: 'var(--spacing-base)',
      paddingRight: 'var(--spacing-base)',
    })
  })

  it('applies vertical margin', () => {
    render(
      <Box my="sm" data-testid="box">
        Content
      </Box>
    )
    const box = screen.getByTestId('box')
    expect(box).toHaveStyle({
      marginTop: 'var(--spacing-sm)',
      marginBottom: 'var(--spacing-sm)',
    })
  })

  it('applies backgroundColor', () => {
    render(
      <Box backgroundColor="fff" data-testid="box">
        Content
      </Box>
    )
    const box = screen.getByTestId('box')
    expect(box).toHaveStyle({ backgroundColor: 'fff' })
  })

  it('applies borderRadius', () => {
    render(
      <Box borderRadius="lg" data-testid="box">
        Content
      </Box>
    )
    const box = screen.getByTestId('box')
    expect(box).toHaveStyle({ borderRadius: 'var(--border-radius-lg)' })
  })

  it('applies boxShadow', () => {
    render(
      <Box boxShadow="md" data-testid="box">
        Content
      </Box>
    )
    const box = screen.getByTestId('box')
    expect(box).toHaveStyle({ boxShadow: 'var(--shadow-md)' })
  })

  it('applies display flex', () => {
    render(
      <Box display="flex" data-testid="box">
        Content
      </Box>
    )
    const box = screen.getByTestId('box')
    expect(box).toHaveStyle({ display: 'flex' })
  })

  it('applies flexbox properties', () => {
    render(
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        gap="md"
        data-testid="box">
        Content
      </Box>
    )
    const box = screen.getByTestId('box')
    expect(box).toHaveStyle({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--spacing-md)',
    })
  })

  it('applies width and height', () => {
    render(
      <Box width="200px" height="100px" data-testid="box">
        Content
      </Box>
    )
    const box = screen.getByTestId('box')
    expect(box).toHaveStyle({
      width: '200px',
      height: '100px',
    })
  })

  it('applies custom className', () => {
    render(
      <Box className="custom-class" data-testid="box">
        Content
      </Box>
    )
    const box = screen.getByTestId('box')
    expect(box).toHaveClass('pindorama-box', 'custom-class')
  })

  it('applies border properties', () => {
    render(
      <Box
        borderWidth="base"
        borderColor="blue"
        borderStyle="solid"
        data-testid="box">
        Content
      </Box>
    )
    const box = screen.getByTestId('box')
    expect(box).toHaveStyle({
      borderWidth: 'var(--border-width-base)',
      borderColor: 'blue',
      borderStyle: 'solid',
    })
  })

  it('merges custom style with computed styles', () => {
    render(
      <Box p="md" style={{ opacity: 0.5 }} data-testid="box">
        Content
      </Box>
    )
    const box = screen.getByTestId('box')
    expect(box).toHaveStyle({
      padding: 'var(--spacing-md)',
      opacity: '0.5',
    })
  })
})

