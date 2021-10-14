import { useState, useEffect } from 'react'
import { GET_CADIDATES } from '../config/env'
import { Icon } from '@iconify/react'
import Avatar from '../assets/default-avatar.jpg'
import { Link } from 'react-router-dom'

export default function CandidatesList(props) {
	const [data, setData] = useState([])

	useEffect(() => {
		fetch(GET_CADIDATES, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(response => response.json())
			.then(data => {
				setData(data)
			})
			.catch(e => console.error(e))
	}, [])

	return (
		<div className="container">
			<div className="header">
				<h1>El empleado del mes</h1>
				<h4>Los nominados son</h4>
			</div>
			{data.length !== 0 ? (
				<div className="list">
					<h3>Colaboradores</h3>
					{data.map(c => (
						<div className="item" key={c.id}>
							<div className="avatar">
								<img src={Avatar} alt={`Foto - ${c.name}`} />
							</div>
							<div className="name">{c.name}</div>
							<div className="location">{c.store}</div>
							<div className="votes">
								<Icon className="icon" icon="bx:bxs-like" />
								{c.votes} votos
							</div>
							<div className="btn-votes">
								<Link
									to={`/voted/${c.name.split(' ')[0]}`}
									className="button"
									onClick={() => props.vote(c.id)}
								>
									Votar
								</Link>
							</div>
						</div>
					))}
				</div>
			) : (
				<p>No se han encontrado candidatos</p>
			)}
		</div>
	)
}
