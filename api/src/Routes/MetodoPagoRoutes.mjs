import { Router } from "express";
import {obtenerMetodosPago, agregarMetodoPago} from '../Controller/MetodoPagoController.mjs';

const router = Router();

router.get("/api/metodoPagos", obtenerMetodosPago);

router.post("/api/metodoPagos", agregarMetodoPago);

export default router;


