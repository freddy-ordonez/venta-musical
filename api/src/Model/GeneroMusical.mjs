import mongoose from "mongoose";

const generoMusicalEsquema = new mongoose.Schema({
  nombre: {
    type: mongoose.Schema.Types.String,
    maxLength: 25,
    required: true,
    unique: true
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
