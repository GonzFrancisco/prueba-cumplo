import { Icon } from '@iconify/react'

export default function Waiting(props) {
	let animate = props.animate === undefined ? 'animated' : ''

	return (
		<div className={`${animate} messages waiting`}>
			<div className="title">
				<div className="text">¡Ya votaste!</div>
				<Icon className="icon" icon="emojione:ok-hand" />
			</div>
			<div className="content">Ahora espera los resultados</div>
		</div>
	)
}
