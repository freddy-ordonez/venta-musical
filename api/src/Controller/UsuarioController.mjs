import { Usuario } from "../Model/Usuario.mjs";

const obtenerTodosUsuarios = async (request, response) => {
  const usuarios = await Usuario.find()
    .populate({ path: "tipoUsuario", select: "_id tipoUsuario" })
    .populate({ path: "metodoPago", select: "_id numeroTarjeta" })
    .exec();
  return response.status(200).send(usuarios);
};

export default {
  obtenerTodosUsuarios,
};
