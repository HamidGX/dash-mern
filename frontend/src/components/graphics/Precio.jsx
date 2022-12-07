import { Pie } from 'react-chartjs-2'
import datalabels from 'chartjs-plugin-datalabels'
import { useState, useEffect } from 'react'
import clienteAxios from '../../config/clienteAxios'

import {
	Chart as ChartJS,
	ArcElement,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
} from 'chart.js'

ChartJS.register(
	ArcElement,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
	datalabels
)
const obtenerCorreo = () => {
	const [opinion, setOpinion] = useState([])
	useEffect(() => {
		const obtenerOpinion = async () => {
			const { data } = await clienteAxios('/opiniones/opinion')
			setOpinion(data)
			console.log(data)
		}
		obtenerOpinion()
	}, [])
	return opinion
}

const Precio = () => {
	const opiniones = obtenerCorreo()

	var options = {
		plugins: {
			datalabels: {
				formatter: (value, ctx) => {
					let datasets = ctx.chart.data.datasets

					if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
						let sum = datasets[0].data.reduce((a, b) => a + b, 0)
						let percentage = Math.round((value / sum) * 100) + '%'
						return percentage
					} else {
						return percentage
					}
				},
				color: 'red',
			},
		},
	}

	const data = {
		Title: 'Si',
		labels: opiniones.map((type) => type.tipo),
		datasets: [
			{
				label: '# of Votes',
				data: opiniones.map((opinion) => opinion.cantidad),
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
				],
				borderWidth: 1,
			},
		],
	}
	return (
		<>
			<h1 className='text-indigo-600 font-black text-3xl text-center pb-5'>
				Encuestas de Precio
			</h1>
			<Pie data={data} options={options} />
		</>
	)
}

export default Precio
