import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Header from '../components/Header'

const RutaProtegida = () => {
	const { auth, cargando } = useAuth()
	if (cargando) return 'Cargando...'
	return (
		<>
			{auth._id ? (
				<div className='bg-gray-100'>
					<header>
						<Header />
					</header>

					<div>
						<main className='py-10 mb-10'>
							<Outlet />
						</main>
					</div>
				</div>
			) : (
				<Navigate to='/' />
			)}
		</>
	)
}
export default RutaProtegida
