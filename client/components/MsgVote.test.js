import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import MsgVote from './MsgVote'

describe('MsgVote', () => {
	test('render content', () => {
		const component = render(
			<BrowserRouter>
				<MsgVote />
			</BrowserRouter>
		)

		expect(component.container).toHaveTextContent('Gracias por tu Voto')
	})
})
