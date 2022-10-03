import { useState } from 'react'
import useAuth from '../hooks/useAuth'

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
	]
	let [open, setOpen] = useState(false)
	return (
		<>
			<div className='shadow-md w-full fixed top-0 left-0'>
				<div className='md:flex items-center justify-between bg-white py-5 md:px-10 px-4 border-b-2 md:border-none'>
					<div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
						<span className='text-3xl text-indigo-600 mr-1 pt-2'>
							<ion-icon name='logo-javascript'></ion-icon>
						</span>
						Dashboard
					</div>

					<div
						onClick={() => setOpen(!open)}
						className='text-3xl absolute right-4 top-6 cursor-pointer md:hidden'
					>
						<ion-icon name={open ? 'close' : 'menu'}></ion-icon>
					</div>

					<ul
						className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 p-4 transition-all duration-200 ease-in ${
							open ? 'top-20 ' : 'top-[-490px]'
						}`}
					>
						{Links.map((link) => (
							<li key={link.name} className='md:ml-8 md:my-0 py-1'>
								<a
									href={link.link}
									className='"text-gray-800 text-sm md:text-sm font-semibold hover:text-purple-600 mb-1'
								>
									{link.name}
								</a>
							</li>
						))}
						<div className='flex justify-between border-t-2 py-2 md:border-none text-sm font-bold'>
							<p className='text-black py-3 md:ml-8  uppercase'>
								Hola: {auth.nombre}
							</p>
							<button
								className='bg-red-600 text-white py-1 px-2 rounded md:ml-8 hover:bg-red-500 duration-500 uppercase inline-flex space-x-2 items-center justify-center'
								onClick={handleCerrarSesion}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth={2}
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'
									/>
								</svg>
								<span>Cerrar Sesión</span>
							</button>
						</div>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Header
