import {Router, request, response} from 'express'
import {GeneroMusical} from '../Model/GeneroMusical.mjs'

const router = Router();

router.get("/api/genero-musicales", async (request, response)=> {
    try {
        const generos = await GeneroMusical.find({});
        return response.status(200).send(generos);
    } catch (error) {
        console.error("Error al traer todos los generos musicales");
        return response.status(400);
    }
})

router.post("/api/genero-musicales", async (request, response)=>{
    const generoMusical = request.body;
    const nuevoGeneroMusical = new GeneroMusical(generoMusical);

    try {
        const generoGuardado = await nuevoGeneroMusical.save();
        return response.status(201).send(generoGuardado);
    } catch (error) {
        console.error("Error al agragar un nuevo genero musical", error);
        response.status(400);
    }
})

export default router;