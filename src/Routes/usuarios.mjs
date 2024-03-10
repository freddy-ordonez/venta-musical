import { Router, request, response } from "express";
import {usuarios} from "../Utils/usuarios-array.mjs"
import usuariosController from "../Controller/usuarios-controller.mjs"

const routes = Router();

routes.get('/api/usuarios', usuariosController.obtenerTodosUsuarios);

export default routes;
