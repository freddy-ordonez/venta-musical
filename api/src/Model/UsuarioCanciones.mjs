import mongoose from "mongoose";

const usuarioCancionesEsquema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  factura: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Factura",
    required: true,
  },
  cancion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cancion",
    required: true,
  },
});

export const UsuarioCancion = mongoose.model(
  "UsuarioCancion",
  usuarioCancionesEsquema
);
