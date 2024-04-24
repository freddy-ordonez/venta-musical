import { Router } from "express";
import { multerUpload } from "../Utils/midleware/multer.mjs";
import {
  obtenerCanciones,
  agregarCancion,
  eliminarCancion
} from "../Controller/CancionController.mjs";

const router = Router();

router.get("/api/canciones", obtenerCanciones);

router.post("/api/canciones", multerUpload.single("imagen"), agregarCancion);

router.delete("/api/canciones/:id", eliminarCancion);

export default router;
