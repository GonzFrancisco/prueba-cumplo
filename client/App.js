import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useLocalStorge } from './Hooks/useLocalStorge'
import { POST_VOTE, GET_WINNER } from './config/env'
import './App.scss'
import {
	Splash,
	TopBar,
	CandidatesList,
	MsgVote,
	TimeOut,
	Waiting,
} from './components'

function App() {
	const [splash, setSplash] = useLocalStorge('splash', true)
	const [vote, setVote] = useLocalStorge('vote', false)
	const [timeout, setTimeout] = useLocalStorge('timeout', false)
	const [winner, setWinner] = useLocalStorge('winner', {})

	const voting = (voteID, name) => {
		fetch(POST_VOTE, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ id: voteID }),
		})
			.then(response => response.json())
			.then(data => {
				setVote(true)
			})
			.catch(e => console.error(e))
	}

	const evalTime = () => {
		fetch(GET_WINNER, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(response => response.json())
			.then(data => {
				setWinner(data)
				setTimeout(true)
			})
			.catch(e => console.error(e))
	}

	const stopSplash = () => {
		setSplash(false)
	}

	return (
		<BrowserRouter>
			{splash ? (
				<Splash stop={stopSplash} />
			) : (
				<>
					<TopBar timeout={evalTime} />
					{!timeout ? (
						<Switch>
							<Route path="/voted/:name" component={MsgVote} />
							<Route path="/waiting" component={Waiting} />
							<Route path="/">
								{!vote ? <CandidatesList vote={voting} /> : <Waiting />}
							</Route>
						</Switch>
					) : (
						<TimeOut winner={winner} />
					)}
				</>
			)}
		</BrowserRouter>
	)
}

export default App
