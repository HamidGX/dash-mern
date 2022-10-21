import express from 'express'
import conectarDB from './config/db.js'
import dotenv from 'dotenv'
import usuarioRoutes from './routes/usuarioRoutes.js'
import clienteRoutes from './routes/clienteRoutes.js'
import cors from 'cors'

const app = express()
app.use(express.json()) //Procesa la informacion tipo json
dotenv.config()
conectarDB()

// Configurar CORS
app.use(cors())
// const whitelist = [
// 	'http://127.0.0.1:5173',
// 	'http://localhost:4000',
// 	'http://192.168.0.25',
// ]

// const corsOptions = {
// 	origin: function (origin, callback) {
// 		if (whitelist.includes(origin)) {
// 			// Puede consultar la API
// 			callback(null, true)
// 		} else {
// 			// No esta permitido
// 			callback(new Error('Error de Cors'))
// 		}
// 	},
// }

// app.use(cors(corsOptions))

//Routing
app.use('/api/usuarios', usuarioRoutes)
app.use('/api/clientes', clienteRoutes)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
	console.log(`Servidor corriendo en el puerto: ${PORT}`)
})
