import React from 'react'
import { useState, useEffect } from 'react'
import clienteAxios from '../src/config/clienteAxios'
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

import { Line } from 'react-chartjs-2'

ChartJS.register(
	ArcElement,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler
)

const obtenerOpinion = () => {
	const [chartData, setChartData] = useState({})

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await clienteAxios('/clientes/correos')
			setChartData({
				labels: data.map((item) => item.first_name),
				datasets: [
					{
						label: 'Titulo',
						data: data.map((item) => item.general),
						fill: true,
						borderColor: 'rgb(255,99,132)',
						backgroundColor: 'rgba(255,99,132,0.3)',
					},
				],
			})
		}
		fetchData()
	}, [])
	console.log(chartData)
}
const Grafi = () => {
	const chartData = obtenerOpinion()

	return (
		<>
			<div className='chart'>
				<Line
					data={chartData}
					options={{
						responsive: true,
						plugins: {
							legend: { position: 'top' },
							title: { display: true, text: 'hola' },
						},
					}}
				/>
			</div>
		</>
	)
}

export default Grafi
