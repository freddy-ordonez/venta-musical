import express from "express";
import cors from "cors";
import morgan from "morgan";
import session from "express-session";
import cookieParser from "cookie-parser";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import rutasUsuarios from "./Routes/UsuarioRoutes.mjs";
import rutasTipoUsuario from "./Routes/TipoUsuarioRoutes.mjs";
import rutasMetodoPago from "./Routes/MetodoPagoRoutes.mjs";
import rutasCanciones from "./Routes/CancionRoutes.mjs";
import rutasGeneroMusical from "./Routes/GeneroMusicalRoutes.mjs";
import rutasLogin from "./Routes/LoginRoute.mjs";
import rutasCarritoCompra from "./Routes/CarritoCompraRoutes.mjs";
import rutasFactura from "./Routes/FacturaRoutes.mjs";

import "./Data/data.mjs";
import { multerUpload } from "./Utils/midleware/multer.mjs";

const app = express();

const CURRENT_DIR = dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000 * 60,
      secure: false,
    },
  })
);

app.use((request, response, next) => {
  next();
});
app.post("/upload", multerUpload.single("file"), (req, res) => {
  console.log(req.file);

  res.sendStatus(200);
});

app.use("/public", express.static(join(CURRENT_DIR, "/uploads")));

app.use(rutasUsuarios);
app.use(rutasTipoUsuario);
app.use(rutasMetodoPago);
app.use(rutasCanciones);
app.use(rutasGeneroMusical);
app.use(rutasLogin);
app.use(rutasCarritoCompra);
app.use(rutasFactura);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
