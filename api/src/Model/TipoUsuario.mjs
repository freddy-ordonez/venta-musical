import mongoose from "mongoose";

const tipoUsuarioEsquema = new mongoose.Schema({
  tipoUsuario: {
    type: mongoose.Schema.Types.String,
    enum: ["ADMINISTRADOR", "USUARIO"],
    required: true,
  },
  usuarios: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
    },
  ],
});

export const TipoUsuario = mongoose.model("TipoUsuario", tipoUsuarioEsquema);

