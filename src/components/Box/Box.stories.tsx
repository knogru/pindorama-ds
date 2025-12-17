/**
 * Box component stories
 */

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Box } from './'

const meta: Meta<typeof Box> = {
  title: 'Primitives/Box',
  component: Box,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Box is a flexible layout primitive that provides a foundation for building layouts with consistent spacing and styling. It supports padding, margin, flexbox, grid, and many other CSS properties using design tokens.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['div', 'section', 'article', 'main', 'header', 'footer', 'aside', 'nav'],
      description: 'HTML element to render',
    },
    display: {
      control: 'select',
      options: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'grid', 'inline-grid', 'none'],
      description: 'CSS display property',
    },
    p: {
      control: 'select',
      options: ['0', 'xs', 'sm', 'md', 'base', 'lg', 'xl', '2xl', '3xl'],
      description: 'Padding (all sides)',
    },
    m: {
      control: 'select',
      options: ['0', 'xs', 'sm', 'md', 'base', 'lg', 'xl', '2xl', '3xl'],
      description: 'Margin (all sides)',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color',
    },
    borderRadius: {
      control: 'select',
      options: ['none', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl', 'full'],
      description: 'Border radius',
    },
    boxShadow: {
      control: 'select',
      options: ['none', 'sm', 'base', 'md', 'lg', 'xl', '2xl', 'inner'],
      description: 'Box shadow',
    },
  },
}

export default meta

type Story = StoryObj<typeof Box>

/**
 * Basic Box example
 */
export const Default: Story = {
  args: {
    children: 'This is a Box component',
    p: 'base',
    backgroundColor: 'var(--color-primary-100)',
    borderRadius: 'md',
  },
}

/**
 * Box with padding
 */
export const WithPadding: Story = {
  args: {
    children: 'Box with padding',
    p: 'lg',
    backgroundColor: 'var(--color-primary-200)',
    borderRadius: 'md',
  },
}

/**
 * Box with margin
 */
export const WithMargin: Story = {
  args: {
    children: 'Box with margin',
    m: 'lg',
    p: 'base',
    backgroundColor: 'var(--color-primary-200)',
    borderRadius: 'md',
  },
}

/**
 * Flexbox layout
 */
export const Flexbox: Story = {
  render: (): React.ReactElement => (
    <Box
      display="flex"
      gap="md"
      p="base"
      backgroundColor="var(--color-gray-100)"
      borderRadius="md">
      <Box p="sm" backgroundColor="var(--color-primary-500)" color="white" borderRadius="sm">
        Item 1
      </Box>
      <Box p="sm" backgroundColor="var(--color-primary-500)" color="white" borderRadius="sm">
        Item 2
      </Box>
      <Box p="sm" backgroundColor="var(--color-primary-500)" color="white" borderRadius="sm">
        Item 3
      </Box>
    </Box>
  ),
}

/**
 * Flexbox with alignment
 */
export const FlexboxAlignment: Story = {
  render: (): React.ReactElement => (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p="lg"
      backgroundColor="var(--color-gray-100)"
      borderRadius="md"
      height="200px">
      <Box p="sm" backgroundColor="var(--color-primary-500)" color="white" borderRadius="sm">
        Left
      </Box>
      <Box p="sm" backgroundColor="var(--color-primary-500)" color="white" borderRadius="sm">
        Center
      </Box>
      <Box p="sm" backgroundColor="var(--color-primary-500)" color="white" borderRadius="sm">
        Right
      </Box>
    </Box>
  ),
}

/**
 * Grid layout
 */
export const Grid: Story = {
  render: (): React.ReactElement => (
    <Box
      display="grid"
      gridTemplateColumns="repeat(3, 1fr)"
      gap="md"
      p="base"
      backgroundColor="var(--color-gray-100)"
      borderRadius="md">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Box
          key={i}
          p="base"
          backgroundColor="var(--color-primary-500)"
          color="white"
          borderRadius="sm"
          display="flex"
          alignItems="center"
          justifyContent="center">
          {i}
        </Box>
      ))}
    </Box>
  ),
}

/**
 * Box with shadow
 */
export const WithShadow: Story = {
  args: {
    children: 'Box with shadow',
    p: 'lg',
    backgroundColor: 'white',
    borderRadius: 'md',
    boxShadow: 'lg',
  },
}

/**
 * Box with border
 */
export const WithBorder: Story = {
  args: {
    children: 'Box with border',
    p: 'base',
    borderWidth: 'base',
    borderColor: 'var(--color-primary-500)',
    borderStyle: 'solid',
    borderRadius: 'md',
  },
}

/**
 * Responsive width
 */
export const ResponsiveWidth: Story = {
  args: {
    children: 'Responsive width box',
    p: 'base',
    backgroundColor: 'var(--color-primary-100)',
    borderRadius: 'md',
    maxWidth: '600px',
    mx: 'auto',
  },
}

/**
 * Semantic HTML elements
 */
export const SemanticElements: Story = {
  render: () => (
    <>
      <Box as="section" p="base" mb="md" backgroundColor="var(--color-gray-100)" borderRadius="md">
        <Box as="h2" mb="sm" color="var(--color-primary-700)">
          Section Title
        </Box>
        <Box as="p" color="var(--color-gray-700)">
          This is a section element with semantic HTML.
        </Box>
      </Box>
      <Box as="article" p="base" backgroundColor="var(--color-gray-100)" borderRadius="md">
        <Box as="h3" mb="sm" color="var(--color-primary-700)">
          Article Title
        </Box>
        <Box as="p" color="var(--color-gray-700)">
          This is an article element.
        </Box>
      </Box>
    </>
  ),
}

/**
 * Spacing scale demonstration
 */
export const SpacingScale: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="md">
      {(['xs', 'sm', 'md', 'base', 'lg', 'xl'] as const).map((size) => (
        <Box
          key={size}
          p={size}
          backgroundColor="var(--color-primary-100)"
          borderRadius="sm"
          borderWidth="thin"
          borderColor="var(--color-primary-300)"
          borderStyle="solid">
          Padding: {size}
        </Box>
      ))}
    </Box>
  ),
}


