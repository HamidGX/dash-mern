import General from './graphics/General'
import Alberca from './graphics/Alberca'
import Limpieza from './graphics/Limpieza'
import Personal from './graphics/Personal'
import Precio from './graphics/Precio'
import Recepcion from './graphics/Recepcion'

const Graficas = () => {
	return (
		<>
			{' '}
			<h1 className='text-indigo-600 font-black text-3xl text-center pb-8'>
				Estadisticas de los servicios del Hotel
			</h1>
			<div className='p-5 bg-white shadow rounded-lg'>
				<div className='grid overflow-hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-4 gap-16'>
					<div className='box row-span-2'>
						<General />
					</div>
					<div className='box row-span-2'>
						<Alberca />
					</div>
					<div className='box row-span-2'>
						<Limpieza />
					</div>
					<div className='box row-span-2'>
						<Personal />
					</div>
					<div className='box row-span-2'>
						<Precio />
					</div>
					<div className='box row-span-2'>
						<Recepcion />
					</div>
				</div>
			</div>
		</>
	)
}

export default Graficas
