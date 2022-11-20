import Cards from '../components/Cards'
import { Table } from '../components/Table'
import Mail from '../components/Mails'
import { TableReseña } from '../components/TableReseña'

const Inicio = () => {
	return (
		<>
			<div className='pt-10 md:pt-20 p-10 md:p-14'>
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
			</div>
		</>
	)
}

export default Inicio
