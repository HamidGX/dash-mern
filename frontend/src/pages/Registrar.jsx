import { Link } from 'react-router-dom'
import { useState } from 'react'
import Alerta from '../components/Alerta'
import axios from 'axios'
import clienteAxios from '../config/clienteAxios'

const Registrar = () => {
	const [nombre, setNombre] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [repetirPassword, setRepetirPassword] = useState('')
	const [alerta, setAlerta] = useState({})

	const handleSubmit = async (e) => {
		e.preventDefault()

		if ([nombre, email, password, repetirPassword].includes('')) {
			setAlerta({
				msg: 'Todos los campos son obligatorios',
				error: true,
			})
			return
		}

		if (password !== repetirPassword) {
			setAlerta({
				msg: 'las contraseñas no son iguales',
				error: true,
			})
		}

		if (password.length < 6) {
			setAlerta({
				msg: 'La contraseña es muy corta, agrega minimo 6 caracteres',
				error: true,
			})
		}

		setAlerta({})
		//Crear el usuario en la API
		try {
			const { data } = await clienteAxios.post(`/usuarios`, {
				nombre,
				email,
				password,
			})

			setAlerta({
				msg: data.msg,
				error: false,
			})
			setNombre('')
			setEmail('')
			setPassword('')
			setRepetirPassword('')
		} catch (error) {
			setAlerta({
				msg: error.response.data.msg,
				error: true,
			})
		}
	}

	const { msg } = alerta
	return (
		<>
			{msg && <Alerta alerta={alerta} />}
			<form className='bg-white shadow rounded-lg p-10' onSubmit={handleSubmit}>
				<h1 className='text-indigo-600 font-black text-3xl'>Crea una cuenta</h1>
				<div className='my-5'>
					<label
						className='text-gray-600 block text-lg font-bold'
						htmlFor='nombre'
					>
						Nombre
					</label>
					<input
						id='nombre'
						type='text'
						placeholder='Ingresa tu nombre'
						className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
					/>
				</div>

				<div className='my-5'>
					<label
						className='text-gray-600 block text-lg font-bold'
						htmlFor='email'
					>
						Email
					</label>
					<input
						id='email'
						type='email'
						placeholder='Email de registro'
						className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className='my-5'>
					<label
						className='text-gray-600 block text-lg font-bold'
						htmlFor='password'
					>
						Password
					</label>
					<input
						id='password'
						type='password'
						placeholder='Password de registro'
						className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<div className='my-5'>
					<label
						className='text-gray-600 block text-lg font-bold'
						htmlFor='password'
					>
						Repetir password
					</label>
					<input
						id='password2'
						type='password'
						placeholder='Repite tu password'
						className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
						value={repetirPassword}
						onChange={(e) => setRepetirPassword(e.target.value)}
					/>
				</div>

				<input
					type='submit'
					value='Crear cuenta'
					className='w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 py-3 rounded-xl tracking-wide font-bold uppercase  shadow-lg cursor-pointer transition ease-in duration-500'
				/>

				<nav className='lg:flex lg:justify-between'>
					<Link
						className='block text-center my-5 text-slate-500 text-base'
						to='/'
					>
						¿Ya tienes una cuenta? Inicia sesión
					</Link>

					<Link
						className='block text-center my-5 text-slate-500 text-base'
						to='/olvide-password'
					>
						Olvide mi contraseña
					</Link>
				</nav>
			</form>
		</>
	)
}

export default Registrar
