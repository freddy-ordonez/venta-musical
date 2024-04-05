import axios from "axios";
import { create } from "zustand";

const SERVER = "http://localhost:4000";
const path = "/api/genero-musicales";

export const estadoGeneroMusical = create((set, get) => ({
  generos: [],
  todosGeneros: async () => {
    try {
      const { data } = await axios.get(`${SERVER}${path}`);
      set((state) => ({ ...state, generos: data }));
    } catch (error) {
      console.error("Error al solicitar los generos musicales");
    }
  },
  agregarGenero: async (genero) => {
    try {
      const { generos } = get();
      const generoExiste = generos.find((g) => g.nombre.toLowerCase() === genero.nombre.toLowerCase());
      if (generoExiste) return { mensaje: "Genero ya existe", tipo: "danger" };
      const { data } = await axios.post(`${SERVER}${path}`, genero);
      set((state) => ({ ...state, generos: [...state.generos, data] }));
      return { mensaje: "Genero agregado exitosamente", tipo: "success" };
    } catch (error) {
      console.error("Error al agregar un genero");
    }
  },
  actualizarGenero: async (id, genero) => {
    try {
      const { data } = await axios.put(`${SERVER}${path}/${id}`, genero);
      set((state) => ({
        ...state,
        generos: state.generos.map((g) => (g._id !== id ? g : data)),
      }));
    } catch (error) {
      console.error("Error al actualizar el genero", error);
    }
  },
  eliminarGenero: async (id) => {
    try {
      const respuesta = await axios.delete(`${SERVER}${path}/${id}`);
      const { status } = respuesta;
      if (status === 200) {
        set((state) => ({
          ...state,
          generos: state.generos.filter((g) => g._id !== id),
        }));
      }
    } catch (error) {
      console.error("Error al eliminar un genero");
    }
  },
}));
