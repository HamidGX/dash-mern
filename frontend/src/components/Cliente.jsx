import React from 'react'
import Cliente from '../../../backend/models/Cliente'
const Cliente = () => {
	const { nombre } = Cliente
	return <div>Cliente: {nombre}</div>
}

export default Cliente
