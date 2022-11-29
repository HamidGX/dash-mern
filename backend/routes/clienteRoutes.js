import express from 'express'
const router = express.Router()

import {
	consultarCorreo,
	envioCorreos,
	bulkCorreo,
} from '../controllers/clienteController.js'

//Autenticación, Creación, Registro y Confirmacion de Usuarios
router.get('/correos', consultarCorreo)
router.post('/envio-correos', envioCorreos)
router.get('/pruebas', bulkCorreo)

export default router
