import type { Preview } from '@storybook/react'
import { ThemeProvider } from '../src/theme'
import React from 'react'

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story) =>
			React.createElement(
				ThemeProvider,
				{ children: React.createElement(Story) }
			),
	],
}

export default preview
