import { Router } from "express";
import {obtenerTodosUsuarios, agregarUsuario, actualizarUsuario, eliminarUsuario} from "../Controller/UsuarioController.mjs";
import { usuarioValidacion } from "../Utils/Validation/UsuarioSchema.mjs";
const router = Router();

router.get("/api/usuarios", obtenerTodosUsuarios);

router.post("/api/usuarios", usuarioValidacion, agregarUsuario);

router.put("/api/usuarios/:id", actualizarUsuario);

router.delete("/api/usuarios/:id", eliminarUsuario);

export default router;
