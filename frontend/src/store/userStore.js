import axios from "axios";
import { create } from "zustand";

const SERVER = "http://localhost:4000";
const usuarios = "/api/usuarios";
const metodoPagos = "/api/metodoPagos";
const logear = "/api/login";
const cerrarSesion = "/api/cerrar-sesion"

export const estadoUsuario = create((set, get) => ({
  usuarios: [],
  login: null,
  autenticarUsuario: async () => {
    try {
      const { data } = await axios.get(`${SERVER}${logear}`);
      const { login, usuario } = data;
      if (login) {
        set((state) => ({
          ...state,
          login: usuario,
        }));
      }
      return login;
    } catch (error) {
      console.error("Error al autenticarse", error);
    }
  },
  loginUsuario: async ({ correoElectronico, contrasena }) => {
    try {
      const { data } = await axios.post(`${SERVER}${logear}`, {
        correoElectronico,
        contrasena,
      });
      const { login, usuario } = data;
      console.log(usuario);
      if (login) {
        set((state) => ({
          ...state,
          login: usuario,
        }));
      }
      return login;
    } catch (error) {
      console.error("No se pudo logear", error);
    }
  },
  cerrarSesion: async ()=> {
    try {
      const { data } = await axios.get(`${SERVER}${cerrarSesion}`);
      const { logout } = data;
      if (logout) {
        set((state) => ({
          ...state,
          login: null,
        }));
      }
    } catch (error) {
      console.error("Error al autenticarse", error);
    }
  },
  todosUsuarios: async () => {
    try {
      const { data } = await axios.get(`${SERVER}${usuarios}`);
      set((state) => ({ ...state, usuarios: data }));
    } catch (error) {
      console.error("Error al traer todos los usuarios", error);
    }
  },
  agregarUsuario: async (usuario) => {
    try {
      const { numeroTarjeta, tipoPago } = usuario;
      const { todosUsuarios, agregarMetodoPago } = get();
      const { data } = await axios.post(`${SERVER}${usuarios}`, usuario);
      agregarMetodoPago({
        numeroTarjeta,
        tipoPago,
        usuario: data._id,
      });
      todosUsuarios();
    } catch (error) {
      console.error("Error al traer todos los usuarios", error);
    }
  },
  agregarMetodoPago: async (metodoPago) => {
    try {
      await axios.post(`${SERVER}${metodoPagos}`, metodoPago);
    } catch (error) {
      console.error("No se pudo agregar otro metodo pago", error);
    }
  },
}));
