import { useParams } from 'react-router-dom'
import ImgCheck from '../assets/check.png'

export default function MsgVote() {
	let { name } = useParams()

	return (
		<>
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
