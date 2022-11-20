const Cards = () => {
	return (
		<>
			<div className='flex flex-col'>
				<div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4'>
					<div className='flex items-start rounded-xl bg-white p-4 shadow-lg'>
						<div className='flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6 text-indigo-400'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={2}
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
								/>
							</svg>
						</div>
						<div className='ml-4'>
							<h2 className='font-semibold'>Clientes: 1000</h2>
							<p className='mt-2 text-sm text-gray-500'>
								Last opened 4 days ago
							</p>
						</div>
					</div>
					<div className='flex items-start rounded-xl bg-white p-4 shadow-lg'>
						<div className='flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6 text-green-600'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={2}
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25'
								/>
							</svg>
						</div>
						<div className='ml-4'>
							<h2 className='font-semibold'>Correos enviados: 218</h2>
							<p className='mt-2 text-sm text-gray-500'>
								Last checked 3 days ago
							</p>
						</div>
					</div>
					<div className='flex items-start rounded-xl bg-white p-4 shadow-lg'>
						<div className='flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6 text-indigo-400'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={2}
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
								/>
							</svg>
						</div>
						<div className='ml-4'>
							<h2 className='font-semibold'>Comentarios positivos: 231</h2>
							<p className='mt-2 text-sm text-gray-500'>
								Last authored 1 day ago
							</p>
						</div>
					</div>
					<div className='flex items-start rounded-xl bg-white p-4 shadow-lg'>
						<div className='flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6 text-red-600'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={2}
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
								/>
							</svg>
						</div>
						<div className='ml-4'>
							<h2 className='font-semibold'>Comentarios negativos: 10</h2>
							<p className='mt-2 text-sm text-gray-500'>
								Last commented 8 days ago
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Cards
