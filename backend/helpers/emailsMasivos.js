import nodemailer from 'nodemailer'

export const emailPublicidad = async (datos) => {
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
		subject: 'Correo masivo',
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
		subject: 'Correo masivo',
		text: 'Correo masivo',
		html: `<p>Hola: ${nombre} has solicitado reestablecer tu contraseña</p>
             <p>Sigue el siguiente enlace para generar una nueva contraseña:</p>
             
             <p>Si tu no solicitaste reestablecer tu contraseña, puedes ignorar el mensaje</p>
                
        
        `,
	})
}
