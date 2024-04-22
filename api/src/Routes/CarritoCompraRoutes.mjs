import { Router, response } from "express";

const router = Router();

router.get("/api/carrito", (request, response) => {
  if (!request.session.user) response.status(401).send([]);
  return response.status(200).send(request.session.cart ?? []);
});

router.post("/api/carrito", (request, response) => {
  if (!request.session.user)
    response.status(401).send({ message: "No hay ninguna sesion abierta" });

  const { body: cancion } = request;
  const { cart } = request.session;

  if (cart) {
    cart.push(cancion);
  } else {
    request.session.cart = [cancion];
  }
  return response.status(201).send(cancion);
});

router.delete("/api/carrito/:id", (request, response) => {
  if (!request.session.user)
    return response
      .status(401)
      .send({ message: "Autorizacion solo a usuarios autenticados" });
  if (!request.session.cart)
    return response.status(404).send({ message: "No existed" });

  const { id } = request.params;
  const { cart } = request.session;
  request.session.cart = cart.filter((c) => c._id !== id);
  return response.status(200).send({ message: "Exito" });
});

router.get("/api/carrito/limpiar", (request, response) => {
  if (!request.session.user)
    request
      .status(401)
      .send({ message: "Autorizacion solo a usuarios autenticados" });
  request.session.cart = [];
  response.status(200).send([]);
});

export default router;
