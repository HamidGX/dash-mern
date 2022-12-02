import Grafix from './graphics/Grafix'

const Graficas = () => {
	return (
		<>
			<div className='p-5 bg-white shadow rounded-lg'>
				<div class='grid overflow-hidden grid-cols-3 grid-rows-4 gap-6'>
					<div class='box row-span-2'>
						<Grafix />
					</div>
					<div class='box row-span-2'>
						<Grafix />
					</div>
					<div class='box row-span-2'>
						<Grafix />
					</div>
					<div class='box row-span-2'>
						<Grafix />
					</div>
					<div class='box row-span-2'>
						<Grafix />
					</div>
					<div class='box row-span-2'>
						<Grafix />
					</div>
				</div>
			</div>
		</>
	)
}

export default Graficas
