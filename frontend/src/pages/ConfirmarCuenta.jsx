import { useEffect, useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
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
				const url = `http://localhost:4000/api/usuarios/confirmar/${id}`
				const { data } = await axios(url)

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
			<h1 className='text-sky-600 font-black text-5xl'>Confirma tu cuenta</h1>
			<div className='mt-20 md:mt-5 px-5 py-10'>
				{msg && <Alerta alerta={alerta} />}
				{cuentaConfirmada && (
					<Link
						className='block text-center my-5 text-slate-500 uppercase text-sm'
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
