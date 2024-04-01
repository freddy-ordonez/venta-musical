import { Router, request } from "express";
import { Cancion } from "../Model/Cancion.mjs";

const router = Router();

router.get("/api/canciones", async (request, response) => {
  try {
    const canciones = await Cancion.find({}).populate("generoMusical").exec();
    response.status(200).send(canciones);
  } catch (error) {
    console.error("Algo salio mal en la peticion", error);
    response.status(400);
  }
});

router.post("/api/canciones", async (request, response)=>{
    const cancion = request.body;
    const nuevaCancion = new Cancion(cancion);

    try {
        const cancionGuardada = await nuevaCancion.save();
        return response.status(201).send(cancionGuardada)
    } catch (error) {
        console.error("No se pudo introducir una nueva cancion", error);
        response.status(400);
    }
})

export default router;