import { Link } from 'react-router-dom'
import { useState } from 'react'
import clienteAxios from '../config/clienteAxios'
import Alerta from '../components/Alerta'

const OlvidePassword = () => {
	const [email, setEmail] = useState('')
	const [alerta, setAlerta] = useState({})

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (email === '' || email.length < 6) {
			setAlerta({
				msg: 'El Email es obligatorio',
				error: true,
			})
			return
		}

		try {
			const { data } = await clienteAxios.post(`/usuarios/olvide-password`, {
				email,
			})

			setAlerta({
				msg: data.msg,
				error: false,
			})
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
			<form
				className='my-10 bg-white shadow rounded-lg p-10'
				onSubmit={handleSubmit}
			>
				<h1 className='text-indigo-600 font-black text-3xl'>
					Recupera tu contraseña
				</h1>
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

				<input
					type='submit'
					value='Enviar instrucciones'
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
						to='/registrar'
					>
						¿No tienes una cuenta? Regístrate
					</Link>
				</nav>
			</form>
		</>
	)
}

export default OlvidePassword
