import { emailEnvio } from '../helpers/emailsMasivos.js'
import Cliente from '../models/Cliente.js'

const consultarCorreo = async (req, res) => {
	const cliente = await Cliente.find().select('-__v')
	res.json(cliente)

	emailEnvio({
		email: cliente.email,
	})
}

export { consultarCorreo }
