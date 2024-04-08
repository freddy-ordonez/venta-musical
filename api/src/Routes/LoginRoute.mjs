import { Router } from "express";
import { Usuario } from "../Model/Usuario.mjs";

const router = Router();

router.get("/api/login", (request, response) => {
  const usuario = request.session.user;
  console.log(usuario);
  if (usuario) return response.send({ login: true, usuario });
  return response.send({ login: false });
});

router.post("/api/login", async (request, response) => {
  const { correoElectronico, contrasena } = request.body;
  try {
    const [usuario, ...resto] = await Usuario.find({
      correoElectronico,
      contrasena,
    })
      .populate({ path: "metodoPago", select: "-_id numeroTarjeta" })
      .populate({ path: "tipoUsuario", select: "-_id tipoUsuario" })
      .exec();
    if (usuario) {
      request.session.user = usuario;
      request.session.visited = true;
      return response.status(200).send({ login: true, usuario });
    }
    return response.status(400).send({ login: false });
  } catch (error) {
    console.error("Error al hacer login", error);
  }
});

router.get("/api/cerrar-sesion", (request, response) => {
  request.session.destroy()
  response.status(200).send({logout:true})
});

export default router;
