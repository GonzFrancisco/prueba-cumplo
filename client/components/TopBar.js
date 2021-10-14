import { useState, useEffect } from 'react'
import { GET_COUNTDOWN } from '../config/env'
import logo from '../assets/logocumplo-vertical.png'

export default function TopBar(props) {
	const [time, setTime] = useState(0)
	const [countdown, setCountdown] = useState({ minutes: '00', seconds: '00' })
	const [runtime, setRuntime] = useState(true)

	useEffect(() => {
		if (runtime) {
			let intervalId = window.setInterval(() => {
				fetch(GET_COUNTDOWN, {
					headers: {
						'Content-Type': 'application/json',
					},
				})
					.then(response => response.json())
					.then(data => {
						let seconds = parseInt(data.secondsLeft)
						seconds == 0 ? setRuntime(false) : null
						setTime(seconds)
						formatCountdown(seconds)
						window.clearInterval(intervalId)
					})
					.catch(e => {
						console.error(e)
					})
			}, 1000)
		} else {
			props.timeout()
		}
	}, [time])

	const formatCountdown = s => {
		let seconds = ('0' + Math.floor(s % 60)).slice(-2)
		let minutes = ('0' + Math.floor((s / 60) % 60)).slice(-2)
		setCountdown({ minutes, seconds })
	}

	return (
		<div className="topbar">
			<div className="container">
				<div className="logo">
					<img src={logo} alt="Logo" />
				</div>
				<div className="countdown">
					<div className="watch">{`${countdown.minutes}:${countdown.seconds}`}</div>
				</div>
			</div>
		</div>
	)
}
