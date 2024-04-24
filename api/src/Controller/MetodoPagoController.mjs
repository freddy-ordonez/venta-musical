import { MetodoPago } from "../Model/MetodoPago.mjs";
import { Usuario } from "../Model/Usuario.mjs";
import cardValidator from "card-validator";

export const obtenerMetodosPago = async (request, response) => {
  const todoMetodoPago = await MetodoPago.find({});

  return response.status(200).send(todoMetodoPago);
};

export const agregarMetodoPago = async (request, response) => {
  const { numeroTarjeta, usuario } = request.body;

  console.log(validarTarjeta(numeroTarjeta));

  if (!validarTarjeta(numeroTarjeta))
    return response
      .status(400)
      .send({ message: "Numero de la tarjeta invalido" });

  const tipoPago = cardValidator.number(numeroTarjeta).card.type.toUpperCase();

  const nuevoMetodoPago = new MetodoPago({
    tipoPago,
    numeroTarjeta,
    usuario,
  });
  const encontrarUsuario = await Usuario.findById(usuario);

  if (!encontrarUsuario)
    return response.status(400).send({
      message: "Usuario no encontrado",
    });

  try {
    const guardarMetodoPago = await nuevoMetodoPago.save();
    encontrarUsuario.metodoPago = guardarMetodoPago._id;
    await encontrarUsuario.save();
    return response.status(201).send(guardarMetodoPago);
  } catch (err) {
    console.error(err);
    return response.status(400).send({
      message: err,
    });
  }
};

const validarTarjeta = (tarjeta) => {
  const opciones = ["mastercard", "visa", "american-express"];

  // Validar el número de tarjeta
  const resultadoValidacion = cardValidator.number(tarjeta);

  // Verifica si el número de tarjeta es válido y si pertenece a alguna de las marcas especificadas
  if (resultadoValidacion.isValid) {
    return opciones.includes(resultadoValidacion.card.type);
  }

  return false;
};
