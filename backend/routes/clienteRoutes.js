import express from 'express'
const router = express.Router()

import {
	consultarCorreo,
	envioCorreos,
} from '../controllers/clienteController.js'

//Autenticación, Creación, Registro y Confirmacion de Usuarios
router.get('/correos', consultarCorreo)
router.post('/envio-correos', envioCorreos)
export default router
