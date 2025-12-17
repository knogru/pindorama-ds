import { useState } from 'react'
import './styles/app.scss'

import viteLogo from './assets/brand/vite.svg'
import reactLogo from './assets/brand/react.svg'
import typescriptLogo from './assets/brand/typescript.svg'
import storybookLogo from './assets/brand/storybook.svg'
import sassLogo from './assets/brand/sass.svg'
import vitestLogo from './assets/brand/vitest.svg'

export const App = () => {
	const [count, setCount] = useState(0)

	return (
		<>
			<p>Hello World</p>
		</>
	)
}
