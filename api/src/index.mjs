import express from "express";
import cors from "cors";
import morgan from "morgan";
import session from "express-session";
import cookieParser from 'cookie-parser';
import rutasUsuarios from "./Routes/UsuarioRoutes.mjs";
import rutasTipoUsuario from "./Routes/TipoUsuarioRoutes.mjs";
import rutasMetodoPago from "./Routes/MetodoPagoRoutes.mjs";
import rutasCanciones from "./Routes/CancionRoutes.mjs";
import rutasGeneroMusical from "./Routes/GeneroMusicalRoutes.mjs";
import rutasLogin from "./Routes/LoginRoute.mjs";
import "./Data/data.mjs";

const app = express();

app.use(express.urlencoded({extended: true}))
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser())
app.use(
  session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000 * 60,
      secure: false
    }
  })
);

app.use((request, response, next)=> {
  console.log(request.session);
  console.log(request.sessionID)
  next()
})

app.use(rutasUsuarios);
app.use(rutasTipoUsuario);
app.use(rutasMetodoPago);
app.use(rutasCanciones);
app.use(rutasGeneroMusical);
app.use(rutasLogin);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
