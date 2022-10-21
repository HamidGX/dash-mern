import Cliente from '../models/Cliente.js'
import { emailPublicidad } from '../helpers/emailsMasivos.js'

const consultarCorreo = async (req, res) => {
	const cliente = await Cliente.find().select('-__v')
	res.json(cliente)
}

const bulkCorreo = async (req, res) => {
	const cliente = await Cliente.find().select('-__v -_id -_first_name')
	res.json(cliente.map((correo) => correo.email))
}

const envioCorreos = async (req, res) => {
	const { email } = req.body
	const cliente = await Cliente.findOne({ email })
	if (!cliente) {
		const error = new Error('El cliente no existe1')
		return res.status(404).json({ msg: error.message })
	}

	try {
		// Enviar el email
		emailPublicidad({
			email: cliente.email,
			nombre: cliente.nombre,
		})

		res.json({ msg: 'Hemos enviado un email1 con las instrucciones' })
	} catch (error) {
		console.log(error)
	}
}

export { consultarCorreo, envioCorreos, bulkCorreo }
