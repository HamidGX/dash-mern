import nodemailer from 'nodemailer'

export const emailRegistro = async (datos) => {
	const { email, nombre, token } = datos

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
		subject: 'Confirmar cuenta',
		text: 'Comprueba tu cuenta',
		html: `<p>Hola: ${nombre} comprueba tu cuenta en el dashboard</p>
             <p>Tu cuenta ya casi esta lista, solo debes comprobarla en el siguiente enlace:</p>
             <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar cuenta</a>
             <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
                
        
        `,
	})
}

export const emailOlvidePassword = async (datos) => {
	const { email, nombre, token } = datos

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
		subject: 'Restablece tu contraseña',
		text: 'Restablece tu contraseña',
		html: `<p>Hola: ${nombre} has solicitado reestablecer tu contraseña</p>
             <p>Sigue el siguiente enlace para generar una nueva contraseña:</p>
             <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Cambiar contraseña</a>
             
             <p>Si tu no solicitaste reestablecer tu contraseña, puedes ignorar el mensaje</p>
                
        
        `,
	})
}
