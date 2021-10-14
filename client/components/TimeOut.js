export default function TimeOut(props) {
	const { name, store, votes } = props.winner
	return (
		<div className="messages timeout">
			<div className="pretitle">El empleado del mes es</div>
			<div className="title">{name}</div>
			<div className="location">{store}</div>
			<div className="votes">
				con
				<div className="vote">
					<span className="numbers">{votes}</span>
					{votes > 1 ? 'votos' : 'voto'}
				</div>
			</div>
			<div className="commet">¡Felicidades!</div>
		</div>
	)
}
