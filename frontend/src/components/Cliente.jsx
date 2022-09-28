import { useState, useEffect } from 'react'
import clienteAxios from '../config/clienteAxios'

const obtenerCorreo = () => {
	const [cliente, setClientes] = useState([])
	useEffect(() => {
		const obtenerCliente = async () => {
			const { data } = await clienteAxios('/clientes/correos')
			setClientes(data)
			console.log(data)
		}
		obtenerCliente()
	}, [])
	return cliente
}

const Cliente = () => {
	const cliente = obtenerCorreo()

	return (
		<>
			<div className='col-md-12'>
				<table className='table table-bordered'>
					<thead className='thead-dark'>
						<tr>
							<th scope='col'>ID</th>
							<th scope='col'>Email</th>
							<th scope='col'>Stock</th>
						</tr>
					</thead>
					<tbody>
						{cliente.map((item) => (
							<tr key={item._id}>
								<td>{item._id}</td>
								<td>{item.first_name}</td>
								<td>{item.email}</td>
								<td></td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default Cliente
