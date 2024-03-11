import {Usuario} from "../Model/Usuario.mjs";

const obtenerTodosUsuarios = async (request, response)=> {
    const usuarios = await Usuario.find().populate("tipoUsuario").exec();
    return response.status(200).send(usuarios);
}

export default {
    obtenerTodosUsuarios
}