import { usuarios } from "../Utils/usuarios-array.mjs";

const obtenerTodosUsuarios = (request, response)=> {
    return response.status(200).send(usuarios);
}

export default {
    obtenerTodosUsuarios
}