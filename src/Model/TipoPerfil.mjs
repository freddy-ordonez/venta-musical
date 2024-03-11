import mongoose from "mongoose";

const tipoPerfilEsquema = new mongoose.Schema({
    tipoPerfill: {
        type: mongoose.Schema.Types.String,
        enum: ["ADMINISTRADOR", "USUARIO"],
        require: true
    },
    usuarios: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario"
    }]
});

export const TipoPerfil = mongoose.model("TipoPerfil", tipoPerfilEsquema);