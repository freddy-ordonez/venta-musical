import {Router, response} from 'express'
import { Factura } from '../Model/Factura.mjs'
import { Usuario } from '../Model/Usuario.mjs';

const router = Router()

router.get("/api/facturas",async (request, response)=> {
    try {
        const facturas = await Factura.find().populate('canciones').exec();
        return response.status(200).send(facturas);
    } catch (error) {
        console.error("Ocurrio un error al traer todas las facturas", error);
        return response.status(500);
    }
})

router.post("/api/facturas", async (request, response)=> {
    const {usuario, subTotalCompra, totalCompra, canciones} = request.body
    try {
        const nuevaFactura = new Factura({
            usuario,
            subTotalCompra,
            totalCompra,
            canciones
        })
        const agregarFactura = await nuevaFactura.save()
        const cancionesFactura = agregarFactura.canciones
        console.log(cancionesFactura);
        const encontrarUsuario = await Usuario.findById(usuario)
        cancionesFactura.forEach(c => {
            if(!encontrarUsuario.canciones.includes(c)){
                encontrarUsuario.canciones.push(c)
            }
        });
        await encontrarUsuario.save()
        return response.status(200).send(agregarFactura)
    } catch (error) {
        console.error("Ocurrio un error al agregar la factura", error);
        return response.status(500).send()
    }
})

export default router;