import axios from "axios";
import { create } from "zustand";

const SERVER = "http://localhost:4000";
const usuarios = "/api/usuarios";
const metodoPagos = "/api/metodoPagos";
const logear = "/api/login";
const cerrarSesion = "/api/cerrar-sesion";
const tipoUsuarios = "/api/tipoUsuarios";

export const estadoUsuario = create((set, get) => ({
  usuarios: [],
  login: null,
  tiposUsuarios: [],
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
  loginAgregarCanciones: (canciones)=> {
    try {
      const {login} = get()
      const nuevasCanciones = [...login.canciones, ...canciones]
      set(state => ({login : {...state.login, canciones: nuevasCanciones}}))
    } catch (error) {
      console.error("Error al agregar las canciones al usuario", error);
    }
  },
  cerrarSesion: async () => {
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
      const {data} = await axios.post(`${SERVER}${usuarios}`, usuario)
      set(state => ({usuarios: [...state.usuarios, data]}))
    } catch (error) {
      console.error("Error al agregar todos los usuarios", error);
    }
  },
  actualizarPerfil: async (id, usuario) => {
    try {
      const { status } = await axios.put(`${SERVER}${usuarios}/${id}`, usuario);
      if (status === 200) {
        set((state) => ({ ...state, login: usuario }));
      }
      return status === 200;
    } catch (error) {
      console.error("Error al actualizar el usuario", error);
    }
  },
  actualizarUsuario: async (id, usuario) => {
    try {
      const { data } = await axios.put(
        `${SERVER}${usuarios}/${id}`,
        usuario
      );
      if (data) {
        const usuarioActualizado = {...usuario, contrasena: data.contrasena};
        set(state => ({usuarios: state.usuarios.map(u => u._id !== id ? u : usuarioActualizado)}))
      }
      return data;
    } catch (error) {
      console.error("Error al actualizar el usuario", error);
    }
  },
  eliminarUsuario: async (id) => {
    try {
      const { data } = await axios.delete(`${SERVER}${usuarios}/${id}`);
      if (data) {
        const { usuarios } = get();
        set({usuarios: usuarios.filter((u) => u._id !== id)});
      }
      return data
    } catch (error) {
      console.error("Error al eliminar el usuario", error);
    }
  },
  agregarMetodoPago: async (metodoPago) => {
    try {
      const {data} = await axios.post(`${SERVER}${metodoPagos}`, metodoPago);
      console.log(data);

    } catch (error) {
      console.error("No se pudo agregar otro metodo pago", error);
    }
  },
  todosTiposUsuarios: async () => {
    try {
      const { data } = await axios.get(`${SERVER}${tipoUsuarios}`);
      set((state) => ({ ...state, tipoUsuarios: data }));
    } catch (error) {
      console.error("Error al traer los tipos de usuarios", error);
    }
  },
}));
