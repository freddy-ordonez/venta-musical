import { Usuario } from "../Model/Usuario.mjs";
import { TipoUsuario } from "../Model/TipoUsuario.mjs";
import { matchedData, validationResult } from "express-validator";
import { MetodoPago } from "../Model/MetodoPago.mjs";
import validarTarjeta from "card-validator";
import { hash } from "bcrypt";

export const obtenerTodosUsuarios = async (request, response) => {
  const usuarios = await Usuario.find()
    .populate({ path: "tipoUsuario", select: "_id tipoUsuario" })
    .populate({ path: "metodoPago", select: "_id numeroTarjeta" })
    .exec();
  return response.status(200).send(usuarios);
};

export const agregarUsuario = async (request, response) => {
  //Esto me valida con express-validation
  //el cuerpo de la solicitud que seria el objeto Usuario
  const validarUsuario = validationResult(request);

  if (!validarUsuario.isEmpty())
    return response.status(400).send(validarUsuario.array());

  const {
    nombre,
    dni,
    genero,
    contrasena,
    tipoUsuario,
    correoElectronico,
    numeroTarjeta,
  } = matchedData(request);

  const encontrarTipoUsuario = await TipoUsuario.findById(tipoUsuario);

  if (!encontrarTipoUsuario)
    return response.status(400).send({ message: "Tipo Usuario no encontrado" });

  const metodoPagoUsuario = new MetodoPago({
    numeroTarjeta,
    tipoPago: validarTarjeta.number(numeroTarjeta).card.type.toUpperCase(),
  });

  try {
    const metodoPagoAgregado = await metodoPagoUsuario.save();

    const nuevoUsuario = new Usuario({
      nombre,
      dni,
      correoElectronico,
      genero,
      contrasena: await hash(contrasena, 10),
      tipoUsuario,
      metodoPago: metodoPagoAgregado._id,
    });

    if (!metodoPagoAgregado) {
      return response.status(500).send({
        message: "No se pudo agregar el metodo",
      });
    }
    const guardarUsuario = await nuevoUsuario.save();
    encontrarTipoUsuario.usuarios = encontrarTipoUsuario.usuarios.concat(
      guardarUsuario._id
    );
    await encontrarTipoUsuario.save();
    metodoPagoAgregado.usuario = guardarUsuario._id;
    await metodoPagoAgregado.save();
    const usuarioPopulate = await Usuario.findById(guardarUsuario._id)
      .populate({ path: "tipoUsuario", select: "_id tipoUsuario" })
      .populate({ path: "metodoPago", select: "_id numeroTarjeta" });
    return response.status(201).send(usuarioPopulate);
  } catch (err) {
    console.log(err);
    return response.status(500).send({
      message: err,
    });
  }
};

export const actualizarUsuario = async (request, response) => {
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
     await MetodoPago.findByIdAndUpdate(
      _id,
      {
        numeroTarjeta,
        tipoPago,
      },
      { new: true }
    );
    usuarioEncotrado.nombre = nombre;
    usuarioEncotrado.dni = dni;
    usuarioEncotrado.contrasena = await hash(contrasena, 10);
    usuarioEncotrado.correoElectronico = correoElectronico;
    usuarioEncotrado.tipoUsuario = tipoUsuario;
    const usuarioActualizado = await usuarioEncotrado.save();
    const usuarioPopulate = await Usuario.findById(usuarioActualizado._id)
      .populate({ path: "tipoUsuario", select: "_id tipoUsuario" })
      .populate({ path: "metodoPago", select: "_id numeroTarjeta" })
      .exec();
    return response.status(200).send(usuarioPopulate);
  } catch (error) {
    console.error("Error al actualizar un usuario", error);
    return response
      .status(400)
      .send({ message: "Error al actualizar el usuario" });
  }
}

export const eliminarUsuario = async (request, response) => {
  const { id } = request.params;
  try {
    const usuarioEliminado = await Usuario.findByIdAndDelete(id);
    if (usuarioEliminado) return response.status(200).send(usuarioEliminado);
    return response.status(404).send({ message: "No se encontro el usuario" });
  } catch (error) {
    console.error("Error al tratar de eliminar un usuarios");
    return response.status(500).send({ message: error });
  }
}

