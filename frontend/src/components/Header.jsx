import useAuth from '../hooks/useAuth'
import { useState } from 'react'
import Button from './Button'
const Header = () => {
	const { auth } = useAuth()
	const { cerrarSesionAuth } = useAuth()
	const handleCerrarSesion = () => {
		cerrarSesionAuth()
		localStorage.removeItem('token')
	}

	let Links = [
		{ name: 'HOME', link: '/' },
		{ name: 'SERVICE', link: '/' },
		{ name: 'ABOUT', link: '/' },
		{ name: "BLOG'S", link: '/' },
		{ name: 'CONTACT', link: '/' },
	]
	let [open, setOpen] = useState(false)
	return (
		<header className='px-4 py-5 bg-white border-b'>
			<div className='md:flex md:justify-between'>
				<h2 className='text-4xl text-sky-600 font-black'>Dashboard</h2>
				<div className='flex items-center gap-3'>
					<p className='text-xl font-bold'>Hola: {auth.nombre}</p>
					<button
						type='button'
						className='text-white text.sm bg-sky-600 p-3 rounded-md uppercase font-bold'
						onClick={handleCerrarSesion}
					>
						Cerrar sesión
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
