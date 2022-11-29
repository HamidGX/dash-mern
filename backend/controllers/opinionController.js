import Prueba from '../models/Prueba.js'

const consultarPrueba = async (req, res) => {
	const opinion = await Prueba.find({})
	res.json(opinion)
}

export { consultarPrueba }
