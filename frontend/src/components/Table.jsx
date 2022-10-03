import MUIDataTable from 'mui-datatables'
import { useState, useEffect } from 'react'
import clienteAxios from '../config/clienteAxios'

export const Table = () => {
	//1 - configuramos Los hooks
	const [clientes, setClientes] = useState([])

	const getData = async () => {
		await clienteAxios('/clientes/correos').then((response) => {
			const data = response.data
			console.log(data)
			setClientes(data)
		})
	}

	useEffect(() => {
		getData()
	}, [])

	const options = {
		filterType: 'dropdown',
		responsive: 'standard',
		selectableRows: 'none',
	}

	//3 - Definimos las columns
	const columns = [
		{
			name: '_id',
			label: 'ID',
		},
		{
			name: 'first_name',
			label: 'Nombre',
		},
		{
			name: 'email',
			label: 'EMAIL',
		},
	]
	//4 - renderizamos la datatable
	return (
		<MUIDataTable
			title={'Lista de clientes'}
			data={clientes}
			columns={columns}
			options={options}
		/>
	)
}
