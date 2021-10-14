import { Icon } from '@iconify/react'
export default function Waiting() {
	return (
		<div className="messages waiting">
			<div className="title">
				<div className="text">¡Ya votaste!</div>
				<Icon className="icon" icon="emojione:ok-hand" />
			</div>
			<div className="content">Ahora espera los resultados</div>
		</div>
	)
}
