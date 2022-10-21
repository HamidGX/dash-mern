// *TODO: clienteController, obtener correo de los clientes.
const correosClientes = async (req, res) => {
	const cliente = await Cliente.find().select('-__v -_id')
	res.status(200).json({
		status: 'success',
		results: cliente.length,
		data: {
			cliente,
		},
	})

	try {
		// Enviar el email
		emailPublicidad({
			email: cliente.email,
			nombre: cliente.nombre,
		})

		res.json({ msg: 'Hemos enviado un email con las instrucciones' })
	} catch (error) {
		console.log(error)
	}
}

//*TODO: clienteController, envio de correos.
const envioCorreosDos = async (req, res) => {
	const { email } = req.body
	const cliente = await Cliente.find({ email }).select('-__v')
	if (!cliente) {
		const error = new Error('El cliente no existe2')
		return res.status(404).json({ msg: error.message })
	}

	try {
		// Enviar el email
		emailPublicidadDos({
			email: cliente.email,
			nombre: cliente.first_name,
		})

		res.json({ msg: 'Hemos enviado la publicidad' })
	} catch (error) {
		console.log(error)
	}
}

// *TODO: emailsMasivos, envio de correos.
export const emailPublicidadDos = async (datos) => {
	const { email, nombre } = datos

	//Transport Mailtrap
	const transport = nodemailer.createTransport({
		host: process.env.EMAIL_HOST,
		port: process.env.EMAIL_PORT,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	})

	//Informacion del email
	const info = await transport.sendMail({
		from: 'Dashboard <cuentas@bungie.net>',
		to: email,
		subject: 'Correo masivo2',
		text: 'Correo masivo',
		html: `<p>Hola: ${nombre} has solicitado reestablecer tu contraseña</p>
             <p>Sigue el siguiente enlace para generar una nueva contraseña:</p>
             
             <p>Si tu no solicitaste reestablecer tu contraseña, puedes ignorar el mensaje</p>
                
        
        `,
	})
}

//*TODO: emailsMasivos, petición
export const obtenerCliente = async () => {
	const url = 'http://localhost:4000/api/clientes/pruebas'

	const options = {
		mode: 'no-cors',
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
	}

	try {
		const response = await fetch(url, options)
		const result = await response.json()
		console.log(result)
	} catch (err) {
		console.log(err)
		console.log('Ocurrio un error')
	}

	const response = await fetch(url, {})

	const result = await response.json()
	const copia = [...result]

	console.log(typeof copia)
	console.log(copia)

	const url = 'http://localhost:4000/api/clientes/pruebas'
	const response = await fetch(url)
	const result = await response.json()

	const fetchAnswer = async () => {
		const url = 'http://localhost:4000/api/clientes/pruebas'
		const response = await fetch(url)
		const result = await response.json()
		return result
	}

	const getAnswer = async () => {
		const { answer } = await fetchAnswer()
		let setResultado = answer
		console.log(setResultado)
	}
	getAnswer()
}
obtenerCliente()

//TODO: emailsMasicos, array
const clientesCorreos = [
    {
        _id: '634257e64b5810e8db7e8941',
        name: 'Kimberley Albert',
        gender: 'female',
        company: 'COWTOWN',
        email: 'kimberleyalbert@cowtown.com',
    },
    {
        _id: '634257e62679248a89a2ec4f',
        name: 'Roberts Russo',
        gender: 'male',
        company: 'LOCAZONE',
        email: 'robertsrusso@locazone.com',
    },
    {
        _id: '634257e6229a02ff135d929d',
        name: 'Mclaughlin Stevens',
        gender: 'male',
        company: 'ZAPHIRE',
        email: 'mclaughlinstevens@zaphire.com',
    },
    {
        _id: '634257e655227e7f62675f50',
        name: 'Viola Morales',
        gender: 'female',
        company: 'COASH',
        email: 'violamorales@coash.com',
    },
    {
        _id: '634257e6b53767b4ba0f2f68',
        name: 'Gaines Head',
        gender: 'male',
        company: 'BIZMATIC',
        email: 'gaineshead@bizmatic.com',
    },
    {
        _id: '634257e6f38e231ff39e4dad',
        name: 'Tiffany Evans',
        gender: 'female',
        company: 'ESSENSIA',
        email: 'tiffanyevans@essensia.com',
    },
]
const copiaCorreos = copia.map((copia) => copia.email)
console.log(typeof copiaCorreos)
console.log(copiaCorreos)
