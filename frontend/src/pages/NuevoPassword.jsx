import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import clienteAxios from '../config/clienteAxios'
import Alerta from '../components/Alerta'

const NuevoPassword = () => {
	const [password, setPassword] = useState('')
	const [tokenValido, setTokenValido] = useState(false)
	const [alerta, setAlerta] = useState({})
	const [passwordModificado, setPasswordModificado] = useState(false)
	const params = useParams()
	const { token } = params

	useEffect(() => {
		const comprobarToken = async () => {
			try {
				await clienteAxios(`/usuarios/olvide-password/${token}`)
				setTokenValido(true)
			} catch (error) {
				setAlerta({
					msg: error.response.data.msg,
					error: true,
				})
			}
		}
		comprobarToken()
	}, [])

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (password.length < 6) {
			setAlerta({
				msg: 'La contraseña debe ser de minimo 6 caracteres',
				error: true,
			})
			return
		}

		try {
			const url = `http://localhost:4000/api/usuarios/olvide-password/${token}`
			const { data } = await axios.post(url, { password })
			setAlerta({
				msg: data.msg,
				error: false,
			})
			setPasswordModificado(true)
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
			<h1 className='text-indigo-600 font-black text-3xl'>
				Restablecer tu contraseña
			</h1>

			{msg && <Alerta alerta={alerta} />}

			{tokenValido && (
				<form
					className='my-10 bg-white shadow rounded-lg p-10'
					onSubmit={handleSubmit}
				>
					<div className='my-5'>
						<label
							className='uppercase text-gray-600 block text-xl font-bold'
							htmlFor='password'
						>
							Nueva contraseña
						</label>
						<input
							id='password'
							type='password'
							placeholder='Escribe tu nueva contraseña'
							className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<input
						type='submit'
						value='Guardar nueva contraseña'
						className='w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 py-3 rounded-xl tracking-wide font-bold uppercase  shadow-lg cursor-pointer transition ease-in duration-500'
					/>
				</form>
			)}

			{passwordModificado && (
				<Link
					className='block text-center my-5 text-slate-500 uppercase text-sm'
					to='/'
				>
					¿Ya tienes una cuenta? Inicia sesión
				</Link>
			)}
		</>
	)
}

export default NuevoPassword
