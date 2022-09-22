import express from "express";
const router = express.Router();

import { consultarCorreo } from "../controllers/clienteController.js";

//Autenticación, Creación, Registro y Confirmacion de Usuarios
router.get("/correos", consultarCorreo);

export default router;
