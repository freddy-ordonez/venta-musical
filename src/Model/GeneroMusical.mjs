import mongoose from "mongoose";

const generoMusicalEsquema = mongoose.Schema({
  descripcion: {
    type: mongoose.Schema.Types.String,
    minLength: 30,
    maxLength: 250,
    required: true,
  },
  canciones: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cancion",
    },
  ],
});

export const GeneroMusical = mongoose.model(
  "GeneroMusical",
  generoMusicalEsquema
);
