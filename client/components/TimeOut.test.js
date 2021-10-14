import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import TimeOut from './TimeOut'

describe('TimeOut', () => {
	test('render content', () => {
		const winner = {
			name: 'Cumplo',
			store: 'Santiago - Chile',
			votes: 1,
		}
		const component = render(<TimeOut winner={winner} />)

		expect(component.container).toHaveTextContent('El empleado del mes')
		expect(component.container).toHaveTextContent('Cumplo')
	})
})
TimeOut
