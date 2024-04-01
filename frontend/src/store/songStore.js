import {create} from 'zustand';
import axios from 'axios';

const SERVER = "http://localhost:4000"
const obtenerCanciones = "/api/canciones"
const agregarCancion = "/api/canciones"

export const estadoCancion = create((set) => ({
    canciones: [],
    todasCanciones: async () => {
        try {

            const respuesta = await axios.get(`${SERVER}${obtenerCanciones}`)
            set(state => ({...state, canciones: respuesta.data}));
        } catch (error) {
            console.error("Error al hacer la consulta de las canciones", error);
        }
    },
    agregarCancion: async (cancion) => {
        try {
            const respuesta = await axios.post(`${SERVER}${agregarCancion}`)
            set((state) => ({...state, canciones: [state.canciones, cancion]}))
        } catch (error) {
            console.error("Error al agregar una cancion", error);
        }
    }
}));
