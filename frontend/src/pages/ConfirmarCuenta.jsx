import { useEffect, useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import clienteAxios from '../config/clienteAxios'
import Alerta from '../components/Alerta'

const ConfirmarCuenta = () => {
	const [alerta, setAlerta] = useState({})
	const [cuentaConfirmada, setCuentaConfirmada] = useState(false)

	//Toma el id de la url
	const params = useParams()
	//destructuring
	const { id } = params

	useEffect(() => {
		const confirmarCuenta = async () => {
			try {
				const url = `/usuarios/confirmar/${id}`
				const { data } = await clienteAxios(url)

				setAlerta({
					msg: data.msg,
					error: false,
				})
			} catch (error) {
				setAlerta({
					msg: error.response.data.msg,
					error: true,
				})
				setCuentaConfirmada(true)
			}
		}
		confirmarCuenta()
	}, [])

	const { msg } = alerta

	return (
		<>
			<h1 className='text-indigo-600 font-black text-3xl'>
				Confirma tu contraseña
			</h1>
			<div className='mt-20 md:mt-5 px-5 py-10'>
				{msg && <Alerta alerta={alerta} />}
				{cuentaConfirmada && (
					<Link
						className='block text-center my-5 text-slate-500 text-base'
						to='/'
					>
						¿Ya tienes una cuenta? Inicia sesión
					</Link>
				)}
			</div>
		</>
	)
}

export default ConfirmarCuenta
