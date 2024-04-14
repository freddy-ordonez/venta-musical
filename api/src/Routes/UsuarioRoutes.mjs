import { Router } from "express";
import usuariosController from "../Controller/UsuarioController.mjs";
import { Usuario } from "../Model/Usuario.mjs";
import { TipoUsuario } from "../Model/TipoUsuario.mjs";
import { usuarioValidacion } from "../Utils/Validation/UsuarioSchema.mjs";
import { matchedData, validationResult } from "express-validator";
import { MetodoPago } from "../Model/MetodoPago.mjs";
import validarTarjeta from "card-validator";

const router = Router();

router.get("/api/usuarios", usuariosController.obtenerTodosUsuarios);

router.post("/api/usuarios", usuarioValidacion, async (request, response) => {
  //Esto me valida con express-validation
  //el cuerpo de la solicitud que seria el objeto Usuario
  const validarUsuario = validationResult(request);

  if (!validarUsuario.isEmpty())
    return response.status(400).send(validarUsuario.array());

  const { nombre, dni, genero, contrasena, tipoUsuario, correoElectronico } =
    matchedData(request);

  const nuevoUsuario = new Usuario({
    nombre,
    dni,
    correoElectronico,
    genero,
    contrasena,
    tipoUsuario,
  });

  const encontrarTipoUsuario = await TipoUsuario.findById(tipoUsuario);

  if (!encontrarTipoUsuario)
    return response.status(400).send({ message: "Tipo Usuario no encontrado" });

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

router.put("/api/usuarios/:id", async (request, response) => {
  const { id } = request.params;
  const {
    nombre,
    dni,
    correoElectronico,
    contrasena,
    metodoPago,
    tipoUsuario,
  } = request.body;
  const { _id, numeroTarjeta } = metodoPago;
  const usuarioEncotrado = await Usuario.findById(id);

  if (!usuarioEncotrado)
    return response.status(400).send({ message: "Usuario no encontrado" });

  try {
    const tipoPago = validarTarjeta
      .number(numeroTarjeta)
      .card.type.toUpperCase();
    const metodoPagoActualizado = await MetodoPago.findByIdAndUpdate(
      _id,
      {
        numeroTarjeta,
        tipoPago,
      },
      { new: true }
    );
    usuarioEncotrado.nombre = nombre;
    usuarioEncotrado.dni = dni;
    usuarioEncotrado.contrasena = contrasena;
    usuarioEncotrado.correoElectronico = correoElectronico;
    usuarioEncotrado.tipoUsuario = tipoUsuario;
    const usuarioActualizado = await usuarioEncotrado.save();
    return response.status(200).send(usuarioActualizado);
  } catch (error) {
    console.error("Error al actualizar un usuario", error);
    return response
      .status(400)
      .send({ message: "Error al actualizar el usuario" });
  }
});

router.delete("/api/usuarios/:id", async (request, response)=> {
  const {id} = request.params
  try {
    const usuarioEliminado = await Usuario.findByIdAndDelete(id);
    if(usuarioEliminado) return response.status(200);
    return response.status(404);
  } catch (error) {
    console.error("Error al tratar de eliminar un usuarios");
    return response.status(400);
  }
})

export default router;
