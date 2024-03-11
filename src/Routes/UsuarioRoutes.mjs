import { Router, request, response } from "express";
import {usuarios} from "../Utils/usuarios-array.mjs"
import usuariosController from "../Controller/UsuarioController.mjs"

const router= Router();

router.get('/api/usuarios', usuariosController.obtenerTodosUsuarios);


export default router;
