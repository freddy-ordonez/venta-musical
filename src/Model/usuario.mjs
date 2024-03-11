import mongoose from "mongoose";

const usuarioEsquema = new mongoose.Schema({
  nombreCompleto: {
    type: mongoose.Schema.Types.String,
    minLength: 10,
    maxLength: 100,
    require: true
  },
  numeroIdentifacion: {
    type: mongoose.Schema.Types.String,
    minLength: 8,
    maxLength: 21,
    unique: true,
    require: true
  },
  genero: {
    type: mongoose.Schema.Types.String,
    enum: ["M","F"],
    default: "M",
    require: true
  },
  metodoPago: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "MetodoPago"
  }],
  contrasena: {
    type: mongoose.Schema.Types.String,
    minLength: 8,
    maxLength: 12,
    require: true
  },
  tipoPerfil: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TipoPerfil",
    require: true
  }
});

export const Usuario = mongoose.model("Usuario", usuarioEsquema);
