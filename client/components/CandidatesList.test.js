import { screen, render } from '@testing-library/react'
import CandidatesList from './CandidatesList'

describe('CandidatesList', () => {
	test('render content', () => {
		const component = render(<CandidatesList />)
		expect(component.container).toHaveTextContent(
			'No se han encontrado candidatos'
		)
	})

	test('must display a text', () => {
		render(<CandidatesList />)
		expect(screen.queryByText(/El empleado del mes/i)).toBeInTheDocument()
	})
})
