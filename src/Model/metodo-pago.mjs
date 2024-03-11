import mongoose from "mongoose";

const tipoPerfilEsquema = new mongoose.Schema({
    tipoPerfill: {
        type: mongoose.Schema.Types.String,
        enum: ["ADMINISTRADOR", "USUARIO"],
        require: true
    }
});

export const TipoPerfil = mongoose.model("TipoPerfil", tipoPerfilEsquema);