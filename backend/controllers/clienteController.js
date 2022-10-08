import Cliente from '../models/Cliente.js'
import {
	emailPublicidad,
	emailPublicidadDos,
} from '../helpers/emailsMasivos.js'

const consultarCorreo = async (req, res) => {
	const cliente = await Cliente.find().select('-__v')
	res.json(cliente)
}

const envioCorreos = async (req, res) => {
	const { email } = req.body
	const cliente = await Cliente.findOne({ email })
	if (!cliente) {
		const error = new Error('El cliente no existe')
		return res.status(404).json({ msg: error.message })
	}

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

//Prueba de envio de los correos
const envioCorreosDos = async (req, res) => {
	const { email } = req.body
	const cliente = await Cliente.find({ email }).select('-__v')
	if (!cliente) {
		const error = new Error('El cliente no existe')
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

export { consultarCorreo, envioCorreos, envioCorreosDos }
