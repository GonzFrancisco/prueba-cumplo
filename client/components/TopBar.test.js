import { screen, render } from '@testing-library/react'
import TopBar from './TopBar'

describe('TopBar', () => {
	test('render content', () => {
		render(<TopBar />)

		expect(screen.getByAltText(/logo/i)).toBeInTheDocument()
	})
})
