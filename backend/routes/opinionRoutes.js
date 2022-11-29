import express from 'express'
const router = express.Router()

import { consultarPrueba } from '../controllers/opinionController.js'

//Ruta de opiniones
router.get('/opinion', consultarPrueba)
export default router
