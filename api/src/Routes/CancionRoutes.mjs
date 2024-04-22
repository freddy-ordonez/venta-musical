import { Router, request } from "express";
import { Cancion } from "../Model/Cancion.mjs";
import { multerUpload } from "../Utils/midleware/multer.mjs";

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

router.post(
  "/api/canciones",
  multerUpload.single("imagen"),
  async (request, response) => {
    const { generoMusical, precio, nombre } = request.body;
    console.log(request.file);
    const { filename } = request.file;
    const nuevaCancion = new Cancion({
      imagen: filename,
      generoMusical,
      precio,
      nombre,
    });

    try {
      const cancionGuardada = await nuevaCancion.save();
      const cancionPopulate = await cancionGuardada.populate("generoMusical")
      return response.status(201).send(cancionPopulate);
    } catch (error) {
      console.error("No se pudo introducir una nueva cancion", error);
      response.status(500);
    }
  }
);

router.delete("/api/canciones/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const cancionElimianda = await Cancion.findByIdAndDelete(id);
    if (!cancionElimianda)
      return response.status(404).send({ message: "Cancion no encontrado" });
    return response.status(200).send({ message: "Cancion eliminada" });
  } catch (error) {
    console.error("No se pudo eliminar la cancion", error);
    return response.status(500);
  }
});

export default router;
