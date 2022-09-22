import mongoose from 'mongoose'

const clienteSchema = mongoose.Schema({
	nombre: {
		type: String,
		requiered: true,
		trim: true,
	},
	email: {
		type: String,
		requiered: true,
		trim: true,
		unique: true,
	},
})

const Cliente = mongoose.model("Cliente", clienteSchema);
export default Cliente;