import { useState } from 'react'
import Button from './Button'
import useAuth from '../hooks/useAuth'

const Nav = () => {
	const { auth } = useAuth()
	const { cerrarSesionAuth } = useAuth()
	const handleCerrarSesion = () => {
		cerrarSesionAuth()
		localStorage.removeItem('token')
	}

	let Links = [
		{ name: 'HOME', link: '/' },
		{ name: 'SERVICE', link: '/' },
	]
	let [open, setOpen] = useState(false)
	return (
		<>
			<div className='shadow-md w-full fixed top-0 left-0'>
				<div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
					<div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
						<span className='text-3xl text-indigo-600 mr-1 pt-2'>
							<ion-icon name='logo-javascript'></ion-icon>
						</span>
						Designer
					</div>

					<div
						onClick={() => setOpen(!open)}
						className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
					>
						<ion-icon name={open ? 'close' : 'menu'}></ion-icon>
					</div>

					<ul
						className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 p-4 transition-all duration-200 ease-in ${
							open ? 'top-20 ' : 'top-[-490px]'
						}`}
					>
						{Links.map((link) => (
							<li key={link.name} className='md:ml-8 md:my-0 '>
								<a
									href={link.link}
									className='"text-gray-800 text-sm md:text-xl font-semibold hover:text-purple-600 mb-1'
								>
									{link.name}
								</a>
							</li>
						))}
						<div className='flex justify-between border-t-2 py-2 md:border-none'>
							<Button>Hola: {auth.nombre}</Button>
							<Button onClick={handleCerrarSesion}>Cerrar sesión</Button>
						</div>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Nav
