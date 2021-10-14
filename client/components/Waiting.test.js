import { render } from '@testing-library/react'
import Waiting from './Waiting'

describe('Waiting', () => {
	test('render content', () => {
		const component = render(<Waiting />)

		expect(component.container).toHaveTextContent('Ya votaste')
	})
})
