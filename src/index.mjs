import express  from "express";
import routesUsuarios from "./Routes/usuarios.mjs";

const app = express();

app.use(routesUsuarios);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})