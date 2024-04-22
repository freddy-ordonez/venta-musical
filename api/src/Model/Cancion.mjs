import mongoose from "mongoose";

const cancionEsquema = new mongoose.Schema({
  nombre: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true
  },
  precio: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  generoMusical: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "GeneroMusical",
    required: true,
  },
  imagen: {
    type: mongoose.Schema.Types.String,
    required: true
  }
});

export const Cancion = mongoose.model("Cancion", cancionEsquema);
