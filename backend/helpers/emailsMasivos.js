import nodemailer from 'nodemailer'

export const emailPublicidad = async (datos) => {
	const { email, nombre } = datos

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

	const correosClientes = clientesCorreos.map(
		(clientesCorreos) => clientesCorreos.email
	)

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
		to: correosClientes,
		subject: 'Correo masivo1',
		text: 'Correo masivo',
		html: `<p>Hola: ${nombre} has solicitado reestablecer tu contraseña</p>
             <p>Sigue el siguiente enlace para generar una nueva contraseña:</p>
             
             <p>Si tu no solicitaste reestablecer tu contraseña, puedes ignorar el mensaje</p>        
        `,
	})
}

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
