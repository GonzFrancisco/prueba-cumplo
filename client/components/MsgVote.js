import { useState, useEffect } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import ImgCheck from '../assets/check.png'

export default function MsgVote() {
	const [closed, setClosed] = useState(false)
	let { name } = useParams()

	useEffect(() => {
		let timeID = window.setTimeout(() => {
			setClosed(true)
			window.clearTimeout(timeID)
		}, 1800)
	}, [])

	return (
		<>
			{closed ? <Redirect to="/waiting" /> : null}
			<div className="messages animated msgvote">
				<img src={ImgCheck} alt="Vote Success" />
				<div className="title">¡Gracias por tu Voto!</div>
				<div className="content">
					esperamos que a <span className="name">{name}</span> <br /> le vaya
					muy bien
				</div>
			</div>
		</>
	)
}
