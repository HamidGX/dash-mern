import { useState } from 'react'
import clienteAxios from '../config/clienteAxios'
import Alerta from '../components/Alerta'

const EnvioCorreosDos = () => {
	const [alerta, setAlerta] = useState({})

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			const { data } = await clienteAxios.post(`/clientes/envio-correos`)

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
					Envio de Correos
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
					/>
				</div>

				<input
					type='submit'
					value='Enviar instrucciones'
					className='w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 py-3 rounded-xl tracking-wide font-bold uppercase  shadow-lg cursor-pointer transition ease-in duration-500'
				/>
			</form>
		</>
	)
}

export default EnvioCorreosDos
