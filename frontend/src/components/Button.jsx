const Button = (props) => {
	return (
		<button
			className='bg-sky-600 text-white py-2 px-6 rounded md:ml-8 hover:bg-sky-400 
      duration-500 uppercase'
		>
			{props.children}
		</button>
	)
}

export default Button
