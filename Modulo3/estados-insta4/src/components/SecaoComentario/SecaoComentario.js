import React, { useState } from 'react'
import './style.css'
import { CampoPost } from '../../style'

export function SecaoComentario(props) {

	const [Postagens, SetPostagens] = useState("Comentario")

	return (
		<div className='CommentContainer'>
			<div className='PostsCamp'>
				<CampoPost>
					<ul>{Postagens.map(item =><p>{item}</p>)}</ul>
				</CampoPost>
			</div>
			<div className='CampoPostEntradas'>
			<input className='InputComentario'
				placeholder={'Comentário'}
				value={props.resposta}
				onChange={props.onChangeComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
			</div>
			
		</div>
	)
}