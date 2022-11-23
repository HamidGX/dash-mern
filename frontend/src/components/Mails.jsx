import { useState } from 'react'
import clienteAxios from '../config/clienteAxios'
import Alerta from '../components/Alerta'
import emailImg from '../assets/email.svg'

const Mail = () => {
	const [alerta, setAlerta] = useState({})
	const [email, setEmail] = useState('')

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
			const { data } = await clienteAxios.post(`/clientes/envio-correos`, {
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
			<div className='my-10 bg-white shadow rounded-lg p-10 md:grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20'>
				<div className='flex justify-center'>
					<img
						className='w-full md:max-w-xs'
						src={emailImg}
						alt='Email image'
					/>
				</div>
				<form className='my-10 p-10' onSubmit={handleSubmit}>
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
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<input
						type='submit'
						value='Enviar instrucciones'
						className='w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 py-3 rounded-xl tracking-wide font-bold uppercase  shadow-lg cursor-pointer transition ease-in duration-500'
					/>
				</form>
			</div>
		</>
	)
}

export default Mail
