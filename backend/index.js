import express from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import clienteRoutes from "./routes/clienteRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json()); //Procesa la informacion tipo json
dotenv.config();
conectarDB();

//Routing
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/clientes", clienteRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
});
