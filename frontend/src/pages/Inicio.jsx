import Cards from '../components/Cards'
import { Table } from '../components/tables/Table'
import { TableReseña } from '../components/tables/TableReseña'
import Mail from '../components/Mails'
import Grafix from '../components/graphics/Grafix'

const Inicio = () => {
	return (
		<>
			<div className='pt-16 md:pt-24 p-10 md:p-14'>
				<div className='pb-5'>
					<Cards />
				</div>
				<div>
					<div className='pb-10'>
						<Table />
					</div>
					<div>
						<TableReseña />
					</div>
				</div>

				<div>
					<Mail />
				</div>

				<div className='w-full md:grid md:grid-cols-3 grid-rows-3 gap-2'>
					<div>
						<Grafix />
					</div>
				</div>
			</div>
		</>
	)
}

export default Inicio
