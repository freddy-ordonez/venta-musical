import { TipoUsuario } from "../Model/TipoUsuario.mjs";

export const obtenerTipoUsuarios = async (request, response) => {
  const tipoUsuarios = await TipoUsuario.find();

  return response.status(200).send(tipoUsuarios);
};

export const agregarTipoUsuario = async (request, response) => {
  const { body } = request;
  const nuevoTipoUsuario = new TipoUsuario(body);
  try {
    const guardarTipoUsuario = await nuevoTipoUsuario.save();
    return response.status(201).send(guardarTipoUsuario);
  } catch (err) {
    return response.status(400).send({
      message: err,
    });
  }
};
