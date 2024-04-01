import axios from 'axios'
import {create} from 'zustand'

const SERVER = "http://localhost:4000"
const obtenerGeneros = "/api/genero-musicales"
const agregarGenero = "/api/genero-musicales"

export const estadoGeneroMusical = create((set)=> ({
    generos: [],
    todosGeneros: async ()=> {
        try {
            const respuesta = await axios.get(`${SERVER}${obtenerGeneros}`);
            set(state => ({...state, generos: respuesta.data })) 
        } catch (error) {
            console.error("Error al solicitar los generos musicales");
        }
    }
}))