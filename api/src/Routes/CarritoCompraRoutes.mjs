import { Router} from "express";
import {obtenerCarrito, agregarCancionesCarrito, eliminarCancionCarrito, limpiarCarrito} from '../Controller/CarritoController.mjs'

const router = Router();

router.get("/api/carrito", obtenerCarrito);

router.post("/api/carrito", agregarCancionesCarrito);

router.delete("/api/carrito/:id", eliminarCancionCarrito);

router.get("/api/carrito/limpiar", limpiarCarrito);

export default router;
