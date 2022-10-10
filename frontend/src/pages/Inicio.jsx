import Cards from '../components/Cards'
import { Table } from '../components/Table'

const Inicio = () => {
	return (
		<>
			<div className='pt-10 md:pt-20 p-10 md:p-14'>
				<div className='pb-5'>
					<Cards />
				</div>
				<div>
					<Table />
				</div>
			</div>
		</>
	)
}

export default Inicio
