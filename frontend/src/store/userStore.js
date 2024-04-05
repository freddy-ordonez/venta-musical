import axios from 'axios';
import {create} from 'zustand'
import { redirect } from 'react-router-dom';

const SERVER = "http://localhost:4000";
const usuarios = "/api/usuarios";
const metodoPagos = "/api/metodoPagos";

export const estadoUsuario = create((set, get)=> ({
    usuarios: [],
    todosUsuarios: async ()=> {
        try {
            const {data} = await axios.get(`${SERVER}${usuarios}`)
            set(state => ({...state, usuarios: data}))
        } catch (error) {
            console.error("Error al traer todos los usuarios", error);
        }
    },
    agregarUsuario: async (usuario)=> {
        try {
            const {numeroTarjeta, tipoPago} = usuario;
            const {todosUsuarios, agregarMetodoPago} = get()
            console.log(usuario);
            const {data} = await axios.post(`${SERVER}${usuarios}`, usuario);
            agregarMetodoPago({
                numeroTarjeta,
                tipoPago,
                usuario : data._id
            })
            todosUsuarios()
            return redirect('/login')
            
        } catch (error) {
            console.error("Error al traer todos los usuarios", error);
        }
    },
    agregarMetodoPago: async (metodoPago)=> {
        try {
            await axios.post(`${SERVER}${metodoPagos}`, metodoPago)
        } catch (error) {
            console.error("No se pudo agregar otro metodo pago",error);
        }
    } 
}))