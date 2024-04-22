import { Router } from "express";
import { Usuario } from "../Model/Usuario.mjs";
import {compare} from 'bcrypt'

const router = Router();

router.get("/api/login", (request, response) => {
  const usuario = request.session.user;
  if (usuario) return response.send({ login: true, usuario });
  return response.send({ login: false });
});

router.post("/api/login", async (request, response) => {
  const { correoElectronico, contrasena } = request.body;
  try {
    const [usuario, ...resto] = await Usuario.find({
      correoElectronico
    })
      .populate({ path: "metodoPago", select: "id numeroTarjeta" })
      .populate({ path: "tipoUsuario", select: "id tipoUsuario" })
      .populate("canciones")
      .exec();
    if (!usuario || !compare(contrasena, usuario.contrasena)) return response.status(400).send({ login: false });
    
    request.session.user = usuario;
    request.session.visited = true;
    return response.status(200).send({ login: true, usuario });
  } catch (error) {
    console.error("Error al hacer login", error);
  }
});

router.get("/api/cerrar-sesion", (request, response) => {
  request.session.destroy()
  response.status(200).send({logout:true})
});

export default router;
