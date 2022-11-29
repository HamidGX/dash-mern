import mongoose from 'mongoose'

const opinionSchema = mongoose.Schema({
	tipo: {
		type: String,
		requiered: true,
		trim: true,
	},
	cantidad: {
		type: Number,
		requiered: true,
		trim: true,
	},
})

const Prueba = mongoose.model('Prueba', opinionSchema)

export default Prueba
