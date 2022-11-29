import MUIDataTable from 'mui-datatables'
import { useState, useEffect } from 'react'
import clienteAxios from '../../config/clienteAxios'

export const TableReseña = () => {
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
			name: 'first_name',
			label: 'NOMBRE',
		},
		{
			name: 'precio',
			label: 'PRECIO',
		},
		{
			name: 'personal',
			label: 'PERSONAL',
		},
		{
			name: 'limpieza',
			label: 'LIMPIEZA',
		},
		{
			name: 'recepcion',
			label: 'RECEPCION',
		},
		{
			name: 'general',
			label: 'GENERAL',
		},
		{
			name: 'medio',
			label: 'MEDIO',
		},
		{
			name: 'recomendacion',
			label: 'RECOMENDACION',
		},
		{
			name: 'mes ',
			label: 'MES',
		},
	]
	//4 - renderizamos la datatable
	return (
		<MUIDataTable
			title={'Opinion de los clientes'}
			data={clientes}
			columns={columns}
			options={options}
		/>
	)
}
