import { Router} from "express";
import {obtenerTipoUsuarios, agregarTipoUsuario} from '../Controller/TipoUsuarioController.mjs';

const router = Router();

router.get("/api/tipoUsuarios", obtenerTipoUsuarios)

router.post("/api/tipoUsuarios", agregarTipoUsuario)

export default router;