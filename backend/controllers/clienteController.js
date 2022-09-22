import { emailEnvio } from "../helpers/emailsMasivos.js";
import Cliente from "../models/Cliente.js";

const consultarCorreo = async (req, res) => {
  const cliente = await Cliente.find().select("-_id -first_name -__v");
  res.json(cliente.map((correo) => correo.email));

  emailEnvio({
    email: cliente.email,
  });
};

export { consultarCorreo };
