import {Router} from 'express'
import {obtenerFacturas, agregarFactura} from '../Controller/FacturaController.mjs';

const router = Router()

router.get("/api/facturas", obtenerFacturas)

router.post("/api/facturas", agregarFactura)

export default router;