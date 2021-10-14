import { useEffect } from 'react'

export default function Splash(props) {
	useEffect(() => {
		let timeID = window.setTimeout(() => {
			props.stop()
			window.clearTimeout(timeID)
		}, 1500)
	}, [])

	return (
		<div className="splash">
			<div className="logo"></div>
		</div>
	)
}
