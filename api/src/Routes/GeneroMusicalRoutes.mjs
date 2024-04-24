import { Router} from "express";
import {obtenerGenerosMusicales, agregarGeneroMusical, actualizarGeneroMusical, eliminarGeneroMusical} from '../Controller/GeneroMusicalController.mjs'

const router = Router();

router.get("/api/genero-musicales", obtenerGenerosMusicales);

router.post("/api/genero-musicales", agregarGeneroMusical);

router.put("/api/genero-musicales/:id", actualizarGeneroMusical);

router.delete("/api/genero-musicales/:id", eliminarGeneroMusical);

export default router;
