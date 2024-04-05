import express from "express";
import cors from "cors";
import morgan from 'morgan'
import rutasUsuarios from "./Routes/UsuarioRoutes.mjs";
import rutasTipoUsuario from "./Routes/TipoUsuarioRoutes.mjs";
import rutasMetodoPago from "./Routes/MetodoPagoRoutes.mjs";
import rutasCanciones from "./Routes/CancionRoutes.mjs";
import rutasGeneroMusical from "./Routes/GeneroMusicalRoutes.mjs";
import "./Data/data.mjs";

const app = express();

app.use(cors());
app.use(morgan("dev"))
app.use(express.json());

app.use(rutasUsuarios);
app.use(rutasTipoUsuario);
app.use(rutasMetodoPago);
app.use(rutasCanciones);
app.use(rutasGeneroMusical);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
