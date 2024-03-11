import express  from "express";
import rutasUsuarios from "./Routes/UsuarioRoutes.mjs";
import "./Data/data.mjs";

const app = express();

app.use(rutasUsuarios);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})