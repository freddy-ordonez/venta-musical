import mongoose from "mongoose";

const usuarioEsquema = new mongoose.Schema({
  nombre: {
    type: mongoose.Schema.Types.String,
    minLength: 10,
    maxLength: 100,
    required: true,
  },
  dni: {
    type: mongoose.Schema.Types.String,
    minLength: 8,
    maxLength: 21,
    unique: true,
    required: true,
  },
  correoElectronico: {
    type: mongoose.Schema.Types.String,
    unique: true,
    required: true
  },
  genero: {
    type: mongoose.Schema.Types.String,
    enum: ["M", "F"],
    required: true,
  },
  metodoPago: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MetodoPago",
  },
  contrasena: {
    type: mongoose.Schema.Types.String,
    minLength: 8,
    maxLength: 12,
    required: true,
  },
  tipoUsuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TipoUsuario",
  },
});

export const Usuario = mongoose.model("Usuario", usuarioEsquema);
