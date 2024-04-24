import { TipoUsuario } from '../Model/TipoUsuario.mjs'
import {Usuario} from '../Model/Usuario.mjs'
import {MetodoPago} from '../Model/MetodoPago.mjs'
import { hash } from 'bcrypt'

export const agregarDatosArranque = async ()=> {
    if(!(await TipoUsuario.find()).length > 0){
        const usuarioTipoUsuario = new TipoUsuario({
            tipoUsuario : "USUARIO"
        })
        const usuarioTipoAdministrador = new TipoUsuario({
            tipoUsuario : "ADMINISTRADOR"
        })

        const metodoPago = new MetodoPago({
            numeroTarjeta: "0000000000000000",
            tipoPago:"VISA",
        })


        const agregarMetodoPago = await metodoPago.save()
        const agregarTipoAdministrador = await usuarioTipoAdministrador.save()
        await usuarioTipoUsuario.save()

        const usuarioAdministrador = new Usuario({
            nombre: "administrador",
            dni: "01895015",
            correoElectronico: "administrador@ventamusical.com",
            contrasena: await hash("administrador", 10),
            genero: "M",
            tipoUsuario: agregarTipoAdministrador._id,
            metodoPago: agregarMetodoPago._id
        })

        const agregarUsuario = await usuarioAdministrador.save()
        console.log("Se agregaron los datos");
    }
}