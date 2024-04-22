import axios from "axios";
import { create } from "zustand";

const SERVER = "http://localhost:4000";
const pathCarrito = "/api/carrito";
const pathFactura = '/api/facturas'

export const estadoCarritoCompras = create((set, get) => ({
  carrito: [],
  todosCancionesCarrito: async()=> {
    try {
      const { data } = await axios.get(`${SERVER}${pathCarrito}`)
      set({carrito: data})
    } catch (error) {
      console.error("Ocurrio un error al traer todas las canciones en el carrito");
    }
  },
  agregarCancioCarrito: async (cancion) => {
    try {
      const {carrito} = get()
      const cancionExistente = carrito.find(c => c._id === cancion._id)
      if(!cancionExistente){
        const { data, status } = await axios.post(
          `${SERVER}${pathCarrito}`,
          cancion
        );
        if (data) {
          const { carrito } = get();
          set({ carrito: [...carrito, data] });
        }
      }
    } catch (error) {
      console.error("Ocurrio un error al agregar al carrito", error);
    }
  },
  eliminarCancionCarrito: async (id) => {
    try {
      const {status} = await axios.delete(`${SERVER}${pathCarrito}/${id}`)
      const { carrito } = get();
      if(status === 200){
        set({ carrito: carrito.filter((c) => c._id !== id) });
      }
      return status;
    } catch (error) {
      console.error("Ocurrio un error al eliminar del carrito", error);
    }
  },
  agregarFactura: async (factura)=> {
    console.log(factura);
    try {
      const {data} = await axios.post(`${SERVER}${pathFactura}`, factura)
      if(data) {
        const {data} = await axios.get(`${SERVER}${pathCarrito}/limpiar`)
        set({carrito: data})
      }
      return data
    } catch (error) {
      
    }
  }
}));
