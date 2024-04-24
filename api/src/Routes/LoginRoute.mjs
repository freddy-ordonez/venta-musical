import { Router } from "express";
import {autenticar, logearse, cerrarSesion} from '../Controller/LoginController.mjs'

const router = Router();

router.get("/api/login", autenticar);

router.post("/api/login", logearse);

router.get("/api/cerrar-sesion", cerrarSesion);

export default router;
