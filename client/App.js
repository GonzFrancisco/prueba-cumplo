import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { TopBar, CandidatesList, MsgVote, TimeOut, Waiting } from './components'
import './App.scss'

function App() {
	return (
		<BrowserRouter>
			<TopBar />
			<Switch>
				<Route path="/voted/:name" component={MsgVote} />
				<Route path="/waiting" component={Waiting} />
				<Route path="/timeout" component={TimeOut} />
				<Route path="/" component={CandidatesList} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
