import express  from "express";
import rutasUsuarios from "./Routes/UsuarioRoutes.mjs";
import rutasTipoUsuario from "./Routes/TipoUsuarioRoutes.mjs"
import rutasMetodoPago from "./Routes/MetodoPagoRoutes.mjs"
import "./Data/data.mjs";

const app = express();

app.use(express.json())

app.use(rutasUsuarios);
app.use(rutasTipoUsuario);
app.use(rutasMetodoPago);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})