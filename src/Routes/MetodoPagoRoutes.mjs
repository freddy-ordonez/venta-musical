import { Router } from "express";
import { MetodoPago } from "../Model/MetodoPago.mjs";
import { Usuario } from "../Model/Usuario.mjs";

const router = Router();

router.get("/api/metodoPagos", async (request, response) => {
  const todoMetodoPago = await MetodoPago.find({});

  return response.status(200).send(todoMetodoPago);
});

router.post("/api/metodoPagos", async (request, response) => {
  const { tipoPago, numeroTarjeta, usuario } = request.body;

  const nuevoMetodoPago = new MetodoPago({
    tipoPago,
    numeroTarjeta,
    usuario,
  });
  const encontrarUsuario = await Usuario.findById(usuario)
    .populate("metodoPago")
    .exec();
const encontrarMetodoPago = await MetodoPago.find({usuario});

  const metodoPagoExistente = encontrarMetodoPago.find((data)=> {
    return data.numeroTarjeta === numeroTarjeta;
  })

  console.log(metodoPagoExistente);

  if (metodoPagoExistente)
    return response.status(400).send({
      message: "Metodo de pago ya existe",
    });
  if (!encontrarUsuario)
    return response.status(400).send({
      message: "Usuario no encontrado",
    });

  try {
    const guardarMetodoPago = await nuevoMetodoPago.save();
    encontrarUsuario.metodoPago = encontrarUsuario.metodoPago.concat(
      guardarMetodoPago._id
    );
    await encontrarUsuario.save();
    return response.status(201).send(guardarMetodoPago);
  } catch (err) {
    console.log(err);
    return response.status(400).send({
      message: err,
    });
  }
});

export default router;
