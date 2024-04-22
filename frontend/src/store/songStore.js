import { create } from "zustand";
import axios from "axios";

const SERVER = "http://localhost:4000";
const pathCanciones = "/api/canciones";

export const estadoCancion = create((set, get) => ({
  canciones: [],
  todasCanciones: async () => {
    try {
      const { data } = await axios.get(`${SERVER}${pathCanciones}`);
      set((state) => ({ ...state, canciones: data }));
    } catch (error) {
      console.error("Error al hacer la consulta de las canciones", error);
    }
  },
  agregarCancion: async (cancion) => {
    try {
      const { data } = await axios.post(`${SERVER}${pathCanciones}`, cancion);
      set((state) => ({ ...state, canciones: [...state.canciones, data] }));
      return data;
    } catch (error) {
      console.error("Error al agregar una cancion", error);
    }
  },
  eliminarCancionId: async (id) => {
    try {
      const {canciones} = get()
      const actualizarCanciones = canciones.filter(c => c._id !== id)
      const respuesta = await axios.delete(`${SERVER}${pathCanciones}/${id}`);
      const {status} = respuesta
      console.log(status);
      if (status === 200) {
        set(state => ({...state, canciones: actualizarCanciones}))
      }
      console.log(canciones);
      return status;
    } catch (error) {
      console.error("Error al hacer la consulta de las canciones", error);
    }
  },
}));
