import { Router, request, response } from "express";
import { TipoUsuario } from "../Model/TipoUsuario.mjs";

const router = Router();

router.get("/api/tipoUsuarios", async (request, response)=> {
    const tipoUsuarios = await TipoUsuario.find();

    return response.status(200).send(tipoUsuarios);
})

router.post("/api/tipoUsuarios", async (request, response)=> {
     const {body} = request;
    const nuevoTipoUsuario = new TipoUsuario(body);
     try{
        const guardarTipoUsuario = await nuevoTipoUsuario.save();
        return response.status(201).send(guardarTipoUsuario);
     }catch(err){
        return response.status(400).send({
            message: err
        })
     }
})

export default router;