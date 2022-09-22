import React from 'react'

const NuevoPassword = () => {
	return (
		<>
			<h1 className='text-sky-600 font-black text-5xl'>
				Reestablece tu contraseña
			</h1>

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
				/>
			</div>

			<input
				type='submit'
				value='Guardar nueva contraseña'
				className='bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors'
			/>
		</>
	)
}

export default NuevoPassword
