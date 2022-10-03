import Cliente from '../models/Cliente.js'
import { emailPublicidad } from '../helpers/emailsMasivos.js'

const consultarCorreo = async (req, res) => {
	const cliente = await Cliente.find().select('-__v')
	res.json(cliente)
}

const enviarCorreo = async (req, res) => {
	const { email } = req.body
	//Comprobar si el usuario existe
	const cliente = await Cliente.findOne({ email })

	try {
		//Enviar email
		emailPublicidad({
			email: cliente.email,
			nombre: cliente.nombre,
		})
		res.json({ msg: 'Hemos enviado la publicidad' })
	} catch (error) {
		console.log(error)
	}
}

export { consultarCorreo }
