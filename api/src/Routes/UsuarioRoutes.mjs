import { Router, request, response } from "express";
import { usuarios } from "../Utils/usuarios-array.mjs";
import usuariosController from "../Controller/UsuarioController.mjs";
import { Usuario } from "../Model/Usuario.mjs";
import { TipoUsuario } from "../Model/TipoUsuario.mjs";
import { usuarioValidacion } from "../Utils/Validation/UsuarioSchema.mjs";
import { matchedData, validationResult } from "express-validator";

const router = Router();

router.get("/api/usuarios", usuariosController.obtenerTodosUsuarios);
router.post("/api/usuarios", usuarioValidacion, async (request, response) => {
  const validarUsuario = validationResult(request);

  if (!validarUsuario.isEmpty())
    return response.status(400).send(validarUsuario.array());
  const { nombreCompleto, dni, genero, contrasena, tipoUsuario } =
    matchedData(request);
  const nuevoUsuario = new Usuario({
    nombreCompleto,
    dni,
    genero,
    contrasena,
    tipoUsuario,
  });
  const encontrarTipoUsuario = await TipoUsuario.findById(
    nuevoUsuario.tipoUsuario
  );

  try {
    const guardarUsuario = await nuevoUsuario.save();
    encontrarTipoUsuario.usuarios = encontrarTipoUsuario.usuarios.concat(
      guardarUsuario._id
    );
    await encontrarTipoUsuario.save();
    return response.status(201).send(guardarUsuario);
  } catch (err) {
    return response.status(400).send({
      message: err,
    });
  }
});

export default router;
