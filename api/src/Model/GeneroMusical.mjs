import mongoose from "mongoose";

const generoMusicalEsquema = new mongoose.Schema({
  nombre: {
    type: mongoose.Schema.Types.String,
    minLength: 4,
    maxLength: 25,
    required: true
  },
  descripcion: {
    type: mongoose.Schema.Types.String,
    minLength: 30,
    maxLength: 250,
    required: true,
  }
});

export const GeneroMusical = mongoose.model(
  "GeneroMusical",
  generoMusicalEsquema
);
