import { Router, request, response } from "express";
import {usuarios} from "../Utils/usuarios-array.mjs"
import usuariosController from "../Controller/UsuarioController.mjs"
import { Usuario } from "../Model/Usuario.mjs";
import { TipoUsuario } from "../Model/TipoUsuario.mjs";

const router= Router();

router.get('/api/usuarios', usuariosController.obtenerTodosUsuarios);
router.post('/api/usuarios',async (request, response)=> {

    const {body} = request;
    const nuevoUsuario = new Usuario(body);
    const encontrarTipoUsuario = await TipoUsuario.findById(nuevoUsuario.tipoUsuario);

    try{
        const guardarUsuario = await nuevoUsuario.save();
        encontrarTipoUsuario.usuarios.push(guardarUsuario._id);
        await encontrarTipoUsuario.save();
        return response.status(201).send(guardarUsuario);
    }catch(err){
        console.log(`Error: ${err}`);
        return response.status(400).send({
            message: err
        })
    }
})


export default router;
